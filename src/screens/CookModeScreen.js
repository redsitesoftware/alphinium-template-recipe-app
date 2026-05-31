import React, { useMemo, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { colors, featuredRecipe, recipes } from '../data/recipeData';

export default function CookModeScreen({ route }) {
  const recipe = useMemo(() => route.params?.recipe || featuredRecipe || recipes[0], [route.params]);
  const [stepIndex, setStepIndex] = useState(0);
  const step = recipe.steps[stepIndex];
  const timer = recipe.timers[stepIndex] || '00:45';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <Text style={styles.eyebrow}>Cook Mode</Text>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.stepLabel}>Step {stepIndex + 1} of {recipe.steps.length}</Text>
        <Text style={styles.stepText}>{step}</Text>
        <Text style={styles.timer}>{timer}</Text>

        <View style={styles.dotsRow}>
          {recipe.steps.map((item, index) => (
            <View key={`${item}-${index}`} style={[styles.dot, index === stepIndex && styles.dotActive]} />
          ))}
        </View>

        <View style={styles.controlsRow}>
          <Pressable style={[styles.controlButton, stepIndex === 0 && styles.controlButtonDisabled]} disabled={stepIndex === 0} onPress={() => setStepIndex((value) => Math.max(0, value - 1))}>
            <Text style={styles.controlButtonText}>Prev Step</Text>
          </Pressable>
          <Pressable style={styles.controlButton} onPress={() => setStepIndex((value) => Math.min(recipe.steps.length - 1, value + 1))}>
            <Text style={styles.controlButtonText}>{stepIndex === recipe.steps.length - 1 ? 'Stay on Finish' : 'Next Step'}</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  screen: { flex: 1, backgroundColor: colors.background, padding: 24, justifyContent: 'center' },
  eyebrow: { color: colors.primary, fontSize: 12, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1.2, textAlign: 'center' },
  title: { color: colors.text, fontSize: 28, lineHeight: 34, fontWeight: '900', textAlign: 'center', marginTop: 14 },
  stepLabel: { color: colors.textMuted, fontSize: 16, textAlign: 'center', marginTop: 16 },
  stepText: { color: colors.text, fontSize: 32, lineHeight: 42, fontWeight: '800', textAlign: 'center', marginTop: 24 },
  timer: { color: colors.secondary, fontSize: 42, fontWeight: '900', textAlign: 'center', marginTop: 30 },
  dotsRow: { flexDirection: 'row', justifyContent: 'center', gap: 10, marginTop: 34 },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#E5C79A' },
  dotActive: { width: 28, backgroundColor: colors.primary },
  controlsRow: { flexDirection: 'row', gap: 12, marginTop: 34 },
  controlButton: { flex: 1, backgroundColor: colors.primary, paddingVertical: 16, borderRadius: 18, alignItems: 'center' },
  controlButtonDisabled: { opacity: 0.45 },
  controlButtonText: { color: colors.surface, fontWeight: '800', fontSize: 15 },
});
