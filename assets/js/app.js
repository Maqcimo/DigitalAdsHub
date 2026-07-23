
// ═══════════════════════════════════════
// DATA
// ═══════════════════════════════════════
const P = {
  facebook:{name:'Facebook',icon:'<svg width="28" height="28" viewBox="0 0 24 24"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.887v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" fill="white"/></svg>',color:'#1877F2',sub:'Meta Ads Manager · Feed, Stories, Reels, Messenger, Audience Network',
    hasMusic:true,musicUrl:'https://www.facebook.com/sound/collection',musicLabel:'Bibliothèque musicale Meta',musicNote:'Musique libre de droits pour vos publicités Facebook & Instagram. Plus de 10 000 titres disponibles gratuitement.',
    hasStickers:true,
    formats:[
      {name:'Image Unique',desc:'Format de base, universellement compatible. Idéal pour un message simple et direct.',ratio:'1:1 (carré) · 4:5 (portrait mobile)',size:'1080×1080 px · 1080×1350 px',weight:'30 Mo max',ext:'JPG, PNG',text:'125 car. (texte) · 40 car. (titre)',objs:['Notoriété','Trafic','Engagement','Conversions','Leads'],reco:'Le ratio 4:5 occupe +25% d\'espace en feed mobile. Message clé en haut. Texte limité sur l\'image.',mock:'square'},
      {name:'Vidéo In-Feed',desc:'Lecture automatique sans son dans le fil. Sous-titres indispensables (85% visionné sans son). Texte intro : 150 car. recommandés (600 max). Titre : 70 car. recommandés (200 max).',ratio:'1:1 · 4:5 (recommandé mobile) · 9:16 · 16:9',size:'1920×1080 (16:9) · 1080×1080 (1:1) · 1080×1350 (4:5) · 720×1280 (9:16)',weight:'4 Go max',ext:'MP4, MOV, GIF (H.264)',duration:'3s – 30 min (idéal : 15-30s awareness · <2 min considération)',text:'Intro : 150 car. recommandés, 600 max · Titre : 70 car. recommandés, 200 max',objs:['Notoriété','Trafic','Vues vidéo','Conversions','Engagement'],reco:'Message clé dans les 3 premières secondes. Toujours ajouter des sous-titres. Format 4:5 recommandé mobile (+25% écran). < 30fps.',mock:'video-feed'},
      {name:'Carrousel',desc:'2 à 10 cartes scrollables. Idéal pour plusieurs produits ou une narration multi-étapes.',ratio:'1:1 par carte',size:'1080×1080 px par carte',weight:'30 Mo/image · 4 Go/vidéo',ext:'JPG, PNG, MP4',cards:'2 à 10 cartes',text:'40 car. (titre) · 125 car. (texte)',objs:['Trafic','Conversions','Leads','Ventes catalogue'],reco:'⚠️ Indisponible avec l\'objectif Engagement. Première carte = accroche forte. Raconter une histoire de gauche à droite.',mock:'carousel'},
      {name:'Stories / Reels',desc:'Format plein écran vertical immersif. Lecture automatique. Stickers interactifs disponibles.',ratio:'9:16 (obligatoire)',size:'1080×1920 px',weight:'4 Go max',ext:'MP4, MOV, JPG, PNG',duration:'Stories : 1-60s · Reels : 1s-15min (idéal : 15-60s)',text:'Garder 14% haut et 20% bas libres (UI)',objs:['Notoriété','Trafic','Vues vidéo','Conversions','Leads'],reco:'Format natif 9:16 obligatoire. Stickers interactifs disponibles (voir ci-dessous). CTA en overlay.',mock:'stories'},
      {name:'Collection',desc:'Visuel principal + 4 produits catalogue. Ouvre une Instant Experience in-app. E-commerce only.',ratio:'1:1 ou 4:5 (principal)',size:'1080×1080 px minimum',weight:'4 Go (vidéo) · 30 Mo (image)',ext:'MP4, JPG, PNG',text:'25 car. (titre)',objs:['Ventes catalogue','Trafic'],reco:'Nécessite un catalogue Facebook connecté. Réservé aux objectifs Ventes et Trafic. Indisponible en Notoriété/Engagement.',mock:'collection'},
    ],
    restrictions:[
      {combo:'Carrousel + Objectif Engagement',status:'❌',expl:'Combinaison techniquement impossible. Le gestionnaire Meta ne propose pas le carrousel lorsque l\'objectif Engagement est sélectionné.'},
      {combo:'Collection + Notoriété / Engagement',status:'❌',expl:'Le format Collection est lié au catalogue produit. Exclusivement disponible pour les objectifs Ventes et Trafic.'},
      {combo:'Publicité Dynamique (DPA) + Notoriété',status:'❌',expl:'Les Dynamic Product Ads nécessitent un pixel et un catalogue. Disponibles uniquement en Ventes et Trafic.'},
      {combo:'Stories 9:16 + Feed uniquement',status:'❌',expl:'Un visuel Stories 9:16 ne peut pas être diffusé en Feed sans recadrage — formats incompatibles.'},
      {combo:'Audience Network + Campagnes de performance',status:'⚠️',expl:'L\'Audience Network génère des clics accidentels sur mobile. Fortement conseillé de l\'exclure pour les campagnes conversion.'},
      {combo:'Alcool + Ciblage moins de 18 ans',status:'❌',expl:'Loi Évin + règles Meta France : ciblage alcool interdit pour les -18 ans. Mention légale obligatoire.'},
      {combo:'Catégories spéciales (religion, santé, ethnie)',status:'❌',expl:'Ciblage basé sur des catégories spéciales totalement interdit sur Meta.'},
      {combo:'Médicaments sur ordonnance',status:'❌',expl:'Interdit sur Meta France. Seuls les médicaments OTC (sans ordonnance) peuvent être annoncés, sous conditions.'},
      {combo:'Jeux d\'argent sans autorisation Meta',status:'❌',expl:'Le compte publicitaire doit obtenir une autorisation préalable Meta. Seuls les opérateurs agréés ANJ peuvent diffuser.'},
    ],
    kpi:{cpm:1.00,cpc:0.50,cpInt:0.20,cpFoll:1.50,cpV15:0.02,tvue15:'8%',note:'CPM parmi les plus bas du marché. Idéal pour les grandes portées à budget limité. GP : CPM 0,80€ / CPC 0,60€.'},
    pixel:{title:'Meta Pixel & API Conversions',steps:[
      {n:1,title:'Créer votre pixel dans Meta Business Manager',desc:'Accédez à Events Manager → Sources de données → Ajouter une source de données → Pixel Meta. Nommez votre pixel et validez.',link:'https://business.facebook.com/events_manager',linkLabel:'Ouvrir Events Manager'},
      {n:2,title:'Installer le code de base sur votre site',desc:'Copiez le code pixel de base fourni par Meta et collez-le dans la section <head> de toutes vos pages. Pour WordPress, utilisez le plugin Meta Pixel officiel.',link:'https://www.facebook.com/business/help/952192354843755',linkLabel:'Documentation pixel Meta'},
      {n:3,title:'Configurer les événements standards',desc:'Ajoutez des événements clés : PageView (automatique), ViewContent, AddToCart, Purchase, Lead, CompleteRegistration. Chaque événement doit être déclenché au bon moment.'},
      {n:4,title:'Activer l\'API Conversions (recommandé)',desc:'L\'API Conversions envoie les événements côté serveur, contournant les bloqueurs de publicité et iOS 14.5. Indispensable pour maintenir la qualité des données de conversion.',link:'https://www.facebook.com/business/help/2041148702652965',linkLabel:'Guide API Conversions'},
      {n:5,title:'Vérifier votre domaine et tester',desc:'Dans Events Manager, utilisez l\'outil "Tester les événements" pour vérifier que le pixel envoie correctement. Vérifiez aussi votre domaine dans Business Manager → Paramètres de l\'entreprise.',link:'https://www.facebook.com/business/help/286768115176155',linkLabel:'Outil de test d\'événements'},
    ]}
  },
  instagram:{name:'Instagram',icon:'<svg width="28" height="28" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="white"/></svg>',color:'#C13584',sub:'Meta Ads Manager · Feed, Stories, Reels, Explore',
    hasMusic:true,musicUrl:'https://www.facebook.com/sound/collection',musicLabel:'Bibliothèque musicale Meta (Facebook & Instagram)',musicNote:'Bibliothèque musicale partagée entre Facebook et Instagram. Musique libre de droits pour vos publicités.',
    hasStickers:true,
    formats:[
      {name:'Image Feed (Portrait)',desc:'Photo sponsorisée dans le fil Instagram. Format portrait 4:5 = maximum de surface sur mobile.',ratio:'1:1 (carré) · 4:5 (portrait)',size:'1080×1080 px · 1080×1350 px',weight:'30 Mo max',ext:'JPG, PNG',text:'125 car. · 1ère ligne visible avant "voir plus"',objs:['Notoriété','Trafic','Conversions','Engagement','Leads'],reco:'Le 4:5 portrait occupe +25% de surface en feed mobile. Image de qualité irréprochable — audience très exigeante visuellement.',mock:'square'},
      {name:'Reels Sponsorisés',desc:'Vidéo verticale plein écran dans le fil Reels. Format natif ultra-engageant. Style authentique attendu.',ratio:'9:16 (obligatoire)',size:'1080×1920 px',weight:'1 Go max',ext:'MP4, MOV',duration:'1s – 90s (idéal : 15-30s)',objs:['Notoriété','Trafic','Vues vidéo','Engagement','Conversions'],reco:'Contenu natif > contenu très produit. Trends musicales + transitions. Message clé dans les 3 premières secondes.',mock:'stories'},
      {name:'Stories avec Stickers Interactifs',desc:'Format plein écran entre stories. Les stickers interactifs permettent sondages, quiz, compte à rebours dans les publicités.',ratio:'9:16 (obligatoire)',size:'1080×1920 px',weight:'30 Mo (image) · 4 Go (vidéo)',ext:'JPG, PNG, MP4, MOV',duration:'Image : 5s · Vidéo : 1-60s',text:'Zone de sécurité : 250px haut / 400px bas',objs:['Notoriété','Trafic','Engagement','Conversions','Leads'],reco:'Idéal pour les offres flash et CTAs directs. Sticker Sondage = +3x de vues à 3s selon Meta. 1 seul CTA actif à la fois.',mock:'stories'},
      {name:'Carrousel Instagram',desc:'2 à 10 cartes dans le feed. Narration visuelle et présentation de gamme produit.',ratio:'1:1 par carte',size:'1080×1080 px par carte',weight:'30 Mo/image',ext:'JPG, PNG',cards:'2 à 10 cartes',text:'125 car. · La 1ère image est la plus vue',objs:['Trafic','Conversions','Leads'],reco:'⚠️ Indisponible avec Engagement. Première carte = forte accroche. Raconter une histoire en plusieurs slides.',mock:'carousel'},
      {name:'Explore Ads',desc:'Publicités dans l\'onglet Explore (loupe). Touche des utilisateurs en mode découverte active.',ratio:'1:1 · 4:5 · 9:16',size:'1080×1080 px recommandé',weight:'30 Mo max',ext:'JPG, PNG, MP4',text:'125 car.',objs:['Notoriété','Trafic','Conversions'],reco:'Audience en phase de découverte = fort intent d\'acquisition. Idéal pour toucher de nouvelles audiences non exposées à la marque.',mock:'square'},
    ],
    restrictions:[
      {combo:'Carrousel + Engagement',status:'❌',expl:'Même règle que Facebook : le carrousel est indisponible avec l\'objectif Engagement sur Instagram.'},
      {combo:'Sticker CTA + Autre sticker interactif simultané',status:'❌',expl:'Dans une story sponsorisée, le bouton d\'action (CTA) est unique et ne peut pas être combiné avec d\'autres stickers interactifs.'},
      {combo:'Vidéo horizontale (16:9) + Reels',status:'❌',expl:'Les Reels exigent du 9:16 natif. Vidéo 16:9 = bandes noires ou refus.'},
      {combo:'Stickers Musique/Dévoiler/Découpages dans Ads',status:'❌',expl:'Les stickers Musique, Dévoiler et Découpages (arrivés en mai 2024) ne sont pas compatibles avec les publicités sponsorisées.'},
      {combo:'GIFs et musique protégée dans les Stories Ads',status:'❌',expl:'Les GIFs tiers, la musique protégée par droits et certains stickers animés complexes ne fonctionnent pas dans les publicités.'},
      {combo:'Chirurgie esthétique + avant/après',status:'❌',expl:'Meta interdit les publicités présentant des images avant/après de chirurgie plastique sur Instagram.'},
      {combo:'Ciblage -18 ans + alcool',status:'❌',expl:'Interdit. Meta bloque automatiquement le ciblage alcool pour les mineurs en France.'},
    ],
    kpi:{cpm:1.40,cpc:0.80,cpInt:0.40,cpFoll:2.50,cpV15:0.04,tvue15:'6%',note:'CPM supérieur à Facebook, audience 18-34 ans très engagée visuellement. GP : CPM 1,20€ / CPC 0,90€.'},
    pixel:{title:'Meta Pixel (partagé Facebook/Instagram)',steps:[
      {n:1,title:'Un seul pixel pour Facebook ET Instagram',desc:'Meta utilise le même pixel pour Facebook et Instagram. Si vous l\'avez déjà configuré pour Facebook, il est automatiquement actif pour Instagram. Pas de double installation.'},
      {n:2,title:'Vérifier les placements Instagram dans Events Manager',desc:'Dans Events Manager → votre pixel → Paramètres, vérifiez que les domaines liés à vos comptes Instagram Business sont bien déclarés.',link:'https://business.facebook.com/events_manager',linkLabel:'Events Manager Meta'},
      {n:3,title:'Configurer le Partnership Ads (Boost influenceurs)',desc:'Pour booster du contenu influenceur via Partnership Ads, le créateur doit vous accorder accès dans ses Paramètres Créateur → Partenariats commerciaux. Le pixel de l\'annonceur s\'applique alors automatiquement.',link:'https://www.facebook.com/business/help/1835369009991714',linkLabel:'Guide Partnership Ads'},
    ]}
  },
  youtube:{name:'YouTube',icon:'<svg width="28" height="28" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" fill="white"/></svg>',color:'#FF0000',sub:'Google Ads · Instream, Bumper, Non-Skippable, Discovery, Shorts',
    formats:[
      {name:'Instream Skippable',desc:'Passable après 5s. Diffusée avant/pendant/après une vidéo YouTube. Format le plus utilisé.',ratio:'16:9',size:'1920×1080 px recommandé',weight:'1 Go max',ext:'MP4, MOV, AVI',duration:'12s minimum (idéal : 15-30s)',objs:['Notoriété','Trafic','Vues vidéo','Conversions'],reco:'Message clé dans les 5 premières secondes (avant skip). Branding dès la 1ère seconde. CTA verbal + overlay cliquable.',mock:'video-16-9'},
      {name:'Bumper Ad (6 secondes)',desc:'Vidéo non passable de 6 secondes maximum. Format de rappel et mémorisation.',ratio:'16:9',size:'1920×1080 px',weight:'1 Go max',ext:'MP4',duration:'6 secondes maximum obligatoire',objs:['Notoriété','Mémorisation'],reco:'À combiner avec des Instream pour ancrer le message. Un seul message fort, aucune distraction. Idéal en fin de campagne.',mock:'video-16-9'},
      {name:'Non-Skippable (15-30s)',desc:'Vidéo non passable. L\'audience regarde intégralement. Uniquement en achat CPM notoriété.',ratio:'16:9',size:'1920×1080 px',weight:'1 Go max',ext:'MP4',duration:'15 à 30 secondes (pas plus)',objs:['Notoriété uniquement'],reco:'⚠️ Uniquement en objectif Notoriété (CPM). Indisponible pour Trafic ou Conversions. Grandes campagnes de lancement uniquement.',mock:'video-16-9'},
      {name:'In-Feed Video (Discovery)',desc:'Résultats de recherche YouTube et suggestions. Touche une audience en intent actif.',ratio:'16:9',size:'Vignette 1280×720 px',weight:'1 Go max',ext:'MP4',duration:'Illimitée',text:'Titre : 100 car. · Description : 2×35 car.',objs:['Trafic','Notoriété','Vues vidéo'],reco:'Vignette soignée = facteur clé. Cibler des mots-clés pertinents. Idéal pour audiences qualifiées en intent.',mock:'video-16-9'},
      {name:'YouTube Shorts Ads',desc:'Publicités entre YouTube Shorts (vidéos verticales courtes). Format en pleine expansion.',ratio:'9:16',size:'1080×1920 px',weight:'1 Go max',ext:'MP4',duration:'60 secondes maximum',objs:['Notoriété','Trafic'],reco:'Format en évolution, métriques encore moins fiables. Vidéos nativement verticales obligatoires. Budget de test recommandé.',mock:'stories'},
    ],
    restrictions:[
      {combo:'Non-Skippable + Objectif Trafic / Conversions',status:'❌',expl:'Le format non-skippable est exclusivement disponible pour les objectifs Notoriété (CPM). Impossible en objectif performance.'},
      {combo:'Bumper Ad + durée > 6 secondes',status:'❌',expl:'Le Bumper Ad est limité à 6 secondes maximum. Toute vidéo plus longue sera refusée.'},
      {combo:'Vidéo < 12s en Instream Skippable',status:'❌',expl:'L\'Instream Skippable exige une durée minimum de 12 secondes.'},
      {combo:'Médicaments sur ordonnance',status:'❌',expl:'Totalement interdit sur YouTube France. Google vérifie la conformité avant toute diffusion.'},
      {combo:'Jeux d\'argent sans certification Google',status:'❌',expl:'Seuls les opérateurs certifiés Google et agréés ANJ peuvent diffuser en France.'},
      {combo:'Publicités dans contenu COPPA (enfants)',status:'❌',expl:'Les publicités personnalisées sont interdites sur les vidéos "destinées aux enfants".'},
    ],
    kpi:{cpm:3.00,cpc:1.20,cpInt:null,cpV30:0.02,tvue30:'40%',note:'CPM élevé compensé par un taux d\'attention exceptionnel (40%). GP : CPM 2,50€ / CPC 1,00€ / TVue 35%.'},
    pixel:{title:'Google Tag & Suivi des conversions YouTube',steps:[
      {n:1,title:'Créer un tag de conversion dans Google Ads',desc:'Dans Google Ads → Outils → Conversions → Nouvelle action de conversion. Sélectionnez "Site Web" et configurez l\'action souhaitée (achat, lead, page vue).',link:'https://support.google.com/google-ads/answer/6095821',linkLabel:'Guide conversions Google Ads'},
      {n:2,title:'Installer Google Tag (gtag.js) sur votre site',desc:'Installez le Google Tag global sur toutes les pages de votre site. Recommandé via Google Tag Manager pour simplifier la gestion. Chaque conversion a un ID unique à configurer.',link:'https://support.google.com/tagmanager/answer/6103696',linkLabel:'Google Tag Manager'},
      {n:3,title:'Configurer le remarketing YouTube',desc:'Le remarketing YouTube utilise les listes d\'audiences Google Ads. Activez la collecte de données de remarketing dans votre tag Google, puis créez des listes dans Gestionnaire d\'audience.',link:'https://support.google.com/google-ads/answer/2472738',linkLabel:'Remarketing YouTube'},
      {n:4,title:'Lier Google Ads à Google Analytics 4',desc:'La liaison GA4 ↔ Google Ads permet d\'importer les conversions GA4 et d\'enrichir les audiences. Dans GA4 → Admin → Liens Google Ads.',link:'https://support.google.com/analytics/answer/9379420',linkLabel:'Liaison GA4 / Google Ads'},
    ]}
  },
  tiktok:{name:'TikTok',icon:'<svg width="28" height="28" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" fill="white"/></svg>',color:'#010101',sub:'TikTok Ads Manager · In-Feed, TopView, Spark Ads, Branded Hashtag',
    hasMusic:true,musicUrl:'https://ads.tiktok.com/business/creativecenter/music/pc/en?from=001117',musicLabel:'TikTok Commercial Music Library',musicNote:'Bibliothèque musicale dédiée aux publicités TikTok. Accès à des milliers de titres utilisables dans vos campagnes payantes.',
    formats:[
      {name:'In-Feed Ad',desc:'Vidéo native dans le fil "Pour toi". Ressemble à du contenu organique. Format de base.',ratio:'9:16 (obligatoire) · 1:1 accepté',size:'1080×1920 px',weight:'500 Mo max',ext:'MP4, MOV, AVI',duration:'1s – 10min (idéal : 21-34s)',text:'1-100 car. · Bouton CTA disponible',objs:['Notoriété','Trafic','Vues vidéo','Conversions','Leads','Engagement'],reco:'Message dans les 3 premières secondes. Son et musique obligatoires pour performer. Style natif TikTok > production trop léchée.',mock:'stories'},
      {name:'TopView',desc:'Première vidéo vue à l\'ouverture de l\'app. Format premium à visibilité maximale garantie.',ratio:'9:16',size:'1080×1920 px',weight:'500 Mo max',ext:'MP4',duration:'5s – 60s',objs:['Notoriété massive'],reco:'Format premium à réserver aux grandes campagnes de lancement. Budget minimum élevé. Son auto-play garanti.',mock:'stories'},
      {name:'Spark Ads',desc:'Amplification d\'un post TikTok existant (marque ou créateur autorisé). 100% natif.',ratio:'Hérite du post original',size:'Hérite du post original',weight:'N/A',ext:'Post TikTok organique existant',objs:['Notoriété','Trafic','Engagement','Vues vidéo'],reco:'Le format le plus authentique et souvent le plus performant. Prioriser les posts déjà performants organiquement. Indispensable pour les campagnes influence.',mock:'stories'},
      {name:'Branded Hashtag Challenge',desc:'Hashtag sponsorisé avec page dédiée. Génère du User-Generated Content massivement.',ratio:'9:16',size:'1080×1920 px',weight:'500 Mo max',ext:'MP4',duration:'15-60s',objs:['Engagement','Notoriété','UGC'],reco:'Budget minimum ~50K€. Nécessite un brief créatif très fort pour générer la participation. Réservé aux grandes marques.',mock:'stories'},
    ],
    restrictions:[
      {combo:'Vidéo horizontale (16:9) + Feed TikTok',status:'❌',expl:'TikTok est 100% vertical. Toute vidéo non 9:16 sera refusée ou affichée avec des bandes noires très dégradantes.'},
      {combo:'Image statique + Campagne performance',status:'⚠️',expl:'TikTok est une plateforme vidéo. Les images statiques sont acceptées mais très sous-performantes.'},
      {combo:'Ciblage comportemental + 13-17 ans',status:'❌',expl:'Interdit. Les mineurs ne peuvent être ciblés que par âge et localisation. Aucun ciblage par intérêt ou comportement.'},
      {combo:'Reciblage + moins de 18 ans',status:'❌',expl:'Le reciblage est totalement interdit pour les utilisateurs mineurs sur TikTok.'},
      {combo:'Tabac / Cigarettes électroniques',status:'❌',expl:'Totalement interdit sur TikTok, y compris pour les e-cigarettes sans nicotine.'},
      {combo:'Alcool + ciblage -25 ans',status:'❌',expl:'TikTok France impose un ciblage +25 ans pour les marques d\'alcool.'},
      {combo:'Contenu politique',status:'❌',expl:'Publicités politiques totalement interdites sur TikTok.'},
    ],
    kpi:{cpm:2.50,cpc:0.80,cpInt:null,cpFoll:1.20,cpV15:0.04,tvue15:'5%',note:'CPM modéré, fort potentiel de reach sur les 18-34 ans. GP : CPM 2,00€ / CP Follower 1,00€.'},
    pixel:{title:'TikTok Pixel & Events API',steps:[
      {n:1,title:'Créer votre TikTok Pixel dans Ads Manager',desc:'Dans TikTok Ads Manager → Actifs → Événements → Créer un pixel. Choisissez "Web Pixel" et donnez-lui un nom. Deux méthodes d\'installation : code manuel ou partenaires (Shopify, WooCommerce).',link:'https://ads.tiktok.com/help/article/get-started-pixel',linkLabel:'Guide TikTok Pixel officiel'},
      {n:2,title:'Installer le code pixel sur votre site',desc:'Copiez le code pixel et collez-le dans la section <head> de toutes vos pages. Pour Shopify, utilisez l\'intégration native TikTok disponible dans l\'App Store Shopify.',link:'https://ads.tiktok.com/help/article/tiktok-pixel-shopify',linkLabel:'Intégration Shopify TikTok'},
      {n:3,title:'Configurer les événements standards',desc:'Ajoutez les événements : ViewContent, AddToCart, InitiateCheckout, Purchase, CompleteRegistration. Utilisez l\'outil "Test Events" dans Ads Manager pour vérifier chaque événement.',link:'https://ads.tiktok.com/help/article/standard-events-parameters',linkLabel:'Événements standards TikTok'},
      {n:4,title:'Activer l\'Events API (serveur)',desc:'L\'Events API TikTok envoie les événements côté serveur. Indispensable pour contourner les bloqueurs iOS. Configuration via votre back-end ou via des partenaires certifiés.',link:'https://ads.tiktok.com/help/article/events-api',linkLabel:'TikTok Events API'},
      {n:5,title:'Créer vos audiences personnalisées',desc:'Une fois le pixel actif avec des données, créez des audiences personnalisées (visiteurs site, acheteurs) et des audiences similaires dans Ads Manager → Actifs → Audiences.',},
    ]}
  },
  linkedin:{name:'LinkedIn',icon:'<svg width="28" height="28" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="white"/></svg>',color:'#0A66C2',sub:'Campaign Manager · Single Image, Vidéo, Carrousel, Message Ads, Document Ads',
    formats:[
      {name:'Single Image Ad',desc:'Format le plus polyvalent de LinkedIn. Image sponsorisée dans le fil desktop et mobile.',ratio:'1:1 (recommandé) · 1.91:1',size:'1200×1200 px · 1200×628 px',weight:'5 Mo max',ext:'JPG, PNG',text:'Titre : 70 car. · Intro : 150 car.',objs:['Notoriété','Trafic','Engagement','Leads','Conversions'],reco:'Visuels professionnels avec visages humains = meilleur CTR. Message B2B direct et assumé.',mock:'square'},
      {name:'Vidéo LinkedIn',desc:'Vidéo native dans le fil. Lecture auto sans son. Contenu expert et informatif attendu.',ratio:'1:1 · 9:16 · 16:9',size:'1080×1080 px recommandé',weight:'500 Mo max',ext:'MP4',duration:'3s – 30min (idéal : 30s-2min)',text:'Sous-titres obligatoires',objs:['Notoriété','Vues vidéo (6s)','Trafic','Engagement'],reco:'Contenu expert > contenu publicitaire. Témoignages clients, démonstrations, interviews. Sous-titres indispensables.',mock:'video-feed'},
      {name:'Carrousel LinkedIn',desc:'2 à 10 cartes. Très adapté pour des étapes de processus, chiffres clés, gamme de services.',ratio:'1:1 par carte',size:'1080×1080 px par carte',weight:'10 Mo/carte',ext:'JPG, PNG',cards:'2 à 10 cartes',text:'Titre intro : 150 car.',objs:['Trafic','Engagement','Leads'],reco:'Idéal pour livres blancs, études de cas, infographies. Raconter une histoire pédagogique. Dernière carte = CTA fort.',mock:'carousel'},
      {name:'Message Ads (InMail)',desc:'Message direct dans la boîte LinkedIn des membres ciblés. 1 Message Ad reçu par utilisateur tous les 30 jours.',ratio:'N/A',size:'Image : 300×250 px',weight:'2 Mo (image)',ext:'JPG, PNG',text:'Objet : 60 car. · Corps : 1500 car.',objs:['Leads','Trafic','Événements'],reco:'Indisponible pour Notoriété. Ton personnalisé et direct. Taux d\'ouverture 40-60%. CTA unique et clair.',mock:'message'},
      {name:'Document Ads',desc:'PDF partageable dans le fil. Utilisateur lit les premières pages sans quitter LinkedIn.',ratio:'1:1 (couverture)',size:'Couverture 1200×1200 px · PDF 100 Mo max',weight:'100 Mo',ext:'PDF',text:'Titre intro : 150 car.',objs:['Leads','Engagement','Notoriété'],reco:'Excellent pour le lead nurturing B2B. Combiner avec Lead Gen Form : PDF se déverrouille après soumission. Taux de conversion excellent.',mock:'square'},
    ],
    restrictions:[
      {combo:'Message Ads + Notoriété',status:'❌',expl:'Les Message Ads sont exclusivement disponibles pour Leads, Trafic et Événements. Incompatible avec Notoriété.'},
      {combo:'Reciblage + audience < 300 membres',status:'❌',expl:'LinkedIn exige une audience minimum de 300 membres. En dessous, la campagne ne démarre pas.'},
      {combo:'Vidéo + Conversions directes',status:'⚠️',expl:'LinkedIn n\'est pas optimisé pour la conversion directe. Coût par conversion très élevé.'},
      {combo:'Ciblage discriminatoire offres emploi',status:'❌',expl:'Interdit d\'exclure des candidats sur critères d\'âge, genre ou origine dans les publicités d\'emploi.'},
      {combo:'Alcool et tabac',status:'⚠️',expl:'Fortement déconseillé. Ces catégories peuvent être refusées selon les visuels et le ciblage sur une plateforme professionnelle.'},
    ],
    kpi:{cpm:4.50,cpc:2.50,cpInt:null,cpV6:0.03,tvue6:'50%',note:'CPM premium compensé par la précision du ciblage B2B et un taux de vue élevé. GP : CPM 3,50€ / CPC 2,00€ / TVue 60%.'},
    pixel:{title:'LinkedIn Insight Tag',steps:[
      {n:1,title:'Récupérer votre Insight Tag dans Campaign Manager',desc:'Dans LinkedIn Campaign Manager → Actifs du compte → Insight Tag. Copiez le script JavaScript global de votre compte LinkedIn Ads.',link:'https://www.linkedin.com/help/lms/answer/a418880',linkLabel:'Guide Insight Tag LinkedIn'},
      {n:2,title:'Installer l\'Insight Tag sur votre site',desc:'Collez le code dans la section <head> de toutes vos pages. Pour WordPress, utilisez le plugin officiel LinkedIn Insight Tag. Pour Shopify, le code s\'ajoute dans Boutique en ligne → Thèmes → Modifier le code.',},
      {n:3,title:'Configurer le suivi des conversions',desc:'Dans Campaign Manager → Actifs → Conversions → Créer une conversion. Définissez l\'action (page de confirmation, événement JavaScript). Associez la conversion à vos campagnes.',link:'https://www.linkedin.com/help/lms/answer/a1341891',linkLabel:'Suivi des conversions LinkedIn'},
      {n:4,title:'Créer des audiences Matched (CRM & site)',desc:'Avec l\'Insight Tag actif, créez des audiences de reciblage (visiteurs site) ou importez des listes CRM (emails d\'entreprise) dans Actifs → Audiences.',link:'https://www.linkedin.com/help/lms/answer/a424090',linkLabel:'Matched Audiences LinkedIn'},
      {n:5,title:'Vérifier le bon fonctionnement',desc:'Utilisez l\'extension Chrome "LinkedIn Insight Tag Helper" pour tester que le tag est bien déclenché sur vos pages. Le statut passe à "Actif" dans Campaign Manager sous 24h.',},
    ]}
  },
  snapchat:{name:'Snapchat',icon:'<img src="assets/img/img-2.png" width="32" height="32" style="border-radius:8px;display:block" alt="Snapchat">',color:'#FFCA28',sub:'Snap Ads Manager · Snap Ads, Story Ads, Collection Ads, AR Lens',
    formats:[
      {name:'Snap Ad (Vidéo)',desc:'Vidéo plein écran entre stories d\'amis. Lecture automatique avec son (rare avantage).',ratio:'9:16 (obligatoire)',size:'1080×1920 px',weight:'1 Go max',ext:'MP4, MOV',duration:'3s – 3min (idéal : 3-10s)',text:'Marque : 25 car. · Titre : 34 car.',objs:['Notoriété','Trafic','Vues vidéo','Conversions','Leads'],reco:'Vidéo courte et punchy. Message et CTA dans les 3 premières secondes. Son activé par défaut = avantage unique.',mock:'stories'},
      {name:'Story Ads',desc:'Série de 3 à 20 Snaps dans l\'onglet Discover. Narration de marque multi-étapes.',ratio:'9:16',size:'1080×1920 px par snap',weight:'32 Mo par snap',ext:'MP4, MOV, JPG, PNG',duration:'Jusqu\'à 20 snaps · max 10s/snap',objs:['Notoriété','Trafic','Engagement'],reco:'Chaque snap doit pouvoir fonctionner seul. Idéal pour du storytelling produit multi-étapes.',mock:'stories'},
      {name:'Collection Ads',desc:'Vidéo principale + 4 vignettes produits. Swipe-up vers le catalogue. Idéal retail.',ratio:'9:16 (vidéo) · 1:1 (vignettes)',size:'1080×1920 px (vidéo) · 160×160 px (vignettes)',weight:'32 Mo vidéo',ext:'MP4, JPG, PNG',duration:'3s – 3min',text:'25 car. par vignette',objs:['Ventes','Trafic'],reco:'⚠️ Indisponible pour Notoriété et Engagement. Nécessite un catalogue produit connecté.',mock:'collection'},
      {name:'AR Lens',desc:'Filtre réalité augmentée interactif que les Snapchatters utilisent et partagent.',ratio:'9:16',size:'Variable',weight:'8 Mo max',ext:'Créé via Lens Studio',objs:['Engagement','Notoriété','UGC'],reco:'Nécessite un prestataire créatif spécialisé ou Lens Studio. Budget de production élevé mais fort potentiel viral.',mock:'stories'},
    ],
    restrictions:[
      {combo:'Vidéo horizontale',status:'❌',expl:'Snapchat est exclusivement vertical (9:16). Toute vidéo non verticale sera refusée.'},
      {combo:'Collection Ads + Notoriété / Engagement',status:'❌',expl:'Collection Ads nécessitent un catalogue produit. Disponibles uniquement pour Ventes et Trafic.'},
      {combo:'Reciblage des -18 ans',status:'❌',expl:'Le retargeting des utilisateurs mineurs est totalement interdit sur Snapchat.'},
      {combo:'Ciblage comportemental des 13-17 ans',status:'❌',expl:'Les mineurs ne peuvent être ciblés que par âge et localisation.'},
      {combo:'Chirurgie esthétique + avant/après',status:'❌',expl:'Snapchat interdit les publicités présentant des images avant/après de chirurgie plastique.'},
    ],
    kpi:{cpm:1.50,cpc:0.60,cpInt:null,cpV15:0.02,tvue15:'5%',note:'Audience 13-34 ans. CPM compétitif avec inventaire exclusif vertical. Identique Secteurs Culturel et GP.'},
    pixel:{title:'Snap Pixel',steps:[
      {n:1,title:'Créer votre Snap Pixel dans Ads Manager',desc:'Dans Snapchat Ads Manager → Actifs → Snap Pixel → Créer un Pixel. Nommez votre pixel et récupérez le code JavaScript.',link:'https://businesshelp.snapchat.com/s/article/snap-pixel-about',linkLabel:'Guide Snap Pixel officiel'},
      {n:2,title:'Installer le code sur votre site',desc:'Collez le code de base Snap Pixel dans la section <head> de toutes vos pages. Pour Shopify, utilisez l\'intégration native dans les paramètres Snapchat.',link:'https://businesshelp.snapchat.com/s/article/snap-pixel-implementation',linkLabel:'Guide d\'implémentation Snap Pixel'},
      {n:3,title:'Configurer les événements',desc:'Ajoutez les événements standards Snapchat : PAGE_VIEW, VIEW_CONTENT, ADD_CART, PURCHASE, SIGN_UP. Chaque événement a ses propres paramètres (valeur, devise, content_ids).',link:'https://businesshelp.snapchat.com/s/article/snap-pixel-standard-events',linkLabel:'Événements standards Snapchat'},
      {n:4,title:'Activer le Conversions API (CAPI)',desc:'Le CAPI Snapchat envoie les événements côté serveur pour les cas non couverts par le pixel (iOS, bloqueurs). Configuration technique via votre serveur.',link:'https://businesshelp.snapchat.com/s/article/conversions-api',linkLabel:'Snapchat Conversions API'},
    ]}
  },
  reddit:{name:'Reddit',icon:'<svg width="28" height="28" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" fill="white"/></svg>',color:'#FF4500',sub:'Reddit Ads · Promoted Posts, Image, Vidéo, Carrousel, Text Post',
    formats:[
      {name:'Promoted Image Post',desc:'Post sponsorisé avec image dans le fil. Ressemble à un post natif. Les utilisateurs peuvent commenter.',ratio:'1:1 · 4:3 · 16:9',size:'1080×1080 px recommandé',weight:'3 Mo max',ext:'JPG, PNG, GIF',text:'Titre : 300 car.',objs:['Notoriété','Trafic','Conversions'],reco:'Adopter le ton de la communauté. Messages trop commerciaux = commentaires négatifs. Authenticité > polish.',mock:'square'},
      {name:'Promoted Video',desc:'Vidéo en autoplay dans le fil. Long possible mais court recommandé.',ratio:'16:9 · 1:1 · 9:16',size:'1080×1080 px recommandé',weight:'1 Go max',ext:'MP4',duration:'1s – 15min (idéal : 30s)',text:'Titre : 300 car.',objs:['Notoriété','Trafic','Vues vidéo'],reco:'Sous-titres indispensables. Message adapté à la culture Reddit. Court et informatif préféré.',mock:'video-feed'},
      {name:'Promoted Carousel',desc:'2 à 6 cartes images. Disponible depuis 2022.',ratio:'1:1 par carte',size:'1080×1080 px par carte',weight:'20 Mo/carte',ext:'JPG, PNG',cards:'2 à 6 cartes',text:'Titre : 300 car.',objs:['Trafic','Notoriété'],reco:'Adapté aux audiences techniques. Contenu informatif > promotionnel pur.',mock:'carousel'},
      {name:'Text-Only Promoted Post',desc:'Post texte uniquement. Le format le plus natif à Reddit.',ratio:'N/A',size:'N/A',weight:'N/A',ext:'Texte',text:'Titre : 300 car. · Corps : 40 000 car.',objs:['Notoriété','Trafic','Engagement'],reco:'Format unique à Reddit. Idéal pour les sujets tech, finance, gaming. Texte long apprécié. Adopter le style éditorial Reddit.',mock:'text-post'},
    ],
    restrictions:[
      {combo:'Publicités dans subreddits NSFW',status:'❌',expl:'Les annonceurs ne peuvent pas diffuser dans les subreddits classés NSFW.'},
      {combo:'Cannabis / CBD',status:'❌',expl:'Totalement interdit sur Reddit.'},
      {combo:'Armes à feu (vente directe)',status:'❌',expl:'La vente directe d\'armes est interdite.'},
      {combo:'Ciblage subreddit concurrent',status:'⚠️',expl:'Techniquement possible mais risqué : l\'audience peut réagir très négativement.'},
      {combo:'Jeux d\'argent sans validation Reddit',status:'❌',expl:'Validation Reddit préalable requise. Seuls les opérateurs agréés ANJ peuvent diffuser.'},
    ],
    kpi:{cpm:5.00,cpc:0.80,cpInt:null,cpV15:null,note:'Audience de niche très engagée. CPM plus élevé mais ciblage par communauté unique. GP : CPM 3,00€.'}
  },
  pinterest:{name:'Pinterest',icon:'<svg width="28" height="28" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" fill="white"/></svg>',color:'#E60023',sub:'Pinterest Ads Manager · Pins statiques, Vidéo, Collections, Idea Pins',
    formats:[
      {name:'Pin Statique',desc:'Image sponsorisée dans le fil. Format de base très efficace pour l\'intent d\'achat.',ratio:'2:3 (recommandé) · 1:1',size:'1000×1500 px · 1000×1000 px',weight:'20 Mo max',ext:'JPG, PNG',text:'Titre : 100 car. · Description : 500 car. (indexé SEO)',objs:['Notoriété','Trafic','Conversions','Leads'],reco:'2:3 = maximum de surface dans le fil. Texte sur l\'image améliore les perfs. Description riche = meilleur SEO Pinterest.',mock:'portrait'},
      {name:'Vidéo Pin Standard',desc:'Vidéo en autoplay. Idéal pour tutoriels, recettes, démonstrations.',ratio:'9:16 · 1:1 · 16:9',size:'1080×1920 px (idéal)',weight:'2 Go max',ext:'MP4, MOV',duration:'4s – 15min (idéal : 6-15s)',objs:['Notoriété','Vues vidéo','Trafic'],reco:'Tutoriels et "how-to" très performants. Description détaillée pour le référencement interne Pinterest.',mock:'stories'},
      {name:'Max Width Video',desc:'Vidéo toute largeur du fil Pinterest. Format très impactant. Notoriété uniquement.',ratio:'1:1 · 16:9',size:'1080×1080 px',weight:'2 Go max',ext:'MP4',duration:'4s – 15min',objs:['Notoriété uniquement'],reco:'⚠️ Format réservé à la Notoriété. Indisponible pour Conversion et Leads. Grandes campagnes branding uniquement.',mock:'video-16-9'},
      {name:'Collections (Shopping Ads)',desc:'Pin principal + 4 produits catalogue. E-commerce mode, maison, beauté.',ratio:'1:1 (produits) · 2:3 (principal)',size:'1000×1500 px (principal)',weight:'20 Mo max',ext:'JPG, PNG, MP4',objs:['Ventes catalogue','Trafic'],reco:'Nécessite un catalogue produit connecté. Indisponible pour Notoriété et Engagement pur. Très fort pour le retail.',mock:'collection'},
    ],
    restrictions:[
      {combo:'Max Width Video + Conversion / Leads',status:'❌',expl:'Format exclusivement réservé à la Notoriété. Impossible en objectif performance.'},
      {combo:'Collections + Notoriété / Engagement',status:'❌',expl:'Les Collections nécessitent un catalogue produit. Disponibles uniquement pour Ventes et Trafic.'},
      {combo:'Contenu politique',status:'❌',expl:'Les publicités politiques sont totalement interdites sur Pinterest.'},
      {combo:'Produits amaigrissement / régimes strict',status:'⚠️',expl:'Pinterest a une politique stricte anti-diet-culture. Les images avant/après et les promesses de perte de poids sont souvent refusées.'},
      {combo:'Chirurgie esthétique + avant/après',status:'❌',expl:'Interdit sur Pinterest. Les résultats avant/après de chirurgie ne peuvent pas être montrés.'},
    ],
    kpi:{cpm:1.50,cpc:null,cpInt:null,cpV2:0.02,tvue:'60%',note:'Audience en forte intention d\'achat. Fort taux de vue sur contenus visuels. GP : CPV2 0,01€.'}
  },
  x:{name:'X',icon:'<svg width="28" height="28" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/></svg>',color:'#000000',sub:'X Ads · Image, Vidéo, Vertical, Carousel, Amplify',
    formats:[
      {name:'Image Ad (Promoted Ad)',desc:'Publication sponsorisée avec image, ressemblant à un post natif dans le fil. Format le plus courant. Ouvert aux Reposts, réponses et likes.',ratio:'1:1 · 1.91:1',size:'1200×1200 px (1:1) · 1200×628 px (1.91:1)',weight:'5 Mo max',ext:'JPG, PNG, GIF (rendu statique)',text:'Texte post : 280 car. · Titre lien : 70 car.',objs:['Notoriété','Trafic','Engagement'],reco:'Visuels impactants au format carré. Intégrer le message clé dans l\'image. GIF uploadé = rendu statique → préférer Video Ad pour l\'animation.',mock:'square'},
      {name:'Video Ad (Promoted Ad)',desc:'Vidéo en autoplay dans le fil. Format recommandé pour la narration et le branding. ~60% des vues se font sans son.',ratio:'16:9 · 1:1 · 9:16',size:'1280×720 px min (16:9) · 720×720 px min (1:1)',weight:'1 Go max — H.264 / MP4 ou MOV',ext:'MP4, MOV',duration:'Jusqu\'à 2min20s (certains comptes jusqu\'à 10min)',text:'Texte : 280 car. · Titre : 70 car. · Description : 200 car.',objs:['Notoriété','Vues vidéo','Trafic'],reco:'Accrocher en 3s. Sous-titres obligatoires. 15-30s recommandé. 1:1 occupe plus d\'espace à l\'écran que 16:9.',mock:'video-16-9'},
      {name:'Vertical Video Ad',desc:'Format plein écran, son activé par défaut. Surface la plus dynamique de X (~20% du temps passé quotidien). CTA cliquable dès 1 seconde. Les utilisateurs sont 7× plus enclins à interagir vs. Home Timeline.',ratio:'9:16',size:'1080×1920 px recommandé (min 720×1280)',weight:'1 Go max',ext:'MP4 (H.264, Baseline/Main/High Profile, 4:2:0)',duration:'Recommandé 15s. Max 2min20s.',text:'Texte : 280 car.',objs:['Notoriété','Engagement','Trafic'],reco:'Sound-on natif : intégrer le son comme levier expressif. Vertical first. Contenu immersif et émotionnel.',mock:'video-9-16'},
      {name:'Carousel Ad',desc:'2 à 6 images ou vidéos swipables horizontalement. Idéal pour plusieurs produits, une narrative visuelle ou un catalogue. Destinations uniques ou multiples (jusqu\'à 6 URLs).',ratio:'1:1 images · 16:9 vidéos',size:'800×800 px (1:1) · 800×450 px (16:9 vidéo) · 800×418 px (1.91:1 image)',weight:'Images : 20 Mo · Vidéos : 1 Go',ext:'JPG, PNG, MP4',cards:'2 à 6 cartes',text:'Titre par carte : 70 car. (idéal ≤50 car.) · App card : 200 car.',objs:['Trafic','Notoriété','App'],reco:'Ratio cohérent entre toutes les cartes. CTA clair. Multi-destination pour e-commerce produit par produit.',mock:'carousel'},
      {name:'Text Ad (Promoted Ad)',desc:'Publication texte pure sponsorisée. Format le plus natif de X. Aucun visuel requis. Ouvert aux interactions organiques.',ratio:'N/A',size:'N/A',weight:'N/A',ext:'Texte uniquement',text:'280 car. (chaque lien = -23 car. → 257 car. effectifs)',objs:['Engagement','Trafic'],reco:'Copywriting direct et percutant. Un seul lien. Hashtags avec parcimonie. Adopter le ton de X.',mock:'text-post'},
      {name:'Amplify Pre-Roll',desc:'Vidéo diffusée avant des contenus de 200+ publishers premium (chaînes TV, ligues sportives, médias d\'info). Alignement marque-contexte éditorial. 15+ catégories de contenu disponibles.',ratio:'1:1 recommandé · 9:16',size:'1280×720 px min (1:1 recommandé)',weight:'1 Go max',ext:'MP4',duration:'Recommandé 15s. Max 2min20s.',text:'Titre : 70 car.',objs:['Notoriété','Vues vidéo'],reco:'1:1 recommandé car il occupe plus d\'espace que 16:9. Branding dès les premières secondes. Contenu adapté au contexte éditorial.',mock:'video-16-9'},
      {name:'Timeline / Trend Takeover',desc:'Formats premium garanti en exclusivité : Timeline Takeover = 1ère pub vue à l\'ouverture de X. Trend Takeover = pub dans les tendances de l\'onglet Explorer. Maximum de reach garanti.',ratio:'Variable selon format intégré',size:'Variable',weight:'Variable',ext:'Variable',text:'Hashtag tendance : 20 car. · Description : 70 car.',objs:['Notoriété maximale'],reco:'Idéal pour lancement ou événement. Achat en gré-à-gré via équipe X. Contenu adapté à tous âges (Trend Takeover+ non age-gated).',mock:'square'},
    ],
    restrictions:[
      {combo:'Contenu politique (campagnes électorales)',status:'❌',expl:'X interdit toute publicité liée aux campagnes électorales depuis 2019. Les publicités sur des sujets politiques/géopolitiques sont très restreintes.'},
      {combo:'Contenus pour adultes',status:'❌',expl:'Interdit dans les publicités, même si X autorise ce type de contenu en organique avec paramétrage.'},
      {combo:'Armes à feu et munitions',status:'❌',expl:'Publicité pour les armes à feu et munitions interdite sans exception.'},
      {combo:'Tabac / e-cigarettes',status:'❌',expl:'Toute publicité pour les produits du tabac et la cigarette électronique est interdite.'},
      {combo:'Drogues illicites',status:'❌',expl:'Interdit sans exception.'},
      {combo:'Ciblage sur données sensibles',status:'❌',expl:'Interdiction d\'utiliser des données sensibles (santé, religion, orientation sexuelle) pour le ciblage publicitaire.'},
      {combo:'Alcool',status:'⚠️',expl:'Ciblage +18 ans obligatoire. Mention légale "À consommer avec modération" requise. Interdit dans certains pays par défaut.'},
      {combo:'Jeux d\'argent',status:'⚠️',expl:'Interdit par défaut. Opérateurs agréés ANJ uniquement en France. Pré-autorisation X obligatoire. Domaine .fr requis. Ciblage géo et âge stricts. Partenariats payants avec influenceurs = interdit depuis fév. 2026.'},
      {combo:'Produits financiers et crypto',status:'⚠️',expl:'Validation préalable X requise. En France : crypto exchanges autorisés avec restrictions. Accréditations réglementaires obligatoires.'},
      {combo:'Médicaments et santé',status:'⚠️',expl:'Médicaments sur ordonnance interdits. OTC autorisés avec restrictions selon pays. Pré-autorisation X requise.'},
      {combo:'GIF dans Image Ads',status:'⚠️',expl:'Les GIFs uploadés sont rendus comme images statiques. Utiliser Video Ad ou Vertical Video Ad pour l\'animation.'},
    ],
    pixel:null,kpi:null
  },
  twitch:{name:'Twitch',icon:'<svg width="28" height="28" viewBox="0 0 24 24"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" fill="#9146FF"/></svg>',color:'#9146FF',sub:'Twitch Ads · Video, Vertical, Display, Headliner, Sponsoring',
    formats:[
      {name:'Premium Video — Pré-roll & Mid-roll',desc:'Vidéo non-skippable diffusée avant (pré-roll) ou pendant (mid-roll) un live Twitch. Diffusion sur desktop, mobile, tablette, console et TV connectée. Taux d\'attention maximal. Viewability rate +78%.',ratio:'16:9',size:'1920×1080 px (min 1280×720)',weight:'H.264 / MP4 — Bitrate min 2 000 kbps',ext:'MP4',duration:'30s non-skippable (standard) · 60s mid-roll uniquement (surcoût)',text:'N/A — format vidéo pur',objs:['Notoriété','Branding','Completion'],reco:'30s est le standard. Accrocher dès la 1ère seconde. Adapté gaming et entertainment. +6s d\'attention publicitaire mesurée pour un 20s créatif.',mock:'video-16-9'},
      {name:'6-Second Ads (Pré-roll & Mid-roll)',desc:'Format vidéo ultra-court, non-skippable. Exclusif à Amazon Suite. Jusqu\'à 90% de VCR (Video Completion Rate). Disponible en Programmatic Guaranteed (PG) ou Programmatic Direct (PD). Toutes devices, pré/mid-roll.',ratio:'16:9',size:'1920×1080 px min',weight:'MP4',ext:'MP4',duration:'6s non-skippable',text:'N/A',objs:['Notoriété','Recall'],reco:'CPM indicatif : PG MS ~6€ · PG SS ~5€ · PD SS ~4€. CPCV estimé : 0,01€–0,015€. Idéal pour booster recall ou driver vers un contenu plus long.',mock:'video-16-9'},
      {name:'Vertical Video Ads (Outstream)',desc:'Format 9:16 natif. Desktop : vidéo silencieuse à côté du live. Mobile : plein écran avec son, skippable. Benchmark VCR : 90,2%. CTR : 0,10% sur Desktop. Creatives disponibles en 6s, 15s ou 30s.',ratio:'9:16',size:'1080×1920 px recommandé',weight:'MP4',ext:'MP4',duration:'6s, 15s ou 30s',text:'N/A',objs:['Notoriété','Branding','Reach'],reco:'CPM à partir de ~3,9€ (6s) via DSP MS & SS. Desktop-first recommandé. Concevoir pour le mobile en priorité. Message lisible sans son. Complémentaire aux Social Ads pour un reach incrémental.',mock:'video-9-16'},
      {name:'Homepage Headliner',desc:'Placement ultra-premium bundlé : bannière desktop au-dessus du fil (above-the-fold, statique) + bannière mobile plein écran et onglet Following. Fort impact de marque. Impression totale/jour garantie.',ratio:'Desktop : 450×350 px × 2 visuels · Mobile : 1080×1920 px (feed) + 640×100 px (onglet)',size:'450×350 px par visuel desktop + code couleur hex · Mobile banners bundled',weight:'150 Ko max par visuel',ext:'JPG, PNG (statique uniquement, pas d\'animation)',text:'CTA "En savoir plus" auto-généré',objs:['Notoriété maximale','Lancement'],reco:'Prévoir fondu vers couleur centrale obligatoire. Branding fort et lisible. Desktop et mobile toujours achetés ensemble. Achat en gré-à-gré Amazon Ads uniquement.'},
      {name:'Stream Display Ads (SDA)',desc:'Bannières display intégrées à côté du stream actif. Non-intrusif : son du créateur actif pendant l\'affichage. Placement contextuel, au cœur du contenu live.',ratio:'Desktop : 160×600 (Skyscraper/Mirror-C) · Mobile : 320×50 (lower-third) ou 160×600 (left-third)',size:'160×600 px ou 320×50 px',weight:'100 Ko max',ext:'PNG, JPG, GIF',duration:'Animation max 15s / 3 boucles',text:'Police min 12pt. Disclaimer max 20% hauteur.',objs:['Notoriété','Visibilité contextuelle'],reco:'Contraste élevé pour ressortir à côté du stream. Si contraste < 3:1 avec fond player, ajouter une bordure.',mock:'square'},
      {name:'Hero Slot / Channel Takeover (Sponsoring)',desc:'Activation créateur : prise de parole 1:1 sur le canal d\'un streamer partenaire. Branded banner, clickable logo, background banner, host reads ads, follower promotion. Connexion directe avec la communauté d\'un créateur. CTR moyen +2%.',ratio:'Variable selon activation',size:'Variable',weight:'Variable',ext:'Variable',text:'Variable',objs:['Considération','Engagement','Communauté'],reco:'Adapter le message au ton du créateur. Construire une narrative autour des habitudes du streamer. Métriques : CTR, temps passé, actions par live.'},
    ],
    restrictions:[
      {combo:'Technologies pub non approuvées par Amazon',status:'❌',expl:'Seuls les prestataires approuvés par Amazon Ads utilisables. Aucun tag tiers non validé. Obligation SSL/HTTPS sur tous les composants créatifs et de tracking.'},
      {combo:'Ciblage DMP tiers / cookies tiers',status:'❌',expl:'Pas de ciblage via DMP externe. Tout ciblage passe par Amazon DSP (audiences pré-définies, contextuel, géo, device, daypart) ou données first-party.'},
      {combo:'Cannabis / CBD',status:'❌',expl:'Interdit sur Twitch.'},
      {combo:'Contenus adultes',status:'❌',expl:'Catégorie Adult Only interdite dans toutes les publicités Twitch.'},
      {combo:'Armes à feu (vente directe)',status:'❌',expl:'La promotion directe de ventes d\'armes est interdite.'},
      {combo:'Alcool',status:'⚠️',expl:'Ciblage +18 ans obligatoire. Restrictions géographiques applicables selon pays de diffusion.'},
      {combo:'Jeux d\'argent',status:'⚠️',expl:'Accréditations réglementaires requises. Ciblage âge et géo stricts. Seuls opérateurs agréés ANJ en France.'},
      {combo:'Brand Safety — tiers inventaire',status:'⚠️',expl:'3 niveaux de contrôle disponibles : Expanded / Moderate / Restrictive. Possibilité d\'exclure par genre de contenu (gaming, lifestyle, etc.) ou d\'activer le filtre Family-Friendly Games.'},
      {combo:'Délais de production',status:'⚠️',expl:'Créatifs standards : 8 jours ouvrés (1 round de retours). Créatifs animés : 15 jours (2 rounds). Mise en ligne : +3 jours après validation IO et créatifs approuvés.'},
    ],
    pixel:null,kpi:null
  },
  bereal:{name:'BeReal.',icon:'<svg width="28" height="28" viewBox="0 0 200 200"><rect width="200" height="200" rx="40" fill="#000"/><text x="50%" y="56%" dominant-baseline="middle" text-anchor="middle" font-family="Arial Black,sans-serif" font-weight="900" font-size="56" fill="#fff">BeReal.</text></svg>',color:'#000000',sub:'BeReal Ads · In-Feed, Discovery, OPS, Spotlight',
    desc:'Réseau social authentique double-caméra (face + dos), majoritairement GenZ. Rachat par Voodoo en 2024. Plateforme publicitaire en fort développement avec 4 formats natifs innovants.',
    formats:[
      {name:'In-Feed Ad (HERE)',desc:'Format natif double-caméra intégré dans le fil d\'actualité. Ressemble à un vrai post BeReal : image principale (arrière) + miniature camera face. Corps de texte + CTA cliquable. Tarification CPM.',ratio:'3:4 (768×1024 px)',size:'768×1024 px (création) · Caméra face : 260×350 px (arrondi 30, contour intérieur 5px)',weight:'Photo : 1 Mo max · Vidéo : 8 Mo max',ext:'Photo : PNG ou JPG · Vidéo : MP4',duration:'12 secondes max (vidéo)',text:'Corps : 90 car. max (recommandé 20 max) · CTA : 15 car. max · Annonceur : 25 car. max · Logo : 460×460 px (carré)',objs:['Notoriété','Trafic','Engagement'],reco:'Adopter le style authentique de BeReal : vraie situation, vraie lumière. Le format double-caméra est unique — exploiter les deux vues. Son ON recommandé.',mock:'portrait'},
      {name:'Discovery Ad',desc:'Publicité intégrée dans le flux Discovery (Explore). Diffusée aux utilisateurs qui explorent du contenu en dehors de leur cercle d\'amis. Idéal pour la découverte de marque.',ratio:'3:4',size:'768×1024 px',weight:'Photo : 1 Mo · Vidéo : 8 Mo',ext:'PNG, JPG, MP4',duration:'12s max',text:'Corps : 90 car. max · CTA : 15 car. max',objs:['Notoriété','Trafic'],reco:'Contenu découverte : nouveaux produits, expériences, lifestyle. Ton authentique obligatoire, éviter le surbranding.',mock:'portrait'},
      {name:'OPS / Golden Hour',desc:'Format événementiel premium de type "Golden Hour" — moment sponsorisé déclenché dans l\'app. La marque peut s\'associer à un moment quotidien BeReal. Titre + corps de texte + CTA + visuel plein écran.',ratio:'9:16',size:'1080×1920 px',weight:'5 Mo max',ext:'PNG, JPG',duration:'Format statique',text:'Titre : 50 car. max · Corps : 120 car. max · CTA : 20 car. max',objs:['Notoriété','Engagement'],reco:'Format le plus mémorable de BeReal. Moment sponsorisé doit correspondre à l\'ADN authentique de la marque. Réservation gré-à-gré.',mock:'portrait'},
      {name:'Spotlight Ad',desc:'Format plein écran vertical dans le flux Spotlight (similaire TikTok). Lecture automatique, son on par défaut. Indicateur "Sponsored" + logo annonceur en haut. Bouton CTA en bas.',ratio:'9:16',size:'1080×1920 px',weight:'8 Mo max',ext:'MP4',duration:'12s max',text:'Annonceur : 25 car. · CTA : 15 car.',objs:['Notoriété','Vues vidéo','Trafic'],reco:'Format vertical plein écran : les 3 premières secondes sont déterminantes. Son actif par défaut, exploiter la dimension audio. Créatif natif style UGC recommandé.',mock:'portrait'},
    ],
    restrictions:[
      {combo:'Contenus adultes & sexuels',status:'❌',detail:'Strictement interdit. Contenu réservé aux adultes non autorisé sur BeReal.'},
      {combo:'Alcool (selon réglementation locale)',status:'⚠️',detail:'Autorisé avec restrictions : déclaration d\'âge obligatoire, mention légale requise, ciblage 18+ uniquement. Loi Évin applicable en France.'},
      {combo:'Tabac & cigarettes électroniques',status:'❌',detail:'Publicité pour produits du tabac interdite sur la plateforme.'},
      {combo:'Jeux d\'argent & paris',status:'⚠️',detail:'Autorisé avec accord préalable BeReal. Opérateur doit être agréé ANJ. Ciblage 18+ obligatoire. Mentions légales requises.'},
      {combo:'Médicaments & produits de santé',status:'⚠️',detail:'Soumis à approbation. Prescription médicale interdite. OTC avec accord et mentions légales.'},
      {combo:'Armes & munitions',status:'❌',detail:'Toute publicité liée aux armes, munitions ou accessoires est interdite.'},
      {combo:'Contenu trompeur ou faux',status:'❌',detail:'Claims non vérifiés, fausses promesses ou contenu mensonger refusés. Conformité DGCCRF obligatoire.'},
      {combo:'Contenu politique & électoral',status:'❌',detail:'Publicité politique ou électorale strictement interdite.'},
      {combo:'Format authentique obligatoire',status:'⚠️',detail:'BeReal refuse les créatifs trop "publicitaires" ou sur-brandés. Le ton doit correspondre à l\'authenticité de la plateforme. Contenu UGC-style recommandé.'},
    ],
    pixel:null,
    kpi:null
  }
};

