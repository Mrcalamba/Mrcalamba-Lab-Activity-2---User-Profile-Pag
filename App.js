import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Avatar from './components/Avatar'; 
import NameTitle from './components/NameTitle';
import styled, { ThemeProvider } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have @expo/vector-icons installed

// Light and Dark theme settings
const lightTheme = {
  backgroundColor: '#f5f5f5',
  textColor: '#000',
  cardBackground: '#fff',
};

const darkTheme = {
  backgroundColor: '#1e1e1e',
  textColor: '#fff',
  cardBackground: '#333',
};

// Styled components for containers and elements
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor}; 
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-bottom: 20px;
`;

const ProfileContainer = styled.View`
  flex-direction: row; /* Align items horizontally */
  align-items: center; /* Center items vertically */
  width: 90%;
  background-color: ${({ theme }) => theme.cardBackground}; 
  padding: 20px;
  border-radius: 10px;
  elevation: 3; /* Shadow for Android */
  shadow-opacity: 0.25; /* Shadow for iOS */
  shadow-radius: 4px;
  shadow-color: black;
  shadow-offset: 0px 2px;
  margin-bottom: 20px;
`;

const AvatarContainer = styled.View`
  align-items: center; /* Center the avatar horizontally */
  margin-right: 15px; /* Add space between the avatar and the text */
`;

const NameContainer = styled.View`
  flex-direction: column; /* Stack name and joined date vertically */
  justify-content: center; /* Center the text vertically */
`;

const MenuContainer = styled.View`
  width: 90%;
  background-color: ${({ theme }) => theme.cardBackground}; 
  padding: 20px;
  border-radius: 10px;
  elevation: 3; /* Shadow for Android */
  shadow-opacity: 0.25; /* Shadow for iOS */
  shadow-radius: 4px;
  shadow-color: black;
  shadow-offset: 0px 2px;
  margin-bottom: 20px;
`;

const MenuSection = styled.View`
  margin-bottom: 20px;
`;

const SectionHeader = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 10px;
`;

const MenuItem = styled.TouchableOpacity`
  flex-direction: row; /* Align items horizontally */
  align-items: center; /* Center items vertically */
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

const MenuText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.textColor};
  margin-left: 10px; /* Space between icon and text */
`;

const InputContainer = styled.View`
  width: 90%;
  margin-bottom: 20px;
`;

const SignOutButton = styled.TouchableOpacity`
  width: 80%; /* Width adjusted for smaller button */
  padding: 10px; /* Reduced padding for smaller button */
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 5px;
  border: 1px solid #ddd; /* Border for the box effect */
  align-items: center;
  justify-content: center;
  margin-top: 20px; /* Spacing above the button */
`;

const SignOutText = styled.Text`
  font-size: 14px; /* Font size reduced for smaller button */
  color: ${({ theme }) => theme.textColor};
  font-weight: bold;
`;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to toggle dark mode
  const [inputValue, setInputValue] = useState(''); // State for input

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleSignOut = () => {
    // Handle sign out logic here
    console.log("Sign Out Pressed");
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <Header>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color={isDarkMode ? '#fff' : '#000'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="menu" size={24} color={isDarkMode ? '#fff' : '#000'} />
          </TouchableOpacity>
        </Header>

        <InputContainer>
          <TextInput
            placeholder="Type something..."
            value={inputValue}
            onChangeText={setInputValue}
            style={{
              height: 40,
              borderColor: '#ddd',
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
              backgroundColor: isDarkMode ? '#444' : '#fff',
              color: isDarkMode ? '#fff' : '#000',
            }}
          />
        </InputContainer>

        <ProfileContainer>
          <AvatarContainer>
            <Avatar />
            <NameTitle name="Edwin B Calamba Jr" joined="1 year ago gwapo si edwin" />
          </AvatarContainer>
          <NameContainer>
            {/* Additional information can go here if needed */}
          </NameContainer>
        </ProfileContainer>

        <MenuContainer>
          <MenuSection>
            <SectionHeader>Profile</SectionHeader>
            <MenuItem>
              <Ionicons name="person" size={20} color={isDarkMode ? '#fff' : '#000'} />
              <MenuText>Manage User</MenuText>
            </MenuItem>
          </MenuSection>

          <MenuSection>
            <SectionHeader>Settings</SectionHeader>
            <MenuItem>
              <Ionicons name="notifications" size={20} color={isDarkMode ? '#fff' : '#000'} />
              <MenuText>Notifications</MenuText>
            </MenuItem>
            <MenuItem onPress={toggleDarkMode}>
              <Ionicons name="moon" size={20} color={isDarkMode ? '#fff' : '#000'} />
              <MenuText>Dark Mode: {isDarkMode ? 'On' : 'Off'}</MenuText>
            </MenuItem>
          </MenuSection>
        </MenuContainer>

        <SignOutButton onPress={handleSignOut}>
          <SignOutText>Sign Out</SignOutText>
        </SignOutButton>
      </Container>
    </ThemeProvider>
  );
};

export default App;
