import my_portuguese_certificate from "../../../images/certificates/my-portuguese-certificate.jpg";
import classes from "./Hobbies.module.css";

const Sheet = () => {
  return (
    <div>
      <h3 className="mb-3">Learning Languages</h3>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th>1</th>
            <td>English</td>
            <td>Fluent</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Tagalog</td>
            <td>Native</td>
          </tr>
          <tr>
            <th>3</th>
            <td>
              <a
                href={my_portuguese_certificate}
                target="_blank"
                rel="noreferrer"
              >
                Portuguese
              </a>
            </td>
            <td>Intermediate</td>
          </tr>
          <tr>
            <th>4</th>
            <td>Spanish</td>
            <td>Beginner</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Hobbies = () => {
  return (
    <div className={classes.container}>
      <h1 id="hobbies">Hobbies</h1>
      <div className="row container">
        <Sheet />
      </div>
    </div>
  );
};

export default Hobbies;
