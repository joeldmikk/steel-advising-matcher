# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


consultants = Consultant.create(
  [
    {
      name: "Chelsey Saunders",
      email: "Chelsey.Saunders@steeladvising.com",
      fee: 450,
      talents: "LEAD_DEV_EF,LEAD_DEV_SOC_EMO,LEAD_DEV_DIVERSITY",
      notes: "Chelsey’s expertise comprises supporting adults to improve their executive functioning (i.e., goal-setting, time management, etc.) and to create transformational change. By transformational change, she means helping professionals and aspiring leaders to develop internal capacities through adaptive challenges in order to manage competing demands. For example, she helps individuals build confidence, problem-solve with design thinking, re-frame challenges with a strength-based lens (appreciative inquiry), increase self-awareness and intuition, cultivate compassion, give and receive effective feedback, and reimagine productivity. She also takes pride in closely supervising and supporting the team of STEEL advisers with Anna. She is warm, enthusiastic, and steeped in positive psychological approaches to improve both your mindset and performance. Chelsey’s goals are for you to find meaning in your day-to-day decision-making, so you can flourish in work and life.\n
      Chelsey received her PhD in Education Leadership at Teachers College, Columbia University after earning her M.Phil at Columbia University, M.Ed at Wake Forest University, and BA at UNC-Chapel Hill. She is also a National Board Certified Teacher, an elite teaching credential, and hot-sauce connoisseur. 
      "
    },
    {
      name: "Anna Levy-Warren",
      email: "Anna.LevyWarren@steeladvising.com",
      fee: 600,
      talents: "LEAD_DEV_EF,LEAD_DEV_SOC_EMO,LEAD_DEV_DIVERSITY",
      notes: "Dr. Anna Levy-Warren received her PhD in clinical psychology from City University of New York after graduating from Princeton University. She then pursued additional training in individual assessment, group dynamics and executive functioning challenges.\n
      In 2005, Dr. Levy-Warren launched her first company specializing in the support of individuals with complicated neuropsychological profiles and has grown that operation to a team of over 100. Her true passion, however, lies in navigating complicated team dynamics in order to achieve the highest levels of executive functioning across personal and professional settings. 
      "
    },
    {
      name: "Elana Smith",
      email: "elana.smith@steeladvising.com",
      fee: 350,
      talents: "SUBSTANCE_HIGH,NEW_PROF_HIGH",
      notes: "Elana Smith has worked as an organizational consultant in New York City for over ten years, providing support for adults with a variety of emotional, academic, and cognitive challenges. She specializes in working with students and professionals, adults in transitional periods of life including shifting careers, overcoming creative blocks, moving into and out of school, thriving while in recovery, and developing healthy nutritional, lifestyle, and spiritual practices. Elana is a certified Educational Therapist, Holistic Health Counselor and Herbalist.\n
      Elana coaches adults with complex neuropsychological profiles to develop strategies to succeed professionally, academically, and creatively. She draws on her backgrounds in Education, Fine Arts, and Holistic Health to develop individual strategies that make goals attainable, and that serve to increase self-confidence, independence and motivation. Elana builds on the client’s strengths and gifts, all while promoting joy and inspiration."
    },
    {
      name: "Megan Gaffney",
      email: "megan.gaffney@organizationaltutors.com",
      fee: 350,
      talents: "ADHD_HIGH",
      notes: "Megan works with clients of all ages and life stages who are seeking to uncover and embrace greater efficiency, engagement and fulfillment in their lives. She uses warmth, optimism and humor to build trust and create a genuine rapport with her clients, and, with the foundation of that connection, she helps to address any number of obstacles that impede our journeys to fulfillment and success. In her role as a coach, over the past 10 years, Megan has worked with clients to strengthen executive functioning skills, to increase organization and efficiency, to craft strategies to reduce and manage anxiety, to demystify individual learning processes, to better manage interpersonal relationships, and to chart future paths based on a deeper understanding of an individual’s desires.\n 
      Megan uses a combination of pragmatic concerns and greatest ambitions to help her clients to imagine and build an achievable, meaningful life. Megan holds a certificate in Educational Therapy from the University of California, Riverside, and will pursue board certification as an Educational Therapist in 2018. She has a BA from the University of Pennsylvania and an MFA in classical acting from George Washington University and the Shakespeare Theatre.
      "
    },
    {
      name: "Casey Beveridge",
      email: "cbeve5714@gmail.com",
      fee: 300,
      talents: "PURE_EF_HIGH,COLLAB_DIVERSITY",
      notes: "As an executive functioning coach, Casey supports clients as they overcome barriers and unlock their potential to pursue both personal and professional goals.  In one-on-one meetings, Casey works collaboratively with clients to develop individually tailored strategies designed to activate and further develop executive functioning skills, such as time-management, focus, mental flexibility, and self-regulation.  Casey works from a strength-based model, informed by her clinical background.  She encourages mindfulness practice to bolster this work and often incorporates exercises into her sessions.  Casey considers collaboration, patience and empathy to be her own most prominent strengths as a coach.\n
      Casey Beveridge has a PhD in Counseling Psychology from Teachers College, Columbia University with considerable experience working with children, adolescents and adults in neuropsychological testing, psychotherapy and education. She holds a Masters degree in Community Counseling.
      "
    },
    {
      name: "Kelsey Bates",
      email: "kelseyreneebates@gmail.com",
      fee: 250,
      talents: "SUBSTANCE_MED",
      notes: "Kelsey has experience working with individuals with chronic anxiety, depression, substance use, traumatic brain injuries and trauma. Her other specialties and areas of interest include women's health, chronic pain, relationship issues, life transitions, career counseling and working actors. Kelsey uses a holistic framework when working with clients, emphasizing a foundation of collaboration and individualized approaches.\n
      Kelsey utilizes integrative approaches during session, including Psychodynamic theory, Motivational Interviewing, Cognitive Behavioral Therapy, Acceptance and Commitment Therapy and mindfulness techniques. She is a member is the American Counseling Association, a National Certified Counselor and a Certified Rehabilitation Counselor.\n
      Kelsey earned her Master's degree in Rehabilitation Counseling with a Concentration in Clinical Mental Health from The George Washington University in Washington, D.C. as well as an Advanced Certificate in Clinical Mental Health from University at Buffalo. Prior to entering the field of counseling, Kelsey obtained her Bachelor of Science in Special Education from the University of Georgia with a minor in Child and Family Development and gained valuable experience as a special education teacher."
    },
    {
      name: "Sarah Shuster",
      email: "sarahshuster21@gmail.com",
      fee: 250,
      talents: "SUBSTANCE_LOW",
      notes: "Sarah Shuster is an Executive Functioning Coach with STEEL Advising. Personalizing her approach to each client, she listens deeply to assess obstacles and understand the root of each client's challenges. She specializes in supporting individuals to create efficient and effective organizational systems in order to improve their time management, task initiation, and goal achievement in their personal and professional lives. Her expertise also includes streamlining team dynamics through emotional intelligence and processes like delegating tasks, providing feedback, and conducting difficult conversations. Sarah builds leadership acumen by focusing on the importance of modeling skills, explicitly articulating intentions, and communicating authenticity.\n
      Prior to her degree in clinical social work, Sarah gained 10 years of professional experience, working across a variety of government and non-profit organizations. Most recently, Sarah managed a community organizing team at the NYC Mayor’s Office of Immigrant Affairs, where she helped manage Mayor DeBlasio’s response to the federal immigration crisis. Sarah also spent years supporting advocacy efforts at The United Nations Foundation and The New America Foundation.\n
      Sarah was born and raised in New York City and is a proud first generation American. She is currently pursuing her master’s in clinical social work from Hunter’s Silberman School with a concentration in individuals, groups, and families. She also has a B.A. degree in Government and Law, and Philosophy from Lafayette College. Her experiences range from clinical work at the Queens Family Justice Center, where she provides counseling and facilitates a support group for domestic violence survivors. Sarah also facilitates a support group for young adult caregivers of cancer patients at Alma, a therapeutic space in Manhattan.
      "
    },
    {
      name: "Keely Stern",
      email: "kdastern@gmail.com",
      fee: 300,
      talents: "NEW_PROF_MED,SCHOOL_PROJ_MGMT,HIGH_PRESSURE_PROJ_MGMT,EXECUTIVE_COACHING_PROJ_MGMT",
      notes: "Keely Stern is an organizational consultant who uses her warmth and focus to help adults accomplish their goals while cultivating their executive functioning skills.  She specializes in empowering clients to identify and overcome challenges in managing their time and prioritizing competing responsibilities in order to achieve a more balanced lifestyle.\n 
      Keely has 10 years of project management experience in fast-paced, dynamic environments, ranging from large-scale international development programs to leading as a Chief of Staff at the New York City Department of Education. Throughout her career, she has curated a collection of tools and strategies for improving personal and professional time management, tightening organization, increasing productivity, streamlining communication, and accomplishing large, complex and interrelated tasks in incremental chunks in personal, academic and professional settings.\n 
      Keely works with her clients to identify challenges and then collaboratively develops a plan for overcoming them. To do so, she provides concrete techniques tailored to each client's needs for reaching their fullest potential and helps clients to hold themselves accountable for achieving their goals. Whether it is creating a calendar for large-scale projects with clear deadlines or executing to-do lists, she supports your ability to stay on top of everything you have to do to help you feel more in control.\n
      Keely's career in international development allows her to form strong relationships with adults of different cultures, backgrounds, and professions - both in person and entirely over the phone. She holds a master’s in International Affairs from Columbia University, a bachelor’s in business and Spanish from Wake Forest University and has spent her career in international and domestic education policy work.
      "
    },
    {
      name: "Shruti Shah",
      email: "shruti.s.shah@gmail.com",
      fee: 250,
      talents: "COLLAB_SOC_EMO,NEW_PROF_MED,CAREER_TRANS_MED,SCHOOL_GROUP_TEAMS,HIGH_PRESSURE_GROUP_TEAMS,EXECUTIVE_COACHING_GROUP_TEAMS,HIGH_PRESSURE_PROJ_MGMT,HIGH_PRESSURE_CEO,EXECUTIVE_COACHING_PROJ_MGMT",
      notes: "Shruti Shah is an organizational consultant who supports clients managing competing demands on their time and energy. She specializes in advising entrepreneurs and executives as they navigate stressful and complex personal and professional challenges while they also achieve their goals, such as growing and managing a business or earning a promotion. Shruti leads with curiosity and empathy and does her best to get to the root of the challenges her clients’ face while also trying to understand their individual motivations, strengths, and passions. She has a particular passion for building processes and creating structure to support daily effectiveness and efficiency.\n
      Shruti was previously the founder and Chief Operating Officer of a venture backed used furniture startup called Move Loot, which grew to a team of over nearly 300 across the United States. She has also worked as an investor and public-school teacher in Baltimore, Maryland. Shruti holds a B.A. in Political Science from the University of North Carolina at Chapel Hill and a M.S. Ed in Urban Education from John Hopkins University.
      "
    },
    {
      name: "Megan Wessler",
      email: "maw2275@tc.columbia.edu",
      fee: 250,
      talents: "ADHD_HIGH",
      notes: "Megan is an Organizational Consultant and Coach who brings nearly a decade of international leadership and business experience to her practice. Her collaborative, empathetic and solutions-focused coaching approach is heavily influenced by her experiences as Chief of Staff, where she collaborated with professionals to create organizational structures and systems to help them meet deadlines and achieve goals.\n 
      Megan’s coaching superpower is working with individuals entering business school who are feeling professionally motivated to improve their competitive edge or seeking to overcome creative blocks for career fulfilment. Megan works with individuals from all professional backgrounds who are struggling with burnout, feeling overwhelmed by daily demands, and seeking a more authentic career-life rhythms. With the belief that our personal and professional lives cannot be separated and function as a whole, Megan takes a holistic approach to customizing individual strategies for her clients that enable action towards professional organization and fulfilment.\n
      Additionally, Megan helps each of her clients build a comprehensive toolkit of customized executive functioning skills, habits and frameworks that are utilized to optimize time management, organize competing priorities and feel more in control on a daily basis. Megan is motivated by her clients' desire for change, and is honored to be part of the journey.\n
      Megan received her Bachelor of Arts in Art History from New York University, and is currently pursuing a Master’s Degree in Social-Organizational Psychology at Teachers College, Columbia University where she is continuously learning, networking, and gathering inspiration from her research.
      "
    },
    {
      name: "Joelle Tolifero",
      email: "jtolifero@gmail.com",
      fee: 250,
      talents: "NEW_PROF_LOW,COLLAB_DIVERSITY,SCHOOL_GROUP_TEAMS",
      notes: "Joelle’s advisement style combines radical candor, which is caring personally, while challenging directly, with unwavering support. She believes in a strengths-based approach, helping professionals to understand what they have to offer and where they have room to grow. Joelle will guide clients in how to create strategic processes towards meeting their goals. Her expertise consists of the following: supporting new and transitioning professionals to improve their goal-setting/completion strategies; managing overwhelm to minimize burnout; navigating workplace dynamics to lead demanding teams; and managing up in a hierarchical office to catalyze potential.\n
      Joelle received her Masters degree from Teachers College, Columbia University in International Education with a concentration in Peace and Human Rights. Her work has centered around supervising teams and supporting business professionals in their long-term social, emotional, and professional development.
      "
    },
    {
      name: "Jazmine Rodriguez",
      email: "jazmine.m.rodriguez@gmail.com",
      fee: 250,
      talents: "COLLAB_SOC_EMO,COLLAB_DIVERSITY,SCHOOL_CEO",
      notes: "Jazmine has worked as a higher education administrator for nearly a decade, providing support for adult learners with a variety of emotional, academic, and cognitive challenges. Jazmine works in partnership with individuals to develop organizational strategies that make personal goals attainable as a result of her holistic approach. She recognizes the importance of context and utilizes this philosophy to create strategies that are realistic, making results truly attainable. Jazmine has over ten years of experience doing individualized executive function and organizational support with students and professionals with complex cognitive and psychological profiles.\n
      Jazmine holds a Master’s Degree in Educational Leadership and a Bachelor’s degree in Interpersonal & Organizational Communications with a minor in Leadership Studies. Furthermore, she has studied CliftonStrengths and Design Thinking extensively and is a certified Human Centered Design Thinking Facilitator, as well as an Adventure Based Experiential Learning Facilitator. She utilizes an integrative model of coaching and leadership development theory that draws on the best from design thinking, cognitive behavioral, humanistic, and learning modalities.
      "
    },
    {
      name: "Tanya Erazo",
      email: "tanya.erazo@gmail.com",
      fee: 300,
      talents: "",
      notes: "As an academic and executive functioning coach, Tanya has worked extensively in helping move people from avoidance, anxiety, fear and ambivalence to action in various capacities. To do so, Tanya utilizes an integrative model that pulls from cognitive behavioral, psychodynamic, liberation psychology, humanistic and life coaching modalities. While Tanya has lots of tools that help clients achieve their academic and professional goals – whether it be honing their executive functioning skills for critical essays, developing career goals and beyond – she believes in adapting these tools as well as her own teaching style to best suit the personalities, goals, skills and needs of each client.\n
      Throughout her decade-long history of working with others in coaching, mentorship and therapy contexts, Tanya has helped children, students, professionals, veterans, athletes, parents and artists achieve their goals and accomplish more than they thought possible. Knowing that progress is not always a linear path, Tanya supports clients long-term by helping them create contingency plans and coping skills to overcome hurdles along the road. Tanya proudly prioritizes setting you up for success in the present and future.\n
      Tanya has three master’s degrees in psychology and is an award-winning doctoral candidate in clinical psychology. Being multiracial and multilingual have not only encouraged her to live on different continents and travel extensively for work and pleasure (40 countries and counting) but have encouraged her studies in cultural competency and human behavior In sum, she has lived  “many lives” as an athlete, jetsetter, public speaker, teacher, writer and psychologist in training. She uses her many experiences as avenues to connect with clients – and as a way of keeping her Netflix and podcasting games strong. In between goal setting and achieving, she would love to talk to you about cooking shows, docuseries, comedy podcasts, sports and your dream vacation spots."
    },
    {
      name: "Becca Semel",
      email: "r.s.semel@gmail.com",
      fee: 300,
      talents: "",
      notes: "Dr. Becca Semel received her Ph.D. in Counseling Psychology from Teachers College, Columbia University after receiving her M.Phil at Columbia University, M.S.Ed. from the University of Pennsylvania, and BA from the University of Michigan. She has extensive experience working with clients of all ages, both clinically and in an executive coaching capacity.\n
      Becca works from a strengths-based approach, recognizing that each individual holds a unique set of strengths and areas of growth, and capitalizing on these areas. Becca works with adults to support their executive functioning and organizational skills, refining skills such as time management, communication, and goal-setting. Becca is also trained to work with individuals and organizations on topics such as workplace diversity and inclusion and microaggressions in the workplace, and can generate strategies to make a workplace a multicultural community. Becca can help facilitate conversations on race, bias, and microaggressions while taking a compassionate and empathic stance."
    },
    {
      name: "Jess Wass",
      email: "jess@jesswass.com",
      fee: 250,
      talents: "CAREER_TRANS_HIGH,BURNOUT_HIGH,CAREER_TRANS_MED,HIGH_PRESSURE_GROUP_TEAMS,EXECUTIVE_COACHING_GROUP_TEAMS,HIGH_PRESSURE_PROJ_MGMT,EXECUTIVE_COACHING_PROJ_MGMT,HIGH_PRESSURE_CEO,EXECUTIVE_COACHING_PROJ_MGMT",
      notes: "Jess has changed careers 5 times over the last 15 years, moving from Finance and Strategy Consulting, to Corporate and Startup roles, until finally finding her place as an Organizational Development Consultant & Executive Coach. Her years of experience in business combined with a strong skill set in organizational psychology allow her to bring new perspectives and frameworks to help clients tackle a variety of work-related challenges. She received her master’s in Social-Organizational Psychology from Teachers College, Columbia University and also holds a BSBA in Finance and Psychology from Washington University in St. Louis.\n
      Jess works with individuals and groups as a coach with STEEL Advising, and she focuses on helping clients reach their full potential and helping ordinary managers become extraordinary leaders. Her specialty is supporting clients as they navigate career transitions by introducing them to decision-making frameworks and guiding them to find clarity in what drives them. Her approach is to help clients enhance their productivity, combat imposter syndrome, develop negotiation skills, and improve their leadership. She has supported a variety of clients from independent contributors, entrepreneurs, and managers across fields such as operations, design, startups, freelancing, psychology, and entertainment. When she’s not working, she’s breaking down the psychology of The Real Housewives franchises and indulging her sweet tooth in anything with chocolate"
    },
    {
      name: "Gabbie de Lara",
      email: "gabbie.delara@gmail.com",
      fee: 250,
      talents: "CAREER_TRANS_MED,HIGH_PRESSURE_CEO",
      notes: "Gabbie de Lara, CPCC is an executive functioning coach and also a facilitator, creative thinker, and leader in service. In her multidisciplinary practice, she listens from a place of curiosity and empathy and sees every moment as an opportunity for learning. Her specific approach is to combine mindfulness and embodied awareness while supporting clients as they navigate transitions; improve their leadership, develop their confidence; and create general wellness in their work and life. Gabbie works with the creative lens of an artist, the discipline of an athlete, the compassion of a mentor, and the evidence-based training of an executive coach. Gabbie digs deep and holds clients accountable to their goals and purpose with unwavering kindness and humor, and she brings calm into chaos and confusion that arises when people confront big challenges.\n
      Gabbie’s background in contracts, negotiation, and legal affairs is the foundation for her philosophy of promise-keeping and cultivating relationships. She brings an extensive organizational and operational skill set from her experience at companies like Nat Geo, HBO, and brand strategy and design agencies, and enjoys solving puzzles whether they are business, interpersonal, strategic, or creative in nature. She completed her coaching certification program with the Co-Active Training Institute (CTI), the largest and oldest experiential coach training school in the world, accredited by the International Coach Federation (ICF) .Gabbie’s happy places include being with her community; moving through yoga, running, and cycling; and getting curious about people, places, and things. Born and raised in Northern VA, Gabbie has lived in DC, Scotland, Uruguay, and currently resides in Manhattan with her husband and pit mix."
    },
    {
      name: "Amy Spellman",
      email: "AmyLSpelman@gmail.com",
      fee: 250,
      talents: "CAREER_TRANS_LOW",
      notes: "Amy is an organizational and executive coach and has been recognized for a style that reflects her warmth, compassion, and sense of humor.\n
      Amy works as an advisor with STEEL Advising, specializing in coaching parents on career advancement, leadership, and productivity. A mother of two young children herself, she’s particularly passionate about helping other working parents thrive.\n
      Amy's coaching approach is also influenced by her academic and professional background in communications and branding. She received her Bachelor of Arts from Northwestern University (magna cum laude), with a major in Communication Studies and a minor in French. She also earned a diploma in Coaching from New York University’s School of Professional Studies. She spent the early part of her career in communications and branding firms, and, over the last decade, has worked with numerous clients across industries and career and life stages to help position themselves for success.
      "
    },
    {
      name: "Michael Hopkins",
      email: "michaelerichopkins@gmail.com",
      fee: 250,
      talents: "NEW_PROF_LOW",
      notes: "Michael Hopkins Ph.D. completed his doctoral studies at Dartmouth College and went on to a career as a surgical neurophysiologist, mapping and monitoring nervous system function in real-time to prevent iatrogenic injury during surgery. After leaving that career in 2016 to cultivate a lifestyle that better supports and aligns with his priorities, Michael returned to New York City.\n
      Michael brings his scientific reasoning, analytical perspective, and experience in high-pressure and fast-paced environments to STEEL Advising. He is accustomed to direct, precise, and efficient communication, as well as a thorough and rigorous approach to information gathering and problem solving. He also values innovation and creativity and is currently patenting and launching an invention as a first-time entrepreneur.  Based on findings from his own research and personal experience, Michael is a strong proponent of the important role that physical exercise plays in supporting cognitive function and general mental health. He specializes in perseverance development and working with clients who are interested in incorporating evidence-based exercise recommendations into their strategy for success.
      "
    },
    {
      name: "Julia Simmons",
      email: "juliasimmons28@gmail.com",
      fee: 300,
      talents: "ADHD_MED,COLLAB_SOC_EMO",
      notes: "Julia uses evidenced-based strategies in her individualized coaching approach with clients. She has extensive experience working with adults on managing emotions, enhancing motivation and personal organization and getting their needs met at work or in relationships. Julia believes that self-discovery through systematically examining patterns of behavior is the key to transformational change. She uses a strengths-based lens to empower her clients to confront their current challenges and to feel confident in their choices. Julia balances empathy with accountability and coaches her clients to reach their maximum personal and professional potentials.\n
      Julia is a Licensed Clinical Social Worker specializing in providing executive functioning and organizational support. Julia earned her bachelor’s degree in education studies with a specialization in human development from Brown University. She furthered her education by earning a Master’s of Science in Social Work degree from Columbia University.
      "
    },
  ]
)
