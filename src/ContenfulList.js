import { useEffect, useState } from "react";
import styled from "styled-components";
import useContentful from "./useContenful";
import AuthorCard from "./AuthorCard";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const { getEmployees } = useContentful();

  useEffect(() => {
    getEmployees().then((response) => response && setEmployees(response));
  });

  return (
    <Wrapper>
      <TitleWrapper>
      </TitleWrapper>
      {employees.map((employee, index) => (
        <AuthorCard key={index} employee={employee} />
      ))}
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  font-family: "Roboto";
  margin: 40px;

  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  * {
    margin: 0;
  }

  display: grid;
  row-gap: 10px;
`;