// ═══════════════════════════════════════
// STICKERS DATA (Meta / Instagram)
// ═══════════════════════════════════════
const STICKERS = [
  {icon:'📊',name:'Sondage',desc:'2 réponses personnalisables (texte ou emoji). Les utilisateurs votent et voient les résultats en temps réel.',status:'ads',statusLabel:'✅ Disponible en Pub',impact:'+3x vues vidéo à 3s selon Meta. 60% des entreprises l\'utilisent en organique.'},
  {icon:'❓',name:'Quiz',desc:'Question avec 4 réponses possibles dont une correcte. Génère de l\'engagement et teste les connaissances sur votre marque.',status:'ads',statusLabel:'✅ Disponible en Pub',impact:'Idéal pour éducation de marque et génération de lead interactif.'},
  {icon:'😍',name:'Curseur Emoji',desc:'Curseur interactif de 0 à 100% avec un emoji personnalisable. Réponse plus nuancée qu\'un simple oui/non.',status:'ads',statusLabel:'✅ Disponible en Pub',impact:'Plus ludique qu\'un sondage binaire. Fort engagement spontané.'},
  {icon:'⏰',name:'Compte à rebours',desc:'Timer vers une date/heure définie. Les utilisateurs peuvent activer un rappel ou partager le compte à rebours.',status:'ads',statusLabel:'✅ Disponible en Pub',impact:'Idéal pour lancements produit, offres flash, événements. Crée de l\'urgence.'},
  {icon:'💬',name:'Question ouverte',desc:'Boîte de question permettant aux utilisateurs de saisir une réponse libre. Session Q&R.',status:'ads',statusLabel:'✅ Disponible en Pub (Partnership Ads)',impact:'Excellent pour connaître les attentes de l\'audience. Engagement qualitatif.'},
  {icon:'🔗',name:'Sticker Lien',desc:'En organique : lien cliquable overlay. En publicité : automatiquement remplacé par le bouton d\'action (CTA) en bas d\'écran.',status:'auto',statusLabel:'⚙️ Auto-converti en Pub',impact:'Dans une story sponsorisée, le lien devient le bouton CTA. Ne pas les combiner.'},
  {icon:'#️⃣',name:'Hashtag',desc:'Tag de hashtag cliquable. Disponible dans les publicités en partenariat (Partnership Ads).',status:'partnership',statusLabel:'✅ Partnership Ads only',impact:'Augmente la visibilité et l\'association à une tendance ou une campagne.'},
  {icon:'📍',name:'Localisation',desc:'Tag de lieu cliquable. Disponible dans les publicités en partenariat.',status:'partnership',statusLabel:'✅ Partnership Ads only',impact:'Utile pour les marques locales ou les événements physiques.'},
  {icon:'🎵',name:'Musique',desc:'Sticker musique avec affichage du titre et de l\'artiste. N\'est PAS compatible avec les publicités sponsorisées.',status:'blocked',statusLabel:'❌ Non disponible en Pub',impact:''},
  {icon:'✂️',name:'Découpages & Dévoiler',desc:'Effets visuels créatifs arrivés en mai 2024. Non compatibles avec les publicités sponsorisées.',status:'blocked',statusLabel:'❌ Non disponible en Pub',impact:''},
];

