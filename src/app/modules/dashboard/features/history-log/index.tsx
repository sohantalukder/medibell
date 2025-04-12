import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SectionList,
  InteractionManager,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import Container from '@layouts/Container.layout';
import Header from '@components/header/Header.component';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {customPadding} from '@styles/global.style.asset';
import {statusBar} from '@styles/properties.asset';
import rs from '@styles/responsiveSize.style.asset';
import {typographies} from '@styles/typographies.style.asset';
import Button from '@components/button/button/Button.component';
import CheckFillIcon from '@icons/CheckFill.icon';
import CloseFillIcon from '@icons/CloseFill.icon';
import hexOpacityToColor from '@helper/utilities/hexOpacityToColor';
import dayjs from 'dayjs';
import Animated, {FadeInDown} from 'react-native-reanimated';
const Chip = ({
  title,
  isSelected,
  onPress,
}: {
  title: string;
  isSelected: boolean;
  onPress: () => void;
}) => {
  const colors = useTheme().colors as Colors;
  return (
    <View style={{maxWidth: rs(100), height: rs(35)}}>
      <Button
        text={title}
        onPress={onPress}
        wrapStyle={{
          borderRadius: rs(200),
          paddingHorizontal: rs(10),
          backgroundColor: isSelected ? colors.primary : colors.white,
        }}
        textStyle={[
          typographies(colors).bodyMediumSemibold,
          {
            color: isSelected ? colors.white : colors.black,
            letterSpacing: rs(0),
          },
        ]}
      />
    </View>
  );
};
const HistoryLogStatus = ({onPress}: {onPress: (status: string) => void}) => {
  const colors = useTheme().colors as Colors;
  const [selected, setSelected] = useState<string>('All');
  const buttons = ['All', 'Taken', 'Missed'];
  const handleChangeStatus = (status: string) => {
    onPress(status);
    setSelected(status);
  };
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          ...customPadding(10, 20, 0, 20),
          gap: rs(10),
          backgroundColor: colors.background,
        }}>
        {buttons.map((item, index) => (
          <Chip
            title={item}
            key={index}
            isSelected={selected === item}
            onPress={() => handleChangeStatus(item)}
          />
        ))}
      </ScrollView>
    </View>
  );
};
const HistoryLog = () => {
  const colors = useTheme().colors as Colors;
  const [renderData, setRenderData] = useState(false);
  const historyLogData = [
    {
      date: '2025-01-24T00:00:00',
      entries: [
        {
          name: 'Drug2',
          dosage: '500mg',
          time: '2025-01-24T07:27:00',
          status: 'Taken',
        },
        {
          name: 'Drug4',
          dosage: '200mg',
          time: '2025-01-24T07:43:00',
          status: 'Missed',
        },
        {
          name: 'Ibuprofen',
          dosage: '400mg',
          time: '2025-01-24T13:00:00',
          status: 'Taken',
        },
        {
          name: 'Vitamin D',
          dosage: '1000 IU',
          time: '2025-01-24T18:30:00',
          status: 'Missed',
        },
      ],
    },
    {
      date: '2025-01-23T00:00:00',
      entries: [
        {
          name: 'Paracetamol',
          dosage: '500mg',
          time: '2025-01-23T08:21:00',
          status: 'Taken',
        },
        {
          name: 'Drug3',
          dosage: '250mg',
          time: '2025-01-23T12:15:00',
          status: 'Missed',
        },
        {
          name: 'Amoxicillin',
          dosage: '250mg',
          time: '2025-01-23T20:45:00',
          status: 'Taken',
        },
      ],
    },
    {
      date: '2025-01-22T00:00:00',
      entries: [
        {
          name: 'Paracetamol',
          dosage: '500mg',
          time: '2025-01-22T07:35:00',
          status: 'Missed',
        },
        {
          name: 'Drug1',
          dosage: '100mg',
          time: '2025-01-22T10:00:00',
          status: 'Taken',
        },
        {
          name: 'Vitamin C',
          dosage: '500mg',
          time: '2025-01-22T14:30:00',
          status: 'Missed',
        },
        {
          name: 'Cough Syrup',
          dosage: '10ml',
          time: '2025-01-22T21:00:00',
          status: 'Taken',
        },
      ],
    },
  ];

  useLayoutEffect(() => {
    if (!renderData) {
      InteractionManager.runAfterInteractions(() => {
        setRenderData(true);
        console.log('renderData', renderData);
      });
    }
  }, [renderData]);
  // Transform from original structure to sectioned format
  const modifiedHistoryData = historyLogData.map(dateGroup => ({
    date: dateGroup.date,
    data: dateGroup.entries,
  }));
  const [transformedHistoryData, setTransformedHistoryData] =
    useState(modifiedHistoryData);
  const styles = historyLogStyles(colors);
  const handleChangeStatus = (status: string) => {
    if (status === 'All') {
      setTransformedHistoryData(modifiedHistoryData);
    } else {
      const filtered = modifiedHistoryData
        .map(section => {
          const filteredEntries = section.data.filter(
            entry => entry.status === status,
          );
          return {
            ...section,
            data: filteredEntries,
          };
        })
        .filter(section => section.data.length > 0);

      setTransformedHistoryData(filtered);
    }
  };
  return (
    <Container
      statusBarBg={colors.primary}
      statusBarStyle={statusBar.lightContent}>
      <Header
        text="History Log"
        textStyle={{color: colors.white}}
        iconFill={colors.white}
        style={{
          backgroundColor: colors.primary,
          ...customPadding(10, 20, 10, 0),
        }}
      />
      <HistoryLogStatus onPress={handleChangeStatus} />
      <SectionList
        sections={transformedHistoryData}
        keyExtractor={(item, index) => `${item.name}-${item.time}-${index}`}
        stickySectionHeadersEnabled={true}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        renderItem={({item, index}) => (
          <Animated.View
            entering={FadeInDown.delay(index * 100)
              .springify()
              .damping(10)}
            style={styles.card}>
            <View
              style={[
                styles.colorBar,
                {
                  backgroundColor:
                    item.status === 'Taken'
                      ? hexOpacityToColor(colors.success1, 0.5)
                      : hexOpacityToColor(colors.error1, 0.5),
                },
              ]}
            />
            <View style={styles.cardContent}>
              <Text style={typographies(colors).bodyLargeBold}>
                {item.name}
              </Text>
              <Text style={typographies(colors).bodyMediumRegular}>
                {item.dosage}
              </Text>
              <Text
                style={[
                  typographies(colors).bodySmallMedium,
                  {color: colors.gray4},
                ]}>
                {dayjs(item.time).format('hh:mm A')}
              </Text>
            </View>
            <View
              style={[
                styles.statusContainer,
                {
                  backgroundColor:
                    item.status === 'Taken'
                      ? hexOpacityToColor(colors.success1, 0.2)
                      : hexOpacityToColor(colors.error1, 0.2),
                },
              ]}>
              {item.status === 'Taken' ? (
                <CheckFillIcon height={20} width={20} />
              ) : (
                <CloseFillIcon height={16} width={16} />
              )}
              <Text style={typographies(colors).bodySmallMedium}>
                {item.status}
              </Text>
            </View>
          </Animated.View>
        )}
        renderSectionHeader={({section}) => (
          <Text
            style={[
              typographies(colors).bodyLargeBold,
              {
                backgroundColor: colors.background,
                ...customPadding(10, 0, 10, 0),
              },
            ]}>
            {dayjs(section.date).format('dddd, MMMM YYYY')}
          </Text>
        )}
        contentContainerStyle={{...customPadding(0, 20, 100, 20)}}
      />
    </Container>
  );
};

export default HistoryLog;

const historyLogStyles = (colors: Colors) =>
  StyleSheet.create({
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.white,
      borderRadius: 12,
      marginVertical: 6,
      padding: 12,
      shadowColor: colors.black,
      shadowOpacity: 0.05,
      shadowRadius: 5,
      elevation: 3,
    },
    colorBar: {
      width: 8,
      height: '65%',
      borderRadius: 6,
      marginRight: 12,
    },
    cardContent: {
      flex: 1,
      gap: rs(2),
    },
    statusContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: rs(2),
      justifyContent: 'center',
      paddingHorizontal: rs(10),
      paddingVertical: rs(4),
      borderRadius: rs(200),
    },
  });
