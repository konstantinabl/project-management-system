import React from "react";

export const Project = ({name}) => {
    console.log(name)
    if (!name) return <div />;
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <h5>{name}</h5>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