// ═══════════════════════════════════════
// MOCKS
// ═══════════════════════════════════════
function mk(type,c){
  const s={
    square:`<div class="mock-wrap"><div class="mock" style="width:82px;height:82px;background:linear-gradient(135deg,${c}22,${c}44);border:2px solid ${c}33"><div style="width:24px;height:24px;border-radius:50%;background:${c}44"></div><div style="width:50px;height:5px;border-radius:3px;background:${c}44;margin-top:6px"></div><div class="mock-lbl">1:1 Feed</div></div><div class="mock" style="width:66px;height:82px;background:linear-gradient(135deg,${c}22,${c}44);border:2px solid ${c}33"><div style="width:20px;height:20px;border-radius:50%;background:${c}44"></div><div class="mock-lbl">4:5 Mobile</div></div></div>`,
    stories:`<div class="mock-wrap"><div class="mock" style="width:48px;height:86px;background:linear-gradient(170deg,${c}22,${c}55);border:2px solid ${c}44;padding:6px"><div style="width:14px;height:2px;border-radius:2px;background:${c}55;align-self:flex-end;margin-left:auto"></div><div style="margin-top:auto"><div style="width:16px;height:16px;border-radius:50%;background:${c}44;margin:0 auto 4px"></div><div style="width:28px;height:3px;border-radius:2px;background:${c}44"></div></div><div class="mock-lbl">9:16</div></div></div>`,
    'video-feed':`<div class="mock-wrap"><div class="mock" style="width:88px;height:58px;background:linear-gradient(135deg,#1a1a1a,#333);border:2px solid ${c}44"><div style="width:22px;height:22px;border-radius:50%;background:${c};display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px">▶</div><div style="position:absolute;bottom:4px;right:5px;background:rgba(0,0,0,.7);color:#fff;font-size:8px;padding:1px 5px;border-radius:3px">:30</div></div></div>`,
    'video-16-9':`<div class="mock-wrap"><div class="mock" style="width:110px;height:62px;background:linear-gradient(135deg,#111,#2a2a2a);border:2px solid ${c}44"><div style="width:22px;height:22px;border-radius:50%;background:${c};display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px">▶</div><div class="mock-lbl">16:9</div></div></div>`,
    carousel:`<div class="mock-wrap">${[0,1,2].map((i)=>`<div class="mock" style="width:${i===0?72:56}px;height:${i===0?72:56}px;background:linear-gradient(135deg,${c}${i===0?'33':'22'},${c}${i===0?'55':'33'});border:2px solid ${c}${i===0?'44':'22'};font-size:12px;color:${c};font-weight:700">${i+1}</div>`).join('')}<div style="font-size:11px;color:#aaa;align-self:center">···</div></div>`,
    portrait:`<div class="mock-wrap"><div class="mock" style="width:56px;height:84px;background:linear-gradient(170deg,${c}22,${c}44);border:2px solid ${c}33"><div style="width:24px;height:24px;border-radius:50%;background:${c}44"></div><div class="mock-lbl">2:3</div></div></div>`,
    collection:`<div class="mock-wrap"><div style="display:flex;flex-direction:column;gap:4px;width:88px"><div class="mock" style="height:50px;background:linear-gradient(135deg,${c}22,${c}44);border:2px solid ${c}33;font-size:10px;color:${c}">Principal</div><div style="display:flex;gap:3px">${[0,1,2,3].map(()=>`<div style="flex:1;height:22px;border-radius:4px;background:${c}22;border:1px solid ${c}33"></div>`).join('')}</div></div></div>`,
    message:`<div class="mock-wrap"><div class="mock" style="width:110px;height:64px;background:#f0f4ff;border:2px solid ${c}44;padding:8px;flex-direction:column;align-items:flex-start;gap:5px"><div style="display:flex;align-items:center;gap:5px"><div style="width:14px;height:14px;border-radius:50%;background:${c}"></div><div style="width:50px;height:4px;border-radius:2px;background:${c}44"></div></div><div style="width:100%;height:3px;border-radius:2px;background:${c}22"></div><div style="width:80%;height:3px;border-radius:2px;background:${c}22"></div></div></div>`,
    'text-post':`<div class="mock-wrap"><div class="mock" style="width:120px;height:58px;background:#f8f7f4;border:2px solid #ddd;padding:8px;align-items:flex-start;flex-direction:column;gap:4px"><div style="width:80px;height:5px;border-radius:3px;background:#ccc"></div><div style="width:100%;height:3px;border-radius:2px;background:#e8e8e8"></div><div style="width:90%;height:3px;border-radius:2px;background:#e8e8e8"></div><div style="display:flex;gap:8px;margin-top:4px;font-size:8px;color:#aaa"><span>▲ Up</span><span>💬</span></div></div></div>`
  };
  return s[type]||s['square'];
}

