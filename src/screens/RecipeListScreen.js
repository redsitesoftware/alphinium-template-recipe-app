import React, { useMemo } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, recipes } from '../data/recipeData';

export default function RecipeListScreen({ navigation, route }) {
  const category = route.params?.category || 'All';
  const filteredRecipes = useMemo(
    () => (category === 'All' ? recipes : recipes.filter((recipe) => recipe.category === category)),
    [category]
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{category === 'All' ? 'All recipes' : `${category} favourites`}</Text>
        <Text style={styles.subtitle}>{filteredRecipes.length} recipes ready for your next meal.</Text>

        {filteredRecipes.map((recipe) => (
          <Pressable key={recipe.id} style={styles.card} onPress={() => navigation.navigate('Recipe Detail', { recipe })}>
            <Image source={{ uri: recipe.image }} style={styles.image} />
            <View style={styles.body}>
              <Text style={styles.cardTitle}>{recipe.title}</Text>
              <Text style={styles.meta}>{recipe.time} • {recipe.difficulty} • {recipe.servings} servings •  {recipe.rating}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40, gap: 16 },
  title: { color: colors.text, fontSize: 30, lineHeight: 36, fontWeight: '900' },
  subtitle: { color: colors.textMuted, fontSize: 15, lineHeight: 24 },
  card: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: 24, overflow: 'hidden' },
  image: { width: '100%', height: 200 },
  body: { padding: 18 },
  cardTitle: { color: colors.text, fontSize: 22, fontWeight: '800' },
  meta: { color: colors.textMuted, fontSize: 14, lineHeight: 22, marginTop: 8 },
});