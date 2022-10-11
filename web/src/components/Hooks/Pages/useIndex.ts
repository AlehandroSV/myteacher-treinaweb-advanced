import { ApiService } from "./../../../services/ApiService";
import { useEffect, useState } from "react";
import { Teacher } from "./../../../@types/Teacher";

export function useIndex() {
  const [listaProfessores, setListaProfessores] = useState<Teacher[]>([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [professorSelecionado, setProfessorSelecionado] =
    useState<Teacher | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    ApiService.get("/professores").then((resposta) => {
      setListaProfessores(resposta.data);
    });
  }, []);

  useEffect(() => {
    limparFurmulario();
  }, [professorSelecionado]);

  function marcarAula() {
    if (professorSelecionado !== null) {
      if (validarDadosAula()) {
        ApiService.post(`/professores/${professorSelecionado.id}/aulas`, {
          nome,
          email,
        })
          .then(() => {
            setProfessorSelecionado(null);
            setMessage("Cadastrado com sucesso!");
          })
          .catch((error) => {
            setMessage(error.response?.data.message);
          });
      } else {
        setMessage("Preencha os dados corretamente");
      }
    }
  }

  function validarDadosAula() {
    return nome.length > 3 && email.length > 0;
  }

  function limparFurmulario() {
    setNome("");
    setEmail("");
  }

  return {
    listaProfessores,
    nome,
    setNome,
    email,
    setEmail,
    professorSelecionado,
    setProfessorSelecionado,
    marcarAula,
    message,
    setMessage,
  };
}
