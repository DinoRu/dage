import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    user_id: "",
    username: "",
    first_name: "",
    last_name: "",
    middle_name: "",
    department: "",
    role: "",
    password: "",
  });

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h2>Добавить</h2>
        <br />
        <form>
          <div className="mb-3">
            <label htmlFor="user_id">ID</label>
            <input
              type="text"
              name="user_id"
              placeholder="ID"
              className="form-control"
              onChange={(e) => setUser({ ...user, user_id: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username">Имя ползователь</label>
            <input
              type="text"
              name="username"
              placeholder="Имя ползователь"
              className="form-control"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="firstName">Фамилия</label>
            <input
              type="text"
              name="firstName"
              placeholder="Фамилия"
              className="form-control"
              onChange={(e) => setUser({ ...user, first_name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName">Имя</label>
            <input
              type="text"
              name="lastName"
              placeholder="Имя"
              className="form-control"
              onChange={(e) => setUser({ ...user, last_name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="middleName">Отчество</label>
            <input
              type="text"
              name="middleName"
              placeholder="Отчество"
              className="form-control"
              onChange={(e) =>
                setUser({ ...user, middle_name: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="department">Отдел</label>
            <input
              type="text"
              name="department"
              placeholder="Отдел"
              className="form-control"
              onChange={(e) => setUser({ ...user, department: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="role">Должность</label>
            <input
              type="text"
              name="role"
              placeholder="Должность"
              className="form-control"
              onChange={(e) => setUser({ ...user, role: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              className="form-control"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className="my-4 col-12">
            <button type="submit" className="btn btn-primary w-100">
              Добавить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
