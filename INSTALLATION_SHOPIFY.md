# Guide d'Installation - Thème OnaPilate pour Shopify

## 📦 Préparation du Thème

### Étape 1 : Créer un fichier ZIP

1. Sélectionnez tous les dossiers et fichiers suivants :
   - `assets/`
   - `config/`
   - `layout/`
   - `sections/`
   - `snippets/` (si présent)
   - `templates/`
   - `locales/` (si présent)

2. **IMPORTANT** : Ne pas inclure :
   - `index.html`, `produit.html`, `paiement.html` (anciens fichiers HTML)
   - `img/` (les images doivent être uploadées dans Shopify)
   - `.git/`
   - `node_modules/`
   - `.DS_Store`

3. Créez un fichier ZIP avec ces dossiers

## 🚀 Installation dans Shopify

### Étape 2 : Uploader le thème

1. Connectez-vous à votre **Shopify Admin**
2. Allez dans **Boutique en ligne** > **Thèmes**
3. Cliquez sur **Ajouter un thème** > **Téléverser un fichier**
4. Sélectionnez votre fichier ZIP
5. Attendez la fin de l'upload (peut prendre quelques minutes)

### Étape 3 : Activer le thème

1. Une fois l'upload terminé, cliquez sur **Actions** > **Publier**
2. Confirmez la publication

## 🖼️ Upload des Images

### Étape 4 : Ajouter les images

1. Dans Shopify Admin, allez dans **Contenu** > **Fichiers**
2. Cliquez sur **Téléverser des fichiers**
3. Uploadez toutes les images du dossier `img/` :
   - `IMG_5559.jpg`
   - `IMG_5560_d2276a45-f4d8-461e-947c-bc670d9a4ddf.jpg`
   - `IMG_5561.jpg`
   - `IMG_5563.jpg`
   - `IMG_5564.jpg`
   - `IMG_5565.jpg`
   - `pexels-cottonbro-4325439_430x.webp`
   - `Sans_titre_21_x_28_cm_430x.webp`
   - `Ab5f88b743c2643809fca72dfa2f1e7ffY.webp`

## ⚙️ Configuration du Thème

### Étape 5 : Configurer la page d'accueil

1. Allez dans **Boutique en ligne** > **Pages**
2. Créez ou modifiez votre page d'accueil
3. Dans l'éditeur de thème, vous pouvez :
   - Ajouter/supprimer des sections
   - Modifier les textes
   - Changer les images
   - Personnaliser les couleurs

### Étape 6 : Configurer le menu de navigation

1. Allez dans **Boutique en ligne** > **Navigation**
2. Créez/modifiez le menu principal
3. Ajoutez les liens :
   - Accueil
   - Produit
   - Panier (automatique)

### Étape 7 : Créer votre produit

1. Allez dans **Produits** > **Ajouter un produit**
2. Remplissez les informations :
   - Nom du produit
   - Description
   - Prix
   - Images (utilisez les images uploadées)
3. Le template `product.liquid` sera automatiquement utilisé

## 🎨 Personnalisation

### Modifier les couleurs

1. Dans l'éditeur de thème, allez dans **Paramètres du thème**
2. Modifiez les couleurs dans la section **Colors**

### Modifier les textes

Tous les textes sont modifiables directement dans l'éditeur de thème pour chaque section.

### Modifier les images

Dans chaque section, cliquez sur l'image pour la remplacer par une autre depuis votre bibliothèque Shopify.

## 📝 Sections Disponibles

- **Hero** : Section principale avec titre et CTA
- **Why Choose Us** : Pourquoi choisir OnaPilate
- **Advantages** : Avantages du produit
- **Statistics** : Statistiques marketing
- **Gallery** : Galerie d'images avec carousel
- **Email Subscription** : Formulaire d'inscription email
- **CTA Final** : Appel à l'action final
- **Product Hero** : En-tête produit avec images
- **Product Gallery** : Galerie produit
- **Product Features** : Caractéristiques produit
- **Product Specifications** : Spécifications techniques
- **Product Testimonials** : Témoignages clients

## 🔧 Fonctionnalités

✅ Design responsive (mobile et desktop)
✅ Animations fluides
✅ Carousels d'images automatiques
✅ Popup email avec code promo
✅ Intégration Shopify native (panier, checkout)
✅ Navigation fixe avec effet de fondu
✅ Bannière promotionnelle

## ❓ Support

Pour toute question :
- Consultez la documentation Shopify : https://shopify.dev/themes
- Support Shopify : https://help.shopify.com

## 📌 Notes Importantes

1. **Tailwind CSS** : Le thème utilise Tailwind via CDN. Pour la production, vous pouvez l'intégrer localement.

2. **Images** : Toutes les images doivent être uploadées dans Shopify pour être utilisées dans les sections.

3. **Produits** : Créez votre produit dans Shopify pour que le template `product.liquid` fonctionne correctement.

4. **Email** : Les formulaires d'inscription email nécessitent une intégration avec votre service d'email marketing (Klaviyo, Mailchimp, etc.).

5. **Code Promo** : Configurez vos codes promo dans **Réductions** > **Créer une réduction**.
