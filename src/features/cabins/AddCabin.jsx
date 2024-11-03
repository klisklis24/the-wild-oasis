import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [showFrom, setShowForm] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setShowForm((show) => !show)}>Add Cabin</Button>
//       {showFrom && (
//         <Modal onClose={() => setShowForm(false)}>
//           <CreateCabinForm onCloseModal={() => setShowForm(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
