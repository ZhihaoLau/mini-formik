import React from "react";
import "./App.css";

class MiniFormMik extends React.Component {
  state = {
    values: {
      isGoing: true,
      numberOfGuests: "1"
    }
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(preState => ({
      values: {
        ...preState.values,
        [name]: value
      }
    }));
  };

  render() {
    return (
      <>
        {this.props.children({
          values: this.state.values,
          handleInputChange: this.handleInputChange
        })}
      </>
    );
  }
}

class Reservation extends React.Component {
  render() {
    return (
      <MiniFormMik>
        {({ values, handleInputChange }) => {
          console.log("val", values);

          return (
            <>
              <form>
                <label>
                  Is going:
                  <input
                    name="isGoing"
                    type="checkbox"
                    checked={values.isGoing}
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                <label>
                  Number of guests:
                  <input
                    name="numberOfGuests"
                    type="number"
                    value={values.numberOfGuests}
                    onChange={handleInputChange}
                  />
                </label>
              </form>

              <pre>{JSON.stringify(values, null, 2)}</pre>
            </>
          );
        }}
      </MiniFormMik>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Reservation />
    </div>
  );
}

export default App;
