import { Button } from "@mui/material";
import { Teacher } from "../../@types/Teacher";
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
}

const List = (props: ListProps) => {
  return (
    <>
      {props.teachers.length > 0 ? (
        <ListStyled>
          {props.teachers.map((teacher) => (
            <ItemList key={teacher.id}>
              <ImgList src={teacher.img}></ImgList>
              <InfosList>
                <NameList>{teacher.name}</NameList>
                <ValueList>
                  {teacher.value_hours.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}{" "}
                  | Por Hora
                </ValueList>
                <DescriptionList>{teacher.description}</DescriptionList>
                <Button sx={{ width: "70%" }}>
                  Marcar aula com {teacher.name}
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
