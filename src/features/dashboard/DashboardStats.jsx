import { HiChartBar, HiOutlineBriefcase } from "react-icons/hi";
import Stat from "./Stat";
import { HiCalendarDays, HiOutlineBanknotes } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function DashboardStats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1.
  const numBookings = bookings?.length;

  // 2.
  const sales = bookings?.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3.
  const checkins = confirmedStays.length;
  //   4. occupation
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);
  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Bookings"
        color="yellow"
        icon={<HiChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default DashboardStats;
