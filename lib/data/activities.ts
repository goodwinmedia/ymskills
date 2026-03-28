import { Activity, Quorum, Dimension } from './types'

export const activities: Activity[] = [
  // ═══════════════════════════════════════════════════════════════
  // DEACONS — SPIRITUAL (d-sp-1 through d-sp-5)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'd-sp-1',
    quorum: 'deacons',
    dimension: 'spiritual',
    type: 'group',
    title: 'Sacrament Preparation Deep Dive',
    principle: 'Understanding the sacrament transforms how we prepare and pass it.',
    description:
      'Study the sacrament prayers word by word as a quorum. Discuss what each phrase means and how it connects to baptismal covenants. Have each young man share what he thinks about while preparing or passing the sacrament. End by setting a personal goal for more reverent preparation.',
    tags: ['mission'],
  },
  {
    id: 'd-sp-2',
    quorum: 'deacons',
    dimension: 'spiritual',
    type: 'personal',
    title: '7-Day Scripture Challenge',
    principle: 'Daily scripture study builds a foundation of personal revelation.',
    description:
      'Challenge each deacon to read from the Book of Mormon for at least 5 minutes every day for 7 consecutive days. Provide a simple reading plan (e.g., 1 Nephi 1–7). At the end of the week, share one verse that stood out and why. Track progress on a shared chart.',
    tags: ['mission'],
  },
  {
    id: 'd-sp-3',
    quorum: 'deacons',
    dimension: 'spiritual',
    type: 'group',
    title: 'Prayer Workshop',
    principle: 'Meaningful prayer is a skill that deepens our relationship with God.',
    description:
      'Teach the difference between routine prayer and heartfelt communication with God. Practice structuring prayers: gratitude, others\' needs, personal needs, guidance. Role-play opening and closing prayers for different settings. Discuss how to recognize answers to prayer.',
    tags: ['mission'],
  },
  {
    id: 'd-sp-4',
    quorum: 'deacons',
    dimension: 'spiritual',
    type: 'both',
    title: 'Testimony Building Blocks',
    principle: 'A testimony grows through small, consistent spiritual experiences.',
    description:
      'Each quorum member identifies one gospel truth they want to strengthen their testimony of. Over two weeks, they study, pray, and look for evidence of that truth in their life. Share experiences in a quorum testimony meeting. Leaders share their own journey of building testimony at age 12–13.',
    tags: ['mission'],
  },
  {
    id: 'd-sp-5',
    quorum: 'deacons',
    dimension: 'spiritual',
    type: 'group',
    title: 'Temple Preparation Introduction',
    principle: 'Understanding the temple early creates lifelong reverence for sacred covenants.',
    description:
      'Visit the temple grounds as a quorum (or view photos/virtual tour). Discuss what happens in the temple at a basic level: baptisms for the dead, making covenants, sealing families. Prepare names from FamilySearch for a future baptistry trip. Each young man sets a goal for when he wants to attend.',
    tags: ['mission', 'father'],
  },

  // ═══════════════════════════════════════════════════════════════
  // DEACONS — MENTAL (d-mn-1 through d-mn-5)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'd-mn-1',
    quorum: 'deacons',
    dimension: 'mental',
    type: 'group',
    title: 'Learn to Learn: Study Skills Workshop',
    principle: 'How you study matters more than how long you study.',
    description:
      'Teach basic study techniques: active recall, spaced repetition, and the Pomodoro method. Have each deacon practice with a short scripture passage. Discuss how these skills apply to school, seminary, and future mission study. Create a simple study plan template they can take home.',
    tags: ['mission', 'career'],
  },
  {
    id: 'd-mn-2',
    quorum: 'deacons',
    dimension: 'mental',
    type: 'personal',
    title: 'Read a Book This Month',
    principle: 'Reading builds vocabulary, empathy, and knowledge that compounds over a lifetime.',
    description:
      'Each deacon picks a book (fiction or non-fiction, age-appropriate) and commits to finishing it in 30 days. Provide suggestions: biography of a prophet, adventure novel, or science book. At month\'s end, each shares a 2-minute summary of what they read and what they learned.',
    tags: ['career'],
  },
  {
    id: 'd-mn-3',
    quorum: 'deacons',
    dimension: 'mental',
    type: 'group',
    title: 'Current Events Discussion',
    principle: 'Understanding the world around you is part of being an informed disciple.',
    description:
      'Select 2–3 age-appropriate current events. Discuss as a quorum: What happened? Why does it matter? How does the gospel perspective apply? Teach the difference between news and opinion. Help them practice forming their own views based on principles rather than just following peers.',
    tags: ['career'],
  },
  {
    id: 'd-mn-4',
    quorum: 'deacons',
    dimension: 'mental',
    type: 'both',
    title: 'Goal Setting 101',
    principle: 'Writing down goals makes you far more likely to achieve them.',
    description:
      'Teach the basics of SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound). Each deacon writes one spiritual goal and one school/personal goal. Review together to refine. Post goals where they\'ll see them daily. Follow up in 2 weeks to check progress and adjust.',
    tags: ['mission', 'career'],
  },
  {
    id: 'd-mn-5',
    quorum: 'deacons',
    dimension: 'mental',
    type: 'group',
    title: 'Digital Citizenship & Online Safety',
    principle: 'Being wise online is a modern form of choosing the right.',
    description:
      'Discuss healthy technology habits: screen time, social media pressure, online predators, and pornography avoidance. Role-play scenarios: What do you do when you see something inappropriate? When a friend shares something questionable? Create a personal "digital standard" — 3 rules each deacon sets for himself.',
    tags: ['career'],
  },

  // ═══════════════════════════════════════════════════════════════
  // DEACONS — PHYSICAL (d-ph-1 through d-ph-5)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'd-ph-1',
    quorum: 'deacons',
    dimension: 'physical',
    type: 'group',
    title: 'Outdoor Adventure: Hike & Explore',
    principle: 'Time in nature builds physical stamina and spiritual awareness.',
    description:
      'Plan a quorum hike to a local trail (3–5 miles, appropriate difficulty). Teach basic trail safety: hydration, sun protection, wildlife awareness. Along the way, stop for a short devotional about the Creation and our responsibility to care for the earth. Take a quorum photo at the summit or destination.',
    tags: [],
  },
  {
    id: 'd-ph-2',
    quorum: 'deacons',
    dimension: 'physical',
    type: 'personal',
    title: '30-Day Fitness Challenge',
    principle: 'Your body is a temple — taking care of it is an act of gratitude.',
    description:
      'Each deacon picks a simple daily exercise goal: 20 push-ups, 10 minutes of stretching, or a daily walk. Track on a calendar for 30 days. Discuss the Word of Wisdom and how it connects to physical health. Celebrate completion as a quorum with a healthy activity (smoothie night, sports outing).',
    tags: [],
  },
  {
    id: 'd-ph-3',
    quorum: 'deacons',
    dimension: 'physical',
    type: 'group',
    title: 'Basic First Aid & Safety',
    principle: 'Knowing how to help in an emergency is a form of priesthood service.',
    description:
      'Teach basic first aid: treating cuts, burns, sprains, and when to call 911. Practice CPR on a training dummy if available. Discuss how being physically prepared to help others is part of being a good priesthood holder. Each deacon should know how to respond to a basic emergency by the end.',
    tags: ['mission'],
  },
  {
    id: 'd-ph-4',
    quorum: 'deacons',
    dimension: 'physical',
    type: 'both',
    title: 'Cooking Basics: Feed Yourself',
    principle: 'Every young man should be able to prepare a simple, healthy meal.',
    description:
      'Teach 3 basic recipes: scrambled eggs, pasta with sauce, and a simple salad. Cover kitchen safety (knife handling, stove use, cleaning up). Each deacon practices at home and reports back. Discuss how cooking is a life skill for missions, college, and fatherhood.',
    tags: ['mission', 'father'],
  },
  {
    id: 'd-ph-5',
    quorum: 'deacons',
    dimension: 'physical',
    type: 'group',
    title: 'Sports Night with a Twist',
    principle: 'Physical activity is more meaningful when it builds brotherhood.',
    description:
      'Organize a quorum sports night (basketball, flag football, ultimate frisbee) but add a twist: teams are randomly assigned, and the focus is on sportsmanship and inclusion rather than winning. Debrief afterward: How did it feel to include everyone? How can we apply this at school?',
    tags: [],
  },

  // ═══════════════════════════════════════════════════════════════
  // DEACONS — EMOTIONAL (d-em-1 through d-em-5)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'd-em-1',
    quorum: 'deacons',
    dimension: 'emotional',
    type: 'group',
    title: 'Name It to Tame It: Emotions Workshop',
    principle: 'You can\'t manage emotions you can\'t identify.',
    description:
      'Introduce a basic emotions vocabulary beyond "happy," "sad," and "mad." Use an emotions wheel to identify more specific feelings: frustrated, anxious, disappointed, proud, grateful. Practice: "When _____ happens, I feel _____ because _____." Normalize that all emotions are okay — it\'s what we do with them that matters.',
    tags: [],
  },
  {
    id: 'd-em-2',
    quorum: 'deacons',
    dimension: 'emotional',
    type: 'personal',
    title: 'Gratitude Journal: 14 Days',
    principle: 'Gratitude rewires your brain to see the good in your life.',
    description:
      'Each deacon writes down 3 things he\'s grateful for every night for 14 days. They can be simple (good lunch, sunny day) or deep (loving parents, the gospel). At the end, share one entry with the quorum. Discuss how gratitude changes perspective and connects to faith.',
    tags: [],
  },
  {
    id: 'd-em-3',
    quorum: 'deacons',
    dimension: 'emotional',
    type: 'group',
    title: 'Friendship & Inclusion Challenge',
    principle: 'Being a friend — especially to the lonely — is Christlike service.',
    description:
      'Discuss: Who at school or church might feel left out? Brainstorm specific, actionable ways to include others (sit by someone new at lunch, invite someone to an activity, say hello in the hall). Each deacon commits to one specific act of inclusion this week and reports back.',
    tags: ['mission'],
  },
  {
    id: 'd-em-4',
    quorum: 'deacons',
    dimension: 'emotional',
    type: 'both',
    title: 'Dealing with Anger & Frustration',
    principle: 'Learning to pause before reacting is one of the most important skills in life.',
    description:
      'Discuss common anger triggers for 12–13 year olds: siblings, unfairness, losing, feeling disrespected. Teach the STOP method: Stop, Take a breath, Observe what you\'re feeling, Proceed thoughtfully. Role-play scenarios. Share scriptural examples of managing anger (e.g., Nephi vs. Laman & Lemuel).',
    tags: ['father'],
  },
  {
    id: 'd-em-5',
    quorum: 'deacons',
    dimension: 'emotional',
    type: 'group',
    title: 'Service Project: Serve Someone Who\'s Struggling',
    principle: 'Serving others is the fastest way to get out of your own head.',
    description:
      'Identify someone in the ward or community who could use help: an elderly member, a family going through a hard time, a neighbor. Plan and execute a service project as a quorum (yard work, meal delivery, cards of encouragement). Debrief: How did serving make you feel? How did it help the person?',
    tags: ['mission', 'father'],
  },

  // ═══════════════════════════════════════════════════════════════
  // TEACHERS — SPIRITUAL (t-sp-1 through t-sp-5)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 't-sp-1',
    quorum: 'teachers',
    dimension: 'spiritual',
    type: 'group',
    title: 'Home Teaching Preparation',
    principle: 'Ministering is the heart of the priesthood — learn it now.',
    description:
      'Discuss what it means to minister as a Teachers quorum. Role-play visiting a family: How do you start a conversation? How do you share a spiritual thought naturally? Practice preparing a 2-minute spiritual message. Pair up and plan a real ministering visit to complete this month.',
    tags: ['mission', 'father'],
  },
  {
    id: 't-sp-2',
    quorum: 'teachers',
    dimension: 'spiritual',
    type: 'personal',
    title: 'Personal Revelation Journal',
    principle: 'God speaks to you personally — learning to recognize His voice is essential.',
    description:
      'For 21 days, keep a "revelation journal." Each night, write down any moment you felt the Spirit, had a prompting, or noticed God\'s hand in your life. Even small things count. After 21 days, review your entries and look for patterns. Share one insight with the quorum (only what you\'re comfortable sharing).',
    tags: ['mission'],
  },
  {
    id: 't-sp-3',
    quorum: 'teachers',
    dimension: 'spiritual',
    type: 'group',
    title: 'Teach a Lesson: Peer Teaching',
    principle: 'You don\'t truly understand something until you can teach it.',
    description:
      'Each teacher prepares and delivers a 5-minute lesson to the quorum on an assigned gospel topic (faith, repentance, baptism, Holy Ghost, etc.). Provide a simple outline format. Give kind, specific feedback after each lesson. Discuss how this skill directly prepares them for missions and future leadership.',
    tags: ['mission'],
  },
  {
    id: 't-sp-4',
    quorum: 'teachers',
    dimension: 'spiritual',
    type: 'both',
    title: 'Fasting with Purpose',
    principle: 'Fasting is more than skipping meals — it\'s focused spiritual power.',
    description:
      'Teach the principles of fasting: why we fast, how to fast with a purpose, how to start and end a fast. Each teacher chooses a specific intention for his next fast (a family member\'s health, a personal challenge, gratitude). Fast together as a quorum on the same Sunday. Share experiences afterward.',
    tags: ['mission'],
  },
  {
    id: 't-sp-5',
    quorum: 'teachers',
    dimension: 'spiritual',
    type: 'group',
    title: 'Preparing the Sacrament: A Sacred Trust',
    principle: 'Preparing the sacrament is a sacred responsibility that symbolizes Christ\'s sacrifice.',
    description:
      'As teachers now prepare the sacrament, go deeper into the symbolism. Study the Last Supper and Gethsemane together. Discuss how the bread and water represent Christ\'s body and blood. Have each teacher write a personal reflection on what the sacrament means to him. Practice reverent, precise sacrament preparation.',
    tags: ['mission'],
  },

  // ═══════════════════════════════════════════════════════════════
  // TEACHERS — MENTAL (t-mn-1 through t-mn-5)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 't-mn-1',
    quorum: 'teachers',
    dimension: 'mental',
    type: 'group',
    title: 'Critical Thinking: Evaluating Information',
    principle: 'In a world of misinformation, thinking clearly is a superpower.',
    description:
      'Present real examples of misleading headlines, statistics, and social media claims. Teach how to evaluate sources: Who wrote it? What\'s the evidence? Is there another side? Practice with gospel-related examples too: anti-Church claims vs. faithful scholarship. Build the skill of thinking before reacting.',
    tags: ['career'],
  },
  {
    id: 't-mn-2',
    quorum: 'teachers',
    dimension: 'mental',
    type: 'personal',
    title: 'Learn a New Skill in 30 Days',
    principle: 'The ability to teach yourself something new is the most valuable skill of the 21st century.',
    description:
      'Each teacher picks a skill to learn in 30 days: basic coding, a musical instrument, a new language (10 phrases), drawing, typing faster, etc. Use free online resources. Check in weekly as a quorum to share progress and encourage each other. Present what you learned at month\'s end.',
    tags: ['career'],
  },
  {
    id: 't-mn-3',
    quorum: 'teachers',
    dimension: 'mental',
    type: 'group',
    title: 'Financial Literacy: Money Basics',
    principle: 'Understanding money now prevents financial stress later.',
    description:
      'Cover the basics: saving vs. spending, needs vs. wants, how interest works (both for savings and debt), and why paying tithing first is a principle of financial discipline. Create a simple budget for a hypothetical $200/month income. Discuss how financial literacy prepares for missions, college, and family life.',
    tags: ['career', 'father'],
  },
  {
    id: 't-mn-4',
    quorum: 'teachers',
    dimension: 'mental',
    type: 'both',
    title: 'Public Speaking Practice',
    principle: 'Clear communication opens doors in every area of life.',
    description:
      'Each teacher prepares and delivers a 3-minute talk on a topic of his choice (not necessarily gospel-related). Focus on structure (intro, body, conclusion), eye contact, and speaking clearly. Give supportive feedback. Discuss how this skill helps in school, missions, careers, and church service.',
    tags: ['mission', 'career'],
  },
  {
    id: 't-mn-5',
    quorum: 'teachers',
    dimension: 'mental',
    type: 'group',
    title: 'Time Management & Priorities',
    principle: 'How you spend your time reflects what you truly value.',
    description:
      'Teach the Eisenhower Matrix: urgent/important vs. not urgent/not important. Have each teacher map out how he spends a typical week, then identify one change to better align time with values. Discuss how seminary, scripture study, and service fit into a busy schedule. Create a weekly plan template.',
    tags: ['mission', 'career'],
  },

  // ═══════════════════════════════════════════════════════════════
  // TEACHERS — PHYSICAL (t-ph-1 through t-ph-5)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 't-ph-1',
    quorum: 'teachers',
    dimension: 'physical',
    type: 'group',
    title: 'Wilderness Survival Basics',
    principle: 'Self-reliance in the outdoors builds confidence and preparedness.',
    description:
      'Teach essential survival skills: building a fire safely, purifying water, basic shelter construction, and navigation without a phone. Practice in a backyard or local park. Discuss how physical preparedness connects to spiritual preparedness — being ready for whatever life brings.',
    tags: ['mission'],
  },
  {
    id: 't-ph-2',
    quorum: 'teachers',
    dimension: 'physical',
    type: 'personal',
    title: 'Personal Fitness Plan',
    principle: 'A healthy body supports a healthy mind and spirit.',
    description:
      'Each teacher creates a personalized fitness plan based on his interests and current fitness level. Include cardio, strength, and flexibility. Commit to following it for 4 weeks. Check in as a quorum — share progress, challenges, and tips. Discuss the Word of Wisdom\'s promise of "running and not being weary."',
    tags: ['mission'],
  },
  {
    id: 't-ph-3',
    quorum: 'teachers',
    dimension: 'physical',
    type: 'group',
    title: 'Meal Planning & Nutrition',
    principle: 'What you eat directly affects how you think, feel, and perform.',
    description:
      'Go beyond basic cooking: teach how to plan meals for a week, read nutrition labels, and understand macronutrients. Plan and cook a complete meal together as a quorum. Discuss the Word of Wisdom\'s dietary counsel and modern nutritional science. Each teacher plans one week of meals to try at home.',
    tags: ['mission', 'father'],
  },
  {
    id: 't-ph-4',
    quorum: 'teachers',
    dimension: 'physical',
    type: 'both',
    title: 'Sleep Hygiene Challenge',
    principle: 'Good sleep is the foundation of physical and mental health.',
    description:
      'Discuss why sleep matters: brain development, mood regulation, physical recovery. Teach sleep hygiene: consistent bedtime, no screens 30 minutes before bed, cool dark room. Challenge each teacher to follow a sleep routine for 2 weeks. Track hours slept and how they felt each day. Discuss results as a quorum.',
    tags: [],
  },
  {
    id: 't-ph-5',
    quorum: 'teachers',
    dimension: 'physical',
    type: 'group',
    title: 'Service Through Physical Labor',
    principle: 'Hard physical work in service of others builds character and strength.',
    description:
      'Organize a quorum service project that requires physical effort: moving a family, clearing a yard, cleaning up a park or trail, helping with a ward building project. Work hard for 2–3 hours. Debrief: How does physical labor feel different from other service? How did working together as a quorum change the experience?',
    tags: ['father'],
  },

  // ═══════════════════════════════════════════════════════════════
  // TEACHERS — EMOTIONAL (t-em-1 through t-em-5)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 't-em-1',
    quorum: 'teachers',
    dimension: 'emotional',
    type: 'group',
    title: 'Navigating Peer Pressure',
    principle: 'Standing firm in your values requires practice, not just willpower.',
    description:
      'Discuss common peer pressure situations for 14–15 year olds: substance use, cheating, inappropriate media, social media behavior. Role-play specific scenarios and practice actual responses (not just "say no" — give them real words). Discuss how the gospel provides a foundation for these decisions. Share stories of standing firm.',
    tags: ['mission'],
  },
  {
    id: 't-em-2',
    quorum: 'teachers',
    dimension: 'emotional',
    type: 'personal',
    title: 'Mindfulness & Stress Management',
    principle: 'Learning to calm your mind is a skill that will serve you forever.',
    description:
      'Introduce basic mindfulness: focused breathing, body scan, and being present. Practice a 5-minute guided mindfulness exercise together. Discuss how this connects to meditation and pondering in the gospel. Challenge each teacher to practice 5 minutes of mindfulness daily for 2 weeks. Journal about the experience.',
    tags: [],
  },
  {
    id: 't-em-3',
    quorum: 'teachers',
    dimension: 'emotional',
    type: 'group',
    title: 'Conflict Resolution Skills',
    principle: 'The ability to resolve conflicts peacefully is a mark of true maturity.',
    description:
      'Teach the basics of conflict resolution: active listening, "I" statements, finding common ground, and knowing when to walk away. Role-play common conflicts: disagreements with friends, siblings, parents, or at school. Discuss scriptural examples: how did the Savior handle conflict? What about Nephi and his brothers?',
    tags: ['father'],
  },
  {
    id: 't-em-4',
    quorum: 'teachers',
    dimension: 'emotional',
    type: 'both',
    title: 'Understanding & Supporting Mental Health',
    principle: 'Mental health struggles are real, common, and nothing to be ashamed of.',
    description:
      'Discuss common mental health challenges teenagers face: anxiety, depression, loneliness. Teach warning signs in yourself and friends. Provide resources: trusted adults, church leaders, crisis hotlines. Emphasize that seeking help is brave, not weak. Role-play: How do you respond when a friend says "I\'m not okay"?',
    tags: [],
  },
  {
    id: 't-em-5',
    quorum: 'teachers',
    dimension: 'emotional',
    type: 'group',
    title: 'Building Authentic Friendships',
    principle: 'Deep friendships require vulnerability, loyalty, and intentional effort.',
    description:
      'Discuss what makes a real friendship vs. a surface-level one. Activities: share something most people don\'t know about you (appropriate level). Discuss qualities of a good friend vs. a toxic friend. Make a quorum commitment to be genuinely supportive of each other. Plan a non-activity "hangout" — just being together.',
    tags: ['mission'],
  },

  // ═══════════════════════════════════════════════════════════════
  // PRIESTS — SPIRITUAL (p-sp-1 through p-sp-5)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'p-sp-1',
    quorum: 'priests',
    dimension: 'spiritual',
    type: 'group',
    title: 'Blessing the Sacrament: Sacred Words',
    principle: 'Speaking the sacrament prayers is one of the most sacred acts a young man performs.',
    description:
      'Study the sacrament prayers in depth: their origins (D&C 20), their exact wording, and why precision matters. Practice saying the prayers with reverence and clarity. Discuss the weight of this responsibility and how it connects to the Savior\'s Atonement. Each priest reflects on what he feels when blessing the sacrament.',
    tags: ['mission'],
  },
  {
    id: 'p-sp-2',
    quorum: 'priests',
    dimension: 'spiritual',
    type: 'personal',
    title: 'Preach My Gospel Study Plan',
    principle: 'Studying Preach My Gospel now gives you a massive head start on your mission.',
    description:
      'Create a 90-day study plan through key chapters of Preach My Gospel. Focus on the missionary lessons (chapters 3–5), but also study teaching skills, personal study habits, and Christlike attributes (chapter 6). Weekly quorum check-in to discuss what you\'re learning. Practice teaching lessons to each other.',
    tags: ['mission'],
  },
  {
    id: 'p-sp-3',
    quorum: 'priests',
    dimension: 'spiritual',
    type: 'group',
    title: 'Performing Baptisms for the Dead',
    principle: 'Performing baptisms in the temple connects you to God\'s plan for all His children.',
    description:
      'Organize a temple trip for baptisms for the dead. Before the trip, study the doctrine of vicarious ordinances: Why do we do this? What does it mean for those who\'ve passed? Each priest prepares family names through FamilySearch. After the trip, discuss how it felt and what they learned about the plan of salvation.',
    tags: ['mission', 'father'],
  },
  {
    id: 'p-sp-4',
    quorum: 'priests',
    dimension: 'spiritual',
    type: 'both',
    title: 'Personal Conversion: Owning Your Faith',
    principle: 'At some point, your testimony must become yours — not your parents\' or leaders\'.',
    description:
      'Honest discussion about the transition from "inherited faith" to "personal conviction." Discuss doubts, questions, and how to navigate them faithfully. Study Alma 32 (experimenting on the word). Each priest identifies one area where he wants to deepen his personal conviction and creates a plan to do so.',
    tags: ['mission'],
  },
  {
    id: 'p-sp-5',
    quorum: 'priests',
    dimension: 'spiritual',
    type: 'group',
    title: 'Leading by Example: Priesthood Leadership',
    principle: 'True priesthood leadership is about serving, not commanding.',
    description:
      'Study D&C 121:34–46 together — the principles of righteous priesthood leadership. Discuss: What does it look like to lead by persuasion, long-suffering, and love unfeigned? Each priest identifies a leadership opportunity in his life (quorum, school, family) and sets a goal to lead more like Christ.',
    tags: ['mission', 'father'],
  },

  // ═══════════════════════════════════════════════════════════════
  // PRIESTS — MENTAL (p-mn-1 through p-mn-5)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'p-mn-1',
    quorum: 'priests',
    dimension: 'mental',
    type: 'group',
    title: 'College & Career Exploration',
    principle: 'Understanding your options empowers you to make inspired decisions about your future.',
    description:
      'Research and present different post-high-school paths: university, trade school, military, entrepreneurship, mission timing. Invite ward members with different career paths to share their journeys. Each priest identifies 2–3 areas of interest and researches what preparation they require. Discuss how missions enhance career readiness.',
    tags: ['career', 'mission'],
  },
  {
    id: 'p-mn-2',
    quorum: 'priests',
    dimension: 'mental',
    type: 'personal',
    title: 'Deep Dive: Study a Topic for 30 Days',
    principle: 'Deep knowledge in any area builds the discipline and thinking skills that transfer everywhere.',
    description:
      'Each priest picks a topic he\'s genuinely curious about and studies it intensely for 30 days: a historical period, a scientific field, a programming language, a gospel topic, etc. Use books, podcasts, videos, and experts. Present a 10-minute "TED talk" to the quorum at month\'s end.',
    tags: ['career'],
  },
  {
    id: 'p-mn-3',
    quorum: 'priests',
    dimension: 'mental',
    type: 'group',
    title: 'Defending Your Faith: Apologetics Basics',
    principle: 'A prepared mind can respond to challenges with confidence and kindness.',
    description:
      'Discuss common questions and challenges to the Church: Book of Mormon historicity, Joseph Smith, social issues, science and religion. Practice responding with facts, testimony, and respect. Use FAIR resources and Gospel Topics essays. Role-play conversations with a curious or skeptical friend. Emphasize: seeking truth, not winning arguments.',
    tags: ['mission'],
  },
  {
    id: 'p-mn-4',
    quorum: 'priests',
    dimension: 'mental',
    type: 'both',
    title: 'Personal Finance: Budgeting & Saving',
    principle: 'Financial independence starts with habits you build as a teenager.',
    description:
      'Go beyond basics: teach budgeting with real income (if they have jobs), the power of compound interest, emergency funds, and avoiding debt. Each priest creates a real budget for his current situation. Discuss how tithing and fast offerings fit in. Set a savings goal and track progress for 3 months.',
    tags: ['career', 'father'],
  },
  {
    id: 'p-mn-5',
    quorum: 'priests',
    dimension: 'mental',
    type: 'group',
    title: 'AI & Technology Ethics',
    principle: 'Understanding technology\'s impact helps you use it wisely and prepare for the future.',
    description:
      'Explore how AI, social media algorithms, and technology are shaping society. Discuss ethical questions: privacy, deepfakes, job displacement, responsible use. How does the gospel inform our approach to technology? Each priest identifies one way he\'ll be more intentional with technology this month.',
    tags: ['career'],
  },

  // ═══════════════════════════════════════════════════════════════
  // PRIESTS — PHYSICAL (p-ph-1 through p-ph-5)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'p-ph-1',
    quorum: 'priests',
    dimension: 'physical',
    type: 'group',
    title: 'Advanced Outdoor Skills: Backpacking Trip',
    principle: 'Extended time in nature builds resilience, teamwork, and self-reliance.',
    description:
      'Plan and execute an overnight (or multi-day) backpacking trip. Priests handle planning: route selection, gear lists, meal planning, safety protocols. On the trail, practice Leave No Trace principles. Include morning and evening devotionals. Debrief: What did you learn about yourself? How did the quorum work as a team?',
    tags: ['mission'],
  },
  {
    id: 'p-ph-2',
    quorum: 'priests',
    dimension: 'physical',
    type: 'personal',
    title: 'Master a Physical Skill',
    principle: 'Mastery of any physical skill teaches discipline, patience, and the value of consistent practice.',
    description:
      'Each priest chooses a physical skill to develop over 3 months: a specific sport technique, martial arts basics, swimming proficiency, rock climbing, yoga, etc. Set measurable milestones. Report progress to the quorum monthly. At the end, demonstrate improvement. Discuss how physical discipline parallels spiritual discipline.',
    tags: [],
  },
  {
    id: 'p-ph-3',
    quorum: 'priests',
    dimension: 'physical',
    type: 'group',
    title: 'Home Repair & Maintenance Basics',
    principle: 'Every man should be able to maintain his home — it\'s a form of stewardship.',
    description:
      'Teach practical skills: changing a tire, unclogging a drain, basic electrical safety, painting a wall, mowing/edging, using basic tools. Organize a "skills stations" activity where they rotate through hands-on challenges. Discuss how these skills serve your future family and community. Identify ward members who need home repairs and help them.',
    tags: ['father'],
  },
  {
    id: 'p-ph-4',
    quorum: 'priests',
    dimension: 'physical',
    type: 'both',
    title: 'Vehicle Basics: Car Care 101',
    principle: 'Understanding your vehicle prevents breakdowns and saves money.',
    description:
      'For priests who are driving (or about to): teach how to check oil, tire pressure, coolant, and windshield fluid. How to change a tire. What dashboard warning lights mean. Basic maintenance schedules. Practice in a parking lot with a willing car. For non-drivers: bicycle maintenance is a great alternative.',
    tags: ['career'],
  },
  {
    id: 'p-ph-5',
    quorum: 'priests',
    dimension: 'physical',
    type: 'group',
    title: 'Emergency Preparedness: 72-Hour Kit',
    principle: 'Being physically prepared for emergencies is a principle of self-reliance.',
    description:
      'Each priest builds a basic 72-hour emergency kit: water, food, first aid, flashlight, hygiene items, copies of important documents. Discuss family emergency plans and the Church\'s emphasis on preparedness. Test kits with a mock scenario. Teach how to help neighbors and community in a real emergency.',
    tags: ['father'],
  },

  // ═══════════════════════════════════════════════════════════════
  // PRIESTS — EMOTIONAL (p-em-1 through p-em-5)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'p-em-1',
    quorum: 'priests',
    dimension: 'emotional',
    type: 'group',
    title: 'Preparing for Relationships: Healthy Dating',
    principle: 'Understanding healthy relationships now prevents heartbreak and poor decisions later.',
    description:
      'Discuss what healthy dating looks like at 16–18: respect, boundaries, communication, and the law of chastity in practical terms. Talk about red flags in relationships. Discuss how to treat a date with respect and dignity. Role-play asking someone on a date, setting boundaries, and handling rejection gracefully.',
    tags: ['father'],
  },
  {
    id: 'p-em-2',
    quorum: 'priests',
    dimension: 'emotional',
    type: 'personal',
    title: 'Emotional Intelligence Self-Assessment',
    principle: 'Knowing your emotional strengths and weaknesses is the foundation of personal growth.',
    description:
      'Take a simple emotional intelligence assessment (provide a worksheet). Identify areas of strength and areas for growth in: self-awareness, self-regulation, empathy, social skills, and motivation. Create a personal development plan for one area. Check in monthly with a leader or mentor.',
    tags: ['career', 'father'],
  },
  {
    id: 'p-em-3',
    quorum: 'priests',
    dimension: 'emotional',
    type: 'group',
    title: 'Hard Conversations: Communication Skills',
    principle: 'The ability to have difficult conversations with honesty and compassion defines great men.',
    description:
      'Practice having hard conversations: apologizing sincerely, expressing disagreement respectfully, asking for help, admitting mistakes, setting boundaries. Use "I feel... when... because..." framework. Role-play real scenarios: telling a friend they\'re making a bad choice, talking to parents about a problem, resolving a conflict with a sibling.',
    tags: ['mission', 'father'],
  },
  {
    id: 'p-em-4',
    quorum: 'priests',
    dimension: 'emotional',
    type: 'both',
    title: 'Identity & Self-Worth: Knowing Who You Are',
    principle: 'Your identity as a son of God is the anchor when life gets confusing.',
    description:
      'Deep discussion about identity: Who are you beyond your grades, sports stats, or social media? Explore the tension between worldly identity (popularity, achievement) and divine identity (son of God, covenant keeper). Each priest writes a personal "identity statement" based on the Young Men theme. Discuss how this anchors you when facing difficult choices.',
    tags: ['mission'],
  },
  {
    id: 'p-em-5',
    quorum: 'priests',
    dimension: 'emotional',
    type: 'group',
    title: 'Mentoring the Younger Quorums',
    principle: 'Teaching others what you\'ve learned is the highest form of emotional maturity.',
    description:
      'Each priest is paired with a deacon or teacher to mentor for one month. Meet weekly (even 15 minutes). Share what you\'ve learned, answer questions, be a friend. At the end, both the priest and the younger quorum member share what they gained. Discuss how mentoring prepares you for fatherhood and mission leadership.',
    tags: ['mission', 'father'],
  },
]

export function getByQuorumAndDimension(q: Quorum, d: Dimension): Activity[] {
  return activities.filter((a) => a.quorum === q && a.dimension === d)
}

export function getAllForQuorum(q: Quorum): Activity[] {
  return activities.filter((a) => a.quorum === q)
}
