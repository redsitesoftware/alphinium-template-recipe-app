import React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { categories, colors, featuredRecipe, recipes } from '../data/recipeData';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.brand}>Chef Mia's Kitchen</Text>
        <Text style={styles.subtitle}>Warm, vibrant recipes that make weeknights feel special and weekends taste unforgettable.</Text>

        <Pressable style={styles.heroCard} onPress={() => navigation.navigate('Recipe Detail', { recipe: featuredRecipe })}>
          <Image source={{ uri: featuredRecipe.image }} style={styles.heroImage} />
          <View style={styles.heroBody}>
            <Text style={styles.heroEyebrow}>Featured recipe</Text>
            <Text style={styles.heroTitle}>{featuredRecipe.title}</Text>
            <Text style={styles.heroMeta}>{featuredRecipe.time} • {featuredRecipe.difficulty} • {featuredRecipe.servings} servings</Text>
          </View>
        </Pressable>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryRow}>
          {categories.map((category) => (
            <Pressable key={category} style={styles.categoryPill} onPress={() => navigation.navigate('Recipes', { category })}>
              <Text style={styles.categoryText}>{category}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recipe grid</Text>
          <Pressable onPress={() => navigation.navigate('Recipes', { category: 'All' })}>
            <Text style={styles.sectionAction}>Browse all</Text>
          </Pressable>
        </View>

        <View style={styles.grid}>
          {recipes.map((recipe) => (
            <Pressable key={recipe.id} style={styles.gridCard} onPress={() => navigation.navigate('Recipe Detail', { recipe })}>
              <Image source={{ uri: recipe.image }} style={styles.gridImage} />
              <Text style={styles.gridTitle} numberOfLines={2}>{recipe.title}</Text>
              <Text style={styles.gridMeta}>{recipe.category} • {recipe.time}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40, gap: 18 },
  brand: { color: colors.text, fontSize: 32, fontWeight: '900' },
  subtitle: { color: colors.textMuted, fontSize: 15, lineHeight: 24 },
  heroCard: { backgroundColor: colors.surface, borderRadius: 28, overflow: 'hidden', borderWidth: 1, borderColor: colors.border },
  heroImage: { width: '100%', height: 240 },
  heroBody: { padding: 20 },
  heroEyebrow: { color: colors.primary, textTransform: 'uppercase', fontSize: 12, fontWeight: '700', letterSpacing: 1 },
  heroTitle: { color: colors.text, fontSize: 28, lineHeight: 34, fontWeight: '900', marginTop: 10 },
  heroMeta: { color: colors.textMuted, fontSize: 14, marginTop: 10 },
  categoryRow: { gap: 10, paddingRight: 20 },
  categoryPill: { backgroundColor: colors.surfaceAlt, paddingHorizontal: 16, paddingVertical: 10, borderRadius: 999, borderWidth: 1, borderColor: colors.border },
  categoryText: { color: colors.text, fontWeight: '700' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  sectionTitle: { color: colors.text, fontSize: 20, fontWeight: '800' },
  sectionAction: { color: colors.primary, fontWeight: '700' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 14 },
  gridCard: { width: '47%', backgroundColor: colors.surface, borderRadius: 22, overflow: 'hidden', borderWidth: 1, borderColor: colors.border },
  gridImage: { width: '100%', height: 120 },
  gridTitle: { color: colors.text, fontSize: 16, fontWeight: '800', marginHorizontal: 12, marginTop: 12, minHeight: 40 },
  gridMeta: { color: colors.textMuted, fontSize: 13, marginHorizontal: 12, marginTop: 8, marginBottom: 14 },
});
