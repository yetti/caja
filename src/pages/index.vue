<template>
  <!-- Pinned games -->
  <PinnedGames></PinnedGames>

  <!-- Update history table (only on smallest breakpoint) -->
  <LatestUpdatesTableMobile></LatestUpdatesTableMobile>

  <!-- Update history table (small breakpoint and up) -->
  <LatestUpdatesTableDesktop></LatestUpdatesTableDesktop>
</template>

<route lang="yaml">
meta:
  title: 'Home'
  layout: home
</route>
