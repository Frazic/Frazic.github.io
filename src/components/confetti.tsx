import { component$, $, Slot } from "@builder.io/qwik";

export const Confetti = component$(() => {
    // Source: https://fjolt.com/article/javascript-confetti-on-click-effect

    /* Short function to create confetti at x, y with confettiItems number of items */
    const createConfetti = $((x: number, y: number, confettiItems: number) => {

        /* Random Id generator for giving confetti elements unique IDs */
        const randomId = ((length: number) => {
            const result = [];
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result.push(characters.charAt(Math.floor(Math.random() *
                    charactersLength)));
            }
            return result.join('');
        })

        const createElement = document.createElement('div');
        createElement.classList.add('confetti');
        const makeId = randomId(10);
        createElement.setAttribute('data-id', makeId);
        let confettiHTML = '';
        const colors = ['#2162ff', '#9e21ff', '#21a9ff', '#a9ff21', '#ff2184']

        for (let i = 0; i < confettiItems; ++i) {
            const color = Math.floor(Math.random() * (colors.length));
            confettiHTML += `<div class="confetti-item" style="background-color: ${colors[color]}; z-index: 999" data-angle="${Math.random()}" data-speed="${Math.random()}"></div>`;
            confettiHTML += `<div class="confetti-item reverse" style="background-color: ${colors[color]}; z-index: 999" data-angle="${Math.random()}" data-speed="${Math.random()}"></div>`;
        }

        createElement.style.position = `fixed`;
        createElement.style.top = `${y}px`;
        createElement.style.left = `${x}px`;
        createElement.innerHTML = confettiHTML;
        document.body.appendChild(createElement);

        const gravity = 50; // Fjolt is a high gravity planet
        const maxSpeed = 105000; // Pixels * 1000
        const minSpeed = 65000; // Pixels * 1000
        let t = 0; // Time starts at 0
        const maxAngle = 1500; // Radians * 1000
        const minAngle = 400; // Radians * 1000
        let opacity = 1;
        let rotateAngle = 0;

        const interval = setInterval(() => {
            document.querySelectorAll(`[data-id="${makeId}"] .confetti-item`).forEach(function (item: any) {
                let modifierX = 1;
                const modifierY = 1;
                if (item.classList.contains('reverse')) {
                    modifierX = -1;
                }
                item.style.opacity = opacity;
                const randomNumber = parseFloat(item.getAttribute('data-angle'));
                const otherRandom = parseFloat(item.getAttribute('data-speed'));
                const newRotateAngle = randomNumber * rotateAngle;
                const angle = (randomNumber * (maxAngle - minAngle) + minAngle) / 1000;
                const speed = (randomNumber * (maxSpeed - minSpeed) + minSpeed) / 1000;
                const x = speed * t * Math.cos(angle) + (50 * otherRandom * t);
                const y = speed * t * Math.sin(angle) - (0.5 * gravity * Math.pow(t, 2)) + (50 * otherRandom * t);
                item.style.transform = `translateX(${x * modifierX}px) translateY(${y * -1 * modifierY}px) rotateY(${newRotateAngle}deg) scale(${1})`;
            })
            t += 0.1;
            rotateAngle += 3;
            opacity -= 0.02;
            if (t >= 6) {
                t = 0.1;
                if (document.querySelector(`[data-id="${makeId}"]`) !== null) {
                    document.querySelector(`[data-id="${makeId}"]`)?.remove();
                }
                clearInterval(interval);
            }
        }, 33.33);
    })

    return (
        <div id="confetti-box" onClick$={(ev) => {
            createConfetti(ev.clientX, ev.clientY, 20)
        }}>
            <Slot />
        </div>)
});