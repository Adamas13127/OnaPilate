# Guide de Configuration - OnaPilate Shopify

## 🔴 Problème : Pages 404

Si vous obtenez des erreurs 404 en naviguant, c'est normal ! Shopify ne fonctionne pas comme un site HTML classique. Voici comment configurer correctement :

## ✅ Solution : Configuration des Pages

### 1. Page d'Accueil (Déjà configurée ✅)

La page d'accueil utilise automatiquement le template `index.liquid`. Vous n'avez rien à faire, elle fonctionne déjà !

### 2. Page Produit (À configurer)

**Étape 1 : Créer votre produit**
1. Dans Shopify Admin, allez dans **Produits** > **Ajouter un produit**
2. Remplissez :
   - **Nom** : "Reformer OnaPilate" (ou le nom de votre choix)
   - **Description** : Description complète du produit
   - **Prix** : Votre prix
   - **Images** : Uploadez toutes vos images du reformer
3. Cliquez sur **Enregistrer**

**Étape 2 : Le template produit sera automatiquement utilisé**
- Le template `product.liquid` sera utilisé automatiquement
- L'URL sera : `votre-boutique.myshopify.com/products/reformer-onapilate`

**Étape 3 : Mettre à jour les liens dans les sections**
1. Allez dans **Boutique en ligne** > **Thèmes** > **Personnaliser**
2. Pour chaque section avec des boutons "Voir le Produit" ou "Découvrir le Produit" :
   - Cliquez sur la section
   - Dans "CTA Button URL", collez l'URL de votre produit (ex: `/products/reformer-onapilate`)
   - Ou utilisez le sélecteur de produit Shopify

### 3. Page de Paiement (Checkout Shopify)

**IMPORTANT** : Shopify n'utilise PAS de page de paiement personnalisée. Le paiement se fait via le **Checkout Shopify** qui est automatique.

**Comment ça fonctionne :**
1. L'utilisateur clique sur "Acheter" → va au panier
2. L'utilisateur clique sur "Passer la commande" → va au checkout Shopify
3. Le checkout est géré automatiquement par Shopify

**Le bouton "Acheter" dans le header** pointe déjà vers `{{ routes.cart_url }}` ✅

**Pour personnaliser le checkout :**
- Allez dans **Paramètres** > **Checkout**
- Vous pouvez personnaliser les textes, couleurs, etc.

## 🔗 Configuration des Liens

### Dans l'Éditeur de Thème

1. **Allez dans Boutique en ligne > Thèmes > Personnaliser**

2. **Section Hero** :
   - CTA Button 1 URL : `/products/reformer-onapilate` (remplacez par votre URL produit)
   - CTA Button 2 URL : `/products/reformer-onapilate` ou laissez vide

3. **Section Why Choose Us** :
   - CTA URL : `/products/reformer-onapilate`

4. **Section Advantages** :
   - CTA URL : `/products/reformer-onapilate`

5. **Section Statistics** :
   - CTA URL : `/products/reformer-onapilate`

6. **Section CTA Final** :
   - CTA Button 1 URL : `/cart` (panier) ou `/products/reformer-onapilate`
   - CTA Button 2 URL : `/products/reformer-onapilate`

### Menu de Navigation

1. Allez dans **Boutique en ligne** > **Navigation**
2. Créez/modifiez le menu principal
3. Ajoutez :
   - **Accueil** → `/` (page d'accueil)
   - **Produit** → `/products/reformer-onapilate` (votre produit)
   - Le menu sera automatiquement affiché dans le header

## 📝 Résumé des URLs Shopify

- **Page d'accueil** : `/` (automatique)
- **Produit** : `/products/[handle-du-produit]`
- **Panier** : `/cart`
- **Checkout** : Géré automatiquement par Shopify

## 🎯 Actions Immédiates

1. ✅ **Créer votre produit** dans Shopify
2. ✅ **Configurer les URLs** dans chaque section via l'éditeur de thème
3. ✅ **Créer le menu de navigation** avec les liens vers Accueil et Produit
4. ✅ **Tester** : Cliquez sur tous les liens pour vérifier qu'ils fonctionnent

## 💡 Astuce

Pour trouver l'URL exacte de votre produit :
1. Allez dans **Produits**
2. Cliquez sur votre produit
3. L'URL est affichée en bas : `votre-boutique.myshopify.com/products/[handle]`
4. Copiez cette URL et utilisez-la dans les sections

## ❓ Problèmes Courants

**Q : Le menu ne s'affiche pas**
R : Créez un menu dans **Boutique en ligne > Navigation** et assignez-le comme "Menu principal"

**Q : Les boutons pointent vers 404**
R : Vérifiez que vous avez créé votre produit et utilisez l'URL correcte (`/products/[handle]`)

**Q : Je veux une page de paiement personnalisée**
R : Ce n'est pas possible avec Shopify standard. Le checkout est géré par Shopify. Vous pouvez le personnaliser dans **Paramètres > Checkout**
