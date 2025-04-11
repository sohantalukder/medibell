import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {customPadding} from '@styles/global.style.asset';
import rs from '@styles/responsiveSize.style.asset';
import {typographies} from '@styles/typographies.style.asset';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Svg, {Circle, G} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
interface WeekData {
  title: string;
  progress: number;
  tasks: number;
  completed: number;
  details: string;
}

const Progress = () => {
  const colors = useTheme().colors as Colors;
  // Animation values
  const animatedValues = [
    useState(new Animated.Value(0))[0],
    useState(new Animated.Value(0))[0],
    useState(new Animated.Value(0))[0],
  ];

  // Progress values for each week (0-100)
  const progressValues = [68, 55, 40];

  // Colors for each week
  const colorsArray = [colors.primary, colors.quinary, colors.tertiary];

  // Labels for each week
  const labels = ['Week 01', 'Week 02', 'Week 03'];

  // Additional data for each week to show in popup
  const weekData: WeekData[] = [
    {
      title: 'Week 01',
      progress: 68,
      tasks: 17,
      completed: 12,
      details: 'Great progress this week! Keep up the good work.',
    },
    {
      title: 'Week 02',
      progress: 55,
      tasks: 20,
      completed: 11,
      details: 'Good momentum, but slightly behind schedule.',
    },
    {
      title: 'Week 03',
      progress: 40,
      tasks: 15,
      completed: 6,
      details: 'Need to increase productivity to meet targets.',
    },
  ];

  // Popup state
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState<WeekData | null>(null);

  const handleWeekPress = (index: number) => {
    setSelectedWeek(weekData[index]);
    setModalVisible(true);
  };

  useEffect(() => {
    // Create animation sequence
    const animations = animatedValues.map((animValue, index) => {
      return Animated.timing(animValue, {
        toValue: progressValues[index] / 100,
        duration: 1500,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      });
    });

    // Run animations in parallel
    Animated.stagger(250, animations).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const radius = 70;
  const strokeWidth = 10;
  const center = radius + strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const styles = progressStyles(colors);
  return (
    <View>
      <Text
        style={[typographies(colors).bodyLargeBold, {marginBottom: rs(10)}]}>
        Progress
      </Text>
      <View style={styles.container}>
        <View style={styles.progressContainer}>
          <Svg
            width={center * 2}
            height={center * 2}
            viewBox={`0 0 ${center * 2} ${center * 2}`}>
            {/* Background circles */}
            {[0, 1, 2].map(index => (
              <Circle
                key={`bg-${index}`}
                cx={center}
                cy={center}
                r={radius - index * (strokeWidth + 5)}
                stroke="#f2f2f2"
                strokeWidth={strokeWidth}
                fill="transparent"
              />
            ))}

            {/* Animated progress circles */}
            {animatedValues.map((animValue, index) => {
              const strokeDashoffset = animValue.interpolate({
                inputRange: [0, 1],
                outputRange: [circumference, 0],
              });

              return (
                <G
                  key={`progress-${index}`}
                  rotation="-90"
                  origin={`${center}, ${center}`}>
                  <AnimatedCircle
                    cx={center}
                    cy={center}
                    r={radius - index * (strokeWidth + 5)}
                    stroke={colorsArray[index]}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                  />
                </G>
              );
            })}
          </Svg>

          {/* Percentage display */}
          <View style={styles.percentageContainer}>
            <Text style={typographies(colors).heading5}>
              {progressValues[0]}%
            </Text>
          </View>
        </View>

        {/* Legend with TouchableOpacity */}
        <View style={styles.legendContainer}>
          {labels.map((label, index) => (
            <TouchableOpacity
              key={label}
              style={styles.legendItem}
              onPress={() => handleWeekPress(index)}>
              <View
                style={[
                  styles.colorIndicator,
                  {backgroundColor: colorsArray[index]},
                ]}
              />
              <Text style={styles.legendText}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Popup Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              {selectedWeek && (
                <>
                  <View
                    style={[
                      styles.modalHeader,
                      {
                        backgroundColor:
                          colorsArray[labels.indexOf(selectedWeek.title)],
                      },
                    ]}>
                    <Text style={styles.modalTitle}>
                      {selectedWeek.title as never}
                    </Text>
                  </View>
                  <View style={styles.modalBody}>
                    <View style={styles.progressRow}>
                      <Text style={styles.dataLabel}>Progress:</Text>
                      <Text style={styles.dataValue}>
                        {selectedWeek.progress || 0}%
                      </Text>
                    </View>
                    <View style={styles.progressRow}>
                      <Text style={styles.dataLabel}>Tasks:</Text>
                      <Text style={styles.dataValue}>{selectedWeek.tasks}</Text>
                    </View>
                    <View style={styles.progressRow}>
                      <Text style={styles.dataLabel}>Completed:</Text>
                      <Text style={styles.dataValue}>
                        {selectedWeek.completed || 0}
                      </Text>
                    </View>
                    <View style={styles.detailsContainer}>
                      <Text style={styles.detailsText}>
                        {selectedWeek.details || 'No details available'}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setModalVisible(false)}>
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const progressStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
      ...customPadding(15, 10, 15, 10),
      borderRadius: 12,
    },
    progressContainer: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
    },
    percentageContainer: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
    },
    legendContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    legendItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 10,
      padding: 8,
      borderRadius: 4,
      backgroundColor: '#f9f9f9',
    },
    colorIndicator: {
      width: 12,
      height: 12,
      borderRadius: 6,
      marginRight: 5,
    },
    legendText: {
      fontSize: 14,
      color: '#333',
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '80%',
      backgroundColor: 'white',
      borderRadius: 10,
      overflow: 'hidden',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    modalHeader: {
      padding: 15,
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
    modalBody: {
      padding: 20,
    },
    progressRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    dataLabel: {
      fontSize: 16,
      color: '#555',
      fontWeight: '500',
    },
    dataValue: {
      fontSize: 16,
      color: '#333',
      fontWeight: 'bold',
    },
    detailsContainer: {
      marginTop: 10,
      padding: 10,
      backgroundColor: '#f5f5f5',
      borderRadius: 5,
    },
    detailsText: {
      fontSize: 14,
      color: '#444',
      lineHeight: 20,
    },
    closeButton: {
      backgroundColor: '#e0e0e0',
      padding: 12,
      alignItems: 'center',
    },
    closeButtonText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#333',
    },
  });

export default Progress;
