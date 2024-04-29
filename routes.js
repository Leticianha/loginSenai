import { createStackNavigator } from '@react-navigation/stack';
import Bem_Vindo from './pages/index';
import Acesso from './pages/entrada';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar'

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="index"
                component={Bem_Vindo}
            />

            <Stack.Screen
                options={{ headerShown: false }}
                name="entrada"
                component={Acesso}
            />

            <Stack.Screen
                options={{ headerShown: false }}
                name="login"
                component={Login}
            />

            <Stack.Screen
                options={{ headerShown: false }}
                name="cadastrar"
                component={Cadastrar}
            />
        </Stack.Navigator>
    )
} 