# OnaPilate - Thème Shopify

Ce thème Shopify a été créé pour la boutique OnaPilate, spécialisée dans la vente de Reformers de Pilates.

## Structure du Thème

```
OnaPilate/
├── assets/              # CSS, JS, images
│   ├── theme.css
│   ├── theme.js
│   └── [images]
├── config/              # Configuration du thème
│   ├── config.yml
│   └── settings_schema.json
├── layout/              # Layouts
│   └── theme.liquid
├── locales/             # Traductions (optionnel)
├── sections/            # Sections réutilisables
│   ├── promo-banner.liquid
│   ├── header.liquid
│   ├── footer.liquid
│   ├── hero.liquid
│   ├── why-choose-us.liquid
│   ├── advantages.liquid
│   ├── statistics.liquid
│   ├── gallery.liquid
│   ├── email-subscription.liquid
│   ├── email-popup.liquid
│   ├── cta-final.liquid
│   ├── product-hero.liquid
│   ├── product-gallery.liquid
│   ├── product-features.liquid
│   ├── product-specifications.liquid
│   └── product-testimonials.liquid
├── snippets/            # Snippets réutilisables
└── templates/           # Templates de pages
    ├── index.liquid
    └── product.liquid
```

## Installation

1. **Créer un fichier ZIP** de tous les fichiers du thème (sauf node_modules, .git, etc.)

2. **Dans Shopify Admin** :
   - Aller dans "Boutique en ligne" > "Thèmes"
   - Cliquer sur "Ajouter un thème" > "Téléverser un fichier"
   - Sélectionner le fichier ZIP
   - Attendre la fin de l'upload

3. **Activer le thème** :
   - Cliquer sur "Actions" > "Publier"

## Configuration

### Images à uploader

Dans Shopify Admin, allez dans "Contenu" > "Fichiers" et uploadez toutes les images du dossier `assets/` :
- IMG_5559.jpg
- IMG_5560_d2276a45-f4d8-461e-947c-bc670d9a4ddf.jpg
- IMG_5561.jpg
- IMG_5563.jpg
- IMG_5564.jpg
- IMG_5565.jpg
- pexels-cottonbro-4325439_430x.webp
- Sans_titre_21_x_28_cm_430x.webp
- Ab5f88b743c2643809fca72dfa2f1e7ffY.webp

### Configuration des sections

1. **Page d'accueil** : Allez dans "Boutique en ligne" > "Pages" > Créez/modifiez la page d'accueil
2. **Sections** : Utilisez l'éditeur de thème pour configurer chaque section
3. **Produit** : Créez votre produit dans "Produits" et il utilisera automatiquement le template `product.liquid`

## Fonctionnalités

- ✅ Design responsive
- ✅ Animations fluides
- ✅ Carousels d'images
- ✅ Popup email avec code promo
- ✅ Section d'inscription email
- ✅ Navigation fixe
- ✅ Bannière promotionnelle
- ✅ Intégration Shopify native (produits, panier, etc.)

## Personnalisation

Toutes les sections sont personnalisables via l'éditeur de thème Shopify :
- Textes
- Images
- Couleurs (via settings_schema.json)
- Liens et URLs

## Support

Pour toute question, consultez la documentation Shopify : https://shopify.dev/themes
