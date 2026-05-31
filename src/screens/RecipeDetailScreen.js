import React, { useMemo, useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, featuredRecipe, recipes } from '../data/recipeData';

export default function RecipeDetailScreen({ navigation, route }) {
  const recipe = useMemo(() => route.params?.recipe || featuredRecipe || recipes[0], [route.params]);
  const [checked, setChecked] = useState([]);

  const toggleIngredient = (ingredient) => {
    setChecked((current) =>
      current.includes(ingredient) ? current.filter((item) => item !== ingredient) : [...current, ingredient]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: recipe.image }} style={styles.heroImage} />
        <Text style={styles.title}>{recipe.title}</Text>
        <View style={styles.statsRow}>
          <View style={styles.statCard}><Text style={styles.statValue}>{recipe.time}</Text><Text style={styles.statLabel}>Time</Text></View>
          <View style={styles.statCard}><Text style={styles.statValue}>{recipe.servings}</Text><Text style={styles.statLabel}>Servings</Text></View>
          <View style={styles.statCard}><Text style={styles.statValue}>{recipe.calories}</Text><Text style={styles.statLabel}>Calories</Text></View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          {recipe.ingredients.map((ingredient) => {
            const isChecked = checked.includes(ingredient);
            return (
              <Pressable key={ingredient} style={styles.ingredientRow} onPress={() => toggleIngredient(ingredient)}>
                <View style={[styles.checkbox, isChecked && styles.checkboxChecked]} />
                <Text style={[styles.ingredientText, isChecked && styles.ingredientTextChecked]}>{ingredient}</Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Instructions</Text>
          {recipe.steps.map((step, index) => (
            <View key={step} style={styles.stepRow}>
              <View style={styles.stepNumber}><Text style={styles.stepNumberText}>{index + 1}</Text></View>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>

        <Pressable style={styles.primaryButton} onPress={() => navigation.navigate('Cook Mode', { recipe })}>
          <Text style={styles.primaryButtonText}>Start Cooking</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40, gap: 20 },
  heroImage: { width: '100%', height: 260, borderRadius: 28 },
  title: { color: colors.text, fontSize: 30, lineHeight: 36, fontWeight: '900' },
  statsRow: { flexDirection: 'row', gap: 10 },
  statCard: { flex: 1, backgroundColor: colors.surfaceAlt, borderRadius: 18, borderWidth: 1, borderColor: colors.border, padding: 14, alignItems: 'center' },
  statValue: { color: colors.text, fontSize: 20, fontWeight: '800' },
  statLabel: { color: colors.textMuted, fontSize: 12, marginTop: 4 },
  section: { backgroundColor: colors.surface, borderRadius: 24, borderWidth: 1, borderColor: colors.border, padding: 18, gap: 12 },
  sectionTitle: { color: colors.text, fontSize: 22, fontWeight: '800' },
  ingredientRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  checkbox: { width: 22, height: 22, borderRadius: 6, borderWidth: 2, borderColor: colors.primary, backgroundColor: 'transparent' },
  checkboxChecked: { backgroundColor: colors.primary },
  ingredientText: { color: colors.text, fontSize: 15, lineHeight: 22 },
  ingredientTextChecked: { color: colors.textMuted, textDecorationLine: 'line-through' },
  stepRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  stepNumber: { width: 28, height: 28, borderRadius: 14, backgroundColor: colors.secondary, alignItems: 'center', justifyContent: 'center' },
  stepNumberText: { color: colors.text, fontWeight: '800' },
  stepText: { flex: 1, color: colors.text, fontSize: 15, lineHeight: 24 },
  primaryButton: { backgroundColor: colors.primary, paddingVertical: 16, borderRadius: 18, alignItems: 'center' },
  primaryButtonText: { color: colors.surface, fontSize: 15, fontWeight: '800' },
});
