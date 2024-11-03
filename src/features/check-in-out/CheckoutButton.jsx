import Button from "../../ui/Button";
import { useCheckout } from "../check-in-out/useCheckout";

function CheckoutButton({ bookingId }) {
  const { isCheckinOut, checkout } = useCheckout();

  return (
    <Button
      variation="primary"
      size="small"
      disabled={isCheckinOut}
      onClick={() => checkout(bookingId)}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
