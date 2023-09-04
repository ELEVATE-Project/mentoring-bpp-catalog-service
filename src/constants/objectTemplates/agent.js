'use strict'

const { faker } = require('@faker-js/faker')

const states = ['Odisha', 'Gujarat', 'Kerala', 'Sikkim', 'Rajasthan', 'Karnataka', 'Maharashtra', 'Punjab']

const stateCreator = () => {
	return faker.helpers.arrayElement(states)
}

const capacities = [50, 100, 200, 300]

const capacityCreator = () => {
	return faker.helpers.arrayElement(capacities)
}

const facilities = ['ac', 'wifi', 'smartclass', 'catering', 'parking']

const facilitiesCreator = () => {
	return faker.helpers.arrayElements(facilities)
}

const descriptions = {
	'Academic Commons':
		'The Academic Commons is a multifunctional space designed to foster collaboration and academic engagement among students. It provides an environment where students can work together on projects, study in groups, and participate in various academic activities, promoting a sense of community and shared learning.',
	'Ethics Library':
		'The Ethics Library serves as a haven for deep philosophical and ethical exploration. This tranquil space is equipped with an extensive collection of books, journals, and resources related to ethics, allowing students and scholars to immerse themselves in profound moral discussions and ethical dilemmas, all while surrounded by the wisdom of renowned philosophers.',
	'Philosophy Forum':
		'The Philosophy Forum is a dedicated arena for intellectual discourse and philosophical deliberation. It offers a platform for students and scholars to convene and engage in spirited debates, exchange philosophical ideas, and explore profound questions that have intrigued thinkers for centuries.',
	'Economics Lecture Hall':
		"The Economics Lecture Hall is a state-of-the-art facility where the intricacies of economic theories and practices are unravelled through lectures and presentations. It's the perfect venue for students to gain insights into the world of economics and its impact on society.",
	'Academic Excellence Center':
		'The Academic Excellence Center is a resource hub committed to helping students achieve their highest academic potential. It provides a wide range of support services, including tutoring, study skills workshops, and academic advising, to empower students to excel in their studies and reach their academic goals.',
	'Leadership Institute':
		'The Leadership Institute is a dynamic learning space dedicated to honing leadership skills and nurturing the next generation of leaders. It hosts leadership development programs, workshops, and seminars, fostering self-awareness, teamwork, and effective leadership strategies.',
	'Career Development Center':
		"The Career Development Center is your go-to resource for charting your professional journey. Whether you're exploring career options, seeking internship opportunities, or preparing for job interviews, this center offers comprehensive guidance and resources to help you shape your career path.",
	'Alumni Lounge':
		'The Alumni Lounge is a warm and inviting space where alumni can reconnect with their alma mater and fellow graduates. It serves as a hub for alumni networking events, providing a platform for sharing experiences, insights, and building professional connections.',
	'Graduation Auditorium':
		'The Graduation Auditorium is a grand venue where the culmination of academic achievements is celebrated during graduation ceremonies. With its spacious seating and dignified atmosphere, it offers a fitting stage for graduates to mark this significant milestone in their educational journey.',
	'Thesis Presentation Room':
		"The Thesis Presentation Room is where students defend their research and showcase their thesis projects to faculty and peers. It's a space where academic inquiry reaches its pinnacle, allowing students to demonstrate their expertise and contributions to their field of study.",
	'Quiet Study Zone':
		'The Quiet Study Zone is a serene oasis designed for solitary and focused studying. Here, you can escape distractions, delve into your coursework, and immerse yourself in a contemplative atmosphere conducive to deep learning and concentration.',
	'Grad Student Hub':
		'The Grad Student Hub is a vibrant gathering place exclusively for graduate students. It provides an opportunity for postgraduates to connect, share ideas, and build a supportive community as they pursue advanced degrees and research projects.',
	'Exam Proctoring Center':
		'The Exam Proctoring Center ensures the integrity of the examination process by overseeing fair and secure exam administration. It plays a crucial role in upholding academic standards and creating a level playing field for all students during exams.',
	'Peer Tutoring Lab':
		'The Peer Tutoring Lab is a collaborative space where students come together to support one another academically. Through peer-led tutoring sessions, students can gain a deeper understanding of challenging subjects and develop essential problem-solving skills.',
	'History Archive':
		'The History Archive is a treasure trove of historical documents and artifacts, preserving the rich tapestry of human history. It provides researchers with a unique opportunity to delve into the past, unlocking valuable insights and shedding light on historical events and cultures.',
	'Math Society Room':
		'The Math Society Room is a dedicated meeting place for mathematics enthusiasts and aspiring mathematicians. It serves as a hub for mathematical exploration, problem-solving sessions, and discussions on mathematical concepts, fostering a sense of camaraderie among like-minded individuals.',
	'Science Discovery Lab':
		'The Science Discovery Lab is an interactive laboratory where the wonders of science come to life. It provides hands-on opportunities for students to conduct experiments, explore scientific phenomena, and gain practical insights into the world of physics, chemistry, and biology.',
	'Writing Support Center':
		"The Writing Support Center is a valuable resource for students looking to enhance their writing skills. Whether you're working on essays, research papers, or creative writing projects, this center offers guidance, feedback, and workshops to help you become a more effective communicator through the written word.",
	'Art Studio Workshop':
		"The Art Studio Workshop is a creative haven where artists can unleash their imagination and bring their artistic visions to life. With a wealth of art supplies and a supportive community of fellow creators, it's the perfect space for exploring various mediums and creating stunning works of art.",
	'Music Recital Hall':
		'The Music Recital Hall is a prestigious venue dedicated to musical performances and recitals. Its acoustically optimized design ensures that every note resonates with clarity and emotion, making it the ideal setting for musicians to showcase their talent and captivate audiences with their music.',
	'Drama Performance Stage':
		'The Drama Performance Stage is the heart of theatrical productions, where actors and directors bring stories to life through captivating performances. This versatile space accommodates a wide range of dramatic works, from classic plays to cutting-edge performances, offering a platform for artistic expression and storytelling.',
	'Biology Ecology Lab':
		'The Biology Ecology Lab is a specialized laboratory focused on the intricate study of ecological systems and the natural world. Here, researchers explore the delicate balance of ecosystems, study biodiversity, and investigate the impact of human activities on the environment, contributing to our understanding of ecological science.',
	'Chemistry Materials Lab':
		'The Chemistry Materials Lab is a cutting-edge facility at the forefront of research and experimentation in chemistry and materials science. Scientists and students alike use this space to develop innovative materials, explore chemical reactions, and advance our knowledge of the molecular world.',
	'Astronomy Galaxy Room':
		'The Astronomy Galaxy Room is a celestial sanctuary dedicated to the study and observation of the universe beyond our planet. Equipped with telescopes and advanced astronomical instruments, it provides a window to the cosmos, allowing astronomers and stargazers to explore distant galaxies, stars, and celestial phenomena.',
	'Theater Costume Studio':
		"The Theater Costume Studio is where the magic of costume design unfolds. Here, talented designers and artists create elaborate costumes that transport audiences to different eras and worlds. It's a space where creativity knows no bounds, and the art of storytelling is woven into every stitch.",
	'Psychology Research Lab':
		'The Psychology Research Lab is a hub of psychological exploration, where researchers delve into the complexities of the human mind and behavior. Through experiments, studies, and observations, psychologists gain valuable insights into the workings of the human psyche, contributing to the field of psychology.',
	'Sociology Discussion Room':
		"The Sociology Discussion Room is a haven for sociological debates and conversations about societal issues. It's a place where students and scholars come together to analyze social phenomena, challenge conventional wisdom, and engage in thoughtful discussions that deepen our understanding of society and culture.",
	'Debate Club Meeting Room':
		"The Debate Club Meeting Room is the epicenter of rigorous argumentation and critical thinking. It's where debaters hone their skills, engage in lively debates on a wide range of topics, and learn the art of persuasive communication, all while fostering camaraderie within the debate club community.",
	'Robotics Development Lab':
		'The Robotics Development Lab is a dynamic workspace where engineers and innovators push the boundaries of technology. Here, robotic systems are designed, prototyped, and refined, driving advancements in automation, artificial intelligence, and cutting-edge robotics that have the potential to revolutionize industries.',
	'Research Collaboration Space':
		'The Research Collaboration Space is a catalyst for interdisciplinary collaboration among researchers from various fields. It fosters an environment where diverse perspectives converge, leading to innovative research projects, groundbreaking discoveries, and cross-disciplinary insights that drive the frontiers of knowledge.',
	'Innovation Hub':
		"The Innovation Hub is a center of creativity and ideation, where individuals from different backgrounds and disciplines come together to brainstorm, innovate, and incubate new ideas. It's a place where innovation flourishes, entrepreneurial spirit thrives, and groundbreaking solutions to real-world challenges are born.",
	'Ethics Roundtable':
		'The Ethics Roundtable is a platform for ethical discourse and open dialogue on complex moral issues. It provides a space for individuals to engage in thoughtful discussions, explore ethical dilemmas, and contemplate the moral dimensions of contemporary issues that shape our society.',
	'Philosophy Seminar Space':
		"The Philosophy Seminar Space is an intimate setting for in-depth philosophical exploration. It's where philosophers gather to dive into profound philosophical inquiries, share their thoughts, and engage in Socratic dialogues that delve into the depths of human thought and philosophical wisdom.",
	'Economics Policy Center':
		'The Economics Policy Center is a hub of economic research and analysis. Economists and policy experts convene here to study the impact of economic policies, analyze economic trends, and provide valuable insights that inform economic decision-making at local, national, and global levels.',
	'Academic Advising Lounge':
		'The Academic Advising Lounge is a welcoming space where students can seek guidance and support for their academic journey. Academic advisors are on hand to provide personalized advice, assist with course planning, and help students navigate the complexities of their academic programs.',
	'Leadership Training Room':
		'The Leadership Training Room is a dedicated space for leadership development and training programs. It provides a platform for individuals to enhance their leadership skills, build effective leadership strategies, and cultivate the qualities necessary for effective leadership in diverse contexts.',
	'Career Coaching Office':
		'The Career Coaching Office offers tailored career guidance and coaching to students and individuals seeking to map out their professional trajectories. Career advisors provide one-on-one support, resume building workshops, and interview preparation to help individuals achieve their career aspirations.',
	'Alumni Networking Lounge':
		'The Alumni Networking Lounge is a vibrant space where alumni can reconnect with their alma mater and fellow graduates. It serves as a hub for alumni networking events, fostering a sense of community and providing a platform for sharing experiences and building professional connections.',
	'Graduation Planning Office':
		'The Graduation Planning Office is dedicated to assisting students in planning and preparing for their graduation ceremonies. It offers logistical support, guidance on graduation requirements, and ensures that the graduation experience is seamless and memorable for all graduating students.',
	'Thesis Presentation Chamber':
		"The Thesis Presentation Chamber is an esteemed setting where students formally present their research and defend their thesis projects. It's a space where academic excellence shines, as students articulate their findings, contributions, and insights to a panel of faculty and peers.",
	'Silent Study Retreat':
		'The Silent Study Retreat is a tranquil haven for those seeking an oasis of quietude amidst the hustle and bustle of academic life. It provides an uninterrupted space for intensive and focused studying, allowing individuals to dive deep into their studies and intellectual pursuits.',
	'Grad Student Collaboration Space':
		"The Grad Student Collaboration Space is a vibrant hub where graduate students from diverse disciplines come together to collaborate, share ideas, and foster a supportive academic community. It's a space where interdisciplinary collaboration thrives, leading to innovative research and cross-disciplinary insights.",
	'Exam Preparation Zone':
		'The Exam Preparation Zone is a dedicated area where students can prepare for exams and assessments with focused determination. Equipped with resources, study materials, and a conducive atmosphere, it empowers students to review, practice, and optimize their exam performance.',
	'Peer Tutoring Lounge':
		'The Peer Tutoring Lounge is a comfortable and welcoming space where peer-led tutoring sessions take place. It offers an opportunity for students to receive academic assistance from their peers, fostering a supportive and collaborative learning environment.',
	'History Symposium Room':
		'The History Symposium Room is a prestigious venue for historical symposia and academic discussions. It hosts thought-provoking conversations about historical events, movements, and trends, bringing together historians and scholars to share insights and deepen our understanding of the past.',
	'Math Society Meeting Space':
		'The Math Society Meeting Space is the epicenter of mathematical enthusiasm and exploration. Math enthusiasts gather here to hold meetings, engage in lively mathematical discussions, and share their passion for solving complex mathematical problems and puzzles.',
	'Science Lab Inquiry':
		'The Science Lab Inquiry is a laboratory where students embark on scientific explorations, conduct experiments, and gain hands-on experience in various scientific disciplines. It fosters a culture of scientific inquiry, enabling students to develop critical thinking and analytical skills.',
	'Writing Workshop':
		'The Writing Workshop is a dynamic space dedicated to enhancing writing skills and fostering effective written communication. Through workshops, writing exercises, and peer feedback, participants hone their writing abilities, express their ideas with clarity, and craft compelling narratives.',
	'Creative Writing Studio':
		"The Creative Writing Studio is an inspiring environment where writers of all genres and backgrounds can tap into their creative potential. It's a space where stories, poems, and creative works come to life, allowing writers to express their unique voices and imagination.",
	'Art Studio Gallery':
		'The Art Studio Gallery is a captivating space that showcases the artistic talents of students and local artists. It serves as a vibrant hub for art exhibitions, featuring a diverse range of visual artworks that inspire creativity and cultural appreciation.',
	'Music Practice Studio':
		'The Music Practice Studio is a dedicated sanctuary for musicians to hone their craft. Equipped with soundproofing and top-notch instruments, it provides a quiet and acoustically optimized environment for musicians to rehearse, perfect their techniques, and express their musical prowess.',
	'Drama Rehearsal Space':
		"The Drama Rehearsal Space is where thespians bring theatrical productions to life. It's a dynamic environment where actors, directors, and stage crew members collaborate to rehearse and fine-tune performances, ensuring that every moment on stage captivates and resonates with audiences.",
	'Biology Lab Discovery':
		'The Biology Lab Discovery is a cutting-edge laboratory where groundbreaking biological research unfolds. Scientists and students delve into the complexities of life sciences, conducting experiments that shed light on biological mysteries and contribute to advancements in medicine, genetics, and ecology.',
	'Chemistry Lab Innovations':
		'The Chemistry Lab Innovations is at the forefront of chemical research and innovation. Researchers explore novel chemical reactions, develop innovative materials, and push the boundaries of chemical science, driving progress in fields such as pharmaceuticals, materials engineering, and renewable energy.',
	'Astronomy Observation Room':
		'The Astronomy Observation Room is a celestial observatory where stargazers and astronomers explore the wonders of the night sky. Equipped with powerful telescopes, it offers a portal to the cosmos, allowing observers to study celestial bodies, track celestial events, and unravel the mysteries of the universe.',
	'Theater Design Studio':
		"The Theater Design Studio is where the magic of set and costume design takes shape. It's a creative hub where designers and artists transform artistic visions into tangible sets, costumes, and props, creating immersive environments that transport audiences into the world of the theatrical narrative.",
	'Psychology Counseling Suite':
		'The Psychology Counseling Suite is a compassionate space where individuals can access psychological counseling and support services. Experienced counselors provide a safe and confidential environment for clients to explore their emotions, cope with challenges, and embark on a journey of self-discovery and healing.',
	'Sociology Research Lounge':
		'The Sociology Research Lounge is a collaborative space for sociological research projects and intellectual discussions. Sociologists and researchers gather to analyze social phenomena, conduct empirical studies, and contribute to the field of sociology by shedding light on pressing societal issues.',
	'Robotics Workshop':
		"The Robotics Workshop is a hands-on space where robotics enthusiasts and engineers assemble, program, and innovate with robotic systems. It's a dynamic environment where cutting-edge technology and creativity converge, leading to the development of robots that can revolutionize industries and daily life.",
	'Research Collaboration Hub':
		'The Research Collaboration Hub is a catalyst for interdisciplinary collaboration among researchers from various fields. It fosters an environment where diverse perspectives converge, leading to innovative research projects, groundbreaking discoveries, and cross-disciplinary insights that drive the frontiers of knowledge.',
	'Innovation Workshop':
		'The Innovation Workshop is a space dedicated to fostering innovation and creativity. It serves as a playground for ideation, prototyping, and problem-solving, where individuals from diverse backgrounds collaborate to develop solutions to real-world challenges and drive innovation forward.',
	'Ethics Lecture Hall':
		'The Ethics Lecture Hall is a distinguished venue for lectures and discussions on ethical topics and dilemmas. It provides a platform for prominent ethicists, scholars, and thought leaders to engage with audiences, provoke ethical reflection, and explore pressing moral questions that shape our society.',
	'Philosophy Discussion Room':
		'The Philosophy Discussion Room is a space for engaging in deep philosophical dialogues and thought-provoking discussions. Philosophers and students come together to explore existential questions, probe the foundations of knowledge, and engage in critical inquiry that challenges conventional wisdom.',
	'Economics Research Space':
		'The Economics Research Space is a hub for economic research and analysis. Economists delve into economic theories, conduct empirical studies, and examine the implications of economic policies, contributing valuable insights that inform economic decision-making at local, national, and global levels.',
	'Academic Success Room':
		"The Academic Success Room is a resource center where students access tools and strategies to enhance their academic performance. Whether it's time management, study skills, or academic planning, this space empowers students to achieve their full academic potential and excel in their coursework.",
	'Leadership Development Space':
		'The Leadership Development Space is a dedicated environment for cultivating leadership skills and fostering personal growth. Through leadership development programs, workshops, and experiential learning, individuals gain the knowledge, self-awareness, and leadership abilities necessary to excel in leadership roles.',
	'Career Advancement Center':
		'The Career Advancement Center is a comprehensive resource hub for individuals seeking to advance in their careers. Career advisors offer guidance on career planning, job search strategies, resume building, and interview preparation, empowering individuals to achieve their professional aspirations.',
	'Alumni Engagement Space':
		'The Alumni Engagement Space is a vibrant and welcoming environment where alumni reconnect with their alma mater and fellow graduates. It serves as a nexus for alumni engagement, offering opportunities for networking, mentorship, and active participation in alumni events and initiatives.',
}

const descriptionCreator = (name) => {
	const description = descriptions[name]
	if (!description)
		return 'This room provides a versatile space for various activities, fostering collaboration, creativity, and learning. It serves as a hub for individuals to engage in diverse pursuits, from academic endeavors to artistic expression and intellectual discussions.'
	description
}

exports.agentHandlers = {
	stateCreator,
	capacityCreator,
	facilitiesCreator,
	descriptionCreator,
}

exports.agentTemplate = {
	person: {
		id: '{{mentor._id}}',
		name: '{{mentor.name}}',
		image: {
			url: '{{mentor.image}}',
		},
		state: '=> stateCreator()',
		capacity: '=> capacityCreator()',
		facilities: '=> facilitiesCreator()',
		institute: '{{organization.name}}',
		description: '=> descriptionCreator(mentor.name)',
	},
}