// ═══════════════════════════════════════
// NAVIGATION — Hash-based routing
// ═══════════════════════════════════════
let curPlat=null,curTab='formats';
const GLOBAL_PAGES=['benchmarks','metrics','traps','legal','overview','prog','social'];
const _rendered=new Set();
const _platCache=new Set();

// ── Apply a route without pushing to history (used by popstate)
function applyRoute(hash){
  closeMobile();
  if(!hash||hash==='#'||hash==='#home'){
    _showPage('home');return;
  }
  const h=hash.replace('#','');
  if(GLOBAL_PAGES.includes(h)){
    renderGlobal(h);
    _showPage(h);
    document.querySelectorAll('.nav-global').forEach(b=>b.classList.remove('active'));
    const gb=document.getElementById('gb-'+h);if(gb)gb.classList.add('active');
    return;
  }
  // Platform routes: #facebook, #facebook-formats, #facebook-restrictions, #facebook-kpi, #facebook-pixel
  const parts=h.split('-');
  const plat=parts[0];
  const tab=parts[1]||'formats';
  if(P[plat]){
    _loadPlatform(plat,tab);
    return;
  }
  _showPage('home');
}

// ── Push a new hash to history (triggers popstate via hashchange)
function nav(page){
  closeDrops();
  window.location.hash=page;
}

function openPlatform(p,tab){
  closeDrops();
  window.location.hash=p+(tab&&tab!=='formats'?'-'+tab:'');
}

function switchTab(tab){
  curTab=tab;
  // Update hash without adding a new history entry
  const base=curPlat;
  const newHash='#'+base+(tab!=='formats'?'-'+tab:'');
  history.replaceState(null,'',newHash);
  // Update UI
  document.querySelectorAll('.sub-page').forEach(p=>p.classList.remove('active'));
  document.getElementById('sp-'+tab).classList.add('active');
  const tabs=['formats','restrictions','kpi','pixel'];
  document.querySelectorAll('.sub-tab').forEach((t,i)=>t.classList.toggle('active',tabs[i]===tab));
}

