import { useState } from "react";
import "./MyForm.css";

const MyForm = (user) => {
  // 6 - Controlled inputs

  // 3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState(user ? user.bio : "");

  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando Formulario");
    console.log(name, email, bio, role);

    // 7 - Limpar formulario
    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div>
      {/* 5 - Envio de Form */}

      {/* 1 - Criação de Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu Nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2 - Label envolvendo input */}
        <label>
          <span>E-mail</span>
          {/* 4 - Simpificando de manipulação de state*/}
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* 8 - Textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* 9 - Select */}
        <label>
          <span>Função no sistema</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Adiministrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
