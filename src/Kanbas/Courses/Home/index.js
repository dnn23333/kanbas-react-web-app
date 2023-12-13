import Modules from "../Modules";
import Status from "./Status";

function Home() {
  return (
      <div className="row ms-5">
        <div className="col-8">
          <Modules />
        </div>

        <div className="col d-none d-lg-block ms-4 me-5">
          <Status />
        </div>
      </div>
  );
}
export default Home;

