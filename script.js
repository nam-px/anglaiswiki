document.addEventListener('DOMContentLoaded', function() {
    // Add styles programmatically
    const style = document.createElement('style');
    style.textContent = `
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #4a4a4a;
            color: #fff;
            text-align: center;
            padding: 1rem;
        }

        nav ul {
            list-style-type: none;
            padding: 0;
        }

        nav ul li {
            display: inline;
            margin-right: 10px;
        }

        nav ul li a {
            color: #fff;
            text-decoration: none;
        }

        main {
            padding: 20px;
        }

        section {
            margin-bottom: 20px;
        }

        /* Remove footer styles from here */

        .meme-image {
            max-width: 100%;
            height: auto;
            margin: 20px 0;
            display: block;
        }

        .learning-steps {
            margin-top: 40px;
            text-align: left;
        }

        .learning-steps h3 {
            color: #2c3e50;
            margin-top: 30px;
        }

        .learning-steps h4 {
            color: #34495e;
            margin-top: 20px;
        }

        .learning-steps ul {
            list-style-type: disc;
            margin-left: 20px;
        }

        .learning-steps p {
            margin-bottom: 15px;
        }
    `;
    document.head.appendChild(style);
});

// Remove or comment out any event listeners for scroll

// Language translation
const translations = {
    en: {
        welcome: "Welcome to AnglaisWiki",
        landing_p1: "With AI taking over everything, being able to communicate in the world's universal language - English, is more than just helpful, it's divinely important. Almost every major tool, resource, or conversation in the tech world is happening in English. Imagine being able to fully understand the tools shaping the future—that's what this language gives you. The world is at your fingertips with your ability to use English!",
        landing_p2: "This website aims to guide you on a journey to master English easily and enjoyably. Our approach focuses on making the learning process painless and fun, rather than a traditional educational experience. Created by someone who did the process himself.",
        step1_title: "Step 1: Identifying Your English Level (A1-C2) and Personalizing Your Content",
        step1_content: "The first step to learning English effectively is figuring out your starting point—your current level of proficiency. Why is this so important? Well, knowing your level helps you choose the right materials that are just challenging enough to push you forward without overwhelming you. The key is to find content that fits your interests, so learning becomes enjoyable and something you look forward to.",
        how_to_identify: "How to Identify Your Level:",
        level_test_intro: "There are several free tools you can use to assess your English level. I recommend starting with a simple online test. Here are a few great options:",
        british_council_test: "British Council Level Test: Provides a quick assessment with detailed results from A1 to C2.",
        cambridge_test: "Cambridge English Test: A trusted source with a deep understanding of language levels.",
        ef_set_test: "EF SET: A longer, more comprehensive test that gives a solid evaluation of your proficiency.",
        after_test: "After completing one of these tests, you'll be categorized into a level from A1 (beginner) to C2 (proficient). Once you know where you stand, it's time to tailor your learning to your personal interests.",
        journey: "Your English Learning Journey",
        content_suggestions: "Content Suggestions for Each Level Based on Your Interests:",
        beginner_title: "A1-A2: Beginner",
        beginner_content: "At this stage, focus on simple, clear content. You'll want to start with easy-to-understand materials related to everyday life, but personalized to your interests so you stay engaged.",
        beginner_fashion: "If you love fashion and cosmetics: Try following simple blogs like Into The Gloss, or watching beauty tutorials on YouTube with subtitles, focusing on basic vocabulary (e.g., 'foundation', 'lipstick', 'skincare').",
        beginner_sports: "If you're into sports: Watch Football Daily or NBA Highlights on YouTube. Look for videos that explain games or news with basic commentary.",
        beginner_general: "For general learners: Apps like Duolingo or Memrise are great, especially if you enjoy short, game-like lessons.",
        intermediate_title: "B1-B2: Intermediate",
        intermediate_content: "Here, you can handle more detailed content, but you still need structure. Your aim should be to engage with media and articles in your areas of interest that challenge you a little, without being too advanced.",
        intermediate_tech: "For someone into technology: Follow tech YouTubers like MKBHD or read tech news on The Verge. Both platforms use a moderate level of English and cover popular topics like gadgets, AI, and tech trends.",
        intermediate_realestate: "Real-estate enthusiasts: Try reading articles from Real Estate Weekly or listening to podcasts like BiggerPockets Real Estate Podcast, which are full of practical terms for buying, selling, and the housing market.",
        intermediate_travel: "Travel lovers: Read blog posts from travel websites like Lonely Planet, and watch travel vlogs from YouTube channels like Kara and Nate or The Bucket List Family, which offer conversational language with a good mix of practical and adventurous vocabulary.",
        advanced_title: "C1-C2: Advanced",
        advanced_content: "You're nearly fluent, so it's time to dive into complex topics and professional-level content. This is where you can start consuming English just as native speakers do—through news, books, and high-level discussions in your area of expertise.",
        advanced_business: "For business professionals: Reading articles on Harvard Business Review or watching keynote talks from TED on business and leadership will challenge you with advanced grammar and industry jargon.",
        advanced_science: "If you're into science: Read articles from Scientific American or follow channels like Kurzgesagt on YouTube. They tackle complex issues like climate change, neuroscience, and artificial intelligence with deep, thoughtful discussions.",
        advanced_art: "Artists and creatives: Watch interviews or read features from ArtNet or The Art Newspaper. You can also listen to podcasts like The Art History Babes for more engaging, high-level discussions on art movements and artists.",
        
        step2_title: "Step 2: The Power of Reading – Building True Comprehension",
        step2_content: "Reading is one of the most powerful tools for mastering English, or any language for that matter. It goes beyond vocabulary—it helps you internalize grammar, understand context, and develop a natural flow of language. Think of it this way: when you read, you're not just learning words; you're absorbing the structure, nuances, and emotions behind them. It's how language comes to life, and it's what will take you from basic communication to deep comprehension.",
        why_reading_matters: "Why Reading Matters:",
        exposure_title: "Exposure to Natural Sentence Structures",
        exposure_content: "Reading exposes you to real-world sentence structures that you wouldn't find in traditional language lessons. When you read, you see how native speakers use the language in a fluid, natural way. It helps you understand how words and phrases fit together, which is crucial for sounding natural when you speak.",
        context_title: "Context and Comprehension",
        context_content: "Words are nothing without context. Reading gives you the context you need to fully grasp new vocabulary. Instead of memorizing isolated words, you see them in action, within a story or article that gives them meaning.",
        engagement_title: "Active Engagement with the Language",
        engagement_content: "When you read, you're actively engaging with the language. Your mind is constantly working—guessing the meaning of new words, visualizing the story, and thinking about what's coming next. This active engagement makes the learning process more memorable and enjoyable.",
        practical_steps: "Practical Steps to Start Reading:",
        choose_level: "Choose the Right Level",
        choose_level_content: "Don't jump into complex texts too early. Start with material that is slightly above your comfort zone, but still manageable. For beginners, graded readers (simplified books) or children's books can be an excellent starting point. As you progress, move on to newspapers, blogs, and novels.",
        personalize_reading: "Personalize Your Reading",
        personalize_reading_content: "Find content that resonates with your interests. If you're into fashion, read blogs or magazines like Vogue. If you're passionate about business, read articles from Forbes or Harvard Business Review. The key is to find material that excites you, so learning feels like less of a chore.",
        read_daily: "Read Daily",
        read_daily_content: "Consistency is key. Even if it's just 10-15 minutes a day, reading daily will build your language skills over time. Make it a habit, and stick to it.",
        reading_conclusion: "That's the gist. If you understand what we tried to tell you before. You hold the key to mastering not just English, but any kind of languages you want to learn. A few more practical notes can help you get start right away:",
        
        
        
        practical_notes_title: "Practical Notes for Getting Started",
        note1_title: "1. Start with Comprehensible Input in Your Field",
        note1_idea: "The Idea:",
        note1_idea_content: "You need to expose yourself to English that's just a bit harder than your current level (Krashen calls it i+1), especially in your area of work.",
        note1_example: "Real-Life Example:",
        note1_example_content: "Let's say you work in digital marketing. You can start by watching beginner-level webinars on YouTube by Neil Patel, who speaks clearly and slowly. Then gradually, move on to slightly more advanced talks on marketing strategies. Don't get stuck on every word—just try to get the main idea. The goal is to get your brain used to the kind of English you'll need at work.",
        note2_title: "2. Focus on Meaning, Not Form",
        note2_idea: "The Idea:",
        note2_idea_content: "Forget about perfect grammar for now. You'll absorb the rules naturally by focusing on what people are saying, not how they're saying it.",
        note2_example: "Real-Life Example:",
        note2_example_content: "Imagine you're watching a TED Talk on leadership by Simon Sinek. Instead of pausing every time you don't understand a phrase, just keep going and focus on the main message. What is he trying to say? What examples does he give? Later, you can look up specific words, but for now, the main focus is understanding and enjoying the content.",
        note3_title: "3. Minimize Anxiety and Maximize Enjoyment (The Affective Filter)",
        note3_idea: "The Idea:",
        note3_idea_content: "If you're stressed out or feeling pressured, your brain literally shuts down when it comes to learning. So, keep it chill.",
        note3_example: "Real-Life Example:",
        note3_example_content: "You're nervous about practicing English in a work setting, but instead of jumping into a formal business call, try an English social group online. Apps like Meetup have relaxed, topic-based English conversation groups where no one cares if you make mistakes. This builds confidence in a low-stress environment. You could chat about hobbies, life, or movies before diving into business-related conversations.",
        note4_title: "4. Produce Language Naturally Through Output",
        note4_idea: "The Idea:",
        note4_idea_content: "Once you're absorbing enough input, you'll naturally start to speak and write without forcing it. Don't rush it—let it flow.",
        note4_example: "Real-Life Example:",
        note4_example_content: "You've been following industry podcasts and reading articles, and now you want to start writing emails in English at work. Start small: respond to your colleagues in short phrases in English. For example, if someone asks for your opinion, reply with 'I agree' or 'I think we can improve it this way.' Over time, increase the length and complexity of your sentences. You can also ask to lead short parts of meetings, like presenting a project update.",
        note5_title: "5. Focus on Real Communication (Input Hypothesis)",
        note5_idea: "The Idea:",
        note5_idea_content: "You don't learn a language by memorizing grammar rules—you learn by using it in real situations. Engage with English as it's used in actual communication.",
        note5_example: "Real-Life Example:",
        note5_example_content: "Set your phone, laptop, and work software to English. This simple tweak immerses you in the language every day. For instance, when using software like Trello or Slack for work, you'll automatically practice reading and writing in English. If your colleagues speak English, try switching to English in your conversations and emails whenever possible, even for small tasks.",
        note6_title: "6. Monitor Your Progress (But Don't Overdo It)",
        note6_idea: "The Idea:",
        note6_idea_content: "Track your progress, but don't obsess over it. The goal is natural growth, not perfection.",
        note6_example: "Real-Life Example:",
        note6_example_content: "Use an app like Anki to create a deck of key phrases or technical terms you've learned in English. Set it up to remind you daily, so you're reviewing these terms without it feeling like hard study. Every few weeks, check how much faster you can recall or use these phrases. Maybe after a month, you'll notice that writing an email in English takes you half the time it used to. Celebrate that progress!",
        conclusion: "There you have it. A laid-back, real-world way to learn English that works. By focusing on input, not stressing about mistakes, and using English in meaningful ways, you'll naturally improve your skills. Krashen's method is about making the language part of your life, not something separate and stressful. So start today, little by little, and you'll be amazed at how much more confident you'll feel using English in your everyday work. Keep going—you're closer than you think!"
    },
    fr: {
        welcome: "Bienvenue sur AnglaisWiki",
        landing_p1: "Avec l'IA qui prend le contrôle de tout, être capable de communiquer dans la langue universelle du monde - l'anglais, est plus qu'utile, c'est divinement important. Presque tous les outils majeurs, les ressources ou les conversations dans le monde de la technologie se déroulent en anglais. Imaginez pouvoir comprendre pleinement les outils qui façonnent l'avenir - c'est ce que cette langue vous offre. Le monde est à portée de main grâce à votre capacité à utiliser l'anglais !",
        landing_p2: "Ce site web vise à vous guider dans un voyage pour maîtriser l'anglais facilement et agréablement. Notre approche se concentre sur le fait de rendre le processus d'apprentissage indolore et amusant, plutôt qu'une expérience éducative traditionnelle. Créé par quelqu'un qui a lui-même suivi ce processus.",
        step1_title: "Étape 1 : Identifier votre niveau d'anglais (A1-C2) et personnaliser votre contenu",
        step1_content: "La première étape pour apprendre l'anglais efficacement est de déterminer votre point de départ - votre niveau actuel de compétence. Pourquoi est-ce si important ? Eh bien, connaître votre niveau vous aide à choisir les bons matériaux qui sont juste assez difficiles pour vous faire progresser sans vous submerger. La clé est de trouver du contenu qui correspond à vos intérêts, afin que l'apprentissage devienne agréable et quelque chose que vous attendez avec impatience.",
        how_to_identify: "Comment identifier votre niveau :",
        level_test_intro: "Il existe plusieurs outils gratuits que vous pouvez utiliser pour évaluer votre niveau d'anglais. Je recommande de commencer par un simple test en ligne. Voici quelques excellentes options :",
        british_council_test: "Test de niveau du British Council : Fournit une évaluation rapide avec des résultats détaillés de A1 à C2.",
        cambridge_test: "Test d'anglais de Cambridge : Une source fiable avec une compréhension approfondie des niveaux de langue.",
        ef_set_test: "EF SET : Un test plus long et plus complet qui donne une évaluation solide de vos compétences.",
        after_test: "Après avoir terminé l'un de ces tests, vous serez classé dans un niveau allant de A1 (débutant) à C2 (avancé). Une fois que vous savez où vous en êtes, il est temps d'adapter votre apprentissage à vos intérêts personnels.",
        journey: "Votre parcours d'apprentissage de l'anglais",
        content_suggestions: "Suggestions de contenu pour chaque niveau en fonction de vos intérêts :",
        beginner_title: "A1-A2 : Débutant",
        beginner_content: "À ce stade, concentrez-vous sur un contenu simple et clair. Vous voudrez commencer par des documents faciles à comprendre liés à la vie quotidienne, mais personnalisés selon vos intérêts pour rester engagé.",
        beginner_fashion: "Si vous aimez la mode et les cosmétiques : Essayez de suivre des blogs simples comme Into The Gloss, ou de regarder des tutoriels de beauté sur YouTube avec des sous-titres, en vous concentrant sur le vocabulaire de base (par exemple, « fond de teint », « rouge à lèvres », « soin de la peau »).",
        beginner_sports: "Si vous aimez le sport : Regardez Football Daily ou NBA Highlights sur YouTube. Cherchez des vidéos qui expliquent les jeux ou les actualités avec des commentaires simples.",
        beginner_general: "Pour les apprenants généraux : Des applications comme Duolingo ou Memrise sont excellentes, surtout si vous aimez les leçons courtes et ludiques.",
        intermediate_title: "B1-B2 : Intermédiaire",
        intermediate_content: "Ici, vous pouvez gérer un contenu plus détaillé, mais vous avez encore besoin de structure. Votre objectif devrait être de vous engager avec des médias et des articles dans vos domaines d'intérêt qui vous défient un peu, sans être trop avancés.",
        intermediate_tech: "Pour quelqu'un qui s'intéresse à la technologie : Suivez des YouTubers tech comme MKBHD ou lisez des actualités tech sur The Verge. Les deux plateformes utilisent un niveau d'anglais modéré et couvrent des sujets populaires comme les gadgets, l'IA et les tendances technologiques.",
        intermediate_realestate: "Passionnés d'immobilier : Essayez de lire des articles de Real Estate Weekly ou d'écouter des podcasts comme BiggerPockets Real Estate Podcast, qui sont pleins de termes pratiques pour l'achat, la vente et le marché immobilier.",
        intermediate_travel: "Amoureux du voyage : Lisez des articles de blog de sites de voyage comme Lonely Planet, et regardez des vlogs de voyage de chaînes YouTube comme Kara and Nate ou The Bucket List Family, qui offrent un langage conversationnel avec un bon mélange de vocabulaire pratique et aventureux.",
        advanced_title: "C1-C2 : Avancé",
        advanced_content: "Vous êtes presque bilingue, il est donc temps de plonger dans des sujets complexes et du contenu de niveau professionnel. C'est là que vous pouvez commencer à consommer l'anglais comme le font les locuteurs natifs - à travers les actualités, les livres et les discussions de haut niveau dans votre domaine d'expertise.",
        advanced_business: "Pour les professionnels du business : Lire des articles sur Harvard Business Review ou regarder des conférences de TED sur le business et le leadership vous mettra au défi avec une grammaire avancée et du jargon industriel.",
        advanced_science: "Si vous êtes passionné de science : Lisez des articles de Scientific American ou suivez des chaînes comme Kurzgesagt sur YouTube. Ils abordent des questions complexes comme le changement climatique, les neurosciences et l'intelligence artificielle avec des discussions profondes et réfléchies.",
        advanced_art: "Artistes et créatifs : Regardez des interviews ou lisez des articles de ArtNet ou The Art Newspaper. Vous pouvez aussi écouter des podcasts comme The Art History Babes pour des discussions plus engageantes et de haut niveau sur les mouvements artistiques et les artistes.",
        
        
        step2_title: "Étape 2 : Le pouvoir de la lecture - Construire une véritable compréhension",
        step2_content: "La lecture est l'un des outils les plus puissants pour maîtriser l'anglais, ou toute autre langue d'ailleurs. Elle va au-delà du vocabulaire - elle vous aide à intérioriser la grammaire, à comprendre le contexte et à développer un flux naturel de langage. Pensez-y de cette façon : quand vous lisez, vous n'apprenez pas seulement des mots ; vous absorbez la structure, les nuances et les émotions qui les sous-tendent. C'est ainsi que la langue prend vie, et c'est ce qui vous fera passer d'une communication basique à une compréhension profonde.",
        why_reading_matters: "Pourquoi la lecture est importante :",
        exposure_title: "Exposition aux structures de phrases naturelles",
        exposure_content: "La lecture vous expose à des structures de phrases du monde réel que vous ne trouveriez pas dans les leçons de langue traditionnelles. Lorsque vous lisez, vous voyez comment les locuteurs natifs utilisent la langue de manière fluide et naturelle. Cela vous aide à comprendre comment les mots et les phrases s'assemblent, ce qui est crucial pour avoir l'air naturel lorsque vous parlez.",
        context_title: "Contexte et compréhension",
        context_content: "Les mots ne sont rien sans contexte. La lecture vous donne le contexte dont vous avez besoin pour saisir pleinement le nouveau vocabulaire. Au lieu de mémoriser des mots isolés, vous les voyez en action, dans une histoire ou un article qui leur donne du sens.",
        engagement_title: "Engagement actif avec la langue",
        engagement_content: "Lorsque vous lisez, vous vous engagez activement avec la langue. Votre esprit travaille constamment - devinant le sens de nouveaux mots, visualisant l'histoire et réfléchissant à ce qui va suivre. Cet engagement actif rend le processus d'apprentissage plus mémorable et agréable.",
        practical_steps: "Étapes pratiques pour commencer à lire :",
        choose_level: "Choisissez le bon niveau",
        choose_level_content: "Ne vous lancez pas trop tôt dans des textes complexes. Commencez par du matériel légèrement au-dessus de votre zone de confort, mais toujours gérable. Pour les débutants, les lecteurs gradués (livres simplifiés) ou les livres pour enfants peuvent être un excellent point de départ. Au fur et à mesure que vous progressez, passez aux journaux, blogs et romans.",
        personalize_reading: "Personnalisez votre lecture",
        personalize_reading_content: "Trouvez du contenu qui résonne avec vos intérêts. Si vous aimez la mode, lisez des blogs ou des magazines comme Vogue. Si vous êtes passionné par les affaires, lisez des articles de Forbes ou de Harvard Business Review. La clé est de trouver du matériel qui vous passionne, pour que l'apprentissage ressemble moins à une corvée.",
        read_daily: "Lisez quotidiennement",
        read_daily_content: "La constance est la clé. Même si ce n'est que 10-15 minutes par jour, la lecture quotidienne développera vos compétences linguistiques au fil du temps. Faites-en une habitude et tenez-vous-y.",
        reading_conclusion: "C'est l'essentiel. Si vous comprenez ce que nous avons essayé de vous dire avant. Vous détenez la clé pour maîtriser non seulement l'anglais, mais toutes les langues que vous voulez apprendre. Quelques notes pratiques supplémentaires peuvent vous aider à commencer tout de suite :",
        
        
        
        practical_notes_title: "Notes pratiques pour commencer",
        note1_title: "1. Commencez par des entrées compréhensibles dans votre domaine",
        note1_idea: "L'idée :",
        note1_idea_content: "Vous devez vous exposer à un anglais qui est juste un peu plus difficile que votre niveau actuel (Krashen l'appelle i+1), en particulier dans votre domaine de travail.",
        note1_example: "Exemple concret :",
        note1_example_content: "Disons que vous travaillez dans le marketing digital. Vous pouvez commencer par regarder des webinaires de niveau débutant sur YouTube par Neil Patel, qui parle clairement et lentement. Puis, passez progressivement à des discussions légèrement plus avancées sur les stratégies marketing. Ne vous bloquez pas sur chaque mot - essayez simplement de saisir l'idée principale. L'objectif est d'habituer votre cerveau au type d'anglais dont vous aurez besoin au travail.",
        note2_title: "2. Concentrez-vous sur le sens, pas sur la forme",
        note2_idea: "L'idée :",
        note2_idea_content: "Oubliez la grammaire parfaite pour l'instant. Vous absorberez naturellement les règles en vous concentrant sur ce que les gens disent, pas sur la façon dont ils le disent.",
        note2_example: "Exemple concret :",
        note2_example_content: "Imaginez que vous regardez un TED Talk sur le leadership de Simon Sinek. Au lieu de faire une pause chaque fois que vous ne comprenez pas une phrase, continuez simplement et concentrez-vous sur le message principal. Que tente-t-il de dire ? Quels exemples donne-t-il ? Plus tard, vous pourrez rechercher des mots spécifiques, mais pour l'instant, l'objectif principal est de comprendre et d'apprécier le contenu.",
        note3_title: "3. Minimisez l'anxiété et maximisez le plaisir (Le filtre affectif)",
        note3_idea: "L'idée :",
        note3_idea_content: "Si vous êtes stressé ou sous pression, votre cerveau se bloque littéralement quand il s'agit d'apprendre. Alors, restez détendu.",
        note3_example: "Exemple concret :",
        note3_example_content: "Vous êtes nerveux à l'idée de pratiquer l'anglais dans un cadre professionnel, mais au lieu de vous lancer dans un appel d'affaires formel, essayez un groupe social anglais en ligne. Des applications comme Meetup proposent des groupes de conversation en anglais détendus et thématiques où personne ne se soucie si vous faites des erreurs. Cela renforce la confiance dans un environnement peu stressant. Vous pourriez discuter de passe-temps, de la vie ou de films avant de vous lancer dans des conversations liées aux affaires.",
        note4_title: "4. Produisez du langage naturellement par la production",
        note4_idea: "L'idée :",
        note4_idea_content: "Une fois que vous absorbez suffisamment d'entrées, vous commencerez naturellement à parler et à écrire sans forcer. Ne vous précipitez pas - laissez-le couler.",
        note4_example: "Exemple concret :",
        note4_example_content: "Vous avez suivi des podcasts de l'industrie et lu des articles, et maintenant vous voulez commencer à écrire des e-mails en anglais au travail. Commencez petit : répondez à vos collègues en courtes phrases en anglais. Par exemple, si quelqu'un demande votre avis, répondez par \"I agree\" ou \"I think we can improve it this way.\" Au fil du temps, augmentez la longueur et la complexité de vos phrases. Vous pouvez également demander à diriger de courtes parties de réunions, comme la présentation d'une mise à jour de projet.",
        note5_title: "5. Concentrez-vous sur la communication réelle (Hypothèse de l'entrée)",
        note5_idea: "L'idée :",
        note5_idea_content: "On n'apprend pas une langue en mémorisant des règles de grammaire - on apprend en l'utilisant dans des situations réelles. Engagez-vous avec l'anglais tel qu'il est utilisé dans la communication réelle.",
        note5_example: "Exemple concret :",
        note5_example_content: "Réglez votre téléphone, ordinateur portable et logiciels de travail en anglais. Cette simple modification vous immerge dans la langue chaque jour. Par exemple, lorsque vous utilisez des logiciels comme Trello ou Slack pour le travail, vous pratiquerez automatiquement la lecture et l'écriture en anglais. Si vos collègues parlent anglais, essayez de passer à l'anglais dans vos conversations et e-mails chaque fois que possible, même pour de petites tâches.",
        note6_title: "6. Surveillez vos progrès (mais n'en faites pas trop)",
        note6_idea: "L'idée :",
        note6_idea_content: "Suivez vos progrès, mais ne vous obsédez pas. L'objectif est une croissance naturelle, pas la perfection.",
        note6_example: "Exemple concret :",
        note6_example_content: "Utilisez une application comme Anki pour créer un jeu de phrases clés ou de termes techniques que vous avez appris en anglais. Configurez-la pour vous rappeler quotidiennement, afin que vous révisiez ces termes sans que cela ne ressemble à une étude difficile. Toutes les quelques semaines, vérifiez à quelle vitesse vous pouvez vous rappeler ou utiliser ces phrases. Peut-être qu'après un mois, vous remarquerez que l'écriture d'un e-mail en anglais vous prend la moitié du temps qu'avant. Célébrez ce progrès !",
        conclusion: "Voilà. Une façon décontractée et réelle d'apprendre l'anglais qui fonctionne. En vous concentrant sur l'entrée, en ne stressant pas sur les erreurs et en utilisant l'anglais de manière significative, vous améliorerez naturellement vos compétences. La méthode de Krashen consiste à faire de la langue une partie de votre vie, pas quelque chose de séparé et stressant. Alors commencez aujourd'hui, petit à petit, et vous serez étonné de vous sentir beaucoup plus confiant en utilisant l'anglais dans votre travail quotidien. Continuez - vous êtes plus proche que vous ne le pensez !"
    
    
    },
   
    
    vi: {
        welcome: "Chào mừng đến với AnglaisWiki",
        landing_p1: "Với AI đang chiếm lĩnh mọi thứ, khả năng giao tiếp bằng ngôn ngữ phổ biến nhất thế giới - tiếng Anh, không chỉ hữu ích mà còn vô cùng quan trọng. Hầu hết các công cụ, tài nguyên hoặc cuộc trò chuyện quan trọng trong thế giới công nghệ đều diễn ra bằng tiếng Anh. Hãy tưởng tượng bạn có thể hiểu đầy đủ các công cụ đang định hình tương lai - đó chính là những gì ngôn ngữ này mang lại cho bạn. Thế giới nằm trong tầm tay bạn với khả năng sử dụng tiếng Anh!",
        landing_p2: "Trang web này nhằm hướng dẫn bạn trong hành trình thành thạo tiếng Anh một cách dễ dàng và thú vị. Cách tiếp cận của chúng tôi tập trung vào việc làm cho quá trình học trở nên nhẹ nhàng và vui vẻ, thay vì một trải nghiệm giáo dục truyền thống. Được tạo ra bởi một người đã tự mình trải qua quá trình này.",
        step1_title: "Bước 1: Xác định trình độ tiếng Anh của bạn (A1-C2) và cá nhân hóa nội dung",
        step1_content: "Bước đầu tiên để học tiếng Anh hiệu quả là xác định điểm xuất phát của bạn - trình độ hiện tại của bạn. Tại sao điều này lại quan trọng? Vì biết được trình độ của mình giúp bạn chọn những tài liệu phù hợp, đủ thách thức để giúp bạn tiến bộ mà không bị quá tải. Chìa khóa là tìm nội dung phù hợp với sở thích của bạn, để việc học trở nên thú vị và là điều bạn mong đợi.",
        how_to_identify: "Làm thế nào để xác định trình độ của bạn:",
        level_test_intro: "Có một số công cụ miễn phí bạn có thể sử dụng để đánh giá trình độ tiếng Anh của mình. Tôi khuyên bạn nên bắt đầu với một bài kiểm tra trực tuyến đơn giản. Dưới đây là một số lựa chọn tuyệt vời:",
        british_council_test: "Bài kiểm tra trình độ của British Council: Cung cấp đánh giá nhanh với kết quả chi tiết từ A1 đến C2.",
        cambridge_test: "Bài kiểm tra tiếng Anh của Cambridge: Một nguồn đáng tin cậy với hiểu biết sâu sắc về các cấp độ ngôn ngữ.",
        ef_set_test: "EF SET: Một bài kiểm tra dài hơn và toàn diện hơn, đưa ra đánh giá chắc chắn về trình độ của bạn.",
        after_test: "Sau khi hoàn thành một trong những bài kiểm tra này, bạn sẽ được phân loại vào một cấp độ từ A1 (người mới bắt đầu) đến C2 (thành thạo). Khi bạn đã biết mình đang ở đâu, đã đến lúc điều chỉnh việc học của bạn theo sở thích cá nhân.",
        journey: "Hành trình học tiếng Anh của bạn",
        content_suggestions: "Đề xuất nội dung cho từng cấp độ dựa trên sở thích của bạn:",
        beginner_title: "A1-A2: Người mới bắt đầu",
        beginner_content: "Ở giai đoạn này, hãy tập trung vào nội dung đơn giản, rõ ràng. Bạn nên bắt đầu với các tài liệu dễ hiểu liên quan đến cuộc sống hàng ngày, nhưng được cá nhân hóa theo sở thích của bạn để giữ cho bạn luôn hứng thú.",
        beginner_fashion: "Nếu bạn yêu thích thời trang và mỹ phẩm: Hãy thử theo dõi các blog đơn giản như Into The Gloss, hoặc xem các hướng dẫn làm đẹp trên YouTube có phụ đề, tập trung vào từ vựng cơ bản (ví dụ: 'kem nền', 'son môi', 'chăm sóc da').",
        beginner_sports: "Nếu bạn thích thể thao: Xem Football Daily hoặc NBA Highlights trên YouTube. Tìm kiếm các video giải thích trò chơi hoặc tin tức với bình luận cơ bản.",
        beginner_general: "Đối với người học tổng quát: Các ứng dụng như Duolingo hoặc Memrise rất tuyệt, đặc biệt nếu bạn thích các bài học ngắn, giống như trò chơi.",
        intermediate_title: "B1-B2: Trung cấp",
        intermediate_content: "Ở đây, bạn có thể xử lý nội dung chi tiết hơn, nhưng vẫn cần cấu trúc. Mục tiêu của bạn nên là tương tác với các phương tiện truyền thông và bài viết trong lĩnh vực bạn quan tâm, thách thức bạn một chút mà không quá nâng cao.",
        intermediate_tech: "Đối với người quan tâm đến công nghệ: Theo dõi các YouTuber công nghệ như MKBHD hoặc đọc tin tức công nghệ trên The Verge. Cả hai nền tảng đều sử dụng tiếng Anh ở mức độ vừa phải và đề cập đến các chủ đề phổ biến như thiết bị, AI và xu hướng công nghệ.",
        intermediate_realestate: "Người đam mê bất động sản: Hãy thử đọc các bài báo từ Real Estate Weekly hoặc nghe podcast như BiggerPockets Real Estate Podcast, chứa đầy các thuật ngữ thực tế về mua, bán và thị trường nhà ở.",
        intermediate_travel: "Người yêu du lịch: Đọc các bài đăng trên blog từ các trang web du lịch như Lonely Planet, và xem các vlog du lịch từ các kênh YouTube như Kara and Nate hoặc The Bucket List Family, cung cấp ngôn ngữ giao tiếp với sự kết hợp tốt giữa từ vựng thực tế và phiêu lưu.",
        advanced_title: "C1-C2: Nâng cao",
        advanced_content: "Bạn gần như đã thông thạo, vì vậy đã đến lúc đi sâu vào các chủ đề phức tạp và nội dung cấp độ chuyên nghiệp. Đây là nơi bạn có thể bắt đầu tiêu thụ tiếng Anh giống như người bản xứ—thông qua tin tức, sách và các cuộc thảo luận cấp cao trong lĩnh vực chuyên môn của bạn.",
        advanced_business: "Đối với các chuyên gia kinh doanh: Đọc các bài báo trên Harvard Business Review hoặc xem các bài nói chuyện chính từ TED về kinh doanh và lãnh đạo sẽ thách thức bạn với ngữ pháp nâng cao và thuật ngữ chuyên ngành.",
        advanced_science: "Nếu bạn quan tâm đến khoa học: Đọc các bài báo từ Scientific American hoặc theo dõi các kênh như Kurzgesagt trên YouTube. Họ giải quyết các vấn đề phức tạp như biến đổi khí hậu, khoa học thần kinh và trí tuệ nhân tạo với các cuộc thảo luận sâu sắc, thấu đáo.",
        advanced_art: "Nghệ sĩ và người sáng tạo: Xem các cuộc phỏng vấn hoặc đọc các bài viết từ ArtNet hoặc The Art Newspaper. Bạn cũng có thể nghe podcast như The Art History Babes để có thêm các cuộc thảo luận hấp dẫn, cấp cao về các trào lưu nghệ thuật và nghệ sĩ.",
        
        
        step2_title: "Bước 2: Sức mạnh của việc đọc - Xây dựng sự hiểu biết thực sự",
        step2_content: "Đọc là một trong những công cụ mạnh mẽ nhất để thành thạo tiếng Anh, hoặc bất kỳ ngôn ngữ nào khác. Nó vượt xa hơn việc học từ vựng—nó giúp bạn nội hóa ngữ pháp, hiểu ngữ cảnh và phát triển dòng chảy tự nhiên của ngôn ngữ. Hãy nghĩ về nó theo cách này: khi bạn đọc, bạn không chỉ học từ; bạn đang hấp thụ cấu trúc, sắc thái và cảm xúc đằng sau chúng. Đó là cách ngôn ngữ trở nên sống động, và đó là điều sẽ đưa bạn từ giao tiếp cơ bản đến hiểu biết sâu sắc.",
        why_reading_matters: "Tại sao việc đọc quan trọng:",
        exposure_title: "Tiếp xúc với cấu trúc câu tự nhiên",
        exposure_content: "Đọc giúp bạn tiếp xúc với cấu trúc câu trong thế giới thực mà bạn không thể tìm thấy trong các bài học ngôn ngữ truyền thống. Khi bạn đọc, bạn thấy cách người bản xứ sử dụng ngôn ngữ một cách trôi chảy, tự nhiên. Nó giúp bạn hiểu cách các từ và cụm từ kết hợp với nhau, điều này rất quan trọng để nói một cách tự nhiên.",
        context_title: "Ngữ cảnh và sự hiểu biết",
        context_content: "Từ ngữ không có ý nghĩa gì nếu không có ngữ cảnh. Đọc cung cấp cho bạn ngữ cảnh cần thiết để nắm bắt đầy đủ từ vựng mới. Thay vì ghi nhớ các từ riêng lẻ, bạn thấy chúng trong hành động, trong một câu chuyện hoặc bài báo mang lại ý nghĩa cho chúng.",
        engagement_title: "Tương tác tích cực với ngôn ngữ",
        engagement_content: "Khi bạn đọc, bạn đang tích cực tương tác với ngôn ngữ. Tâm trí bạn liên tục làm việc—đoán nghĩa của từ mới, hình dung câu chuyện và suy nghĩ về những gì sẽ xảy ra tiếp theo. Sự tương tác tích cực này làm cho quá trình học trở nên đáng nhớ và thú vị hơn.",
        practical_steps: "Các bước thực tế để bắt đầu đọc:",
        choose_level: "Chọn đúng cấp độ",
        choose_level_content: "Đừng nhảy vào các văn bản phức tạp quá sớm. Bắt đầu với tài liệu hơi cao hơn vùng thoải mái của bạn, nhưng vẫn có thể quản lý được. Đối với người mới bắt đầu, sách đọc theo cấp độ (sách đơn giản hóa) hoặc sách thiếu nhi có thể là một điểm khởi đầu tuyệt vời. Khi bạn tiến bộ, hãy chuyển sang báo chí, blog và tiểu thuyết.",
        personalize_reading: "Cá nhân hóa việc đọc của bạn",
        personalize_reading_content: "Tìm nội dung phù hợp với sở thích của bạn. Nếu bạn thích thời trang, hãy đọc các blog hoặc tạp chí như Vogue. Nếu bạn đam mê kinh doanh, hãy đọc các bài báo từ Forbes hoặc Harvard Business Review. Chìa khóa là tìm tài liệu khiến bạn hứng thú, để việc học cảm thấy ít giống một công việc vất vả hơn.",
        read_daily: "Đọc hàng ngày",
        read_daily_content: "Tính nhất quán là chìa khóa. Ngay cả khi chỉ 10-15 phút mỗi ngày, việc đọc hàng ngày sẽ xây dựng kỹ năng ngôn ngữ của bạn theo thời gian. Biến nó thành một thói quen và gắn bó với nó.",
        reading_conclusion: "Đó là điểm chính. Nếu bạn hiểu những gì chúng tôi đã cố gắng nói với bạn trước đó. Bạn nắm giữ chìa khóa để thành thạo không chỉ tiếng Anh, mà còn bất kỳ loại ngôn ngữ nào bạn muốn học. Một vài ghi chú thực tế nữa có thể giúp bạn bắt đầu ngay lập tức:",
        
        
        
        
        practical_notes_title: "Ghi chú thực tế để bắt đầu",
        note1_title: "1. Bắt đầu với đầu vào có thể hiểu được trong lĩnh vực của bạn",
        note1_idea: "Ý tưởng:",
        note1_idea_content: "Bạn cần tiếp xúc với tiếng Anh chỉ hơi khó hơn một chút so với trình độ hiện tại của bạn (Krashen gọi đó là i+1), đặc biệt là trong lĩnh vực công việc của bạn.",
        note1_example: "Ví dụ thực tế:",
        note1_example_content: "Giả sử bạn làm việc trong lĩnh vực tiếp thị kỹ thuật số. Bạn có thể bắt đầu bằng cách xem các hội thảo trực tuyến cấp độ người mới bắt đầu trên YouTube của Neil Patel, người nói rõ ràng và chậm rãi. Sau đó, dần dần chuyển sang các bài nói chuyện nâng cao hơn một chút về chiến lược tiếp thị. Đừng mắc kẹt vào từng từ - chỉ cần cố gắng nắm bắt ý chính. Mục tiêu là để não bạn quen với loại tiếng Anh bạn sẽ cần trong công việc.",
        note2_title: "2. Tập trung vào ý nghĩa, không phải hình thức",
        note2_idea: "Ý tưởng:",
        note2_idea_content: "Hãy quên đi ngữ pháp hoàn hảo trong lúc này. Bạn sẽ tự nhiên hấp thụ các quy tắc bằng cách tập trung vào những gì mọi người đang nói, không phải cách họ nói.",
        note2_example: "Ví dụ thực tế:",
        note2_example_content: "Hãy tưởng tượng bạn đang xem một bài TED Talk về lãnh đạo của Simon Sinek. Thay vì dừng lại mỗi khi bạn không hiểu một cụm từ, hãy cứ tiếp tục và tập trung vào thông điệp chính. Anh ấy đang cố nói gì? Anh ấy đưa ra những ví dụ nào? Sau đó, bạn có thể tra cứu các từ cụ thể, nhưng hiện tại, trọng tâm chính là hiểu và thưởng thức nội dung.",
        note3_title: "3. Giảm thiểu lo lắng và tối đa hóa niềm vui (Bộ lọc cảm xúc)",
        note3_idea: "Ý tưởng:",
        note3_idea_content: "Nếu bạn căng thẳng hoặc cảm thấy áp lực, não bạn sẽ thực sự ngừng hoạt động khi học. Vì vậy, hãy giữ bình tĩnh.",
        note3_example: "Ví dụ thực tế:",
        note3_example_content: "Bạn lo lắng về việc thực hành tiếng Anh trong môi trường làm việc, nhưng thay vì nhảy vào một cuộc gọi kinh doanh chính thức, hãy thử một nhóm xã hội tiếng Anh trực tuyến. Các ứng dụng như Meetup có các nhóm trò chuyện tiếng Anh thư giãn, theo chủ đề mà không ai quan tâm nếu bạn mắc lỗi. Điều này xây dựng sự tự tin trong môi trường ít căng thẳng. Bạn có thể trò chuyện về sở thích, cuộc sống hoặc phim ảnh trước khi đi sâu vào các cuộc trò chuyện liên quan đến công việc.",
        note4_title: "4. Tạo ra ngôn ngữ một cách tự nhiên thông qua đầu ra",
        note4_idea: "Ý tưởng:",
        note4_idea_content: "Một khi bạn đã hấp thụ đủ đầu vào, bạn sẽ tự nhiên bắt đầu nói và viết mà không cần phải ép buộc. Đừng vội vàng - hãy để nó tuôn chảy.",
        note4_example: "Ví dụ thực tế:",
        note4_example_content: "Bạn đã theo dõi các podcast trong ngành và đọc các bài báo, và bây giờ bạn muốn bắt đầu viết email bằng tiếng Anh tại nơi làm việc. Hãy bắt đầu từ những điều nhỏ: trả lời đồng nghiệp của bạn bằng các cụm từ ngắn bằng tiếng Anh. Ví dụ, nếu ai đó hỏi ý kiến của bạn, hãy trả lời bằng \"I agree\" hoặc \"I think we can improve it this way.\" Theo thời gian, hãy tăng độ dài và độ phức tạp của câu. Bạn cũng có thể xin dẫn dắt các phần ngắn của cuộc họp, như trình bày cập nhật dự án.",
        note5_title: "5. Tập trung vào giao tiếp thực tế (Giả thuyết đầu vào)",
        note5_idea: "Ý tưởng:",
        note5_idea_content: "Bạn không học một ngôn ngữ bằng cách ghi nhớ các quy tắc ngữ pháp - bạn học bằng cách sử dụng nó trong các tình huống thực tế. Tham gia với tiếng Anh như nó được sử dụng trong giao tiếp thực tế.",
        note5_example: "Ví dụ thực tế:",
        note5_example_content: "Đặt điện thoại, laptop và phần mềm làm việc của bạn sang tiếng Anh. Sự điều chỉnh đơn giản này đắm chìm bạn trong ngôn ngữ mỗi ngày. Ví dụ, khi sử dụng phần mềm như Trello hoặc Slack cho công việc, bạn sẽ tự động thực hành đọc và viết bằng tiếng Anh. Nếu đồng nghiệp của bạn nói tiếng Anh, hãy cố gắng chuyển sang tiếng Anh trong các cuộc trò chuyện và email bất cứ khi nào có thể, ngay cả đối với các nhiệm vụ nhỏ.",
        note6_title: "6. Theo dõi tiến độ của bạn (Nhưng đừng làm quá)",
        note6_idea: "Ý tưởng:",
        note6_idea_content: "Theo dõi tiến độ của bạn, nhưng đừng ám ảnh về nó. Mục tiêu là sự phát triển tự nhiên, không phải sự hoàn hảo.",
        note6_example: "Ví dụ thực tế:",
        note6_example_content: "Sử dụng một ứng dụng như Anki để tạo một bộ các cụm từ chính hoặc thuật ngữ kỹ thuật bạn đã học bằng tiếng Anh. Thiết lập nó để nhắc nhở bạn hàng ngày, để bạn xem lại các thuật ngữ này mà không cảm thấy như đang học khó khăn. Cứ vài tuần, kiểm tra xem bạn có thể nhớ lại hoặc sử dụng các cụm từ này nhanh hơn bao nhiêu. Có thể sau một tháng, bạn sẽ nhận thấy rằng viết một email bằng tiếng Anh chỉ mất một nửa thời gian so với trước đây. Hãy ăn mừng tiến bộ đó!",
        conclusion: "Đó là tất cả. Một cách học tiếng Anh thực tế và thoải mái mà hiệu quả. Bằng cách tập trung vào đầu vào, không căng thẳng về lỗi sai, và sử dụng tiếng Anh một cách có ý nghĩa, bạn sẽ tự nhiên cải thiện kỹ năng của mình. Phương pháp của Krashen là về việc biến ngôn ngữ thành một phần của cuộc sống của bạn, không phải là một thứ riêng biệt và gây căng thẳng. Vì vậy, hãy bắt đầu ngay hôm nay, từng chút một, và bạn sẽ ngạc nhiên về việc bạn cảm thấy tự tin hơn nhiều khi sử dụng tiếng Anh trong công việc hàng ngày của mình. Hãy tiếp tục - bạn đã gần hơn bạn nghĩ!"
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update the language button
    const dropBtn = document.querySelector('.dropbtn');
    const flagIcon = dropBtn.querySelector('.flag-icon');
    const languageText = dropBtn.querySelector('.language-text');

    // Remove all flag classes
    flagIcon.classList.remove('flag-icon-us', 'flag-icon-fr', 'flag-icon-vn');

    // Add the appropriate flag class and update the text
    switch(lang) {
        case 'en':
            flagIcon.classList.add('flag-icon-us');
            languageText.textContent = 'English';
            break;
        case 'fr':
            flagIcon.classList.add('flag-icon-fr');
            languageText.textContent = 'Français';
            break;
        case 'vi':
            flagIcon.classList.add('flag-icon-vn');
            languageText.textContent = 'Tiếng Việt';
            break;
    }
}

// Add click event listeners to language options
document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

// Add click event listeners to language options
document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        changeLanguage(lang);
    });
});