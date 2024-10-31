import Spinner from "../_components/Spinner";

function loading() {
  return (
    <div className="grid items-center justify-center">
      <p>Loading Cabins ....</p>
      <Spinner />
    </div>
  );
}

export default loading;
