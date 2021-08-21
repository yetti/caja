import { Handler } from '@netlify/functions'
import bggXmlApiClient from 'bgg-xml-api-client'

export const handler: Handler = async (event, context) => {
  const { name = '' } = event.queryStringParameters

  if (name === '') {
    return formatMessage(400, {}, ['Enter a name to search'])
  }

  const { data } = await bggXmlApiClient.get('search', {
    query: name,
    type: ['boardgame', 'boardgameaccessory', 'boardgameexpansion'],
  })

  if (data) {
    return formatMessage(200, data, [])
  }

  return formatMessage(400, {}, ['Enter a name to search'])
}

const formatMessage = async (
  code: number,
  payload: any = {},
  errors: string[] = []
) => {
  return {
    statusCode: code,
    body: JSON.stringify({
      errors: errors,
      ...payload,
    }),
  }
}
