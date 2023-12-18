import { Title } from 'components';
import { Image, Wrap, Text, TextWrap, Button, GritWrap } from './Profile.style';
import person from 'images/person.webp';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { authOperations } from '/src/redux/auth';

export const Profile = () => {
  const dispatch = useDispatch();
  const {
    user: { name, email },
  } = useAuth();
  return (
    <Wrap>
      <Title $textAlign="center" $margin="0 0 50px 0 ">
        Profile
      </Title>
      <GritWrap>
        <Image src={person} alt="" width="150" height="150" />

        <TextWrap>
          <Text $color="#3eabb6">Name:</Text>
          <Text $fontSize="16px">{name}</Text>
          <Text $color="#3eabb6">Email:</Text>
          <Text $fontSize="16px">{email}</Text>
        </TextWrap>

        <Button onClick={() => dispatch(authOperations.logout())}>
          Logout
        </Button>
      </GritWrap>
    </Wrap>
  );
};
