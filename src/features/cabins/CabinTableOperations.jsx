import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy.jsx";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          {
            value: "all",
            label: "All",
          },
          {
            value: "with-discount",
            label: "With discount",
          },
          {
            value: "no-discount",
            label: "No discount",
          },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "sort by name (A-Z)" },
          { value: "name-desc", label: "sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "sort by price (low first)" },
          { value: "regularPrice-desc", label: "sort by price (hight first)" },
          { value: "maxCapacity-asc", label: "sort by capacity (low first)" },
          {
            value: "maxCapacity-desc",
            label: "sort by capacity (hight first)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
