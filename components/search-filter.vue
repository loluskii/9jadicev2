
<template>
  <div>
    <div
      class="input-group flex-fill pl-3 mx-2 searchBar"
      id="searchBar"
      style="display: none"
    >
      <div class="input-group-prepend">
        <span class="mt-2 small"><i class="fa fa-search text-white"></i></span>
      </div>
      <form
        style="display: contents"
      >
        <input
          class="form-control form-control-sm rounded-pill specialSearchInput bg-transparent border-secondary specialSearchInput"
          style="margin-left: -25px"
          id="specialSearchInput"
          placeholder="Search"
          name="search"
        />
      </form>
    </div>
    <button
      type="button"
      id="filterButton"
      class="btn btn-sm btn-block px-3 bg-sv-primary createTournamentText cursorPointer mx-2 filterButton"
      data-toggle="modal"
      data-target="#publicFilterModal"
    >
      <span class="small align-items-center">
        <i class="fa fa-filter mr-1"></i>
        <span>Filter</span>
      </span>
    </button>
    <button
      type="button"
      id="showSearchBarButton"

      class="btn btn-sm px-3 bg-sv-primary createTournamentText cursorPointer showSearchBarButton"
    >
      <span class="small"><i class="fa fa-search"></i></span>
    </button>
    <button
      type="button"
      id="closeSearchBarButton"

      class="btn btn-sm px-3 btn-danger cursorPointer closeSearchBarButton"
      style="display: none"
    >
      <span class="text-white small"><i class="fa fa-close"></i></span>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