// ── Internal: actually render & show a page
function _showPage(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-global').forEach(b=>b.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  window.scrollTo(0,0);
}

function _loadPlatform(p,tab){
  curPlat=p;curTab=tab;
  const data=P[p];
  document.getElementById('platHeader').style.background=data.color;
  document.getElementById('platIcon').innerHTML=data.icon;
  document.getElementById('platName').textContent=data.name+' Ads';
  document.getElementById('platSub').textContent=data.sub;
  const pixelTab=document.getElementById('pixel-tab');
  if(pixelTab)pixelTab.style.display=data.pixel?'block':'none';
  const kpiTab=document.getElementById('kpi-tab');
  if(kpiTab)kpiTab.style.display=data.kpi?'block':'none';
  renderPlatformAll(p);
  // Fallback: if kpi/pixel tab requested but data is null, show formats
  if(tab==='kpi'&&!data.kpi)tab='formats';
  if(tab==='pixel'&&!data.pixel)tab='formats';
  // Switch tab UI
  document.querySelectorAll('.sub-page').forEach(sp=>sp.classList.remove('active'));
  document.getElementById('sp-'+tab).classList.add('active');
  const tabs=['formats','restrictions','kpi','pixel'];
  document.querySelectorAll('.sub-tab').forEach((t,i)=>t.classList.toggle('active',tabs[i]===tab));
  _showPage('platform');
}

// ── Listen to hash changes (back/forward + link clicks)
window.addEventListener('hashchange',()=>{
  applyRoute(window.location.hash);
});

function toggleDrop(p){
  const dd=document.getElementById('dd-'+p);
  const btn=document.querySelector('#ni-'+p+' .nav-btn');
  const open=dd.classList.contains('show');
  closeDrops();
  if(!open){dd.classList.add('show');btn.classList.add('open');btn.setAttribute('aria-expanded','true');}
}
function closeDrops(){
  document.querySelectorAll('.dropdown').forEach(d=>d.classList.remove('show'));
  document.querySelectorAll('.nav-btn').forEach(b=>{b.classList.remove('open');b.setAttribute('aria-expanded','false');});
}
document.addEventListener('click',e=>{if(!e.target.closest('.nav-item'))closeDrops();});

function toggleMobile(){
  const nav=document.getElementById('mainNav');
  const hb=document.getElementById('hamburger');
  nav.classList.toggle('open');hb.classList.toggle('open');
}
function closeMobile(){
  document.getElementById('mainNav').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  closeDrops();
}

// ═══════════════════════════════════════
// RENDER PLATFORM
// ═══════════════════════════════════════
function renderPlatformAll(p){
  if(_platCache.has(p))return;
  renderFormats(p);renderRestrictions(p);
  if(P[p].kpi)renderKPI(p);else document.getElementById('sp-kpi').innerHTML='';
  renderPixel(p);
  _platCache.add(p);
}

function renderFormats(p){
  const d=P[p];const c=d.color;
  let h=`<div class="notice notice-info"><span class="notice-icon">ℹ️</span><div>Spécifications issues des docs officielles (2025). À vérifier régulièrement sur les business centers. <a href="${officialLink(p)}" target="_blank" style="color:${c};font-weight:600">${officialLinkLabel(p)} →</a></div></div>`;
  
  // Music library
  if(d.hasMusic){
    h+=`<div class="music-box">
      <div class="music-box-icon">🎵</div>
      <div style="flex:1">
        <div class="music-box-title">${d.musicLabel}</div>
        <div class="music-box-desc">${d.musicNote}</div>
        <a href="${d.musicUrl}" target="_blank" class="music-btn" style="background:${c};color:#fff">Accéder à la bibliothèque musicale →</a>
      </div>
    </div>`;
  }

  // Formats grid
  h+=`<div class="formats-grid">`;
  d.formats.forEach(f=>{
    const obj=f.objs.map(o=>`<span class="tag tag-ok">✓ ${o}</span>`).join('');
    h+=`<div class="fmt-card">
      <div class="fmt-card-top">
        <div class="fmt-name" style="color:${c}">${f.name}</div>
        <div class="fmt-desc">${f.desc}</div>
        <div class="fmt-visual">${mk(f.mock,c)}</div>
      </div>
      <div class="fmt-card-body">
        <table class="specs-tbl">
          <tr><td>Ratio</td><td>${f.ratio}</td></tr>
          <tr><td>Dimensions</td><td>${f.size}</td></tr>
          <tr><td>Poids max</td><td>${f.weight}</td></tr>
          <tr><td>Format fichier</td><td>${f.ext}</td></tr>
          ${f.duration?`<tr><td>Durée</td><td>${f.duration}</td></tr>`:''}
          ${f.cards?`<tr><td>Nb cartes</td><td>${f.cards}</td></tr>`:''}
          ${f.text?`<tr><td>Texte</td><td>${f.text}</td></tr>`:''}
          <tr><td>Objectifs</td><td>${obj}</td></tr>
        </table>
        <div class="reco"><strong>💡 Reco :</strong> ${f.reco}</div>
      </div>
    </div>`;
  });
  h+=`</div>`;

  // Stickers section (Meta/Instagram)
  if(d.hasStickers){
    h+=`<div style="margin-top:32px"><div class="sec-h2" style="color:${c}">🎯 Stickers Interactifs Stories — Facebook & Instagram</div>
    <div class="notice notice-ok"><span class="notice-icon">✅</span><div>Les stickers interactifs peuvent être utilisés dans les publicités Stories sur Facebook et Instagram. Ils augmentent significativement l'engagement et la mémorisation. <strong>Règle importante :</strong> dans une story sponsorisée, le bouton CTA (lien) est unique et ne peut pas être combiné avec d'autres stickers interactifs simultanément.</div></div>
    <div class="sticker-grid">`;
    STICKERS.forEach(s=>{
      const sColor={ads:c,partnership:'#f0b429',auto:'#888',blocked:'#c0392b'};
      const sc=sColor[s.status]||c;
      h+=`<div class="sticker-card">
        <div class="sticker-icon">${s.icon}</div>
        <div class="sticker-name">${s.name}</div>
        <div class="sticker-desc">${s.desc}</div>
        <span class="sticker-badge" style="background:${sc}22;color:${sc}">${s.statusLabel}</span>
        ${s.impact?`<div style="font-size:12px;color:var(--muted);margin-top:6px">${s.impact}</div>`:''}
      </div>`;
    });
    h+=`</div><p style="font-size:12px;color:var(--muted);margin-top:8px">Source : <a href="https://www.facebook.com/business/help/419816202267568" target="_blank" style="color:${c}">Meta for Business — Stickers interactifs Stories</a></p></div>`;
  }

  document.getElementById('sp-formats').innerHTML=h;
}

function renderRestrictions(p){
  const d=P[p];const c=d.color;
  let h=`<div class="notice notice-warn"><span class="notice-icon">⚠️</span><div><strong>Légende :</strong> ❌ Techniquement impossible &nbsp;|&nbsp; ⚠️ Fortement déconseillé ou limité &nbsp;|&nbsp; ✅ Recommandé</div></div>`;
  h+=`<div class="rest-wrap"><table class="rest-tbl"><thead><tr><th style="width:60px">Statut</th><th>Combinaison / Restriction</th><th>Explication</th></tr></thead><tbody>`;
  const bg={'❌':'var(--err-bg)','⚠️':'var(--warn-bg)','✅':'var(--ok-bg)'};
  d.restrictions.forEach(r=>{
    h+=`<tr><td class="status-cell" style="background:${bg[r.status]||'transparent'}">${r.status}</td><td style="font-weight:600;font-size:13.5px">${r.combo}</td><td style="color:var(--muted);font-size:13px;line-height:1.6">${r.expl}</td></tr>`;
  });
  h+=`</tbody></table></div>`;
  h+=`<div class="notice notice-info"><span class="notice-icon">🇫🇷</span><div>Les restrictions sectorielles françaises (alcool, jeux d'argent, médicaments, politique...) s'appliquent sur toutes les plateformes. Voir <button onclick="nav('legal')" style="color:${c};font-weight:600;border:none;background:none;cursor:pointer;font-family:var(--f-body);font-size:13px">⚖️ Cadre Légal →</button></div></div>`;
  document.getElementById('sp-restrictions').innerHTML=h;
}

function renderKPI(p){
  const d=P[p];const kpi=d.kpi;const c=d.color;
  const objs=buildKPIRows(p,kpi);
  let h=`<div class="kpi-intro"><strong>📊 Benchmarks indicatifs — Marché Français 2025.</strong> Valeurs de référence pour construire des prévisions et évaluer les performances. Les valeurs réelles varient selon secteur, créativité et ciblage.<br><br><strong>Note plateforme :</strong> ${kpi.note}</div>`;
  
  h+=`<div class="sec-h2">Indicateurs clés</div><div class="kpi-cards">`;
  if(kpi.cpm)h+=`<div class="kpi-card"><div class="kpi-label">CPM</div><div class="kpi-val" style="color:${c}">${kpi.cpm.toFixed(2)}€</div><div class="kpi-desc">Pour 1 000 impressions</div></div>`;
  if(kpi.cpc)h+=`<div class="kpi-card"><div class="kpi-label">CPC</div><div class="kpi-val" style="color:${c}">${kpi.cpc.toFixed(2)}€</div><div class="kpi-desc">Par clic</div></div>`;
  if(kpi.cpInt)h+=`<div class="kpi-card"><div class="kpi-label">CP Interaction</div><div class="kpi-val" style="color:${c}">${kpi.cpInt.toFixed(2)}€</div><div class="kpi-desc">Par interaction</div></div>`;
  if(kpi.cpV15)h+=`<div class="kpi-card"><div class="kpi-label">CP Vue 15s</div><div class="kpi-val" style="color:${c}">${kpi.cpV15.toFixed(3)}€</div><div class="kpi-desc">Par vue à 15 secondes</div></div>`;
  if(kpi.cpV30)h+=`<div class="kpi-card"><div class="kpi-label">CP Vue 30s</div><div class="kpi-val" style="color:${c}">${kpi.cpV30.toFixed(3)}€</div><div class="kpi-desc">Par vue à 30 secondes</div></div>`;
  if(kpi.cpV6)h+=`<div class="kpi-card"><div class="kpi-label">CP Vue 6s</div><div class="kpi-val" style="color:${c}">${kpi.cpV6.toFixed(2)}€</div><div class="kpi-desc">Par vue à 6 secondes</div></div>`;
  if(kpi.tvue15)h+=`<div class="kpi-card"><div class="kpi-label">Taux vue 15s</div><div class="kpi-val" style="color:${c}">${kpi.tvue15}</div><div class="kpi-desc">Sur vidéos >1 min</div></div>`;
  if(kpi.tvue30)h+=`<div class="kpi-card"><div class="kpi-label">Taux vue 30s</div><div class="kpi-val" style="color:${c}">${kpi.tvue30}</div><div class="kpi-desc">Selon durée vidéo</div></div>`;
  h+=`</div>`;
  
  h+=`<div class="sec-h2">Benchmarks par objectif média (base 1 000€)</div>`;
  h+=`<div class="kpi-tbl-wrap"><table class="kpi-tbl"><thead><tr><th>Objectif</th><th>Métrique</th><th>Valeur ref.</th><th>Volume / 1 000€</th><th>Commentaire</th></tr></thead><tbody>`;
  objs.forEach(o=>{
    h+=`<tr><td><strong>${o.obj}</strong></td><td><span class="tag tag-n">${o.metric}</span></td><td><span class="kpi-num" style="color:${c}">${o.val}</span></td><td style="color:var(--muted)">${o.vol}</td><td style="font-size:12.5px;color:var(--muted)">${o.note}</td></tr>`;
  });
  h+=`</tbody></table></div><p style="font-size:12px;color:var(--muted)">* Estimations indicatives basées sur benchmarks marché France 2025.</p>`;
  document.getElementById('sp-kpi').innerHTML=h;
}

function buildKPIRows(p,kpi){
  const rows=[];
  if(kpi.cpm)rows.push({obj:'Notoriété / Portée',metric:'CPM',val:kpi.cpm.toFixed(2)+'€',vol:Math.round(1e6/kpi.cpm).toLocaleString('fr')+' impressions',note:'Maximiser les impressions uniques. Fréquence cible : 3-5x.'});
  if(kpi.cpc)rows.push({obj:'Trafic (clics)',metric:'CP Clic',val:kpi.cpc.toFixed(2)+'€',vol:Math.round(1e3/kpi.cpc).toLocaleString('fr')+' clics',note:'Optimiser le CTR. Cibler des audiences chaudes ou en intent.'});
  if(kpi.cpInt)rows.push({obj:'Engagement',metric:'CP Interaction',val:kpi.cpInt.toFixed(2)+'€',vol:Math.round(1e3/kpi.cpInt).toLocaleString('fr')+' interactions',note:'Likes, commentaires, partages, enregistrements.'});
  if(kpi.cpFoll)rows.push({obj:'Abonnés',metric:'CP Follower',val:kpi.cpFoll.toFixed(2)+'€',vol:Math.round(1e3/kpi.cpFoll).toLocaleString('fr')+' nouveaux abonnés',note:'Coût pour acquérir un nouvel abonné à la page ou au compte.'});
  if(kpi.cpV15)rows.push({obj:'Vues vidéo (15s)',metric:'CP Vue 15s',val:kpi.cpV15.toFixed(3)+'€',vol:Math.round(1e3/kpi.cpV15).toLocaleString('fr')+' vues 15s',note:kpi.tvue15?'Taux de vue 15s observé : '+kpi.tvue15+'.':'Vue comptabilisée à 15s.'});
  if(kpi.cpV30)rows.push({obj:'Vues vidéo (30s)',metric:'CP Vue 30s',val:kpi.cpV30.toFixed(3)+'€',vol:Math.round(1e3/kpi.cpV30).toLocaleString('fr')+' vues 30s',note:kpi.tvue30?'Taux de vue 30s : '+kpi.tvue30+'.':''});
  if(kpi.cpV6)rows.push({obj:'Vues vidéo (6s)',metric:'CP Vue 6s',val:kpi.cpV6.toFixed(3)+'€',vol:Math.round(1e3/kpi.cpV6).toLocaleString('fr')+' vues 6s',note:kpi.tvue6?'Taux de vue 6s : '+kpi.tvue6+'.':'Vue LinkedIn comptabilisée à 6 secondes.'});
  if(kpi.cpV2)rows.push({obj:'Vues vidéo (2s)',metric:'CP Vue 2s',val:kpi.cpV2.toFixed(3)+'€',vol:Math.round(1e3/kpi.cpV2).toLocaleString('fr')+' vues 2s',note:'Vue comptabilisée à 2 secondes. Métrique de notoriété.'});
  if(kpi.tvue&&!kpi.cpV15&&!kpi.cpV30&&!kpi.cpV6)rows.push({obj:'Taux de vue',metric:'Taux de Vue',val:kpi.tvue,vol:'—',note:'Part des impressions ayant généré une vue achetée.'});
  return rows;
}

function renderPixel(p){
  const d=P[p];
  if(!d.pixel){document.getElementById('sp-pixel').innerHTML=`<div class="notice notice-info"><span class="notice-icon">ℹ️</span><div>La configuration de tracking pour cette plateforme n'est pas disponible via un pixel standard. Voir la documentation officielle.</div></div>`;return;}
  const c=d.color;const pix=d.pixel;
  let h=`<div style="margin-bottom:20px"><div style="font-family:var(--f-display);font-weight:700;font-size:1.2rem;margin-bottom:6px">${pix.title}</div>`;
  h+=`<div class="notice notice-warn"><span class="notice-icon">⚠️</span><div>Un pixel mal configuré ou non vérifié empêche l'algorithme d'optimiser. C'est la cause n°1 de mauvaises performances en conversion. Toujours tester avant de lancer une campagne performance.</div></div></div>`;
  h+=`<div class="pixel-steps">`;
  pix.steps.forEach(s=>{
    h+=`<div class="pixel-step">
      <div class="step-num" style="background:${c}">${s.n}</div>
      <div class="step-content">
        <div class="step-title">${s.title}</div>
        <div class="step-desc">${s.desc}</div>
        ${s.link?`<a href="${s.link}" target="_blank" class="step-link" style="background:${c}22;color:${c}">${s.linkLabel} →</a>`:''}
      </div>
    </div>`;
  });
  h+=`</div>`;
  document.getElementById('sp-pixel').innerHTML=h;
}

function officialLink(p){const l={facebook:'https://www.facebook.com/business/help',instagram:'https://www.facebook.com/business/help',youtube:'https://support.google.com/google-ads/answer/2375497',tiktok:'https://ads.tiktok.com/help',linkedin:'https://www.linkedin.com/help/lms',snapchat:'https://businesshelp.snapchat.com',reddit:'https://ads.reddit.com/help',pinterest:'https://help.pinterest.com/fr/business',x:'https://business.twitter.com/en/help',twitch:'https://twitchadvertising.tv/',bereal:'https://bereal.com/ads/solutions'};return l[p]||'#';}
function officialLinkLabel(p){const l={facebook:'Meta for Business',instagram:'Meta for Business',youtube:'Google Ads Help',tiktok:'TikTok Ads Help',linkedin:'LinkedIn Campaign Manager',snapchat:'Snapchat Business Help',reddit:'Reddit Ads Help',pinterest:'Pinterest Business Help',x:'X Ads Policies',twitch:'Twitch Advertising',bereal:'BeReal Ads Solutions'};return l[p]||'Doc officielle';}

// ═══════════════════════════════════════
// GLOBAL PAGES
// ═══════════════════════════════════════
function renderGlobal(page){
  if(_rendered.has(page))return;
  if(page==='benchmarks')renderBenchmarks();
  else if(page==='prog')renderProg();
  else if(page==='metrics')renderMetrics();
  else if(page==='traps')renderTraps();
  else if(page==='legal')renderLegal();
  else if(page==='overview')renderOverview();
  _rendered.add(page);
}


