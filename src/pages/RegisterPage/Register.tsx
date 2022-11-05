import loginIMG from "../../assets/login.jpg";
import { Box, Button, Center, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react'

import { useForm } from "../../hooks/useForm";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  pwd: string;
}


export default function Register() {
    const { formData, handleInputChange } = useForm<IFormData>({
        firstName: "",
        lastName: "",
        email: "",
        pwd: "",
    });

    const { auth, signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await signup(formData);
      if (result === "success")
        navigate("/home");
      else
        alert(result);
    };




  return (
    <> 
    <div className="relative w-full h-screen bg-zinc-900/90">

        <img className="absolute w-full h-full object-cover mix-blend-overlay" src={loginIMG} />

          <Flex overflow='hidden' w='full' bg={''} >

            <Center p='8' w='full' borderRadius='3xl'>

              <Box maxW='800px' w={'400px'} borderWidth='0px' borderRadius='lg' overflow='hidden' p={'4'} bg={'gray.600'}>
                  
                  <div className="flex justify-center items-center h-full">

                      <form onSubmit={handleSubmit} className="max-w-[400px] w-full mx-auto bg-white p-4" >
                
                        <h2 className="relative text-4xl font-bold text-center py-4">TechStore.</h2>
                        <h2 className="relative text-3X1 font-bold text-center py-1">Crear Cuenta</h2>

                          <div className="relative flex flex-col py-1">
                          <FormControl isRequired>
                            <FormLabel>Nombre de usuario</FormLabel>
                            <Input
                              value={formData.firstName}
                              name="firstName"
                              onChange={handleInputChange}
                              placeholder='Nombre de usuario'
                              size='sm'
                            />
                          </FormControl>
                          </div>
                          <div className="relative flex flex-col py-1">
                          <FormControl isRequired>
                            <FormLabel>Apellido</FormLabel>
                            <Input
                              value={formData.lastName}
                              name="lastName"
                              onChange={handleInputChange}
                              placeholder='Apellido'
                              size='sm'
                            />
                          </FormControl>
                          </div>
                          <div className="relative flex flex-col py-1">
                          <FormControl isRequired>
                            <FormLabel>Correo</FormLabel>
                            <Input
                              value={formData.email}
                              name="email"
                              onChange={handleInputChange}
                              placeholder='Correo'
                              size='sm'
                              type='email'
                            />
                          </FormControl>
                          </div>
                          <div className="relative flex flex-col py-1">
                          <FormControl isRequired>
                            <FormLabel>Contraseña</FormLabel>
                            <Input 
                              value={formData.pwd}
                              name="pwd"
                              onChange={handleInputChange}
                              placeholder="Contraseña"
                              size="sm"
                              type="password"
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
                              margin={{y: '4'}}>
                              Crear Cuenta
                            </Button>
                          </Center>
                        <div>
                          <p className="relative text-center">¿Ya tienes cuenta? <a href="http://localhost:3000/login?" className="text-blue-500">Inicia sesion</a></p>
                        </div>
                      </form>    
                      </div>
                    </Box>
              </Center>
            </Flex>   
    </div>
    </>
  )
}