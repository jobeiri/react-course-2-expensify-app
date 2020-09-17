import moment from "moment";

const filters = {
  text: "",
  sortDate: "date",
  startDate: undefined,
  endDate: undefined,
};

const altFilters = {
  text: "bills",
  sortDate: "amount",
  startDate: moment(0),
  endDate: moment(0).add(3, "days"),
};

export { filters, altFilters };
