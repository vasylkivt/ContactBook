import { Link } from 'react-router-dom';
import {
  Title,
  Text,
  SubTitle,
  HeroWrap,
  ListWrap,
  List,
  Item,
} from './HomeHero.style';

export const HomeHero = () => {
  return (
    <HeroWrap>
      <Title>Welcome to the CONTACTBOOK app!</Title>
      <SubTitle> Organize your contacts easily and conveniently. </SubTitle>
      <Text>
        Welcome to the web app where you can create your own contact list.
        Forget about awkward handwritten entries or confusing or jumbled notes
        on paper. You have a convenient tool to organize and store your contacts
        online.{' '}
        <Link to="/register">
          <u>Create a personal account</u>
        </Link>{' '}
        or{' '}
        <Link to="/login">
          <u>login</u>
        </Link>{' '}
        to an existing one to store your contacts.
      </Text>
      <ListWrap>
        <SubTitle>Main features:</SubTitle>
        <List>
          <Item>
            <Text>
              Add and edit contacts: Fill in the details of your contacts, such
              as name, phone number, and more, and easily edit them in the
              future.
            </Text>
          </Item>
          <Item>
            <Text>
              Search and filter: Forget about wasting time searching for for a
              specific contact.
            </Text>
          </Item>
        </List>
      </ListWrap>
      <Text>
        Join the user community and take a step towards a more organized way of
        managing your contacts. Sign up for an account today and start using the
        app! Get quick access to to the data you need.
      </Text>
    </HeroWrap>
  );
};
