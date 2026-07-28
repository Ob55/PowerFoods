// Expandable content for each guide card shown on a Resource Center page.
// Keyed by category slug. Titles must match the `guides` list in categories.ts.
// Content is evidence-informed, educational, and not medical advice.

export interface GuideEntry {
  title: string;
  content: string;
}

export const guideContent: Record<string, GuideEntry[]> = {
  "healthy-eating": [
    {
      title: "Building a Balanced Plate Without Counting",
      content:
        "You don't need to weigh food or count calories to eat well. A simple, reliable template is to fill half your plate with vegetables and fruit, a quarter with a protein (beans, fish, eggs, poultry or tofu), and a quarter with a whole-grain or starchy carbohydrate, then add a little healthy fat. This balance keeps blood sugar steadier, keeps you fuller for longer, and covers most of your nutrient needs automatically — so you can eat by sight and appetite instead of by numbers.",
    },
    {
      title: "Foods That Support a Healthy Gut",
      content:
        "Your gut runs on fibre and fermentation. Feed the friendly bacteria with plant variety — aim for a wide range of vegetables, fruit, whole grains, beans, nuts and seeds across the week (many people use '30 different plants a week' as a target). Add fermented foods such as plain yoghurt, kefir, sauerkraut, kimchi or miso for live cultures, drink enough water, and go easy on ultra-processed foods. Changes are gradual, so increase fibre slowly to avoid bloating.",
    },
    {
      title: "Anti-Inflammatory Eating Made Simple",
      content:
        "An anti-inflammatory pattern isn't a strict diet — it's a direction. Lean toward colourful vegetables and fruit, oily fish, extra-virgin olive oil, nuts, seeds, beans and whole grains, and herbs and spices like turmeric and ginger. Lean away from heavily processed foods, excess added sugar, and refined carbohydrates. This is essentially the Mediterranean way of eating, which research consistently links with better long-term heart and metabolic health.",
    },
    {
      title: "Heart-Healthy Eating Without the Confusion",
      content:
        "The headlines change, but the core advice is stable: eat more plants, fibre, and unsaturated fats, and less salt, added sugar, and ultra-processed food. Swap butter for olive oil, red and processed meat for fish, beans or poultry, and refined grains for whole ones. Keep salt down by cooking more at home, and let vegetables, fruit and oats do the heavy lifting for cholesterol and blood pressure.",
    },
    {
      title: "Understanding Fiber and Whole Grains",
      content:
        "Fibre is the part of plants you don't fully digest, and it's one of the most under-eaten nutrients. Soluble fibre (oats, beans, apples) helps steady blood sugar and lower cholesterol, while insoluble fibre (whole grains, vegetable skins) keeps digestion regular. Most adults fall short of the recommended ~25–30g a day. Choose whole grains over refined, keep skins on produce, and add beans and lentils to reach it comfortably.",
    },
    {
      title: "Healthy Fats: What to Choose and Why",
      content:
        "Fat isn't the enemy — the type matters. Favour unsaturated fats from olive oil, avocado, nuts, seeds and oily fish, which support heart and brain health. Limit saturated fat (fatty and processed meats, butter, many baked goods) and avoid industrial trans fats where you can. Fat also helps you absorb vitamins A, D, E and K, so a little healthy fat with vegetables is a good thing.",
    },
    {
      title: "Cooking Methods That Preserve Nutrition",
      content:
        "How you cook affects how much nutrition survives. Steaming, sautéing, roasting and quick stir-frying tend to preserve more vitamins than prolonged boiling, which leaches water-soluble vitamins into the water. Use minimal water, cook vegetables until just tender, and keep skins on where possible. Pairing vegetables with a little healthy fat improves absorption of fat-soluble nutrients.",
    },
    {
      title: "How to Read Food Labels With Confidence",
      content:
        "Start with the ingredients list — it's ordered by weight, so the first few items tell you what the product mostly is, and a short list of recognisable ingredients is usually a good sign. Then scan the nutrition panel for added sugars, sodium and saturated fat, and check the serving size, since numbers are per serving, not per pack. Don't be swayed by front-of-pack claims like 'natural' or 'light'; the back of the pack tells the real story.",
    },
    {
      title: "Eating With the Seasons",
      content:
        "Seasonal produce is usually fresher, cheaper, and at its peak for flavour and nutrients. Eating with the seasons also naturally rotates your plants across the year, which supports variety and gut health. In cooler months lean on roots, squashes, hearty greens and warming soups; in warmer months enjoy lighter salads, berries and stone fruit. Local and in-season is a simple rule that quietly improves quality.",
    },
    {
      title: "Common Nutrition Myths",
      content:
        "A few myths refuse to die: that carbs are inherently fattening, that 'detox' teas cleanse you, that eating fat makes you fat, or that healthy eating must be expensive. In reality, whole-food carbs are valuable, your liver and kidneys handle detox, healthy fats are essential, and beans, oats, frozen vegetables and eggs are budget-friendly staples. Be sceptical of anything promising fast, dramatic results.",
    },
  ],

  fitness: [
    {
      title: "Building a Gentle Movement Routine That Lasts",
      content:
        "The best routine is the one you'll actually repeat. Start smaller than feels necessary — a 10-minute walk, a few stretches, one short session — and anchor it to something you already do daily. Consistency beats intensity: three easy sessions you keep are worth more than an ambitious plan you abandon in a week. Add a little as it becomes automatic, and expect progress to be gradual.",
    },
    {
      title: "Walking as Everyday Exercise",
      content:
        "Walking is the most underrated exercise there is — free, joint-friendly, and easy to fit in. It supports heart health, mood, blood sugar and healthy weight without any equipment. You don't need 10,000 steps; even 6,000–8,000 a day is linked with meaningful benefits, and short 'movement snacks' after meals help too. Brisk enough to feel slightly breathless but still able to talk is a good pace.",
    },
    {
      title: "Warming Up and Cooling Down Safely",
      content:
        "A few minutes of easy movement before exercise raises your temperature and prepares muscles and joints, lowering injury risk. Favour dynamic warm-ups (gentle leg swings, arm circles, a slow walk building to pace) rather than long static stretches on cold muscles. Afterwards, cool down with a slower pace and some gentle stretching while warm. Never push through sharp pain — discomfort is fine, pain is a signal to stop.",
    },
    {
      title: "Foods That Support Recovery",
      content:
        "Recovery is when your body actually adapts and gets stronger. Support it with enough protein spread across the day, plenty of colourful plants for antioxidants, and good hydration. A combination of carbohydrate and protein after longer or harder sessions helps refuel and repair. Sleep, however, is the real recovery superpower — no food replaces it.",
    },
    {
      title: "Protecting Your Joints as You Move",
      content:
        "Movement is good for joints — motion nourishes cartilage — but technique and progression matter. Increase load and distance gradually, choose supportive footwear, and mix higher-impact activity with lower-impact options like walking, cycling or swimming. Building the muscles around a joint improves its stability, and staying at a healthy weight reduces the load on knees and hips. Warm, nourishing foods are traditionally used to support comfortable movement.",
    },
    {
      title: "Building Everyday Strength Without a Gym",
      content:
        "Strength training matters at every age — it protects muscle, bone and metabolism, and it keeps everyday tasks easy. You can build it at home with bodyweight moves (squats, sit-to-stands, wall push-ups, lunges), resistance bands, or household items. Aim for two sessions a week covering major muscle groups, working to a point where the last couple of repetitions feel challenging. Progress by adding reps, sets or resistance over time.",
    },
    {
      title: "Improving Mobility and Balance",
      content:
        "Mobility (moving joints freely) and balance are 'use it or lose it' skills that protect independence as you age. Gentle daily practices — hip and shoulder circles, calf and hamstring stretches, standing on one leg while you brush your teeth — pay off quickly. Tai chi and yoga are especially good for balance and coordination. Practise near a support at first, and progress as you feel steadier.",
    },
    {
      title: "Gentle Movement: Stretching and Qi Gong",
      content:
        "Not all exercise is vigorous. Slow, mindful practices like stretching, yoga and Qi Gong combine gentle movement with breath, improving flexibility, calm and body awareness. They're accessible at almost any age or fitness level and are a good complement to walking or strength work. Even a few minutes of gentle flowing movement can ease stiffness and settle the nervous system.",
    },
    {
      title: "Staying Active on a Busy Schedule",
      content:
        "When time is tight, drop the all-or-nothing thinking and use 'movement snacks' — short bursts scattered through the day. Take the stairs, walk part of your commute, stretch during calls, or do a five-minute routine between tasks. These add up and count. Scheduling movement like an appointment, and pairing it with existing habits, makes it far more likely to happen.",
    },
    {
      title: "Common Fitness Myths",
      content:
        "Popular myths hold people back: 'no pain, no gain', spot-reduction of belly fat, needing a gym or hours a day, or the idea that strength training makes you bulky. In truth, moderate consistent movement beats occasional punishing sessions, you can't target fat loss in one area, short home workouts work, and strength training mainly makes you stronger and more toned. Rest days are part of the plan, not a failure.",
    },
  ],

  "weight-management": [
    {
      title: "Understanding Calories Without Obsessing Over Them",
      content:
        "Weight change comes down to energy balance over time, but that doesn't mean you must count every calorie. Understanding the concept helps you make sense of hunger and portions, while focusing on food quality — protein, fibre and whole foods — naturally regulates how much you eat. Obsessive tracking can backfire for many people. Awareness, not perfection, is the goal.",
    },
    {
      title: "Why Protein Helps You Feel Full",
      content:
        "Protein is the most satiating nutrient — it keeps you fuller for longer and helps preserve muscle when you're losing weight. Including a protein source at each meal (eggs, yoghurt, beans, fish, poultry, tofu) steadies appetite and reduces snacking. It also has a higher 'thermic effect', meaning your body uses a little more energy digesting it. Spreading protein across the day works better than one big serving.",
    },
    {
      title: "Fiber: One of the Most Overlooked Nutrients",
      content:
        "Fibre is a quiet ally for healthy weight. It adds bulk and slows digestion, so meals are more filling and blood sugar is steadier, which curbs cravings. High-fibre foods — vegetables, fruit, beans, oats, whole grains — also tend to be lower in calories for their volume. Most people eat far too little, so gradually adding fibre (with water) is one of the simplest high-impact changes.",
    },
    {
      title: "Healthy Portion Sizes Made Simple",
      content:
        "Portions have quietly grown over the years, which makes 'normal' hard to judge. Simple visual cues help: a palm of protein, a fist of carbohydrates, a thumb of fats, and two handfuls of vegetables. Using smaller plates, eating slowly, and pausing before seconds all help you notice fullness. This is about awareness, not restriction — you're matching intake to appetite, not policing it.",
    },
    {
      title: "How Sleep Influences Weight Management",
      content:
        "Sleep is an underrated part of weight management. Too little sleep disrupts the hunger hormones (raising ghrelin, lowering leptin), increases cravings for high-calorie food, and saps the energy and willpower you need for good choices. Prioritising 7–9 hours makes healthy eating and movement dramatically easier. Fixing sleep often does more than any diet tweak.",
    },
    {
      title: "Stress Eating: Why It Happens and What You Can Do",
      content:
        "Stress eating is a normal response, not a personal failing — stress hormones and the comfort of food are wired into us. The key is to notice the pattern and add a pause: name the feeling, and try a non-food response first (a short walk, a few slow breaths, a glass of water, a chat). Keeping tempting foods less accessible and eating regular, satisfying meals reduces the urge. Be kind to yourself; guilt tends to fuel the cycle.",
    },
    {
      title: "Why Crash Diets Usually Don't Work",
      content:
        "Very restrictive diets can produce fast early loss, but they're hard to sustain and often cost you muscle along with fat. When you stop, weight usually returns — sometimes with interest — and repeated cycles can be discouraging and unhealthy. Slower, steadier change built on habits you can keep is less dramatic but far more likely to last. Aim for a pace you could imagine maintaining for life.",
    },
    {
      title: "Walking for Healthy Weight Management",
      content:
        "Walking is one of the most sustainable tools for managing weight. It burns energy, is gentle on the body, and — crucially — is easy to keep doing long-term. Daily walks, especially after meals, help with blood sugar and appetite, and they layer on top of other activity. It won't out-run a poor diet, but paired with good eating it's a powerful, low-barrier habit.",
    },
    {
      title: "Building Healthy Eating Habits That Last",
      content:
        "Lasting results come from habits, not heroics. Change one thing at a time, make the healthy option the easy option (stock the fridge, prep ahead, keep tempting foods out of sight), and build routines around meals. Expect imperfect days and simply continue — consistency over weeks and months is what moves the needle. Small wins that stick beat big changes that don't.",
    },
    {
      title: "Maintaining Weight After Reaching Your Goal",
      content:
        "Maintenance is a skill of its own, and reaching a goal is really the start of it. Keep the habits that got you there rather than reverting to old patterns, weigh or check in occasionally to catch drift early, and stay active. Expect small fluctuations — a few pounds up and down is normal. The aim is a comfortable, sustainable rhythm you don't have to think hard about.",
    },
  ],

  "better-sleep": [
    {
      title: "Understanding Sleep Hygiene",
      content:
        "Sleep hygiene is the set of daily habits and environmental factors that make good sleep more likely. The essentials: keep a consistent sleep and wake time (even on weekends), make your bedroom cool, dark and quiet, reserve the bed for sleep, and wind down before bed rather than working or scrolling right up to lights-out. Get natural light in the morning and limit bright screens at night. None of these is dramatic on its own, but together they set the stage for consistent, restful sleep.",
    },
    {
      title: "How Your Diet May Influence Sleep Quality",
      content:
        "What and when you eat affects how you sleep. Large, heavy or spicy meals late at night can cause discomfort and disrupt sleep, so aim to eat your main meal a few hours before bed. Some foods provide sleep-supportive nutrients — for example dairy, oats, nuts and kiwi — while a light snack can help if hunger keeps you awake. Alcohol may help you fall asleep but fragments sleep later in the night.",
    },
    {
      title: "The Effects of Caffeine on Sleep",
      content:
        "Caffeine is a stimulant with a long tail: it has a half-life of around 5–6 hours, so an afternoon coffee can still be in your system at bedtime. Even if you fall asleep, late caffeine can reduce deep sleep and quality. A practical rule is to stop caffeine by early afternoon, and remember it hides in tea, cola, chocolate and some medications. Sensitivity varies, so notice how it affects you personally.",
    },
    {
      title: "Building a Bedtime Routine That Works",
      content:
        "A consistent wind-down routine signals your brain that sleep is coming. Spend the last 30–60 minutes on calming, screen-light activities — dimming lights, a warm shower, reading, gentle stretching, or slow breathing. Doing similar steps in the same order each night builds a strong cue over time. Keep the routine simple enough that you'll actually do it when you're tired.",
    },
    {
      title: "Stress and Sleep",
      content:
        "Stress and sleep feed each other: a busy, anxious mind makes it hard to drop off, and poor sleep makes you more reactive to stress the next day. Breaking the cycle starts before bed — try offloading worries onto paper, a short breathing or relaxation practice, or a 'to-do' list so your mind can let go. If you wake in the night, avoid clock-watching and keep the lights low. Managing daytime stress pays off at night.",
    },
    {
      title: "Morning Habits That Support Better Sleep",
      content:
        "Good sleep starts in the morning. Getting bright, natural light soon after waking anchors your body clock and makes you sleepier at the right time that night. A consistent wake time — even after a poor night — stabilises your rhythm, and morning movement helps too. Going easy on very late caffeine and long naps protects your sleep drive for the evening.",
    },
    {
      title: "Sleep as You Age",
      content:
        "Sleep naturally changes with age: it often becomes lighter and more easily interrupted, and timing may shift earlier. Needing 7–9 hours doesn't disappear, but getting it can take more attention to habits and daytime light and activity. Waking occasionally is normal; persistent problems are not just 'old age' and are worth discussing with a professional. Consistent routines matter even more over time.",
    },
    {
      title: "Common Sleep Myths",
      content:
        "Several sleep myths cause harm: that you can 'catch up' fully on weekends, that alcohol is a good sleep aid, that everyone needs exactly eight hours, or that lying in bed trying hard will make sleep come. In reality, catch-up is only partial, alcohol worsens sleep quality, needs vary from person to person, and if you can't sleep it's better to get up briefly and return when drowsy. Chasing sleep tends to push it away.",
    },
  ],

  "mental-wellness": [
    {
      title: "Understanding Stress: What Happens Inside Your Body?",
      content:
        "Stress is your body's built-in alarm system. When your brain senses a demand, it releases adrenaline and cortisol, raising heart rate and sharpening focus — useful in short bursts. The problem is chronic, unrelieved stress, which keeps the system switched on and can affect sleep, mood, digestion and immunity. Understanding this 'fight-or-flight' response makes it easier to use calming tools that switch the body back to 'rest-and-digest'.",
    },
    {
      title: "Nutrition and Mental Wellness",
      content:
        "The food–mood connection is real. Steady blood sugar from balanced meals helps avoid the irritability of crashes, and the gut produces much of the body's serotonin, so gut-friendly eating may support mood. Patterns rich in vegetables, fish, whole grains and healthy fats are linked with better mental wellbeing, while heavy ultra-processed diets are linked with worse. Enough water, and not too much alcohol or caffeine, help too.",
    },
    {
      title: "Exercise and Mood",
      content:
        "Movement is one of the most reliable mood boosters available. Exercise releases endorphins, lowers stress hormones, improves sleep, and provides a sense of accomplishment — and you don't need much. Even a brisk walk, especially outdoors, can lift mood noticeably. Regular, moderate activity is associated with lower rates of anxiety and low mood; the best type is simply the one you enjoy enough to keep doing.",
    },
    {
      title: "Digital Wellness",
      content:
        "Technology is useful, but constant connection can fragment attention and fuel comparison and stress. Small boundaries help: turn off non-essential notifications, keep phones out of the bedroom, take regular screen breaks, and be intentional about social media rather than scrolling on autopilot. Protecting pockets of undistracted time — for people, nature or rest — is good for both focus and mood.",
    },
    {
      title: "Building Healthy Daily Routines",
      content:
        "Routines reduce the mental load of constant decisions and give the day a reassuring structure. Consistent wake and sleep times, regular meals, planned movement, and a little time for things you value create stability that supports emotional wellbeing. Routines also make healthy choices more automatic. Keep them flexible enough to bend on hard days without breaking.",
    },
    {
      title: "Healthy Ways to Manage Stress",
      content:
        "Healthy coping means having reliable, non-harmful ways to discharge and soothe stress. A toolkit might include slow breathing, movement, time in nature, connecting with people, journaling, or mindfulness. Problem-focused steps (breaking a task down, asking for help) tackle the source, while calming practices settle the body. Building these in before you're overwhelmed makes them far easier to reach for.",
    },
    {
      title: "Brain Health Across the Lifespan",
      content:
        "The same habits that protect your heart largely protect your brain: regular movement, good sleep, a nourishing diet, staying socially connected, and keeping mentally engaged. Managing stress and limiting alcohol help too. It's never too early or too late to benefit, and small consistent habits compound over the years. Lifelong curiosity and connection are genuinely protective.",
    },
    {
      title: "Common Mental Wellness Myths",
      content:
        "Unhelpful myths persist: that stress is always bad, that you should be able to 'think positive' your way out of anything, that asking for help is weak, or that mental wellbeing is fixed. In reality, some stress is normal and even useful, feelings need acknowledging not just overriding, seeking support is a strength, and wellbeing can be built with habits and, when needed, professional help. Lifestyle supports mental health but does not replace care when it's needed.",
    },
  ],

  "healthy-habits": [
    {
      title: "How Habits Are Formed: The Science Behind Lasting Change",
      content:
        "Habits run on a loop: a cue triggers a routine that delivers a reward, and repetition wires it in. To build one, make it obvious (attach it to an existing cue), easy (shrink it so it's almost too small to skip), and satisfying (notice the win). To break one, add friction and remove the cue. Change is gradual and rarely perfectly linear, so focus on repetition over motivation.",
    },
    {
      title: "Building a Healthy Morning Routine",
      content:
        "A calm, consistent morning sets the tone for the day. A simple version: wake at a regular time, get some natural light, hydrate, move your body a little, and eat something balanced. You don't need an elaborate hour-long ritual — a few anchored habits are enough. Prepping the night before (clothes, breakfast, plan) makes mornings smoother.",
    },
    {
      title: "Creating an Evening Routine for Better Recovery",
      content:
        "Evenings are for winding down and setting up tomorrow. Dim the lights, ease off screens, and do something calming an hour before bed, while a quick tidy or tomorrow's to-do list clears mental clutter. Keeping a consistent bedtime protects your sleep and, with it, your recovery. A predictable wind-down is one of the highest-return habits you can build.",
    },
    {
      title: "Healthy Habits That Take Less Than 10 Minutes",
      content:
        "Big results often come from tiny habits. A ten-minute walk, a glass of water on waking, a few stretches, a short breathing practice, prepping a healthy snack, or a couple of minutes of tidying all take almost no time yet compound over weeks. Because they're small, they survive busy days. Stack a new one onto something you already do to help it stick.",
    },
    {
      title: "Meal Planning Made Simple",
      content:
        "A little planning removes the daily 'what's for dinner?' stress and cuts down on impulse choices. Keep it light: pick a few reliable meals, write a short shopping list, and prep a component or two ahead (cook a grain, chop vegetables, batch a sauce). Keeping healthy staples on hand means a good meal is always within reach. Aim for repeatable, not fancy.",
    },
    {
      title: "Staying Active During a Busy Day",
      content:
        "You can weave activity into a full day without 'working out'. Take stairs, walk or cycle short trips, stand and stretch on calls, park further away, and use short breaks for movement snacks. These fragments genuinely add up for health. Building them into things you already do makes them effortless to sustain.",
    },
    {
      title: "Healthy Hydration Habits",
      content:
        "Even mild dehydration can dent energy, focus and mood. Most people do well drinking to thirst and aiming for pale-yellow urine, with more needed in heat or with exercise. Make it easy: keep a bottle in view, drink a glass at routine moments (waking, meals), and flavour water with fruit or herbs if plain is dull. Water-rich foods and most drinks count toward your total.",
    },
    {
      title: "Building a Healthy Home Environment",
      content:
        "Your surroundings shape your behaviour more than willpower does. Make healthy choices the easy ones: keep nourishing foods visible and treats out of sight, leave walking shoes by the door, keep the bedroom cool, dark and screen-free, and reduce clutter that adds stress. Designing your environment means you rely less on daily discipline.",
    },
    {
      title: "Digital Wellness: Creating Healthier Technology Habits",
      content:
        "Being intentional with technology protects attention, sleep and mood. Turn off non-essential notifications, set screen-free times (especially before bed and at meals), and use tools like greyscale or app limits to break autopilot scrolling. Charge your phone outside the bedroom to protect sleep. The goal isn't to reject technology but to make it serve you.",
    },
    {
      title: "Why Consistency Matters More Than Motivation",
      content:
        "Motivation is a nice bonus but an unreliable foundation — it comes and goes. Consistency, driven by systems, routines and environment, is what produces results over time. Showing up in a small way on the days you don't feel like it matters more than big efforts on the days you do. Aim to never miss twice, and let repetition carry you.",
    },
  ],

  beauty: [
    {
      title: "Foods That Support Healthy Skin",
      content:
        "Skin reflects overall health, and nutrition plays a real supporting role. Colourful vegetables and fruit supply antioxidants; oily fish, nuts and seeds provide healthy fats that support the skin barrier; and adequate protein and vitamin C are needed to make collagen. A varied, mostly whole-food diet does more for skin over time than any single 'superfood'. Very high-sugar, ultra-processed diets, by contrast, are linked with more skin issues for some people.",
    },
    {
      title: "Understanding the Skin Barrier",
      content:
        "Your skin barrier is the outermost layer that locks moisture in and keeps irritants out. When it's healthy, skin feels comfortable and resilient; when it's damaged — by over-washing, harsh products or over-exfoliating — skin can become dry, sensitive or reactive. Protect it with gentle cleansing, regular moisturising, and not overdoing active ingredients. Simpler routines are often kinder to the barrier.",
    },
    {
      title: "Nutrition and Hair Health",
      content:
        "Hair is largely protein, so adequate protein matters, along with iron, zinc, biotin and overall balanced nutrition. Crash diets and nutrient shortfalls are common, under-recognised causes of hair thinning or shedding. For most people a varied whole-food diet covers the bases, and supplements only help if you're genuinely deficient. Persistent hair loss is worth discussing with a professional rather than self-treating.",
    },
    {
      title: "Hydration and Skin Health",
      content:
        "Hydration supports skin from the inside and the outside. Drinking enough water helps overall skin function, though 'drink water for glowing skin' is often oversold — topical moisturisers do the direct work of holding water in the skin. The best approach combines both: stay well hydrated and moisturise regularly, especially after washing. Humidity, wind and harsh cleansers all affect how much moisture skin keeps.",
    },
    {
      title: "Everyday Habits That Support Healthy Skin",
      content:
        "Beyond products, daily habits shape skin. Enough sleep supports repair, stress management reduces flare-ups for some conditions, not smoking preserves collagen, and a gentle, consistent routine beats an aggressive one. Daily sun protection is the single most effective anti-ageing habit. Consistency, again, matters more than any one expensive step.",
    },
    {
      title: "Understanding Healthy Aging",
      content:
        "Skin ageing is partly genetic and partly lifestyle. The biggest external factor by far is sun exposure, followed by smoking, poor sleep and diet. A grounded approach focuses on protection and health rather than chasing perfection: daily sunscreen, moisturising, not smoking, and overall healthy habits. Be wary of products promising to reverse ageing — realistic expectations serve you better.",
    },
    {
      title: "Sun Protection Explained",
      content:
        "Sun protection is the cornerstone of skin health, guarding against burning, premature ageing and skin cancer. Use a broad-spectrum sunscreen of SPF 30 or higher, apply enough and reapply every couple of hours when outdoors, and combine it with shade, hats and clothing. UV reaches you on cloudy days and through windows too. Daily use, even in winter, is where the long-term payoff comes from.",
    },
    {
      title: "Common Beauty Myths",
      content:
        "The beauty world is full of myths: that expensive always means better, that you can shrink pores permanently, that a tan is 'healthy', or that natural ingredients are automatically safer. In reality, affordable products can be excellent, pore size is largely genetic, a tan is a sign of skin damage, and 'natural' can still irritate. Simple, consistent care and sun protection beat most trends.",
    },
    {
      title: "Building a Simple Daily Skincare Routine",
      content:
        "A good routine can be short. In the morning: gently cleanse, moisturise, and apply sunscreen. In the evening: cleanse to remove the day, then moisturise. Add targeted actives only if you have a specific goal, and introduce them one at a time to see how your skin responds. Consistency with a few well-chosen steps outperforms a cupboard of products used haphazardly.",
    },
  ],
};

export const getGuides = (slug: string): GuideEntry[] => guideContent[slug] ?? [];
