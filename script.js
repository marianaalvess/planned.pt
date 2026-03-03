/**
 * Script for Remodelação Landing Page
 */

const translations = {
    pt: {
        meta_title: "planned.pt - A Arte de Transformar Espaços",
        meta_description: "Oferecemos serviços de remodelação de alta qualidade. Transformamos a sua casa em um ambiente acolhedor, charmoso e relaxante.",
        nav_home: "Página Inicial",
        nav_about: "Sobre",
        nav_services: "Serviços",
        nav_portfolio: "Transformações",
        nav_contact: "Contacto",
        btn_quote: "Solicitar Orçamento",
        btn_nav_contact: "Contacte-nos",
        btn_portfolio: "Ver Portfólio",
        btn_hero_contact: "Fale Connosco",
        btn_read_more: "Ler Mais <i class='fa-solid fa-arrow-right'></i>",
        hero_subtitle: "ESPECIALISTAS EM MÓVEIS POR MEDIDA",
        hero_title_1: "Transforme Seus Espaços em",
        hero_title_2: "Obras de Arte",
        hero_title_3: "Personalizadas",
        hero_desc: "Móveis sob medida que unem funcionalidade, design e qualidade.<br>Cada projeto é único, tal como o seu espaço.",
        exp_number: "25+",
        exp_text: "Anos de<br>Experiência",
        about_subtitle: "Quem Somos",
        about_title_text: "A Nossa",
        about_title_em: "História",
        about_text_1: "Na Planned, unimos marcenaria especializada e design de interiores em Mafra para criar projetos únicos em Lisboa e arredores. Focados na fabricação de móveis sob medida, adaptamos cada peça ao seu espaço com criatividade e materiais premium como Blum, Häfele, Arauco e Egger.",
        about_text_2: "Garantimos um processo transparente, desde o design personalizado até à instalação profissional em todo o Portugal. Oferecemos garantia e suporte completo, assegurando que cada projeto de marcenaria e interiores seja um investimento seguro, durável e funcional.",
        stat_1_num: "10+ Anos",
        stat_1_desc: "De Experiência",
        stat_2_num: "250+ Projetos",
        stat_2_desc: "Realizados",
        stat_3_num: "100%",
        stat_3_desc: "Satisfação",
        services_subtitle: "O Que Fazemos",
        services_title_text: "Os Nossos",
        services_title_em: "Serviços",
        srv_1_title: "Móveis por Medida",
        srv_1_desc: "Peças únicas desenhadas ao milímetro. Garantimos aproveitamento total e acabamentos de excelência da marcenaria tradicional.",
        srv_2_title: "Design de Interiores",
        srv_2_desc: "Visualização 3D completa do seu projeto. Harmonizamos materiais e iluminação para unir estética e funcionalidade.",
        srv_3_title: "Roupeiros e Closets por Medida",
        srv_3_desc: "Roupeiros e closets de luxo com organização personalizada. Gavetas com amortecimento e LED integrado para máxima praticidade.",
        srv_4_title: "Cozinhas Planeadas",
        srv_4_desc: "Cozinhas robustas com materiais hidrófugos e ferragens de topo. Unimos resistência e design, do rústico ao minimalista.",
        srv_5_title: "Mobiliário de Casa de Banho",
        srv_5_desc: "Mobiliário resistente à humidade com design sofisticado. Soluções duráveis e inteligentes para a organização do seu WC.",
        srv_6_title: "Mobiliário Comercial",
        srv_6_desc: "Balcões e mobiliário de escritório que elevam a sua marca. Soluções ergonómicas desenhadas para impressionar.",
        port_subtitle: "O Nosso Trabalho",
        port_title_text: "Transformações",
        port_title_em: "Realizadas",
        port_desc: "Veja os nossos projetos recentes e surpreenda-se com os resultados.",
        port_1_title: "Móvel de Sala 3-em-1: TV, Lareira e Bar",
        port_1_desc: "Estante à medida em madeira e mármore que une entretenimento, conforto e sofisticação.",
        port_2_title: "Cozinha Moderna Verde Sálvia",
        port_2_desc: "Ilha em mármore e painel ripado iluminado.",
        port_3_title: "Roupeiro Planeado com Área de Janela",
        port_3_desc: "Solução de arrumação otimizada com gavetas centrais e portas laterais, perfeita para aproveitar cada centímetro do seu espaço.",
        port_4_title: "Escritório Executivo Planeado",
        port_4_desc: "O equilíbrio perfeito entre tecnologia, conforto e sofisticação.",
        port_5_title: "O seu espaço é o próximo?",
        port_5_desc: "Vamos transformar a sua visão em realidade com o toque de luxo que a sua casa merece.",
        port_5_btn: "AGENDAR CONSULTORIA",
        port_6_title: "Cozinha Moderna em Madeira e Mármore",
        port_6_desc: "Inspire-se com este design sofisticado que une armários planejados, ilha central com acabamento ripado e a elegância atemporal dos revestimentos claros.",
        port_7_title: "Home Office Moderno com Toque Industrial",
        port_7_desc: "Explore ideias de prateleiras suspensas, parede de cimento queimado e marcenaria inteligente para otimizar seu espaço de trabalho.",
        port_8_title: "Armário com Escrivaninha Embutida",
        port_8_desc: "Minimalismo e funcionalidade em marcenaria sob medida.",
        port_9_title: "Painel para TV Suspenso Minimalista com LED",
        port_9_desc: "O equilíbrio perfeito entre funcionalidade e luxo. Valorize sua sala de estar com este móvel contemporâneo, combinando texturas naturais e nichos decorativos.",
        port_10_title: "Home Theater Planejado Amadeirado",
        port_10_desc: "Sofisticação com iluminação embutida e nichos laterais.",
        port_11_title: "Dormitório Moderno com Iluminação",
        port_11_desc: "Design compacto e funcional com cabeceira integrada.",
        port_12_title: "Minimalismo Ripado",
        port_12_desc: "Sofisticação e otimização de espaço sob medida.",
        port_btn_more: "Ver Mais Projetos",
        port_more_title: "Mais Transformações",
        badge_before: "ANTES",
        badge_after: "DEPOIS",
        process_subtitle: "Metodologia",
        process_title_text: "O Nosso",
        process_title_em: "Processo",
        process_desc: "",
        proc_1_title: "Consultoria",
        proc_1_desc: "Reunião inicial para entender as suas necessidades, espaço e estilo.",
        proc_2_title: "Design 3D",
        proc_2_desc: "Apresentação do projeto em renderizações realistas para aprovação.",
        proc_3_title: "Produção",
        proc_3_desc: "Fabrico meticuloso na nossa marcenaria com materiais premium.",
        proc_4_title: "Instalação",
        proc_4_desc: "Montagem final no local feita pelos nossos especialistas.",
        test_subtitle: "Feedback",
        test_title_text: "O Que Dizem os Nossos",
        test_title_em: "Clientes",
        test_1_desc: "\"Sempre a tentar perceber o que era pretendido, sem dificuldade de aceitar alterações/críticas. Entregou perfeitamente o pretendido, em menos tempo que o previsto e sempre com simpatia e profissionalismo!!\"",
        test_2_desc: "\"O profissional demonstrou excelência, criatividade e dedicação ao projeto. Atento aos detalhes e aos interesses do cliente, superou todas as expectativas com propostas bem fundamentadas e sugestões pertinentes.\"",
        test_3_desc: "\"Excelente profissional. Completou o projeto do quarto num fim de semana com todos os detalhes solicitados. Trabalho de qualidade, rápido, com grande disponibilidade e paciência. Recomendo.\"",
        test_4_desc: "\"Móveis muito bem acabados e de qualidade superior. Recomendo muito. Além do melhor atendimento que já tivemos.\"",
        test_5_desc: "\"Recomendo muito! Tudo fluiu da melhor forma desde o primeiro contato, projeto e entrega. Material e serviço de muita qualidade.\"",
        test_6_desc: "\"Super profissionais, atentos aos pormenores e muito atenciosos. Recomendo.\"",
        test_client_label: "Cliente",
        faq_subtitle: "Dúvidas Comuns",
        faq_title_text: "Perguntas",
        faq_title_em: "Frequentes",
        faq_cat_1: "Projeto e Processo",
        faq_cat_2: "Orçamento e Investimento",
        faq_cat_3: "Materiais e Acabamentos",
        faq_cat_4: "Instalação e Montagem",
        faq_cat_5: "Garantia e Suporte",
        faq_1_q: "Como funciona a consulta inicial para móveis planejados sob medida?",
        faq_1_a: "Agendamos uma reunião presencial gratuita para conhecermos melhor as suas necessidades, orçamento disponível e visão para o projeto de móveis sob medida. Durante esta consulta inicial, o nosso designer de interiores em Mafra irá compreender o estilo, funcionalidade e preferências para os seus móveis planejados personalizados em madeira.",
        faq_2_q: "O que inclui o levantamento técnico de móveis sob medida em Lisboa e Mafra?",
        faq_2_a: "Realizamos medições precisas e análise detalhada do espaço onde serão instalados os móveis sob medida, garantindo um ajuste perfeito. Este levantamento técnico profissional assegura que as cozinhas planejadas, roupeiros embutidos, armários sob medida e móveis personalizados se adaptem perfeitamente às dimensões e características do ambiente.",
        faq_3_q: "Como é feita a visualização 3D do projeto de móveis planejados?",
        faq_3_a: "Apresentamos o projeto de carpintaria sob medida em 3D para que visualize exatamente como ficará o resultado final antes da produção. Esta visualização tridimensional permite ver em detalhe como os seus móveis personalizados, cozinhas sob medida, closets planejados ou estantes personalizadas ficarão no espaço, facilitando ajustes e aprovações.",
        faq_4_q: "Como funciona a aprovação e orçamento de móveis sob medida?",
        faq_4_a: "Com o design de móveis planejados aprovado, fornecemos um orçamento detalhado e transparente sem compromissos ocultos. O orçamento para móveis sob medida inclui materiais de qualidade, ferragens premium, mão de obra especializada e prazo de entrega, permitindo total clareza nos custos do seu projeto de marcenaria planejada.",
        faq_5_q: "Que materiais são utilizados na fabricação de móveis sob medida?",
        faq_5_a: "Utilizando os melhores materiais do mercado, fabricamos os seus móveis planejados com excelência e precisão. Trabalhamos com MDF de alta qualidade, madeira nobre, aglomerado hidrófugo, ferragens Blum e acabamentos premium, garantindo durabilidade e beleza aos móveis personalizados para casa, escritório ou estabelecimentos comerciais em Lisboa e Mafra.",
        faq_6_q: "Como é realizada a instalação de móveis planejados sob medida?",
        faq_6_a: "A nossa equipa profissional especializada realiza a montagem e instalação dos móveis sob medida com cuidado máximo e atenção aos detalhes. Os instaladores experientes garantem que cada cozinha planejada, guarda-roupa embutido, estante sob medida ou móvel personalizado seja instalado com perfeição, respeitando prazos e mantendo o ambiente limpo.",
        faq_7_q: "Existe garantia e assistência técnica após a instalação dos móveis?",
        faq_7_a: "Verificamos que tudo está perfeito e oferecemos suporte contínuo pós-instalação com garantia para os móveis sob medida. A assistência técnica da Planned.pt assegura tranquilidade e satisfação total com os seus móveis planejados, cozinhas personalizadas, roupeiros sob medida e demais soluções de marcenaria em Mafra, Ericeira, Sintra e Lisboa.",
        faq_8_q: "Qual é o tempo de entrega de um projeto?",
        faq_8_a: "O prazo de entrega dos móveis sob medida varia conforme a complexidade e o tamanho do projeto, mas em média oscila entre 3 e 4 semanas para projetos simples e 6 a 8 semanas para projetos completos de cozinhas, roupeiros ou interiores. No momento da aprovação do orçamento confirmamos sempre o cronograma, para que saiba exatamente quando a sua marcenaria planejada estará pronta e instalada em sua casa em Mafra, Lisboa ou outra região de Portugal.",
        faq_9_q: "Posso ver o projeto antes de aprovar?",
        faq_9_a: "Sim, antes de qualquer fabricação apresentamos o projeto em 3D para que veja com clareza como ficarão os seus móveis sob medida no espaço real. Isso permite ajustar medidas, cores, materiais e funcionalidade antes da produção, garantindo que o resultado final corresponda ao que idealizou para a sua casa ou empresa.",
        faq_10_q: "Vocês trabalham em todo o país?",
        faq_10_a: "A Planned realiza projetos de móveis sob medida em Mafra, Lisboa e em todo o território de Portugal. Avaliamos previamente os custos de transporte e instalação conforme a sua localização, garantindo um serviço profissional desde o primeiro contacto até à montagem final.",
        faq_11_q: "Qual é o meu investimento mínimo?",
        faq_11_a: "Não existe investimento mínimo obrigatório para fazer um projeto com a Planned. Atendemos desde pequenos móveis sob medida, como um roupeiro ou móvel de sala, até projetos completos de interiores com cozinhas, closets e soluções de arrumação em toda a casa.",
        faq_12_q: "E se eu não gostar do resultado?",
        faq_12_a: "Todo o processo é pensado para evitar surpresas, com projeto 3D e revisões até estar 100% satisfeito com os móveis sob medida. Se algo não ficar como espera, ajustamos detalhes de design e execução dentro das possibilidades técnicas, porque o objetivo é entregar um resultado final que realmente funcione no seu dia a dia.",
        faq_13_q: "Que materiais vocês utilizam?",
        faq_13_a: "Trabalhamos apenas com materiais premium, como ferragens Blum e Häfele e painéis Arauco e Egger, que garantem durabilidade, resistência e um acabamento de alto padrão. Isso significa corrediças suaves, dobradiças de alta performance e superfícies que se mantêm bonitas por muitos anos, mesmo em cozinhas e zonas de maior uso.",
        faq_14_q: "Incluem montagem?",
        faq_14_a: "Sim, todos os projetos de móveis sob medida incluem montagem profissional realizada pela nossa equipa especializada. Cuidamos de toda a instalação em Mafra, Lisboa e outras regiões de Portugal, garantindo encaixes perfeitos, nivelamento correto e um acabamento final pronto a usar.",
        faq_15_q: "Oferecem garantia?",
        faq_15_a: "Oferecemos garantia sobre materiais e mão de obra em todos os projetos de móveis sob medida Planned. Os detalhes da garantia são apresentados de forma clara na proposta, para que tenha total segurança no investimento feito para a sua casa ou negócio.",
        faq_16_q: "Que qualidade de materiais e acabamentos utilizam nos móveis sob medida?",
        faq_16_a: "Sim, todos os nossos móveis sob medida são fabricados com materiais de alto padrão e acabamentos premium. Utilizamos lacagem profissional em portas e detalhes impecáveis, ferragens de marcas reconhecidas como Blum, Häfele e Emuca, dobradiças embutidas de qualidade superior, fechamento suave em gavetas e portas, e sistemas de abertura rigorosos para cozinhas, armários e salas. Garantimos durabilidade, funcionalidade e estética refinada em cada projeto de móveis planejados.",
        faq_17_q: "Fazem lacagem premium e portas de vidro para cozinhas e armários?",
        faq_17_a: "Sim, trabalhamos com lacagem de alta qualidade aplicada em frentes, painéis e portas de vidro, garantindo superfícies lisas, núcleos consistentes e um acabamento rigoroso que valoriza, armários e salas em projetos de interiores de padrão elevado.",
        faq_18_q: "Que tipo de ferragens e dobradiças utilizam nos móveis sob medida?",
        faq_18_a: "Sim, utilizamos estruturas embutidas e ferragens de marcas reconhecidas, com sistemas de fecho suave e alta resistência, para garantir um alinhamento perfeito, funcionamento silencioso e a durabilidade que se espera de móveis premium de alto padrão.",
        contact_subtitle: "Fale Connosco",
        contact_title_text: "Inicie a sua",
        contact_title_em: "Transformação",
        contact_desc: "Preencha o formulário abaixo ou entre em contacto direto através do WhatsApp para solicitar o seu orçamento.",
        contact_phone_label: "Telefone",
        contact_whatsapp_label: "WhatsApp",
        contact_email_label: "Email",
        contact_address_label: "Morada",
        form_name: "Nome Completo",
        form_phone: "Telemóvel",
        form_email: "Email",
        form_message: "Mensagem / Detalhes adicionais",
        form_furniture_type: "Qual móvel pretende fazer?",
        form_furniture_placeholder: "Selecione uma opção (ex: Cozinha, Roupeiro...)",
        form_opt_cozinha: "Cozinha",
        form_opt_roupeiro: "Roupeiro",
        form_opt_closet: "Closet",
        form_opt_sala: "Móvel de Sala",
        form_opt_banho: "Móvel de Casa de Banho",
        form_opt_outro: "Outro",
        form_project_status: "Já tem projeto?",
        form_project_placeholder: "Selecione uma opção",
        form_opt_tem_projeto: "Sim, tenho projeto/medidas",
        form_opt_precisa_projeto: "Não, preciso de projeto",
        form_location: "Local de instalação",
        btn_whatsapp_send: "Enviar Resumo",
        btn_submit: "Solicitar Contacto",
        footer_about: "Especialistas em remodelações completas, aliando design, funcionalidade e conforto em cada projeto.",
        footer_links_title: "Links Rápidos",
        footer_legal_title: "Legal",
        footer_terms: "Termos e Condições",
        footer_privacy: "Política de Privacidade",
        footer_rights: "Todos os direitos reservados.",
        footer_dev: "Desenvolvido por"
    },
    en: {
        meta_title: "planned.pt - The Art of Transforming Spaces",
        meta_description: "We offer high-quality remodeling services. We transform your home into a welcoming, charming, and relaxing environment.",
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_portfolio: "Transformations",
        nav_contact: "Contact",
        btn_quote: "Request Quote",
        btn_nav_contact: "Contact Us",
        btn_portfolio: "View Portfolio",
        btn_hero_contact: "Talk to Us",
        btn_read_more: "Read More <i class='fa-solid fa-arrow-right'></i>",
        hero_subtitle: "CUSTOM FURNITURE SPECIALISTS",
        hero_title_1: "Transform Your Spaces into",
        hero_title_2: "Personalized",
        hero_title_3: "Works of Art",
        hero_desc: "Custom furniture that unites functionality, design, and quality.<br>Each project is unique, just like your space.",
        exp_number: "25+",
        exp_text: "Years of<br>Experience",
        about_subtitle: "Who We Are",
        about_title_text: "Our",
        about_title_em: "Story",
        about_text_1: "At Planned, we combine specialized woodwork and interior design in Mafra to create unique projects in Lisbon and the surrounding areas. Focused on custom furniture manufacturing, we adapt each piece to your space with creativity and premium materials like Blum, Häfele, Arauco, and Egger.",
        about_text_2: "We guarantee a transparent process, from personalized design to professional installation throughout Portugal. We offer warranty and full support, ensuring each woodworking and interior project is a safe, durable, and functional investment.",
        stat_1_num: "10+ Years",
        stat_1_desc: "Of Experience",
        stat_2_num: "250+ Projects",
        stat_2_desc: "Completed",
        stat_3_num: "100%",
        stat_3_desc: "Satisfaction",
        services_subtitle: "What We Do",
        services_title_text: "Our",
        services_title_em: "Services",
        srv_1_title: "Custom Furniture",
        srv_1_desc: "Unique pieces designed to the millimeter. We guarantee total utilization and excellent finishes of traditional woodwork.",
        srv_2_title: "Interior Design",
        srv_2_desc: "Complete 3D visualization of your project. We harmonize materials and lighting to unite aesthetics and functionality.",
        srv_3_title: "Custom Wardrobes and Closets",
        srv_3_desc: "Luxury wardrobes and closets with personalized organization. Soft-close drawers and integrated LED for maximum practicality.",
        srv_4_title: "Custom Kitchens",
        srv_4_desc: "Robust kitchens with water-resistant materials and top-tier hardware. We combine resistance and design, from rustic to minimalist.",
        srv_5_title: "Bathroom Furniture",
        srv_5_desc: "Moisture-resistant furniture with sophisticated design. Durable and intelligent solutions for organizing your bathroom.",
        srv_6_title: "Commercial Furniture",
        srv_6_desc: "Counters and office furniture that elevate your brand. Ergonomic solutions designed to impress.",
        port_subtitle: "Our Work",
        port_title_text: "Our",
        port_title_em: "Transformations",
        port_desc: "See our recent projects and be amazed by the results.",
        port_1_title: "3-in-1 Living Room Unit: TV, Fireplace & Bar",
        port_1_desc: "Custom shelving in wood and marble combining entertainment, comfort and sophistication.",
        port_2_title: "Modern Sage Green Kitchen",
        port_2_desc: "Marble island and illuminated slatted panel.",
        port_3_title: "Fitted Wardrobe with Window Area",
        port_3_desc: "Optimized storage solution with central drawers and side doors, perfect for making the most of every centimeter of your space.",
        port_4_title: "Planned Executive Office",
        port_4_desc: "The perfect balance between technology, comfort and sophistication.",
        port_5_title: "Is your space next?",
        port_5_desc: "Let's turn your vision into reality with the touch of luxury your home deserves.",
        port_5_btn: "SCHEDULE CONSULTATION",
        port_6_title: "Modern Wood and Marble Kitchen",
        port_6_desc: "Get inspired by this sophisticated design that combines planned cabinets, a central island with slatted finish, and the timeless elegance of light coverings.",
        port_7_title: "Modern Home Office with Industrial Touch",
        port_7_desc: "Explore ideas for floating shelves, burnt cement walls, and smart woodwork to optimize your workspace.",
        port_8_title: "Cabinet with Built-in Desk",
        port_8_desc: "Minimalism and functionality in custom woodwork.",
        port_9_title: "Minimalist Floating TV Panel with LED",
        port_9_desc: "The perfect balance between functionality and luxury. Enhance your living room with this contemporary furniture, combining natural textures and decorative niches.",
        port_10_title: "Planned Wooden Home Theater",
        port_10_desc: "Sophistication with built-in lighting and side niches.",
        port_11_title: "Modern Bedroom with Lighting",
        port_11_desc: "Compact and functional design with integrated headboard.",
        port_12_title: "Slatted Minimalism",
        port_12_desc: "Custom-made sophistication and space optimization.",
        port_btn_more: "View More Projects",
        port_more_title: "More Transformations",
        badge_before: "BEFORE",
        badge_after: "AFTER",
        process_subtitle: "Methodology",
        process_title_text: "Our",
        process_title_em: "Process",
        process_desc: "",
        proc_1_title: "Consultation",
        proc_1_desc: "Initial meeting to understand your needs, space, and style.",
        proc_2_title: "3D Design",
        proc_2_desc: "Project presentation with realistic renderings for approval.",
        proc_3_title: "Production",
        proc_3_desc: "Meticulous crafting in our workshop with premium materials.",
        proc_4_title: "Installation",
        proc_4_desc: "Final on-site assembly by our specialists.",
        test_subtitle: "Feedback",
        test_title_text: "What Our",
        test_title_em: "Clients",
        test_1_desc: "\"Always trying to understand what was intended, with no difficulty accepting changes/criticism. Delivered exactly what was requested, in less time than expected and always with friendliness and professionalism!!\"",
        test_2_desc: "\"The professional demonstrated excellence, creativity, and dedication to the project. Attentive to details and the client's interests, exceeded all expectations with well-founded proposals and relevant suggestions.\"",
        test_3_desc: "\"Excellent professional. Completed the bedroom project in a weekend with all requested details. Fast, quality work with great availability and patience. Highly recommend.\"",
        test_4_desc: "\"Very well finished furniture of superior quality. Highly recommend. Besides the best customer service we've ever had.\"",
        test_5_desc: "\"Highly recommend! Everything flowed perfectly from the first contact, project, and delivery. High-quality material and service.\"",
        test_6_desc: "\"Super professional, attentive to details and very caring. Highly recommend.\"",
        test_client_label: "Client",
        faq_subtitle: "Common Questions",
        faq_title_text: "Frequently Asked",
        faq_title_em: "Questions",
        faq_cat_1: "Project & Process",
        faq_cat_2: "Budget & Investment",
        faq_cat_3: "Materials & Finishes",
        faq_cat_4: "Installation & Assembly",
        faq_cat_5: "Warranty & Support",
        faq_1_q: "How does the initial consultation for custom furniture work?",
        faq_1_a: "We schedule a free in-person meeting to better understand your needs, available budget, and vision for your custom furniture project. During this initial consultation, our interior designer in Mafra will understand the style, functionality, and preferences for your personalized wooden furniture.",
        faq_2_q: "What does the technical survey for custom furniture in Lisbon and Mafra include?",
        faq_2_a: "We perform precise measurements and a detailed analysis of the space where the custom furniture will be installed, ensuring a perfect fit. This professional technical survey ensures that custom kitchens, built-in wardrobes, custom cabinets, and personalized furniture perfectly adapt to the dimensions and characteristics of the environment.",
        faq_3_q: "How is the 3D visualization of the custom furniture project done?",
        faq_3_a: "We present the custom carpentry project in 3D so you can see exactly how the final result will look before production. This three-dimensional visualization allows you to see in detail how your personalized furniture, custom kitchens, planned closets, or customized shelves will look in the space, facilitating adjustments and approvals.",
        faq_4_q: "How does the approval and quote for custom furniture work?",
        faq_4_a: "With the custom furniture design approved, we provide a detailed and transparent quote with no hidden commitments. The quote for custom furniture includes quality materials, premium hardware, specialized labor, and delivery time, allowing total clarity on the costs of your planned woodwork project.",
        faq_5_q: "What materials are used in the manufacturing of custom furniture?",
        faq_5_a: "Using the best materials on the market, we manufacture your custom furniture with excellence and precision. We work with high-quality MDF, solid wood, water-resistant chipboard, Blum hardware, and premium finishes, guaranteeing durability and beauty for personalized furniture for homes, offices, or commercial establishments in Lisbon and Mafra.",
        faq_6_q: "How is the installation of custom furniture carried out?",
        faq_6_a: "Our specialized professional team carries out the assembly and installation of the custom furniture with maximum care and attention to detail. Experienced installers ensure that every custom kitchen, built-in wardrobe, custom shelf, or personalized piece of furniture is installed perfectly, respecting deadlines and keeping the environment clean.",
        faq_7_q: "Is there a warranty and technical assistance after the furniture is installed?",
        faq_7_a: "We check that everything is perfect and offer continuous post-installation support with a warranty for the custom furniture. Planned.pt's technical assistance ensures peace of mind and total satisfaction with your custom furniture, personalized kitchens, custom wardrobes, and other woodworking solutions in Mafra, Ericeira, Sintra, and Lisbon.",
        faq_8_q: "What is the delivery time for a project?",
        faq_8_a: "The delivery time for custom furniture varies according to the complexity and size of the project, but on average it ranges between 3 and 4 weeks for simple projects and 6 to 8 weeks for complete kitchen, wardrobe, or interior projects. Upon quote approval, we always confirm the schedule so you know exactly when your planned woodwork will be ready and installed in your home in Mafra, Lisbon, or another region of Portugal.",
        faq_9_q: "Can I see the project before approving it?",
        faq_9_a: "Yes, before any manufacturing, we present the project in 3D so you can clearly see how your custom furniture will look in the real space. This allows you to adjust measurements, colors, materials, and functionality before production, ensuring the final result matches what you envisioned for your home or business.",
        faq_10_q: "Do you work nationwide?",
        faq_10_a: "Planned carries out custom furniture projects in Mafra, Lisbon, and throughout the territory of Portugal. We evaluate transport and installation costs in advance according to your location, guaranteeing a professional service from the first contact to the final assembly.",
        faq_11_q: "What is my minimum investment?",
        faq_11_a: "There is no mandatory minimum investment to do a project with Planned. We cater from small custom furniture, such as a wardrobe or living room unit, to complete interior projects with kitchens, closets, and storage solutions throughout the house.",
        faq_12_q: "What if I don't like the result?",
        faq_12_a: "The whole process is designed to avoid surprises, with a 3D project and revisions until you are 100% satisfied with the custom furniture. If something is not as expected, we adjust design and execution details within technical possibilities, because the goal is to deliver a final result that truly works in your daily life.",
        faq_13_q: "What materials do you use?",
        faq_13_a: "We only work with premium materials, such as Blum and Häfele hardware and Arauco and Egger panels, which guarantee durability, resistance, and a high-standard finish. This means smooth runners, high-performance hinges, and surfaces that remain beautiful for many years, even in kitchens and heavily used areas.",
        faq_14_q: "Do you include assembly?",
        faq_14_a: "Yes, all custom furniture projects include professional assembly carried out by our specialized team. We take care of the entire installation in Mafra, Lisbon, and other regions of Portugal, ensuring perfect fits, correct leveling, and a final finish ready to use.",
        faq_15_q: "Do you offer a warranty?",
        faq_15_a: "We offer a warranty on materials and labor on all Planned custom furniture projects. The warranty details are clearly presented in the proposal so you have complete security in the investment made for your home or business.",
        faq_16_q: "What quality of materials and finishes do you use in custom furniture?",
        faq_16_a: "Yes, all our custom furniture is manufactured with high-standard materials and premium finishes. We use professional lacquering on doors and impeccable details, hardware from recognized brands such as Blum, Häfele, and Emuca, superior quality built-in hinges, soft closing on drawers and doors, and rigorous opening systems for kitchens, cabinets, and living rooms. We guarantee durability, functionality, and refined aesthetics in each custom furniture project.",
        faq_17_q: "Do you do premium lacquering and glass doors for kitchens and cabinets?",
        faq_17_a: "Yes, we work with high-quality lacquering applied to fronts, panels, and glass doors, ensuring smooth surfaces, consistent cores, and a rigorous finish that enhances cabinets and living rooms in high-standard interior projects.",
        faq_18_q: "What type of hardware and hinges do you use in custom furniture?",
        faq_18_a: "Yes, we use built-in structures and hardware from recognized brands, with soft-close systems and high resistance, to ensure perfect alignment, silent operation, and the durability expected from premium high-standard furniture.",
        contact_subtitle: "Talk to Us",
        contact_title_text: "Start Your",
        contact_title_em: "Transformation",
        contact_desc: "Fill out the form below or contact us directly via WhatsApp to request your quote.",
        contact_phone_label: "Phone",
        contact_whatsapp_label: "WhatsApp",
        contact_email_label: "Email",
        contact_address_label: "Address",
        form_name: "Full Name",
        form_phone: "Mobile Phone",
        form_email: "Email",
        form_message: "Message / Additional details",
        form_furniture_type: "What furniture do you want to make?",
        form_furniture_placeholder: "Select an option (e.g. Kitchen, Wardrobe...)",
        form_opt_cozinha: "Kitchen",
        form_opt_roupeiro: "Wardrobe",
        form_opt_closet: "Closet",
        form_opt_sala: "Living Room Unit",
        form_opt_banho: "Bathroom Furniture",
        form_opt_outro: "Other",
        form_project_status: "Do you already have a project?",
        form_project_placeholder: "Select an option",
        form_opt_tem_projeto: "Yes, I have a project/measurements",
        form_opt_precisa_projeto: "No, I need a project",
        form_location: "Installation location",
        btn_whatsapp_send: "Send Summary",
        btn_submit: "Request Contact",
        footer_about: "Experts in complete remodeling, combining design, functionality, and comfort in every project.",
        footer_links_title: "Quick Links",
        footer_legal_title: "Legal",
        footer_terms: "Terms and Conditions",
        footer_privacy: "Privacy Policy",
        footer_rights: "All rights reserved.",
        footer_dev: "Developed by"
    },
    es: {
        meta_title: "planned.pt - El Arte de Transformar Espacios",
        meta_description: "Ofrecemos servicios de remodelación de alta calidad. Transformamos su hogar en un ambiente acogedor, encantador y relajante.",
        nav_home: "Inicio",
        nav_about: "Nosotros",
        nav_services: "Servicios",
        nav_portfolio: "Transformaciones",
        nav_contact: "Contacto",
        btn_quote: "Pedir Presupuesto",
        btn_nav_contact: "Contáctenos",
        btn_portfolio: "Ver Portafolio",
        btn_hero_contact: "Hable Con Nosotros",
        btn_read_more: "Leer Más <i class='fa-solid fa-arrow-right'></i>",
        hero_subtitle: "ESPECIALISTAS EN MUEBLES A MEDIDA",
        hero_title_1: "Transforme Sus Espacios en",
        hero_title_2: "Obras de Arte",
        hero_title_3: "Personalizadas",
        hero_desc: "Muebles a medida que unen funcionalidad, diseño y calidad.<br>Cada proyecto es único, al igual que su espacio.",
        exp_number: "25+",
        exp_text: "Años de<br>Experiencia",
        about_subtitle: "Quiénes Somos",
        about_title_text: "Nuestra",
        about_title_em: "Historia",
        about_text_1: "En Planned, combinamos carpintería especializada y diseño de interiores en Mafra para crear proyectos únicos en Lisboa y sus alrededores. Enfocados en la fabricación de muebles a medida, adaptamos cada pieza a su espacio con creatividad y materiales premium como Blum, Häfele, Arauco y Egger.",
        about_text_2: "Garantizamos un proceso transparente, desde el diseño personalizado hasta la instalación profesional en todo Portugal. Ofrecemos garantía y soporte completo, asegurando que cada proyecto de carpintería e interiores sea una inversión segura, duradera y funcional.",
        stat_1_num: "10+ Años",
        stat_1_desc: "De Experiencia",
        stat_2_num: "250+ Proyectos",
        stat_2_desc: "Completados",
        stat_3_num: "100%",
        stat_3_desc: "Satisfacción",
        services_subtitle: "Lo Que Hacemos",
        services_title_text: "Nuestros",
        services_title_em: "Servicios",
        srv_1_title: "Muebles a Medida",
        srv_1_desc: "Piezas únicas diseñadas al milímetro. Garantizamos aprovechamiento total y excelentes acabados de carpintería tradicional.",
        srv_2_title: "Diseño de Interiores",
        srv_2_desc: "Visualización 3D completa de su proyecto. Armonizamos materiales e iluminación para unir estética y funcionalidad.",
        srv_3_title: "Armarios y Vestidores a Medida",
        srv_3_desc: "Armarios y vestidores de lujo con organización personalizada. Cajones con cierre suave y LED integrado para máxima practicidad.",
        srv_4_title: "Cocinas a Medida",
        srv_4_desc: "Cocinas robustas con materiales hidrófugos y herrajes de primera. Unimos resistencia y diseño, del rústico al minimalista.",
        srv_5_title: "Muebles de Baño",
        srv_5_desc: "Muebles resistentes a la humedad con diseño sofisticado. Soluciones duraderas e inteligentes para organizar su baño.",
        srv_6_title: "Mobiliario Comercial",
        srv_6_desc: "Mostradores y muebles de oficina que elevan su marca. Soluciones ergonómicas diseñadas para impresionar.",
        port_subtitle: "Nuestro Trabajo",
        port_title_text: "Nuestras",
        port_title_em: "Transformaciones",
        port_desc: "Vea nuestros proyectos recientes y sorpréndase con los resultados.",
        port_1_title: "Mueble de Salón 3-en-1: TV, Chimenea y Bar",
        port_1_desc: "Estantería a medida en madera y mármol que une entretenimiento, confort y sofisticación.",
        port_2_title: "Cocina Moderna Verde Salvia",
        port_2_desc: "Isla de mármol y panel listado iluminado.",
        port_3_title: "Armario Planificado con Área de Ventana",
        port_3_desc: "Solución de almacenamiento optimizada con cajones centrales y puertas laterales, perfecta para aprovechar cada centímetro de su espacio.",
        port_4_title: "Oficina Ejecutiva Planificada",
        port_4_desc: "El equilibrio perfecto entre tecnología, confort y sofisticación.",
        port_5_title: "¿Es su espacio el siguiente?",
        port_5_desc: "Transformemos su visión en realidad con el toque de lujo que su hogar merece.",
        port_5_btn: "PROGRAMAR CONSULTORÍA",
        port_6_title: "Cocina Moderna en Madera y Mármol",
        port_6_desc: "Inspírese con este diseño sofisticado que une gabinetes planeados, una isla central con acabado listado y la elegancia atemporal de los revestimientos claros.",
        port_7_title: "Home Office Moderno con Toque Industrial",
        port_7_desc: "Explore ideas para estantes suspendidos, paredes de cemento quemado y carpintería inteligente para optimizar su espacio de trabajo.",
        port_8_title: "Armario con Escritorio Incorporado",
        port_8_desc: "Minimalismo y funcionalidad en carpintería a medida.",
        port_9_title: "Panel de TV Suspendido Minimalista con LED",
        port_9_desc: "El equilibrio perfecto entre funcionalidad y lujo. Enriquece tu sala de estar con este mueble contemporáneo, que combina texturas naturales y nichos decorativos.",
        port_10_title: "Home Theater Planificado de Madera",
        port_10_desc: "Sofisticación con iluminación empotrada y nichos laterales.",
        port_11_title: "Dormitorio Moderno con Iluminación",
        port_11_desc: "Diseño compacto y funcional con cabecera integrada.",
        port_12_title: "Minimalismo Listado",
        port_12_desc: "Sofisticación y optimización de espacio a medida.",
        port_btn_more: "Ver Más Proyectos",
        port_more_title: "Más Transformaciones",
        badge_before: "ANTES",
        badge_after: "DESPUÉS",
        process_subtitle: "Metodología",
        process_title_text: "Nuestro",
        process_title_em: "Proceso",
        process_desc: "",
        proc_1_title: "Consultoría",
        proc_1_desc: "Reunión inicial para entender sus necesidades, espacio y estilo.",
        proc_2_title: "Diseño 3D",
        proc_2_desc: "Presentación del proyecto en renderizaciones realistas para aprobación.",
        proc_3_title: "Producción",
        proc_3_desc: "Fabricación meticulosa en nuestro taller con materiales premium.",
        proc_4_title: "Instalación",
        proc_4_desc: "Montaje final en el lugar realizado por nuestros especialistas.",
        test_subtitle: "Comentarios",
        test_title_text: "Lo Que Dicen Nuestros",
        test_title_em: "Clientes",
        test_1_desc: "\"Siempre intentando entender lo que se pretendía, sin dificultad para aceptar cambios/críticas. Entregó exactamente lo pedido, en menos tiempo de lo previsto y siempre con simpatía y profesionalidad!!\"",
        test_2_desc: "\"El profesional demostró excelencia, creatividad y dedicación al proyecto. Atento a los detalles y a los intereses del cliente, superó todas las expectativas con propuestas bien fundamentadas y sugerencias pertinentes.\"",
        test_3_desc: "\"Excelente profesional. Completó el proyecto del dormitorio en un fin de semana con todos los detalles solicitados. Trabajo rápido y de calidad, con gran disponibilidad y paciencia. Lo recomiendo.\"",
        test_4_desc: "\"Muebles muy bien terminados y de calidad superior. Lo recomiendo mucho. Además de la mejor atención que hemos recibido.\"",
        test_5_desc: "\"¡Lo recomiendo mucho! Todo fluyó de la mejor manera desde el primer contacto, proyecto y entrega. Material y servicio de mucha calidad.\"",
        test_6_desc: "\"Súper profesionales, atentos a los detalles y muy cuidadosos. Lo recomiendo.\"",
        test_client_label: "Cliente",
        faq_subtitle: "Dudas Comunes",
        faq_title_text: "Preguntas",
        faq_title_em: "Frecuentes",
        faq_cat_1: "Proyecto y Proceso",
        faq_cat_2: "Presupuesto e Inversión",
        faq_cat_3: "Materiales y Acabados",
        faq_cat_4: "Instalación y Montaje",
        faq_cat_5: "Garantía y Soporte",
        faq_1_q: "¿Cómo funciona la consulta inicial para muebles a medida?",
        faq_1_a: "Programamos una reunión presencial gratuita para conocer mejor sus necesidades, presupuesto disponible y visión para el proyecto de muebles a medida. Durante esta consulta inicial, nuestro diseñador de interiores en Mafra entenderá el estilo, funcionalidad y preferencias para sus muebles de madera personalizados.",
        faq_2_q: "¿Qué incluye el estudio técnico de muebles a medida en Lisboa y Mafra?",
        faq_2_a: "Realizamos mediciones precisas y un análisis detallado del espacio donde se instalarán los muebles a medida, garantizando un ajuste perfecto. Este estudio técnico profesional asegura que las cocinas a medida, armarios empotrados, muebles personalizados se adapten perfectamente a las dimensiones y características del ambiente.",
        faq_3_q: "¿Cómo se hace la visualización 3D del proyecto de muebles a medida?",
        faq_3_a: "Presentamos el proyecto de carpintería a medida en 3D para que visualice exactamente cómo quedará el resultado final antes de la producción. Esta visualización tridimensional permite ver en detalle cómo quedarán en el espacio sus muebles personalizados, cocinas a medida, vestidores o estanterías personalizadas, facilitando ajustes y aprobaciones.",
        faq_4_q: "¿Cómo funciona la aprobación y el presupuesto de muebles a medida?",
        faq_4_a: "Con el diseño de muebles a medida aprobado, proporcionamos un presupuesto detallado y transparente sin compromisos ocultos. El presupuesto para muebles a medida incluye materiales de calidad, herrajes premium, mano de obra especializada y plazo de entrega, permitiendo total claridad en los costes de su proyecto de carpintería.",
        faq_5_q: "¿Qué materiales se utilizan en la fabricación de muebles a medida?",
        faq_5_a: "Utilizando los mejores materiales del mercado, fabricamos sus muebles a medida con excelencia y precisión. Trabajamos con MDF de alta calidad, madera maciza, aglomerado hidrófugo, herrajes Blum y acabados premium, garantizando durabilidad y belleza a los muebles personalizados para hogar, oficina o establecimientos comerciales en Lisboa y Mafra.",
        faq_6_q: "¿Cómo se realiza la instalación de muebles a medida?",
        faq_6_a: "Nuestro equipo profesional especializado realiza el montaje e instalación de los muebles a medida con el máximo cuidado y atención al detalle. Los instaladores experimentados garantizan que cada cocina a medida, armario empotrado, estantería a medida o mueble personalizado se instale a la perfección, respetando los plazos y manteniendo el ambiente limpio.",
        faq_7_q: "¿Existe garantía y asistencia técnica después de la instalación de los muebles?",
        faq_7_a: "Comprobamos que todo esté perfecto y ofrecemos soporte continuo post-instalación con garantía para los muebles a medida. La asistencia técnica de Planned.pt asegura tranquilidad y satisfacción total con sus muebles a medida, cocinas personalizadas, armarios a medida y demás soluciones de carpintería en Mafra, Ericeira, Sintra y Lisboa.",
        faq_8_q: "¿Cuál es el tiempo de entrega de un proyecto?",
        faq_8_a: "El plazo de entrega de los muebles a medida varía según la complejidad y el tamaño del proyecto, pero en promedio oscila entre 3 y 4 semanas para proyectos sencillos y de 6 a 8 semanas para proyectos completos de cocinas, armarios o interiores. En el momento de la aprobación del presupuesto confirmamos siempre el cronograma, para que sepa exactamente cuándo estará lista e instalada su carpintería en su casa en Mafra, Lisboa u otra región de Portugal.",
        faq_9_q: "¿Puedo ver el proyecto antes de aprobarlo?",
        faq_9_a: "Sí, antes de cualquier fabricación presentamos el proyecto en 3D para que vea con claridad cómo quedarán sus muebles a medida en el espacio real. Esto permite ajustar medidas, colores, materiales y funcionalidad antes de la producción, garantizando que el resultado final corresponda a lo que imaginó para su casa o empresa.",
        faq_10_q: "¿Trabajan en todo el país?",
        faq_10_a: "Planned realiza proyectos de muebles a medida en Mafra, Lisboa y en todo el territorio de Portugal. Evaluamos previamente los costes de transporte e instalación según su ubicación, garantizando un servicio profesional desde el primer contacto hasta el montaje final.",
        faq_11_q: "¿Cuál es mi inversión mínima?",
        faq_11_a: "No existe inversión mínima obligatoria para hacer un proyecto con Planned. Atendemos desde pequeños muebles a medida, como un armario o mueble de salón, hasta proyectos completos de interiores con cocinas, vestidores y soluciones de almacenamiento en toda la casa.",
        faq_12_q: "¿Y si no me gusta el resultado?",
        faq_12_a: "Todo el proceso está pensado para evitar surpresas, con proyecto 3D y revisiones hasta estar 100% satisfecho con los muebles a medida. Si algo no queda como espera, ajustamos detalles de diseño y ejecución dentro de las posibilidades técnicas, porque el objetivo es entregar un resultado final que realmente funcione en su día a día.",
        faq_13_q: "¿Qué materiales utilizan?",
        faq_13_a: "Trabajamos solo con materiales premium, como herrajes Blum y Häfele y paneles Arauco y Egger, que garantizan durabilidad, resistencia y un acabado de alto nivel. Esto significa guías suaves, bisagras de alto rendimiento y superficies que se mantienen hermosas por muchos años, incluso en cocinas y zonas de mayor uso.",
        faq_14_q: "¿Incluyen montaje?",
        faq_14_a: "Sí, todos los proyectos de muebles a medida incluyen montaje profesional realizado por nuestro equipo especializado. Cuidamos toda la instalación en Mafra, Lisboa y otras regiones de Portugal, garantizando encajes perfectos, nivelación correcta y un acabado final listo para usar.",
        faq_15_q: "¿Ofrecen garantía?",
        faq_15_a: "Ofrecemos garantía sobre materiales y mano de obra en todos los proyectos de muebles a medida Planned. Los detalles de la garantía se presentan de forma clara en la propuesta, para que tenga total seguridad en la inversión realizada para su casa o negocio.",
        faq_16_q: "¿Qué calidad de materiales y acabados utilizan en los muebles a medida?",
        faq_16_a: "Sí, todos nuestros muebles a medida se fabrican con materiales de alto nivel y acabados premium. Utilizamos lacado profesional en puertas y detalles impecables, herrajes de marcas reconocidas como Blum, Häfele y Emuca, bisagras empotradas de calidad superior, cierre suave en cajones y puertas, y sistemas de apertura rigurosos para cocinas, armarios y salones. Garantizamos durabilidad, funcionalidad y estética refinada en cada proyecto de muebles a medida.",
        faq_17_q: "¿Hacen lacado premium y puertas de cristal para cocinas y armarios?",
        faq_17_a: "Sí, trabajamos con lacado de alta calidad aplicado en frentes, paneles y puertas de cristal, garantizando superficies lisas, núcleos consistentes y un acabado riguroso que valoriza armarios y salones en proyectos de interiores de alto nivel.",
        faq_18_q: "¿Qué tipo de herrajes y bisagras utilizan en los muebles a medida?",
        faq_18_a: "Sí, utilizamos estructuras empotradas y herrajes de marcas reconocidas, con sistemas de cierre suave y alta resistencia, para garantizar un alineamiento perfecto, funcionamiento silencioso y la durabilidad que se espera de muebles premium de alto nivel.",
        contact_subtitle: "Hable Con Nosotros",
        contact_title_text: "Inicie su",
        contact_title_em: "Transformación",
        contact_desc: "Complete el formulario a continuación o contáctenos directamente a través de WhatsApp para solicitar su presupuesto.",
        contact_phone_label: "Teléfono",
        contact_whatsapp_label: "WhatsApp",
        contact_email_label: "Correo",
        contact_address_label: "Dirección",
        form_name: "Nombre Completo",
        form_phone: "Móvil",
        form_email: "Correo Electrónico",
        form_message: "Mensaje / Detalles adicionales",
        form_furniture_type: "¿Qué mueble desea hacer?",
        form_furniture_placeholder: "Seleccione una opción (ej: Cocina, Armario...)",
        form_opt_cozinha: "Cocina",
        form_opt_roupeiro: "Armario",
        form_opt_closet: "Vestidor",
        form_opt_sala: "Mueble de Salón",
        form_opt_banho: "Mueble de Baño",
        form_opt_outro: "Otro",
        form_project_status: "¿Ya tiene un proyecto?",
        form_project_placeholder: "Seleccione una opción",
        form_opt_tem_projeto: "Sí, tengo un proyecto/medidas",
        form_opt_precisa_projeto: "No, necesito un proyecto",
        form_location: "Lugar de instalación",
        btn_whatsapp_send: "Enviar Resumen",
        btn_submit: "Solicitar Contacto",
        footer_about: "Expertos en remodelaciones completas, combinando diseño, funcionalidad y confort en cada proyecto.",
        footer_links_title: "Enlaces Rápidos",
        footer_legal_title: "Legal",
        footer_terms: "Términos y Condiciones",
        footer_privacy: "Política de Privacidad",
        footer_rights: "Todos los derechos reservados.",
        footer_dev: "Desarrollado por"
    },
    fr: {
        meta_title: "planned.pt - L'Art de Transformer les Espaces",
        meta_description: "Nous proposons des services de rénovation de haute qualité. Nous transformons votre maison en un environnement accueillant, charmant et relaxant.",
        nav_home: "Accueil",
        nav_about: "À Propos",
        nav_services: "Services",
        nav_portfolio: "Transformations",
        nav_contact: "Contact",
        btn_quote: "Demander Devis",
        btn_nav_contact: "Contactez-nous",
        btn_portfolio: "Voir Portfolio",
        btn_hero_contact: "Parlez-nous",
        btn_read_more: "Lire Plus <i class='fa-solid fa-arrow-right'></i>",
        hero_subtitle: "SPÉCIALISTES DU MOBILIER SUR MESURE",
        hero_title_1: "Transformez Vos Espaces en",
        hero_title_2: "Œuvres d'Art",
        hero_title_3: "Personnalisées",
        hero_desc: "Des meubles sur mesure qui allient fonctionnalité, design et qualité.<br>Chaque projet est unique, tout comme votre espace.",
        exp_number: "25+",
        exp_text: "Années<br>d'Expérience",
        about_subtitle: "Qui Sommes-Nous",
        about_title_text: "Notre",
        about_title_em: "Histoire",
        about_text_1: "Chez Planned, nous allions menuiserie spécialisée et design d'intérieur à Mafra pour créer des projets uniques à Lisbonne et ses environs. Axés sur la fabrication de meubles sur mesure, nous adaptons chaque pièce à votre espace avec créativité et des matériaux haut de gamme comme Blum, Häfele, Arauco et Egger.",
        about_text_2: "Nous garantissons un processus transparent, du design personnalisé à l'installation professionnelle dans tout le Portugal. Nous offrons une garantie et un support complet, assurant que chaque projet de menuiserie et d'intérieur soit un investissement sûr, durable et fonctionnel.",
        stat_1_num: "+25 Ans",
        stat_1_desc: "D'Expérience",
        stat_2_num: "+250 Projets",
        stat_2_desc: "Réalisés",
        stat_3_num: "100%",
        stat_3_desc: "Satisfaction",
        services_subtitle: "Ce Que Nous Faisons",
        services_title_text: "Nos",
        services_title_em: "Services",
        srv_1_title: "Meubles sur Mesure",
        srv_1_desc: "Des pièces uniques conçues au millimètre. Nous garantissons une utilisation totale et des finitions excellentes de la menuiserie traditionnelle.",
        srv_2_title: "Design d'Intérieur",
        srv_2_desc: "Visualisation 3D complète de votre projet. Nous harmonisons les matériaux et l'éclairage pour unir esthétique et fonctionnalité.",
        srv_3_title: "Armoires et Dressings sur Mesure",
        srv_3_desc: "Armoires et dressings de luxe avec organisation personnalisée. Tiroirs à fermeture douce et LED intégrée pour une praticité maximale.",
        srv_4_title: "Cuisines sur Mesure",
        srv_4_desc: "Cuisines robustes avec des matériaux hydrofuges et une quincaillerie de pointe. Nous allions résistance et design, du rustique au minimaliste.",
        srv_5_title: "Meubles de Salle de Bain",
        srv_5_desc: "Meubles résistants à l'humidité au design sophistiqué. Des solutions durables et intelligentes pour l'organisation de votre salle de bain.",
        srv_6_title: "Mobilier Commercial",
        srv_6_desc: "Comptoirs et mobilier de bureau qui mettent en valeur votre marque. Des solutions ergonomiques conçues pour impressionner.",
        port_subtitle: "Notre Travail",
        port_title_text: "Nos",
        port_title_em: "Transformations",
        port_desc: "Découvrez nos récents projets et laissez-vous surprendre par les résultats.",
        port_1_title: "Meuble de Salon 3-en-1 : TV, Cheminée et Bar",
        port_1_desc: "Étagère sur mesure en bois et marbre alliant divertissement, confort et sophistication.",
        port_2_title: "Cuisine Moderne Vert Sauge",
        port_2_desc: "Îlot en marbre et panneau à lattes éclairé.",
        port_3_title: "Armoire Aménagée avec Espace Fenêtre",
        port_3_desc: "Solution de rangement optimisée avec tiroirs centraux et portes latérales, parfaite pour tirer parti de chaque centimètre de votre espace.",
        port_4_title: "Bureau Exécutif Aménagé",
        port_4_desc: "L’équilibre parfait entre technologie, confort et sophistication.",
        port_5_title: "Votre espace est-il le prochain ?",
        port_5_desc: "Transformons votre vision en réalité avec la touche de luxe que votre maison mérite.",
        port_5_btn: "PLANIFIER UNE CONSULTATION",
        port_6_title: "Cuisine Moderne en Bois et Marbre",
        port_6_desc: "Laissez-vous inspirer par ce design sophistiqué qui allie des armoires aménagées, un îlot central avec une finition à lattes et l'élégance intemporelle des revêtements clairs.",
        port_7_title: "Bureau à Domicile Moderne avec Touche Industrielle",
        port_7_desc: "Découvrez des idées d'étagères suspendues, de murs en ciment brûlé et de menuiserie intelligente pour optimiser votre espace de travail.",
        port_8_title: "Armoire avec Bureau Intégré",
        port_8_desc: "Minimalisme et fonctionnalité en menuiserie sur mesure.",
        port_9_title: "Panneau TV Suspendu Minimaliste avec LED",
        port_9_desc: "L'équilibre parfait entre fonctionnalité et luxe. Valorisez votre salon avec ce meuble contemporain, alliant textures naturelles et niches décoratives.",
        port_10_title: "Home Cinéma Planifié en Bois",
        port_10_desc: "Sophistication avec éclairage intégré et niches latérales.",
        port_11_title: "Chambre Moderne avec Éclairage",
        port_11_desc: "Design compact et fonctionnel avec tête de lit intégrée.",
        port_12_title: "Minimalisme à Lattes",
        port_12_desc: "Sophistication et optimisation d'espace sur mesure.",
        port_btn_more: "Voir Plus De Projets",
        port_more_title: "Plus De Transformations",
        badge_before: "AVANT",
        badge_after: "APRÈS",
        process_subtitle: "Méthodologie",
        process_title_text: "Notre",
        process_title_em: "Processus",
        process_desc: "",
        proc_1_title: "Consultation",
        proc_1_desc: "Réunion initiale pour comprendre vos besoins, votre espace et votre style.",
        proc_2_title: "Design 3D",
        proc_2_desc: "Présentation du projet en rendus réalistes pour approbation.",
        proc_3_title: "Production",
        proc_3_desc: "Fabrication méticuleuse dans notre atelier avec des matériaux premium.",
        proc_4_title: "Installation",
        proc_4_desc: "Montage final sur site réalisé par nos spécialistes.",
        test_subtitle: "Avis",
        test_title_text: "Ce Que Disent Nos",
        test_title_em: "Clients",
        test_1_desc: "\"Toujours à essayer de comprendre ce qui était voulu, sans difficulté à accepter les changements/critiques. A livré exactement ce qui était demandé, en moins de temps que prévu et toujours avec sympathie et professionnalisme !!\"",
        test_2_desc: "\"Le professionnel a fait preuve d'excellence, de créativité et de dévouement au projet. Attentif aux détails et aux intérêts du client, a dépassé toutes les attentes avec des propositions bien fondées et des suggestions pertinentes.\"",
        test_3_desc: "\"Excellent professionnel. A terminé le projet de la chambre en un week-end avec tous les détails demandés. Travail rapide et de qualité, avec une grande disponibilité et patience. Je recommande.\"",
        test_4_desc: "\"Meubles très bien finis et de qualité supérieure. Je recommande vivement. En plus du meilleur service client que nous ayons jamais eu.\"",
        test_5_desc: "\"Je recommande vivement ! Tout s'est parfaitement déroulé dès le premier contact, le projet et la livraison. Matériel et service de très haute qualité.\"",
        test_6_desc: "\"Super professionnels, attentifs aux détails et très attentionnés. Je recommande.\"",
        test_client_label: "Client",
        faq_subtitle: "Questions Courantes",
        faq_title_text: "Questions",
        faq_title_em: "Fréquentes",
        faq_cat_1: "Projet et Processus",
        faq_cat_2: "Budget et Investissement",
        faq_cat_3: "Matériaux et Finitions",
        faq_cat_4: "Installation et Montage",
        faq_cat_5: "Garantie et Support",
        faq_1_q: "Comment se déroule la première consultation pour des meubles sur mesure ?",
        faq_1_a: "Nous organisons une rencontre en personne gratuite pour mieux comprendre vos besoins, le budget disponible et la vision de votre projet de meubles sur mesure. Lors de cette consultation initiale, notre architecte d'intérieur à Mafra comprendra le style, la fonctionnalité et les préférences pour vos meubles en bois personnalisés.",
        faq_2_q: "Que comprend le relevé technique pour les meubles sur mesure à Lisbonne et Mafra ?",
        faq_2_a: "Nous effectuons des mesures précises et une analyse détaillée de l'espace où les meubles sur mesure seront installés, garantissant un ajustement parfait. Ce relevé technique professionnel garantit que les cuisines sur mesure, les armoires encastrées, les placards sur mesure et les meubles personnalisés s'adaptent parfaitement aux dimensions et aux caractéristiques de l'environnement.",
        faq_3_q: "Comment est réalisée la visualisation 3D du projet de meubles sur mesure ?",
        faq_3_a: "Nous présentons le projet de menuiserie sur mesure en 3D afin que vous puissiez visualiser exactement à quoi ressemblera le résultat final avant la production. Cette visualisation en trois dimensions vous permet de voir en détail comment vos meubles personnalisés, cuisines sur mesure, dressings prévus ou étagères personnalisées s'intégreront dans l'espace, facilitant ainsi les ajustements et les approbations.",
        faq_4_q: "Comment se déroulent l'approbation et le devis pour les meubles sur mesure ?",
        faq_4_a: "Une fois le design des meubles sur mesure approuvé, nous fournissons un devis détaillé et transparent sans engagements cachés. Le devis pour les meubles sur mesure comprend des matériaux de qualité, une quincaillerie de qualité supérieure, une main-d'œuvre spécialisée et un délai de livraison, permettant une clarté totale sur les coûts de votre projet de menuiserie prévue.",
        faq_5_q: "Quels matériaux sont utilisés dans la fabrication de meubles sur mesure ?",
        faq_5_a: "En utilisant les meilleurs matériaux du marché, nous fabriquons vos meubles sur mesure avec excellence et précision. Nous travaillons avec du MDF de haute qualité, du bois massif, des panneaux de particules hydrofuges, de la quincaillerie Blum et des finitions haut de gamme, garantissant durabilité et beauté aux meubles personnalisés pour la maison, le bureau ou les établissements commerciaux à Lisbonne et Mafra.",
        faq_6_q: "Comment se déroule l'installation des meubles sur mesure ?",
        faq_6_a: "Notre équipe professionnelle spécialisée effectue le montage et l'installation des meubles sur mesure avec le plus grand soin et une attention particulière aux détails. Des installateurs expérimentés veillent à ce que chaque cuisine sur mesure, armoire encastrée, étagère sur mesure ou meuble personnalisé soit installé à la perfection, en respectant les délais et en gardant l'environnement propre.",
        faq_7_q: "Y a-t-il une garantie et une assistance technique après l'installation des meubles ?",
        faq_7_a: "Nous vérifions que tout est parfait et offrons un soutien post-installation continu avec une garantie pour les meubles sur mesure. L'assistance technique de Planned.pt assure tranquillité d'esprit et satisfaction totale pour vos meubles sur mesure, cuisines personnalisées, armoires sur mesure et autres solutions de menuiserie à Mafra, Ericeira, Sintra et Lisbonne.",
        faq_8_q: "Quel est le délai de livraison d'un projet ?",
        faq_8_a: "Le délai de livraison des meubles sur mesure varie en fonction de la complexité et de la taille du projet, mais il oscille en moyenne entre 3 et 4 semaines pour des projets simples et de 6 à 8 semaines pour des projets complets de cuisines, d'armoires ou d'intérieurs. Au moment de l'approbation du devis, nous confirmons toujours le calendrier, afin que vous sachiez exactement quand votre menuiserie sur mesure sera prête et installée dans votre maison à Mafra, Lisbonne ou dans une autre région du Portugal.",
        faq_9_q: "Puis-je voir le projet avant de l'approuver ?",
        faq_9_a: "Oui, avant toute fabrication, nous présentons le projet en 3D afin que vous puissiez voir clairement à quoi ressembleront vos meubles sur mesure dans l'espace réel. Cela permet d'ajuster les mesures, les couleurs, les matériaux et les fonctionnalités avant la production, garantissant que le résultat final correspond à ce que vous aviez imaginé pour votre maison ou votre entreprise.",
        faq_10_q: "Travaillez-vous dans tout le pays ?",
        faq_10_a: "Planned réalise des projets de meubles sur mesure à Mafra, Lisbonne et sur tout le territoire du Portugal. Nous évaluons au préalable les frais de transport et d'installation en fonction de votre emplacement, garantissant un service professionnel du premier contact au montage final.",
        faq_11_q: "Quel est mon investissement minimum ?",
        faq_11_a: "Il n'y a pas d'investissement minimum obligatoire pour réaliser un projet avec Planned. Nous intervenons aussi bien pour de petits meubles sur mesure, tels qu'une armoire ou un meuble de salon, que pour des projets d'intérieur complets avec cuisines, dressings et solutions de rangement dans toute la maison.",
        faq_12_q: "Et si je n'aime pas le résultat ?",
        faq_12_a: "L'ensemble du processus est conçu pour éviter les surprises, avec un projet 3D et des révisions jusqu'à ce que vous soyez satisfait à 100% de vos meubles sur mesure. Si quelque chose ne se passe pas comme prévu, nous ajustons les détails de conception et d'exécution dans les limites des possibilités techniques, car le but est de vous livrer un résultat final qui fonctionne vraiment dans votre quotidien.",
        faq_13_q: "Quels matériaux utilisez-vous ?",
        faq_13_a: "Nous ne travaillons qu'avec des matériaux haut de gamme, tels que la quincaillerie Blum et Häfele et les panneaux Arauco et Egger, qui garantissent durabilité, résistance et une finition haut de gamme. Cela signifie des glissières douces, des charnières hautes performances et des surfaces qui restent belles pendant de nombreuses années, même dans les cuisines et les zones à forte utilisation.",
        faq_14_q: "Le montage est-il inclus ?",
        faq_14_a: "Oui, tous les projets de meubles sur mesure incluent un montage professionnel réalisé par notre équipe spécialisée. Nous prenons en charge toute l'installation à Mafra, Lisbonne et dans d'autres régions du Portugal, en garantissant des ajustements parfaits, un nivellement correct et une finition finale prête à l'emploi.",
        faq_15_q: "Offrez-vous une garantie ?",
        faq_15_a: "Nous offrons une garantie sur les matériaux et la main-d'œuvre pour tous les projets de meubles sur mesure Planned. Les détails de la garantie sont clairement présentés dans la proposition, afin que vous ayez une sécurité totale dans l'investissement réalisé pour votre maison ou votre entreprise.",
        faq_16_q: "Quelle qualité de matériaux et de finitions utilisez-vous dans les meubles sur mesure ?",
        faq_16_a: "Oui, tous nos meubles sur mesure sont fabriqués avec des matériaux de haute qualité et des finitions haut de gamme. Nous utilisons un laquage professionnel sur les portes et des détails impeccables, une quincaillerie de marques reconnues telles que Blum, Häfele et Emuca, des charnières encastrées de qualité supérieure, une fermeture en douceur sur les tiroirs et les portes, et des systèmes d'ouverture rigoureux pour les cuisines, les armoires et les salons. Nous garantissons durabilité, fonctionnalité et esthétique raffinée pour chaque projet de meuble sur mesure.",
        faq_17_q: "Faites-vous du laquage haut de gamme et des portes vitrées pour les cuisines et les armoires ?",
        faq_17_a: "Oui, nous travaillons avec des laquages de haute qualité appliqués sur des façades, des panneaux et des portes vitrées, garantissant des surfaces lisses, des noyaux constants et une finition rigoureuse qui met en valeur les armoires et les salons dans les projets d'intérieur de haute qualité.",
        faq_18_q: "Quel type de quincaillerie et de charnières utilisez-vous dans les meubles sur mesure ?",
        faq_18_a: "Oui, nous utilisons des structures encastrées et une quincaillerie de marques reconnues, avec des systèmes de fermeture en douceur et une haute résistance, pour garantir un alignement parfait, un fonctionnement silencieux et la durabilité que se espera de meubles haut de gamme.",
        contact_subtitle: "Parlez-Nous",
        contact_title_text: "Commencez votre",
        contact_title_em: "Transformation",
        contact_desc: "Remplissez le formulaire ci-dessous ou contactez-nous directement via WhatsApp pour demander votre devis.",
        contact_phone_label: "Téléphone",
        contact_whatsapp_label: "WhatsApp",
        contact_email_label: "Email",
        contact_address_label: "Adresse",
        form_name: "Nom Complet",
        form_phone: "Téléphone Portable",
        form_email: "Email",
        form_message: "Message / Détails supplémentaires",
        form_furniture_type: "Quel meuble souhaitez-vous réaliser ?",
        form_furniture_placeholder: "Sélectionnez une option (ex : Cuisine, Armoire...)",
        form_opt_cozinha: "Cuisine",
        form_opt_roupeiro: "Armoire",
        form_opt_closet: "Dressing",
        form_opt_sala: "Meuble de Salon",
        form_opt_banho: "Meuble de Salle de Bain",
        form_opt_outro: "Autre",
        form_project_status: "Avez-vous déjà un projet ?",
        form_project_placeholder: "Sélectionnez une option",
        form_opt_tem_projeto: "Oui, j'ai un projet/des mesures",
        form_opt_precisa_projeto: "Non, j'ai besoin d'un projet",
        form_location: "Lieu d'installation",
        btn_whatsapp_send: "Envoyer le Résumé",
        btn_submit: "Demander Contact",
        footer_about: "Experts en rénovations complètes, alliant design, fonctionnalité et confort dans chaque projet.",
        footer_links_title: "Liens Rapides",
        footer_legal_title: "Légal",
        footer_terms: "Termes et Conditions",
        footer_privacy: "Politique de Confidentialité",
        footer_rights: "Tous droits réservés.",
        footer_dev: "Développé par"
    },
    de: {
        meta_title: "planned.pt - Die Kunst, Räume zu Verwandeln",
        meta_description: "Wir bieten qualitativ hochwertige Umbaudienstleistungen an. Wir verwandeln Ihr Zuhause in eine einladende, charmante und entspannende Umgebung.",
        nav_home: "Startseite",
        nav_about: "Über Uns",
        nav_services: "Leistungen",
        nav_portfolio: "Umbauten",
        nav_contact: "Kontakt",
        btn_quote: "Angebot Anfordern",
        btn_portfolio: "Portfolio Ansehen",
        btn_read_more: "Weiterlesen <i class='fa-solid fa-arrow-right'></i>",
        hero_subtitle: "SPEZIALISTEN FÜR MASSMÖBEL",
        hero_title_1: "Verwandeln Sie Ihre Räume in",
        hero_title_2: "Personalisierte",
        hero_title_3: "Kunstwerke",
        hero_desc: "Maßgefertigte Möbel, die Funktionalität, Design und Qualität vereinen.<br>Jedes Projekt ist einzigartig, genau wie Ihr Raum.",
        exp_number: "25+",
        exp_text: "Jahre<br>Erfahrung",
        about_subtitle: "Wer Wir Sind",
        about_title_text: "Unsere",
        about_title_em: "Geschichte",
        about_text_1: "Bei Planned verbinden wir spezialisierte Tischlerei und Inneneinrichtung in Mafra, um einzigartige Projekte in Lissabon und Umgebung zu schaffen. Mit Fokus auf maßgefertigte Möbel passen wir jedes Stück mit Kreativität und Premium-Materialien wie Blum, Häfele, Arauco und Egger an Ihren Raum an.",
        about_text_2: "Wir garantieren einen transparenten Prozess, vom individuellen Design bis zur professionellen Installation in ganz Portugal. Wir bieten Garantie und umfassenden Support und stellen sicher, dass jedes Tischler- und Inneneinrichtungsprojekt eine sichere, langlebige und funktionale Investition ist.",
        stat_1_num: "10+ Jahre",
        stat_1_desc: "Erfahrung",
        stat_2_num: "250+ Projekte",
        stat_2_desc: "Abgeschlossen",
        stat_3_num: "100%",
        stat_3_desc: "Zufriedenheit",
        services_subtitle: "Was Wir Tun",
        services_title_text: "Unsere",
        services_title_em: "Leistungen",
        srv_1_title: "Maßgefertigte Möbel",
        srv_1_desc: "Einzigartige Stücke, millimetergenau entworfen. Wir garantieren maximale Nutzung und hervorragende Oberflächen traditioneller Tischlerarbeiten.",
        srv_2_title: "Innenausstattung",
        srv_2_desc: "Komplette 3D-Visualisierung Ihres Projekts. Wir harmonisieren Materialien und Beleuchtung, um Ästhetik und Funktionalität zu vereinen.",
        srv_3_title: "Maßgefertigte Kleiderschränke und begehbare Schränke",
        srv_3_desc: "Luxuriöse Kleiderschränke und begehbare Schränke mit personalisierter Aufteilung. Soft-Close-Schubladen und integrierte LEDs für maximale Praktikabilität.",
        srv_4_title: "Maßgefertigte Küchen",
        srv_4_desc: "Robuste Küchen mit wasserfesten Materialien und erstklassigen Beschlägen. Wir vereinen Widerstandsfähigkeit und Design, von rustikal bis hin zu minimalistisch.",
        srv_5_title: "Badezimmermöbel",
        srv_5_desc: "Feuchtigkeitsbeständige Möbel mit anspruchsvollem Design. Langlebige und intelligente Lösungen für die Organisation Ihres Badezimmers.",
        srv_6_title: "Gewerbliche Möbel",
        srv_6_desc: "Theken und Büromöbel, die Ihre Marke aufwerten. Ergonomische Lösungen, die beeindrucken.",
        port_subtitle: "Unsere Arbeit",
        port_title_text: "Unsere",
        port_title_em: "Umbauten",
        port_desc: "Sehen Sie sich unsere aktuellen Projekte an und lassen Sie sich von den Ergebnissen überraschen.",
        port_1_title: "3-in-1 Wohnzimmermöbel: TV, Kamin & Bar",
        port_1_desc: "Maßgefertigtes Regal aus Holz und Marmor, das Unterhaltung, Komfort und Raffinesse vereint.",
        port_2_title: "Moderne Salbei-Grüne Küche",
        port_2_desc: "Marmorinsel und beleuchtete Lamellenwand.",
        port_3_title: "Einbauschrank mit Fensterbereich",
        port_3_desc: "Optimierte Aufbewahrungslösung mit zentralen Schubladen und Seitentüren, perfekt um jeden Zentimeter Ihres Raumes zu nutzen.",
        port_4_title: "Geplantes Chefbüro",
        port_4_desc: "Die perfekte Balance zwischen Technologie, Komfort und Raffinesse.",
        port_5_title: "Ist Ihr Projekt das nächste?",
        port_6_title: "Moderne Holz- und Marmorküche",
        port_6_desc: "Lassen Sie sich von diesem anspruchsvollen Design inspirieren, das geplante Schränke, eine Kochinsel mit Lamellen-Finish und die zeitlose Eleganz heller Verkleidungen vereint.",
        port_7_title: "Modernes Home Office im Industrie-Design",
        port_7_desc: "Entdecken Sie Ideen für schwebende Regale, Wände in Zementoptik und intelligente Tischlerarbeiten zur Optimierung Ihres Arbeitsplatzes.",
        port_8_title: "Schrank mit Eingebautem Schreibtisch",
        port_8_desc: "Minimalismus und Funktionalität in maßgeschneiderten Holzarbeiten.",
        port_9_title: "Minimalistisches Schwebendes TV-Paneel mit LED",
        port_9_desc: "Die perfekte Balance zwischen Funktionalität und Luxus. Werten Sie Ihr Wohnzimmer mit diesem zeitgemäßen Möbelstück auf, das natürliche Texturen und dekorative Nischen kombiniert.",
        port_10_title: "Geplantes Heimkino aus Holz",
        port_10_desc: "Raffinesse mit integrierter Beleuchtung und seitlichen Nischen.",
        port_11_title: "Modernes Schlafzimmer mit Beleuchtung",
        port_11_desc: "Kompaktes und funktionales Design mit integriertem Kopfteil.",
        port_12_title: "Minimalismus mit Lamellen",
        port_12_desc: "Maßgeschneiderte Raffinesse und Raumoptimierung.",
        port_btn_more: "Weitere Projekte Ansehen",
        port_more_title: "Weitere Transformationen",
        badge_before: "VORHER",
        badge_after: "NACHHER",
        process_subtitle: "Methodik",
        process_title_text: "Unser",
        process_title_em: "Prozess",
        process_desc: "",
        proc_1_title: "Beratung",
        proc_1_desc: "Erstgespräch, um Ihre Bedürfnisse, Ihren Raum und Ihren Stil zu verstehen.",
        proc_2_title: "3D-Design",
        proc_2_desc: "Projektpräsentation mit realistischen Renderings zur Genehmigung.",
        proc_3_title: "Produktion",
        proc_3_desc: "Sorgfältige Fertigung in unserer Werkstatt mit Premium-Materialien.",
        proc_4_title: "Installation",
        proc_4_desc: "Endmontage vor Ort durch unsere Spezialisten.",
        test_subtitle: "Feedback",
        test_title_text: "Was Unsere",
        test_title_em: "Kunden",
        test_1_desc: "\"Versuchte immer zu verstehen, was beabsichtigt war, ohne Schwierigkeiten, Änderungen/Kritik anzunehmen. Hat genau das geliefert, was gefragt war, in kürzerer Zeit als erwartet und immer mit Freundlichkeit und Professionalität!!\"",
        test_2_desc: "\"Der Profi zeigte Exzellenz, Kreativität und Hingabe an das Projekt. Aufmerksam auf Details und die Interessen des Kunden, übertraf er alle Erwartungen mit fundierten Vorschlägen und relevanten Anregungen.\"",
        test_3_desc: "\"Ausgezeichneter Profi. Hat das Schlafzimmerprojekt an einem Wochenende mit allen gewünschten Details abgeschlossen. Schnelle, qualitativ hochwertige Arbeit mit großer Verfügbarkeit und Geduld. Ich empfehle.\"",
        test_4_desc: "\"Sehr gut verarbeitete Möbel von höchster Qualität. Sehr zu empfehlen. Abgesehen vom besten Kundenservice, den wir je hatten.\"",
        test_5_desc: "\"Sehr zu empfehlen! Alles verlief perfekt vom ersten Kontakt über das Projekt bis zur Lieferung. Hochwertiges Material und Service.\"",
        test_6_desc: "\"Super professionell, aufmerksam auf Details und sehr fürsorglich. Sehr zu empfehlen.\"",
        test_client_label: "Kunde",
        faq_subtitle: "Häufige Fragen",
        faq_title_text: "Häufig Gestellte",
        faq_title_em: "Fragen",
        faq_cat_1: "Projekt und Ablauf",
        faq_cat_2: "Budget und Investition",
        faq_cat_3: "Materialien und Oberflächen",
        faq_cat_4: "Installation und Montage",
        faq_cat_5: "Garantie und Support",
        faq_1_q: "Wie funktioniert die Erstberatung für maßgefertigte Möbel?",
        faq_1_a: "Wir vereinbaren ein kostenloses persönliches Treffen, um Ihre Bedürfnisse, Ihr verfügbares Budget und Ihre Vision für Ihr individuelles Möbelprojekt besser zu verstehen. Während dieser Erstberatung wird unser Innenarchitekt in Mafra den Stil, die Funktionalität und die Vorlieben für Ihre personalisierten Holzmöbel verstehen.",
        faq_2_q: "Was beinhaltet die technische Bestandsaufnahme für maßgefertigte Möbel in Lissabon und Mafra?",
        faq_2_a: "Wir führen präzise Messungen und eine detaillierte Analyse des Raumes durch, in dem die maßgefertigten Möbel installiert werden, um eine perfekte Passform zu gewährleisten. Diese professionelle technische Bestandsaufnahme stellt sicher, dass sich maßgefertigte Küchen, Einbauschränke, maßgefertigte Schränke und personalisierte Möbel perfekt an die Abmessungen und Eigenschaften der Umgebung anpassen.",
        faq_3_q: "Wie erfolgt die 3D-Visualisierung des maßgefertigten Möbelprojekts?",
        faq_3_a: "Wir präsentieren das maßgefertigte Tischlereiprojekt in 3D, damit Sie vor der Produktion genau sehen können, wie das Endergebnis aussehen wird. Diese dreidimensionale Visualisierung ermöglicht es Ihnen, im Detail zu sehen, wie Ihre personalisierten Möbel, maßgefertigten Küchen, geplanten begehbaren Kleiderschränke oder maßgefertigten Regale im Raum aussehen werden, was Anpassungen und Genehmigungen erleichtert.",
        faq_4_q: "Wie funktionieren die Genehmigung und der Kostenvoranschlag für maßgefertigte Möbel?",
        faq_4_a: "Nach Genehmigung des Designs der maßgefertigten Möbel erstellen wir einen detaillierten und transparenten Kostenvoranschlag ohne versteckte Verpflichtungen. Der Kostenvoranschlag für maßgefertigte Möbel umfasst hochwertige Materialien, Premium-Beschläge, spezialisierte Arbeitskräfte und Lieferzeiten und bietet so absolute Klarheit über die Kosten Ihres geplanten Tischlereiprojekts.",
        faq_5_q: "Welche Materialien werden bei der Herstellung von maßgefertigten Möbeln verwendet?",
        faq_5_a: "Unter Verwendung der besten Materialien auf dem Markt fertigen wir Ihre individuellen Möbel mit Exzellenz und Präzision. Wir arbeiten mit hochwertigem MDF, Massivholz, wasserabweisender Spanplatte, Blum-Beschlägen und Premium-Oberflächen, die Langlebigkeit und Schönheit für personalisierte Möbel für Wohnungen, Büros oder gewerbliche Einrichtungen in Lissabon und Mafra garantieren.",
        faq_6_q: "Wie erfolgt die Montage von maßgefertigten Möbeln?",
        faq_6_a: "Unser spezialisiertes professionelles Team führt die Montage und Installation der maßgefertigten Möbel mit größter Sorgfalt und Liebe zum Detail durch. Erfahrene Installateure sorgen dafür, dass jede maßgefertigte Küche, jeder Einbauschrank, jedes maßgefertigte Regal oder personalisierte Möbelstück perfekt installiert wird, wobei die Fristen eingehalten werden und die Umgebung sauber bleibt.",
        faq_7_q: "Gibt es eine Garantie und technische Unterstützung nach der Installation der Möbel?",
        faq_7_a: "Wir überprüfen, ob alles perfekt ist, und bieten eine kontinuierliche Betreuung nach der Installation mit einer Garantie für die maßgefertigten Möbel. Der technische Support von Planned.pt sorgt für Sicherheit und absolute Zufriedenheit mit Ihren maßgefertigten Möbeln, personalisierten Küchen, maßgefertigten Schränken und anderen Tischlereilösungen in Mafra, Ericeira, Sintra und Lissabon.",
        faq_8_q: "Wie lang ist die Lieferzeit für ein Projekt?",
        faq_8_a: "Die Lieferzeit für maßgefertigte Möbel variiert je nach Komplexität und Größe des Projekts, liegt aber im Durchschnitt zwischen 3 und 4 Wochen für einfache Projekte und 6 bis 8 Wochen für komplette Küchen-, Schrank- oder Innenarchitekturprojekte. Bei Genehmigung des Angebots bestätigen wir immer den Zeitplan, damit Sie genau wissen, wann Ihre geplante Holzarbeit in Ihrem Haus in Mafra, Lissabon oder einer anderen Region Portugals fertig und installiert sein wird.",
        faq_9_q: "Kann ich das Projekt vor der Genehmigung sehen?",
        faq_9_a: "Ja, vor jeder Herstellung präsentieren wir das Projekt in 3D, damit Sie klar sehen können, wie Ihre maßgefertigten Möbel im realen Raum aussehen werden. Auf diese Weise können Sie vor der Produktion Maße, Farben, Materialien und Funktionalität anpassen, um sicherzustellen, dass das Endergebnis dem entspricht, was Sie sich für Ihr Zuhause oder Ihr Unternehmen vorgestellt haben.",
        faq_10_q: "Arbeiten Sie im ganzen Land?",
        faq_10_a: "Planned realisiert Projekte für maßgefertigte Möbel in Mafra, Lissabon und auf dem gesamten portugiesischen Festland. Wir bewerten die Transport- und Installationskosten vorab entsprechend Ihrem Standort und garantieren einen professionellen Service vom ersten Kontakt bis zur Endmontage.",
        faq_11_q: "Wie hoch ist meine Mindestinvestition?",
        faq_11_a: "Es gibt keine obligatorische Mindestinvestition, um ein Projekt mit Planned durchzuführen. Wir kümmern uns um alles, von kleinen maßgefertigten Möbeln wie einem Kleiderschrank oder Wohnzimmermöbeln bis hin zu kompletten Inneneinrichtungsprojekten mit Küchen, begehbaren Kleiderschränken und Aufbewahrungslösungen im ganzen Haus.",
        faq_12_q: "Was ist, wenn mir das Ergebnis nicht gefällt?",
        faq_12_a: "Der gesamte Prozess ist darauf ausgelegt, Überraschungen zu vermeiden, mit einem 3D-Projekt und Überarbeitungen, bis Sie zu 100 % mit den maßgefertigten Möbeln zufrieden sind. Wenn etwas nicht so ist, wie Sie es erwarten, passen wir Design- und Ausführungsdetails im Rahmen der technischen Möglichkeiten an, denn das Ziel ist es, ein Endergebnis zu liefern, das in Ihrem Alltag wirklich funktioniert.",
        faq_13_q: "Welche Materialien verwenden Sie?",
        faq_13_a: "Wir arbeiten ausschließlich mit Premium-Materialien, wie z.B. Beschlägen von Blum und Häfele sowie Platten von Arauco und Egger, die Langlebigkeit, Widerstandsfähigkeit und eine hochwertige Verarbeitung garantieren. Das bedeutet leichtgängige Führungen, Hochleistungsscharniere und Oberflächen, die auch in Küchen und stark beanspruchten Bereichen viele Jahre schön bleiben.",
        faq_14_q: "Ist die Montage inbegriffen?",
        faq_14_a: "Ja, alle Projekte für maßgefertigte Möbel beinhalten eine professionelle Montage, die von unserem spezialisierten Team durchgeführt wird. Wir kümmern uns um die gesamte Installation in Mafra, Lissabon und anderen Regionen Portugals und sorgen für eine perfekte Passform, eine korrekte Nivellierung und ein gebrauchsfertiges Endfinish.",
        faq_15_q: "Bieten Sie eine Garantie an?",
        faq_15_a: "Wir bieten eine Garantie auf Materialien und Verarbeitung für alle maßgefertigten Möbelprojekte von Planned. Die Garantiedetails werden im Angebot klar und deutlich dargelegt, damit Sie bei Ihrer Investition für Ihr Zuhause oder Ihr Unternehmen absolute Sicherheit haben.",
        faq_16_q: "Welche Qualität der Materialien und Oberflächen verwenden Sie für maßgefertigte Möbel?",
        faq_16_a: "Ja, alle unsere maßgefertigten Möbel werden aus hochwertigen Materialien und erstklassigen Oberflächen hergestellt. Wir verwenden eine professionelle Lackierung an Türen und makellose Details, Beschläge von anerkannten Marken wie Blum, Häfele und Emuca, hochwertige verdeckte Scharniere, Sanfteinzug bei Schubladen und Türen sowie strenge Öffnungssysteme für Küchen, Schränke und Wohnzimmer. Wir garantieren Langlebigkeit, Funktionalität und raffinierte Ästhetik in jedem Möbelprojekt auf Maß.",
        faq_17_q: "Führen Sie hochwertige Lackierungen und Glastüren für Küchen und Schränke aus?",
        faq_17_a: "Ja, wir arbeiten mit hochwertigen Lackierungen auf Fronten, Paneelen und Glastüren, die makellose Oberflächen, konsistente Kerne und ein strenges Finish garantieren, das Schränke und Wohnzimmer in hochwertigen Innenarchitekturprojekten aufwertet.",
        faq_18_q: "Welche Art von Beschlägen und Scharnieren verwenden Sie für maßgefertigte Möbel?",
        faq_18_a: "Ja, wir verwenden Einbaustrukturen und Beschläge anerkannter Marken mit Soft-Close-Systemen und hoher Widerstandsfähigkeit, um eine perfekte Ausrichtung, einen geräuschlosen Betrieb und die Langlebigkeit zu gewährleisten, die von hochwertigen Premium-Möbeln erwartet wird.",
        contact_subtitle: "Sprechen Sie Mit Uns",
        contact_title_text: "Beginnen Sie Ihre",
        contact_title_em: "Verwandlung",
        contact_desc: "Füllen Sie das untenstehende Formular aus oder kontaktieren Sie uns direkt über WhatsApp, um Ihr Angebot anzufordern.",
        contact_phone_label: "Telefon",
        contact_whatsapp_label: "WhatsApp",
        contact_email_label: "E-Mail",
        contact_address_label: "Adresse",
        form_name: "Vollständiger Name",
        form_phone: "Mobiltelefon",
        form_email: "E-Mail",
        form_message: "Nachricht",
        btn_submit: "Kontakt Anfordern",
        footer_about: "Experten für komplette Umbauten, die bei jedem Projekt Design, Funktionalität und Komfort vereinen.",
        footer_links_title: "Schnelle Links",
        footer_legal_title: "Rechtliches",
        footer_terms: "Allgemeine Geschäftsbedingungen",
        footer_privacy: "Datenschutzerklärung",
        footer_rights: "Alle Rechte vorbehalten.",
        footer_dev: "Entwickelt von"
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // --- Elements ---
    const header = document.getElementById('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // --- Sticky Header ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // --- Scroll Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');

                // Add animated line class to timeline if the target is in the process section
                if (entry.target.classList.contains('process-step') || entry.target.classList.contains('process-timeline')) {
                    const timeline = document.querySelector('.process-timeline');
                    if (timeline) timeline.classList.add('animate-line');
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll, .process-timeline');
    animatedElements.forEach(el => observer.observe(el));

    // --- FAQ Accordion logic ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other currently open FAQ item
            const currentlyActive = document.querySelector('.faq-item.active');
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
                currentlyActive.querySelector('.faq-answer').style.maxHeight = null;
            }

            // Toggle this FAQ item
            item.classList.toggle('active');
            const answer = item.querySelector('.faq-answer');
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 50 + "px"; // 50px buffer for padding
            } else {
                answer.style.maxHeight = null;
            }
        });
    });

    // --- FAQ Category Tabs ---
    const faqTabs = document.querySelectorAll('.faq-tab');
    const faqCategories = document.querySelectorAll('.faq-category');

    faqTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.getAttribute('data-category');

            // Update active tab
            faqTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Close any open accordion in the current category
            const currentlyActive = document.querySelector('.faq-item.active');
            if (currentlyActive) {
                currentlyActive.classList.remove('active');
                currentlyActive.querySelector('.faq-answer').style.maxHeight = null;
            }

            // Show matching category, hide others
            faqCategories.forEach(cat => {
                if (cat.getAttribute('data-category') === category) {
                    cat.classList.add('active');
                } else {
                    cat.classList.remove('active');
                }
            });
        });
    });

    // --- Multi-Language System ---
    const langLinks = document.querySelectorAll('.lang-dropdown a');
    const currentLangText = document.getElementById('current-lang');

    // Function to set up a language
    function setLanguage(langCode) {
        if (!translations[langCode]) return;

        // Change text values based on data-i18n
        const elementsToTranslate = document.querySelectorAll('[data-i18n]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[langCode][key]) {
                // If it contains HTML like the arrow icon, use innerHTML, else textContent.
                // It's safer to use innerHTML so tags inside string are parsed.
                element.innerHTML = translations[langCode][key];
            }
        });

        // Set button text to current Lang uppercase (e.g. EN, PT)
        currentLangText.textContent = langCode.toUpperCase();

        // Save preference
        localStorage.setItem('preferredLang', langCode);
        document.documentElement.lang = langCode;
    }

    const langBtn = document.getElementById('lang-btn');
    const langSelector = document.querySelector('.lang-selector');

    if (langBtn && langSelector) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langSelector.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!langSelector.contains(e.target)) {
                langSelector.classList.remove('active');
            }
        });
    }

    // Bind events
    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = link.getAttribute('data-lang');
            setLanguage(selectedLang);

            if (langSelector) {
                langSelector.classList.remove('active');
            }
            if (document.activeElement) {
                document.activeElement.blur();
            }
        });
    });

    // Detect browser lang or use stored
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && translations[savedLang]) {
        setLanguage(savedLang);
    } else {
        const browserLang = navigator.language.slice(0, 2).toLowerCase();
        if (translations[browserLang]) {
            setLanguage(browserLang);
        } else {
        }
    }

    // --- Portfolio Before/After Sliders ---
    const portfolioSliders = document.querySelectorAll('.portfolio-slider');
    portfolioSliders.forEach(slider => {
        const input = slider.querySelector('.slider-input');
        if (input) {
            input.addEventListener('input', (e) => {
                slider.style.setProperty('--position', `${e.target.value}%`);
            });
        }
    });

    // --- Testimonials Carousel Navigation ---
    const carousel = document.getElementById('testimonialsCarousel');
    // Scope selectors to avoid selecting arrows from the process timeline
    const testimonialsWrapper = document.querySelector('.testimonials-wrapper');
    let prevBtn = null, nextBtn = null, dots = [];

    if (testimonialsWrapper) {
        prevBtn = testimonialsWrapper.querySelector('.prev-btn');
        nextBtn = testimonialsWrapper.querySelector('.next-btn');
        dots = testimonialsWrapper.querySelectorAll('.carousel-dots .dot');
    }

    if (carousel && prevBtn && nextBtn) {
        // Calculate scroll amount (one card at a time)
        const getScrollAmount = () => {
            const card = carousel.querySelector('.testimonial-card');
            if (card) {
                return card.offsetWidth + 30; // card width + gap
            }
            return 350; // Fallback
        };

        // Arrow Buttons (infinite loop)
        prevBtn.addEventListener('click', () => {
            if (carousel.scrollLeft <= 10) {
                const maxScroll = carousel.scrollWidth - carousel.clientWidth;
                carousel.scrollTo({ left: maxScroll, behavior: 'smooth' });
            } else {
                carousel.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
            }
        });

        nextBtn.addEventListener('click', () => {
            const maxScroll = carousel.scrollWidth - carousel.clientWidth;
            if (carousel.scrollLeft >= maxScroll - 10) {
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
            }
        });

        // Pagination Dots (only if they exist)
        if (dots.length > 0) {
            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                    const index = parseInt(dot.getAttribute('data-index'));
                    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
                    const scrollLeft = index === 1 ? maxScroll : 0;
                    carousel.scrollTo({ left: scrollLeft, behavior: 'smooth' });
                });
            });

            carousel.addEventListener('scroll', () => {
                const scrollLeft = carousel.scrollLeft;
                const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
                let activeIndex = (scrollLeft > scrollWidth * 0.5) ? 1 : 0;

                dots.forEach((dot, index) => {
                    if (index === activeIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            });
        }
    }

    // --- Process Carousel Navigation (Mobile) ---
    const processCarousel = document.getElementById('processTimeline');
    const processPrevBtn = document.querySelector('.process-prev-btn');
    const processNextBtn = document.querySelector('.process-next-btn');
    const processDots = document.querySelectorAll('.process-dots .dot');

    if (processCarousel && processPrevBtn && processNextBtn && processDots.length > 0) {

        const getProcessScrollAmount = () => {
            const step = processCarousel.querySelector('.process-step');
            if (step) {
                return step.offsetWidth + 15; // card width + gap
            }
            return 300;
        };

        // Arrow Buttons (infinite loop)
        processPrevBtn.addEventListener('click', () => {
            if (processCarousel.scrollLeft <= 10) {
                const maxScroll = processCarousel.scrollWidth - processCarousel.clientWidth;
                processCarousel.scrollTo({ left: maxScroll, behavior: 'smooth' });
            } else {
                processCarousel.scrollBy({ left: -getProcessScrollAmount(), behavior: 'smooth' });
            }
        });

        processNextBtn.addEventListener('click', () => {
            const maxScroll = processCarousel.scrollWidth - processCarousel.clientWidth;
            if (processCarousel.scrollLeft >= maxScroll - 10) {
                processCarousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                processCarousel.scrollBy({ left: getProcessScrollAmount(), behavior: 'smooth' });
            }
        });

        // Pagination Dots
        processDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'));
                const step = processCarousel.querySelector('.process-step');
                if (step) {
                    const scrollAmount = (step.offsetWidth + 15) * index;
                    processCarousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                }
            });
        });

        // Update active dot on scroll
        processCarousel.addEventListener('scroll', () => {
            const scrollLeft = processCarousel.scrollLeft;
            const stepWidth = processCarousel.querySelector('.process-step').offsetWidth + 15;
            const activeIndex = Math.round(scrollLeft / stepWidth);

            processDots.forEach((dot, index) => {
                if (index === activeIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        });
    }

    // --- Portfolio Zoom Modal ---
    const zoomButtons = document.querySelectorAll('.portfolio-zoom-btn');
    const body = document.body;

    // Create Modal Element
    const modal = document.createElement('div');
    modal.className = 'portfolio-modal';
    modal.innerHTML = `
        <div class="modal-content-container">
            <button class="modal-close-btn" aria-label="Fechar">&times;</button>
            <div class="modal-body"></div>
        </div>
    `;
    body.appendChild(modal);

    const modalBody = modal.querySelector('.modal-body');
    const modalCloseBtn = modal.querySelector('.modal-close-btn');

    function openModal(card) {
        const slider = card.querySelector('.portfolio-slider').cloneNode(true);
        const info = card.querySelector('.portfolio-info-box').cloneNode(true);

        // Clear previous content
        modalBody.innerHTML = '';

        // Add elements to modal
        const modalContainer = document.createElement('div');
        modalContainer.className = 'portfolio-card modal-card';
        modalContainer.appendChild(slider);
        modalContainer.appendChild(info);
        modalBody.appendChild(modalContainer);

        // Remove the zoom button from the cloned slider to avoid confusion
        const clonedZoomBtn = slider.querySelector('.portfolio-zoom-btn');
        if (clonedZoomBtn) clonedZoomBtn.remove();

        // Ensure images are visible and slider is initialized
        const input = slider.querySelector('.slider-input');
        if (input) {
            // Set initial position
            slider.style.setProperty('--position', `${input.value}%`);
            input.addEventListener('input', (e) => {
                slider.style.setProperty('--position', `${e.target.value}%`);
            });
        }

        // Show modal
        modal.classList.add('active');
        body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        body.style.overflow = '';
        // Small delay to clear content after transition
        setTimeout(() => {
            modalBody.innerHTML = '';
        }, 400);
    }

    zoomButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.portfolio-card');
            if (card) openModal(card);
        });
    });

    modalCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // --- More Projects Inline Toggle ---
    const btnMoreProjects = document.getElementById('btn-more-projects');
    const extraProjects = document.querySelectorAll('.extra-project');

    if (btnMoreProjects && extraProjects.length > 0) {
        btnMoreProjects.addEventListener('click', (e) => {
            e.preventDefault();

            // Show the extra projects
            extraProjects.forEach(project => {
                project.style.display = 'block';

                // Set small timeout to allow display:block to apply before adding class for opacity transision if needed
                setTimeout(() => {
                    project.classList.add('is-visible');
                }, 50);

                // Initialize the slider if it hasn't been initialized yet
                const slider = project.querySelector('.portfolio-slider');
                if (slider) {
                    const input = slider.querySelector('.slider-input');
                    if (input && !slider.dataset.initialized) {
                        slider.style.setProperty('--position', `${input.value}%`);
                        input.addEventListener('input', (e) => {
                            slider.style.setProperty('--position', `${e.target.value}%`);
                        });
                        slider.dataset.initialized = "true";
                    }
                }
            });

            // Hide the button container once clicked
            const btnContainer = btnMoreProjects.closest('.portfolio-more-actions');
            if (btnContainer) {
                btnContainer.style.display = 'none';
            }
        });
    }

    // --- WhatsApp Form Submission ---
    const btnWhatsappForm = document.getElementById('btn-whatsapp-form');
    if (btnWhatsappForm) {
        btnWhatsappForm.addEventListener('click', () => {
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const furnitureType = document.getElementById('furniture-type').value;
            const projectStatus = document.getElementById('project-status').value;
            const location = document.getElementById('location').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !phone || !furnitureType || !projectStatus || !location) {
                alert('Por favor, preencha nome, telemóvel, tipo de móvel, status do projeto e local antes de enviar para o WhatsApp.');
                return;
            }

            let whatsappText = `Novo Pedido de Orçamento/Contacto\n`;
            whatsappText += `Nome: ${name}\n`;
            whatsappText += `Telemóvel: ${phone}\n`;
            if (email) whatsappText += `Email: ${email}\n`;
            whatsappText += `Tipo de Móvel: ${furnitureType}\n`;
            whatsappText += `Tem Projeto: ${projectStatus}\n`;
            whatsappText += `Local de Instalação: ${location}\n`;
            if (message) whatsappText += `Mensagem: ${message}\n`;


            const encodedText = encodeURIComponent(whatsappText);
            const whatsappUrl = `https://wa.me/351922272208?text=${encodedText}`;
            window.open(whatsappUrl, '_blank');
        });
    }

});
