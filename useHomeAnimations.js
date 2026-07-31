import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export function useHomeAnimations() {
  const fadeHeader = useRef(new Animated.Value(0)).current;
  const slideHero = useRef(new Animated.Value(30)).current;
  const fadeHero = useRef(new Animated.Value(0)).current;
  const slideActions = useRef(new Animated.Value(30)).current;
  const fadeActions = useRef(new Animated.Value(0)).current;
  const slideCards = useRef(new Animated.Value(30)).current;
  const fadeCards = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(120, [
      Animated.timing(fadeHeader, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(fadeHero, { toValue: 1, duration: 450, useNativeDriver: true }),
        Animated.spring(slideHero, { toValue: 0, friction: 8, tension: 40, useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.timing(fadeActions, { toValue: 1, duration: 450, useNativeDriver: true }),
        Animated.spring(slideActions, { toValue: 0, friction: 8, tension: 40, useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.timing(fadeCards, { toValue: 1, duration: 450, useNativeDriver: true }),
        Animated.spring(slideCards, { toValue: 0, friction: 8, tension: 40, useNativeDriver: true }),
      ]),
    ]).start();
  }, []);

  return {
    fadeHeader,
    fadeHero,
    slideHero,
    fadeActions,
    slideActions,
    fadeCards,
    slideCards,
  };
}