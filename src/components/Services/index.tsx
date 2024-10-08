import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Image from 'next/image';
import { GrLinkNext } from 'react-icons/gr';
import styles from './index.module.sass';

export const Services = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     // Three.js'ning sahnasini yaratish
    //     const scene = new THREE.Scene();
    //     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //     const renderer = new THREE.WebGLRenderer({ antialias: true });
    //     renderer.setSize(window.innerWidth, window.innerHeight);
    //     renderer.setPixelRatio(window.devicePixelRatio);
    //     // Fon rangini oq qilib o'zgartirish
    //     renderer.setClearColor(0xffffff, 1); // RGB rang kodini va alfa (shaffoflik) qiymatini belgilaydi

    //     // renderer dom elementini komponentga biriktirish
    //     if (mountRef.current) {
    //         mountRef.current.appendChild(renderer.domElement);
    //     }

    //     // Kublar uchun geometrik shakl yaratish
    //     const geometry = new THREE.BoxGeometry(1, 1, 1);
    //     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    //     const cube = new THREE.Mesh(geometry, material);
    //     scene.add(cube);

    //     camera.position.z = 5;

    //     // Animatsiya funksiyasi
    //     const animate = () => {
    //         requestAnimationFrame(animate);
    //         cube.rotation.x += 0.01;
    //         cube.rotation.y += 0.01;
    //         renderer.render(scene, camera);
    //     };
        
    //     animate();

    //     // Oyna o'lchami o'zgarganda renderer'ni yangilash
    //     const handleResize = () => {
    //         if (mountRef.current) {
    //             renderer.setSize(window.innerWidth, window.innerHeight);
    //             camera.aspect = window.innerWidth / window.innerHeight;
    //             camera.updateProjectionMatrix();
    //         }
    //     };

    //     window.addEventListener('resize', handleResize);

    //     // Cleanup - bu komponent unmount bo'lganda renderer-ni tozalaydi
    //     return () => {
    //         if (mountRef.current) {
    //             mountRef.current.removeChild(renderer.domElement);
    //         }
    //         renderer.dispose();
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    return (
        <div>
            <div ref={mountRef} className={styles.threejsContainer}></div>
            <div className={styles.services}>
                <p className={styles.services__title}>OUR SERVICES</p>
                <p className={styles.services__desc}>Our agency experts will provide you <br /> with a full stack of services</p>
                <div className={styles.services__cards}>
                    <div className={styles.services__card}>
                        <Image src={'/assets/img/service1.svg'} alt='service' width={144} height={144}/>
                        <p className={styles.services__name}>Development <br /> services</p>
                        <p className={styles.services__subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                        <p className={styles.services__learn}> Learn more</p>
                    </div>

                    <div className={styles.services__card}>
                        <Image src={'/assets/img/service2.svg'} alt='service' width={144} height={144}/>
                        <p className={styles.services__name}>Marketing services</p>
                        <p className={styles.services__subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                        <p className={styles.services__learn}> Learn more</p>
                    </div>

                    <div className={styles.services__card}>
                        <Image src={'/assets/img/service3.svg'} alt='service' width={144} height={144}/>
                        <p className={styles.services__name}>Design services</p>
                        <p className={styles.services__subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                        <p className={styles.services__learn}> Learn more</p>
                    </div>
                </div>
                <button className={styles.services__btn}>Explore our services <GrLinkNext className={styles.services__icon} /></button>
            </div>
        </div>
    );
};

export default Services;
