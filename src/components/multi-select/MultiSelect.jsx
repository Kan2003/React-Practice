import React, { useEffect, useState } from "react";
import Pills from "./Pills";
import { useRef } from "react";
import { debounce } from "lodash";

const MultiSelect = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [selectedUserSet, setSelectedUserSet] = useState(new Set());

  useEffect(() => {
    const fetchUser = () => {
      if (value.trim() === "") {
        setSuggestion([]);
        return;
      }
      fetch(`https://dummyjson.com/users/search?q=${value}`)
        .then((res) => res.json())
        .then((data) => setSuggestion(data.users)) // Fetching the correct users array
        .catch((err) => console.log(err));
    };

    fetchUser();
  }, [value]);

  const handleUser = (user) => {
    setSelectedUser([...selectedUser, user]);

    setSelectedUserSet(new Set([...selectedUserSet, user.email]));
    setValue("");
    setSuggestion([]);
    inputRef.current.focus();
  };

  const handleRemoveUser = (user) => {

    const updatedYSer = selectedUser.filter(
      (selectedUser) => selectedUser.id !== user.id
    );
    setSelectedUser(updatedYSer);
    const updatedEmail = new Set(selectedUserSet);
    updatedEmail.delete(user.email);
    setSelectedUserSet(updatedEmail);
  };


  return (
    <div className="flex relative w-full h-screen">
      <div className="w-[100%] h-[20px] items-center flex  gap-4 p-3 border-zinc-400 border-[1px] rounded-md">
        <div className="flex items-center gap-2">
          {selectedUser.map((user) => {
            return (
              <Pills
                key={user.email}
                image={user.image}
                text={`${user.firstName} ${user.lastName}`}
                onClick={() => handleRemoveUser(user)}
              />
            );
          })}
        </div>
        <input
          className="border-none outline-none h-[20px] p-[5px]"
          ref={inputRef}
          type="text"
          placeholder="enter name"
          value={value}
          onChange={(e) => setValue(e.target.value)}

        />

        <ul className="w-[30vw] h-[50vh] overflow-y-auto absolute left-0 top-8">
          {suggestion.map((user) => {
            return !selectedUserSet.has(user.email) ? (
              <li
                onClick={() => handleUser(user)}
                className="flex items-center py-2 justify-around hover:bg-zinc-400"
                key={user.email}
              >
                <img
                  className="w-[20px] h-[20px] rounded-full"
                  src={user.image}
                  alt={user.firstName}
                />
                {user.firstName} {user.lastName}
              </li>
            ) : (
              <></>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MultiSelect;
