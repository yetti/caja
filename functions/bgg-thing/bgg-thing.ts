import {
  Handler,
  HandlerEvent,
  HandlerContext,
  HandlerResponse,
} from '@netlify/functions'
import bggXmlApiClient from 'bgg-xml-api-client'

interface BggItemParams {
  id?: string
}

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const { id } = event.queryStringParameters as BggItemParams

  let response: HandlerResponse = {
    statusCode: 500,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  await bggXmlApiClient
    .get('thing', {
      id: id,
    })
    .then((res) => {
      response = {
        ...response,
        statusCode: 200,
        body: JSON.stringify(res.data),
      }
    })
    .catch((error) => {
      if (error.message.includes('Max retries reached')) {
        return {
          ...response,
          statusCode: 429,
          body: JSON.stringify({
            error: {
              code: 429,
              message: error.message,
            },
          }),
        }
      } else {
        return {
          ...response,
          statusCode: 500,
          body: JSON.stringify({
            error: {
              code: 500,
              message: `An unexpected error has occurred: ${error.message}`,
            },
          }),
        }
      }
    })

  return response
}
