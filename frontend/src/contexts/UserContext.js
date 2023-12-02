// contexts/UserContext.js
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [stagesInfo, setStagesInfo] = useState(undefined);

    const login = async (userData) => {

        try {
            const headers = { 'Content-Type': 'application/json' }
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ data: userData, headers }),
            });

            const data = await response.json();

            if (response.ok) {
                setUser(data);
                getStagesInfo(data.completedLessons)

                return undefined

            } else {
                // Handle registration failure
                return data.error
            }
        } catch (error) {
            console.error('Error durante Logueo:', error);
            return error
        }

    };

    const getUser = async () => {
        if (user) {
            return user
        } else {
            try {
                const response = await fetch('/api/user/find/a', {
                    method: 'GET'
                });


                if (response.headers.get('Content-Type').includes('application/json')) {
                    const data = await response.json();

                    if (response.ok) {
                        console.log(data)
                        setUser(data);
                        getStagesInfo(data.completedLessons)

                        return undefined

                    } else {
                        console.error(data);
                        return data.error
                    }
                } else {

                    const text = await response.text();
                    console.log(text)

                }

            } catch (error) {
                console.error('Error durante obtener usuario:', error);
                return error
            }
        }
    }

    const getStage = async (stageID) => {
        try {
            const module = await import(`../../public/lessons/stage${stageID}.js`).catch((error) => console.log("No hay mas lecciones"));

            if (!module) {
                return undefined
            } else {
                return module;
            }
        } catch (error) {
            console.error(`Error fetching stage${stageID}.js:`, error);
        }
    }

    const getStagesInfo = async (completedLessons) => {
        const allStages = [];
        let stageID = 0;

        while (true) {
            const stage = await getStage(stageID)
            if (stage === undefined) {
                // No more stages found, exit the loop
                break;
            }

            const stageCompleted = completedLessons.filter((lesson) => lesson.lessonId.startsWith(`${stageID}-`))

            allStages.push({
                ...stage.infoStage, progreso: (stageCompleted.length / stage.default.length) * 100,
                lessonsCompleted: stageCompleted.map((lesson) => { return lesson.lessonId.split('-')[1] })
            });

            stageID++;
        }
        setStagesInfo(allStages);
        console.log(allStages)
    }

    const completeLesson = async (lessonId) => {
        
        
        /* 
        try {
            throw new Error('Stack trace'); //Para debugear
        } catch (error) {
            console.log(error.stack);
        } */
        
        if (stagesInfo && stagesInfo.some((s, index) => {
            return String(index) == lessonId.split('-')[0] && s.lessonsCompleted.some((c) => String(c) == lessonId.split('-')[1]);
        })) {

            return 'repeat'
        } else {
            try {
                const response = await fetch(`/api/user/complete/${lessonId}`, {
                    method: 'POST'
                });

                const data = await response.json();

                if (response.ok) {
                    getStagesInfo(data)
                    return undefined

                } else {
                    // Handle registration failure
                    return data.error
                }
            } catch (error) {
                console.error('Error durante Logueo:', error);
                return error
            }
        }



    }

    const logout = async () => {
        try {

            const response = await fetch('api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const data = await response.json();

            if (response.ok) {
                setUser(null);
                // Redirect to the home page
                router.push('/');

            } else {
                // Handle registration failure
                console.error(data.error);
                return data.error
            }

        } catch (error) {
            console.error('Error durante cerrado sesion:', error);
            return error
        }
    };

    return (
        <UserContext.Provider value={{ getUser, login, logout, stagesInfo, completeLesson }}>
            {children}
        </UserContext.Provider>
    );
};