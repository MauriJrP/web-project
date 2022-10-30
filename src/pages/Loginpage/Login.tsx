import loginIMG from "../../assets/login.jpg";

import { Box, Button, Center, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react'

import { useForm } from "../../hooks/useForm";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

// import { theme } from "../../theme";



interface IFormData {
  email: string;
  pwd: string;
}

export default function Login() {
    const { formData, handleInputChange } = useForm<IFormData>({
        email: "",
        pwd: "",
    });

    const { auth, login } = useAuth();
    const navigate = useNavigate();
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await login(formData);
      if (result === "success") 
        navigate("/home");
      else
        alert(result);
    };

    // const isEmailError = formData.email === "" || formData.email.length < 5 || !formData.email.includes("@") || !formData.email.includes(".");
    // const isPwdError = formData.pwd === "" || formData.pwd.length < 8;

    return (
      <> 
        <div className="bg-gray-700 grid grid-cols-1 sm:grid-cols-2 h-screen w-full">

          <div className="hidden sm:block">
            <img className="w-full h-full object-cover max-w-screen-lg max-h-screen" src={loginIMG} alt="login" />
          </div>
        
          <Flex overflow='hidden' w='full' bg={'damian'}>
            <Center p='8' w='full' borderRadius='3xl'>
              <Box maxW='800px' w={'400px'} borderWidth='1px' borderRadius='lg' overflow='hidden' p={'4'} bg={'gray.600'}>
            <form onSubmit={handleSubmit}>
              <h2 className="text-4xl font-bold text-center py-4">TechStore.</h2>
              <div className="flex flex-col py-2">
                <FormControl isRequired>
                  <FormLabel>Correo</FormLabel>
                  <Input
                    value={formData.email}
                    name="email"
                    onChange={handleInputChange}
                    placeholder='Correo'
                    size='sm'
                  />
                </FormControl>
              </div>
              <div className="flex flex-col py-2">
                <FormControl isRequired>
                  <FormLabel>Contraseña</FormLabel>
                  <Input 
                    value={formData.pwd}
                    name="pwd"
                    onChange={handleInputChange}
                    placeholder="Contraseña"
                    size="sm"
                    />
                </FormControl>
              </div>
              <Center marginY={'3'}>
              <Button
                // isLoading={auth.isLoading}
                loadingText='Enviando'
                colorScheme='gray'
                bg='gray.600'
                _hover={{ bg: 'gray.700' }}
                color='white'
                variant='solid'
                type='submit'
                margin={{y: '4'}}
              >
                Iniciar Sesión
              </Button>
              </Center>
              <div>
                <p className="text-center">¿No tienes cuenta? <a href="http://localhost:3000/register" className="text-blue-500">Registrate</a></p>  
              </div>
            </form> 
              </Box>
            </Center>
          </Flex>
        </div>
      </>
    )
  }