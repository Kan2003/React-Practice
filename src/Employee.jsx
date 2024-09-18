import React, { useState } from "react";
const Employee = () => {

    // complete a task where we have to show the employee list and details , and delete functionality when someone click on delete button and also add employee functionality to add 
  const [Employees, setEmployees] = useState([
    {
      id: 1,
      employee_name: "Ethelbert",
      salary: "5746",
      age: "22-050-9651",
      image: "http://dummyimage.com/241x100.png/dddddd/000000",
    },
    {
      id: 2,
      employee_name: "Joshuah",
      salary: "6",
      age: "66-157-4889",
      image: "http://dummyimage.com/227x100.png/5fa2dd/ffffff",
    },
    {
      id: 3,
      employee_name: "Derwin",
      salary: "81557",
      age: "76-166-6755",
      image: "http://dummyimage.com/138x100.png/dddddd/000000",
    },
    {
      id: 4,
      employee_name: "Bertrando",
      salary: "57297",
      age: "23-084-3136",
      image: "http://dummyimage.com/205x100.png/dddddd/000000",
    },
    {
      id: 5,
      employee_name: "Hodge",
      salary: "0443",
      age: "75-732-4931",
      image: "http://dummyimage.com/169x100.png/ff4444/ffffff",
    },
    {
      id: 6,
      employee_name: "Ransell",
      salary: "187",
      age: "23-950-6893",
      image: "http://dummyimage.com/126x100.png/ff4444/ffffff",
    },
    {
      id: 7,
      employee_name: "Timofei",
      salary: "44",
      age: "78-710-2698",
      image: "http://dummyimage.com/236x100.png/cc0000/ffffff",
    },
    {
      id: 8,
      employee_name: "Carleton",
      salary: "9181",
      age: "96-611-5832",
      image: "http://dummyimage.com/109x100.png/dddddd/000000",
    },
    {
      id: 9,
      employee_name: "Marlon",
      salary: "14",
      age: "01-381-5644",
      image: "http://dummyimage.com/233x100.png/ff4444/ffffff",
    },
    {
      id: 10,
      employee_name: "Alberto",
      salary: "41",
      age: "59-629-3668",
      image: "http://dummyimage.com/163x100.png/ff4444/ffffff",
    },
    {
      id: 11,
      employee_name: "Karoly",
      salary: "6",
      age: "70-240-2073",
      image: "http://dummyimage.com/227x100.png/cc0000/ffffff",
    },
    {
      id: 12,
      employee_name: "Tallie",
      salary: "45193",
      age: "63-068-6856",
      image: "http://dummyimage.com/211x100.png/5fa2dd/ffffff",
    },
    {
      id: 13,
      employee_name: "Benny",
      salary: "8",
      age: "38-177-9231",
      image: "http://dummyimage.com/198x100.png/cc0000/ffffff",
    },
    {
      id: 14,
      employee_name: "Dunn",
      salary: "37",
      age: "66-569-2435",
      image: "http://dummyimage.com/211x100.png/5fa2dd/ffffff",
    },
    {
      id: 15,
      employee_name: "Yulma",
      salary: "6",
      age: "07-083-5023",
      image: "http://dummyimage.com/138x100.png/dddddd/000000",
    },
    {
      id: 16,
      employee_name: "Jason",
      salary: "03243",
      age: "89-599-3358",
      image: "http://dummyimage.com/191x100.png/5fa2dd/ffffff",
    },
    {
      id: 17,
      employee_name: "Irwinn",
      salary: "84930",
      age: "54-128-2090",
      image: "http://dummyimage.com/121x100.png/ff4444/ffffff",
    },
    {
      id: 18,
      employee_name: "Benito",
      salary: "7114",
      age: "28-225-5112",
      image: "http://dummyimage.com/107x100.png/dddddd/000000",
    },
    {
      id: 19,
      employee_name: "Federico",
      salary: "312",
      age: "86-332-5228",
      image: "http://dummyimage.com/240x100.png/5fa2dd/ffffff",
    },
    {
      id: 20,
      employee_name: "Andros",
      salary: "09650",
      age: "29-685-9381",
      image: "http://dummyimage.com/121x100.png/5fa2dd/ffffff",
    },
  ]);

  const [shoewEmp, setShowEmp] = useState(0);


  const showEmployee = (id) => {
    setShowEmp(id);
  };

  const handleDelete = (id) => {
    console.log("file is deleting");
    const updatedEmployee = Employees.filter((e) => e.id != id);
    setEmployees(updatedEmployee);
  };
  const filterEmployees = Employees.filter((e) => e.id === shoewEmp);
    //   add employee
    const [addItem, setAddItem] = useState(false);
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
    const [age, setAge] = useState("");
    const [img, setImg] = useState("");

    const handleAdd = () => {
        const newEmployee = {
          id: Employees.length + 1,
          employee_name: name,
          salary: salary,
          age: age,
          image: img,
        };
        setEmployees([...Employees, newEmployee]);
        setAddItem(false);
    };

    return (
      <>
        <div className="w-full bg-zinc-600 text-white h-screen py-5">
          <div className="flex items-center justify-around">
            <h2 className="text-center text-2xl font-bold ">
              Employee Management
            </h2>
            <button
              className="p-3 bg-white text-black rounded-md"
              onClick={() => setAddItem(true)}
            >
              Add Item
            </button>
          </div>
          <div className="w-full flex items-center justify-between px-[50px] py-[100px]">
            <div className="employees-list w-[40vw]  bg-zinc-200 text-black h-[50vh] overflow-y-auto ">
              <h1 className="text-center py-[10px]">Employees List</h1>
              <div className="flex flex-col gap-3">
                {Employees.map((emp, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => showEmployee(emp.id)}
                      className="w-full py-[10px] px-[15px] flex items-center justify-between bg-zinc-500"
                    >
                      <h3>{emp.id}</h3>
                      <h3>{emp.employee_name}</h3>
                      <button onClick={() => handleDelete(emp.id)}>
                        Delete
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-[50vw] bg-zinc-200 h-[50vh] text-black">
              <h1 className="text-center py-[10px]">Employees Details</h1>
              {filterEmployees.map((emp, index) => {
                return (
                  <div
                    key={index}
                    className="flex w-full h-full flex-col items-center"
                  >
                    <div className="w-[250px] h-[250px] bg-zinc-900 overflow-hidden rounded-full my-5">
                      <img
                        className="w-full h-full object-cover "
                        src={emp.image}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <h3>{emp.id}</h3>
                      <h3>{emp.employee_name}</h3>
                      <h3>{emp.salary}</h3>
                      <h3>{emp.age}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
       { addItem && <div className="fixed top-0 left-0 w-full h-screen bg-zinc-500 z-10 flex items-center justify-center">
          <div className="w-[40vw] h-[50vh] bg-zinc-400 ">
            <h2 className="text-center py-3 ">Enter The Employees Details</h2>
            <div className="flex flex-col items-center gap-3">
              <input
                type="text"
                value={name}
                placeholder="enter the name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="enter the salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
              <input
                type="text"
                placeholder="enter the age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <input
                type="text"
                placeholder="enter img url"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
              <button type="submit" onClick={() => handleAdd()}>Submit</button>
            </div>
          </div>
        </div>}
      </>
    );
  };

export default Employee;
