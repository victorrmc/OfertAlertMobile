import { View, Text, Pressable, StyleSheet } from "react-native";
import { NotificationOptionsEnum } from "./NotificationOptions";

interface RadioButtonProps {
  value: NotificationOptionsEnum;
  label: string;
  description?: string;
  className?: string;
  selected: boolean;
  onPress: (value: NotificationOptionsEnum) => void;
}
const RadioButton = ({ value, label, description, className, selected, onPress }: RadioButtonProps) => {
  const handleOnPress = (value: NotificationOptionsEnum) => {
    onPress(value);
  };

  return (
    <Pressable onPress={() => handleOnPress(value)} className={className}>
      <View style={styles.wrap}>
        <Dot selected={selected} />
        <View>
          <Text className="font-regular" style={styles.label}>{label}</Text>
          {description && <Text style={styles.description}>{description}</Text>}
        </View>
      </View>
    </Pressable>
  );
};

// Componente Dot
const Dot = ({ selected }: { selected: boolean }) => {
  return (
    <View style={styles.radio}>
      <View
        style={{
          ...styles.dot,
          backgroundColor: selected ? "#FFFF" : "transparent",
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    gap: 10,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#3B546A",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 11.5,
    height: 11.5,
    borderRadius: 6,
    backgroundColor: "transparent",
  },
  label: {
    fontSize: 17,
    color: "white",
  },
  description: {
    fontSize: 16,
    color: "#EEE",
  },
});

export default RadioButton;