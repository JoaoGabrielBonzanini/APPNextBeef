import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BoasVindas from "../pages/boasVindas";
import Input from "../components/input";
import Button from "../components/button";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro/cadastro";
import Cadastro1 from "../pages/cadastro/cadastro1";
import EsqueciSenha from "../pages/esqueciSenha";
import Header1 from "../components/header1";
import Conta from "../pages/conta";
import Confirmado from "../pages/confirmado";
import Produtos from "../pages/produtos";
import Product from "../components/product";
import SelecaoProdutos from "../pages/selecaoProdutos";
import ShoppingItem from "../components/shoppingItem";
import Carrinho from "../pages/carrinho";
import Address from "../components/address";
import SelecaoEndereco from "../pages/selecaoEndereco";
import Header3 from "../components/header3";
import MeusPedidos from "../pages/meusPedidos";
import AdicionarEndereco from "../pages/adicionarEndereco";
import EditarPerfil from "../pages/editarPerfil";
import TrocarSenha from "../pages/trocarSenha";
import ConfirmadoRetirada from "../pages/confirmadoRetirada";
import Header4 from "../components/header4";

const Stack = createNativeStackNavigator();

export default function Routes() {
        return (
                <Stack.Navigator>
                        <Stack.Screen
                                name="BoasVindas"
                                component={BoasVindas}
                                options={{ headerShown: false }}
                        />
                        <Stack.Screen
                                name="Login"
                                component={Login}
                                options={{ headerShown: false }}
                        />
                        <Stack.Screen
                                name="Carrinho"
                                component={Carrinho}
                                options={{ headerShown: false }}
                        />
                        <Stack.Screen
                                name="SelecaoEndereco"
                                component={SelecaoEndereco}
                                options={{ headerShown: false }}
                        />
                        <Stack.Screen
                                name="SelecaoProdutos"
                                component={SelecaoProdutos}
                                options={{ headerShown: false }}
                        />
                        <Stack.Screen
                                name="MeusPedidos"
                                component={MeusPedidos}
                                options={{ headerShown: false }}
                        />
                        <Stack.Screen
                                name="Conta"
                                component={Conta}
                                options={{ headerShown: false }}
                        />
                        <Stack.Screen
                                name="AdicionarEndereco"
                                component={AdicionarEndereco}
                                options={{ headerShown: false }}
                        />
                        <Stack.Screen
                                name="EditarPerfil"
                                component={EditarPerfil}
                                options={{ headerShown: false }}
                        />
                        <Stack.Screen
                                name="TrocarSenha"
                                component={TrocarSenha}
                                options={{ headerShown: false }}
                        />
                        <Stack.Screen
                                name="ConfirmadoRetirada"
                                component={ConfirmadoRetirada}
                                options={{ headerShown: false }}
                        />
                        <Stack.Screen
                                name="Produtos"
                                component={Produtos}
                                options={{ headerShown: false }}
                        />
                        <Stack.Screen
                                name="Cadastro"
                                component={Cadastro}
                                options={{ headerShown: false }}
                        />
                        <Stack.Screen
                                name="Cadastro1"
                                component={Cadastro1}
                                options={{ headerShown: false }}
                        />                        
                        <Stack.Screen
                                name="Confirmado"
                                component={Confirmado}
                                options={{ headerShown: false }}
                        />
                        <Stack.Screen
                                name="EsqueciSenha"
                                component={EsqueciSenha}
                                options={{ headerShown: false }}
                        />
                </Stack.Navigator>
        )
}