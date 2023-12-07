import React from 'react';
import { View, Text } from 'react-native';
import { useFetchUpcomingAnimatedQuery } from '../features/api';
import { UpcomingAnimatedResponse } from '../types/types';

interface UpcomingScreenProps {
}

const UpcomingScreen: React.FC<UpcomingScreenProps> = () => {
  const { data: upcomingContent } = useFetchUpcomingAnimatedQuery();

  return (
    <View>
      <Text>Upcoming Films: {JSON.stringify(upcomingContent)}</Text>
    </View>
  );
};

export default UpcomingScreen;