// ═══════════════════════════════════════
// BENCHMARK DATA (from Excel — Benchmark_RS.xlsx)
// ═══════════════════════════════════════
const BM = {
  culturel: {
    label: 'Secteur Culturel',
    platforms: [
      {name:'Facebook', color:'#1877F2', cpm:1.00, cpInt:0.20, cpFoll:1.50, cpc:0.50, cpV15:0.02, cpV30:null, cpV2:null, tvue:'8%'},
      {name:'Instagram', color:'#C13584', cpm:1.40, cpInt:0.40, cpFoll:2.50, cpc:0.80, cpV15:0.04, cpV30:null, cpV2:null, tvue:'6%'},
      {name:'YouTube', color:'#FF0000', cpm:3.00, cpInt:null, cpFoll:null, cpc:1.20, cpV15:null, cpV30:0.02, cpV2:null, tvue:'40%'},
      {name:'LinkedIn', color:'#0A66C2', cpm:4.50, cpInt:null, cpFoll:null, cpc:2.50, cpV15:null, cpV30:null, cpV2:0.03, tvue:'50%'},
      {name:'TikTok', color:'#010101', cpm:2.50, cpInt:null, cpFoll:1.20, cpc:0.80, cpV15:0.04, cpV30:null, cpV2:null, tvue:'5%'},
      {name:'Reddit', color:'#FF4500', cpm:5.00, cpInt:null, cpFoll:null, cpc:0.80, cpV15:null, cpV30:null, cpV2:null, tvue:null},
      {name:'Pinterest', color:'#E60023', cpm:1.50, cpInt:null, cpFoll:null, cpc:null, cpV15:null, cpV30:null, cpV2:0.02, tvue:'60%'},
      {name:'Snapchat', color:'#FFCA28', color2:'#b8940a', cpm:1.50, cpInt:null, cpFoll:null, cpc:0.60, cpV15:0.02, cpV30:null, cpV2:null, tvue:'5%'},
    ]
  },
  grandpublic: {
    label: 'Secteur Grand Public',
    platforms: [
      {name:'Facebook', color:'#1877F2', cpm:0.80, cpInt:0.20, cpFoll:1.30, cpc:0.60, cpV15:0.02, cpV30:null, cpV2:null, tvue:'6%'},
      {name:'Instagram', color:'#C13584', cpm:1.20, cpInt:0.35, cpFoll:1.80, cpc:0.90, cpV15:0.04, cpV30:null, cpV2:null, tvue:'4%'},
      {name:'YouTube', color:'#FF0000', cpm:2.50, cpInt:null, cpFoll:null, cpc:1.00, cpV15:null, cpV30:0.02, cpV2:null, tvue:'35%'},
      {name:'LinkedIn', color:'#0A66C2', cpm:3.50, cpInt:null, cpFoll:null, cpc:2.00, cpV15:null, cpV30:null, cpV2:0.03, tvue:'60%'},
      {name:'TikTok', color:'#010101', cpm:2.00, cpInt:null, cpFoll:1.00, cpc:0.80, cpV15:0.04, cpV30:null, cpV2:null, tvue:'6%'},
      {name:'Reddit', color:'#FF4500', cpm:3.00, cpInt:null, cpFoll:null, cpc:0.80, cpV15:null, cpV30:null, cpV2:null, tvue:null},
      {name:'Pinterest', color:'#E60023', cpm:1.50, cpInt:null, cpFoll:null, cpc:null, cpV15:null, cpV30:null, cpV2:0.01, tvue:'60%'},
      {name:'Snapchat', color:'#FFCA28', color2:'#b8940a', cpm:1.50, cpInt:null, cpFoll:null, cpc:0.60, cpV15:0.02, cpV30:null, cpV2:null, tvue:'5%'},
    ]
  }
};

function fmtBM(v, suffix='€'){
  if(v===null||v===undefined) return '<span class="bm-na">—</span>';
  return `<span class="bm-val" style="color:var(--text)">${v.toFixed(v<0.1?3:2)}${suffix}</span>`;
}
function fmtBMClass(v, suffix='€'){
  if(v===null||v===undefined) return '<span class="bm-metric-val na">—</span>';
  return `<span class="bm-metric-val">${v.toFixed(v<0.1?3:2)}${suffix}</span>`;
}


// ═══════════════════════════════════════
// PROGRAMMATIQUE DIGITALE
// ═══════════════════════════════════════
const PROG_LEVIERS = [
  {
    emoji: '🎬',
    name: 'Vidéo Online',
    tag: 'Instream / Outstream',
    tagColor: '#e8380d',
    tagBg: '#fef0ec',
    def: "Publicités vidéo diffusées sur des sites et applications tiers (hors plateformes sociales) via des réseaux programmatiques. Deux formats principaux : instream (intégré dans un lecteur vidéo, avant/pendant/après le contenu) et outstream (vidéo qui s\'autojoue dans un article ou une page web).",
    placements: ['Sites d\'actualité (Le Monde, Le Figaro, 20 Minutes)', 'Portails (Orange, MSN, Yahoo)', 'Sites spécialisés et blogs', 'Applications mobiles'],
    ciblage: ['Socio-démographique (âge, sexe, géo)', 'Contextuel (thème de la page)', 'Comportemental (centres d\'intérêt)', 'Retargeting site / CRM', 'Audiences lookalike'],
    interet: "Fort impact mémoriel grâce au format vidéo. L\'instream garantit une exposition active (l\'utilisateur attend le contenu). L\'outstream permet d\'élargir la reach au-delà des inventaires vidéo classiques.",
    exemples: ['Google DV360', 'Teads', 'Sublime', 'DoubleVerify']
  },
  {
    emoji: '📺',
    name: 'BVOD',
    tag: 'Broadcaster VOD',
    tagColor: '#7c3aed',
    tagBg: '#f5f3ff',
    def: "Broadcaster Video On Demand — services de replay et de rattrapage proposés par les chaînes TV traditionnelles. Le spectateur regarde les émissions en décalé sur les apps ou sites des chaînes. La publicité y est imposée (non skippable) avec des taux d\'attention très élevés.",
    placements: ['TF1+ (replay TF1, TMC, TFX)', 'M6+ (replay M6, W9, 6ter)', 'france.tv (France 2, France 3, Arte)', 'MyCanal (Canal+, C8, CNews)', 'RMC BFM (replay BFM TV, RMC)'],
    ciblage: ['Ciblage socio-démo qualifié (données TV)', 'Thématique (émissions, genre TV)', 'Géographique', 'Comportemental (historique de visionnage)', 'Audiences first-party chaînes'],
    interet: "Contexte de consommation TV premium, audience concentrée et engagée. Taux de complétion très élevé (70-90 %). Idéal pour les campagnes branding nécessitant un contexte de confiance.",
    exemples: ['TF1 Pub', 'M6 Publicité', 'France Télévisions Publicité', 'Canal+ Brand Solutions']
  },
  {
    emoji: '▶️',
    name: 'AVOD',
    tag: 'Ad-Supported VOD',
    tagColor: '#059669',
    tagBg: '#ecfdf5',
    def: "Advertising Video On Demand — plateformes de streaming financées par la publicité, accessibles gratuitement en échange de la diffusion d\'annonces. L\'utilisateur accepte les publicités comme contrepartie de l\'accès gratuit au contenu.",
    placements: ['YouTube (via Google DV360 ou directement)', 'Dailymotion', 'Pluto TV', 'Tubi', 'FAST channels (chaînes gratuites en streaming)'],
    ciblage: ['Centres d\'intérêt et intentions', 'Affinité audience (profils consommateurs)', 'Mots-clés contextuels (YouTube)', 'Retargeting', 'Données 1st party annonceur'],
    interet: "Large portée sur les 15-35 ans qui abandonnent la TV linéaire. CPM attractif. YouTube est le 1er inventaire AVOD mondial avec des formats skippable et non-skippable.",
    exemples: ['YouTube (non-skippable 15s, bumper 6s)', 'Dailymotion Ads', 'Pluto TV programmatique']
  },
  {
    emoji: '🎥',
    name: 'SVOD',
    tag: 'Subscription VOD',
    tagColor: '#dc2626',
    tagBg: '#fef2f2',
    def: "Subscription Video On Demand — plateformes de streaming par abonnement ayant ouvert un tier publicitaire. L\'inventaire est premium, les audiences sont qualifiées et déclarées, l\'attention est maximale (grand écran, contexte de détente).",
    placements: ['Netflix avec pub (plan Standard avec pub)', 'Prime Video Ads (Amazon)', 'Disney+ (plan Standard)', 'Paramount+ (avec pub)', 'Peacock'],
    ciblage: ['Données déclarées abonnés (âge, genre, foyer)', 'Genre de contenus regardés', 'Géographique', 'Ciblage par type de contenu (film, série, sport)'],
    interet: "Environnement ultra-premium, contexte big screen, attention maximale. Taux de complétion proches de 95%. Cible des audiences affinitaires qualifiées difficiles à toucher ailleurs.",
    exemples: ['Netflix Ads Manager', 'Amazon DSP (Prime Video)', 'Disney Advertising Sales', 'The Trade Desk SVOD deals']
  },
  {
    emoji: '🖥️',
    name: 'Display',
    tag: 'Bannières & Rich Media',
    tagColor: '#0284c7',
    tagBg: '#f0f9ff',
    def: "Formats publicitaires graphiques statiques ou animés (bannières, pavés, habillages) diffusés sur des sites web et applications via des ad-exchanges programmatiques. C\'est le levier programmatique le plus répandu et le plus accessible.",
    placements: ['Réseaux display premium (Google GDN, Xandr)', 'Sites presse & actualité', 'Sites e-commerce', 'Applications mobiles', 'Portails web (MSN, Yahoo, Orange)'],
    ciblage: ['Retargeting (visiteurs site)', 'Prospection lookalike', 'Contextuel (thème de la page)', 'Comportemental (historique navigation)', 'Ciblage sociodémographique', 'Données CRM / emails hashés'],
    interet: "Levier polyvalent : notoriété avec des formats impactants, trafic avec des bannières cliquables, conversion avec du retargeting granulaire. CPM parmi les plus bas du programmatique.",
    exemples: ['Google Display Network (GDN)', 'Criteo (retargeting)', 'Xandr', 'The Trade Desk', 'Habillages de sites presse']
  },
  {
    emoji: '🎧',
    name: 'Audio',
    tag: 'Streaming & Podcast',
    tagColor: '#7c3aed',
    tagBg: '#faf5ff',
    def: "Publicités audio diffusées au sein de contenus musicaux, podcastiques ou de radio en ligne. Le format est non-skippable dans la plupart des cas et capte l\'attention dans des moments où les formats visuels sont indisponibles (voiture, sport, mobilité).",
    placements: ['Spotify (streaming musical & podcasts)', 'Deezer', 'Radio digitales (RTL, Europe 1, NRJ online)', 'Amazon Music', 'Podcasts en programmatique (AdsWizz, Triton)'],
    ciblage: ['Genre musical / playlist / mood', 'Moment de la journée (morning commute, sport)', 'Socio-démo', 'Géographique', 'Type de device (mobile, smart speaker, voiture)'],
    interet: "Touche les audiences en situation de mobilité ou multitâche, inaccessibles par les formats visuels. Taux d\'écoute très élevé. Format compagnon (bannière display synchronisée) possible.",
    exemples: ['Spotify Ad Studio', 'Deezer DSP', 'AdsWizz (podcasts)', 'Triton Digital (radio digitale)']
  },
  {
    emoji: '🏙️',
    name: 'DOOH',
    tag: 'Digital Out Of Home',
    tagColor: '#0f766e',
    tagBg: '#f0fdfa',
    def: "Digital Out Of Home — affichage extérieur et intérieur numérique (écrans digitaux dans la rue, transports, centres commerciaux, aéroports, stades). L\'achat programmatique permet de déclencher des affichages en temps réel selon des conditions contextuelles.",
    placements: ['Abribus & mobilier urbain (JCDecaux, Clear Channel)', 'Métro & transports (RATP, SNCF)', 'Centres commerciaux (écrans intérieurs)', 'Aéroports & gares', 'Stades et salles de sport'],
    ciblage: ['Géographique (zone d\'affichage)', 'Contextuel en temps réel (météo, heure, événement)', 'Flux de passage estimé', 'Données mobilité (données téléphoniques agrégées)', 'Ciblage comportemental post-exposition (mobile retargeting)'],
    interet: "Puissance de couverture locale ou nationale, impact visuel fort en contexte de vie réelle. La dimension programmatique permet d\'activer des diffusions conditionnelles (météo, score sportif, heure de pointe).",
    exemples: ['JCDecaux programmatique', 'Clear Channel RADAR', 'Hivestack', 'Broadsign', 'Vistar Media']
  }
];

function renderProg(){
  let h=`<div class="prog-grid">`;
  PROG_LEVIERS.forEach(lev=>{
    h+=`<div class="prog-card">
      <div class="prog-card-head">
        <div class="prog-card-emoji">${lev.emoji}</div>
        <div>
          <div class="prog-card-name">${lev.name}</div>
        </div>
        <span class="prog-card-tag" style="color:${lev.tagColor};background:${lev.tagBg}">${lev.tag}</span>
      </div>
      <div class="prog-card-body">
        <div class="prog-section">
          <div class="prog-section-label">Définition</div>
          <div class="prog-section-text">${lev.def}</div>
        </div>
        <div class="prog-section">
          <div class="prog-section-label">Exemples de placements</div>
          <div class="prog-tags">${lev.placements.map(p=>`<span class="prog-tag">${p}</span>`).join('')}</div>
        </div>
        <div class="prog-section">
          <div class="prog-section-label">Ciblage</div>
          <div class="prog-tags">${lev.ciblage.map(c=>`<span class="prog-tag">${c}</span>`).join('')}</div>
        </div>
        <div class="prog-section">
          <div class="prog-section-label">Intérêt en campagne</div>
          <div class="prog-section-text">${lev.interet}</div>
        </div>

      </div>
    </div>`;
  });
  h+=`</div>`;
  h+=`<div class="prog-notice">🛠️ Les spécificités techniques des formats sont à demander aux trading desk en amont de la campagne.</div>`;
  document.getElementById('page-prog').innerHTML=h;
}

function renderBenchmarks(){
  const cols = [
    {key:'cpm', label:'CPM'},
    {key:'cpInt', label:'CP Interaction'},
    {key:'cpFoll', label:'CP Follower'},
    {key:'cpc', label:'CP Clic'},
    {key:'cpV15', label:'CP Vues 15s'},
    {key:'cpV30', label:'CP Vues 30s'},
    {key:'cpV2', label:'CP Vues 2s'},
    {key:'tvue', label:'Taux de Vue'},
  ];

  let h = `<div class="page-head"><h1>Benchmarks KPIs</h1><p>Coûts par indicateur clé par réseau social — données marché France 2025.</p></div>`;
  h += `<div class="bm-sector-tabs">
    <button class="bm-sector-tab active" onclick="switchBMSector('culturel')">🎭 Secteur Culturel</button>
    <button class="bm-sector-tab" onclick="switchBMSector('grandpublic')">🛍️ Grand Public</button>
  </div>`;

  ['culturel','grandpublic'].forEach(sector => {
    const d = BM[sector];
    const active = sector==='culturel' ? 'active' : '';
    h += `<div class="bm-page ${active}" id="bm-${sector}">`;

    // Full table
    h += `<div class="bm-table-wrap"><table class="bm-table"><thead><tr>
      <th>Réseau</th>
      ${cols.map(c=>`<th>${c.label}</th>`).join('')}
    </tr></thead><tbody>`;

    d.platforms.forEach(p => {
      const dot = `<span class="bm-plat-dot" style="background:${p.color}"></span>`;
      h += `<tr><td><div class="bm-plat-cell">${dot}${p.name}</div></td>`;
      cols.forEach(c => {
        if(c.key==='tvue') h += `<td>${p[c.key] ? `<span class="bm-val">${p[c.key]}</span>` : '<span class="bm-na">—</span>'}</td>`;
        else h += `<td>${fmtBM(p[c.key])}</td>`;
      });
      h += `</tr>`;
    });

    h += `</tbody></table></div>`;

    // Cards view
    h += `<div class="sec-h2" style="margin-bottom:14px">Vue par réseau social</div>`;
    h += `<div class="bm-grid">`;
    d.platforms.forEach(p => {
      const metrics = [
        {label:'CPM', val:fmtBMClass(p.cpm)},
        {label:'CP Clic', val:fmtBMClass(p.cpc)},
        {label:'CP Interaction', val:fmtBMClass(p.cpInt)},
        {label:'CP Follower', val:fmtBMClass(p.cpFoll)},
        p.cpV15!==null ? {label:'CP Vues 15s', val:fmtBMClass(p.cpV15)} : null,
        p.cpV30!==null ? {label:'CP Vues 30s', val:fmtBMClass(p.cpV30)} : null,
        p.cpV2!==null  ? {label:'CP Vues 2s',  val:fmtBMClass(p.cpV2)}  : null,
        {label:'Taux de Vue', val: p.tvue ? `<span class="bm-metric-val">${p.tvue}</span>` : '<span class="bm-metric-val na">—</span>'},
      ].filter(Boolean);

      h += `<div class="bm-card">
        <div class="bm-card-head" style="border-left:4px solid ${p.color}">
          <div class="bm-card-title" style="color:${p.color}">${p.name}</div>
          <div class="bm-card-sub">${d.label}</div>
        </div>
        <div class="bm-card-body">
          ${metrics.map(m=>`<div class="bm-metric"><div class="bm-metric-label">${m.label}</div>${m.val}</div>`).join('')}
        </div>
      </div>`;
    });
    h += `</div>`;

    h += `<div class="bm-disclaimer">⚠️ Ce sont des moyennes et non des coûts garantis. Les coûts peuvent moduler selon les paramètres de campagne (ciblage, période, budget, capping, etc).</div>`;
    h += `</div>`; // close bm-page
  });

  document.getElementById('page-benchmarks').innerHTML = h;
}

