import React from "react";

export const Task = ({title, status}) => {
    console.log(title, status)
    return (
      <>
       <div className="task">
            <table>
                <tbody>
                    <tr>
                        <td>{title}</td>
                        <td>{status}</td>
                    </tr>
                </tbody>
              </table>
        </div>
      </>
    );
  };
  
  export default Task