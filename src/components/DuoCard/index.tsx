import { GameController } from 'phosphor-react-native';
import { TouchableOpacity, View, Text } from 'react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo/Index';

import { styles } from './styles';

export interface DuoCardProps {
    id: string;
    hoursEnd: string;
    hoursStart: string;
    name: string;
    useVoiceChannel: boolean;
    weekDays: string[];
    yearsPlaying: number;
}

interface Props {
    data: DuoCardProps;
    onConnect: () => void;
}

export function DuoCard({ data, onConnect}: Props) {
    return (
        <View style={styles.container}>
            <DuoInfo
                label='Nome'
                value={data.name}
            />

            <DuoInfo
                label='Há quanto tempo Joga'
                value={`${data.yearsPlaying} anos`}
            />

            <DuoInfo
                label='Disponibilidade'
                value={`${data.weekDays.length} dias \u2022 ${data.hoursStart} - ${data.hoursEnd}`}
            />

            <DuoInfo
                label='Chamada de áudio?'
                value={data.useVoiceChannel ? 'Sim' : 'Não'}
                colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : 'red'}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={onConnect}
            >
                <GameController
                    color={THEME.COLORS.TEXT}
                    size={20}
                />
                <Text style={styles.buttonTitle}>
                    Conectar
                </Text>
                
                
                

            </TouchableOpacity>

        </View>
    );
}