function switchBMSector(sector){
  document.querySelectorAll('.bm-page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.bm-sector-tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('bm-'+sector).classList.add('active');
  event.target.classList.add('active');
}

const METRICS_DATA=[
    {icon:'👁️',name:'Impressions',def:'Nombre total de fois où une publicité a été affichée sur un écran, qu\'elle ait été vue ou non. Une même personne peut générer plusieurs impressions.',formula:'Total des affichages de l\'annonce'},
    {icon:'👥',name:'Portée (Reach)',def:'Nombre de personnes UNIQUES exposées à la publicité au moins une fois. Toujours inférieur ou égal aux impressions.',formula:'Portée = Impressions ÷ Fréquence'},
    {icon:'🔄',name:'Fréquence',def:'Nombre moyen de fois où une personne unique a vu la publicité. Une fréquence >7 provoque de la "fatigue publicitaire".',formula:'Fréquence = Impressions ÷ Portée'},
    {icon:'💬',name:'Interactions (Engagements)',def:'Ensemble des actions utilisateurs : likes, commentaires, partages, enregistrements, clics sur l\'image.',formula:'Σ likes + commentaires + partages + enregistrements'},
    {icon:'📈',name:'Taux d\'interaction',def:'Pourcentage des impressions ayant généré une interaction. Indicateur de la pertinence du contenu.',formula:'(Interactions ÷ Impressions) × 100'},
    {icon:'⏱️',name:'Vues achetées 6s (LinkedIn)',def:'Sur LinkedIn, une vue vidéo est comptabilisée uniquement si l\'utilisateur regarde au moins 6 secondes.',formula:'Vues 6s = nb de visionnages ≥ 6 secondes'},
    {icon:'⏱️',name:'Vues achetées 15s',def:'Sur Meta, TikTok et Snapchat, une vue achetée = visionnage d\'au moins 15 secondes (ou complet si <15s).',formula:'Vues 15s = nb de visionnages ≥ 15 secondes'},
    {icon:'⏱️',name:'Vues achetées 30s (YouTube)',def:'Sur YouTube, une vue est comptabilisée après 30 secondes (ou visionnage complet si <30s). En dessous : impression sans vue.',formula:'Vues 30s = nb de visionnages ≥ 30 secondes'},
    {icon:'📊',name:'Taux de vue (VTR)',def:'Pourcentage des impressions vidéo ayant généré une vue achetée (à 6, 15 ou 30s selon plateforme).',formula:'VTR = (Vues achetées ÷ Impressions) × 100'},
    {icon:'✅',name:'Taux de complétion',def:'Pourcentage des personnes ayant regardé la vidéo jusqu\'à 100% (ou 97%). Indicateur fort de l\'intérêt.',formula:'(Vues 100% ÷ Impressions vidéo) × 100'},
    {icon:'🖱️',name:'Clics',def:'Nombre de fois où un utilisateur a cliqué sur l\'annonce (CTA, image, lien). Sur Meta, les clics peuvent inclure clics sur profil et interactions.',formula:'Nombre de clics sur l\'annonce'},
    {icon:'🎯',name:'CTR (Click-Through Rate)',def:'Pourcentage des impressions ayant généré un clic. Un CTR élevé = message et visuel attractifs et pertinents.',formula:'CTR = (Clics ÷ Impressions) × 100'},
    {icon:'🌐',name:'Vues de page de destination',def:'Nombre de fois où la landing page a été chargée après un clic. Peut être inférieur aux clics (fermetures avant chargement).',formula:'LPV ≈ Clics × Taux de chargement (85-95%)'},
    {icon:'💰',name:'CPM',def:'Coût pour 1 000 impressions. Mode d\'achat standard pour les campagnes notoriété.',formula:'CPM = (Budget ÷ Impressions) × 1 000'},
    {icon:'💰',name:'CPC',def:'Coût moyen par clic. Calculé en divisant le budget dépensé par le nombre de clics.',formula:'CPC = Budget ÷ Clics'},
    {icon:'💰',name:'CPA',def:'Coût par action (achat, lead, inscription). Métrique clé des campagnes conversion.',formula:'CPA = Budget ÷ Nb de conversions'},
  ];
function renderMetrics(){
  const metrics=METRICS_DATA
  let h=`<div class="page-head"><h1>📏 Définitions des métriques</h1><p>Référentiel des indicateurs clés utilisés en social ads — applicable à toutes les plateformes.</p></div>`;
  h+=`<div class="metrics-grid">`;
  metrics.forEach(m=>{h+=`<div class="m-card"><div class="m-icon">${m.icon}</div><div class="m-name">${m.name}</div><div class="m-def">${m.def}</div><div class="m-formula">${m.formula}</div></div>`;});
  h+=`</div>`;
  document.getElementById('page-metrics').innerHTML=h;
}

const TRAPS_DATA=[
    {title:'Lancer une campagne Meta sans pixel vérifié',why:'Le pixel est installé mais le domaine n\'est pas vérifié dans le Business Manager, ou il ne remonte pas les événements de conversion.',impact:'L\'algorithme Meta n\'a aucune donnée pour optimiser. La campagne dépense mais n\'apprend pas.',sol:'Vérifier : (1) domaine vérifié dans Business Manager, (2) pixel envoie des événements via l\'outil de test, (3) API Conversions configurée en complément.'},
    {title:'Oublier les mentions légales sur les visuels',why:'En production créative, les mentions légales sont oubliées ou ajoutées en tout petit, illisibles.',impact:'Rejet de la publicité par la plateforme + risque légal DGCCRF. Pour l\'alcool ou la finance, les sanctions peuvent être lourdes.',sol:'Créer un template de brief créatif avec une case "mentions légales" obligatoire. Mentions en police lisible min. 12px.'},
    {title:'Confondre "Portée" et "Impressions"',why:'En réunion client, on présente les impressions comme le nombre de personnes touchées.',impact:'Le client pense avoir touché 2M de personnes alors que 500K ont vu la pub 4 fois. Évaluation de campagne faussée.',sol:'Portée = personnes uniques. Impressions = total affichages. Toujours présenter les deux + la fréquence.'},
    {title:'Activer l\'Audience Network Meta sans surveillance',why:'Par défaut, Meta active l\'Audience Network (diffusion sur des apps partenaires hors Facebook/Instagram).',impact:'Budget sur des apps mobiles de qualité douteuse. Clics accidentels. Métriques gonflées artificiellement.',sol:'Pour les campagnes performance, désactiver l\'Audience Network dans les placements manuels. Surveiller les métriques par placement.'},
    {title:'Cibler trop large ou trop restreint sur LinkedIn',why:'Trop large = "tout le secteur". Trop restreint = cumul de 5 critères de ciblage.',impact:'Trop large = CPM élevé sans pertinence. Trop restreint = audience <300 membres, campagne qui ne démarre pas.',sol:'LinkedIn recommande 50 000 à 400 000 membres. Utiliser l\'outil Forecast dans Campaign Manager avant de lancer.'},
    {title:'Booster un post influenceur sans vérifier la mention "Publicité"',why:'Le client envoie un contenu influenceur à booster rapidement — on appuie sur boost sans relire.',impact:'Non-conformité loi du 9 juin 2023. Risque de sanction DGCCRF et mauvaise image de marque.',sol:'Avant tout boost : vérifier la présence de #Publicité ou #CollaborationCommerciale en début de contenu. Corriger avant d\'activer.'},
    {title:'Ne pas exclure les clients existants en acquisition',why:'Oubli de créer une audience d\'exclusion avec la liste CRM des clients actuels.',impact:'Budget dépensé pour convaincre des gens déjà clients. Peut aussi les agacer.',sol:'Toujours créer une Custom Audience "Clients actuels" (liste email ou page confirmation) et l\'exclure de toutes les campagnes d\'acquisition.'},
    {title:'Lancer une campagne TikTok avec des vidéos non adaptées',why:'On recycle les vidéos Meta (1:1 ou 16:9) pour TikTok sans adaptation.',impact:'Bandes noires, aspect non professionnel, CPM plus élevé (score de pertinence dégradé).',sol:'TikTok exige du 9:16 natif. Son intégré. Message clé dans les 3 premières secondes. Budget de production spécifique TikTok.'},
    {title:'Confondre objectif "Trafic" et "Conversions" sur Meta',why:'Pour envoyer des gens sur le site, on choisit instinctivement "Trafic".',impact:'L\'objectif Trafic optimise pour les clics, pas les conversions. Beaucoup de visites, peu de ventes ou de leads.',sol:'Si l\'objectif est une conversion, choisir "Ventes" ou "Génération de leads". "Trafic" est uniquement pour du trafic pur sans intent de conversion.'},
    {title:'Ne pas paramétrer les UTMs sur les URLs',why:'Les URLs de destination ne comportent pas de paramètres UTM (utm_source, utm_medium, utm_campaign).',impact:'Impossible de distinguer dans Analytics les conversions par plateforme. Tout apparaît comme "Direct".',sol:'Utiliser le Campaign URL Builder Google. Créer une nomenclature UTM standardisée pour toute l\'équipe.'},
  ];
function renderTraps(){
  const traps=TRAPS_DATA
  let h=`<div class="page-head"><h1>⚠️ Pièges & erreurs fréquentes</h1><p>Les 10 erreurs les plus coûteuses en social ads — et comment les éviter.</p></div>`;
  h+=`<div class="trap-list">`;
  traps.forEach((t,i)=>{
    h+=`<div class="trap-card">
      <div class="trap-head" onclick="toggleTrap(${i})">
        <div class="trap-num">${String(i+1).padStart(2,'0')}</div>
        <div class="trap-title">${t.title}</div>
        <span class="trap-chev" id="tc-${i}">▾</span>
      </div>
      <div class="trap-body" id="tb-${i}">
        <div class="trap-row"><strong>Pourquoi on y tombe :</strong> ${t.why}</div>
        <div class="trap-row"><strong>⚡ Impact :</strong> ${t.impact}</div>
        <div class="trap-sol"><strong>✅ Comment l'éviter :</strong> ${t.sol}</div>
      </div>
    </div>`;
  });
  h+=`</div>`;
  document.getElementById('page-traps').innerHTML=h;
}
function toggleTrap(i){const b=document.getElementById('tb-'+i);const c=document.getElementById('tc-'+i);const o=b.classList.contains('open');b.classList.toggle('open',!o);c.style.transform=o?'':'rotate(180deg)';}

const LEGAL_DATA=[
    {n:'1',title:'Loi Sapin',law:'Loi n°93-122 du 29 janvier 1993 · Renforcée par Sapin II (2016)',pts:['<strong>Transparence obligatoire :</strong> toute facture remise à un annonceur doit distinguer les frais médias réels (dépensés sur les plateformes) et les honoraires d\'agence.','<strong>Interdiction de la marge cachée :</strong> une agence ne peut pas revendre de l\'espace publicitaire avec une marge non déclarée au client.','<strong>Remises de volumes :</strong> les remises obtenues auprès des plateformes (programmes partenaires Meta, TikTok...) peuvent être conservées par l\'agence SAUF si le contrat prévoit leur rétrocession.','<strong>Frais technologiques :</strong> les frais de DSP, d\'ad-serving ou de données doivent être déclarés séparément — impossible de les noyer dans le coût média.','<strong>Droit d\'audit :</strong> depuis Sapin II, tout annonceur peut demander un audit complet des achats médias, incluant les extraits de compte plateformes.'],warn:'Un annonceur peut légalement réclamer les copies des factures d\'achat d\'espace. Certaines agences ont été sanctionnées pour dissimulation de marges arrière.'},
    {n:'2',title:'Loi Évin',law:'Loi n°91-32 du 10 janvier 1991',pts:['<strong>Alcool — ciblage :</strong> ciblage +18 ans obligatoire sur toutes les plateformes sociales en France. Appliqué automatiquement par les plateformes.','<strong>Alcool — mention légale :</strong> "L\'abus d\'alcool est dangereux pour la santé. À consommer avec modération." doit être visible et lisible dans chaque visuel publicitaire.','<strong>Alcool — contenu interdit :</strong> impossible de présenter la consommation d\'alcool comme bénéfique, comme signe de réussite sociale ou comme facilitant des performances.','<strong>Tabac :</strong> toute publicité pour le tabac, cigarettes et produits de vapotage est totalement interdite en France. Aucune dérogation.','<strong>Influenceurs :</strong> les posts organique d\'influenceurs promouvant de l\'alcool doivent aussi respecter la loi Évin.'],warn:'TikTok France impose un ciblage +25 ans pour les marques d\'alcool, allant au-delà de la loi Évin.'},
    {n:'3',title:'RGPD',law:'Règlement (UE) 2016/679 — applicable depuis mai 2018',pts:['<strong>Consentement cookies :</strong> si vous utilisez un pixel sur votre site (Meta, TikTok, LinkedIn...), vous devez obtenir un consentement explicite AVANT de déposer le cookie. Opt-out seul = illégal.','<strong>Listes CRM :</strong> les emails importés dans les audiences personnalisées (Meta, LinkedIn, TikTok) doivent avoir été collectés avec consentement explicite à un usage publicitaire.','<strong>Durée de conservation :</strong> la CNIL recommande une durée maximale de 13 mois pour les cookies.','<strong>Ciblage fragilisé :</strong> depuis iOS 14.5 (ATT) et la fin des cookies tiers, les audiences de reciblage sont moins précises. Prévoir une hausse structurelle des CPM.','<strong>DPA :</strong> Meta, Google et TikTok sont vos sous-traitants au sens du RGPD. Vérifiez que vos Data Processing Agreements sont signés.'],warn:'La CNIL a condamné Meta à plusieurs centaines de millions d\'euros pour non-conformité RGPD (2022-2023). En tant qu\'annonceur, vous êtes responsable de la collecte sur votre site.'},
    {n:'4',title:'DGCCRF — Publicité loyale',law:'Code de la consommation — Articles L121-1 et suivants',pts:['<strong>Publicité trompeuse :</strong> toute affirmation fausse sur les caractéristiques, le prix ou l\'origine d\'un produit est illégale. Cela vaut pour les publicités sociales.','<strong>Prix barrés :</strong> les réductions affichées dans les publicités doivent être réelles. Un prix normal gonflé artificiellement est une infraction.','<strong>Mentions légales :</strong> les publicités pour des abonnements, promotions, jeux concours ou produits financiers doivent comporter des mentions légales lisibles.','<strong>Jeux concours :</strong> les jeux soumis au hasard avec achat obligatoire = jeu d\'argent illégal. Les concours doivent avoir un règlement déposé.','<strong>Greenwashing :</strong> depuis la loi Climat (2021), les allégations de neutralité carbone sans preuve sont interdites et activement contrôlées.'],warn:null},
    {n:'5',title:'Loi Influenceurs',law:'Loi n°2023-451 du 9 juin 2023',pts:['<strong>Mention obligatoire :</strong> tout contenu sponsorisé doit porter "Publicité" ou "Collaboration commerciale" — visible dès le début du contenu.','<strong>Contenu interdit :</strong> chirurgie esthétique, médicaments sur prescription, produits financiers à risque, jeux d\'argent non agréés et crypto non enregistrés ne peuvent PAS être promus par des influenceurs.','<strong>Responsabilité partagée :</strong> la marque ET l\'influenceur sont co-responsables du contenu sponsorisé.','<strong>Boost publicitaire :</strong> booster un contenu créateur (Spark Ads, Partnership Ads...) = la mention "Publicité" reste obligatoire.','<strong>ARPP :</strong> le Certificat de l\'Influence Responsable est une bonne pratique recommandée.'],warn:'Un acheteur média qui booste un contenu influenceur sans vérifier les mentions légales prend un risque légal direct.'},
    {n:'6',title:'Restrictions sectorielles',law:'Synthèse des réglementations par secteur',pts:['<strong>Jeux d\'argent :</strong> opérateurs agréés ANJ uniquement. Validation préalable de chaque plateforme. Ciblage +18 obligatoire.','<strong>Médicaments sur ordonnance :</strong> totalement interdit sur tous les réseaux sociaux en France.','<strong>Crédit à la consommation :</strong> TAEG obligatoire. Loi Lagarde applicable. Validation juridique recommandée.','<strong>Immobilier :</strong> catégorie "Housing" sur Meta soumise à restrictions anti-discrimination. Ciblage par âge/genre/zone limité.','<strong>Finance / Crypto :</strong> les PSAN doivent être enregistrés à l\'AMF. Mention de risque de perte en capital obligatoire.','<strong>Produits enfants :</strong> publicités ciblant les -13 ans interdites.'],warn:null},
    {n:'6',title:'Taxe GAFA & frais de localisation',law:'Taxe sur les Services Numériques (DST) — France 2019 · Répercussion plateformes',pts:[
      '<strong>Qu\'est-ce que la taxe GAFA ?</strong> La France a introduit en 2019 une Taxe sur les Services Numériques (DST) ciblant les grandes plateformes dont le CA mondial dépasse 750 M€ et dont au moins 25 M€ proviennent de services numériques en France. Taux actuel&nbsp;: <strong>3 %</strong> (en discussion d\'un relèvement à 6 %).',
      '<strong>Google Ads — +2 % depuis mai 2021 :</strong> Google a intégré un surcoût de 2 % sur tous les achats publicitaires facturés en France dès le 1er mai 2021 pour répercuter la DST. Ce pourcentage est prélevé automatiquement sur chaque facture et s\'applique à tous les formats (Search, Display, YouTube, Shopping).',
      '<strong>Meta Ads — +3 % à partir du 1er juillet 2026 :</strong> Meta annonce l\'application de «&nbsp;frais liés à la localisation&nbsp;» pour couvrir la DST en France. +3 % pour la France, l\'Italie et l\'Espagne&nbsp;; +5 % pour l\'Autriche et la Turquie&nbsp;; +2 % pour le Royaume-Uni.',
      '<strong>Impact budget :</strong> pour un budget de 10 000&nbsp;€ sur Meta en France à partir de juillet 2026, 300&nbsp;€ seront prélevés en frais de localisation, portant le coût réel à 10 300&nbsp;€ pour le même volume d\'achats média.',
      '<strong>Autres plateformes :</strong> Amazon avait déjà augmenté ses commissions vendeurs de 3 % en 2019. TikTok et LinkedIn n\'ont pas encore annoncé de répercussion directe de la DST.',
      '<strong>Anticipation budgétaire :</strong> prévoir dès maintenant une marge de 2 à 5 % sur les budgets Google et Meta pour absorber ces surcoûts. Mettre à jour les simulations de coût par KPI en conséquence.'
    ],warn:'Les taux de la taxe GAFA peuvent évoluer. Tenir à jour vos grilles tarifaires à chaque annonce officielle des plateformes. Source&nbsp;: <a href="https://www.destimed.fr/google-augmente-ses-tarifs-de-2-en-france-pour-payer-la-taxe-gafa/" target="_blank" style="color:var(--accent)">Destimed — Google +2%</a> · <a href="https://communicant.info/meta-ads-repercute-la-taxe-gafa-3-sur-vos-campagnes-des-juillet-2026/" target="_blank" style="color:var(--accent)">Communicant — Meta +3%</a>'},
  ];
function renderLegal(){
  const secs=LEGAL_DATA
  let h=`<div class="page-head"><h1>⚖️ Cadre légal français</h1><p>Les lois et règlements qui impactent directement votre publicité sur les réseaux sociaux en France.</p></div>`;
  h+=`<div class="legal-toc"><div class="legal-toc-lbl">Sommaire</div><div class="legal-toc-links">`;
  secs.forEach(s=>h+=`<span class="legal-link" onclick="document.getElementById('ls-${s.n}').scrollIntoView({behavior:'smooth'})">${s.n}. ${s.title}</span>`);
  h+=`</div></div>`;
  secs.forEach(s=>{
    h+=`<div class="legal-sec" id="ls-${s.n}"><div class="legal-sec-head"><div class="legal-num">${s.n}</div><div><div class="legal-title">${s.title}</div><div class="legal-law">${s.law}</div></div></div><ul class="legal-pts">`;
    s.pts.forEach(p=>h+=`<li>${p}</li>`);
    h+=`</ul>`;
    if(s.warn)h+=`<div class="legal-warn">⚠️ ${s.warn}</div>`;
    h+=`</div>`;
  });
  document.getElementById('page-legal').innerHTML=h;
}

// ═══════════════════════════════════════
// OVERVIEW
// ═══════════════════════════════════════
// PRESET_OVERVIEWS loaded from JSON
let PRESET_OVERVIEWS = [];
fetch('assets/data/overviews.json')
  .then(r => r.json())
  .then(data => {
    PRESET_OVERVIEWS = data;
    overviews = [...PRESET_OVERVIEWS, ...userOverviews];
    SEARCH_IDX = []; // invalidate so next search rebuilds with overviews
    if(document.getElementById('page-overview') && document.getElementById('page-overview').classList.contains('active')){
      renderOverview();
    }
  })
  .catch(e => console.warn('Could not load overviews.json', e));

// Merge preset overviews with any user-added ones
let userOverviews = [];
try { userOverviews = JSON.parse(localStorage.getItem('sah_user_overviews')||'[]'); } catch(e) {}
let overviews = [...PRESET_OVERVIEWS, ...userOverviews];

function saveOverviews(){
  try { localStorage.setItem('sah_user_overviews', JSON.stringify(userOverviews)); } catch(e) {}
  overviews = [...PRESET_OVERVIEWS, ...userOverviews];
}

function renderOverview(){
  overviews = [...PRESET_OVERVIEWS, ...userOverviews];
  const sorted=[...overviews].sort((a,b)=>{
    const na=(a.name.match(/#(\d+)/)||[])[1];
    const nb=(b.name.match(/#(\d+)/)||[])[1];
    if(na&&nb) return Number(nb)-Number(na);
    if(na) return -1;
    if(nb) return 1;
    return overviews.indexOf(a)-overviews.indexOf(b);
  });
  let listHtml=`<div class="overview-list">`;
  sorted.forEach((ov)=>{
    const realIdx=overviews.indexOf(ov);
    listHtml+=`<div class="ov-card" data-ov-idx="${realIdx}" style="cursor:pointer" onclick="viewOverview(${realIdx})">
      <div style="flex:1">
        <div class="ov-card-name">${ov.name}</div>
        <div class="ov-card-date">📅 ${ov.date}</div>
      </div>
      <button class="ov-btn ov-btn-view" onclick="event.stopPropagation();viewOverview(${realIdx})">Voir →</button>
    </div>`;
  });
  listHtml+=`</div>`;
  const h=`<div class="ov-layout">
    <div class="ov-panel-list">${listHtml}</div>
    <div class="ov-panel-preview" id="pdfViewerWrap">
      <div class="ov-empty-state" id="pdfEmptyState">
        <div class="ov-empty-icon">📄</div>
        <div class="ov-empty-title">Sélectionner un Øverview</div>
        <div class="ov-empty-desc">Cliquez sur un Øverview dans la liste pour afficher le PDF ici.</div>
      </div>
      <div id="pdfViewerContent" style="display:none;flex-direction:column;flex:1;min-height:0">
        <div class="ov-preview-header">
          <div class="ov-preview-title" id="pdfViewerTitle"></div>
          <div style="display:flex;gap:6px;align-items:center;flex-shrink:0">
            <a class="ov-open-tab" id="pdfOpenTab" href="#" target="_blank" rel="noopener" title="Ouvrir dans un nouvel onglet">↗ Ouvrir</a>
            <button class="ov-preview-close" onclick="closeOvViewer()">✕ Fermer</button>
          </div>
        </div>
        <iframe id="pdfViewer" class="pdf-viewer"></iframe>
      </div>
    </div>
  </div>`;
  document.getElementById('page-overview').innerHTML=h;
}
function handleFile(e){const f=e.target.files[0];if(f&&f.type==='application/pdf')processFile(f);e.target.value='';}
function handleDrop(e){e.preventDefault();document.getElementById('uploadZone').classList.remove('drag');const f=e.dataTransfer.files[0];if(f&&f.type==='application/pdf')processFile(f);}

function processFile(file){
  const reader=new FileReader();
  reader.onload=function(e){
    const now=new Date();
    const dateStr=now.toLocaleDateString('fr-FR',{day:'2-digit',month:'long',year:'numeric'});
    userOverviews.unshift({name:file.name.replace('.pdf',''),date:dateStr,data:e.target.result});
    saveOverviews();
    renderOverview();
  };
  reader.readAsDataURL(file);
}

function viewOverview(i){
  const ov=overviews[i];
  document.getElementById('pdfViewerTitle').textContent=ov.name;
  const iframe=document.getElementById('pdfViewer');
  if(iframe._blobUrl){URL.revokeObjectURL(iframe._blobUrl);iframe._blobUrl=null;}
  const src = ov.file || ov.data;
  if(src && src.startsWith('data:')) {
    const b64=src.split(',')[1];
    const bin=atob(b64);
    const bytes=new Uint8Array(bin.length);
    for(let j=0;j<bin.length;j++)bytes[j]=bin.charCodeAt(j);
    const blob=new Blob([bytes],{type:'application/pdf'});
    const blobUrl=URL.createObjectURL(blob);
    iframe._blobUrl=blobUrl;
    iframe.src=blobUrl;
  } else {
    iframe.src=src;
  }
  // Update "open in new tab" link
  const tabLink = document.getElementById('pdfOpenTab');
  if(tabLink) tabLink.href = (src && src.startsWith('data:')) ? '#' : (src || '#');
  document.getElementById('pdfEmptyState').style.display='none';
  document.getElementById('pdfViewerContent').style.display='flex';
  document.querySelectorAll('.ov-card').forEach(c=>c.classList.remove('ov-active'));
  const card=document.querySelector(`.ov-card[data-ov-idx="${i}"]`);
  if(card)card.classList.add('ov-active');
}
function closeOvViewer(){
  document.getElementById('pdfViewerContent').style.display='none';
  document.getElementById('pdfEmptyState').style.display='flex';
  const iframe=document.getElementById('pdfViewer');
  if(iframe._blobUrl){URL.revokeObjectURL(iframe._blobUrl);iframe._blobUrl=null;}
  iframe.src='';
  document.querySelectorAll('.ov-card').forEach(c=>c.classList.remove('ov-active'));
}

function deleteOverview(i){
  const presetLen = PRESET_OVERVIEWS.length;
  if(i < presetLen){ alert('Les Overviews prédéfinis ne peuvent pas être supprimés.'); return; }
  if(confirm('Supprimer "'+overviews[i].name+'" ?')){
    userOverviews.splice(i - presetLen, 1);
    saveOverviews();
    renderOverview();
  }
}

// ═══════════════════════════════════════
// INIT
// ═══════════════════════════════════════
document.getElementById('yr').textContent=new Date().getFullYear();
document.getElementById('mainNav').setAttribute('aria-label','Navigation principale');
// Apply the current hash on load (lazy rendering — each page is rendered on first visit)
applyRoute(window.location.hash||'#home');
// ─── MOTEUR DE RECHERCHE INTERNE ───
let SEARCH_IDX=[];
function _norm(s){return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^\w\s]/g,' ').replace(/\s+/g,' ').trim();}
function buildSearchIdx(){
  SEARCH_IDX=[];
  const TABS=['formats','restrictions','kpi','pixel'];
  const TAB_LABELS={'formats':'Formats','restrictions':'Restrictions','kpi':'KPIs','pixel':'Pixel/Tag'};

  // ── Social Ads: platforms + individual format names ──
  Object.entries(P).forEach(([id,plat])=>{
    TABS.forEach(tab=>{
      if(plat[tab]===undefined) return;
      // Platform-tab entry
      SEARCH_IDX.push({label:plat.name||id, sub:'Social Ads · '+(TAB_LABELS[tab]||tab),
        keywords:[_norm(plat.name||id), tab, TAB_LABELS[tab]||tab,'social','ads'],
        action:()=>openPlatform(id,tab)});
      // Individual format entries within the tab
      if(Array.isArray(plat[tab])){
        plat[tab].forEach(fmt=>{
          if(!fmt||!fmt.name) return;
          const kws=[_norm(fmt.name),_norm(fmt.desc||''),_norm(plat.name||id),'social','ads',tab];
          SEARCH_IDX.push({label:fmt.name, sub:'Social Ads · '+(plat.name||id)+' · '+(TAB_LABELS[tab]||tab),
            keywords:kws, action:()=>openPlatform(id,tab)});
        });
      }
    });
  });

  // ── Benchmarks: sectors + platforms ──
  if(typeof BM!=='undefined'){
    Object.entries(BM).forEach(([key,sector])=>{
      SEARCH_IDX.push({label:sector.label||key, sub:'Benchmarks · Secteur',
        keywords:[_norm(sector.label||key),'benchmark','cpm','cpc','benchmarks','kpi'],
        action:()=>nav('benchmarks')});
      (sector.platforms||[]).forEach(p=>{
        SEARCH_IDX.push({label:(p.name||'')+' — '+(sector.label||key), sub:'Benchmarks · CPM/CPC/VTR',
          keywords:[_norm(p.name||''),_norm(sector.label||key),'benchmark','cpm','cpc'],
          action:()=>nav('benchmarks')});
      });
    });
  }

  // ── Métriques ──
  if(typeof METRICS_DATA!=='undefined'){
    METRICS_DATA.forEach(m=>{
      SEARCH_IDX.push({label:m.name, sub:'Métriques · Définition',
        keywords:[_norm(m.name),_norm(m.def||''),_norm(m.formula||''),'métrique','kpi','définition','metric'],
        action:()=>nav('metrics')});
    });
  }

  // ── Pièges & erreurs ──
  if(typeof TRAPS_DATA!=='undefined'){
    TRAPS_DATA.forEach((t,i)=>{
      SEARCH_IDX.push({label:t.title, sub:'Pièges & erreurs fréquentes',
        keywords:[_norm(t.title),_norm(t.why||''),_norm(t.impact||''),_norm(t.sol||''),'piège','erreur','trap'],
        action:()=>{nav('traps');setTimeout(()=>{const b=document.getElementById('tb-'+i);if(b&&!b.classList.contains('open'))toggleTrap(i);const el=document.querySelector('.trap-card:nth-child('+(i+1)+')');if(el)el.scrollIntoView({behavior:'smooth',block:'start'});},300);}});
    });
  }

  // ── Cadre légal ──
  if(typeof LEGAL_DATA!=='undefined'){
    LEGAL_DATA.forEach(s=>{
      SEARCH_IDX.push({label:s.title+' — '+s.law, sub:'Cadre légal',
        keywords:[_norm(s.title),_norm(s.law||''),_norm((s.pts||[]).join(' ')),'légal','loi','rgpd','droit'],
        action:()=>{nav('legal');setTimeout(()=>{const el=document.getElementById('ls-'+s.n);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});},300);}});
    });
  }

  // ── Programmatique ──
  if(typeof PROG_LEVIERS!=='undefined'){
    PROG_LEVIERS.forEach((lev,i)=>{
      const kws=[_norm(lev.name||''),_norm(lev.tag||''),_norm(lev.def||''),
        _norm((lev.placements||[]).join(' ')),_norm((lev.ciblage||[]).join(' ')),
        _norm(lev.interet||''),'programmatique','prog','levier','display','video'];
      SEARCH_IDX.push({label:lev.name||('Levier '+(i+1)), sub:'Programmatique · '+(lev.tag||''),
        keywords:kws, action:()=>nav('prog')});
    });
  }

  // ── Øverviews PDF ──
  if(typeof PRESET_OVERVIEWS!=='undefined'&&PRESET_OVERVIEWS.length>0){
    PRESET_OVERVIEWS.forEach((ov,i)=>{
      SEARCH_IDX.push({label:ov.name||('Overview '+(i+1)), sub:'Øverview · PDF',
        keywords:[_norm(ov.name||''),'overview','verview','pdf','rapport','veille'],
        action:()=>{nav('overview');setTimeout(()=>viewOverview(i),300);}});
    });
  }
}
function _score(entry,qNorm,qWords){
  let s=0;
  const kws=entry.keywords||[];
  kws.forEach(k=>{
    if(!k) return;
    if(k===qNorm) s+=50;
    else if(k.startsWith(qNorm)) s+=30;
    qWords.forEach(w=>{if(w.length>1&&k.includes(w)) s+=15;});
  });
  const lbl=_norm(entry.label);
  if(lbl===qNorm) s+=40;
  else if(lbl.startsWith(qNorm)) s+=20;
  qWords.forEach(w=>{if(w.length>1&&lbl.includes(w)) s+=10;});
  return s;
}
function _fuzzy(entry,qNorm){
  const lbl=_norm(entry.label);
  if(lbl.length<3||qNorm.length<3) return false;
  const bg=s=>{const b=new Set();for(let i=0;i<s.length-1;i++) b.add(s.slice(i,i+2));return b;};
  const bq=bg(qNorm),bl=bg(lbl);
  let c=0;bq.forEach(b=>{if(bl.has(b)) c++;});
  return c/Math.max(bq.size,1)>=0.55;
}
function doSearch(q){
  const dropdown=document.getElementById('search-dropdown');
  const res=document.getElementById('search-results');
  if(!dropdown||!res) return;
  const trimmed=q.trim();
  if(!trimmed){dropdown.classList.remove('open');res.innerHTML='';return;}
  if(SEARCH_IDX.length===0) buildSearchIdx();
  const qNorm=_norm(trimmed);
  const qWords=qNorm.split(' ').filter(w=>w.length>1);
  let hits=SEARCH_IDX.map((entry,i)=>({entry,i,score:_score(entry,qNorm,qWords)})).filter(x=>x.score>0);
  if(hits.length===0) hits=SEARCH_IDX.map((entry,i)=>({entry,i,score:_fuzzy(entry,qNorm)?1:0})).filter(x=>x.score>0);
  hits.sort((a,b)=>b.score-a.score);
  const top=hits.slice(0,8);
  _srActiveIdx=-1;
  res.innerHTML=top.length===0
    ? '<div class="search-empty">Aucun résultat pour « '+trimmed+' »</div>'
    : top.map(({entry,i},ri)=>`<div class="search-result-item" role="option" aria-selected="false" data-ri="${ri}" onclick="_sgo(${i})" tabindex="0"><div><div class="search-result-label">${entry.label}</div><div class="search-result-sub">${entry.sub}</div></div></div>`).join('');
  dropdown.classList.add('open');
}
let _srActiveIdx=-1;

function _srSetActive(idx){
  const items=document.querySelectorAll('.search-result-item');
  if(!items.length) return;
  items.forEach((el,i)=>{
    const active=i===idx;
    el.classList.toggle('active',active);
    el.setAttribute('aria-selected',String(active));
  });
  if(items[idx]) items[idx].scrollIntoView({block:'nearest'});
  _srActiveIdx=idx;
}

function _srHandleKey(e){
  const dropdown=document.getElementById('search-dropdown');
  if(!dropdown||!dropdown.classList.contains('open')) return;
  const items=document.querySelectorAll('.search-result-item');
  if(e.key==='ArrowDown'){e.preventDefault();_srSetActive(Math.min(_srActiveIdx+1,items.length-1));}
  else if(e.key==='ArrowUp'){e.preventDefault();_srSetActive(Math.max(_srActiveIdx-1,0));}
  else if(e.key==='Enter'&&_srActiveIdx>=0){e.preventDefault();const a=document.querySelector('.search-result-item.active');if(a) a.click();}
  else if(e.key==='Escape'){toggleSearch();}
}

function toggleSearch(){
  const expand=document.getElementById('search-expand');
  const inp=document.getElementById('search-input');
  const dropdown=document.getElementById('search-dropdown');
  if(!expand) return;
  const open=expand.classList.toggle('open');
  if(open){
    closeMobile();
    if(SEARCH_IDX.length===0) buildSearchIdx();
    setTimeout(()=>inp&&inp.focus(),60);
    document.addEventListener('keydown',_srHandleKey);
  } else {
    document.removeEventListener('keydown',_srHandleKey);
    if(dropdown) dropdown.classList.remove('open');
    if(inp){inp.value='';const res=document.getElementById('search-results');if(res) res.innerHTML='';}
    _srActiveIdx=-1;
  }
}
function _sgo(i){if(SEARCH_IDX[i]){SEARCH_IDX[i].action();toggleSearch();}}

