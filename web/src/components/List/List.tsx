import { Button } from "@mui/material";
import { Teacher } from "../../@types/Teacher";
import { FormatadorService } from "../../services/FormatadorService";
import {
  DescriptionList,
  EmptyList,
  ImgList,
  InfosList,
  ItemList,
  ListStyled,
  NameList,
  ValueList,
} from "./List.style";

interface ListProps {
  teachers: Teacher[];
  onSelect: (professor: Teacher) => void;
}

const List = (props: ListProps) => {
  return (
    <>
      {props.teachers.length > 0 ? (
        <ListStyled>
          {props.teachers.map((teacher) => (
            <ItemList key={teacher.id}>
              <ImgList src={teacher.foto}></ImgList>
              <InfosList>
                <NameList>{teacher.nome}</NameList>
                <ValueList>
                  {FormatadorService.valorMonetario(teacher.valor_hora)} | Por
                  Hora
                </ValueList>
                <DescriptionList>
                  {FormatadorService.limitarTexto(teacher.descricao, 200)}
                </DescriptionList>
                <Button
                  sx={{ width: "70%" }}
                  onClick={() => {
                    props.onSelect(teacher);
                  }}
                >
                  Marcar aula com {teacher.nome}
                </Button>
              </InfosList>
            </ItemList>
          ))}
        </ListStyled>
      ) : (
        <EmptyList>Nenhum professor encontrado! :(</EmptyList>
      )}
    </>
  );
};

export default List;
