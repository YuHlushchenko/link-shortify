try {
  ;(() => {
    var P2 = Object.create
    var ka = Object.defineProperty
    var R2 = Object.getOwnPropertyDescriptor
    var D2 = Object.getOwnPropertyNames
    var F2 = Object.getPrototypeOf,
      j2 = Object.prototype.hasOwnProperty
    var et = ((e) =>
      typeof require < 'u'
        ? require
        : typeof Proxy < 'u'
          ? new Proxy(e, {
              get: (t, r) => (typeof require < 'u' ? require : t)[r],
            })
          : e)(function (e) {
      if (typeof require < 'u') return require.apply(this, arguments)
      throw Error('Dynamic require of "' + e + '" is not supported')
    })
    var St = (e, t) => () => (e && (t = e((e = 0))), t)
    var U = (e, t) => () => (
        t || e((t = { exports: {} }).exports, t), t.exports
      ),
      zl = (e, t) => {
        for (var r in t) ka(e, r, { get: t[r], enumerable: !0 })
      },
      N2 = (e, t, r, n) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let o of D2(t))
            !j2.call(e, o) &&
              o !== r &&
              ka(e, o, {
                get: () => t[o],
                enumerable: !(n = R2(t, o)) || n.enumerable,
              })
        return e
      }
    var on = (e, t, r) => (
      (r = e != null ? P2(F2(e)) : {}),
      N2(
        t || !e || !e.__esModule
          ? ka(r, 'default', { value: e, enumerable: !0 })
          : r,
        e,
      )
    )
    var w = St(() => {})
    var S = St(() => {})
    var A = St(() => {})
    var B2,
      Vl,
      L2,
      Hl,
      q2,
      M2,
      an,
      Yt,
      U2,
      sn,
      $2,
      Jl,
      z2,
      Gl,
      V2,
      H2,
      Xt,
      J2,
      Wl,
      tt,
      ln,
      Pa = St(() => {
        w()
        S()
        A()
        ;(B2 = Object.create),
          (Vl = Object.defineProperty),
          (L2 = Object.getOwnPropertyDescriptor),
          (Hl = Object.getOwnPropertyNames),
          (q2 = Object.getPrototypeOf),
          (M2 = Object.prototype.hasOwnProperty),
          (an = ((e) =>
            typeof et < 'u'
              ? et
              : typeof Proxy < 'u'
                ? new Proxy(e, { get: (t, r) => (typeof et < 'u' ? et : t)[r] })
                : e)(function (e) {
            if (typeof et < 'u') return et.apply(this, arguments)
            throw Error('Dynamic require of "' + e + '" is not supported')
          })),
          (Yt = (e, t) =>
            function () {
              return (
                t || (0, e[Hl(e)[0]])((t = { exports: {} }).exports, t),
                t.exports
              )
            }),
          (U2 = (e, t, r, n) => {
            if ((t && typeof t == 'object') || typeof t == 'function')
              for (let o of Hl(t))
                !M2.call(e, o) &&
                  o !== r &&
                  Vl(e, o, {
                    get: () => t[o],
                    enumerable: !(n = L2(t, o)) || n.enumerable,
                  })
            return e
          }),
          (sn = (e, t, r) => (
            (r = e != null ? B2(q2(e)) : {}),
            U2(
              t || !e || !e.__esModule
                ? Vl(r, 'default', { value: e, enumerable: !0 })
                : r,
              e,
            )
          )),
          ($2 = Object.create),
          (Jl = Object.defineProperty),
          (z2 = Object.getOwnPropertyDescriptor),
          (Gl = Object.getOwnPropertyNames),
          (V2 = Object.getPrototypeOf),
          (H2 = Object.prototype.hasOwnProperty),
          (Xt = (e, t) =>
            function () {
              return (
                t || (0, e[Gl(e)[0]])((t = { exports: {} }).exports, t),
                t.exports
              )
            }),
          (J2 = (e, t, r, n) => {
            if ((t && typeof t == 'object') || typeof t == 'function')
              for (let o of Gl(t))
                !H2.call(e, o) &&
                  o !== r &&
                  Jl(e, o, {
                    get: () => t[o],
                    enumerable: !(n = z2(t, o)) || n.enumerable,
                  })
            return e
          }),
          (Wl = (e, t, r) => (
            (r = e != null ? $2(V2(e)) : {}),
            J2(
              t || !e || !e.__esModule
                ? Jl(r, 'default', { value: e, enumerable: !0 })
                : r,
              e,
            )
          )),
          (tt = (e) => `control-${e.replace(/\s+/g, '-')}`),
          (ln = (e) => `set-${e.replace(/\s+/g, '-')}`)
      })
    var v,
      Kl,
      Ft,
      I6,
      k6,
      P6,
      R6,
      Yl,
      D6,
      Ae,
      un,
      Ra,
      F6,
      j6,
      N6,
      B6,
      Xl,
      L6,
      q6,
      M6,
      Ve,
      Ql,
      U6,
      $6,
      He,
      z6,
      V6,
      H6,
      Zl,
      jt,
      J6,
      Xe,
      me,
      G6,
      W6,
      K6,
      no = St(() => {
        w()
        S()
        A()
        ;(v = __REACT__),
          ({
            Children: Kl,
            Component: Ft,
            Fragment: I6,
            Profiler: k6,
            PureComponent: P6,
            StrictMode: R6,
            Suspense: Yl,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: D6,
            cloneElement: Ae,
            createContext: un,
            createElement: Ra,
            createFactory: F6,
            createRef: j6,
            forwardRef: N6,
            isValidElement: B6,
            lazy: Xl,
            memo: L6,
            startTransition: q6,
            unstable_act: M6,
            useCallback: Ve,
            useContext: Ql,
            useDebugValue: U6,
            useDeferredValue: $6,
            useEffect: He,
            useId: z6,
            useImperativeHandle: V6,
            useInsertionEffect: H6,
            useLayoutEffect: Zl,
            useMemo: jt,
            useReducer: J6,
            useRef: Xe,
            useState: me,
            useSyncExternalStore: G6,
            useTransition: W6,
            version: K6,
          } = __REACT__)
      })
    var eu = {}
    zl(eu, {
      A: () => K2,
      ActionBar: () => Da,
      AddonPanel: () => Fa,
      Badge: () => ja,
      Bar: () => Na,
      Blockquote: () => Y2,
      Button: () => Nt,
      ClipboardCode: () => X2,
      Code: () => Q2,
      DL: () => Z2,
      Div: () => e1,
      DocumentWrapper: () => t1,
      EmptyTabContent: () => Ba,
      ErrorFormatter: () => r1,
      FlexBar: () => La,
      Form: () => ut,
      H1: () => n1,
      H2: () => qa,
      H3: () => o1,
      H4: () => a1,
      H5: () => i1,
      H6: () => s1,
      HR: () => l1,
      IconButton: () => yt,
      IconButtonSkeleton: () => u1,
      Icons: () => c1,
      Img: () => p1,
      LI: () => d1,
      Link: () => Qt,
      ListItem: () => f1,
      Loader: () => y1,
      Modal: () => ht,
      OL: () => h1,
      P: () => m1,
      Placeholder: () => g1,
      Pre: () => b1,
      ResetWrapper: () => Ma,
      ScrollArea: () => v1,
      Separator: () => E1,
      Spaced: () => Ua,
      Span: () => x1,
      StorybookIcon: () => w1,
      StorybookLogo: () => S1,
      Symbols: () => A1,
      SyntaxHighlighter: () => oo,
      TT: () => T1,
      TabBar: () => C1,
      TabButton: () => _1,
      TabWrapper: () => O1,
      Table: () => I1,
      Tabs: () => k1,
      TabsState: () => P1,
      TooltipLinkList: () => R1,
      TooltipMessage: () => D1,
      TooltipNote: () => Zt,
      UL: () => F1,
      WithTooltip: () => Bt,
      WithTooltipPure: () => $a,
      Zoom: () => za,
      codeCommon: () => vr,
      components: () => Va,
      createCopyToClipboardFunction: () => j1,
      default: () => W2,
      getStoryHref: () => N1,
      icons: () => B1,
      interleaveSeparators: () => L1,
      nameSpaceClassNames: () => Ha,
      resetComponents: () => q1,
      withReset: () => Er,
    })
    var W2,
      K2,
      Da,
      Fa,
      ja,
      Na,
      Y2,
      Nt,
      X2,
      Q2,
      Z2,
      e1,
      t1,
      Ba,
      r1,
      La,
      ut,
      n1,
      qa,
      o1,
      a1,
      i1,
      s1,
      l1,
      yt,
      u1,
      c1,
      p1,
      d1,
      Qt,
      f1,
      y1,
      ht,
      h1,
      m1,
      g1,
      b1,
      Ma,
      v1,
      E1,
      Ua,
      x1,
      w1,
      S1,
      A1,
      oo,
      T1,
      C1,
      _1,
      O1,
      I1,
      k1,
      P1,
      R1,
      D1,
      Zt,
      F1,
      Bt,
      $a,
      za,
      vr,
      Va,
      j1,
      N1,
      B1,
      L1,
      Ha,
      q1,
      Er,
      ao = St(() => {
        w()
        S()
        A()
        ;(W2 = __STORYBOOK_COMPONENTS__),
          ({
            A: K2,
            ActionBar: Da,
            AddonPanel: Fa,
            Badge: ja,
            Bar: Na,
            Blockquote: Y2,
            Button: Nt,
            ClipboardCode: X2,
            Code: Q2,
            DL: Z2,
            Div: e1,
            DocumentWrapper: t1,
            EmptyTabContent: Ba,
            ErrorFormatter: r1,
            FlexBar: La,
            Form: ut,
            H1: n1,
            H2: qa,
            H3: o1,
            H4: a1,
            H5: i1,
            H6: s1,
            HR: l1,
            IconButton: yt,
            IconButtonSkeleton: u1,
            Icons: c1,
            Img: p1,
            LI: d1,
            Link: Qt,
            ListItem: f1,
            Loader: y1,
            Modal: ht,
            OL: h1,
            P: m1,
            Placeholder: g1,
            Pre: b1,
            ResetWrapper: Ma,
            ScrollArea: v1,
            Separator: E1,
            Spaced: Ua,
            Span: x1,
            StorybookIcon: w1,
            StorybookLogo: S1,
            Symbols: A1,
            SyntaxHighlighter: oo,
            TT: T1,
            TabBar: C1,
            TabButton: _1,
            TabWrapper: O1,
            Table: I1,
            Tabs: k1,
            TabsState: P1,
            TooltipLinkList: R1,
            TooltipMessage: D1,
            TooltipNote: Zt,
            UL: F1,
            WithTooltip: Bt,
            WithTooltipPure: $a,
            Zoom: za,
            codeCommon: vr,
            components: Va,
            createCopyToClipboardFunction: j1,
            getStoryHref: N1,
            icons: B1,
            interleaveSeparators: L1,
            nameSpaceClassNames: Ha,
            resetComponents: q1,
            withReset: Er,
          } = __STORYBOOK_COMPONENTS__)
      })
    var u9,
      c9,
      p9,
      d9,
      Cu,
      f9,
      yo,
      _u,
      y9,
      h9,
      m9,
      g9,
      b9,
      v9,
      E9,
      Ou,
      x9,
      w9,
      Qa,
      S9,
      W,
      Za,
      A9,
      ei,
      T9,
      ti = St(() => {
        w()
        S()
        A()
        ;(u9 = __STORYBOOK_THEMING__),
          ({
            CacheProvider: c9,
            ClassNames: p9,
            Global: d9,
            ThemeProvider: Cu,
            background: f9,
            color: yo,
            convert: _u,
            create: y9,
            createCache: h9,
            createGlobal: m9,
            createReset: g9,
            css: b9,
            darken: v9,
            ensure: E9,
            ignoreSsrWarning: Ou,
            isPropValid: x9,
            jsx: w9,
            keyframes: Qa,
            lighten: S9,
            styled: W,
            themes: Za,
            typography: A9,
            useTheme: ei,
            withTheme: T9,
          } = __STORYBOOK_THEMING__)
      })
    var L9,
      q9,
      M9,
      ri,
      U9,
      $9,
      z9,
      V9,
      H9,
      J9,
      G9,
      W9,
      K9,
      Y9,
      X9,
      Q9,
      Z9,
      eU,
      tU,
      rU,
      nU,
      oU,
      aU,
      iU,
      sU,
      lU,
      uU,
      cU,
      pU,
      dU,
      fU,
      yU,
      hU,
      mU,
      gU,
      bU,
      vU,
      EU,
      xU,
      wU,
      SU,
      AU,
      TU,
      CU,
      _U,
      OU,
      IU,
      Pu,
      Ru,
      kU,
      Du,
      ni,
      PU,
      RU,
      Fu,
      DU,
      FU,
      jU,
      NU,
      BU,
      LU,
      qU,
      MU,
      UU,
      $U,
      zU,
      VU,
      HU,
      JU,
      GU,
      WU,
      KU,
      YU,
      XU,
      QU,
      ZU,
      e$,
      t$,
      r$,
      n$,
      o$,
      a$,
      i$,
      s$,
      l$,
      u$,
      c$,
      p$,
      ho,
      d$,
      f$,
      y$,
      h$,
      m$,
      g$,
      b$,
      ju,
      Nu,
      v$,
      E$,
      x$,
      w$,
      S$,
      A$,
      T$,
      C$,
      _$,
      O$,
      I$,
      k$,
      P$,
      R$,
      D$,
      F$,
      j$,
      N$,
      B$,
      L$,
      q$,
      M$,
      U$,
      $$,
      z$,
      V$,
      H$,
      J$,
      G$,
      W$,
      K$,
      Y$,
      X$,
      Bu,
      Q$,
      Z$,
      ez,
      tz,
      rz,
      nz,
      oz,
      Lu,
      az,
      iz,
      sz,
      lz,
      uz,
      cz,
      pz,
      dz,
      fz,
      yz,
      hz,
      mz,
      gz,
      bz,
      vz,
      Ez,
      xz,
      wz,
      Sz,
      Az,
      Tz,
      Cz,
      _z,
      Oz,
      Iz,
      kz,
      Pz,
      Rz,
      Dz,
      Fz,
      jz,
      Nz,
      Bz,
      Lz,
      qz,
      Mz,
      Uz,
      $z,
      zz,
      Vz,
      Hz,
      Jz,
      Gz,
      Wz,
      Kz,
      Yz,
      Xz,
      Qz,
      Zz,
      e7,
      t7,
      r7,
      n7,
      o7,
      a7,
      i7,
      s7,
      l7,
      u7,
      c7,
      p7,
      qu,
      d7,
      f7,
      y7,
      h7,
      m7,
      g7,
      b7,
      v7,
      E7,
      x7,
      w7,
      S7,
      A7,
      oi,
      T7,
      C7,
      _7,
      O7,
      I7,
      k7,
      P7,
      R7,
      D7,
      F7,
      Mu,
      j7,
      N7,
      B7,
      L7,
      q7,
      M7,
      Uu,
      $u,
      zu,
      U7,
      ai = St(() => {
        w()
        S()
        A()
        ;(L9 = __STORYBOOK_ICONS__),
          ({
            AccessibilityAltIcon: q9,
            AccessibilityIcon: M9,
            AddIcon: ri,
            AdminIcon: U9,
            AlertAltIcon: $9,
            AlertIcon: z9,
            AlignLeftIcon: V9,
            AlignRightIcon: H9,
            AppleIcon: J9,
            ArrowBottomLeftIcon: G9,
            ArrowBottomRightIcon: W9,
            ArrowDownIcon: K9,
            ArrowLeftIcon: Y9,
            ArrowRightIcon: X9,
            ArrowSolidDownIcon: Q9,
            ArrowSolidLeftIcon: Z9,
            ArrowSolidRightIcon: eU,
            ArrowSolidUpIcon: tU,
            ArrowTopLeftIcon: rU,
            ArrowTopRightIcon: nU,
            ArrowUpIcon: oU,
            AzureDevOpsIcon: aU,
            BackIcon: iU,
            BasketIcon: sU,
            BatchAcceptIcon: lU,
            BatchDenyIcon: uU,
            BeakerIcon: cU,
            BellIcon: pU,
            BitbucketIcon: dU,
            BoldIcon: fU,
            BookIcon: yU,
            BookmarkHollowIcon: hU,
            BookmarkIcon: mU,
            BottomBarIcon: gU,
            BottomBarToggleIcon: bU,
            BoxIcon: vU,
            BranchIcon: EU,
            BrowserIcon: xU,
            ButtonIcon: wU,
            CPUIcon: SU,
            CalendarIcon: AU,
            CameraIcon: TU,
            CategoryIcon: CU,
            CertificateIcon: _U,
            ChangedIcon: OU,
            ChatIcon: IU,
            CheckIcon: Pu,
            ChevronDownIcon: Ru,
            ChevronLeftIcon: kU,
            ChevronRightIcon: Du,
            ChevronSmallDownIcon: ni,
            ChevronSmallLeftIcon: PU,
            ChevronSmallRightIcon: RU,
            ChevronSmallUpIcon: Fu,
            ChevronUpIcon: DU,
            ChromaticIcon: FU,
            ChromeIcon: jU,
            CircleHollowIcon: NU,
            CircleIcon: BU,
            ClearIcon: LU,
            CloseAltIcon: qU,
            CloseIcon: MU,
            CloudHollowIcon: UU,
            CloudIcon: $U,
            CogIcon: zU,
            CollapseIcon: VU,
            CommandIcon: HU,
            CommentAddIcon: JU,
            CommentIcon: GU,
            CommentsIcon: WU,
            CommitIcon: KU,
            CompassIcon: YU,
            ComponentDrivenIcon: XU,
            ComponentIcon: QU,
            ContrastIcon: ZU,
            ControlsIcon: e$,
            CopyIcon: t$,
            CreditIcon: r$,
            CrossIcon: n$,
            DashboardIcon: o$,
            DatabaseIcon: a$,
            DeleteIcon: i$,
            DiamondIcon: s$,
            DirectionIcon: l$,
            DiscordIcon: u$,
            DocChartIcon: c$,
            DocListIcon: p$,
            DocumentIcon: ho,
            DownloadIcon: d$,
            DragIcon: f$,
            EditIcon: y$,
            EllipsisIcon: h$,
            EmailIcon: m$,
            ExpandAltIcon: g$,
            ExpandIcon: b$,
            EyeCloseIcon: ju,
            EyeIcon: Nu,
            FaceHappyIcon: v$,
            FaceNeutralIcon: E$,
            FaceSadIcon: x$,
            FacebookIcon: w$,
            FailedIcon: S$,
            FastForwardIcon: A$,
            FigmaIcon: T$,
            FilterIcon: C$,
            FlagIcon: _$,
            FolderIcon: O$,
            FormIcon: I$,
            GDriveIcon: k$,
            GithubIcon: P$,
            GitlabIcon: R$,
            GlobeIcon: D$,
            GoogleIcon: F$,
            GraphBarIcon: j$,
            GraphLineIcon: N$,
            GraphqlIcon: B$,
            GridAltIcon: L$,
            GridIcon: q$,
            GrowIcon: M$,
            HeartHollowIcon: U$,
            HeartIcon: $$,
            HomeIcon: z$,
            HourglassIcon: V$,
            InfoIcon: H$,
            ItalicIcon: J$,
            JumpToIcon: G$,
            KeyIcon: W$,
            LightningIcon: K$,
            LightningOffIcon: Y$,
            LinkBrokenIcon: X$,
            LinkIcon: Bu,
            LinkedinIcon: Q$,
            LinuxIcon: Z$,
            ListOrderedIcon: ez,
            ListUnorderedIcon: tz,
            LocationIcon: rz,
            LockIcon: nz,
            MarkdownIcon: oz,
            MarkupIcon: Lu,
            MediumIcon: az,
            MemoryIcon: iz,
            MenuIcon: sz,
            MergeIcon: lz,
            MirrorIcon: uz,
            MobileIcon: cz,
            MoonIcon: pz,
            NutIcon: dz,
            OutboxIcon: fz,
            OutlineIcon: yz,
            PaintBrushIcon: hz,
            PaperClipIcon: mz,
            ParagraphIcon: gz,
            PassedIcon: bz,
            PhoneIcon: vz,
            PhotoDragIcon: Ez,
            PhotoIcon: xz,
            PinAltIcon: wz,
            PinIcon: Sz,
            PlayBackIcon: Az,
            PlayIcon: Tz,
            PlayNextIcon: Cz,
            PlusIcon: _z,
            PointerDefaultIcon: Oz,
            PointerHandIcon: Iz,
            PowerIcon: kz,
            PrintIcon: Pz,
            ProceedIcon: Rz,
            ProfileIcon: Dz,
            PullRequestIcon: Fz,
            QuestionIcon: jz,
            RSSIcon: Nz,
            RedirectIcon: Bz,
            ReduxIcon: Lz,
            RefreshIcon: qz,
            ReplyIcon: Mz,
            RepoIcon: Uz,
            RequestChangeIcon: $z,
            RewindIcon: zz,
            RulerIcon: Vz,
            SearchIcon: Hz,
            ShareAltIcon: Jz,
            ShareIcon: Gz,
            ShieldIcon: Wz,
            SideBySideIcon: Kz,
            SidebarAltIcon: Yz,
            SidebarAltToggleIcon: Xz,
            SidebarIcon: Qz,
            SidebarToggleIcon: Zz,
            SpeakerIcon: e7,
            StackedIcon: t7,
            StarHollowIcon: r7,
            StarIcon: n7,
            StatusFailIcon: o7,
            StatusPassIcon: a7,
            StatusWarnIcon: i7,
            StickerIcon: s7,
            StopAltIcon: l7,
            StopIcon: u7,
            StorybookIcon: c7,
            StructureIcon: p7,
            SubtractIcon: qu,
            SunIcon: d7,
            SupportIcon: f7,
            SwitchAltIcon: y7,
            SyncIcon: h7,
            TabletIcon: m7,
            ThumbsUpIcon: g7,
            TimeIcon: b7,
            TimerIcon: v7,
            TransferIcon: E7,
            TrashIcon: x7,
            TwitterIcon: w7,
            TypeIcon: S7,
            UbuntuIcon: A7,
            UndoIcon: oi,
            UnfoldIcon: T7,
            UnlockIcon: C7,
            UnpinIcon: _7,
            UploadIcon: O7,
            UserAddIcon: I7,
            UserAltIcon: k7,
            UserIcon: P7,
            UsersIcon: R7,
            VSCodeIcon: D7,
            VerifiedIcon: F7,
            VideoIcon: Mu,
            WandIcon: j7,
            WatchIcon: N7,
            WindowsIcon: B7,
            WrenchIcon: L7,
            XIcon: q7,
            YoutubeIcon: M7,
            ZoomIcon: Uu,
            ZoomOutIcon: $u,
            ZoomResetIcon: zu,
            iconList: U7,
          } = __STORYBOOK_ICONS__)
      })
    var ii = U((Z7, Hu) => {
      w()
      S()
      A()
      function M1(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
          o[r] = t(e[r], r, e)
        return o
      }
      Hu.exports = M1
    })
    var Gu = U((nV, Ju) => {
      w()
      S()
      A()
      function U1() {
        ;(this.__data__ = []), (this.size = 0)
      }
      Ju.exports = U1
    })
    var go = U((sV, Wu) => {
      w()
      S()
      A()
      function $1(e, t) {
        return e === t || (e !== e && t !== t)
      }
      Wu.exports = $1
    })
    var pn = U((pV, Ku) => {
      w()
      S()
      A()
      var z1 = go()
      function V1(e, t) {
        for (var r = e.length; r--; ) if (z1(e[r][0], t)) return r
        return -1
      }
      Ku.exports = V1
    })
    var Xu = U((hV, Yu) => {
      w()
      S()
      A()
      var H1 = pn(),
        J1 = Array.prototype,
        G1 = J1.splice
      function W1(e) {
        var t = this.__data__,
          r = H1(t, e)
        if (r < 0) return !1
        var n = t.length - 1
        return r == n ? t.pop() : G1.call(t, r, 1), --this.size, !0
      }
      Yu.exports = W1
    })
    var Zu = U((vV, Qu) => {
      w()
      S()
      A()
      var K1 = pn()
      function Y1(e) {
        var t = this.__data__,
          r = K1(t, e)
        return r < 0 ? void 0 : t[r][1]
      }
      Qu.exports = Y1
    })
    var tc = U((SV, ec) => {
      w()
      S()
      A()
      var X1 = pn()
      function Q1(e) {
        return X1(this.__data__, e) > -1
      }
      ec.exports = Q1
    })
    var nc = U((_V, rc) => {
      w()
      S()
      A()
      var Z1 = pn()
      function eE(e, t) {
        var r = this.__data__,
          n = Z1(r, e)
        return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this
      }
      rc.exports = eE
    })
    var dn = U((PV, oc) => {
      w()
      S()
      A()
      var tE = Gu(),
        rE = Xu(),
        nE = Zu(),
        oE = tc(),
        aE = nc()
      function Sr(e) {
        var t = -1,
          r = e == null ? 0 : e.length
        for (this.clear(); ++t < r; ) {
          var n = e[t]
          this.set(n[0], n[1])
        }
      }
      Sr.prototype.clear = tE
      Sr.prototype.delete = rE
      Sr.prototype.get = nE
      Sr.prototype.has = oE
      Sr.prototype.set = aE
      oc.exports = Sr
    })
    var ic = U((jV, ac) => {
      w()
      S()
      A()
      var iE = dn()
      function sE() {
        ;(this.__data__ = new iE()), (this.size = 0)
      }
      ac.exports = sE
    })
    var lc = U((qV, sc) => {
      w()
      S()
      A()
      function lE(e) {
        var t = this.__data__,
          r = t.delete(e)
        return (this.size = t.size), r
      }
      sc.exports = lE
    })
    var cc = U((zV, uc) => {
      w()
      S()
      A()
      function uE(e) {
        return this.__data__.get(e)
      }
      uc.exports = uE
    })
    var dc = U((GV, pc) => {
      w()
      S()
      A()
      function cE(e) {
        return this.__data__.has(e)
      }
      pc.exports = cE
    })
    var si = U((XV, fc) => {
      w()
      S()
      A()
      var pE =
        typeof window == 'object' &&
        window &&
        window.Object === Object &&
        window
      fc.exports = pE
    })
    var ot = U((tH, yc) => {
      w()
      S()
      A()
      var dE = si(),
        fE = typeof self == 'object' && self && self.Object === Object && self,
        yE = dE || fE || Function('return this')()
      yc.exports = yE
    })
    var Ar = U((aH, hc) => {
      w()
      S()
      A()
      var hE = ot(),
        mE = hE.Symbol
      hc.exports = mE
    })
    var vc = U((uH, bc) => {
      w()
      S()
      A()
      var mc = Ar(),
        gc = Object.prototype,
        gE = gc.hasOwnProperty,
        bE = gc.toString,
        fn = mc ? mc.toStringTag : void 0
      function vE(e) {
        var t = gE.call(e, fn),
          r = e[fn]
        try {
          e[fn] = void 0
          var n = !0
        } catch {}
        var o = bE.call(e)
        return n && (t ? (e[fn] = r) : delete e[fn]), o
      }
      bc.exports = vE
    })
    var xc = U((fH, Ec) => {
      w()
      S()
      A()
      var EE = Object.prototype,
        xE = EE.toString
      function wE(e) {
        return xE.call(e)
      }
      Ec.exports = wE
    })
    var Tr = U((gH, Ac) => {
      w()
      S()
      A()
      var wc = Ar(),
        SE = vc(),
        AE = xc(),
        TE = '[object Null]',
        CE = '[object Undefined]',
        Sc = wc ? wc.toStringTag : void 0
      function _E(e) {
        return e == null
          ? e === void 0
            ? CE
            : TE
          : Sc && Sc in Object(e)
            ? SE(e)
            : AE(e)
      }
      Ac.exports = _E
    })
    var mt = U((xH, Tc) => {
      w()
      S()
      A()
      function OE(e) {
        var t = typeof e
        return e != null && (t == 'object' || t == 'function')
      }
      Tc.exports = OE
    })
    var li = U((TH, Cc) => {
      w()
      S()
      A()
      var IE = Tr(),
        kE = mt(),
        PE = '[object AsyncFunction]',
        RE = '[object Function]',
        DE = '[object GeneratorFunction]',
        FE = '[object Proxy]'
      function jE(e) {
        if (!kE(e)) return !1
        var t = IE(e)
        return t == RE || t == DE || t == PE || t == FE
      }
      Cc.exports = jE
    })
    var Oc = U((IH, _c) => {
      w()
      S()
      A()
      var NE = ot(),
        BE = NE['__core-js_shared__']
      _c.exports = BE
    })
    var Pc = U((DH, kc) => {
      w()
      S()
      A()
      var ui = Oc(),
        Ic = (function () {
          var e = /[^.]+$/.exec((ui && ui.keys && ui.keys.IE_PROTO) || '')
          return e ? 'Symbol(src)_1.' + e : ''
        })()
      function LE(e) {
        return !!Ic && Ic in e
      }
      kc.exports = LE
    })
    var ci = U((BH, Rc) => {
      w()
      S()
      A()
      var qE = Function.prototype,
        ME = qE.toString
      function UE(e) {
        if (e != null) {
          try {
            return ME.call(e)
          } catch {}
          try {
            return e + ''
          } catch {}
        }
        return ''
      }
      Rc.exports = UE
    })
    var Fc = U((UH, Dc) => {
      w()
      S()
      A()
      var $E = li(),
        zE = Pc(),
        VE = mt(),
        HE = ci(),
        JE = /[\\^$.*+?()[\]{}|]/g,
        GE = /^\[object .+?Constructor\]$/,
        WE = Function.prototype,
        KE = Object.prototype,
        YE = WE.toString,
        XE = KE.hasOwnProperty,
        QE = RegExp(
          '^' +
            YE.call(XE)
              .replace(JE, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?',
              ) +
            '$',
        )
      function ZE(e) {
        if (!VE(e) || zE(e)) return !1
        var t = $E(e) ? QE : GE
        return t.test(HE(e))
      }
      Dc.exports = ZE
    })
    var Nc = U((HH, jc) => {
      w()
      S()
      A()
      function ex(e, t) {
        return e?.[t]
      }
      jc.exports = ex
    })
    var Lt = U((KH, Bc) => {
      w()
      S()
      A()
      var tx = Fc(),
        rx = Nc()
      function nx(e, t) {
        var r = rx(e, t)
        return tx(r) ? r : void 0
      }
      Bc.exports = nx
    })
    var bo = U((ZH, Lc) => {
      w()
      S()
      A()
      var ox = Lt(),
        ax = ot(),
        ix = ox(ax, 'Map')
      Lc.exports = ix
    })
    var yn = U((nJ, qc) => {
      w()
      S()
      A()
      var sx = Lt(),
        lx = sx(Object, 'create')
      qc.exports = lx
    })
    var $c = U((sJ, Uc) => {
      w()
      S()
      A()
      var Mc = yn()
      function ux() {
        ;(this.__data__ = Mc ? Mc(null) : {}), (this.size = 0)
      }
      Uc.exports = ux
    })
    var Vc = U((pJ, zc) => {
      w()
      S()
      A()
      function cx(e) {
        var t = this.has(e) && delete this.__data__[e]
        return (this.size -= t ? 1 : 0), t
      }
      zc.exports = cx
    })
    var Jc = U((hJ, Hc) => {
      w()
      S()
      A()
      var px = yn(),
        dx = '__lodash_hash_undefined__',
        fx = Object.prototype,
        yx = fx.hasOwnProperty
      function hx(e) {
        var t = this.__data__
        if (px) {
          var r = t[e]
          return r === dx ? void 0 : r
        }
        return yx.call(t, e) ? t[e] : void 0
      }
      Hc.exports = hx
    })
    var Wc = U((vJ, Gc) => {
      w()
      S()
      A()
      var mx = yn(),
        gx = Object.prototype,
        bx = gx.hasOwnProperty
      function vx(e) {
        var t = this.__data__
        return mx ? t[e] !== void 0 : bx.call(t, e)
      }
      Gc.exports = vx
    })
    var Yc = U((SJ, Kc) => {
      w()
      S()
      A()
      var Ex = yn(),
        xx = '__lodash_hash_undefined__'
      function wx(e, t) {
        var r = this.__data__
        return (
          (this.size += this.has(e) ? 0 : 1),
          (r[e] = Ex && t === void 0 ? xx : t),
          this
        )
      }
      Kc.exports = wx
    })
    var Qc = U((_J, Xc) => {
      w()
      S()
      A()
      var Sx = $c(),
        Ax = Vc(),
        Tx = Jc(),
        Cx = Wc(),
        _x = Yc()
      function Cr(e) {
        var t = -1,
          r = e == null ? 0 : e.length
        for (this.clear(); ++t < r; ) {
          var n = e[t]
          this.set(n[0], n[1])
        }
      }
      Cr.prototype.clear = Sx
      Cr.prototype.delete = Ax
      Cr.prototype.get = Tx
      Cr.prototype.has = Cx
      Cr.prototype.set = _x
      Xc.exports = Cr
    })
    var tp = U((PJ, ep) => {
      w()
      S()
      A()
      var Zc = Qc(),
        Ox = dn(),
        Ix = bo()
      function kx() {
        ;(this.size = 0),
          (this.__data__ = {
            hash: new Zc(),
            map: new (Ix || Ox)(),
            string: new Zc(),
          })
      }
      ep.exports = kx
    })
    var np = U((jJ, rp) => {
      w()
      S()
      A()
      function Px(e) {
        var t = typeof e
        return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
          ? e !== '__proto__'
          : e === null
      }
      rp.exports = Px
    })
    var hn = U((qJ, op) => {
      w()
      S()
      A()
      var Rx = np()
      function Dx(e, t) {
        var r = e.__data__
        return Rx(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
      }
      op.exports = Dx
    })
    var ip = U((zJ, ap) => {
      w()
      S()
      A()
      var Fx = hn()
      function jx(e) {
        var t = Fx(this, e).delete(e)
        return (this.size -= t ? 1 : 0), t
      }
      ap.exports = jx
    })
    var lp = U((GJ, sp) => {
      w()
      S()
      A()
      var Nx = hn()
      function Bx(e) {
        return Nx(this, e).get(e)
      }
      sp.exports = Bx
    })
    var cp = U((XJ, up) => {
      w()
      S()
      A()
      var Lx = hn()
      function qx(e) {
        return Lx(this, e).has(e)
      }
      up.exports = qx
    })
    var dp = U((tG, pp) => {
      w()
      S()
      A()
      var Mx = hn()
      function Ux(e, t) {
        var r = Mx(this, e),
          n = r.size
        return r.set(e, t), (this.size += r.size == n ? 0 : 1), this
      }
      pp.exports = Ux
    })
    var vo = U((aG, fp) => {
      w()
      S()
      A()
      var $x = tp(),
        zx = ip(),
        Vx = lp(),
        Hx = cp(),
        Jx = dp()
      function _r(e) {
        var t = -1,
          r = e == null ? 0 : e.length
        for (this.clear(); ++t < r; ) {
          var n = e[t]
          this.set(n[0], n[1])
        }
      }
      _r.prototype.clear = $x
      _r.prototype.delete = zx
      _r.prototype.get = Vx
      _r.prototype.has = Hx
      _r.prototype.set = Jx
      fp.exports = _r
    })
    var hp = U((uG, yp) => {
      w()
      S()
      A()
      var Gx = dn(),
        Wx = bo(),
        Kx = vo(),
        Yx = 200
      function Xx(e, t) {
        var r = this.__data__
        if (r instanceof Gx) {
          var n = r.__data__
          if (!Wx || n.length < Yx - 1)
            return n.push([e, t]), (this.size = ++r.size), this
          r = this.__data__ = new Kx(n)
        }
        return r.set(e, t), (this.size = r.size), this
      }
      yp.exports = Xx
    })
    var Eo = U((fG, mp) => {
      w()
      S()
      A()
      var Qx = dn(),
        Zx = ic(),
        ew = lc(),
        tw = cc(),
        rw = dc(),
        nw = hp()
      function Or(e) {
        var t = (this.__data__ = new Qx(e))
        this.size = t.size
      }
      Or.prototype.clear = Zx
      Or.prototype.delete = ew
      Or.prototype.get = tw
      Or.prototype.has = rw
      Or.prototype.set = nw
      mp.exports = Or
    })
    var bp = U((gG, gp) => {
      w()
      S()
      A()
      var ow = '__lodash_hash_undefined__'
      function aw(e) {
        return this.__data__.set(e, ow), this
      }
      gp.exports = aw
    })
    var Ep = U((xG, vp) => {
      w()
      S()
      A()
      function iw(e) {
        return this.__data__.has(e)
      }
      vp.exports = iw
    })
    var pi = U((TG, xp) => {
      w()
      S()
      A()
      var sw = vo(),
        lw = bp(),
        uw = Ep()
      function xo(e) {
        var t = -1,
          r = e == null ? 0 : e.length
        for (this.__data__ = new sw(); ++t < r; ) this.add(e[t])
      }
      xo.prototype.add = xo.prototype.push = lw
      xo.prototype.has = uw
      xp.exports = xo
    })
    var Sp = U((IG, wp) => {
      w()
      S()
      A()
      function cw(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
          if (t(e[r], r, e)) return !0
        return !1
      }
      wp.exports = cw
    })
    var di = U((DG, Ap) => {
      w()
      S()
      A()
      function pw(e, t) {
        return e.has(t)
      }
      Ap.exports = pw
    })
    var fi = U((BG, Tp) => {
      w()
      S()
      A()
      var dw = pi(),
        fw = Sp(),
        yw = di(),
        hw = 1,
        mw = 2
      function gw(e, t, r, n, o, a) {
        var i = r & hw,
          s = e.length,
          l = t.length
        if (s != l && !(i && l > s)) return !1
        var u = a.get(e),
          c = a.get(t)
        if (u && c) return u == t && c == e
        var d = -1,
          y = !0,
          f = r & mw ? new dw() : void 0
        for (a.set(e, t), a.set(t, e); ++d < s; ) {
          var h = e[d],
            g = t[d]
          if (n) var C = i ? n(g, h, d, t, e, a) : n(h, g, d, e, t, a)
          if (C !== void 0) {
            if (C) continue
            y = !1
            break
          }
          if (f) {
            if (
              !fw(t, function (b, E) {
                if (!yw(f, E) && (h === b || o(h, b, r, n, a))) return f.push(E)
              })
            ) {
              y = !1
              break
            }
          } else if (!(h === g || o(h, g, r, n, a))) {
            y = !1
            break
          }
        }
        return a.delete(e), a.delete(t), y
      }
      Tp.exports = gw
    })
    var yi = U((UG, Cp) => {
      w()
      S()
      A()
      var bw = ot(),
        vw = bw.Uint8Array
      Cp.exports = vw
    })
    var Op = U((HG, _p) => {
      w()
      S()
      A()
      function Ew(e) {
        var t = -1,
          r = Array(e.size)
        return (
          e.forEach(function (n, o) {
            r[++t] = [o, n]
          }),
          r
        )
      }
      _p.exports = Ew
    })
    var wo = U((KG, Ip) => {
      w()
      S()
      A()
      function xw(e) {
        var t = -1,
          r = Array(e.size)
        return (
          e.forEach(function (n) {
            r[++t] = n
          }),
          r
        )
      }
      Ip.exports = xw
    })
    var Fp = U((ZG, Dp) => {
      w()
      S()
      A()
      var kp = Ar(),
        Pp = yi(),
        ww = go(),
        Sw = fi(),
        Aw = Op(),
        Tw = wo(),
        Cw = 1,
        _w = 2,
        Ow = '[object Boolean]',
        Iw = '[object Date]',
        kw = '[object Error]',
        Pw = '[object Map]',
        Rw = '[object Number]',
        Dw = '[object RegExp]',
        Fw = '[object Set]',
        jw = '[object String]',
        Nw = '[object Symbol]',
        Bw = '[object ArrayBuffer]',
        Lw = '[object DataView]',
        Rp = kp ? kp.prototype : void 0,
        hi = Rp ? Rp.valueOf : void 0
      function qw(e, t, r, n, o, a, i) {
        switch (r) {
          case Lw:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1
            ;(e = e.buffer), (t = t.buffer)
          case Bw:
            return !(e.byteLength != t.byteLength || !a(new Pp(e), new Pp(t)))
          case Ow:
          case Iw:
          case Rw:
            return ww(+e, +t)
          case kw:
            return e.name == t.name && e.message == t.message
          case Dw:
          case jw:
            return e == t + ''
          case Pw:
            var s = Aw
          case Fw:
            var l = n & Cw
            if ((s || (s = Tw), e.size != t.size && !l)) return !1
            var u = i.get(e)
            if (u) return u == t
            ;(n |= _w), i.set(e, t)
            var c = Sw(s(e), s(t), n, o, a, i)
            return i.delete(e), c
          case Nw:
            if (hi) return hi.call(e) == hi.call(t)
        }
        return !1
      }
      Dp.exports = qw
    })
    var mi = U((nW, jp) => {
      w()
      S()
      A()
      function Mw(e, t) {
        for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r]
        return e
      }
      jp.exports = Mw
    })
    var gt = U((sW, Np) => {
      w()
      S()
      A()
      var Uw = Array.isArray
      Np.exports = Uw
    })
    var gi = U((pW, Bp) => {
      w()
      S()
      A()
      var $w = mi(),
        zw = gt()
      function Vw(e, t, r) {
        var n = t(e)
        return zw(e) ? n : $w(n, r(e))
      }
      Bp.exports = Vw
    })
    var qp = U((hW, Lp) => {
      w()
      S()
      A()
      function Hw(e, t) {
        for (
          var r = -1, n = e == null ? 0 : e.length, o = 0, a = [];
          ++r < n;

        ) {
          var i = e[r]
          t(i, r, e) && (a[o++] = i)
        }
        return a
      }
      Lp.exports = Hw
    })
    var bi = U((vW, Mp) => {
      w()
      S()
      A()
      function Jw() {
        return []
      }
      Mp.exports = Jw
    })
    var So = U((SW, $p) => {
      w()
      S()
      A()
      var Gw = qp(),
        Ww = bi(),
        Kw = Object.prototype,
        Yw = Kw.propertyIsEnumerable,
        Up = Object.getOwnPropertySymbols,
        Xw = Up
          ? function (e) {
              return e == null
                ? []
                : ((e = Object(e)),
                  Gw(Up(e), function (t) {
                    return Yw.call(e, t)
                  }))
            }
          : Ww
      $p.exports = Xw
    })
    var Vp = U((_W, zp) => {
      w()
      S()
      A()
      function Qw(e, t) {
        for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r)
        return n
      }
      zp.exports = Qw
    })
    var qt = U((PW, Hp) => {
      w()
      S()
      A()
      function Zw(e) {
        return e != null && typeof e == 'object'
      }
      Hp.exports = Zw
    })
    var Gp = U((jW, Jp) => {
      w()
      S()
      A()
      var eS = Tr(),
        tS = qt(),
        rS = '[object Arguments]'
      function nS(e) {
        return tS(e) && eS(e) == rS
      }
      Jp.exports = nS
    })
    var vi = U((qW, Yp) => {
      w()
      S()
      A()
      var Wp = Gp(),
        oS = qt(),
        Kp = Object.prototype,
        aS = Kp.hasOwnProperty,
        iS = Kp.propertyIsEnumerable,
        sS = Wp(
          (function () {
            return arguments
          })(),
        )
          ? Wp
          : function (e) {
              return oS(e) && aS.call(e, 'callee') && !iS.call(e, 'callee')
            }
      Yp.exports = sS
    })
    var Qp = U((zW, Xp) => {
      w()
      S()
      A()
      function lS() {
        return !1
      }
      Xp.exports = lS
    })
    var Ao = U((mn, Ir) => {
      w()
      S()
      A()
      var uS = ot(),
        cS = Qp(),
        td = typeof mn == 'object' && mn && !mn.nodeType && mn,
        Zp = td && typeof Ir == 'object' && Ir && !Ir.nodeType && Ir,
        pS = Zp && Zp.exports === td,
        ed = pS ? uS.Buffer : void 0,
        dS = ed ? ed.isBuffer : void 0,
        fS = dS || cS
      Ir.exports = fS
    })
    var To = U((YW, rd) => {
      w()
      S()
      A()
      var yS = 9007199254740991,
        hS = /^(?:0|[1-9]\d*)$/
      function mS(e, t) {
        var r = typeof e
        return (
          (t = t ?? yS),
          !!t &&
            (r == 'number' || (r != 'symbol' && hS.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < t
        )
      }
      rd.exports = mS
    })
    var Co = U((eK, nd) => {
      w()
      S()
      A()
      var gS = 9007199254740991
      function bS(e) {
        return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= gS
      }
      nd.exports = bS
    })
    var ad = U((oK, od) => {
      w()
      S()
      A()
      var vS = Tr(),
        ES = Co(),
        xS = qt(),
        wS = '[object Arguments]',
        SS = '[object Array]',
        AS = '[object Boolean]',
        TS = '[object Date]',
        CS = '[object Error]',
        _S = '[object Function]',
        OS = '[object Map]',
        IS = '[object Number]',
        kS = '[object Object]',
        PS = '[object RegExp]',
        RS = '[object Set]',
        DS = '[object String]',
        FS = '[object WeakMap]',
        jS = '[object ArrayBuffer]',
        NS = '[object DataView]',
        BS = '[object Float32Array]',
        LS = '[object Float64Array]',
        qS = '[object Int8Array]',
        MS = '[object Int16Array]',
        US = '[object Int32Array]',
        $S = '[object Uint8Array]',
        zS = '[object Uint8ClampedArray]',
        VS = '[object Uint16Array]',
        HS = '[object Uint32Array]',
        Ee = {}
      Ee[BS] =
        Ee[LS] =
        Ee[qS] =
        Ee[MS] =
        Ee[US] =
        Ee[$S] =
        Ee[zS] =
        Ee[VS] =
        Ee[HS] =
          !0
      Ee[wS] =
        Ee[SS] =
        Ee[jS] =
        Ee[AS] =
        Ee[NS] =
        Ee[TS] =
        Ee[CS] =
        Ee[_S] =
        Ee[OS] =
        Ee[IS] =
        Ee[kS] =
        Ee[PS] =
        Ee[RS] =
        Ee[DS] =
        Ee[FS] =
          !1
      function JS(e) {
        return xS(e) && ES(e.length) && !!Ee[vS(e)]
      }
      od.exports = JS
    })
    var _o = U((lK, id) => {
      w()
      S()
      A()
      function GS(e) {
        return function (t) {
          return e(t)
        }
      }
      id.exports = GS
    })
    var Oo = U((gn, kr) => {
      w()
      S()
      A()
      var WS = si(),
        sd = typeof gn == 'object' && gn && !gn.nodeType && gn,
        bn = sd && typeof kr == 'object' && kr && !kr.nodeType && kr,
        KS = bn && bn.exports === sd,
        Ei = KS && WS.process,
        YS = (function () {
          try {
            var e = bn && bn.require && bn.require('util').types
            return e || (Ei && Ei.binding && Ei.binding('util'))
          } catch {}
        })()
      kr.exports = YS
    })
    var xi = U((hK, cd) => {
      w()
      S()
      A()
      var XS = ad(),
        QS = _o(),
        ld = Oo(),
        ud = ld && ld.isTypedArray,
        ZS = ud ? QS(ud) : XS
      cd.exports = ZS
    })
    var wi = U((vK, pd) => {
      w()
      S()
      A()
      var eA = Vp(),
        tA = vi(),
        rA = gt(),
        nA = Ao(),
        oA = To(),
        aA = xi(),
        iA = Object.prototype,
        sA = iA.hasOwnProperty
      function lA(e, t) {
        var r = rA(e),
          n = !r && tA(e),
          o = !r && !n && nA(e),
          a = !r && !n && !o && aA(e),
          i = r || n || o || a,
          s = i ? eA(e.length, String) : [],
          l = s.length
        for (var u in e)
          (t || sA.call(e, u)) &&
            !(
              i &&
              (u == 'length' ||
                (o && (u == 'offset' || u == 'parent')) ||
                (a &&
                  (u == 'buffer' || u == 'byteLength' || u == 'byteOffset')) ||
                oA(u, l))
            ) &&
            s.push(u)
        return s
      }
      pd.exports = lA
    })
    var Io = U((SK, dd) => {
      w()
      S()
      A()
      var uA = Object.prototype
      function cA(e) {
        var t = e && e.constructor,
          r = (typeof t == 'function' && t.prototype) || uA
        return e === r
      }
      dd.exports = cA
    })
    var Si = U((_K, fd) => {
      w()
      S()
      A()
      function pA(e, t) {
        return function (r) {
          return e(t(r))
        }
      }
      fd.exports = pA
    })
    var hd = U((PK, yd) => {
      w()
      S()
      A()
      var dA = Si(),
        fA = dA(Object.keys, Object)
      yd.exports = fA
    })
    var gd = U((jK, md) => {
      w()
      S()
      A()
      var yA = Io(),
        hA = hd(),
        mA = Object.prototype,
        gA = mA.hasOwnProperty
      function bA(e) {
        if (!yA(e)) return hA(e)
        var t = []
        for (var r in Object(e))
          gA.call(e, r) && r != 'constructor' && t.push(r)
        return t
      }
      md.exports = bA
    })
    var Ai = U((qK, bd) => {
      w()
      S()
      A()
      var vA = li(),
        EA = Co()
      function xA(e) {
        return e != null && EA(e.length) && !vA(e)
      }
      bd.exports = xA
    })
    var vn = U((zK, vd) => {
      w()
      S()
      A()
      var wA = wi(),
        SA = gd(),
        AA = Ai()
      function TA(e) {
        return AA(e) ? wA(e) : SA(e)
      }
      vd.exports = TA
    })
    var Ti = U((GK, Ed) => {
      w()
      S()
      A()
      var CA = gi(),
        _A = So(),
        OA = vn()
      function IA(e) {
        return CA(e, OA, _A)
      }
      Ed.exports = IA
    })
    var Sd = U((XK, wd) => {
      w()
      S()
      A()
      var xd = Ti(),
        kA = 1,
        PA = Object.prototype,
        RA = PA.hasOwnProperty
      function DA(e, t, r, n, o, a) {
        var i = r & kA,
          s = xd(e),
          l = s.length,
          u = xd(t),
          c = u.length
        if (l != c && !i) return !1
        for (var d = l; d--; ) {
          var y = s[d]
          if (!(i ? y in t : RA.call(t, y))) return !1
        }
        var f = a.get(e),
          h = a.get(t)
        if (f && h) return f == t && h == e
        var g = !0
        a.set(e, t), a.set(t, e)
        for (var C = i; ++d < l; ) {
          y = s[d]
          var b = e[y],
            E = t[y]
          if (n) var _ = i ? n(E, b, y, t, e, a) : n(b, E, y, e, t, a)
          if (!(_ === void 0 ? b === E || o(b, E, r, n, a) : _)) {
            g = !1
            break
          }
          C || (C = y == 'constructor')
        }
        if (g && !C) {
          var T = e.constructor,
            O = t.constructor
          T != O &&
            'constructor' in e &&
            'constructor' in t &&
            !(
              typeof T == 'function' &&
              T instanceof T &&
              typeof O == 'function' &&
              O instanceof O
            ) &&
            (g = !1)
        }
        return a.delete(e), a.delete(t), g
      }
      wd.exports = DA
    })
    var Td = U((tY, Ad) => {
      w()
      S()
      A()
      var FA = Lt(),
        jA = ot(),
        NA = FA(jA, 'DataView')
      Ad.exports = NA
    })
    var _d = U((aY, Cd) => {
      w()
      S()
      A()
      var BA = Lt(),
        LA = ot(),
        qA = BA(LA, 'Promise')
      Cd.exports = qA
    })
    var Ci = U((uY, Od) => {
      w()
      S()
      A()
      var MA = Lt(),
        UA = ot(),
        $A = MA(UA, 'Set')
      Od.exports = $A
    })
    var kd = U((fY, Id) => {
      w()
      S()
      A()
      var zA = Lt(),
        VA = ot(),
        HA = zA(VA, 'WeakMap')
      Id.exports = HA
    })
    var En = U((gY, Bd) => {
      w()
      S()
      A()
      var _i = Td(),
        Oi = bo(),
        Ii = _d(),
        ki = Ci(),
        Pi = kd(),
        Nd = Tr(),
        Pr = ci(),
        Pd = '[object Map]',
        JA = '[object Object]',
        Rd = '[object Promise]',
        Dd = '[object Set]',
        Fd = '[object WeakMap]',
        jd = '[object DataView]',
        GA = Pr(_i),
        WA = Pr(Oi),
        KA = Pr(Ii),
        YA = Pr(ki),
        XA = Pr(Pi),
        tr = Nd
      ;((_i && tr(new _i(new ArrayBuffer(1))) != jd) ||
        (Oi && tr(new Oi()) != Pd) ||
        (Ii && tr(Ii.resolve()) != Rd) ||
        (ki && tr(new ki()) != Dd) ||
        (Pi && tr(new Pi()) != Fd)) &&
        (tr = function (e) {
          var t = Nd(e),
            r = t == JA ? e.constructor : void 0,
            n = r ? Pr(r) : ''
          if (n)
            switch (n) {
              case GA:
                return jd
              case WA:
                return Pd
              case KA:
                return Rd
              case YA:
                return Dd
              case XA:
                return Fd
            }
          return t
        })
      Bd.exports = tr
    })
    var Hd = U((xY, Vd) => {
      w()
      S()
      A()
      var Ri = Eo(),
        QA = fi(),
        ZA = Fp(),
        eT = Sd(),
        Ld = En(),
        qd = gt(),
        Md = Ao(),
        tT = xi(),
        rT = 1,
        Ud = '[object Arguments]',
        $d = '[object Array]',
        ko = '[object Object]',
        nT = Object.prototype,
        zd = nT.hasOwnProperty
      function oT(e, t, r, n, o, a) {
        var i = qd(e),
          s = qd(t),
          l = i ? $d : Ld(e),
          u = s ? $d : Ld(t)
        ;(l = l == Ud ? ko : l), (u = u == Ud ? ko : u)
        var c = l == ko,
          d = u == ko,
          y = l == u
        if (y && Md(e)) {
          if (!Md(t)) return !1
          ;(i = !0), (c = !1)
        }
        if (y && !c)
          return (
            a || (a = new Ri()),
            i || tT(e) ? QA(e, t, r, n, o, a) : ZA(e, t, l, r, n, o, a)
          )
        if (!(r & rT)) {
          var f = c && zd.call(e, '__wrapped__'),
            h = d && zd.call(t, '__wrapped__')
          if (f || h) {
            var g = f ? e.value() : e,
              C = h ? t.value() : t
            return a || (a = new Ri()), o(g, C, r, n, a)
          }
        }
        return y ? (a || (a = new Ri()), eT(e, t, r, n, o, a)) : !1
      }
      Vd.exports = oT
    })
    var Di = U((TY, Wd) => {
      w()
      S()
      A()
      var aT = Hd(),
        Jd = qt()
      function Gd(e, t, r, n, o) {
        return e === t
          ? !0
          : e == null || t == null || (!Jd(e) && !Jd(t))
            ? e !== e && t !== t
            : aT(e, t, r, n, Gd, o)
      }
      Wd.exports = Gd
    })
    var Yd = U((IY, Kd) => {
      w()
      S()
      A()
      var iT = Eo(),
        sT = Di(),
        lT = 1,
        uT = 2
      function cT(e, t, r, n) {
        var o = r.length,
          a = o,
          i = !n
        if (e == null) return !a
        for (e = Object(e); o--; ) {
          var s = r[o]
          if (i && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
        }
        for (; ++o < a; ) {
          s = r[o]
          var l = s[0],
            u = e[l],
            c = s[1]
          if (i && s[2]) {
            if (u === void 0 && !(l in e)) return !1
          } else {
            var d = new iT()
            if (n) var y = n(u, c, l, e, t, d)
            if (!(y === void 0 ? sT(c, u, lT | uT, n, d) : y)) return !1
          }
        }
        return !0
      }
      Kd.exports = cT
    })
    var Fi = U((DY, Xd) => {
      w()
      S()
      A()
      var pT = mt()
      function dT(e) {
        return e === e && !pT(e)
      }
      Xd.exports = dT
    })
    var Zd = U((BY, Qd) => {
      w()
      S()
      A()
      var fT = Fi(),
        yT = vn()
      function hT(e) {
        for (var t = yT(e), r = t.length; r--; ) {
          var n = t[r],
            o = e[n]
          t[r] = [n, o, fT(o)]
        }
        return t
      }
      Qd.exports = hT
    })
    var ji = U((UY, ef) => {
      w()
      S()
      A()
      function mT(e, t) {
        return function (r) {
          return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
        }
      }
      ef.exports = mT
    })
    var rf = U((HY, tf) => {
      w()
      S()
      A()
      var gT = Yd(),
        bT = Zd(),
        vT = ji()
      function ET(e) {
        var t = bT(e)
        return t.length == 1 && t[0][2]
          ? vT(t[0][0], t[0][1])
          : function (r) {
              return r === e || gT(r, e, t)
            }
      }
      tf.exports = ET
    })
    var xn = U((KY, nf) => {
      w()
      S()
      A()
      var xT = Tr(),
        wT = qt(),
        ST = '[object Symbol]'
      function AT(e) {
        return typeof e == 'symbol' || (wT(e) && xT(e) == ST)
      }
      nf.exports = AT
    })
    var Po = U((ZY, of) => {
      w()
      S()
      A()
      var TT = gt(),
        CT = xn(),
        _T = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        OT = /^\w*$/
      function IT(e, t) {
        if (TT(e)) return !1
        var r = typeof e
        return r == 'number' ||
          r == 'symbol' ||
          r == 'boolean' ||
          e == null ||
          CT(e)
          ? !0
          : OT.test(e) || !_T.test(e) || (t != null && e in Object(t))
      }
      of.exports = IT
    })
    var lf = U((nX, sf) => {
      w()
      S()
      A()
      var af = vo(),
        kT = 'Expected a function'
      function Ni(e, t) {
        if (typeof e != 'function' || (t != null && typeof t != 'function'))
          throw new TypeError(kT)
        var r = function () {
          var n = arguments,
            o = t ? t.apply(this, n) : n[0],
            a = r.cache
          if (a.has(o)) return a.get(o)
          var i = e.apply(this, n)
          return (r.cache = a.set(o, i) || a), i
        }
        return (r.cache = new (Ni.Cache || af)()), r
      }
      Ni.Cache = af
      sf.exports = Ni
    })
    var cf = U((sX, uf) => {
      w()
      S()
      A()
      var PT = lf(),
        RT = 500
      function DT(e) {
        var t = PT(e, function (n) {
            return r.size === RT && r.clear(), n
          }),
          r = t.cache
        return t
      }
      uf.exports = DT
    })
    var df = U((pX, pf) => {
      w()
      S()
      A()
      var FT = cf(),
        jT =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        NT = /\\(\\)?/g,
        BT = FT(function (e) {
          var t = []
          return (
            e.charCodeAt(0) === 46 && t.push(''),
            e.replace(jT, function (r, n, o, a) {
              t.push(o ? a.replace(NT, '$1') : n || r)
            }),
            t
          )
        })
      pf.exports = BT
    })
    var bf = U((hX, gf) => {
      w()
      S()
      A()
      var ff = Ar(),
        LT = ii(),
        qT = gt(),
        MT = xn(),
        UT = 1 / 0,
        yf = ff ? ff.prototype : void 0,
        hf = yf ? yf.toString : void 0
      function mf(e) {
        if (typeof e == 'string') return e
        if (qT(e)) return LT(e, mf) + ''
        if (MT(e)) return hf ? hf.call(e) : ''
        var t = e + ''
        return t == '0' && 1 / e == -UT ? '-0' : t
      }
      gf.exports = mf
    })
    var Ef = U((vX, vf) => {
      w()
      S()
      A()
      var $T = bf()
      function zT(e) {
        return e == null ? '' : $T(e)
      }
      vf.exports = zT
    })
    var wn = U((SX, xf) => {
      w()
      S()
      A()
      var VT = gt(),
        HT = Po(),
        JT = df(),
        GT = Ef()
      function WT(e, t) {
        return VT(e) ? e : HT(e, t) ? [e] : JT(GT(e))
      }
      xf.exports = WT
    })
    var Rr = U((_X, wf) => {
      w()
      S()
      A()
      var KT = xn(),
        YT = 1 / 0
      function XT(e) {
        if (typeof e == 'string' || KT(e)) return e
        var t = e + ''
        return t == '0' && 1 / e == -YT ? '-0' : t
      }
      wf.exports = XT
    })
    var Ro = U((PX, Sf) => {
      w()
      S()
      A()
      var QT = wn(),
        ZT = Rr()
      function eC(e, t) {
        t = QT(t, e)
        for (var r = 0, n = t.length; e != null && r < n; ) e = e[ZT(t[r++])]
        return r && r == n ? e : void 0
      }
      Sf.exports = eC
    })
    var Tf = U((jX, Af) => {
      w()
      S()
      A()
      var tC = Ro()
      function rC(e, t, r) {
        var n = e == null ? void 0 : tC(e, t)
        return n === void 0 ? r : n
      }
      Af.exports = rC
    })
    var _f = U((qX, Cf) => {
      w()
      S()
      A()
      function nC(e, t) {
        return e != null && t in Object(e)
      }
      Cf.exports = nC
    })
    var If = U((zX, Of) => {
      w()
      S()
      A()
      var oC = wn(),
        aC = vi(),
        iC = gt(),
        sC = To(),
        lC = Co(),
        uC = Rr()
      function cC(e, t, r) {
        t = oC(t, e)
        for (var n = -1, o = t.length, a = !1; ++n < o; ) {
          var i = uC(t[n])
          if (!(a = e != null && r(e, i))) break
          e = e[i]
        }
        return a || ++n != o
          ? a
          : ((o = e == null ? 0 : e.length),
            !!o && lC(o) && sC(i, o) && (iC(e) || aC(e)))
      }
      Of.exports = cC
    })
    var Pf = U((GX, kf) => {
      w()
      S()
      A()
      var pC = _f(),
        dC = If()
      function fC(e, t) {
        return e != null && dC(e, t, pC)
      }
      kf.exports = fC
    })
    var Df = U((XX, Rf) => {
      w()
      S()
      A()
      var yC = Di(),
        hC = Tf(),
        mC = Pf(),
        gC = Po(),
        bC = Fi(),
        vC = ji(),
        EC = Rr(),
        xC = 1,
        wC = 2
      function SC(e, t) {
        return gC(e) && bC(t)
          ? vC(EC(e), t)
          : function (r) {
              var n = hC(r, e)
              return n === void 0 && n === t ? mC(r, e) : yC(t, n, xC | wC)
            }
      }
      Rf.exports = SC
    })
    var jf = U((tQ, Ff) => {
      w()
      S()
      A()
      function AC(e) {
        return e
      }
      Ff.exports = AC
    })
    var Bf = U((aQ, Nf) => {
      w()
      S()
      A()
      function TC(e) {
        return function (t) {
          return t?.[e]
        }
      }
      Nf.exports = TC
    })
    var qf = U((uQ, Lf) => {
      w()
      S()
      A()
      var CC = Ro()
      function _C(e) {
        return function (t) {
          return CC(t, e)
        }
      }
      Lf.exports = _C
    })
    var Uf = U((fQ, Mf) => {
      w()
      S()
      A()
      var OC = Bf(),
        IC = qf(),
        kC = Po(),
        PC = Rr()
      function RC(e) {
        return kC(e) ? OC(PC(e)) : IC(e)
      }
      Mf.exports = RC
    })
    var zf = U((gQ, $f) => {
      w()
      S()
      A()
      var DC = rf(),
        FC = Df(),
        jC = jf(),
        NC = gt(),
        BC = Uf()
      function LC(e) {
        return typeof e == 'function'
          ? e
          : e == null
            ? jC
            : typeof e == 'object'
              ? NC(e)
                ? FC(e[0], e[1])
                : DC(e)
              : BC(e)
      }
      $f.exports = LC
    })
    var Hf = U((xQ, Vf) => {
      w()
      S()
      A()
      var qC = Lt(),
        MC = (function () {
          try {
            var e = qC(Object, 'defineProperty')
            return e({}, '', {}), e
          } catch {}
        })()
      Vf.exports = MC
    })
    var Bi = U((TQ, Gf) => {
      w()
      S()
      A()
      var Jf = Hf()
      function UC(e, t, r) {
        t == '__proto__' && Jf
          ? Jf(e, t, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            })
          : (e[t] = r)
      }
      Gf.exports = UC
    })
    var Do = U((IQ, Wf) => {
      w()
      S()
      A()
      var $C = Bi(),
        zC = go(),
        VC = Object.prototype,
        HC = VC.hasOwnProperty
      function JC(e, t, r) {
        var n = e[t]
        ;(!(HC.call(e, t) && zC(n, r)) || (r === void 0 && !(t in e))) &&
          $C(e, t, r)
      }
      Wf.exports = JC
    })
    var Xf = U((DQ, Yf) => {
      w()
      S()
      A()
      var GC = Do(),
        WC = wn(),
        KC = To(),
        Kf = mt(),
        YC = Rr()
      function XC(e, t, r, n) {
        if (!Kf(e)) return e
        t = WC(t, e)
        for (
          var o = -1, a = t.length, i = a - 1, s = e;
          s != null && ++o < a;

        ) {
          var l = YC(t[o]),
            u = r
          if (l === '__proto__' || l === 'constructor' || l === 'prototype')
            return e
          if (o != i) {
            var c = s[l]
            ;(u = n ? n(c, l, s) : void 0),
              u === void 0 && (u = Kf(c) ? c : KC(t[o + 1]) ? [] : {})
          }
          GC(s, l, u), (s = s[l])
        }
        return e
      }
      Yf.exports = XC
    })
    var Zf = U((BQ, Qf) => {
      w()
      S()
      A()
      var QC = Ro(),
        ZC = Xf(),
        e_ = wn()
      function t_(e, t, r) {
        for (var n = -1, o = t.length, a = {}; ++n < o; ) {
          var i = t[n],
            s = QC(e, i)
          r(s, i) && ZC(a, e_(i, e), s)
        }
        return a
      }
      Qf.exports = t_
    })
    var Li = U((UQ, ey) => {
      w()
      S()
      A()
      var r_ = Si(),
        n_ = r_(Object.getPrototypeOf, Object)
      ey.exports = n_
    })
    var qi = U((HQ, ty) => {
      w()
      S()
      A()
      var o_ = mi(),
        a_ = Li(),
        i_ = So(),
        s_ = bi(),
        l_ = Object.getOwnPropertySymbols,
        u_ = l_
          ? function (e) {
              for (var t = []; e; ) o_(t, i_(e)), (e = a_(e))
              return t
            }
          : s_
      ty.exports = u_
    })
    var ny = U((KQ, ry) => {
      w()
      S()
      A()
      function c_(e) {
        var t = []
        if (e != null) for (var r in Object(e)) t.push(r)
        return t
      }
      ry.exports = c_
    })
    var ay = U((ZQ, oy) => {
      w()
      S()
      A()
      var p_ = mt(),
        d_ = Io(),
        f_ = ny(),
        y_ = Object.prototype,
        h_ = y_.hasOwnProperty
      function m_(e) {
        if (!p_(e)) return f_(e)
        var t = d_(e),
          r = []
        for (var n in e)
          (n == 'constructor' && (t || !h_.call(e, n))) || r.push(n)
        return r
      }
      oy.exports = m_
    })
    var Fo = U((nZ, iy) => {
      w()
      S()
      A()
      var g_ = wi(),
        b_ = ay(),
        v_ = Ai()
      function E_(e) {
        return v_(e) ? g_(e, !0) : b_(e)
      }
      iy.exports = E_
    })
    var Mi = U((sZ, sy) => {
      w()
      S()
      A()
      var x_ = gi(),
        w_ = qi(),
        S_ = Fo()
      function A_(e) {
        return x_(e, S_, w_)
      }
      sy.exports = A_
    })
    var uy = U((pZ, ly) => {
      w()
      S()
      A()
      var T_ = ii(),
        C_ = zf(),
        __ = Zf(),
        O_ = Mi()
      function I_(e, t) {
        if (e == null) return {}
        var r = T_(O_(e), function (n) {
          return [n]
        })
        return (
          (t = C_(t)),
          __(e, r, function (n, o) {
            return t(n, o[0])
          })
        )
      }
      ly.exports = I_
    })
    var py = U((hZ, cy) => {
      w()
      S()
      A()
      function k_(e, t) {
        for (
          var r = -1, n = e == null ? 0 : e.length;
          ++r < n && t(e[r], r, e) !== !1;

        );
        return e
      }
      cy.exports = k_
    })
    var Sn = U((vZ, dy) => {
      w()
      S()
      A()
      var P_ = Do(),
        R_ = Bi()
      function D_(e, t, r, n) {
        var o = !r
        r || (r = {})
        for (var a = -1, i = t.length; ++a < i; ) {
          var s = t[a],
            l = n ? n(r[s], e[s], s, r, e) : void 0
          l === void 0 && (l = e[s]), o ? R_(r, s, l) : P_(r, s, l)
        }
        return r
      }
      dy.exports = D_
    })
    var yy = U((SZ, fy) => {
      w()
      S()
      A()
      var F_ = Sn(),
        j_ = vn()
      function N_(e, t) {
        return e && F_(t, j_(t), e)
      }
      fy.exports = N_
    })
    var my = U((_Z, hy) => {
      w()
      S()
      A()
      var B_ = Sn(),
        L_ = Fo()
      function q_(e, t) {
        return e && B_(t, L_(t), e)
      }
      hy.exports = q_
    })
    var xy = U((An, Dr) => {
      w()
      S()
      A()
      var M_ = ot(),
        Ey = typeof An == 'object' && An && !An.nodeType && An,
        gy = Ey && typeof Dr == 'object' && Dr && !Dr.nodeType && Dr,
        U_ = gy && gy.exports === Ey,
        by = U_ ? M_.Buffer : void 0,
        vy = by ? by.allocUnsafe : void 0
      function $_(e, t) {
        if (t) return e.slice()
        var r = e.length,
          n = vy ? vy(r) : new e.constructor(r)
        return e.copy(n), n
      }
      Dr.exports = $_
    })
    var Sy = U((FZ, wy) => {
      w()
      S()
      A()
      function z_(e, t) {
        var r = -1,
          n = e.length
        for (t || (t = Array(n)); ++r < n; ) t[r] = e[r]
        return t
      }
      wy.exports = z_
    })
    var Ty = U((LZ, Ay) => {
      w()
      S()
      A()
      var V_ = Sn(),
        H_ = So()
      function J_(e, t) {
        return V_(e, H_(e), t)
      }
      Ay.exports = J_
    })
    var _y = U(($Z, Cy) => {
      w()
      S()
      A()
      var G_ = Sn(),
        W_ = qi()
      function K_(e, t) {
        return G_(e, W_(e), t)
      }
      Cy.exports = K_
    })
    var Iy = U((JZ, Oy) => {
      w()
      S()
      A()
      var Y_ = Object.prototype,
        X_ = Y_.hasOwnProperty
      function Q_(e) {
        var t = e.length,
          r = new e.constructor(t)
        return (
          t &&
            typeof e[0] == 'string' &&
            X_.call(e, 'index') &&
            ((r.index = e.index), (r.input = e.input)),
          r
        )
      }
      Oy.exports = Q_
    })
    var jo = U((YZ, Py) => {
      w()
      S()
      A()
      var ky = yi()
      function Z_(e) {
        var t = new e.constructor(e.byteLength)
        return new ky(t).set(new ky(e)), t
      }
      Py.exports = Z_
    })
    var Dy = U((eee, Ry) => {
      w()
      S()
      A()
      var eO = jo()
      function tO(e, t) {
        var r = t ? eO(e.buffer) : e.buffer
        return new e.constructor(r, e.byteOffset, e.byteLength)
      }
      Ry.exports = tO
    })
    var jy = U((oee, Fy) => {
      w()
      S()
      A()
      var rO = /\w*$/
      function nO(e) {
        var t = new e.constructor(e.source, rO.exec(e))
        return (t.lastIndex = e.lastIndex), t
      }
      Fy.exports = nO
    })
    var My = U((lee, qy) => {
      w()
      S()
      A()
      var Ny = Ar(),
        By = Ny ? Ny.prototype : void 0,
        Ly = By ? By.valueOf : void 0
      function oO(e) {
        return Ly ? Object(Ly.call(e)) : {}
      }
      qy.exports = oO
    })
    var $y = U((dee, Uy) => {
      w()
      S()
      A()
      var aO = jo()
      function iO(e, t) {
        var r = t ? aO(e.buffer) : e.buffer
        return new e.constructor(r, e.byteOffset, e.length)
      }
      Uy.exports = iO
    })
    var Vy = U((mee, zy) => {
      w()
      S()
      A()
      var sO = jo(),
        lO = Dy(),
        uO = jy(),
        cO = My(),
        pO = $y(),
        dO = '[object Boolean]',
        fO = '[object Date]',
        yO = '[object Map]',
        hO = '[object Number]',
        mO = '[object RegExp]',
        gO = '[object Set]',
        bO = '[object String]',
        vO = '[object Symbol]',
        EO = '[object ArrayBuffer]',
        xO = '[object DataView]',
        wO = '[object Float32Array]',
        SO = '[object Float64Array]',
        AO = '[object Int8Array]',
        TO = '[object Int16Array]',
        CO = '[object Int32Array]',
        _O = '[object Uint8Array]',
        OO = '[object Uint8ClampedArray]',
        IO = '[object Uint16Array]',
        kO = '[object Uint32Array]'
      function PO(e, t, r) {
        var n = e.constructor
        switch (t) {
          case EO:
            return sO(e)
          case dO:
          case fO:
            return new n(+e)
          case xO:
            return lO(e, r)
          case wO:
          case SO:
          case AO:
          case TO:
          case CO:
          case _O:
          case OO:
          case IO:
          case kO:
            return pO(e, r)
          case yO:
            return new n()
          case hO:
          case bO:
            return new n(e)
          case mO:
            return uO(e)
          case gO:
            return new n()
          case vO:
            return cO(e)
        }
      }
      zy.exports = PO
    })
    var Gy = U((Eee, Jy) => {
      w()
      S()
      A()
      var RO = mt(),
        Hy = Object.create,
        DO = (function () {
          function e() {}
          return function (t) {
            if (!RO(t)) return {}
            if (Hy) return Hy(t)
            e.prototype = t
            var r = new e()
            return (e.prototype = void 0), r
          }
        })()
      Jy.exports = DO
    })
    var Ky = U((Aee, Wy) => {
      w()
      S()
      A()
      var FO = Gy(),
        jO = Li(),
        NO = Io()
      function BO(e) {
        return typeof e.constructor == 'function' && !NO(e) ? FO(jO(e)) : {}
      }
      Wy.exports = BO
    })
    var Xy = U((Oee, Yy) => {
      w()
      S()
      A()
      var LO = En(),
        qO = qt(),
        MO = '[object Map]'
      function UO(e) {
        return qO(e) && LO(e) == MO
      }
      Yy.exports = UO
    })
    var th = U((Ree, eh) => {
      w()
      S()
      A()
      var $O = Xy(),
        zO = _o(),
        Qy = Oo(),
        Zy = Qy && Qy.isMap,
        VO = Zy ? zO(Zy) : $O
      eh.exports = VO
    })
    var nh = U((Nee, rh) => {
      w()
      S()
      A()
      var HO = En(),
        JO = qt(),
        GO = '[object Set]'
      function WO(e) {
        return JO(e) && HO(e) == GO
      }
      rh.exports = WO
    })
    var sh = U((Mee, ih) => {
      w()
      S()
      A()
      var KO = nh(),
        YO = _o(),
        oh = Oo(),
        ah = oh && oh.isSet,
        XO = ah ? YO(ah) : KO
      ih.exports = XO
    })
    var dh = U((Vee, ph) => {
      w()
      S()
      A()
      var QO = Eo(),
        ZO = py(),
        eI = Do(),
        tI = yy(),
        rI = my(),
        nI = xy(),
        oI = Sy(),
        aI = Ty(),
        iI = _y(),
        sI = Ti(),
        lI = Mi(),
        uI = En(),
        cI = Iy(),
        pI = Vy(),
        dI = Ky(),
        fI = gt(),
        yI = Ao(),
        hI = th(),
        mI = mt(),
        gI = sh(),
        bI = vn(),
        vI = Fo(),
        EI = 1,
        xI = 2,
        wI = 4,
        lh = '[object Arguments]',
        SI = '[object Array]',
        AI = '[object Boolean]',
        TI = '[object Date]',
        CI = '[object Error]',
        uh = '[object Function]',
        _I = '[object GeneratorFunction]',
        OI = '[object Map]',
        II = '[object Number]',
        ch = '[object Object]',
        kI = '[object RegExp]',
        PI = '[object Set]',
        RI = '[object String]',
        DI = '[object Symbol]',
        FI = '[object WeakMap]',
        jI = '[object ArrayBuffer]',
        NI = '[object DataView]',
        BI = '[object Float32Array]',
        LI = '[object Float64Array]',
        qI = '[object Int8Array]',
        MI = '[object Int16Array]',
        UI = '[object Int32Array]',
        $I = '[object Uint8Array]',
        zI = '[object Uint8ClampedArray]',
        VI = '[object Uint16Array]',
        HI = '[object Uint32Array]',
        ve = {}
      ve[lh] =
        ve[SI] =
        ve[jI] =
        ve[NI] =
        ve[AI] =
        ve[TI] =
        ve[BI] =
        ve[LI] =
        ve[qI] =
        ve[MI] =
        ve[UI] =
        ve[OI] =
        ve[II] =
        ve[ch] =
        ve[kI] =
        ve[PI] =
        ve[RI] =
        ve[DI] =
        ve[$I] =
        ve[zI] =
        ve[VI] =
        ve[HI] =
          !0
      ve[CI] = ve[uh] = ve[FI] = !1
      function No(e, t, r, n, o, a) {
        var i,
          s = t & EI,
          l = t & xI,
          u = t & wI
        if ((r && (i = o ? r(e, n, o, a) : r(e)), i !== void 0)) return i
        if (!mI(e)) return e
        var c = fI(e)
        if (c) {
          if (((i = cI(e)), !s)) return oI(e, i)
        } else {
          var d = uI(e),
            y = d == uh || d == _I
          if (yI(e)) return nI(e, s)
          if (d == ch || d == lh || (y && !o)) {
            if (((i = l || y ? {} : dI(e)), !s))
              return l ? iI(e, rI(i, e)) : aI(e, tI(i, e))
          } else {
            if (!ve[d]) return o ? e : {}
            i = pI(e, d, s)
          }
        }
        a || (a = new QO())
        var f = a.get(e)
        if (f) return f
        a.set(e, i),
          gI(e)
            ? e.forEach(function (C) {
                i.add(No(C, t, r, C, e, a))
              })
            : hI(e) &&
              e.forEach(function (C, b) {
                i.set(b, No(C, t, r, b, e, a))
              })
        var h = u ? (l ? lI : sI) : l ? vI : bI,
          g = c ? void 0 : h(e)
        return (
          ZO(g || e, function (C, b) {
            g && ((b = C), (C = e[b])), eI(i, b, No(C, t, r, b, e, a))
          }),
          i
        )
      }
      ph.exports = No
    })
    var yh = U((Wee, fh) => {
      w()
      S()
      A()
      var JI = dh(),
        GI = 1,
        WI = 4
      function KI(e) {
        return JI(e, GI | WI)
      }
      fh.exports = KI
    })
    var mh = U((Qee, hh) => {
      w()
      S()
      A()
      function YI(e, t, r, n) {
        for (var o = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < o; )
          if (t(e[a], a, e)) return a
        return -1
      }
      hh.exports = YI
    })
    var bh = U((rte, gh) => {
      w()
      S()
      A()
      function XI(e) {
        return e !== e
      }
      gh.exports = XI
    })
    var Eh = U((ite, vh) => {
      w()
      S()
      A()
      function QI(e, t, r) {
        for (var n = r - 1, o = e.length; ++n < o; ) if (e[n] === t) return n
        return -1
      }
      vh.exports = QI
    })
    var wh = U((cte, xh) => {
      w()
      S()
      A()
      var ZI = mh(),
        ek = bh(),
        tk = Eh()
      function rk(e, t, r) {
        return t === t ? tk(e, t, r) : ZI(e, ek, r)
      }
      xh.exports = rk
    })
    var Ah = U((yte, Sh) => {
      w()
      S()
      A()
      var nk = wh()
      function ok(e, t) {
        var r = e == null ? 0 : e.length
        return !!r && nk(e, t, 0) > -1
      }
      Sh.exports = ok
    })
    var Ch = U((bte, Th) => {
      w()
      S()
      A()
      function ak(e, t, r) {
        for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
          if (r(t, e[n])) return !0
        return !1
      }
      Th.exports = ak
    })
    var Oh = U((wte, _h) => {
      w()
      S()
      A()
      function ik() {}
      _h.exports = ik
    })
    var kh = U((Cte, Ih) => {
      w()
      S()
      A()
      var Ui = Ci(),
        sk = Oh(),
        lk = wo(),
        uk = 1 / 0,
        ck =
          Ui && 1 / lk(new Ui([, -0]))[1] == uk
            ? function (e) {
                return new Ui(e)
              }
            : sk
      Ih.exports = ck
    })
    var Rh = U((kte, Ph) => {
      w()
      S()
      A()
      var pk = pi(),
        dk = Ah(),
        fk = Ch(),
        yk = di(),
        hk = kh(),
        mk = wo(),
        gk = 200
      function bk(e, t, r) {
        var n = -1,
          o = dk,
          a = e.length,
          i = !0,
          s = [],
          l = s
        if (r) (i = !1), (o = fk)
        else if (a >= gk) {
          var u = t ? null : hk(e)
          if (u) return mk(u)
          ;(i = !1), (o = yk), (l = new pk())
        } else l = t ? [] : s
        e: for (; ++n < a; ) {
          var c = e[n],
            d = t ? t(c) : c
          if (((c = r || c !== 0 ? c : 0), i && d === d)) {
            for (var y = l.length; y--; ) if (l[y] === d) continue e
            t && l.push(d), s.push(c)
          } else o(l, d, r) || (l !== s && l.push(d), s.push(c))
        }
        return s
      }
      Ph.exports = bk
    })
    var Fh = U((Fte, Dh) => {
      w()
      S()
      A()
      var vk = Rh()
      function Ek(e) {
        return e && e.length ? vk(e) : []
      }
      Dh.exports = Ek
    })
    var ub = U((na, lb) => {
      w()
      S()
      A()
      ;(function (e, t) {
        typeof na == 'object' && typeof lb < 'u'
          ? t(na)
          : typeof define == 'function' && define.amd
            ? define(['exports'], t)
            : ((e = typeof globalThis < 'u' ? globalThis : e || self),
              t((e.jtpp = {})))
      })(na, function (e) {
        'use strict'
        function t(p) {
          return p.text !== void 0 && p.text !== ''
            ? `'${p.type}' with value '${p.text}'`
            : `'${p.type}'`
        }
        class r extends Error {
          constructor(x) {
            super(`No parslet found for token: ${t(x)}`),
              (this.token = x),
              Object.setPrototypeOf(this, r.prototype)
          }
          getToken() {
            return this.token
          }
        }
        class n extends Error {
          constructor(x) {
            super(`The parsing ended early. The next token was: ${t(x)}`),
              (this.token = x),
              Object.setPrototypeOf(this, n.prototype)
          }
          getToken() {
            return this.token
          }
        }
        class o extends Error {
          constructor(x, k) {
            let H = `Unexpected type: '${x.type}'.`
            k !== void 0 && (H += ` Message: ${k}`),
              super(H),
              Object.setPrototypeOf(this, o.prototype)
          }
        }
        function a(p) {
          return (x) => (x.startsWith(p) ? { type: p, text: p } : null)
        }
        function i(p) {
          let x = 0,
            k,
            H = p[0],
            Q = !1
          if (H !== "'" && H !== '"') return null
          for (; x < p.length; ) {
            if ((x++, (k = p[x]), !Q && k === H)) {
              x++
              break
            }
            Q = !Q && k === '\\'
          }
          if (k !== H) throw new Error('Unterminated String')
          return p.slice(0, x)
        }
        let s = new RegExp(
            '[$_\\p{ID_Start}]|\\\\u\\p{Hex_Digit}{4}|\\\\u\\{0*(?:\\p{Hex_Digit}{1,5}|10\\p{Hex_Digit}{4})\\}',
            'u',
          ),
          l = new RegExp(
            '[$\\-\\p{ID_Continue}\\u200C\\u200D]|\\\\u\\p{Hex_Digit}{4}|\\\\u\\{0*(?:\\p{Hex_Digit}{1,5}|10\\p{Hex_Digit}{4})\\}',
            'u',
          )
        function u(p) {
          let x = p[0]
          if (!s.test(x)) return null
          let k = 1
          do {
            if (((x = p[k]), !l.test(x))) break
            k++
          } while (k < p.length)
          return p.slice(0, k)
        }
        let c = /^(NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity))/
        function d(p) {
          var x, k
          return (k =
            (x = c.exec(p)) === null || x === void 0 ? void 0 : x[0]) !==
            null && k !== void 0
            ? k
            : null
        }
        let y = (p) => {
          let x = u(p)
          return x == null ? null : { type: 'Identifier', text: x }
        }
        function f(p) {
          return (x) => {
            if (!x.startsWith(p)) return null
            let k = x[p.length]
            return k !== void 0 && l.test(k) ? null : { type: p, text: p }
          }
        }
        let h = (p) => {
            let x = i(p)
            return x == null ? null : { type: 'StringValue', text: x }
          },
          g = (p) => (p.length > 0 ? null : { type: 'EOF', text: '' }),
          C = (p) => {
            let x = d(p)
            return x === null ? null : { type: 'Number', text: x }
          },
          b = [
            g,
            a('=>'),
            a('('),
            a(')'),
            a('{'),
            a('}'),
            a('['),
            a(']'),
            a('|'),
            a('&'),
            a('<'),
            a('>'),
            a(','),
            a(';'),
            a('*'),
            a('?'),
            a('!'),
            a('='),
            a(':'),
            a('...'),
            a('.'),
            a('#'),
            a('~'),
            a('/'),
            a('@'),
            f('undefined'),
            f('null'),
            f('function'),
            f('this'),
            f('new'),
            f('module'),
            f('event'),
            f('external'),
            f('typeof'),
            f('keyof'),
            f('readonly'),
            f('import'),
            f('is'),
            f('in'),
            f('asserts'),
            C,
            y,
            h,
          ],
          E = /^\s*\n\s*/
        class _ {
          static create(x) {
            let k = this.read(x)
            x = k.text
            let H = this.read(x)
            return (x = H.text), new _(x, void 0, k.token, H.token)
          }
          constructor(x, k, H, Q) {
            ;(this.text = ''),
              (this.text = x),
              (this.previous = k),
              (this.current = H),
              (this.next = Q)
          }
          static read(x, k = !1) {
            ;(k = k || E.test(x)), (x = x.trim())
            for (let H of b) {
              let Q = H(x)
              if (Q !== null) {
                let ne = Object.assign(Object.assign({}, Q), { startOfLine: k })
                return (x = x.slice(ne.text.length)), { text: x, token: ne }
              }
            }
            throw new Error('Unexpected Token ' + x)
          }
          advance() {
            let x = _.read(this.text)
            return new _(x.text, this.current, this.next, x.token)
          }
        }
        function T(p) {
          if (p === void 0) throw new Error('Unexpected undefined')
          if (
            p.type === 'JsdocTypeKeyValue' ||
            p.type === 'JsdocTypeParameterList' ||
            p.type === 'JsdocTypeProperty' ||
            p.type === 'JsdocTypeReadonlyProperty' ||
            p.type === 'JsdocTypeObjectField' ||
            p.type === 'JsdocTypeJsdocObjectField' ||
            p.type === 'JsdocTypeIndexSignature' ||
            p.type === 'JsdocTypeMappedType'
          )
            throw new o(p)
          return p
        }
        function O(p) {
          return p.type === 'JsdocTypeKeyValue' ? D(p) : T(p)
        }
        function I(p) {
          return p.type === 'JsdocTypeName' ? p : D(p)
        }
        function D(p) {
          if (p.type !== 'JsdocTypeKeyValue') throw new o(p)
          return p
        }
        function R(p) {
          var x
          if (p.type === 'JsdocTypeVariadic') {
            if (
              ((x = p.element) === null || x === void 0 ? void 0 : x.type) ===
              'JsdocTypeName'
            )
              return p
            throw new o(p)
          }
          if (p.type !== 'JsdocTypeNumber' && p.type !== 'JsdocTypeName')
            throw new o(p)
          return p
        }
        function M(p) {
          return (
            p.type === 'JsdocTypeIndexSignature' ||
            p.type === 'JsdocTypeMappedType'
          )
        }
        var z
        ;(function (p) {
          ;(p[(p.ALL = 0)] = 'ALL'),
            (p[(p.PARAMETER_LIST = 1)] = 'PARAMETER_LIST'),
            (p[(p.OBJECT = 2)] = 'OBJECT'),
            (p[(p.KEY_VALUE = 3)] = 'KEY_VALUE'),
            (p[(p.INDEX_BRACKETS = 4)] = 'INDEX_BRACKETS'),
            (p[(p.UNION = 5)] = 'UNION'),
            (p[(p.INTERSECTION = 6)] = 'INTERSECTION'),
            (p[(p.PREFIX = 7)] = 'PREFIX'),
            (p[(p.INFIX = 8)] = 'INFIX'),
            (p[(p.TUPLE = 9)] = 'TUPLE'),
            (p[(p.SYMBOL = 10)] = 'SYMBOL'),
            (p[(p.OPTIONAL = 11)] = 'OPTIONAL'),
            (p[(p.NULLABLE = 12)] = 'NULLABLE'),
            (p[(p.KEY_OF_TYPE_OF = 13)] = 'KEY_OF_TYPE_OF'),
            (p[(p.FUNCTION = 14)] = 'FUNCTION'),
            (p[(p.ARROW = 15)] = 'ARROW'),
            (p[(p.ARRAY_BRACKETS = 16)] = 'ARRAY_BRACKETS'),
            (p[(p.GENERIC = 17)] = 'GENERIC'),
            (p[(p.NAME_PATH = 18)] = 'NAME_PATH'),
            (p[(p.PARENTHESIS = 19)] = 'PARENTHESIS'),
            (p[(p.SPECIAL_TYPES = 20)] = 'SPECIAL_TYPES')
        })(z || (z = {}))
        class Y {
          constructor(x, k, H) {
            ;(this.grammar = x),
              typeof k == 'string'
                ? (this._lexer = _.create(k))
                : (this._lexer = k),
              (this.baseParser = H)
          }
          get lexer() {
            return this._lexer
          }
          parse() {
            let x = this.parseType(z.ALL)
            if (this.lexer.current.type !== 'EOF')
              throw new n(this.lexer.current)
            return x
          }
          parseType(x) {
            return T(this.parseIntermediateType(x))
          }
          parseIntermediateType(x) {
            let k = this.tryParslets(null, x)
            if (k === null) throw new r(this.lexer.current)
            return this.parseInfixIntermediateType(k, x)
          }
          parseInfixIntermediateType(x, k) {
            let H = this.tryParslets(x, k)
            for (; H !== null; ) (x = H), (H = this.tryParslets(x, k))
            return x
          }
          tryParslets(x, k) {
            for (let H of this.grammar) {
              let Q = H(this, k, x)
              if (Q !== null) return Q
            }
            return null
          }
          consume(x) {
            return (
              Array.isArray(x) || (x = [x]),
              x.includes(this.lexer.current.type)
                ? ((this._lexer = this.lexer.advance()), !0)
                : !1
            )
          }
          acceptLexerState(x) {
            this._lexer = x.lexer
          }
        }
        function Z(p) {
          return p === 'EOF' || p === '|' || p === ',' || p === ')' || p === '>'
        }
        let V = (p, x, k) => {
          let H = p.lexer.current.type,
            Q = p.lexer.next.type
          return (k == null && H === '?' && !Z(Q)) || (k != null && H === '?')
            ? (p.consume('?'),
              k == null
                ? {
                    type: 'JsdocTypeNullable',
                    element: p.parseType(z.NULLABLE),
                    meta: { position: 'prefix' },
                  }
                : {
                    type: 'JsdocTypeNullable',
                    element: T(k),
                    meta: { position: 'suffix' },
                  })
            : null
        }
        function P(p) {
          let x = (k, H, Q) => {
            let ne = k.lexer.current.type,
              ae = k.lexer.next.type
            if (Q === null) {
              if ('parsePrefix' in p && p.accept(ne, ae))
                return p.parsePrefix(k)
            } else if (
              'parseInfix' in p &&
              p.precedence > H &&
              p.accept(ne, ae)
            )
              return p.parseInfix(k, Q)
            return null
          }
          return Object.defineProperty(x, 'name', { value: p.name }), x
        }
        let q = P({
            name: 'optionalParslet',
            accept: (p) => p === '=',
            precedence: z.OPTIONAL,
            parsePrefix: (p) => (
              p.consume('='),
              {
                type: 'JsdocTypeOptional',
                element: p.parseType(z.OPTIONAL),
                meta: { position: 'prefix' },
              }
            ),
            parseInfix: (p, x) => (
              p.consume('='),
              {
                type: 'JsdocTypeOptional',
                element: T(x),
                meta: { position: 'suffix' },
              }
            ),
          }),
          J = P({
            name: 'numberParslet',
            accept: (p) => p === 'Number',
            parsePrefix: (p) => {
              let x = parseFloat(p.lexer.current.text)
              return p.consume('Number'), { type: 'JsdocTypeNumber', value: x }
            },
          }),
          X = P({
            name: 'parenthesisParslet',
            accept: (p) => p === '(',
            parsePrefix: (p) => {
              if ((p.consume('('), p.consume(')')))
                return { type: 'JsdocTypeParameterList', elements: [] }
              let x = p.parseIntermediateType(z.ALL)
              if (!p.consume(')')) throw new Error('Unterminated parenthesis')
              return x.type === 'JsdocTypeParameterList'
                ? x
                : x.type === 'JsdocTypeKeyValue'
                  ? { type: 'JsdocTypeParameterList', elements: [x] }
                  : { type: 'JsdocTypeParenthesis', element: T(x) }
            },
          }),
          te = P({
            name: 'specialTypesParslet',
            accept: (p, x) =>
              (p === '?' && Z(x)) ||
              p === 'null' ||
              p === 'undefined' ||
              p === '*',
            parsePrefix: (p) => {
              if (p.consume('null')) return { type: 'JsdocTypeNull' }
              if (p.consume('undefined')) return { type: 'JsdocTypeUndefined' }
              if (p.consume('*')) return { type: 'JsdocTypeAny' }
              if (p.consume('?')) return { type: 'JsdocTypeUnknown' }
              throw new Error('Unacceptable token: ' + p.lexer.current.text)
            },
          }),
          re = P({
            name: 'notNullableParslet',
            accept: (p) => p === '!',
            precedence: z.NULLABLE,
            parsePrefix: (p) => (
              p.consume('!'),
              {
                type: 'JsdocTypeNotNullable',
                element: p.parseType(z.NULLABLE),
                meta: { position: 'prefix' },
              }
            ),
            parseInfix: (p, x) => (
              p.consume('!'),
              {
                type: 'JsdocTypeNotNullable',
                element: T(x),
                meta: { position: 'suffix' },
              }
            ),
          })
        function ee({ allowTrailingComma: p }) {
          return P({
            name: 'parameterListParslet',
            accept: (x) => x === ',',
            precedence: z.PARAMETER_LIST,
            parseInfix: (x, k) => {
              let H = [O(k)]
              x.consume(',')
              do
                try {
                  let Q = x.parseIntermediateType(z.PARAMETER_LIST)
                  H.push(O(Q))
                } catch (Q) {
                  if (p && Q instanceof r) break
                  throw Q
                }
              while (x.consume(','))
              if (
                H.length > 0 &&
                H.slice(0, -1).some((Q) => Q.type === 'JsdocTypeVariadic')
              )
                throw new Error(
                  'Only the last parameter may be a rest parameter',
                )
              return { type: 'JsdocTypeParameterList', elements: H }
            },
          })
        }
        let oe = P({
            name: 'genericParslet',
            accept: (p, x) => p === '<' || (p === '.' && x === '<'),
            precedence: z.GENERIC,
            parseInfix: (p, x) => {
              let k = p.consume('.')
              p.consume('<')
              let H = []
              do H.push(p.parseType(z.PARAMETER_LIST))
              while (p.consume(','))
              if (!p.consume('>'))
                throw new Error('Unterminated generic parameter list')
              return {
                type: 'JsdocTypeGeneric',
                left: T(x),
                elements: H,
                meta: { brackets: 'angle', dot: k },
              }
            },
          }),
          ie = P({
            name: 'unionParslet',
            accept: (p) => p === '|',
            precedence: z.UNION,
            parseInfix: (p, x) => {
              p.consume('|')
              let k = []
              do k.push(p.parseType(z.UNION))
              while (p.consume('|'))
              return { type: 'JsdocTypeUnion', elements: [T(x), ...k] }
            },
          }),
          ce = [V, q, J, X, te, re, ee({ allowTrailingComma: !0 }), oe, ie, q]
        function be({
          allowSquareBracketsOnAnyType: p,
          allowJsdocNamePaths: x,
          pathGrammar: k,
        }) {
          return function (Q, ne, ae) {
            if (ae == null || ne >= z.NAME_PATH) return null
            let de = Q.lexer.current.type,
              Ne = Q.lexer.next.type
            if (
              !(
                (de === '.' && Ne !== '<') ||
                (de === '[' && (p || ae.type === 'JsdocTypeName')) ||
                (x && (de === '~' || de === '#'))
              )
            )
              return null
            let nt,
              ro = !1
            Q.consume('.')
              ? (nt = 'property')
              : Q.consume('[')
                ? ((nt = 'property-brackets'), (ro = !0))
                : Q.consume('~')
                  ? (nt = 'inner')
                  : (Q.consume('#'), (nt = 'instance'))
            let Ul = k !== null ? new Y(k, Q.lexer, Q) : Q,
              wt = Ul.parseIntermediateType(z.NAME_PATH)
            Q.acceptLexerState(Ul)
            let nn
            switch (wt.type) {
              case 'JsdocTypeName':
                nn = {
                  type: 'JsdocTypeProperty',
                  value: wt.value,
                  meta: { quote: void 0 },
                }
                break
              case 'JsdocTypeNumber':
                nn = {
                  type: 'JsdocTypeProperty',
                  value: wt.value.toString(10),
                  meta: { quote: void 0 },
                }
                break
              case 'JsdocTypeStringValue':
                nn = {
                  type: 'JsdocTypeProperty',
                  value: wt.value,
                  meta: { quote: wt.meta.quote },
                }
                break
              case 'JsdocTypeSpecialNamePath':
                if (wt.specialType === 'event') nn = wt
                else
                  throw new o(
                    wt,
                    "Type 'JsdocTypeSpecialNamePath' is only allowed with specialType 'event'",
                  )
                break
              default:
                throw new o(
                  wt,
                  "Expecting 'JsdocTypeName', 'JsdocTypeNumber', 'JsdocStringValue' or 'JsdocTypeSpecialNamePath'",
                )
            }
            if (ro && !Q.consume(']')) {
              let $l = Q.lexer.current
              throw new Error(
                `Unterminated square brackets. Next token is '${$l.type}' with text '${$l.text}'`,
              )
            }
            return {
              type: 'JsdocTypeNamePath',
              left: T(ae),
              right: nn,
              pathType: nt,
            }
          }
        }
        function pe({ allowedAdditionalTokens: p }) {
          return P({
            name: 'nameParslet',
            accept: (x) =>
              x === 'Identifier' ||
              x === 'this' ||
              x === 'new' ||
              p.includes(x),
            parsePrefix: (x) => {
              let { type: k, text: H } = x.lexer.current
              return x.consume(k), { type: 'JsdocTypeName', value: H }
            },
          })
        }
        let ye = P({
          name: 'stringValueParslet',
          accept: (p) => p === 'StringValue',
          parsePrefix: (p) => {
            let x = p.lexer.current.text
            return (
              p.consume('StringValue'),
              {
                type: 'JsdocTypeStringValue',
                value: x.slice(1, -1),
                meta: { quote: x[0] === "'" ? 'single' : 'double' },
              }
            )
          },
        })
        function _e({ pathGrammar: p, allowedTypes: x }) {
          return P({
            name: 'specialNamePathParslet',
            accept: (k) => x.includes(k),
            parsePrefix: (k) => {
              let H = k.lexer.current.type
              if ((k.consume(H), !k.consume(':')))
                return { type: 'JsdocTypeName', value: H }
              let Q,
                ne = k.lexer.current
              if (k.consume('StringValue'))
                Q = {
                  type: 'JsdocTypeSpecialNamePath',
                  value: ne.text.slice(1, -1),
                  specialType: H,
                  meta: { quote: ne.text[0] === "'" ? 'single' : 'double' },
                }
              else {
                let Ne = '',
                  Ie = ['Identifier', '@', '/']
                for (; Ie.some((nt) => k.consume(nt)); )
                  (Ne += ne.text), (ne = k.lexer.current)
                Q = {
                  type: 'JsdocTypeSpecialNamePath',
                  value: Ne,
                  specialType: H,
                  meta: { quote: void 0 },
                }
              }
              let ae = new Y(p, k.lexer, k),
                de = ae.parseInfixIntermediateType(Q, z.ALL)
              return k.acceptLexerState(ae), T(de)
            },
          })
        }
        let Me = [
            pe({ allowedAdditionalTokens: ['external', 'module'] }),
            ye,
            J,
            be({
              allowSquareBracketsOnAnyType: !1,
              allowJsdocNamePaths: !0,
              pathGrammar: null,
            }),
          ],
          Oe = [...Me, _e({ allowedTypes: ['event'], pathGrammar: Me })]
        function he(p) {
          let x
          if (p.type === 'JsdocTypeParameterList') x = p.elements
          else if (p.type === 'JsdocTypeParenthesis') x = [p.element]
          else throw new o(p)
          return x.map((k) => O(k))
        }
        function Ue(p) {
          let x = he(p)
          if (x.some((k) => k.type === 'JsdocTypeKeyValue'))
            throw new Error('No parameter should be named')
          return x
        }
        function Te({
          allowNamedParameters: p,
          allowNoReturnType: x,
          allowWithoutParenthesis: k,
          allowNewAsFunctionKeyword: H,
        }) {
          return P({
            name: 'functionParslet',
            accept: (Q, ne) =>
              Q === 'function' || (H && Q === 'new' && ne === '('),
            parsePrefix: (Q) => {
              let ne = Q.consume('new')
              Q.consume('function')
              let ae = Q.lexer.current.type === '('
              if (!ae) {
                if (!k) throw new Error('function is missing parameter list')
                return { type: 'JsdocTypeName', value: 'function' }
              }
              let de = {
                  type: 'JsdocTypeFunction',
                  parameters: [],
                  arrow: !1,
                  constructor: ne,
                  parenthesis: ae,
                },
                Ne = Q.parseIntermediateType(z.FUNCTION)
              if (p === void 0) de.parameters = Ue(Ne)
              else {
                if (ne && Ne.type === 'JsdocTypeFunction' && Ne.arrow)
                  return (de = Ne), (de.constructor = !0), de
                de.parameters = he(Ne)
                for (let Ie of de.parameters)
                  if (Ie.type === 'JsdocTypeKeyValue' && !p.includes(Ie.key))
                    throw new Error(
                      `only allowed named parameters are ${p.join(', ')} but got ${Ie.type}`,
                    )
              }
              if (Q.consume(':')) de.returnType = Q.parseType(z.PREFIX)
              else if (!x) throw new Error('function is missing return type')
              return de
            },
          })
        }
        function $e({ allowPostfix: p, allowEnclosingBrackets: x }) {
          return P({
            name: 'variadicParslet',
            accept: (k) => k === '...',
            precedence: z.PREFIX,
            parsePrefix: (k) => {
              k.consume('...')
              let H = x && k.consume('[')
              try {
                let Q = k.parseType(z.PREFIX)
                if (H && !k.consume(']'))
                  throw new Error("Unterminated variadic type. Missing ']'")
                return {
                  type: 'JsdocTypeVariadic',
                  element: T(Q),
                  meta: { position: 'prefix', squareBrackets: H },
                }
              } catch (Q) {
                if (Q instanceof r) {
                  if (H)
                    throw new Error(
                      'Empty square brackets for variadic are not allowed.',
                    )
                  return {
                    type: 'JsdocTypeVariadic',
                    meta: { position: void 0, squareBrackets: !1 },
                  }
                } else throw Q
              }
            },
            parseInfix: p
              ? (k, H) => (
                  k.consume('...'),
                  {
                    type: 'JsdocTypeVariadic',
                    element: T(H),
                    meta: { position: 'suffix', squareBrackets: !1 },
                  }
                )
              : void 0,
          })
        }
        let lt = P({
            name: 'symbolParslet',
            accept: (p) => p === '(',
            precedence: z.SYMBOL,
            parseInfix: (p, x) => {
              if (x.type !== 'JsdocTypeName')
                throw new Error(
                  "Symbol expects a name on the left side. (Reacting on '(')",
                )
              p.consume('(')
              let k = { type: 'JsdocTypeSymbol', value: x.value }
              if (!p.consume(')')) {
                let H = p.parseIntermediateType(z.SYMBOL)
                if (((k.element = R(H)), !p.consume(')')))
                  throw new Error('Symbol does not end after value')
              }
              return k
            },
          }),
          je = P({
            name: 'arrayBracketsParslet',
            precedence: z.ARRAY_BRACKETS,
            accept: (p, x) => p === '[' && x === ']',
            parseInfix: (p, x) => (
              p.consume('['),
              p.consume(']'),
              {
                type: 'JsdocTypeGeneric',
                left: { type: 'JsdocTypeName', value: 'Array' },
                elements: [T(x)],
                meta: { brackets: 'square', dot: !1 },
              }
            ),
          })
        function fe({ objectFieldGrammar: p, allowKeyTypes: x }) {
          return P({
            name: 'objectParslet',
            accept: (k) => k === '{',
            parsePrefix: (k) => {
              k.consume('{')
              let H = {
                type: 'JsdocTypeObject',
                meta: { separator: 'comma' },
                elements: [],
              }
              if (!k.consume('}')) {
                let Q,
                  ne = new Y(p, k.lexer, k)
                for (;;) {
                  ne.acceptLexerState(k)
                  let ae = ne.parseIntermediateType(z.OBJECT)
                  k.acceptLexerState(ne),
                    ae === void 0 &&
                      x &&
                      (ae = k.parseIntermediateType(z.OBJECT))
                  let de = !1
                  if (
                    (ae.type === 'JsdocTypeNullable' &&
                      ((de = !0), (ae = ae.element)),
                    ae.type === 'JsdocTypeNumber' ||
                      ae.type === 'JsdocTypeName' ||
                      ae.type === 'JsdocTypeStringValue')
                  ) {
                    let Ie
                    ae.type === 'JsdocTypeStringValue' && (Ie = ae.meta.quote),
                      H.elements.push({
                        type: 'JsdocTypeObjectField',
                        key: ae.value.toString(),
                        right: void 0,
                        optional: de,
                        readonly: !1,
                        meta: { quote: Ie },
                      })
                  } else if (
                    ae.type === 'JsdocTypeObjectField' ||
                    ae.type === 'JsdocTypeJsdocObjectField'
                  )
                    H.elements.push(ae)
                  else throw new o(ae)
                  if (k.lexer.current.startOfLine) Q = 'linebreak'
                  else if (k.consume(',')) Q = 'comma'
                  else if (k.consume(';')) Q = 'semicolon'
                  else break
                  if (k.lexer.current.type === '}') break
                }
                if (((H.meta.separator = Q ?? 'comma'), !k.consume('}')))
                  throw new Error("Unterminated record type. Missing '}'")
              }
              return H
            },
          })
        }
        function Se({
          allowSquaredProperties: p,
          allowKeyTypes: x,
          allowReadonly: k,
          allowOptional: H,
        }) {
          return P({
            name: 'objectFieldParslet',
            precedence: z.KEY_VALUE,
            accept: (Q) => Q === ':',
            parseInfix: (Q, ne) => {
              var ae
              let de = !1,
                Ne = !1
              H &&
                ne.type === 'JsdocTypeNullable' &&
                ((de = !0), (ne = ne.element)),
                k &&
                  ne.type === 'JsdocTypeReadonlyProperty' &&
                  ((Ne = !0), (ne = ne.element))
              let Ie = (ae = Q.baseParser) !== null && ae !== void 0 ? ae : Q
              if (
                (Ie.acceptLexerState(Q),
                ne.type === 'JsdocTypeNumber' ||
                  ne.type === 'JsdocTypeName' ||
                  ne.type === 'JsdocTypeStringValue' ||
                  M(ne))
              ) {
                if (M(ne) && !p) throw new o(ne)
                Ie.consume(':')
                let nt
                ne.type === 'JsdocTypeStringValue' && (nt = ne.meta.quote)
                let ro = Ie.parseType(z.KEY_VALUE)
                return (
                  Q.acceptLexerState(Ie),
                  {
                    type: 'JsdocTypeObjectField',
                    key: M(ne) ? ne : ne.value.toString(),
                    right: ro,
                    optional: de,
                    readonly: Ne,
                    meta: { quote: nt },
                  }
                )
              } else {
                if (!x) throw new o(ne)
                Ie.consume(':')
                let nt = Ie.parseType(z.KEY_VALUE)
                return (
                  Q.acceptLexerState(Ie),
                  { type: 'JsdocTypeJsdocObjectField', left: T(ne), right: nt }
                )
              }
            },
          })
        }
        function Et({ allowOptional: p, allowVariadic: x }) {
          return P({
            name: 'keyValueParslet',
            precedence: z.KEY_VALUE,
            accept: (k) => k === ':',
            parseInfix: (k, H) => {
              let Q = !1,
                ne = !1
              if (
                (p &&
                  H.type === 'JsdocTypeNullable' &&
                  ((Q = !0), (H = H.element)),
                x &&
                  H.type === 'JsdocTypeVariadic' &&
                  H.element !== void 0 &&
                  ((ne = !0), (H = H.element)),
                H.type !== 'JsdocTypeName')
              )
                throw new o(H)
              k.consume(':')
              let ae = k.parseType(z.KEY_VALUE)
              return {
                type: 'JsdocTypeKeyValue',
                key: H.value,
                right: ae,
                optional: Q,
                variadic: ne,
              }
            },
          })
        }
        let Rt = [
            ...ce,
            Te({
              allowWithoutParenthesis: !0,
              allowNamedParameters: ['this', 'new'],
              allowNoReturnType: !0,
              allowNewAsFunctionKeyword: !1,
            }),
            ye,
            _e({
              allowedTypes: ['module', 'external', 'event'],
              pathGrammar: Oe,
            }),
            $e({ allowEnclosingBrackets: !0, allowPostfix: !0 }),
            pe({ allowedAdditionalTokens: ['keyof'] }),
            lt,
            je,
            be({
              allowSquareBracketsOnAnyType: !1,
              allowJsdocNamePaths: !0,
              pathGrammar: Oe,
            }),
          ],
          fr = [
            ...Rt,
            fe({
              objectFieldGrammar: [
                pe({ allowedAdditionalTokens: ['module', 'in'] }),
                Se({
                  allowSquaredProperties: !1,
                  allowKeyTypes: !0,
                  allowOptional: !1,
                  allowReadonly: !1,
                }),
                ...Rt,
              ],
              allowKeyTypes: !0,
            }),
            Et({ allowOptional: !0, allowVariadic: !0 }),
          ],
          Xr = P({
            name: 'typeOfParslet',
            accept: (p) => p === 'typeof',
            parsePrefix: (p) => (
              p.consume('typeof'),
              {
                type: 'JsdocTypeTypeof',
                element: T(p.parseType(z.KEY_OF_TYPE_OF)),
              }
            ),
          }),
          Jn = [
            pe({
              allowedAdditionalTokens: [
                'module',
                'keyof',
                'event',
                'external',
                'in',
              ],
            }),
            V,
            q,
            ye,
            J,
            Se({
              allowSquaredProperties: !1,
              allowKeyTypes: !1,
              allowOptional: !1,
              allowReadonly: !1,
            }),
          ],
          Gn = [
            ...ce,
            fe({ allowKeyTypes: !1, objectFieldGrammar: Jn }),
            pe({ allowedAdditionalTokens: ['event', 'external', 'in'] }),
            Xr,
            Te({
              allowWithoutParenthesis: !1,
              allowNamedParameters: ['this', 'new'],
              allowNoReturnType: !0,
              allowNewAsFunctionKeyword: !1,
            }),
            $e({ allowEnclosingBrackets: !1, allowPostfix: !1 }),
            pe({ allowedAdditionalTokens: ['keyof'] }),
            _e({ allowedTypes: ['module'], pathGrammar: Oe }),
            be({
              allowSquareBracketsOnAnyType: !1,
              allowJsdocNamePaths: !0,
              pathGrammar: Oe,
            }),
            Et({ allowOptional: !1, allowVariadic: !1 }),
            lt,
          ],
          Wn = P({
            name: 'assertsParslet',
            accept: (p) => p === 'asserts',
            parsePrefix: (p) => {
              p.consume('asserts')
              let x = p.parseIntermediateType(z.SYMBOL)
              if (x.type !== 'JsdocTypeName')
                throw new o(
                  x,
                  'A typescript asserts always has to have a name on the left side.',
                )
              return (
                p.consume('is'),
                {
                  type: 'JsdocTypeAsserts',
                  left: x,
                  right: T(p.parseIntermediateType(z.INFIX)),
                }
              )
            },
          })
        function Kn({ allowQuestionMark: p }) {
          return P({
            name: 'tupleParslet',
            accept: (x) => x === '[',
            parsePrefix: (x) => {
              x.consume('[')
              let k = { type: 'JsdocTypeTuple', elements: [] }
              if (x.consume(']')) return k
              let H = x.parseIntermediateType(z.ALL)
              if (
                (H.type === 'JsdocTypeParameterList'
                  ? H.elements[0].type === 'JsdocTypeKeyValue'
                    ? (k.elements = H.elements.map(D))
                    : (k.elements = H.elements.map(T))
                  : H.type === 'JsdocTypeKeyValue'
                    ? (k.elements = [D(H)])
                    : (k.elements = [T(H)]),
                !x.consume(']'))
              )
                throw new Error("Unterminated '['")
              if (!p && k.elements.some((Q) => Q.type === 'JsdocTypeUnknown'))
                throw new Error('Question mark in tuple not allowed')
              return k
            },
          })
        }
        let Qr = P({
            name: 'keyOfParslet',
            accept: (p) => p === 'keyof',
            parsePrefix: (p) => (
              p.consume('keyof'),
              {
                type: 'JsdocTypeKeyof',
                element: T(p.parseType(z.KEY_OF_TYPE_OF)),
              }
            ),
          }),
          Yn = P({
            name: 'importParslet',
            accept: (p) => p === 'import',
            parsePrefix: (p) => {
              if ((p.consume('import'), !p.consume('(')))
                throw new Error('Missing parenthesis after import keyword')
              let x = p.parseType(z.PREFIX)
              if (x.type !== 'JsdocTypeStringValue')
                throw new Error(
                  'Only string values are allowed as paths for imports',
                )
              if (!p.consume(')'))
                throw new Error(
                  'Missing closing parenthesis after import keyword',
                )
              return { type: 'JsdocTypeImport', element: x }
            },
          }),
          Dt = P({
            name: 'readonlyPropertyParslet',
            accept: (p) => p === 'readonly',
            parsePrefix: (p) => (
              p.consume('readonly'),
              {
                type: 'JsdocTypeReadonlyProperty',
                element: p.parseType(z.KEY_VALUE),
              }
            ),
          }),
          yr = P({
            name: 'arrowFunctionParslet',
            precedence: z.ARROW,
            accept: (p) => p === '=>',
            parseInfix: (p, x) => (
              p.consume('=>'),
              {
                type: 'JsdocTypeFunction',
                parameters: he(x).map(I),
                arrow: !0,
                constructor: !1,
                parenthesis: !0,
                returnType: p.parseType(z.OBJECT),
              }
            ),
          }),
          Zr = P({
            name: 'intersectionParslet',
            accept: (p) => p === '&',
            precedence: z.INTERSECTION,
            parseInfix: (p, x) => {
              p.consume('&')
              let k = []
              do k.push(p.parseType(z.INTERSECTION))
              while (p.consume('&'))
              return { type: 'JsdocTypeIntersection', elements: [T(x), ...k] }
            },
          }),
          Xn = P({
            name: 'predicateParslet',
            precedence: z.INFIX,
            accept: (p) => p === 'is',
            parseInfix: (p, x) => {
              if (x.type !== 'JsdocTypeName')
                throw new o(
                  x,
                  'A typescript predicate always has to have a name on the left side.',
                )
              return (
                p.consume('is'),
                {
                  type: 'JsdocTypePredicate',
                  left: x,
                  right: T(p.parseIntermediateType(z.INFIX)),
                }
              )
            },
          }),
          Qn = P({
            name: 'objectSquareBracketPropertyParslet',
            accept: (p) => p === '[',
            parsePrefix: (p) => {
              if (p.baseParser === void 0)
                throw new Error('Only allowed inside object grammar')
              p.consume('[')
              let x = p.lexer.current.text
              p.consume('Identifier')
              let k
              if (p.consume(':')) {
                let H = p.baseParser
                H.acceptLexerState(p),
                  (k = {
                    type: 'JsdocTypeIndexSignature',
                    key: x,
                    right: H.parseType(z.INDEX_BRACKETS),
                  }),
                  p.acceptLexerState(H)
              } else if (p.consume('in')) {
                let H = p.baseParser
                H.acceptLexerState(p),
                  (k = {
                    type: 'JsdocTypeMappedType',
                    key: x,
                    right: H.parseType(z.ARRAY_BRACKETS),
                  }),
                  p.acceptLexerState(H)
              } else
                throw new Error(
                  "Missing ':' or 'in' inside square bracketed property.",
                )
              if (!p.consume(']'))
                throw new Error('Unterminated square brackets')
              return k
            },
          }),
          hr = [
            Dt,
            pe({
              allowedAdditionalTokens: [
                'module',
                'event',
                'keyof',
                'event',
                'external',
                'in',
              ],
            }),
            V,
            q,
            ye,
            J,
            Se({
              allowSquaredProperties: !0,
              allowKeyTypes: !1,
              allowOptional: !0,
              allowReadonly: !0,
            }),
            Qn,
          ],
          Kt = [
            ...ce,
            fe({ allowKeyTypes: !1, objectFieldGrammar: hr }),
            Xr,
            Qr,
            Yn,
            ye,
            Te({
              allowWithoutParenthesis: !0,
              allowNoReturnType: !1,
              allowNamedParameters: ['this', 'new', 'args'],
              allowNewAsFunctionKeyword: !0,
            }),
            Kn({ allowQuestionMark: !1 }),
            $e({ allowEnclosingBrackets: !1, allowPostfix: !1 }),
            Wn,
            pe({ allowedAdditionalTokens: ['event', 'external', 'in'] }),
            _e({ allowedTypes: ['module'], pathGrammar: Oe }),
            je,
            yr,
            be({
              allowSquareBracketsOnAnyType: !0,
              allowJsdocNamePaths: !1,
              pathGrammar: Oe,
            }),
            Zr,
            Xn,
            Et({ allowVariadic: !0, allowOptional: !0 }),
          ]
        function $(p, x) {
          switch (x) {
            case 'closure':
              return new Y(Gn, p).parse()
            case 'jsdoc':
              return new Y(fr, p).parse()
            case 'typescript':
              return new Y(Kt, p).parse()
          }
        }
        function G(p, x = ['typescript', 'closure', 'jsdoc']) {
          let k
          for (let H of x)
            try {
              return $(p, H)
            } catch (Q) {
              k = Q
            }
          throw k
        }
        function ue(p, x) {
          let k = p[x.type]
          if (k === void 0)
            throw new Error(
              `In this set of transform rules exists no rule for type ${x.type}.`,
            )
          return k(x, (H) => ue(p, H))
        }
        function se(p) {
          throw new Error(
            'This transform is not available. Are you trying the correct parsing mode?',
          )
        }
        function we(p) {
          let x = { params: [] }
          for (let k of p.parameters)
            k.type === 'JsdocTypeKeyValue'
              ? k.key === 'this'
                ? (x.this = k.right)
                : k.key === 'new'
                  ? (x.new = k.right)
                  : x.params.push(k)
              : x.params.push(k)
          return x
        }
        function le(p, x, k) {
          return p === 'prefix' ? k + x : x + k
        }
        function ze(p, x) {
          switch (x) {
            case 'double':
              return `"${p}"`
            case 'single':
              return `'${p}'`
            case void 0:
              return p
          }
        }
        function pt() {
          return {
            JsdocTypeParenthesis: (p, x) =>
              `(${p.element !== void 0 ? x(p.element) : ''})`,
            JsdocTypeKeyof: (p, x) => `keyof ${x(p.element)}`,
            JsdocTypeFunction: (p, x) => {
              if (p.arrow) {
                if (p.returnType === void 0)
                  throw new Error('Arrow function needs a return type.')
                let k = `(${p.parameters.map(x).join(', ')}) => ${x(p.returnType)}`
                return p.constructor && (k = 'new ' + k), k
              } else {
                let k = p.constructor ? 'new' : 'function'
                return (
                  p.parenthesis &&
                    ((k += `(${p.parameters.map(x).join(', ')})`),
                    p.returnType !== void 0 && (k += `: ${x(p.returnType)}`)),
                  k
                )
              }
            },
            JsdocTypeName: (p) => p.value,
            JsdocTypeTuple: (p, x) => `[${p.elements.map(x).join(', ')}]`,
            JsdocTypeVariadic: (p, x) =>
              p.meta.position === void 0
                ? '...'
                : le(p.meta.position, x(p.element), '...'),
            JsdocTypeNamePath: (p, x) => {
              let k = x(p.left),
                H = x(p.right)
              switch (p.pathType) {
                case 'inner':
                  return `${k}~${H}`
                case 'instance':
                  return `${k}#${H}`
                case 'property':
                  return `${k}.${H}`
                case 'property-brackets':
                  return `${k}[${H}]`
              }
            },
            JsdocTypeStringValue: (p) => ze(p.value, p.meta.quote),
            JsdocTypeAny: () => '*',
            JsdocTypeGeneric: (p, x) => {
              if (p.meta.brackets === 'square') {
                let k = p.elements[0],
                  H = x(k)
                return k.type === 'JsdocTypeUnion' ||
                  k.type === 'JsdocTypeIntersection'
                  ? `(${H})[]`
                  : `${H}[]`
              } else
                return `${x(p.left)}${p.meta.dot ? '.' : ''}<${p.elements.map(x).join(', ')}>`
            },
            JsdocTypeImport: (p, x) => `import(${x(p.element)})`,
            JsdocTypeObjectField: (p, x) => {
              let k = ''
              return (
                p.readonly && (k += 'readonly '),
                typeof p.key == 'string'
                  ? (k += ze(p.key, p.meta.quote))
                  : (k += x(p.key)),
                p.optional && (k += '?'),
                p.right === void 0 ? k : k + `: ${x(p.right)}`
              )
            },
            JsdocTypeJsdocObjectField: (p, x) => `${x(p.left)}: ${x(p.right)}`,
            JsdocTypeKeyValue: (p, x) => {
              let k = p.key
              return (
                p.optional && (k += '?'),
                p.variadic && (k = '...' + k),
                p.right === void 0 ? k : k + `: ${x(p.right)}`
              )
            },
            JsdocTypeSpecialNamePath: (p) =>
              `${p.specialType}:${ze(p.value, p.meta.quote)}`,
            JsdocTypeNotNullable: (p, x) =>
              le(p.meta.position, x(p.element), '!'),
            JsdocTypeNull: () => 'null',
            JsdocTypeNullable: (p, x) => le(p.meta.position, x(p.element), '?'),
            JsdocTypeNumber: (p) => p.value.toString(),
            JsdocTypeObject: (p, x) =>
              `{${p.elements.map(x).join((p.meta.separator === 'comma' ? ',' : ';') + ' ')}}`,
            JsdocTypeOptional: (p, x) => le(p.meta.position, x(p.element), '='),
            JsdocTypeSymbol: (p, x) =>
              `${p.value}(${p.element !== void 0 ? x(p.element) : ''})`,
            JsdocTypeTypeof: (p, x) => `typeof ${x(p.element)}`,
            JsdocTypeUndefined: () => 'undefined',
            JsdocTypeUnion: (p, x) => p.elements.map(x).join(' | '),
            JsdocTypeUnknown: () => '?',
            JsdocTypeIntersection: (p, x) => p.elements.map(x).join(' & '),
            JsdocTypeProperty: (p) => ze(p.value, p.meta.quote),
            JsdocTypePredicate: (p, x) => `${x(p.left)} is ${x(p.right)}`,
            JsdocTypeIndexSignature: (p, x) => `[${p.key}: ${x(p.right)}]`,
            JsdocTypeMappedType: (p, x) => `[${p.key} in ${x(p.right)}]`,
            JsdocTypeAsserts: (p, x) => `asserts ${x(p.left)} is ${x(p.right)}`,
          }
        }
        let Ke = pt()
        function dt(p) {
          return ue(Ke, p)
        }
        let en = [
          'null',
          'true',
          'false',
          'break',
          'case',
          'catch',
          'class',
          'const',
          'continue',
          'debugger',
          'default',
          'delete',
          'do',
          'else',
          'export',
          'extends',
          'finally',
          'for',
          'function',
          'if',
          'import',
          'in',
          'instanceof',
          'new',
          'return',
          'super',
          'switch',
          'this',
          'throw',
          'try',
          'typeof',
          'var',
          'void',
          'while',
          'with',
          'yield',
        ]
        function Ye(p) {
          let x = { type: 'NameExpression', name: p }
          return en.includes(p) && (x.reservedWord = !0), x
        }
        let Ze = {
          JsdocTypeOptional: (p, x) => {
            let k = x(p.element)
            return (k.optional = !0), k
          },
          JsdocTypeNullable: (p, x) => {
            let k = x(p.element)
            return (k.nullable = !0), k
          },
          JsdocTypeNotNullable: (p, x) => {
            let k = x(p.element)
            return (k.nullable = !1), k
          },
          JsdocTypeVariadic: (p, x) => {
            if (p.element === void 0)
              throw new Error(
                'dots without value are not allowed in catharsis mode',
              )
            let k = x(p.element)
            return (k.repeatable = !0), k
          },
          JsdocTypeAny: () => ({ type: 'AllLiteral' }),
          JsdocTypeNull: () => ({ type: 'NullLiteral' }),
          JsdocTypeStringValue: (p) => Ye(ze(p.value, p.meta.quote)),
          JsdocTypeUndefined: () => ({ type: 'UndefinedLiteral' }),
          JsdocTypeUnknown: () => ({ type: 'UnknownLiteral' }),
          JsdocTypeFunction: (p, x) => {
            let k = we(p),
              H = { type: 'FunctionType', params: k.params.map(x) }
            return (
              k.this !== void 0 && (H.this = x(k.this)),
              k.new !== void 0 && (H.new = x(k.new)),
              p.returnType !== void 0 && (H.result = x(p.returnType)),
              H
            )
          },
          JsdocTypeGeneric: (p, x) => ({
            type: 'TypeApplication',
            applications: p.elements.map((k) => x(k)),
            expression: x(p.left),
          }),
          JsdocTypeSpecialNamePath: (p) =>
            Ye(p.specialType + ':' + ze(p.value, p.meta.quote)),
          JsdocTypeName: (p) =>
            p.value !== 'function'
              ? Ye(p.value)
              : { type: 'FunctionType', params: [] },
          JsdocTypeNumber: (p) => Ye(p.value.toString()),
          JsdocTypeObject: (p, x) => {
            let k = { type: 'RecordType', fields: [] }
            for (let H of p.elements)
              H.type !== 'JsdocTypeObjectField' &&
              H.type !== 'JsdocTypeJsdocObjectField'
                ? k.fields.push({ type: 'FieldType', key: x(H), value: void 0 })
                : k.fields.push(x(H))
            return k
          },
          JsdocTypeObjectField: (p, x) => {
            if (typeof p.key != 'string')
              throw new Error(
                'Index signatures and mapped types are not supported',
              )
            return {
              type: 'FieldType',
              key: Ye(ze(p.key, p.meta.quote)),
              value: p.right === void 0 ? void 0 : x(p.right),
            }
          },
          JsdocTypeJsdocObjectField: (p, x) => ({
            type: 'FieldType',
            key: x(p.left),
            value: x(p.right),
          }),
          JsdocTypeUnion: (p, x) => ({
            type: 'TypeUnion',
            elements: p.elements.map((k) => x(k)),
          }),
          JsdocTypeKeyValue: (p, x) => ({
            type: 'FieldType',
            key: Ye(p.key),
            value: p.right === void 0 ? void 0 : x(p.right),
          }),
          JsdocTypeNamePath: (p, x) => {
            let k = x(p.left),
              H
            p.right.type === 'JsdocTypeSpecialNamePath'
              ? (H = x(p.right).name)
              : (H = ze(p.right.value, p.right.meta.quote))
            let Q =
              p.pathType === 'inner'
                ? '~'
                : p.pathType === 'instance'
                  ? '#'
                  : '.'
            return Ye(`${k.name}${Q}${H}`)
          },
          JsdocTypeSymbol: (p) => {
            let x = '',
              k = p.element,
              H = !1
            return (
              k?.type === 'JsdocTypeVariadic' &&
                (k.meta.position === 'prefix' ? (x = '...') : (H = !0),
                (k = k.element)),
              k?.type === 'JsdocTypeName'
                ? (x += k.value)
                : k?.type === 'JsdocTypeNumber' && (x += k.value.toString()),
              H && (x += '...'),
              Ye(`${p.value}(${x})`)
            )
          },
          JsdocTypeParenthesis: (p, x) => x(T(p.element)),
          JsdocTypeMappedType: se,
          JsdocTypeIndexSignature: se,
          JsdocTypeImport: se,
          JsdocTypeKeyof: se,
          JsdocTypeTuple: se,
          JsdocTypeTypeof: se,
          JsdocTypeIntersection: se,
          JsdocTypeProperty: se,
          JsdocTypePredicate: se,
          JsdocTypeAsserts: se,
        }
        function Zn(p) {
          return ue(Ze, p)
        }
        function ft(p) {
          switch (p) {
            case void 0:
              return 'none'
            case 'single':
              return 'single'
            case 'double':
              return 'double'
          }
        }
        function eo(p) {
          switch (p) {
            case 'inner':
              return 'INNER_MEMBER'
            case 'instance':
              return 'INSTANCE_MEMBER'
            case 'property':
              return 'MEMBER'
            case 'property-brackets':
              return 'MEMBER'
          }
        }
        function xt(p, x) {
          return x.length === 2
            ? { type: p, left: x[0], right: x[1] }
            : { type: p, left: x[0], right: xt(p, x.slice(1)) }
        }
        let tn = {
          JsdocTypeOptional: (p, x) => ({
            type: 'OPTIONAL',
            value: x(p.element),
            meta: {
              syntax:
                p.meta.position === 'prefix'
                  ? 'PREFIX_EQUAL_SIGN'
                  : 'SUFFIX_EQUALS_SIGN',
            },
          }),
          JsdocTypeNullable: (p, x) => ({
            type: 'NULLABLE',
            value: x(p.element),
            meta: {
              syntax:
                p.meta.position === 'prefix'
                  ? 'PREFIX_QUESTION_MARK'
                  : 'SUFFIX_QUESTION_MARK',
            },
          }),
          JsdocTypeNotNullable: (p, x) => ({
            type: 'NOT_NULLABLE',
            value: x(p.element),
            meta: {
              syntax:
                p.meta.position === 'prefix' ? 'PREFIX_BANG' : 'SUFFIX_BANG',
            },
          }),
          JsdocTypeVariadic: (p, x) => {
            let k = {
              type: 'VARIADIC',
              meta: {
                syntax:
                  p.meta.position === 'prefix'
                    ? 'PREFIX_DOTS'
                    : p.meta.position === 'suffix'
                      ? 'SUFFIX_DOTS'
                      : 'ONLY_DOTS',
              },
            }
            return p.element !== void 0 && (k.value = x(p.element)), k
          },
          JsdocTypeName: (p) => ({ type: 'NAME', name: p.value }),
          JsdocTypeTypeof: (p, x) => ({
            type: 'TYPE_QUERY',
            name: x(p.element),
          }),
          JsdocTypeTuple: (p, x) => ({
            type: 'TUPLE',
            entries: p.elements.map(x),
          }),
          JsdocTypeKeyof: (p, x) => ({
            type: 'KEY_QUERY',
            value: x(p.element),
          }),
          JsdocTypeImport: (p) => ({
            type: 'IMPORT',
            path: {
              type: 'STRING_VALUE',
              quoteStyle: ft(p.element.meta.quote),
              string: p.element.value,
            },
          }),
          JsdocTypeUndefined: () => ({ type: 'NAME', name: 'undefined' }),
          JsdocTypeAny: () => ({ type: 'ANY' }),
          JsdocTypeFunction: (p, x) => {
            let k = we(p),
              H = {
                type: p.arrow ? 'ARROW' : 'FUNCTION',
                params: k.params.map((Q) => {
                  if (Q.type === 'JsdocTypeKeyValue') {
                    if (Q.right === void 0)
                      throw new Error(
                        "Function parameter without ':' is not expected to be 'KEY_VALUE'",
                      )
                    return {
                      type: 'NAMED_PARAMETER',
                      name: Q.key,
                      typeName: x(Q.right),
                    }
                  } else return x(Q)
                }),
                new: null,
                returns: null,
              }
            return (
              k.this !== void 0
                ? (H.this = x(k.this))
                : p.arrow || (H.this = null),
              k.new !== void 0 && (H.new = x(k.new)),
              p.returnType !== void 0 && (H.returns = x(p.returnType)),
              H
            )
          },
          JsdocTypeGeneric: (p, x) => {
            let k = {
              type: 'GENERIC',
              subject: x(p.left),
              objects: p.elements.map(x),
              meta: {
                syntax:
                  p.meta.brackets === 'square'
                    ? 'SQUARE_BRACKET'
                    : p.meta.dot
                      ? 'ANGLE_BRACKET_WITH_DOT'
                      : 'ANGLE_BRACKET',
              },
            }
            return (
              p.meta.brackets === 'square' &&
                p.elements[0].type === 'JsdocTypeFunction' &&
                !p.elements[0].parenthesis &&
                (k.objects[0] = { type: 'NAME', name: 'function' }),
              k
            )
          },
          JsdocTypeObjectField: (p, x) => {
            if (typeof p.key != 'string')
              throw new Error(
                'Index signatures and mapped types are not supported',
              )
            if (p.right === void 0)
              return {
                type: 'RECORD_ENTRY',
                key: p.key,
                quoteStyle: ft(p.meta.quote),
                value: null,
                readonly: !1,
              }
            let k = x(p.right)
            return (
              p.optional &&
                (k = {
                  type: 'OPTIONAL',
                  value: k,
                  meta: { syntax: 'SUFFIX_KEY_QUESTION_MARK' },
                }),
              {
                type: 'RECORD_ENTRY',
                key: p.key.toString(),
                quoteStyle: ft(p.meta.quote),
                value: k,
                readonly: !1,
              }
            )
          },
          JsdocTypeJsdocObjectField: () => {
            throw new Error('Keys may not be typed in jsdoctypeparser.')
          },
          JsdocTypeKeyValue: (p, x) => {
            if (p.right === void 0)
              return {
                type: 'RECORD_ENTRY',
                key: p.key,
                quoteStyle: 'none',
                value: null,
                readonly: !1,
              }
            let k = x(p.right)
            return (
              p.optional &&
                (k = {
                  type: 'OPTIONAL',
                  value: k,
                  meta: { syntax: 'SUFFIX_KEY_QUESTION_MARK' },
                }),
              {
                type: 'RECORD_ENTRY',
                key: p.key,
                quoteStyle: 'none',
                value: k,
                readonly: !1,
              }
            )
          },
          JsdocTypeObject: (p, x) => {
            let k = []
            for (let H of p.elements)
              (H.type === 'JsdocTypeObjectField' ||
                H.type === 'JsdocTypeJsdocObjectField') &&
                k.push(x(H))
            return { type: 'RECORD', entries: k }
          },
          JsdocTypeSpecialNamePath: (p) => {
            if (p.specialType !== 'module')
              throw new Error(
                `jsdoctypeparser does not support type ${p.specialType} at this point.`,
              )
            return {
              type: 'MODULE',
              value: {
                type: 'FILE_PATH',
                quoteStyle: ft(p.meta.quote),
                path: p.value,
              },
            }
          },
          JsdocTypeNamePath: (p, x) => {
            let k = !1,
              H,
              Q
            p.right.type === 'JsdocTypeSpecialNamePath' &&
            p.right.specialType === 'event'
              ? ((k = !0), (H = p.right.value), (Q = ft(p.right.meta.quote)))
              : ((H = p.right.value), (Q = ft(p.right.meta.quote)))
            let ne = {
              type: eo(p.pathType),
              owner: x(p.left),
              name: H,
              quoteStyle: Q,
              hasEventPrefix: k,
            }
            if (ne.owner.type === 'MODULE') {
              let ae = ne.owner
              return (ne.owner = ne.owner.value), (ae.value = ne), ae
            } else return ne
          },
          JsdocTypeUnion: (p, x) => xt('UNION', p.elements.map(x)),
          JsdocTypeParenthesis: (p, x) => ({
            type: 'PARENTHESIS',
            value: x(T(p.element)),
          }),
          JsdocTypeNull: () => ({ type: 'NAME', name: 'null' }),
          JsdocTypeUnknown: () => ({ type: 'UNKNOWN' }),
          JsdocTypeStringValue: (p) => ({
            type: 'STRING_VALUE',
            quoteStyle: ft(p.meta.quote),
            string: p.value,
          }),
          JsdocTypeIntersection: (p, x) =>
            xt('INTERSECTION', p.elements.map(x)),
          JsdocTypeNumber: (p) => ({
            type: 'NUMBER_VALUE',
            number: p.value.toString(),
          }),
          JsdocTypeSymbol: se,
          JsdocTypeProperty: se,
          JsdocTypePredicate: se,
          JsdocTypeMappedType: se,
          JsdocTypeIndexSignature: se,
          JsdocTypeAsserts: se,
        }
        function mr(p) {
          return ue(tn, p)
        }
        function rn() {
          return {
            JsdocTypeIntersection: (p, x) => ({
              type: 'JsdocTypeIntersection',
              elements: p.elements.map(x),
            }),
            JsdocTypeGeneric: (p, x) => ({
              type: 'JsdocTypeGeneric',
              left: x(p.left),
              elements: p.elements.map(x),
              meta: { dot: p.meta.dot, brackets: p.meta.brackets },
            }),
            JsdocTypeNullable: (p) => p,
            JsdocTypeUnion: (p, x) => ({
              type: 'JsdocTypeUnion',
              elements: p.elements.map(x),
            }),
            JsdocTypeUnknown: (p) => p,
            JsdocTypeUndefined: (p) => p,
            JsdocTypeTypeof: (p, x) => ({
              type: 'JsdocTypeTypeof',
              element: x(p.element),
            }),
            JsdocTypeSymbol: (p, x) => {
              let k = { type: 'JsdocTypeSymbol', value: p.value }
              return p.element !== void 0 && (k.element = x(p.element)), k
            },
            JsdocTypeOptional: (p, x) => ({
              type: 'JsdocTypeOptional',
              element: x(p.element),
              meta: { position: p.meta.position },
            }),
            JsdocTypeObject: (p, x) => ({
              type: 'JsdocTypeObject',
              meta: { separator: 'comma' },
              elements: p.elements.map(x),
            }),
            JsdocTypeNumber: (p) => p,
            JsdocTypeNull: (p) => p,
            JsdocTypeNotNullable: (p, x) => ({
              type: 'JsdocTypeNotNullable',
              element: x(p.element),
              meta: { position: p.meta.position },
            }),
            JsdocTypeSpecialNamePath: (p) => p,
            JsdocTypeObjectField: (p, x) => ({
              type: 'JsdocTypeObjectField',
              key: p.key,
              right: p.right === void 0 ? void 0 : x(p.right),
              optional: p.optional,
              readonly: p.readonly,
              meta: p.meta,
            }),
            JsdocTypeJsdocObjectField: (p, x) => ({
              type: 'JsdocTypeJsdocObjectField',
              left: x(p.left),
              right: x(p.right),
            }),
            JsdocTypeKeyValue: (p, x) => ({
              type: 'JsdocTypeKeyValue',
              key: p.key,
              right: p.right === void 0 ? void 0 : x(p.right),
              optional: p.optional,
              variadic: p.variadic,
            }),
            JsdocTypeImport: (p, x) => ({
              type: 'JsdocTypeImport',
              element: x(p.element),
            }),
            JsdocTypeAny: (p) => p,
            JsdocTypeStringValue: (p) => p,
            JsdocTypeNamePath: (p) => p,
            JsdocTypeVariadic: (p, x) => {
              let k = {
                type: 'JsdocTypeVariadic',
                meta: {
                  position: p.meta.position,
                  squareBrackets: p.meta.squareBrackets,
                },
              }
              return p.element !== void 0 && (k.element = x(p.element)), k
            },
            JsdocTypeTuple: (p, x) => ({
              type: 'JsdocTypeTuple',
              elements: p.elements.map(x),
            }),
            JsdocTypeName: (p) => p,
            JsdocTypeFunction: (p, x) => {
              let k = {
                type: 'JsdocTypeFunction',
                arrow: p.arrow,
                parameters: p.parameters.map(x),
                constructor: p.constructor,
                parenthesis: p.parenthesis,
              }
              return (
                p.returnType !== void 0 && (k.returnType = x(p.returnType)), k
              )
            },
            JsdocTypeKeyof: (p, x) => ({
              type: 'JsdocTypeKeyof',
              element: x(p.element),
            }),
            JsdocTypeParenthesis: (p, x) => ({
              type: 'JsdocTypeParenthesis',
              element: x(p.element),
            }),
            JsdocTypeProperty: (p) => p,
            JsdocTypePredicate: (p, x) => ({
              type: 'JsdocTypePredicate',
              left: x(p.left),
              right: x(p.right),
            }),
            JsdocTypeIndexSignature: (p, x) => ({
              type: 'JsdocTypeIndexSignature',
              key: p.key,
              right: x(p.right),
            }),
            JsdocTypeMappedType: (p, x) => ({
              type: 'JsdocTypeMappedType',
              key: p.key,
              right: x(p.right),
            }),
            JsdocTypeAsserts: (p, x) => ({
              type: 'JsdocTypeAsserts',
              left: x(p.left),
              right: x(p.right),
            }),
          }
        }
        let gr = {
          JsdocTypeAny: [],
          JsdocTypeFunction: ['parameters', 'returnType'],
          JsdocTypeGeneric: ['left', 'elements'],
          JsdocTypeImport: [],
          JsdocTypeIndexSignature: ['right'],
          JsdocTypeIntersection: ['elements'],
          JsdocTypeKeyof: ['element'],
          JsdocTypeKeyValue: ['right'],
          JsdocTypeMappedType: ['right'],
          JsdocTypeName: [],
          JsdocTypeNamePath: ['left', 'right'],
          JsdocTypeNotNullable: ['element'],
          JsdocTypeNull: [],
          JsdocTypeNullable: ['element'],
          JsdocTypeNumber: [],
          JsdocTypeObject: ['elements'],
          JsdocTypeObjectField: ['right'],
          JsdocTypeJsdocObjectField: ['left', 'right'],
          JsdocTypeOptional: ['element'],
          JsdocTypeParenthesis: ['element'],
          JsdocTypeSpecialNamePath: [],
          JsdocTypeStringValue: [],
          JsdocTypeSymbol: ['element'],
          JsdocTypeTuple: ['elements'],
          JsdocTypeTypeof: ['element'],
          JsdocTypeUndefined: [],
          JsdocTypeUnion: ['elements'],
          JsdocTypeUnknown: [],
          JsdocTypeVariadic: ['element'],
          JsdocTypeProperty: [],
          JsdocTypePredicate: ['left', 'right'],
          JsdocTypeAsserts: ['left', 'right'],
        }
        function br(p, x, k, H, Q) {
          H?.(p, x, k)
          let ne = gr[p.type]
          for (let ae of ne) {
            let de = p[ae]
            if (de !== void 0)
              if (Array.isArray(de)) for (let Ne of de) br(Ne, p, ae, H, Q)
              else br(de, p, ae, H, Q)
          }
          Q?.(p, x, k)
        }
        function to(p, x, k) {
          br(p, void 0, void 0, x, k)
        }
        ;(e.catharsisTransform = Zn),
          (e.identityTransformRules = rn),
          (e.jtpTransform = mr),
          (e.parse = $),
          (e.stringify = dt),
          (e.stringifyRules = pt),
          (e.transform = ue),
          (e.traverse = to),
          (e.tryParse = G),
          (e.visitorKeys = gr)
      })
    })
    var x0 = U((foe, E0) => {
      w()
      S()
      A()
      var Ij = ot(),
        kj = function () {
          return Ij.Date.now()
        }
      E0.exports = kj
    })
    var S0 = U((goe, w0) => {
      w()
      S()
      A()
      var Pj = /\s/
      function Rj(e) {
        for (var t = e.length; t-- && Pj.test(e.charAt(t)); );
        return t
      }
      w0.exports = Rj
    })
    var T0 = U((xoe, A0) => {
      w()
      S()
      A()
      var Dj = S0(),
        Fj = /^\s+/
      function jj(e) {
        return e && e.slice(0, Dj(e) + 1).replace(Fj, '')
      }
      A0.exports = jj
    })
    var I0 = U((Toe, O0) => {
      w()
      S()
      A()
      var Nj = T0(),
        C0 = mt(),
        Bj = xn(),
        _0 = NaN,
        Lj = /^[-+]0x[0-9a-f]+$/i,
        qj = /^0b[01]+$/i,
        Mj = /^0o[0-7]+$/i,
        Uj = parseInt
      function $j(e) {
        if (typeof e == 'number') return e
        if (Bj(e)) return _0
        if (C0(e)) {
          var t = typeof e.valueOf == 'function' ? e.valueOf() : e
          e = C0(t) ? t + '' : t
        }
        if (typeof e != 'string') return e === 0 ? e : +e
        e = Nj(e)
        var r = qj.test(e)
        return r || Mj.test(e)
          ? Uj(e.slice(2), r ? 2 : 8)
          : Lj.test(e)
            ? _0
            : +e
      }
      O0.exports = $j
    })
    var R0 = U((Ioe, P0) => {
      w()
      S()
      A()
      var zj = mt(),
        rl = x0(),
        k0 = I0(),
        Vj = 'Expected a function',
        Hj = Math.max,
        Jj = Math.min
      function Gj(e, t, r) {
        var n,
          o,
          a,
          i,
          s,
          l,
          u = 0,
          c = !1,
          d = !1,
          y = !0
        if (typeof e != 'function') throw new TypeError(Vj)
        ;(t = k0(t) || 0),
          zj(r) &&
            ((c = !!r.leading),
            (d = 'maxWait' in r),
            (a = d ? Hj(k0(r.maxWait) || 0, t) : a),
            (y = 'trailing' in r ? !!r.trailing : y))
        function f(I) {
          var D = n,
            R = o
          return (n = o = void 0), (u = I), (i = e.apply(R, D)), i
        }
        function h(I) {
          return (u = I), (s = setTimeout(b, t)), c ? f(I) : i
        }
        function g(I) {
          var D = I - l,
            R = I - u,
            M = t - D
          return d ? Jj(M, a - R) : M
        }
        function C(I) {
          var D = I - l,
            R = I - u
          return l === void 0 || D >= t || D < 0 || (d && R >= a)
        }
        function b() {
          var I = rl()
          if (C(I)) return E(I)
          s = setTimeout(b, g(I))
        }
        function E(I) {
          return (s = void 0), y && n ? f(I) : ((n = o = void 0), i)
        }
        function _() {
          s !== void 0 && clearTimeout(s), (u = 0), (n = l = o = s = void 0)
        }
        function T() {
          return s === void 0 ? i : E(rl())
        }
        function O() {
          var I = rl(),
            D = C(I)
          if (((n = arguments), (o = this), (l = I), D)) {
            if (s === void 0) return h(l)
            if (d) return clearTimeout(s), (s = setTimeout(b, t)), f(l)
          }
          return s === void 0 && (s = setTimeout(b, t)), i
        }
        return (O.cancel = _), (O.flush = T), O
      }
      P0.exports = Gj
    })
    var Q0 = {}
    zl(Q0, { ColorControl: () => X0, default: () => DN })
    function lr() {
      return (lr =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }).apply(this, arguments)
    }
    function ll(e, t) {
      if (e == null) return {}
      var r,
        n,
        o = {},
        a = Object.keys(e)
      for (n = 0; n < a.length; n++) t.indexOf((r = a[n])) >= 0 || (o[r] = e[r])
      return o
    }
    function nl(e) {
      var t = Xe(e),
        r = Xe(function (n) {
          t.current && t.current(n)
        })
      return (t.current = e), r.current
    }
    function G0(e, t, r) {
      var n = nl(r),
        o = me(function () {
          return e.toHsva(t)
        }),
        a = o[0],
        i = o[1],
        s = Xe({ color: t, hsva: a })
      He(
        function () {
          if (!e.equal(t, s.current.color)) {
            var u = e.toHsva(t)
            ;(s.current = { hsva: u, color: t }), i(u)
          }
        },
        [t, e],
      ),
        He(
          function () {
            var u
            H0(a, s.current.hsva) ||
              e.equal((u = e.fromHsva(a)), s.current.color) ||
              ((s.current = { hsva: a, color: u }), n(u))
          },
          [a, e, n],
        )
      var l = Ve(function (u) {
        i(function (c) {
          return Object.assign({}, c, u)
        })
      }, [])
      return [a, l]
    }
    var L0,
      Wj,
      q0,
      Kj,
      Yj,
      it,
      zr,
      qn,
      ol,
      D0,
      F0,
      ul,
      Mn,
      cl,
      qe,
      Xj,
      Qj,
      al,
      Zj,
      eN,
      tN,
      rN,
      M0,
      il,
      ya,
      U0,
      nN,
      pa,
      oN,
      $0,
      z0,
      V0,
      H0,
      J0,
      aN,
      iN,
      sN,
      j0,
      W0,
      lN,
      uN,
      cN,
      pN,
      K0,
      dN,
      fN,
      yN,
      hN,
      mN,
      gN,
      bN,
      vN,
      EN,
      xN,
      wN,
      N0,
      SN,
      AN,
      Y0,
      da,
      TN,
      CN,
      _N,
      sl,
      ON,
      IN,
      fa,
      B0,
      $r,
      kN,
      PN,
      ha,
      RN,
      X0,
      DN,
      Z0 = St(() => {
        w()
        S()
        A()
        Pa()
        no()
        ao()
        ti()
        ai()
        ;(L0 = on(R0())),
          (Wj = Yt({
            '../../node_modules/color-name/index.js'(e, t) {
              t.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50],
              }
            },
          })),
          (q0 = Yt({
            '../../node_modules/color-convert/conversions.js'(e, t) {
              var r = Wj(),
                n = {}
              for (let i of Object.keys(r)) n[r[i]] = i
              var o = {
                rgb: { channels: 3, labels: 'rgb' },
                hsl: { channels: 3, labels: 'hsl' },
                hsv: { channels: 3, labels: 'hsv' },
                hwb: { channels: 3, labels: 'hwb' },
                cmyk: { channels: 4, labels: 'cmyk' },
                xyz: { channels: 3, labels: 'xyz' },
                lab: { channels: 3, labels: 'lab' },
                lch: { channels: 3, labels: 'lch' },
                hex: { channels: 1, labels: ['hex'] },
                keyword: { channels: 1, labels: ['keyword'] },
                ansi16: { channels: 1, labels: ['ansi16'] },
                ansi256: { channels: 1, labels: ['ansi256'] },
                hcg: { channels: 3, labels: ['h', 'c', 'g'] },
                apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
                gray: { channels: 1, labels: ['gray'] },
              }
              t.exports = o
              for (let i of Object.keys(o)) {
                if (!('channels' in o[i]))
                  throw new Error('missing channels property: ' + i)
                if (!('labels' in o[i]))
                  throw new Error('missing channel labels property: ' + i)
                if (o[i].labels.length !== o[i].channels)
                  throw new Error('channel and label counts mismatch: ' + i)
                let { channels: s, labels: l } = o[i]
                delete o[i].channels,
                  delete o[i].labels,
                  Object.defineProperty(o[i], 'channels', { value: s }),
                  Object.defineProperty(o[i], 'labels', { value: l })
              }
              ;(o.rgb.hsl = function (i) {
                let s = i[0] / 255,
                  l = i[1] / 255,
                  u = i[2] / 255,
                  c = Math.min(s, l, u),
                  d = Math.max(s, l, u),
                  y = d - c,
                  f,
                  h
                d === c
                  ? (f = 0)
                  : s === d
                    ? (f = (l - u) / y)
                    : l === d
                      ? (f = 2 + (u - s) / y)
                      : u === d && (f = 4 + (s - l) / y),
                  (f = Math.min(f * 60, 360)),
                  f < 0 && (f += 360)
                let g = (c + d) / 2
                return (
                  d === c
                    ? (h = 0)
                    : g <= 0.5
                      ? (h = y / (d + c))
                      : (h = y / (2 - d - c)),
                  [f, h * 100, g * 100]
                )
              }),
                (o.rgb.hsv = function (i) {
                  let s,
                    l,
                    u,
                    c,
                    d,
                    y = i[0] / 255,
                    f = i[1] / 255,
                    h = i[2] / 255,
                    g = Math.max(y, f, h),
                    C = g - Math.min(y, f, h),
                    b = function (E) {
                      return (g - E) / 6 / C + 1 / 2
                    }
                  return (
                    C === 0
                      ? ((c = 0), (d = 0))
                      : ((d = C / g),
                        (s = b(y)),
                        (l = b(f)),
                        (u = b(h)),
                        y === g
                          ? (c = u - l)
                          : f === g
                            ? (c = 1 / 3 + s - u)
                            : h === g && (c = 2 / 3 + l - s),
                        c < 0 ? (c += 1) : c > 1 && (c -= 1)),
                    [c * 360, d * 100, g * 100]
                  )
                }),
                (o.rgb.hwb = function (i) {
                  let s = i[0],
                    l = i[1],
                    u = i[2],
                    c = o.rgb.hsl(i)[0],
                    d = (1 / 255) * Math.min(s, Math.min(l, u))
                  return (
                    (u = 1 - (1 / 255) * Math.max(s, Math.max(l, u))),
                    [c, d * 100, u * 100]
                  )
                }),
                (o.rgb.cmyk = function (i) {
                  let s = i[0] / 255,
                    l = i[1] / 255,
                    u = i[2] / 255,
                    c = Math.min(1 - s, 1 - l, 1 - u),
                    d = (1 - s - c) / (1 - c) || 0,
                    y = (1 - l - c) / (1 - c) || 0,
                    f = (1 - u - c) / (1 - c) || 0
                  return [d * 100, y * 100, f * 100, c * 100]
                })
              function a(i, s) {
                return (
                  (i[0] - s[0]) ** 2 + (i[1] - s[1]) ** 2 + (i[2] - s[2]) ** 2
                )
              }
              ;(o.rgb.keyword = function (i) {
                let s = n[i]
                if (s) return s
                let l = 1 / 0,
                  u
                for (let c of Object.keys(r)) {
                  let d = r[c],
                    y = a(i, d)
                  y < l && ((l = y), (u = c))
                }
                return u
              }),
                (o.keyword.rgb = function (i) {
                  return r[i]
                }),
                (o.rgb.xyz = function (i) {
                  let s = i[0] / 255,
                    l = i[1] / 255,
                    u = i[2] / 255
                  ;(s = s > 0.04045 ? ((s + 0.055) / 1.055) ** 2.4 : s / 12.92),
                    (l =
                      l > 0.04045 ? ((l + 0.055) / 1.055) ** 2.4 : l / 12.92),
                    (u = u > 0.04045 ? ((u + 0.055) / 1.055) ** 2.4 : u / 12.92)
                  let c = s * 0.4124 + l * 0.3576 + u * 0.1805,
                    d = s * 0.2126 + l * 0.7152 + u * 0.0722,
                    y = s * 0.0193 + l * 0.1192 + u * 0.9505
                  return [c * 100, d * 100, y * 100]
                }),
                (o.rgb.lab = function (i) {
                  let s = o.rgb.xyz(i),
                    l = s[0],
                    u = s[1],
                    c = s[2]
                  ;(l /= 95.047),
                    (u /= 100),
                    (c /= 108.883),
                    (l = l > 0.008856 ? l ** (1 / 3) : 7.787 * l + 16 / 116),
                    (u = u > 0.008856 ? u ** (1 / 3) : 7.787 * u + 16 / 116),
                    (c = c > 0.008856 ? c ** (1 / 3) : 7.787 * c + 16 / 116)
                  let d = 116 * u - 16,
                    y = 500 * (l - u),
                    f = 200 * (u - c)
                  return [d, y, f]
                }),
                (o.hsl.rgb = function (i) {
                  let s = i[0] / 360,
                    l = i[1] / 100,
                    u = i[2] / 100,
                    c,
                    d,
                    y
                  if (l === 0) return (y = u * 255), [y, y, y]
                  u < 0.5 ? (c = u * (1 + l)) : (c = u + l - u * l)
                  let f = 2 * u - c,
                    h = [0, 0, 0]
                  for (let g = 0; g < 3; g++)
                    (d = s + (1 / 3) * -(g - 1)),
                      d < 0 && d++,
                      d > 1 && d--,
                      6 * d < 1
                        ? (y = f + (c - f) * 6 * d)
                        : 2 * d < 1
                          ? (y = c)
                          : 3 * d < 2
                            ? (y = f + (c - f) * (2 / 3 - d) * 6)
                            : (y = f),
                      (h[g] = y * 255)
                  return h
                }),
                (o.hsl.hsv = function (i) {
                  let s = i[0],
                    l = i[1] / 100,
                    u = i[2] / 100,
                    c = l,
                    d = Math.max(u, 0.01)
                  ;(u *= 2),
                    (l *= u <= 1 ? u : 2 - u),
                    (c *= d <= 1 ? d : 2 - d)
                  let y = (u + l) / 2,
                    f = u === 0 ? (2 * c) / (d + c) : (2 * l) / (u + l)
                  return [s, f * 100, y * 100]
                }),
                (o.hsv.rgb = function (i) {
                  let s = i[0] / 60,
                    l = i[1] / 100,
                    u = i[2] / 100,
                    c = Math.floor(s) % 6,
                    d = s - Math.floor(s),
                    y = 255 * u * (1 - l),
                    f = 255 * u * (1 - l * d),
                    h = 255 * u * (1 - l * (1 - d))
                  switch (((u *= 255), c)) {
                    case 0:
                      return [u, h, y]
                    case 1:
                      return [f, u, y]
                    case 2:
                      return [y, u, h]
                    case 3:
                      return [y, f, u]
                    case 4:
                      return [h, y, u]
                    case 5:
                      return [u, y, f]
                  }
                }),
                (o.hsv.hsl = function (i) {
                  let s = i[0],
                    l = i[1] / 100,
                    u = i[2] / 100,
                    c = Math.max(u, 0.01),
                    d,
                    y
                  y = (2 - l) * u
                  let f = (2 - l) * c
                  return (
                    (d = l * c),
                    (d /= f <= 1 ? f : 2 - f),
                    (d = d || 0),
                    (y /= 2),
                    [s, d * 100, y * 100]
                  )
                }),
                (o.hwb.rgb = function (i) {
                  let s = i[0] / 360,
                    l = i[1] / 100,
                    u = i[2] / 100,
                    c = l + u,
                    d
                  c > 1 && ((l /= c), (u /= c))
                  let y = Math.floor(6 * s),
                    f = 1 - u
                  ;(d = 6 * s - y), y & 1 && (d = 1 - d)
                  let h = l + d * (f - l),
                    g,
                    C,
                    b
                  switch (y) {
                    default:
                    case 6:
                    case 0:
                      ;(g = f), (C = h), (b = l)
                      break
                    case 1:
                      ;(g = h), (C = f), (b = l)
                      break
                    case 2:
                      ;(g = l), (C = f), (b = h)
                      break
                    case 3:
                      ;(g = l), (C = h), (b = f)
                      break
                    case 4:
                      ;(g = h), (C = l), (b = f)
                      break
                    case 5:
                      ;(g = f), (C = l), (b = h)
                      break
                  }
                  return [g * 255, C * 255, b * 255]
                }),
                (o.cmyk.rgb = function (i) {
                  let s = i[0] / 100,
                    l = i[1] / 100,
                    u = i[2] / 100,
                    c = i[3] / 100,
                    d = 1 - Math.min(1, s * (1 - c) + c),
                    y = 1 - Math.min(1, l * (1 - c) + c),
                    f = 1 - Math.min(1, u * (1 - c) + c)
                  return [d * 255, y * 255, f * 255]
                }),
                (o.xyz.rgb = function (i) {
                  let s = i[0] / 100,
                    l = i[1] / 100,
                    u = i[2] / 100,
                    c,
                    d,
                    y
                  return (
                    (c = s * 3.2406 + l * -1.5372 + u * -0.4986),
                    (d = s * -0.9689 + l * 1.8758 + u * 0.0415),
                    (y = s * 0.0557 + l * -0.204 + u * 1.057),
                    (c =
                      c > 0.0031308
                        ? 1.055 * c ** (1 / 2.4) - 0.055
                        : c * 12.92),
                    (d =
                      d > 0.0031308
                        ? 1.055 * d ** (1 / 2.4) - 0.055
                        : d * 12.92),
                    (y =
                      y > 0.0031308
                        ? 1.055 * y ** (1 / 2.4) - 0.055
                        : y * 12.92),
                    (c = Math.min(Math.max(0, c), 1)),
                    (d = Math.min(Math.max(0, d), 1)),
                    (y = Math.min(Math.max(0, y), 1)),
                    [c * 255, d * 255, y * 255]
                  )
                }),
                (o.xyz.lab = function (i) {
                  let s = i[0],
                    l = i[1],
                    u = i[2]
                  ;(s /= 95.047),
                    (l /= 100),
                    (u /= 108.883),
                    (s = s > 0.008856 ? s ** (1 / 3) : 7.787 * s + 16 / 116),
                    (l = l > 0.008856 ? l ** (1 / 3) : 7.787 * l + 16 / 116),
                    (u = u > 0.008856 ? u ** (1 / 3) : 7.787 * u + 16 / 116)
                  let c = 116 * l - 16,
                    d = 500 * (s - l),
                    y = 200 * (l - u)
                  return [c, d, y]
                }),
                (o.lab.xyz = function (i) {
                  let s = i[0],
                    l = i[1],
                    u = i[2],
                    c,
                    d,
                    y
                  ;(d = (s + 16) / 116), (c = l / 500 + d), (y = d - u / 200)
                  let f = d ** 3,
                    h = c ** 3,
                    g = y ** 3
                  return (
                    (d = f > 0.008856 ? f : (d - 16 / 116) / 7.787),
                    (c = h > 0.008856 ? h : (c - 16 / 116) / 7.787),
                    (y = g > 0.008856 ? g : (y - 16 / 116) / 7.787),
                    (c *= 95.047),
                    (d *= 100),
                    (y *= 108.883),
                    [c, d, y]
                  )
                }),
                (o.lab.lch = function (i) {
                  let s = i[0],
                    l = i[1],
                    u = i[2],
                    c
                  ;(c = (Math.atan2(u, l) * 360) / 2 / Math.PI),
                    c < 0 && (c += 360)
                  let d = Math.sqrt(l * l + u * u)
                  return [s, d, c]
                }),
                (o.lch.lab = function (i) {
                  let s = i[0],
                    l = i[1],
                    u = (i[2] / 360) * 2 * Math.PI,
                    c = l * Math.cos(u),
                    d = l * Math.sin(u)
                  return [s, c, d]
                }),
                (o.rgb.ansi16 = function (i, s = null) {
                  let [l, u, c] = i,
                    d = s === null ? o.rgb.hsv(i)[2] : s
                  if (((d = Math.round(d / 50)), d === 0)) return 30
                  let y =
                    30 +
                    ((Math.round(c / 255) << 2) |
                      (Math.round(u / 255) << 1) |
                      Math.round(l / 255))
                  return d === 2 && (y += 60), y
                }),
                (o.hsv.ansi16 = function (i) {
                  return o.rgb.ansi16(o.hsv.rgb(i), i[2])
                }),
                (o.rgb.ansi256 = function (i) {
                  let s = i[0],
                    l = i[1],
                    u = i[2]
                  return s === l && l === u
                    ? s < 8
                      ? 16
                      : s > 248
                        ? 231
                        : Math.round(((s - 8) / 247) * 24) + 232
                    : 16 +
                        36 * Math.round((s / 255) * 5) +
                        6 * Math.round((l / 255) * 5) +
                        Math.round((u / 255) * 5)
                }),
                (o.ansi16.rgb = function (i) {
                  let s = i % 10
                  if (s === 0 || s === 7)
                    return (
                      i > 50 && (s += 3.5), (s = (s / 10.5) * 255), [s, s, s]
                    )
                  let l = (~~(i > 50) + 1) * 0.5,
                    u = (s & 1) * l * 255,
                    c = ((s >> 1) & 1) * l * 255,
                    d = ((s >> 2) & 1) * l * 255
                  return [u, c, d]
                }),
                (o.ansi256.rgb = function (i) {
                  if (i >= 232) {
                    let d = (i - 232) * 10 + 8
                    return [d, d, d]
                  }
                  i -= 16
                  let s,
                    l = (Math.floor(i / 36) / 5) * 255,
                    u = (Math.floor((s = i % 36) / 6) / 5) * 255,
                    c = ((s % 6) / 5) * 255
                  return [l, u, c]
                }),
                (o.rgb.hex = function (i) {
                  let s = (
                    ((Math.round(i[0]) & 255) << 16) +
                    ((Math.round(i[1]) & 255) << 8) +
                    (Math.round(i[2]) & 255)
                  )
                    .toString(16)
                    .toUpperCase()
                  return '000000'.substring(s.length) + s
                }),
                (o.hex.rgb = function (i) {
                  let s = i.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i)
                  if (!s) return [0, 0, 0]
                  let l = s[0]
                  s[0].length === 3 &&
                    (l = l
                      .split('')
                      .map((f) => f + f)
                      .join(''))
                  let u = parseInt(l, 16),
                    c = (u >> 16) & 255,
                    d = (u >> 8) & 255,
                    y = u & 255
                  return [c, d, y]
                }),
                (o.rgb.hcg = function (i) {
                  let s = i[0] / 255,
                    l = i[1] / 255,
                    u = i[2] / 255,
                    c = Math.max(Math.max(s, l), u),
                    d = Math.min(Math.min(s, l), u),
                    y = c - d,
                    f,
                    h
                  return (
                    y < 1 ? (f = d / (1 - y)) : (f = 0),
                    y <= 0
                      ? (h = 0)
                      : c === s
                        ? (h = ((l - u) / y) % 6)
                        : c === l
                          ? (h = 2 + (u - s) / y)
                          : (h = 4 + (s - l) / y),
                    (h /= 6),
                    (h %= 1),
                    [h * 360, y * 100, f * 100]
                  )
                }),
                (o.hsl.hcg = function (i) {
                  let s = i[1] / 100,
                    l = i[2] / 100,
                    u = l < 0.5 ? 2 * s * l : 2 * s * (1 - l),
                    c = 0
                  return (
                    u < 1 && (c = (l - 0.5 * u) / (1 - u)),
                    [i[0], u * 100, c * 100]
                  )
                }),
                (o.hsv.hcg = function (i) {
                  let s = i[1] / 100,
                    l = i[2] / 100,
                    u = s * l,
                    c = 0
                  return (
                    u < 1 && (c = (l - u) / (1 - u)), [i[0], u * 100, c * 100]
                  )
                }),
                (o.hcg.rgb = function (i) {
                  let s = i[0] / 360,
                    l = i[1] / 100,
                    u = i[2] / 100
                  if (l === 0) return [u * 255, u * 255, u * 255]
                  let c = [0, 0, 0],
                    d = (s % 1) * 6,
                    y = d % 1,
                    f = 1 - y,
                    h = 0
                  switch (Math.floor(d)) {
                    case 0:
                      ;(c[0] = 1), (c[1] = y), (c[2] = 0)
                      break
                    case 1:
                      ;(c[0] = f), (c[1] = 1), (c[2] = 0)
                      break
                    case 2:
                      ;(c[0] = 0), (c[1] = 1), (c[2] = y)
                      break
                    case 3:
                      ;(c[0] = 0), (c[1] = f), (c[2] = 1)
                      break
                    case 4:
                      ;(c[0] = y), (c[1] = 0), (c[2] = 1)
                      break
                    default:
                      ;(c[0] = 1), (c[1] = 0), (c[2] = f)
                  }
                  return (
                    (h = (1 - l) * u),
                    [
                      (l * c[0] + h) * 255,
                      (l * c[1] + h) * 255,
                      (l * c[2] + h) * 255,
                    ]
                  )
                }),
                (o.hcg.hsv = function (i) {
                  let s = i[1] / 100,
                    l = i[2] / 100,
                    u = s + l * (1 - s),
                    c = 0
                  return u > 0 && (c = s / u), [i[0], c * 100, u * 100]
                }),
                (o.hcg.hsl = function (i) {
                  let s = i[1] / 100,
                    l = (i[2] / 100) * (1 - s) + 0.5 * s,
                    u = 0
                  return (
                    l > 0 && l < 0.5
                      ? (u = s / (2 * l))
                      : l >= 0.5 && l < 1 && (u = s / (2 * (1 - l))),
                    [i[0], u * 100, l * 100]
                  )
                }),
                (o.hcg.hwb = function (i) {
                  let s = i[1] / 100,
                    l = i[2] / 100,
                    u = s + l * (1 - s)
                  return [i[0], (u - s) * 100, (1 - u) * 100]
                }),
                (o.hwb.hcg = function (i) {
                  let s = i[1] / 100,
                    l = 1 - i[2] / 100,
                    u = l - s,
                    c = 0
                  return (
                    u < 1 && (c = (l - u) / (1 - u)), [i[0], u * 100, c * 100]
                  )
                }),
                (o.apple.rgb = function (i) {
                  return [
                    (i[0] / 65535) * 255,
                    (i[1] / 65535) * 255,
                    (i[2] / 65535) * 255,
                  ]
                }),
                (o.rgb.apple = function (i) {
                  return [
                    (i[0] / 255) * 65535,
                    (i[1] / 255) * 65535,
                    (i[2] / 255) * 65535,
                  ]
                }),
                (o.gray.rgb = function (i) {
                  return [
                    (i[0] / 100) * 255,
                    (i[0] / 100) * 255,
                    (i[0] / 100) * 255,
                  ]
                }),
                (o.gray.hsl = function (i) {
                  return [0, 0, i[0]]
                }),
                (o.gray.hsv = o.gray.hsl),
                (o.gray.hwb = function (i) {
                  return [0, 100, i[0]]
                }),
                (o.gray.cmyk = function (i) {
                  return [0, 0, 0, i[0]]
                }),
                (o.gray.lab = function (i) {
                  return [i[0], 0, 0]
                }),
                (o.gray.hex = function (i) {
                  let s = Math.round((i[0] / 100) * 255) & 255,
                    l = ((s << 16) + (s << 8) + s).toString(16).toUpperCase()
                  return '000000'.substring(l.length) + l
                }),
                (o.rgb.gray = function (i) {
                  return [((i[0] + i[1] + i[2]) / 3 / 255) * 100]
                })
            },
          })),
          (Kj = Yt({
            '../../node_modules/color-convert/route.js'(e, t) {
              var r = q0()
              function n() {
                let s = {},
                  l = Object.keys(r)
                for (let u = l.length, c = 0; c < u; c++)
                  s[l[c]] = { distance: -1, parent: null }
                return s
              }
              function o(s) {
                let l = n(),
                  u = [s]
                for (l[s].distance = 0; u.length; ) {
                  let c = u.pop(),
                    d = Object.keys(r[c])
                  for (let y = d.length, f = 0; f < y; f++) {
                    let h = d[f],
                      g = l[h]
                    g.distance === -1 &&
                      ((g.distance = l[c].distance + 1),
                      (g.parent = c),
                      u.unshift(h))
                  }
                }
                return l
              }
              function a(s, l) {
                return function (u) {
                  return l(s(u))
                }
              }
              function i(s, l) {
                let u = [l[s].parent, s],
                  c = r[l[s].parent][s],
                  d = l[s].parent
                for (; l[d].parent; )
                  u.unshift(l[d].parent),
                    (c = a(r[l[d].parent][d], c)),
                    (d = l[d].parent)
                return (c.conversion = u), c
              }
              t.exports = function (s) {
                let l = o(s),
                  u = {},
                  c = Object.keys(l)
                for (let d = c.length, y = 0; y < d; y++) {
                  let f = c[y]
                  l[f].parent !== null && (u[f] = i(f, l))
                }
                return u
              }
            },
          })),
          (Yj = Yt({
            '../../node_modules/color-convert/index.js'(e, t) {
              var r = q0(),
                n = Kj(),
                o = {},
                a = Object.keys(r)
              function i(l) {
                let u = function (...c) {
                  let d = c[0]
                  return d == null ? d : (d.length > 1 && (c = d), l(c))
                }
                return 'conversion' in l && (u.conversion = l.conversion), u
              }
              function s(l) {
                let u = function (...c) {
                  let d = c[0]
                  if (d == null) return d
                  d.length > 1 && (c = d)
                  let y = l(c)
                  if (typeof y == 'object')
                    for (let f = y.length, h = 0; h < f; h++)
                      y[h] = Math.round(y[h])
                  return y
                }
                return 'conversion' in l && (u.conversion = l.conversion), u
              }
              a.forEach((l) => {
                ;(o[l] = {}),
                  Object.defineProperty(o[l], 'channels', {
                    value: r[l].channels,
                  }),
                  Object.defineProperty(o[l], 'labels', { value: r[l].labels })
                let u = n(l)
                Object.keys(u).forEach((c) => {
                  let d = u[c]
                  ;(o[l][c] = s(d)), (o[l][c].raw = i(d))
                })
              }),
                (t.exports = o)
            },
          })),
          (it = sn(Yj(), 1))
        ;(zr = function (e, t, r) {
          return (
            t === void 0 && (t = 0),
            r === void 0 && (r = 1),
            e > r ? r : e < t ? t : e
          )
        }),
          (qn = function (e) {
            return 'touches' in e
          }),
          (ol = function (e) {
            return (e && e.ownerDocument.defaultView) || self
          }),
          (D0 = function (e, t, r) {
            var n = e.getBoundingClientRect(),
              o = qn(t)
                ? (function (a, i) {
                    for (var s = 0; s < a.length; s++)
                      if (a[s].identifier === i) return a[s]
                    return a[0]
                  })(t.touches, r)
                : t
            return {
              left: zr((o.pageX - (n.left + ol(e).pageXOffset)) / n.width),
              top: zr((o.pageY - (n.top + ol(e).pageYOffset)) / n.height),
            }
          }),
          (F0 = function (e) {
            !qn(e) && e.preventDefault()
          }),
          (ul = v.memo(function (e) {
            var t = e.onMove,
              r = e.onKey,
              n = ll(e, ['onMove', 'onKey']),
              o = Xe(null),
              a = nl(t),
              i = nl(r),
              s = Xe(null),
              l = Xe(!1),
              u = jt(
                function () {
                  var f = function (C) {
                      F0(C),
                        (qn(C) ? C.touches.length > 0 : C.buttons > 0) &&
                        o.current
                          ? a(D0(o.current, C, s.current))
                          : g(!1)
                    },
                    h = function () {
                      return g(!1)
                    }
                  function g(C) {
                    var b = l.current,
                      E = ol(o.current),
                      _ = C ? E.addEventListener : E.removeEventListener
                    _(b ? 'touchmove' : 'mousemove', f),
                      _(b ? 'touchend' : 'mouseup', h)
                  }
                  return [
                    function (C) {
                      var b = C.nativeEvent,
                        E = o.current
                      if (
                        E &&
                        (F0(b),
                        !(function (T, O) {
                          return O && !qn(T)
                        })(b, l.current) && E)
                      ) {
                        if (qn(b)) {
                          l.current = !0
                          var _ = b.changedTouches || []
                          _.length && (s.current = _[0].identifier)
                        }
                        E.focus(), a(D0(E, b, s.current)), g(!0)
                      }
                    },
                    function (C) {
                      var b = C.which || C.keyCode
                      b < 37 ||
                        b > 40 ||
                        (C.preventDefault(),
                        i({
                          left: b === 39 ? 0.05 : b === 37 ? -0.05 : 0,
                          top: b === 40 ? 0.05 : b === 38 ? -0.05 : 0,
                        }))
                    },
                    g,
                  ]
                },
                [i, a],
              ),
              c = u[0],
              d = u[1],
              y = u[2]
            return (
              He(
                function () {
                  return y
                },
                [y],
              ),
              v.createElement(
                'div',
                lr({}, n, {
                  onTouchStart: c,
                  onMouseDown: c,
                  className: 'react-colorful__interactive',
                  ref: o,
                  onKeyDown: d,
                  tabIndex: 0,
                  role: 'slider',
                }),
              )
            )
          })),
          (Mn = function (e) {
            return e.filter(Boolean).join(' ')
          }),
          (cl = function (e) {
            var t = e.color,
              r = e.left,
              n = e.top,
              o = n === void 0 ? 0.5 : n,
              a = Mn(['react-colorful__pointer', e.className])
            return v.createElement(
              'div',
              {
                className: a,
                style: { top: 100 * o + '%', left: 100 * r + '%' },
              },
              v.createElement('div', {
                className: 'react-colorful__pointer-fill',
                style: { backgroundColor: t },
              }),
            )
          }),
          (qe = function (e, t, r) {
            return (
              t === void 0 && (t = 0),
              r === void 0 && (r = Math.pow(10, t)),
              Math.round(r * e) / r
            )
          }),
          (Xj = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }),
          (Qj = function (e) {
            return $0(al(e))
          }),
          (al = function (e) {
            return (
              e[0] === '#' && (e = e.substring(1)),
              e.length < 6
                ? {
                    r: parseInt(e[0] + e[0], 16),
                    g: parseInt(e[1] + e[1], 16),
                    b: parseInt(e[2] + e[2], 16),
                    a:
                      e.length === 4
                        ? qe(parseInt(e[3] + e[3], 16) / 255, 2)
                        : 1,
                  }
                : {
                    r: parseInt(e.substring(0, 2), 16),
                    g: parseInt(e.substring(2, 4), 16),
                    b: parseInt(e.substring(4, 6), 16),
                    a:
                      e.length === 8
                        ? qe(parseInt(e.substring(6, 8), 16) / 255, 2)
                        : 1,
                  }
            )
          }),
          (Zj = function (e, t) {
            return t === void 0 && (t = 'deg'), Number(e) * (Xj[t] || 1)
          }),
          (eN = function (e) {
            var t =
              /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
                e,
              )
            return t
              ? tN({
                  h: Zj(t[1], t[2]),
                  s: Number(t[3]),
                  l: Number(t[4]),
                  a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
                })
              : { h: 0, s: 0, v: 0, a: 1 }
          }),
          (tN = function (e) {
            var t = e.s,
              r = e.l
            return {
              h: e.h,
              s:
                (t *= (r < 50 ? r : 100 - r) / 100) > 0
                  ? ((2 * t) / (r + t)) * 100
                  : 0,
              v: r + t,
              a: e.a,
            }
          }),
          (rN = function (e) {
            return oN(U0(e))
          }),
          (M0 = function (e) {
            var t = e.s,
              r = e.v,
              n = e.a,
              o = ((200 - t) * r) / 100
            return {
              h: qe(e.h),
              s: qe(
                o > 0 && o < 200
                  ? ((t * r) / 100 / (o <= 100 ? o : 200 - o)) * 100
                  : 0,
              ),
              l: qe(o / 2),
              a: qe(n, 2),
            }
          }),
          (il = function (e) {
            var t = M0(e)
            return 'hsl(' + t.h + ', ' + t.s + '%, ' + t.l + '%)'
          }),
          (ya = function (e) {
            var t = M0(e)
            return 'hsla(' + t.h + ', ' + t.s + '%, ' + t.l + '%, ' + t.a + ')'
          }),
          (U0 = function (e) {
            var t = e.h,
              r = e.s,
              n = e.v,
              o = e.a
            ;(t = (t / 360) * 6), (r /= 100), (n /= 100)
            var a = Math.floor(t),
              i = n * (1 - r),
              s = n * (1 - (t - a) * r),
              l = n * (1 - (1 - t + a) * r),
              u = a % 6
            return {
              r: qe(255 * [n, s, i, i, l, n][u]),
              g: qe(255 * [l, n, n, s, i, i][u]),
              b: qe(255 * [i, i, l, n, n, s][u]),
              a: qe(o, 2),
            }
          }),
          (nN = function (e) {
            var t =
              /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
                e,
              )
            return t
              ? $0({
                  r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                  g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                  b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                  a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
                })
              : { h: 0, s: 0, v: 0, a: 1 }
          }),
          (pa = function (e) {
            var t = e.toString(16)
            return t.length < 2 ? '0' + t : t
          }),
          (oN = function (e) {
            var t = e.r,
              r = e.g,
              n = e.b,
              o = e.a,
              a = o < 1 ? pa(qe(255 * o)) : ''
            return '#' + pa(t) + pa(r) + pa(n) + a
          }),
          ($0 = function (e) {
            var t = e.r,
              r = e.g,
              n = e.b,
              o = e.a,
              a = Math.max(t, r, n),
              i = a - Math.min(t, r, n),
              s = i
                ? a === t
                  ? (r - n) / i
                  : a === r
                    ? 2 + (n - t) / i
                    : 4 + (t - r) / i
                : 0
            return {
              h: qe(60 * (s < 0 ? s + 6 : s)),
              s: qe(a ? (i / a) * 100 : 0),
              v: qe((a / 255) * 100),
              a: o,
            }
          }),
          (z0 = v.memo(function (e) {
            var t = e.hue,
              r = e.onChange,
              n = Mn(['react-colorful__hue', e.className])
            return v.createElement(
              'div',
              { className: n },
              v.createElement(
                ul,
                {
                  onMove: function (o) {
                    r({ h: 360 * o.left })
                  },
                  onKey: function (o) {
                    r({ h: zr(t + 360 * o.left, 0, 360) })
                  },
                  'aria-label': 'Hue',
                  'aria-valuenow': qe(t),
                  'aria-valuemax': '360',
                  'aria-valuemin': '0',
                },
                v.createElement(cl, {
                  className: 'react-colorful__hue-pointer',
                  left: t / 360,
                  color: il({ h: t, s: 100, v: 100, a: 1 }),
                }),
              ),
            )
          })),
          (V0 = v.memo(function (e) {
            var t = e.hsva,
              r = e.onChange,
              n = { backgroundColor: il({ h: t.h, s: 100, v: 100, a: 1 }) }
            return v.createElement(
              'div',
              { className: 'react-colorful__saturation', style: n },
              v.createElement(
                ul,
                {
                  onMove: function (o) {
                    r({ s: 100 * o.left, v: 100 - 100 * o.top })
                  },
                  onKey: function (o) {
                    r({
                      s: zr(t.s + 100 * o.left, 0, 100),
                      v: zr(t.v - 100 * o.top, 0, 100),
                    })
                  },
                  'aria-label': 'Color',
                  'aria-valuetext':
                    'Saturation ' + qe(t.s) + '%, Brightness ' + qe(t.v) + '%',
                },
                v.createElement(cl, {
                  className: 'react-colorful__saturation-pointer',
                  top: 1 - t.v / 100,
                  left: t.s / 100,
                  color: il(t),
                }),
              ),
            )
          })),
          (H0 = function (e, t) {
            if (e === t) return !0
            for (var r in e) if (e[r] !== t[r]) return !1
            return !0
          }),
          (J0 = function (e, t) {
            return e.replace(/\s/g, '') === t.replace(/\s/g, '')
          }),
          (aN = function (e, t) {
            return e.toLowerCase() === t.toLowerCase() || H0(al(e), al(t))
          })
        ;(iN = typeof window < 'u' ? Zl : He),
          (sN = function () {
            return typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : void 0
          }),
          (j0 = new Map()),
          (W0 = function (e) {
            iN(function () {
              var t = e.current ? e.current.ownerDocument : document
              if (t !== void 0 && !j0.has(t)) {
                var r = t.createElement('style')
                ;(r.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`),
                  j0.set(t, r)
                var n = sN()
                n && r.setAttribute('nonce', n), t.head.appendChild(r)
              }
            }, [])
          }),
          (lN = function (e) {
            var t = e.className,
              r = e.colorModel,
              n = e.color,
              o = n === void 0 ? r.defaultColor : n,
              a = e.onChange,
              i = ll(e, ['className', 'colorModel', 'color', 'onChange']),
              s = Xe(null)
            W0(s)
            var l = G0(r, o, a),
              u = l[0],
              c = l[1],
              d = Mn(['react-colorful', t])
            return v.createElement(
              'div',
              lr({}, i, { ref: s, className: d }),
              v.createElement(V0, { hsva: u, onChange: c }),
              v.createElement(z0, {
                hue: u.h,
                onChange: c,
                className: 'react-colorful__last-control',
              }),
            )
          }),
          (uN = {
            defaultColor: '000',
            toHsva: Qj,
            fromHsva: function (e) {
              return rN({ h: e.h, s: e.s, v: e.v, a: 1 })
            },
            equal: aN,
          }),
          (cN = function (e) {
            return v.createElement(lN, lr({}, e, { colorModel: uN }))
          }),
          (pN = function (e) {
            var t = e.className,
              r = e.hsva,
              n = e.onChange,
              o = {
                backgroundImage:
                  'linear-gradient(90deg, ' +
                  ya(Object.assign({}, r, { a: 0 })) +
                  ', ' +
                  ya(Object.assign({}, r, { a: 1 })) +
                  ')',
              },
              a = Mn(['react-colorful__alpha', t]),
              i = qe(100 * r.a)
            return v.createElement(
              'div',
              { className: a },
              v.createElement('div', {
                className: 'react-colorful__alpha-gradient',
                style: o,
              }),
              v.createElement(
                ul,
                {
                  onMove: function (s) {
                    n({ a: s.left })
                  },
                  onKey: function (s) {
                    n({ a: zr(r.a + s.left) })
                  },
                  'aria-label': 'Alpha',
                  'aria-valuetext': i + '%',
                  'aria-valuenow': i,
                  'aria-valuemin': '0',
                  'aria-valuemax': '100',
                },
                v.createElement(cl, {
                  className: 'react-colorful__alpha-pointer',
                  left: r.a,
                  color: ya(r),
                }),
              ),
            )
          }),
          (K0 = function (e) {
            var t = e.className,
              r = e.colorModel,
              n = e.color,
              o = n === void 0 ? r.defaultColor : n,
              a = e.onChange,
              i = ll(e, ['className', 'colorModel', 'color', 'onChange']),
              s = Xe(null)
            W0(s)
            var l = G0(r, o, a),
              u = l[0],
              c = l[1],
              d = Mn(['react-colorful', t])
            return v.createElement(
              'div',
              lr({}, i, { ref: s, className: d }),
              v.createElement(V0, { hsva: u, onChange: c }),
              v.createElement(z0, { hue: u.h, onChange: c }),
              v.createElement(pN, {
                hsva: u,
                onChange: c,
                className: 'react-colorful__last-control',
              }),
            )
          }),
          (dN = {
            defaultColor: 'hsla(0, 0%, 0%, 1)',
            toHsva: eN,
            fromHsva: ya,
            equal: J0,
          }),
          (fN = function (e) {
            return v.createElement(K0, lr({}, e, { colorModel: dN }))
          }),
          (yN = {
            defaultColor: 'rgba(0, 0, 0, 1)',
            toHsva: nN,
            fromHsva: function (e) {
              var t = U0(e)
              return 'rgba(' + t.r + ', ' + t.g + ', ' + t.b + ', ' + t.a + ')'
            },
            equal: J0,
          }),
          (hN = function (e) {
            return v.createElement(K0, lr({}, e, { colorModel: yN }))
          }),
          (mN = W.div({
            position: 'relative',
            maxWidth: 250,
            '&[aria-readonly="true"]': { opacity: 0.5 },
          })),
          (gN = W(Bt)({
            position: 'absolute',
            zIndex: 1,
            top: 4,
            left: 4,
            '[aria-readonly=true] &': { cursor: 'not-allowed' },
          })),
          (bN = W.div({
            width: 200,
            margin: 5,
            '.react-colorful__saturation': { borderRadius: '4px 4px 0 0' },
            '.react-colorful__hue': {
              boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 5%)',
            },
            '.react-colorful__last-control': { borderRadius: '0 0 4px 4px' },
          })),
          (vN = W(Zt)(({ theme: e }) => ({
            fontFamily: e.typography.fonts.base,
          }))),
          (EN = W.div({
            display: 'grid',
            gridTemplateColumns: 'repeat(9, 16px)',
            gap: 6,
            padding: 3,
            marginTop: 5,
            width: 200,
          })),
          (xN = W.div(({ theme: e, active: t }) => ({
            width: 16,
            height: 16,
            boxShadow: t
              ? `${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`
              : `${e.appBorderColor} 0 0 0 1px inset`,
            borderRadius: e.appBorderRadius,
          }))),
          (wN = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`),
          (N0 = ({ value: e, style: t, ...r }) => {
            let n = `linear-gradient(${e}, ${e}), ${wN}, linear-gradient(#fff, #fff)`
            return v.createElement(xN, {
              ...r,
              style: { ...t, backgroundImage: n },
            })
          }),
          (SN = W(ut.Input)(({ theme: e, readOnly: t }) => ({
            width: '100%',
            paddingLeft: 30,
            paddingRight: 30,
            boxSizing: 'border-box',
            fontFamily: e.typography.fonts.base,
          }))),
          (AN = W(Lu)(({ theme: e }) => ({
            position: 'absolute',
            zIndex: 1,
            top: 6,
            right: 7,
            width: 20,
            height: 20,
            padding: 4,
            boxSizing: 'border-box',
            cursor: 'pointer',
            color: e.input.color,
          }))),
          (Y0 = ((e) => ((e.RGB = 'rgb'), (e.HSL = 'hsl'), (e.HEX = 'hex'), e))(
            Y0 || {},
          )),
          (da = Object.values(Y0)),
          (TN = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/),
          (CN =
            /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i),
          (_N =
            /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i),
          (sl = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i),
          (ON = /^\s*#?([0-9a-f]{3})\s*$/i),
          (IN = { hex: cN, rgb: hN, hsl: fN }),
          (fa = {
            hex: 'transparent',
            rgb: 'rgba(0, 0, 0, 0)',
            hsl: 'hsla(0, 0%, 0%, 0)',
          }),
          (B0 = (e) => {
            let t = e?.match(TN)
            if (!t) return [0, 0, 0, 1]
            let [, r, n, o, a = 1] = t
            return [r, n, o, a].map(Number)
          }),
          ($r = (e) => {
            if (!e) return
            let t = !0
            if (CN.test(e)) {
              let [i, s, l, u] = B0(e),
                [c, d, y] = it.default.rgb.hsl([i, s, l]) || [0, 0, 0]
              return {
                valid: t,
                value: e,
                keyword: it.default.rgb.keyword([i, s, l]),
                colorSpace: 'rgb',
                rgb: e,
                hsl: `hsla(${c}, ${d}%, ${y}%, ${u})`,
                hex: `#${it.default.rgb.hex([i, s, l]).toLowerCase()}`,
              }
            }
            if (_N.test(e)) {
              let [i, s, l, u] = B0(e),
                [c, d, y] = it.default.hsl.rgb([i, s, l]) || [0, 0, 0]
              return {
                valid: t,
                value: e,
                keyword: it.default.hsl.keyword([i, s, l]),
                colorSpace: 'hsl',
                rgb: `rgba(${c}, ${d}, ${y}, ${u})`,
                hsl: e,
                hex: `#${it.default.hsl.hex([i, s, l]).toLowerCase()}`,
              }
            }
            let r = e.replace('#', ''),
              n = it.default.keyword.rgb(r) || it.default.hex.rgb(r),
              o = it.default.rgb.hsl(n),
              a = e
            if (
              (/[^#a-f0-9]/i.test(e) ? (a = r) : sl.test(e) && (a = `#${r}`),
              a.startsWith('#'))
            )
              t = sl.test(a)
            else
              try {
                it.default.keyword.hex(a)
              } catch {
                t = !1
              }
            return {
              valid: t,
              value: a,
              keyword: it.default.rgb.keyword(n),
              colorSpace: 'hex',
              rgb: `rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,
              hsl: `hsla(${o[0]}, ${o[1]}%, ${o[2]}%, 1)`,
              hex: a,
            }
          }),
          (kN = (e, t, r) => {
            if (!e || !t?.valid) return fa[r]
            if (r !== 'hex') return t?.[r] || fa[r]
            if (!t.hex.startsWith('#'))
              try {
                return `#${it.default.keyword.hex(t.hex)}`
              } catch {
                return fa.hex
              }
            let n = t.hex.match(ON)
            if (!n) return sl.test(t.hex) ? t.hex : fa.hex
            let [o, a, i] = n[1].split('')
            return `#${o}${o}${a}${a}${i}${i}`
          }),
          (PN = (e, t) => {
            let [r, n] = me(e || ''),
              [o, a] = me(() => $r(r)),
              [i, s] = me(o?.colorSpace || 'hex')
            He(() => {
              let d = e || '',
                y = $r(d)
              n(d), a(y), s(y?.colorSpace || 'hex')
            }, [e])
            let l = jt(() => kN(r, o, i).toLowerCase(), [r, o, i]),
              u = Ve(
                (d) => {
                  let y = $r(d),
                    f = y?.value || d || ''
                  n(f),
                    f === '' && (a(void 0), t(void 0)),
                    y && (a(y), s(y.colorSpace), t(y.value))
                },
                [t],
              ),
              c = Ve(() => {
                let d = da.indexOf(i) + 1
                d >= da.length && (d = 0), s(da[d])
                let y = o?.[da[d]] || ''
                n(y), t(y)
              }, [o, i, t])
            return {
              value: r,
              realValue: l,
              updateValue: u,
              color: o,
              colorSpace: i,
              cycleColorSpace: c,
            }
          }),
          (ha = (e) => e.replace(/\s*/, '').toLowerCase()),
          (RN = (e, t, r) => {
            let [n, o] = me(t?.valid ? [t] : [])
            He(() => {
              t === void 0 && o([])
            }, [t])
            let a = jt(
                () =>
                  (e || [])
                    .map((s) =>
                      typeof s == 'string'
                        ? $r(s)
                        : s.title
                          ? { ...$r(s.color), keyword: s.title }
                          : $r(s.color),
                    )
                    .concat(n)
                    .filter(Boolean)
                    .slice(-27),
                [e, n],
              ),
              i = Ve(
                (s) => {
                  s?.valid &&
                    (a.some((l) => ha(l[r]) === ha(s[r])) ||
                      o((l) => l.concat(s)))
                },
                [r, a],
              )
            return { presets: a, addPreset: i }
          }),
          (X0 = ({
            name: e,
            value: t,
            onChange: r,
            onFocus: n,
            onBlur: o,
            presetColors: a,
            startOpen: i = !1,
            argType: s,
          }) => {
            let l = Ve((0, L0.default)(r, 200), [r]),
              {
                value: u,
                realValue: c,
                updateValue: d,
                color: y,
                colorSpace: f,
                cycleColorSpace: h,
              } = PN(t, l),
              { presets: g, addPreset: C } = RN(a, y, f),
              b = IN[f],
              E = !!s?.table?.readonly
            return v.createElement(
              mN,
              { 'aria-readonly': E },
              v.createElement(
                gN,
                {
                  startOpen: i,
                  trigger: E ? [null] : void 0,
                  closeOnOutsideClick: !0,
                  onVisibleChange: () => C(y),
                  tooltip: v.createElement(
                    bN,
                    null,
                    v.createElement(b, {
                      color: c === 'transparent' ? '#000000' : c,
                      onChange: d,
                      onFocus: n,
                      onBlur: o,
                    }),
                    g.length > 0 &&
                      v.createElement(
                        EN,
                        null,
                        g.map((_, T) =>
                          v.createElement(
                            Bt,
                            {
                              key: `${_.value}-${T}`,
                              hasChrome: !1,
                              tooltip: v.createElement(vN, {
                                note: _.keyword || _.value,
                              }),
                            },
                            v.createElement(N0, {
                              value: _[f],
                              active: y && ha(_[f]) === ha(y[f]),
                              onClick: () => d(_.value),
                            }),
                          ),
                        ),
                      ),
                  ),
                },
                v.createElement(N0, { value: c, style: { margin: 4 } }),
              ),
              v.createElement(SN, {
                id: tt(e),
                value: u,
                onChange: (_) => d(_.target.value),
                onFocus: (_) => _.target.select(),
                readOnly: E,
                placeholder: 'Choose color...',
              }),
              u ? v.createElement(AN, { onClick: h }) : null,
            )
          }),
          (DN = X0)
      })
    w()
    S()
    A()
    w()
    S()
    A()
    w()
    S()
    A()
    Pa()
    no()
    no()
    ao()
    w()
    S()
    A()
    w()
    S()
    A()
    var r8 = __STORYBOOK_CORE_EVENTS__,
      {
        ARGTYPES_INFO_REQUEST: tu,
        ARGTYPES_INFO_RESPONSE: Ja,
        CHANNEL_CREATED: n8,
        CHANNEL_WS_DISCONNECT: o8,
        CONFIG_ERROR: ru,
        CREATE_NEW_STORYFILE_REQUEST: a8,
        CREATE_NEW_STORYFILE_RESPONSE: i8,
        CURRENT_STORY_WAS_SET: Ga,
        DOCS_PREPARED: nu,
        DOCS_RENDERED: io,
        FILE_COMPONENT_SEARCH_REQUEST: s8,
        FILE_COMPONENT_SEARCH_RESPONSE: l8,
        FORCE_REMOUNT: ou,
        FORCE_RE_RENDER: so,
        GLOBALS_UPDATED: xr,
        NAVIGATE_URL: au,
        PLAY_FUNCTION_THREW_EXCEPTION: iu,
        PRELOAD_ENTRIES: su,
        PREVIEW_BUILDER_PROGRESS: u8,
        PREVIEW_KEYDOWN: lu,
        REGISTER_SUBSCRIPTION: c8,
        REQUEST_WHATS_NEW_DATA: p8,
        RESET_STORY_ARGS: lo,
        RESULT_WHATS_NEW_DATA: d8,
        SAVE_STORY_REQUEST: Wa,
        SAVE_STORY_RESPONSE: uo,
        SELECT_STORY: f8,
        SET_CONFIG: y8,
        SET_CURRENT_STORY: uu,
        SET_FILTER: h8,
        SET_GLOBALS: cu,
        SET_INDEX: m8,
        SET_STORIES: g8,
        SET_WHATS_NEW_CACHE: b8,
        SHARED_STATE_CHANGED: v8,
        SHARED_STATE_SET: E8,
        STORIES_COLLAPSE_ALL: x8,
        STORIES_EXPAND_ALL: w8,
        STORY_ARGS_UPDATED: pu,
        STORY_CHANGED: du,
        STORY_ERRORED: fu,
        STORY_INDEX_INVALIDATED: yu,
        STORY_MISSING: Ka,
        STORY_PREPARED: hu,
        STORY_RENDERED: cn,
        STORY_RENDER_PHASE_CHANGED: wr,
        STORY_SPECIFIED: mu,
        STORY_THREW_EXCEPTION: gu,
        STORY_UNCHANGED: bu,
        TELEMETRY_ERROR: S8,
        TOGGLE_WHATS_NEW_NOTIFICATIONS: A8,
        UNHANDLED_ERRORS_WHILE_PLAYING: vu,
        UPDATE_GLOBALS: co,
        UPDATE_QUERY_PARAMS: Eu,
        UPDATE_STORY_ARGS: po,
      } = __STORYBOOK_CORE_EVENTS__
    w()
    S()
    A()
    var F8 = __STORYBOOK_API__,
      {
        ActiveTabs: j8,
        Consumer: N8,
        ManagerContext: B8,
        Provider: L8,
        RequestResponseError: q8,
        addons: fo,
        combineParameters: M8,
        controlOrMetaKey: U8,
        controlOrMetaSymbol: $8,
        eventMatchesShortcut: z8,
        eventToShortcut: V8,
        experimental_requestResponse: Ya,
        isMacLike: H8,
        isShortcutTaken: J8,
        keyToSymbol: G8,
        merge: W8,
        mockChannel: K8,
        optionOrAltSymbol: Y8,
        shortcutMatchesShortcut: X8,
        shortcutToHumanString: Q8,
        types: xu,
        useAddonState: Z8,
        useArgTypes: Xa,
        useArgs: wu,
        useChannel: e9,
        useGlobalTypes: t9,
        useGlobals: Su,
        useParameter: Au,
        useSharedState: r9,
        useStoryPrepared: n9,
        useStorybookApi: o9,
        useStorybookState: Tu,
      } = __STORYBOOK_API__
    ti()
    w()
    S()
    A()
    var Iu = Object.prototype.hasOwnProperty
    function ku(e, t, r) {
      for (r of e.keys()) if (er(r, t)) return r
    }
    function er(e, t) {
      var r, n, o
      if (e === t) return !0
      if (e && t && (r = e.constructor) === t.constructor) {
        if (r === Date) return e.getTime() === t.getTime()
        if (r === RegExp) return e.toString() === t.toString()
        if (r === Array) {
          if ((n = e.length) === t.length) for (; n-- && er(e[n], t[n]); );
          return n === -1
        }
        if (r === Set) {
          if (e.size !== t.size) return !1
          for (n of e)
            if (
              ((o = n),
              (o && typeof o == 'object' && ((o = ku(t, o)), !o)) || !t.has(o))
            )
              return !1
          return !0
        }
        if (r === Map) {
          if (e.size !== t.size) return !1
          for (n of e)
            if (
              ((o = n[0]),
              (o && typeof o == 'object' && ((o = ku(t, o)), !o)) ||
                !er(n[1], t.get(o)))
            )
              return !1
          return !0
        }
        if (r === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t))
        else if (r === DataView) {
          if ((n = e.byteLength) === t.byteLength)
            for (; n-- && e.getInt8(n) === t.getInt8(n); );
          return n === -1
        }
        if (ArrayBuffer.isView(e)) {
          if ((n = e.byteLength) === t.byteLength)
            for (; n-- && e[n] === t[n]; );
          return n === -1
        }
        if (!r || typeof e == 'object') {
          n = 0
          for (r in e)
            if (
              (Iu.call(e, r) && ++n && !Iu.call(t, r)) ||
              !(r in t) ||
              !er(e[r], t[r])
            )
              return !1
          return Object.keys(t).length === n
        }
      }
      return e !== e && t !== t
    }
    w()
    S()
    A()
    var ct = (() => {
      let e
      return (
        typeof window < 'u'
          ? (e = window)
          : typeof globalThis < 'u'
            ? (e = globalThis)
            : typeof window < 'u'
              ? (e = window)
              : typeof self < 'u'
                ? (e = self)
                : (e = {}),
        e
      )
    })()
    ai()
    w()
    S()
    A()
    var J7 = __STORYBOOK_CLIENT_LOGGER__,
      {
        deprecate: G7,
        logger: mo,
        once: Vu,
        pretty: W7,
      } = __STORYBOOK_CLIENT_LOGGER__
    var kv = on(uy()),
      Pv = on(yh()),
      Rv = on(Fh())
    w()
    S()
    A()
    w()
    S()
    A()
    w()
    S()
    A()
    var Lte = __STORYBOOK_CHANNELS__,
      {
        Channel: jh,
        PostMessageTransport: qte,
        WebsocketTransport: Mte,
        createBrowserChannel: Ute,
      } = __STORYBOOK_CHANNELS__
    w()
    S()
    A()
    var Jte = __STORYBOOK_CLIENT_LOGGER__,
      {
        deprecate: At,
        logger: ge,
        once: Mt,
        pretty: Gte,
      } = __STORYBOOK_CLIENT_LOGGER__
    w()
    S()
    A()
    var xk = Object.defineProperty,
      Ce = (e, t) => xk(e, 'name', { value: t, configurable: !0 })
    function ke(e) {
      for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
      var n = Array.from(typeof e == 'string' ? [e] : e)
      n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, '')
      var o = n.reduce(function (s, l) {
        var u = l.match(/\n([\t ]+|(?!\s).)/g)
        return u
          ? s.concat(
              u.map(function (c) {
                var d, y
                return (y =
                  (d = c.match(/[\t ]/g)) === null || d === void 0
                    ? void 0
                    : d.length) !== null && y !== void 0
                  ? y
                  : 0
              }),
            )
          : s
      }, [])
      if (o.length) {
        var a = new RegExp(
          `
[	 ]{` +
            Math.min.apply(Math, o) +
            '}',
          'g',
        )
        n = n.map(function (s) {
          return s.replace(
            a,
            `
`,
          )
        })
      }
      n[0] = n[0].replace(/^\r?\n/, '')
      var i = n[0]
      return (
        t.forEach(function (s, l) {
          var u = i.match(/(?:^|\n)( *)$/),
            c = u ? u[1] : '',
            d = s
          typeof s == 'string' &&
            s.includes(`
`) &&
            (d = String(s)
              .split(
                `
`,
              )
              .map(function (y, f) {
                return f === 0 ? y : '' + c + y
              }).join(`
`)),
            (i += d + n[l + 1])
        }),
        i
      )
    }
    Ce(ke, 'dedent')
    function $i({ code: e, category: t }) {
      let r = String(e).padStart(4, '0')
      return `SB_${t}_${r}`
    }
    Ce($i, 'parseErrorCode')
    var Nh = class Bh extends Error {
      constructor(t) {
        super(Bh.getFullMessage(t)),
          (this.data = {}),
          (this.fromStorybook = !0),
          (this.category = t.category),
          (this.documentation = t.documentation ?? !1),
          (this.code = t.code)
      }
      get fullErrorCode() {
        return $i({ code: this.code, category: this.category })
      }
      get name() {
        let t = this.constructor.name
        return `${this.fullErrorCode} (${t})`
      }
      static getFullMessage({
        documentation: t,
        code: r,
        category: n,
        message: o,
      }) {
        let a
        return (
          t === !0
            ? (a = `https://storybook.js.org/error/${$i({ code: r, category: n })}`)
            : typeof t == 'string'
              ? (a = t)
              : Array.isArray(t) &&
                (a = `
${t.map((i) => `	- ${i}`).join(`
`)}`),
          `${o}${
            a != null
              ? `

More info: ${a}
`
              : ''
          }`
        )
      }
    }
    Ce(Nh, 'StorybookError')
    var Be = Nh,
      wk = ((e) => (
        (e.BLOCKS = 'BLOCKS'),
        (e.DOCS_TOOLS = 'DOCS-TOOLS'),
        (e.PREVIEW_CLIENT_LOGGER = 'PREVIEW_CLIENT-LOGGER'),
        (e.PREVIEW_CHANNELS = 'PREVIEW_CHANNELS'),
        (e.PREVIEW_CORE_EVENTS = 'PREVIEW_CORE-EVENTS'),
        (e.PREVIEW_INSTRUMENTER = 'PREVIEW_INSTRUMENTER'),
        (e.PREVIEW_API = 'PREVIEW_API'),
        (e.PREVIEW_REACT_DOM_SHIM = 'PREVIEW_REACT-DOM-SHIM'),
        (e.PREVIEW_ROUTER = 'PREVIEW_ROUTER'),
        (e.PREVIEW_THEMING = 'PREVIEW_THEMING'),
        (e.RENDERER_HTML = 'RENDERER_HTML'),
        (e.RENDERER_PREACT = 'RENDERER_PREACT'),
        (e.RENDERER_REACT = 'RENDERER_REACT'),
        (e.RENDERER_SERVER = 'RENDERER_SERVER'),
        (e.RENDERER_SVELTE = 'RENDERER_SVELTE'),
        (e.RENDERER_VUE = 'RENDERER_VUE'),
        (e.RENDERER_VUE3 = 'RENDERER_VUE3'),
        (e.RENDERER_WEB_COMPONENTS = 'RENDERER_WEB-COMPONENTS'),
        (e.FRAMEWORK_NEXTJS = 'FRAMEWORK_NEXTJS'),
        (e.ADDON_VITEST = 'ADDON_VITEST'),
        e
      ))(wk || {}),
      Lh = class extends Be {
        constructor(t) {
          super({
            category: 'PREVIEW_API',
            code: 1,
            message: ke`
        Couldn't find story matching id '${t.storyId}' after HMR.
        - Did you just rename a story?
        - Did you remove it from your CSF file?
        - Are you sure a story with the id '${t.storyId}' exists?
        - Please check the values in the stories field of your main.js config and see if they would match your CSF File.
        - Also check the browser console and terminal for potential error messages.`,
          }),
            (this.data = t)
        }
      }
    Ce(Lh, 'MissingStoryAfterHmrError')
    var qh = Lh,
      Sk = class extends Be {
        constructor(t) {
          super({
            category: 'PREVIEW_API',
            code: 2,
            documentation:
              'https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-implicit-actions-during-rendering-is-deprecated-for-example-in-the-play-function',
            message: ke`
        We detected that you use an implicit action arg while ${t.phase} of your story.  
        ${
          t.deprecated
            ? `
This is deprecated and won't work in Storybook 8 anymore.
`
            : ''
        }
        Please provide an explicit spy to your args like this:
          import { fn } from '@storybook/test';
          ... 
          args: {
           ${t.name}: fn()
          }`,
          }),
            (this.data = t)
        }
      }
    Ce(Sk, 'ImplicitActionsDuringRendering')
    var Mh = class extends Be {
      constructor() {
        super({
          category: 'PREVIEW_API',
          code: 3,
          message: ke`
        Cannot call \`storyStore.extract()\` without calling \`storyStore.cacheAllCsfFiles()\` first.

        You probably meant to call \`await preview.extract()\` which does the above for you.`,
        })
      }
    }
    Ce(Mh, 'CalledExtractOnStoreError')
    var Uh = Mh,
      $h = class extends Be {
        constructor() {
          super({
            category: 'PREVIEW_API',
            code: 4,
            message: ke`
        Expected your framework's preset to export a \`renderToCanvas\` field.

        Perhaps it needs to be upgraded for Storybook 7.0?`,
            documentation:
              'https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#mainjs-framework-field',
          })
        }
      }
    Ce($h, 'MissingRenderToCanvasError')
    var zh = $h,
      Vh = class extends Be {
        constructor(t) {
          super({
            category: 'PREVIEW_API',
            code: 5,
            message: ke`
        Called \`Preview.${t.methodName}()\` before initialization.
        
        The preview needs to load the story index before most methods can be called. If you want
        to call \`${t.methodName}\`, try \`await preview.initializationPromise;\` first.
        
        If you didn't call the above code, then likely it was called by an addon that needs to
        do the above.`,
          }),
            (this.data = t)
        }
      }
    Ce(Vh, 'CalledPreviewMethodBeforeInitializationError')
    var rt = Vh,
      Hh = class extends Be {
        constructor(t) {
          super({
            category: 'PREVIEW_API',
            code: 6,
            message: ke`
        Error fetching \`/index.json\`:
        
        ${t.text}

        If you are in development, this likely indicates a problem with your Storybook process,
        check the terminal for errors.

        If you are in a deployed Storybook, there may have been an issue deploying the full Storybook
        build.`,
          }),
            (this.data = t)
        }
      }
    Ce(Hh, 'StoryIndexFetchError')
    var Jh = Hh,
      Gh = class extends Be {
        constructor(t) {
          super({
            category: 'PREVIEW_API',
            code: 7,
            message: ke`
        Tried to render docs entry ${t.storyId} but it is a MDX file that has no CSF
        references, or autodocs for a CSF file that some doesn't refer to itself.
        
        This likely is an internal error in Storybook's indexing, or you've attached the
        \`attached-mdx\` tag to an MDX file that is not attached.`,
          }),
            (this.data = t)
        }
      }
    Ce(Gh, 'MdxFileWithNoCsfReferencesError')
    var Wh = Gh,
      Kh = class extends Be {
        constructor() {
          super({
            category: 'PREVIEW_API',
            code: 8,
            message: ke`
        Couldn't find any stories in your Storybook.

        - Please check your stories field of your main.js config: does it match correctly?
        - Also check the browser console and terminal for error messages.`,
          })
        }
      }
    Ce(Kh, 'EmptyIndexError')
    var Yh = Kh,
      Xh = class extends Be {
        constructor(t) {
          super({
            category: 'PREVIEW_API',
            code: 9,
            message: ke`
        Couldn't find story matching '${t.storySpecifier}'.

        - Are you sure a story with that id exists?
        - Please check your stories field of your main.js config.
        - Also check the browser console and terminal for error messages.`,
          }),
            (this.data = t)
        }
      }
    Ce(Xh, 'NoStoryMatchError')
    var Qh = Xh,
      Zh = class extends Be {
        constructor(t) {
          super({
            category: 'PREVIEW_API',
            code: 10,
            message: ke`
        Couldn't find story matching id '${t.storyId}' after importing a CSF file.

        The file was indexed as if the story was there, but then after importing the file in the browser
        we didn't find the story. Possible reasons:
        - You are using a custom story indexer that is misbehaving.
        - You have a custom file loader that is removing or renaming exports.

        Please check your browser console and terminal for errors that may explain the issue.`,
          }),
            (this.data = t)
        }
      }
    Ce(Zh, 'MissingStoryFromCsfFileError')
    var em = Zh,
      tm = class extends Be {
        constructor() {
          super({
            category: 'PREVIEW_API',
            code: 11,
            message: ke`
        Cannot access the Story Store until the index is ready.

        It is not recommended to use methods directly on the Story Store anyway, in Storybook 9 we will
        remove access to the store entirely`,
          })
        }
      }
    Ce(tm, 'StoryStoreAccessedBeforeInitializationError')
    var rm = tm,
      nm = class extends Be {
        constructor(t) {
          super({
            category: 'PREVIEW_API',
            code: 12,
            message: ke`
      Incorrect use of mount in the play function.
      
      To use mount in the play function, you must satisfy the following two requirements: 
      
      1. You *must* destructure the mount property from the \`context\` (the argument passed to your play function). 
         This makes sure that Storybook does not start rendering the story before the play function begins.
      
      2. Your Storybook framework or builder must be configured to transpile to ES2017 or newer. 
         This is because destructuring statements and async/await usages are otherwise transpiled away, 
         which prevents Storybook from recognizing your usage of \`mount\`.
      
      Note that Angular is not supported. As async/await is transpiled to support the zone.js polyfill. 
      
      More info: https://storybook.js.org/docs/writing-tests/interaction-testing#run-code-before-the-component-gets-rendered
      
      Received the following play function:
      ${t.playFunction}`,
          }),
            (this.data = t)
        }
      }
    Ce(nm, 'MountMustBeDestructuredError')
    var Bo = nm,
      om = class extends Be {
        constructor(t) {
          super({
            category: 'PREVIEW_API',
            code: 14,
            message: ke`
        No render function available for storyId '${t.id}'
      `,
          }),
            (this.data = t)
        }
      }
    Ce(om, 'NoRenderFunctionError')
    var am = om,
      im = class extends Be {
        constructor() {
          super({
            category: 'PREVIEW_API',
            code: 15,
            message: ke`
        No component is mounted in your story.
        
        This usually occurs when you destructure mount in the play function, but forget to call it.
        
        For example:

        async play({ mount, canvasElement }) {
          // 👈 mount should be called: await mount(); 
          const canvas = within(canvasElement);
          const button = await canvas.findByRole('button');
          await userEvent.click(button);
        };

        Make sure to either remove it or call mount in your play function.
      `,
          })
        }
      }
    Ce(im, 'NoStoryMountedError')
    var sm = im,
      Ak = class extends Be {
        constructor() {
          super({
            category: 'FRAMEWORK_NEXTJS',
            code: 1,
            documentation:
              'https://storybook.js.org/docs/get-started/nextjs#faq',
            message: ke`
      You are importing avif images, but you don't have sharp installed.

      You have to install sharp in order to use image optimization features in Next.js.
      `,
          })
        }
      }
    Ce(Ak, 'NextJsSharpError')
    var Tk = class extends Be {
      constructor(t) {
        super({
          category: 'FRAMEWORK_NEXTJS',
          code: 2,
          message: ke`
        Tried to access router mocks from "${t.importType}" but they were not created yet. You might be running code in an unsupported environment.
      `,
        }),
          (this.data = t)
      }
    }
    Ce(Tk, 'NextjsRouterMocksNotAvailable')
    var lm = class extends Be {
      constructor(t) {
        super({
          category: 'DOCS-TOOLS',
          code: 1,
          documentation:
            'https://github.com/storybookjs/storybook/issues/26606',
          message: ke`
        There was a failure when generating detailed ArgTypes in ${t.language} for:
        ${JSON.stringify(t.type, null, 2)} 
        
        Storybook will fall back to use a generic type description instead.

        This type is either not supported or it is a bug in the docgen generation in Storybook.
        If you think this is a bug, please detail it as much as possible in the Github issue.
      `,
        }),
          (this.data = t)
      }
    }
    Ce(lm, 'UnknownArgTypesError')
    var Lo = lm,
      Ck = class extends Be {
        constructor(t) {
          super({
            category: 'ADDON_VITEST',
            code: 1,
            message: ke`
        Encountered an unsupported value "${t.value}" when setting the viewport ${t.dimension} dimension.
        
        The Storybook plugin only supports values in the following units:
        - px, vh, vw, em, rem and %.
        
        You can either change the viewport for this story to use one of the supported units or skip the test by adding '!test' to the story's tags per https://storybook.js.org/docs/writing-stories/tags
      `,
          }),
            (this.data = t)
        }
      }
    Ce(Ck, 'UnsupportedViewportDimensionError')
    w()
    S()
    A()
    var _k = Object.create,
      dm = Object.defineProperty,
      Ok = Object.getOwnPropertyDescriptor,
      Ik = Object.getOwnPropertyNames,
      kk = Object.getPrototypeOf,
      Pk = Object.prototype.hasOwnProperty,
      Rk = (e, t) => () => (
        t || e((t = { exports: {} }).exports, t), t.exports
      ),
      Dk = (e, t, r, n) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let o of Ik(t))
            !Pk.call(e, o) &&
              o !== r &&
              dm(e, o, {
                get: () => t[o],
                enumerable: !(n = Ok(t, o)) || n.enumerable,
              })
        return e
      },
      Fk = (e, t, r) => (
        (r = e != null ? _k(kk(e)) : {}),
        Dk(
          t || !e || !e.__esModule
            ? dm(r, 'default', { value: e, enumerable: !0 })
            : r,
          e,
        )
      ),
      jk = Rk((e) => {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.isEqual = (function () {
            var t = Object.prototype.toString,
              r = Object.getPrototypeOf,
              n = Object.getOwnPropertySymbols
                ? function (o) {
                    return Object.keys(o).concat(
                      Object.getOwnPropertySymbols(o),
                    )
                  }
                : Object.keys
            return function (o, a) {
              return (function i(s, l, u) {
                var c,
                  d,
                  y,
                  f = t.call(s),
                  h = t.call(l)
                if (s === l) return !0
                if (s == null || l == null) return !1
                if (u.indexOf(s) > -1 && u.indexOf(l) > -1) return !0
                if (
                  (u.push(s, l),
                  f != h ||
                    ((c = n(s)),
                    (d = n(l)),
                    c.length != d.length ||
                      c.some(function (g) {
                        return !i(s[g], l[g], u)
                      })))
                )
                  return !1
                switch (f.slice(8, -1)) {
                  case 'Symbol':
                    return s.valueOf() == l.valueOf()
                  case 'Date':
                  case 'Number':
                    return +s == +l || (+s != +s && +l != +l)
                  case 'RegExp':
                  case 'Function':
                  case 'String':
                  case 'Boolean':
                    return '' + s == '' + l
                  case 'Set':
                  case 'Map':
                    ;(c = s.entries()), (d = l.entries())
                    do
                      if (!i((y = c.next()).value, d.next().value, u)) return !1
                    while (!y.done)
                    return !0
                  case 'ArrayBuffer':
                    ;(s = new Uint8Array(s)), (l = new Uint8Array(l))
                  case 'DataView':
                    ;(s = new Uint8Array(s.buffer)),
                      (l = new Uint8Array(l.buffer))
                  case 'Float32Array':
                  case 'Float64Array':
                  case 'Int8Array':
                  case 'Int16Array':
                  case 'Int32Array':
                  case 'Uint8Array':
                  case 'Uint16Array':
                  case 'Uint32Array':
                  case 'Uint8ClampedArray':
                  case 'Arguments':
                  case 'Array':
                    if (s.length != l.length) return !1
                    for (y = 0; y < s.length; y++)
                      if (
                        (y in s || y in l) &&
                        (y in s != y in l || !i(s[y], l[y], u))
                      )
                        return !1
                    return !0
                  case 'Object':
                    return i(r(s), r(l), u)
                  default:
                    return !1
                }
              })(o, a, [])
            }
          })())
      })
    function Nk(e) {
      return e
        .replace(/_/g, ' ')
        .replace(/-/g, ' ')
        .replace(/\./g, ' ')
        .replace(/([^\n])([A-Z])([a-z])/g, (t, r, n, o) => `${r} ${n}${o}`)
        .replace(/([a-z])([A-Z])/g, (t, r, n) => `${r} ${n}`)
        .replace(/([a-z])([0-9])/gi, (t, r, n) => `${r} ${n}`)
        .replace(/([0-9])([a-z])/gi, (t, r, n) => `${r} ${n}`)
        .replace(/(\s|^)(\w)/g, (t, r, n) => `${r}${n.toUpperCase()}`)
        .replace(/ +/g, ' ')
        .trim()
    }
    var um = Fk(jk()),
      fm = (e) => e.map((t) => typeof t < 'u').filter(Boolean).length,
      Bk = (e, t) => {
        let { exists: r, eq: n, neq: o, truthy: a } = e
        if (fm([r, n, o, a]) > 1)
          throw new Error(
            `Invalid conditional test ${JSON.stringify({ exists: r, eq: n, neq: o })}`,
          )
        if (typeof n < 'u') return (0, um.isEqual)(t, n)
        if (typeof o < 'u') return !(0, um.isEqual)(t, o)
        if (typeof r < 'u') {
          let i = typeof t < 'u'
          return r ? i : !i
        }
        return typeof a > 'u' || a ? !!t : !t
      },
      ym = (e, t, r) => {
        if (!e.if) return !0
        let { arg: n, global: o } = e.if
        if (fm([n, o]) !== 1)
          throw new Error(
            `Invalid conditional value ${JSON.stringify({ arg: n, global: o })}`,
          )
        let a = n ? t[n] : r[o]
        return Bk(e.if, a)
      },
      zi = (e) =>
        e
          .toLowerCase()
          .replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '-')
          .replace(/-+/g, '-')
          .replace(/^-+/, '')
          .replace(/-+$/, ''),
      cm = (e, t) => {
        let r = zi(e)
        if (r === '')
          throw new Error(
            `Invalid ${t} '${e}', must include alphanumeric characters`,
          )
        return r
      },
      hm = (e, t) => `${cm(e, 'kind')}${t ? `--${cm(t, 'name')}` : ''}`,
      mm = (e) => Nk(e)
    function pm(e, t) {
      return Array.isArray(t) ? t.includes(e) : e.match(t)
    }
    function qo(e, { includeStories: t, excludeStories: r }) {
      return e !== '__esModule' && (!t || pm(e, t)) && (!r || !pm(e, r))
    }
    var gm = (...e) => {
      let t = e.reduce(
        (r, n) => (n.startsWith('!') ? r.delete(n.slice(1)) : r.add(n), r),
        new Set(),
      )
      return Array.from(t)
    }
    var Lk = Object.create,
      cs = Object.defineProperty,
      qk = Object.getOwnPropertyDescriptor,
      Mk = Object.getOwnPropertyNames,
      Uk = Object.getPrototypeOf,
      $k = Object.prototype.hasOwnProperty,
      m = (e, t) => cs(e, 'name', { value: t, configurable: !0 }),
      Mo = ((e) =>
        typeof et < 'u'
          ? et
          : typeof Proxy < 'u'
            ? new Proxy(e, { get: (t, r) => (typeof et < 'u' ? et : t)[r] })
            : e)(function (e) {
        if (typeof et < 'u') return et.apply(this, arguments)
        throw Error('Dynamic require of "' + e + '" is not supported')
      }),
      L = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
      zk = (e, t, r, n) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let o of Mk(t))
            !$k.call(e, o) &&
              o !== r &&
              cs(e, o, {
                get: () => t[o],
                enumerable: !(n = qk(t, o)) || n.enumerable,
              })
        return e
      },
      Qe = (e, t, r) => (
        (r = e != null ? Lk(Uk(e)) : {}),
        zk(
          t || !e || !e.__esModule
            ? cs(r, 'default', { value: e, enumerable: !0 })
            : r,
          e,
        )
      ),
      Fm = L((e, t) => {
        var r =
          typeof window == 'object' &&
          window &&
          window.Object === Object &&
          window
        t.exports = r
      }),
      _t = L((e, t) => {
        var r = Fm(),
          n = typeof self == 'object' && self && self.Object === Object && self,
          o = r || n || Function('return this')()
        t.exports = o
      }),
      On = L((e, t) => {
        var r = _t(),
          n = r.Symbol
        t.exports = n
      }),
      Vk = L((e, t) => {
        var r = On(),
          n = Object.prototype,
          o = n.hasOwnProperty,
          a = n.toString,
          i = r ? r.toStringTag : void 0
        function s(l) {
          var u = o.call(l, i),
            c = l[i]
          try {
            l[i] = void 0
            var d = !0
          } catch {}
          var y = a.call(l)
          return d && (u ? (l[i] = c) : delete l[i]), y
        }
        m(s, 'getRawTag'), (t.exports = s)
      }),
      Hk = L((e, t) => {
        var r = Object.prototype,
          n = r.toString
        function o(a) {
          return n.call(a)
        }
        m(o, 'objectToString'), (t.exports = o)
      }),
      Lr = L((e, t) => {
        var r = On(),
          n = Vk(),
          o = Hk(),
          a = '[object Null]',
          i = '[object Undefined]',
          s = r ? r.toStringTag : void 0
        function l(u) {
          return u == null
            ? u === void 0
              ? i
              : a
            : s && s in Object(u)
              ? n(u)
              : o(u)
        }
        m(l, 'baseGetTag'), (t.exports = l)
      }),
      In = L((e, t) => {
        function r(n) {
          var o = typeof n
          return n != null && (o == 'object' || o == 'function')
        }
        m(r, 'isObject'), (t.exports = r)
      }),
      jm = L((e, t) => {
        var r = Lr(),
          n = In(),
          o = '[object AsyncFunction]',
          a = '[object Function]',
          i = '[object GeneratorFunction]',
          s = '[object Proxy]'
        function l(u) {
          if (!n(u)) return !1
          var c = r(u)
          return c == a || c == i || c == o || c == s
        }
        m(l, 'isFunction'), (t.exports = l)
      }),
      Jk = L((e, t) => {
        var r = _t(),
          n = r['__core-js_shared__']
        t.exports = n
      }),
      Gk = L((e, t) => {
        var r = Jk(),
          n = (function () {
            var a = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || '')
            return a ? 'Symbol(src)_1.' + a : ''
          })()
        function o(a) {
          return !!n && n in a
        }
        m(o, 'isMasked'), (t.exports = o)
      }),
      Nm = L((e, t) => {
        var r = Function.prototype,
          n = r.toString
        function o(a) {
          if (a != null) {
            try {
              return n.call(a)
            } catch {}
            try {
              return a + ''
            } catch {}
          }
          return ''
        }
        m(o, 'toSource'), (t.exports = o)
      }),
      Wk = L((e, t) => {
        var r = jm(),
          n = Gk(),
          o = In(),
          a = Nm(),
          i = /[\\^$.*+?()[\]{}|]/g,
          s = /^\[object .+?Constructor\]$/,
          l = Function.prototype,
          u = Object.prototype,
          c = l.toString,
          d = u.hasOwnProperty,
          y = RegExp(
            '^' +
              c
                .call(d)
                .replace(i, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?',
                ) +
              '$',
          )
        function f(h) {
          if (!o(h) || n(h)) return !1
          var g = r(h) ? y : s
          return g.test(a(h))
        }
        m(f, 'baseIsNative'), (t.exports = f)
      }),
      Kk = L((e, t) => {
        function r(n, o) {
          return n?.[o]
        }
        m(r, 'getValue'), (t.exports = r)
      }),
      ar = L((e, t) => {
        var r = Wk(),
          n = Kk()
        function o(a, i) {
          var s = n(a, i)
          return r(s) ? s : void 0
        }
        m(o, 'getNative'), (t.exports = o)
      }),
      Bm = L((e, t) => {
        var r = ar(),
          n = (function () {
            try {
              var o = r(Object, 'defineProperty')
              return o({}, '', {}), o
            } catch {}
          })()
        t.exports = n
      }),
      Lm = L((e, t) => {
        var r = Bm()
        function n(o, a, i) {
          a == '__proto__' && r
            ? r(o, a, {
                configurable: !0,
                enumerable: !0,
                value: i,
                writable: !0,
              })
            : (o[a] = i)
        }
        m(n, 'baseAssignValue'), (t.exports = n)
      }),
      Yk = L((e, t) => {
        function r(n) {
          return function (o, a, i) {
            for (var s = -1, l = Object(o), u = i(o), c = u.length; c--; ) {
              var d = u[n ? c : ++s]
              if (a(l[d], d, l) === !1) break
            }
            return o
          }
        }
        m(r, 'createBaseFor'), (t.exports = r)
      }),
      Xk = L((e, t) => {
        var r = Yk(),
          n = r()
        t.exports = n
      }),
      Qk = L((e, t) => {
        function r(n, o) {
          for (var a = -1, i = Array(n); ++a < n; ) i[a] = o(a)
          return i
        }
        m(r, 'baseTimes'), (t.exports = r)
      }),
      qr = L((e, t) => {
        function r(n) {
          return n != null && typeof n == 'object'
        }
        m(r, 'isObjectLike'), (t.exports = r)
      }),
      Zk = L((e, t) => {
        var r = Lr(),
          n = qr(),
          o = '[object Arguments]'
        function a(i) {
          return n(i) && r(i) == o
        }
        m(a, 'baseIsArguments'), (t.exports = a)
      }),
      ps = L((e, t) => {
        var r = Zk(),
          n = qr(),
          o = Object.prototype,
          a = o.hasOwnProperty,
          i = o.propertyIsEnumerable,
          s = r(
            (function () {
              return arguments
            })(),
          )
            ? r
            : function (l) {
                return n(l) && a.call(l, 'callee') && !i.call(l, 'callee')
              }
        t.exports = s
      }),
      Ot = L((e, t) => {
        var r = Array.isArray
        t.exports = r
      }),
      eP = L((e, t) => {
        function r() {
          return !1
        }
        m(r, 'stubFalse'), (t.exports = r)
      }),
      qm = L((e, t) => {
        var r = _t(),
          n = eP(),
          o = typeof e == 'object' && e && !e.nodeType && e,
          a = o && typeof t == 'object' && t && !t.nodeType && t,
          i = a && a.exports === o,
          s = i ? r.Buffer : void 0,
          l = s ? s.isBuffer : void 0,
          u = l || n
        t.exports = u
      }),
      ds = L((e, t) => {
        var r = 9007199254740991,
          n = /^(?:0|[1-9]\d*)$/
        function o(a, i) {
          var s = typeof a
          return (
            (i = i ?? r),
            !!i &&
              (s == 'number' || (s != 'symbol' && n.test(a))) &&
              a > -1 &&
              a % 1 == 0 &&
              a < i
          )
        }
        m(o, 'isIndex'), (t.exports = o)
      }),
      fs = L((e, t) => {
        var r = 9007199254740991
        function n(o) {
          return typeof o == 'number' && o > -1 && o % 1 == 0 && o <= r
        }
        m(n, 'isLength'), (t.exports = n)
      }),
      tP = L((e, t) => {
        var r = Lr(),
          n = fs(),
          o = qr(),
          a = '[object Arguments]',
          i = '[object Array]',
          s = '[object Boolean]',
          l = '[object Date]',
          u = '[object Error]',
          c = '[object Function]',
          d = '[object Map]',
          y = '[object Number]',
          f = '[object Object]',
          h = '[object RegExp]',
          g = '[object Set]',
          C = '[object String]',
          b = '[object WeakMap]',
          E = '[object ArrayBuffer]',
          _ = '[object DataView]',
          T = '[object Float32Array]',
          O = '[object Float64Array]',
          I = '[object Int8Array]',
          D = '[object Int16Array]',
          R = '[object Int32Array]',
          M = '[object Uint8Array]',
          z = '[object Uint8ClampedArray]',
          Y = '[object Uint16Array]',
          Z = '[object Uint32Array]',
          V = {}
        ;(V[T] = V[O] = V[I] = V[D] = V[R] = V[M] = V[z] = V[Y] = V[Z] = !0),
          (V[a] =
            V[i] =
            V[E] =
            V[s] =
            V[_] =
            V[l] =
            V[u] =
            V[c] =
            V[d] =
            V[y] =
            V[f] =
            V[h] =
            V[g] =
            V[C] =
            V[b] =
              !1)
        function P(q) {
          return o(q) && n(q.length) && !!V[r(q)]
        }
        m(P, 'baseIsTypedArray'), (t.exports = P)
      }),
      rP = L((e, t) => {
        function r(n) {
          return function (o) {
            return n(o)
          }
        }
        m(r, 'baseUnary'), (t.exports = r)
      }),
      nP = L((e, t) => {
        var r = Fm(),
          n = typeof e == 'object' && e && !e.nodeType && e,
          o = n && typeof t == 'object' && t && !t.nodeType && t,
          a = o && o.exports === n,
          i = a && r.process,
          s = (function () {
            try {
              var l = o && o.require && o.require('util').types
              return l || (i && i.binding && i.binding('util'))
            } catch {}
          })()
        t.exports = s
      }),
      Mm = L((e, t) => {
        var r = tP(),
          n = rP(),
          o = nP(),
          a = o && o.isTypedArray,
          i = a ? n(a) : r
        t.exports = i
      }),
      Um = L((e, t) => {
        var r = Qk(),
          n = ps(),
          o = Ot(),
          a = qm(),
          i = ds(),
          s = Mm(),
          l = Object.prototype,
          u = l.hasOwnProperty
        function c(d, y) {
          var f = o(d),
            h = !f && n(d),
            g = !f && !h && a(d),
            C = !f && !h && !g && s(d),
            b = f || h || g || C,
            E = b ? r(d.length, String) : [],
            _ = E.length
          for (var T in d)
            (y || u.call(d, T)) &&
              !(
                b &&
                (T == 'length' ||
                  (g && (T == 'offset' || T == 'parent')) ||
                  (C &&
                    (T == 'buffer' ||
                      T == 'byteLength' ||
                      T == 'byteOffset')) ||
                  i(T, _))
              ) &&
              E.push(T)
          return E
        }
        m(c, 'arrayLikeKeys'), (t.exports = c)
      }),
      $m = L((e, t) => {
        var r = Object.prototype
        function n(o) {
          var a = o && o.constructor,
            i = (typeof a == 'function' && a.prototype) || r
          return o === i
        }
        m(n, 'isPrototype'), (t.exports = n)
      }),
      zm = L((e, t) => {
        function r(n, o) {
          return function (a) {
            return n(o(a))
          }
        }
        m(r, 'overArg'), (t.exports = r)
      }),
      oP = L((e, t) => {
        var r = zm(),
          n = r(Object.keys, Object)
        t.exports = n
      }),
      aP = L((e, t) => {
        var r = $m(),
          n = oP(),
          o = Object.prototype,
          a = o.hasOwnProperty
        function i(s) {
          if (!r(s)) return n(s)
          var l = []
          for (var u in Object(s))
            a.call(s, u) && u != 'constructor' && l.push(u)
          return l
        }
        m(i, 'baseKeys'), (t.exports = i)
      }),
      Vm = L((e, t) => {
        var r = jm(),
          n = fs()
        function o(a) {
          return a != null && n(a.length) && !r(a)
        }
        m(o, 'isArrayLike'), (t.exports = o)
      }),
      ys = L((e, t) => {
        var r = Um(),
          n = aP(),
          o = Vm()
        function a(i) {
          return o(i) ? r(i) : n(i)
        }
        m(a, 'keys'), (t.exports = a)
      }),
      iP = L((e, t) => {
        var r = Xk(),
          n = ys()
        function o(a, i) {
          return a && r(a, i, n)
        }
        m(o, 'baseForOwn'), (t.exports = o)
      }),
      sP = L((e, t) => {
        function r() {
          ;(this.__data__ = []), (this.size = 0)
        }
        m(r, 'listCacheClear'), (t.exports = r)
      }),
      hs = L((e, t) => {
        function r(n, o) {
          return n === o || (n !== n && o !== o)
        }
        m(r, 'eq'), (t.exports = r)
      }),
      Wo = L((e, t) => {
        var r = hs()
        function n(o, a) {
          for (var i = o.length; i--; ) if (r(o[i][0], a)) return i
          return -1
        }
        m(n, 'assocIndexOf'), (t.exports = n)
      }),
      lP = L((e, t) => {
        var r = Wo(),
          n = Array.prototype,
          o = n.splice
        function a(i) {
          var s = this.__data__,
            l = r(s, i)
          if (l < 0) return !1
          var u = s.length - 1
          return l == u ? s.pop() : o.call(s, l, 1), --this.size, !0
        }
        m(a, 'listCacheDelete'), (t.exports = a)
      }),
      uP = L((e, t) => {
        var r = Wo()
        function n(o) {
          var a = this.__data__,
            i = r(a, o)
          return i < 0 ? void 0 : a[i][1]
        }
        m(n, 'listCacheGet'), (t.exports = n)
      }),
      cP = L((e, t) => {
        var r = Wo()
        function n(o) {
          return r(this.__data__, o) > -1
        }
        m(n, 'listCacheHas'), (t.exports = n)
      }),
      pP = L((e, t) => {
        var r = Wo()
        function n(o, a) {
          var i = this.__data__,
            s = r(i, o)
          return s < 0 ? (++this.size, i.push([o, a])) : (i[s][1] = a), this
        }
        m(n, 'listCacheSet'), (t.exports = n)
      }),
      Ko = L((e, t) => {
        var r = sP(),
          n = lP(),
          o = uP(),
          a = cP(),
          i = pP()
        function s(l) {
          var u = -1,
            c = l == null ? 0 : l.length
          for (this.clear(); ++u < c; ) {
            var d = l[u]
            this.set(d[0], d[1])
          }
        }
        m(s, 'ListCache'),
          (s.prototype.clear = r),
          (s.prototype.delete = n),
          (s.prototype.get = o),
          (s.prototype.has = a),
          (s.prototype.set = i),
          (t.exports = s)
      }),
      dP = L((e, t) => {
        var r = Ko()
        function n() {
          ;(this.__data__ = new r()), (this.size = 0)
        }
        m(n, 'stackClear'), (t.exports = n)
      }),
      fP = L((e, t) => {
        function r(n) {
          var o = this.__data__,
            a = o.delete(n)
          return (this.size = o.size), a
        }
        m(r, 'stackDelete'), (t.exports = r)
      }),
      yP = L((e, t) => {
        function r(n) {
          return this.__data__.get(n)
        }
        m(r, 'stackGet'), (t.exports = r)
      }),
      hP = L((e, t) => {
        function r(n) {
          return this.__data__.has(n)
        }
        m(r, 'stackHas'), (t.exports = r)
      }),
      ms = L((e, t) => {
        var r = ar(),
          n = _t(),
          o = r(n, 'Map')
        t.exports = o
      }),
      Yo = L((e, t) => {
        var r = ar(),
          n = r(Object, 'create')
        t.exports = n
      }),
      mP = L((e, t) => {
        var r = Yo()
        function n() {
          ;(this.__data__ = r ? r(null) : {}), (this.size = 0)
        }
        m(n, 'hashClear'), (t.exports = n)
      }),
      gP = L((e, t) => {
        function r(n) {
          var o = this.has(n) && delete this.__data__[n]
          return (this.size -= o ? 1 : 0), o
        }
        m(r, 'hashDelete'), (t.exports = r)
      }),
      bP = L((e, t) => {
        var r = Yo(),
          n = '__lodash_hash_undefined__',
          o = Object.prototype,
          a = o.hasOwnProperty
        function i(s) {
          var l = this.__data__
          if (r) {
            var u = l[s]
            return u === n ? void 0 : u
          }
          return a.call(l, s) ? l[s] : void 0
        }
        m(i, 'hashGet'), (t.exports = i)
      }),
      vP = L((e, t) => {
        var r = Yo(),
          n = Object.prototype,
          o = n.hasOwnProperty
        function a(i) {
          var s = this.__data__
          return r ? s[i] !== void 0 : o.call(s, i)
        }
        m(a, 'hashHas'), (t.exports = a)
      }),
      EP = L((e, t) => {
        var r = Yo(),
          n = '__lodash_hash_undefined__'
        function o(a, i) {
          var s = this.__data__
          return (
            (this.size += this.has(a) ? 0 : 1),
            (s[a] = r && i === void 0 ? n : i),
            this
          )
        }
        m(o, 'hashSet'), (t.exports = o)
      }),
      xP = L((e, t) => {
        var r = mP(),
          n = gP(),
          o = bP(),
          a = vP(),
          i = EP()
        function s(l) {
          var u = -1,
            c = l == null ? 0 : l.length
          for (this.clear(); ++u < c; ) {
            var d = l[u]
            this.set(d[0], d[1])
          }
        }
        m(s, 'Hash'),
          (s.prototype.clear = r),
          (s.prototype.delete = n),
          (s.prototype.get = o),
          (s.prototype.has = a),
          (s.prototype.set = i),
          (t.exports = s)
      }),
      wP = L((e, t) => {
        var r = xP(),
          n = Ko(),
          o = ms()
        function a() {
          ;(this.size = 0),
            (this.__data__ = {
              hash: new r(),
              map: new (o || n)(),
              string: new r(),
            })
        }
        m(a, 'mapCacheClear'), (t.exports = a)
      }),
      SP = L((e, t) => {
        function r(n) {
          var o = typeof n
          return o == 'string' ||
            o == 'number' ||
            o == 'symbol' ||
            o == 'boolean'
            ? n !== '__proto__'
            : n === null
        }
        m(r, 'isKeyable'), (t.exports = r)
      }),
      Xo = L((e, t) => {
        var r = SP()
        function n(o, a) {
          var i = o.__data__
          return r(a) ? i[typeof a == 'string' ? 'string' : 'hash'] : i.map
        }
        m(n, 'getMapData'), (t.exports = n)
      }),
      AP = L((e, t) => {
        var r = Xo()
        function n(o) {
          var a = r(this, o).delete(o)
          return (this.size -= a ? 1 : 0), a
        }
        m(n, 'mapCacheDelete'), (t.exports = n)
      }),
      TP = L((e, t) => {
        var r = Xo()
        function n(o) {
          return r(this, o).get(o)
        }
        m(n, 'mapCacheGet'), (t.exports = n)
      }),
      CP = L((e, t) => {
        var r = Xo()
        function n(o) {
          return r(this, o).has(o)
        }
        m(n, 'mapCacheHas'), (t.exports = n)
      }),
      _P = L((e, t) => {
        var r = Xo()
        function n(o, a) {
          var i = r(this, o),
            s = i.size
          return i.set(o, a), (this.size += i.size == s ? 0 : 1), this
        }
        m(n, 'mapCacheSet'), (t.exports = n)
      }),
      gs = L((e, t) => {
        var r = wP(),
          n = AP(),
          o = TP(),
          a = CP(),
          i = _P()
        function s(l) {
          var u = -1,
            c = l == null ? 0 : l.length
          for (this.clear(); ++u < c; ) {
            var d = l[u]
            this.set(d[0], d[1])
          }
        }
        m(s, 'MapCache'),
          (s.prototype.clear = r),
          (s.prototype.delete = n),
          (s.prototype.get = o),
          (s.prototype.has = a),
          (s.prototype.set = i),
          (t.exports = s)
      }),
      OP = L((e, t) => {
        var r = Ko(),
          n = ms(),
          o = gs(),
          a = 200
        function i(s, l) {
          var u = this.__data__
          if (u instanceof r) {
            var c = u.__data__
            if (!n || c.length < a - 1)
              return c.push([s, l]), (this.size = ++u.size), this
            u = this.__data__ = new o(c)
          }
          return u.set(s, l), (this.size = u.size), this
        }
        m(i, 'stackSet'), (t.exports = i)
      }),
      Hm = L((e, t) => {
        var r = Ko(),
          n = dP(),
          o = fP(),
          a = yP(),
          i = hP(),
          s = OP()
        function l(u) {
          var c = (this.__data__ = new r(u))
          this.size = c.size
        }
        m(l, 'Stack'),
          (l.prototype.clear = n),
          (l.prototype.delete = o),
          (l.prototype.get = a),
          (l.prototype.has = i),
          (l.prototype.set = s),
          (t.exports = l)
      }),
      IP = L((e, t) => {
        var r = '__lodash_hash_undefined__'
        function n(o) {
          return this.__data__.set(o, r), this
        }
        m(n, 'setCacheAdd'), (t.exports = n)
      }),
      kP = L((e, t) => {
        function r(n) {
          return this.__data__.has(n)
        }
        m(r, 'setCacheHas'), (t.exports = r)
      }),
      PP = L((e, t) => {
        var r = gs(),
          n = IP(),
          o = kP()
        function a(i) {
          var s = -1,
            l = i == null ? 0 : i.length
          for (this.__data__ = new r(); ++s < l; ) this.add(i[s])
        }
        m(a, 'SetCache'),
          (a.prototype.add = a.prototype.push = n),
          (a.prototype.has = o),
          (t.exports = a)
      }),
      RP = L((e, t) => {
        function r(n, o) {
          for (var a = -1, i = n == null ? 0 : n.length; ++a < i; )
            if (o(n[a], a, n)) return !0
          return !1
        }
        m(r, 'arraySome'), (t.exports = r)
      }),
      DP = L((e, t) => {
        function r(n, o) {
          return n.has(o)
        }
        m(r, 'cacheHas'), (t.exports = r)
      }),
      Jm = L((e, t) => {
        var r = PP(),
          n = RP(),
          o = DP(),
          a = 1,
          i = 2
        function s(l, u, c, d, y, f) {
          var h = c & a,
            g = l.length,
            C = u.length
          if (g != C && !(h && C > g)) return !1
          var b = f.get(l),
            E = f.get(u)
          if (b && E) return b == u && E == l
          var _ = -1,
            T = !0,
            O = c & i ? new r() : void 0
          for (f.set(l, u), f.set(u, l); ++_ < g; ) {
            var I = l[_],
              D = u[_]
            if (d) var R = h ? d(D, I, _, u, l, f) : d(I, D, _, l, u, f)
            if (R !== void 0) {
              if (R) continue
              T = !1
              break
            }
            if (O) {
              if (
                !n(u, function (M, z) {
                  if (!o(O, z) && (I === M || y(I, M, c, d, f)))
                    return O.push(z)
                })
              ) {
                T = !1
                break
              }
            } else if (!(I === D || y(I, D, c, d, f))) {
              T = !1
              break
            }
          }
          return f.delete(l), f.delete(u), T
        }
        m(s, 'equalArrays'), (t.exports = s)
      }),
      FP = L((e, t) => {
        var r = _t(),
          n = r.Uint8Array
        t.exports = n
      }),
      jP = L((e, t) => {
        function r(n) {
          var o = -1,
            a = Array(n.size)
          return (
            n.forEach(function (i, s) {
              a[++o] = [s, i]
            }),
            a
          )
        }
        m(r, 'mapToArray'), (t.exports = r)
      }),
      NP = L((e, t) => {
        function r(n) {
          var o = -1,
            a = Array(n.size)
          return (
            n.forEach(function (i) {
              a[++o] = i
            }),
            a
          )
        }
        m(r, 'setToArray'), (t.exports = r)
      }),
      BP = L((e, t) => {
        var r = On(),
          n = FP(),
          o = hs(),
          a = Jm(),
          i = jP(),
          s = NP(),
          l = 1,
          u = 2,
          c = '[object Boolean]',
          d = '[object Date]',
          y = '[object Error]',
          f = '[object Map]',
          h = '[object Number]',
          g = '[object RegExp]',
          C = '[object Set]',
          b = '[object String]',
          E = '[object Symbol]',
          _ = '[object ArrayBuffer]',
          T = '[object DataView]',
          O = r ? r.prototype : void 0,
          I = O ? O.valueOf : void 0
        function D(R, M, z, Y, Z, V, P) {
          switch (z) {
            case T:
              if (R.byteLength != M.byteLength || R.byteOffset != M.byteOffset)
                return !1
              ;(R = R.buffer), (M = M.buffer)
            case _:
              return !(R.byteLength != M.byteLength || !V(new n(R), new n(M)))
            case c:
            case d:
            case h:
              return o(+R, +M)
            case y:
              return R.name == M.name && R.message == M.message
            case g:
            case b:
              return R == M + ''
            case f:
              var q = i
            case C:
              var J = Y & l
              if ((q || (q = s), R.size != M.size && !J)) return !1
              var X = P.get(R)
              if (X) return X == M
              ;(Y |= u), P.set(R, M)
              var te = a(q(R), q(M), Y, Z, V, P)
              return P.delete(R), te
            case E:
              if (I) return I.call(R) == I.call(M)
          }
          return !1
        }
        m(D, 'equalByTag'), (t.exports = D)
      }),
      bs = L((e, t) => {
        function r(n, o) {
          for (var a = -1, i = o.length, s = n.length; ++a < i; )
            n[s + a] = o[a]
          return n
        }
        m(r, 'arrayPush'), (t.exports = r)
      }),
      Gm = L((e, t) => {
        var r = bs(),
          n = Ot()
        function o(a, i, s) {
          var l = i(a)
          return n(a) ? l : r(l, s(a))
        }
        m(o, 'baseGetAllKeys'), (t.exports = o)
      }),
      LP = L((e, t) => {
        function r(n, o) {
          for (
            var a = -1, i = n == null ? 0 : n.length, s = 0, l = [];
            ++a < i;

          ) {
            var u = n[a]
            o(u, a, n) && (l[s++] = u)
          }
          return l
        }
        m(r, 'arrayFilter'), (t.exports = r)
      }),
      Wm = L((e, t) => {
        function r() {
          return []
        }
        m(r, 'stubArray'), (t.exports = r)
      }),
      Km = L((e, t) => {
        var r = LP(),
          n = Wm(),
          o = Object.prototype,
          a = o.propertyIsEnumerable,
          i = Object.getOwnPropertySymbols,
          s = i
            ? function (l) {
                return l == null
                  ? []
                  : ((l = Object(l)),
                    r(i(l), function (u) {
                      return a.call(l, u)
                    }))
              }
            : n
        t.exports = s
      }),
      qP = L((e, t) => {
        var r = Gm(),
          n = Km(),
          o = ys()
        function a(i) {
          return r(i, o, n)
        }
        m(a, 'getAllKeys'), (t.exports = a)
      }),
      MP = L((e, t) => {
        var r = qP(),
          n = 1,
          o = Object.prototype,
          a = o.hasOwnProperty
        function i(s, l, u, c, d, y) {
          var f = u & n,
            h = r(s),
            g = h.length,
            C = r(l),
            b = C.length
          if (g != b && !f) return !1
          for (var E = g; E--; ) {
            var _ = h[E]
            if (!(f ? _ in l : a.call(l, _))) return !1
          }
          var T = y.get(s),
            O = y.get(l)
          if (T && O) return T == l && O == s
          var I = !0
          y.set(s, l), y.set(l, s)
          for (var D = f; ++E < g; ) {
            _ = h[E]
            var R = s[_],
              M = l[_]
            if (c) var z = f ? c(M, R, _, l, s, y) : c(R, M, _, s, l, y)
            if (!(z === void 0 ? R === M || d(R, M, u, c, y) : z)) {
              I = !1
              break
            }
            D || (D = _ == 'constructor')
          }
          if (I && !D) {
            var Y = s.constructor,
              Z = l.constructor
            Y != Z &&
              'constructor' in s &&
              'constructor' in l &&
              !(
                typeof Y == 'function' &&
                Y instanceof Y &&
                typeof Z == 'function' &&
                Z instanceof Z
              ) &&
              (I = !1)
          }
          return y.delete(s), y.delete(l), I
        }
        m(i, 'equalObjects'), (t.exports = i)
      }),
      UP = L((e, t) => {
        var r = ar(),
          n = _t(),
          o = r(n, 'DataView')
        t.exports = o
      }),
      $P = L((e, t) => {
        var r = ar(),
          n = _t(),
          o = r(n, 'Promise')
        t.exports = o
      }),
      zP = L((e, t) => {
        var r = ar(),
          n = _t(),
          o = r(n, 'Set')
        t.exports = o
      }),
      VP = L((e, t) => {
        var r = ar(),
          n = _t(),
          o = r(n, 'WeakMap')
        t.exports = o
      }),
      HP = L((e, t) => {
        var r = UP(),
          n = ms(),
          o = $P(),
          a = zP(),
          i = VP(),
          s = Lr(),
          l = Nm(),
          u = '[object Map]',
          c = '[object Object]',
          d = '[object Promise]',
          y = '[object Set]',
          f = '[object WeakMap]',
          h = '[object DataView]',
          g = l(r),
          C = l(n),
          b = l(o),
          E = l(a),
          _ = l(i),
          T = s
        ;((r && T(new r(new ArrayBuffer(1))) != h) ||
          (n && T(new n()) != u) ||
          (o && T(o.resolve()) != d) ||
          (a && T(new a()) != y) ||
          (i && T(new i()) != f)) &&
          (T = m(function (O) {
            var I = s(O),
              D = I == c ? O.constructor : void 0,
              R = D ? l(D) : ''
            if (R)
              switch (R) {
                case g:
                  return h
                case C:
                  return u
                case b:
                  return d
                case E:
                  return y
                case _:
                  return f
              }
            return I
          }, 'getTag')),
          (t.exports = T)
      }),
      JP = L((e, t) => {
        var r = Hm(),
          n = Jm(),
          o = BP(),
          a = MP(),
          i = HP(),
          s = Ot(),
          l = qm(),
          u = Mm(),
          c = 1,
          d = '[object Arguments]',
          y = '[object Array]',
          f = '[object Object]',
          h = Object.prototype,
          g = h.hasOwnProperty
        function C(b, E, _, T, O, I) {
          var D = s(b),
            R = s(E),
            M = D ? y : i(b),
            z = R ? y : i(E)
          ;(M = M == d ? f : M), (z = z == d ? f : z)
          var Y = M == f,
            Z = z == f,
            V = M == z
          if (V && l(b)) {
            if (!l(E)) return !1
            ;(D = !0), (Y = !1)
          }
          if (V && !Y)
            return (
              I || (I = new r()),
              D || u(b) ? n(b, E, _, T, O, I) : o(b, E, M, _, T, O, I)
            )
          if (!(_ & c)) {
            var P = Y && g.call(b, '__wrapped__'),
              q = Z && g.call(E, '__wrapped__')
            if (P || q) {
              var J = P ? b.value() : b,
                X = q ? E.value() : E
              return I || (I = new r()), O(J, X, _, T, I)
            }
          }
          return V ? (I || (I = new r()), a(b, E, _, T, O, I)) : !1
        }
        m(C, 'baseIsEqualDeep'), (t.exports = C)
      }),
      Ym = L((e, t) => {
        var r = JP(),
          n = qr()
        function o(a, i, s, l, u) {
          return a === i
            ? !0
            : a == null || i == null || (!n(a) && !n(i))
              ? a !== a && i !== i
              : r(a, i, s, l, o, u)
        }
        m(o, 'baseIsEqual'), (t.exports = o)
      }),
      GP = L((e, t) => {
        var r = Hm(),
          n = Ym(),
          o = 1,
          a = 2
        function i(s, l, u, c) {
          var d = u.length,
            y = d,
            f = !c
          if (s == null) return !y
          for (s = Object(s); d--; ) {
            var h = u[d]
            if (f && h[2] ? h[1] !== s[h[0]] : !(h[0] in s)) return !1
          }
          for (; ++d < y; ) {
            h = u[d]
            var g = h[0],
              C = s[g],
              b = h[1]
            if (f && h[2]) {
              if (C === void 0 && !(g in s)) return !1
            } else {
              var E = new r()
              if (c) var _ = c(C, b, g, s, l, E)
              if (!(_ === void 0 ? n(b, C, o | a, c, E) : _)) return !1
            }
          }
          return !0
        }
        m(i, 'baseIsMatch'), (t.exports = i)
      }),
      Xm = L((e, t) => {
        var r = In()
        function n(o) {
          return o === o && !r(o)
        }
        m(n, 'isStrictComparable'), (t.exports = n)
      }),
      WP = L((e, t) => {
        var r = Xm(),
          n = ys()
        function o(a) {
          for (var i = n(a), s = i.length; s--; ) {
            var l = i[s],
              u = a[l]
            i[s] = [l, u, r(u)]
          }
          return i
        }
        m(o, 'getMatchData'), (t.exports = o)
      }),
      Qm = L((e, t) => {
        function r(n, o) {
          return function (a) {
            return a == null
              ? !1
              : a[n] === o && (o !== void 0 || n in Object(a))
          }
        }
        m(r, 'matchesStrictComparable'), (t.exports = r)
      }),
      KP = L((e, t) => {
        var r = GP(),
          n = WP(),
          o = Qm()
        function a(i) {
          var s = n(i)
          return s.length == 1 && s[0][2]
            ? o(s[0][0], s[0][1])
            : function (l) {
                return l === i || r(l, i, s)
              }
        }
        m(a, 'baseMatches'), (t.exports = a)
      }),
      vs = L((e, t) => {
        var r = Lr(),
          n = qr(),
          o = '[object Symbol]'
        function a(i) {
          return typeof i == 'symbol' || (n(i) && r(i) == o)
        }
        m(a, 'isSymbol'), (t.exports = a)
      }),
      Es = L((e, t) => {
        var r = Ot(),
          n = vs(),
          o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          a = /^\w*$/
        function i(s, l) {
          if (r(s)) return !1
          var u = typeof s
          return u == 'number' ||
            u == 'symbol' ||
            u == 'boolean' ||
            s == null ||
            n(s)
            ? !0
            : a.test(s) || !o.test(s) || (l != null && s in Object(l))
        }
        m(i, 'isKey'), (t.exports = i)
      }),
      YP = L((e, t) => {
        var r = gs(),
          n = 'Expected a function'
        function o(a, i) {
          if (typeof a != 'function' || (i != null && typeof i != 'function'))
            throw new TypeError(n)
          var s = m(function () {
            var l = arguments,
              u = i ? i.apply(this, l) : l[0],
              c = s.cache
            if (c.has(u)) return c.get(u)
            var d = a.apply(this, l)
            return (s.cache = c.set(u, d) || c), d
          }, 'memoized')
          return (s.cache = new (o.Cache || r)()), s
        }
        m(o, 'memoize'), (o.Cache = r), (t.exports = o)
      }),
      XP = L((e, t) => {
        var r = YP(),
          n = 500
        function o(a) {
          var i = r(a, function (l) {
              return s.size === n && s.clear(), l
            }),
            s = i.cache
          return i
        }
        m(o, 'memoizeCapped'), (t.exports = o)
      }),
      QP = L((e, t) => {
        var r = XP(),
          n =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          o = /\\(\\)?/g,
          a = r(function (i) {
            var s = []
            return (
              i.charCodeAt(0) === 46 && s.push(''),
              i.replace(n, function (l, u, c, d) {
                s.push(c ? d.replace(o, '$1') : u || l)
              }),
              s
            )
          })
        t.exports = a
      }),
      Zm = L((e, t) => {
        function r(n, o) {
          for (
            var a = -1, i = n == null ? 0 : n.length, s = Array(i);
            ++a < i;

          )
            s[a] = o(n[a], a, n)
          return s
        }
        m(r, 'arrayMap'), (t.exports = r)
      }),
      ZP = L((e, t) => {
        var r = On(),
          n = Zm(),
          o = Ot(),
          a = vs(),
          i = 1 / 0,
          s = r ? r.prototype : void 0,
          l = s ? s.toString : void 0
        function u(c) {
          if (typeof c == 'string') return c
          if (o(c)) return n(c, u) + ''
          if (a(c)) return l ? l.call(c) : ''
          var d = c + ''
          return d == '0' && 1 / c == -i ? '-0' : d
        }
        m(u, 'baseToString'), (t.exports = u)
      }),
      eR = L((e, t) => {
        var r = ZP()
        function n(o) {
          return o == null ? '' : r(o)
        }
        m(n, 'toString'), (t.exports = n)
      }),
      Qo = L((e, t) => {
        var r = Ot(),
          n = Es(),
          o = QP(),
          a = eR()
        function i(s, l) {
          return r(s) ? s : n(s, l) ? [s] : o(a(s))
        }
        m(i, 'castPath'), (t.exports = i)
      }),
      kn = L((e, t) => {
        var r = vs(),
          n = 1 / 0
        function o(a) {
          if (typeof a == 'string' || r(a)) return a
          var i = a + ''
          return i == '0' && 1 / a == -n ? '-0' : i
        }
        m(o, 'toKey'), (t.exports = o)
      }),
      xs = L((e, t) => {
        var r = Qo(),
          n = kn()
        function o(a, i) {
          i = r(i, a)
          for (var s = 0, l = i.length; a != null && s < l; ) a = a[n(i[s++])]
          return s && s == l ? a : void 0
        }
        m(o, 'baseGet'), (t.exports = o)
      }),
      tR = L((e, t) => {
        var r = xs()
        function n(o, a, i) {
          var s = o == null ? void 0 : r(o, a)
          return s === void 0 ? i : s
        }
        m(n, 'get'), (t.exports = n)
      }),
      rR = L((e, t) => {
        function r(n, o) {
          return n != null && o in Object(n)
        }
        m(r, 'baseHasIn'), (t.exports = r)
      }),
      nR = L((e, t) => {
        var r = Qo(),
          n = ps(),
          o = Ot(),
          a = ds(),
          i = fs(),
          s = kn()
        function l(u, c, d) {
          c = r(c, u)
          for (var y = -1, f = c.length, h = !1; ++y < f; ) {
            var g = s(c[y])
            if (!(h = u != null && d(u, g))) break
            u = u[g]
          }
          return h || ++y != f
            ? h
            : ((f = u == null ? 0 : u.length),
              !!f && i(f) && a(g, f) && (o(u) || n(u)))
        }
        m(l, 'hasPath'), (t.exports = l)
      }),
      eg = L((e, t) => {
        var r = rR(),
          n = nR()
        function o(a, i) {
          return a != null && n(a, i, r)
        }
        m(o, 'hasIn'), (t.exports = o)
      }),
      oR = L((e, t) => {
        var r = Ym(),
          n = tR(),
          o = eg(),
          a = Es(),
          i = Xm(),
          s = Qm(),
          l = kn(),
          u = 1,
          c = 2
        function d(y, f) {
          return a(y) && i(f)
            ? s(l(y), f)
            : function (h) {
                var g = n(h, y)
                return g === void 0 && g === f ? o(h, y) : r(f, g, u | c)
              }
        }
        m(d, 'baseMatchesProperty'), (t.exports = d)
      }),
      tg = L((e, t) => {
        function r(n) {
          return n
        }
        m(r, 'identity'), (t.exports = r)
      }),
      aR = L((e, t) => {
        function r(n) {
          return function (o) {
            return o?.[n]
          }
        }
        m(r, 'baseProperty'), (t.exports = r)
      }),
      iR = L((e, t) => {
        var r = xs()
        function n(o) {
          return function (a) {
            return r(a, o)
          }
        }
        m(n, 'basePropertyDeep'), (t.exports = n)
      }),
      sR = L((e, t) => {
        var r = aR(),
          n = iR(),
          o = Es(),
          a = kn()
        function i(s) {
          return o(s) ? r(a(s)) : n(s)
        }
        m(i, 'property'), (t.exports = i)
      }),
      rg = L((e, t) => {
        var r = KP(),
          n = oR(),
          o = tg(),
          a = Ot(),
          i = sR()
        function s(l) {
          return typeof l == 'function'
            ? l
            : l == null
              ? o
              : typeof l == 'object'
                ? a(l)
                  ? n(l[0], l[1])
                  : r(l)
                : i(l)
        }
        m(s, 'baseIteratee'), (t.exports = s)
      }),
      Zo = L((e, t) => {
        var r = Lm(),
          n = iP(),
          o = rg()
        function a(i, s) {
          var l = {}
          return (
            (s = o(s, 3)),
            n(i, function (u, c, d) {
              r(l, c, s(u, c, d))
            }),
            l
          )
        }
        m(a, 'mapValues'), (t.exports = a)
      }),
      lR = L((e, t) => {
        var r = Lm(),
          n = hs(),
          o = Object.prototype,
          a = o.hasOwnProperty
        function i(s, l, u) {
          var c = s[l]
          ;(!(a.call(s, l) && n(c, u)) || (u === void 0 && !(l in s))) &&
            r(s, l, u)
        }
        m(i, 'assignValue'), (t.exports = i)
      }),
      uR = L((e, t) => {
        var r = lR(),
          n = Qo(),
          o = ds(),
          a = In(),
          i = kn()
        function s(l, u, c, d) {
          if (!a(l)) return l
          u = n(u, l)
          for (
            var y = -1, f = u.length, h = f - 1, g = l;
            g != null && ++y < f;

          ) {
            var C = i(u[y]),
              b = c
            if (C === '__proto__' || C === 'constructor' || C === 'prototype')
              return l
            if (y != h) {
              var E = g[C]
              ;(b = d ? d(E, C, g) : void 0),
                b === void 0 && (b = a(E) ? E : o(u[y + 1]) ? [] : {})
            }
            r(g, C, b), (g = g[C])
          }
          return l
        }
        m(s, 'baseSet'), (t.exports = s)
      }),
      ng = L((e, t) => {
        var r = xs(),
          n = uR(),
          o = Qo()
        function a(i, s, l) {
          for (var u = -1, c = s.length, d = {}; ++u < c; ) {
            var y = s[u],
              f = r(i, y)
            l(f, y) && n(d, o(y, i), f)
          }
          return d
        }
        m(a, 'basePickBy'), (t.exports = a)
      }),
      cR = L((e, t) => {
        var r = ng(),
          n = eg()
        function o(a, i) {
          return r(a, i, function (s, l) {
            return n(a, l)
          })
        }
        m(o, 'basePick'), (t.exports = o)
      }),
      pR = L((e, t) => {
        var r = On(),
          n = ps(),
          o = Ot(),
          a = r ? r.isConcatSpreadable : void 0
        function i(s) {
          return o(s) || n(s) || !!(a && s && s[a])
        }
        m(i, 'isFlattenable'), (t.exports = i)
      }),
      dR = L((e, t) => {
        var r = bs(),
          n = pR()
        function o(a, i, s, l, u) {
          var c = -1,
            d = a.length
          for (s || (s = n), u || (u = []); ++c < d; ) {
            var y = a[c]
            i > 0 && s(y)
              ? i > 1
                ? o(y, i - 1, s, l, u)
                : r(u, y)
              : l || (u[u.length] = y)
          }
          return u
        }
        m(o, 'baseFlatten'), (t.exports = o)
      }),
      fR = L((e, t) => {
        var r = dR()
        function n(o) {
          var a = o == null ? 0 : o.length
          return a ? r(o, 1) : []
        }
        m(n, 'flatten'), (t.exports = n)
      }),
      yR = L((e, t) => {
        function r(n, o, a) {
          switch (a.length) {
            case 0:
              return n.call(o)
            case 1:
              return n.call(o, a[0])
            case 2:
              return n.call(o, a[0], a[1])
            case 3:
              return n.call(o, a[0], a[1], a[2])
          }
          return n.apply(o, a)
        }
        m(r, 'apply'), (t.exports = r)
      }),
      hR = L((e, t) => {
        var r = yR(),
          n = Math.max
        function o(a, i, s) {
          return (
            (i = n(i === void 0 ? a.length - 1 : i, 0)),
            function () {
              for (
                var l = arguments, u = -1, c = n(l.length - i, 0), d = Array(c);
                ++u < c;

              )
                d[u] = l[i + u]
              u = -1
              for (var y = Array(i + 1); ++u < i; ) y[u] = l[u]
              return (y[i] = s(d)), r(a, this, y)
            }
          )
        }
        m(o, 'overRest'), (t.exports = o)
      }),
      mR = L((e, t) => {
        function r(n) {
          return function () {
            return n
          }
        }
        m(r, 'constant'), (t.exports = r)
      }),
      gR = L((e, t) => {
        var r = mR(),
          n = Bm(),
          o = tg(),
          a = n
            ? function (i, s) {
                return n(i, 'toString', {
                  configurable: !0,
                  enumerable: !1,
                  value: r(s),
                  writable: !0,
                })
              }
            : o
        t.exports = a
      }),
      bR = L((e, t) => {
        var r = 800,
          n = 16,
          o = Date.now
        function a(i) {
          var s = 0,
            l = 0
          return function () {
            var u = o(),
              c = n - (u - l)
            if (((l = u), c > 0)) {
              if (++s >= r) return arguments[0]
            } else s = 0
            return i.apply(void 0, arguments)
          }
        }
        m(a, 'shortOut'), (t.exports = a)
      }),
      vR = L((e, t) => {
        var r = gR(),
          n = bR(),
          o = n(r)
        t.exports = o
      }),
      ER = L((e, t) => {
        var r = fR(),
          n = hR(),
          o = vR()
        function a(i) {
          return o(n(i, void 0, r), i + '')
        }
        m(a, 'flatRest'), (t.exports = a)
      }),
      xR = L((e, t) => {
        var r = cR(),
          n = ER(),
          o = n(function (a, i) {
            return a == null ? {} : r(a, i)
          })
        t.exports = o
      }),
      og = L((e, t) => {
        ;(function (r) {
          if (typeof e == 'object' && typeof t < 'u') t.exports = r()
          else if (typeof define == 'function' && define.amd) define([], r)
          else {
            var n
            typeof window < 'u' || typeof window < 'u'
              ? (n = window)
              : typeof self < 'u'
                ? (n = self)
                : (n = this),
              (n.memoizerific = r())
          }
        })(function () {
          var r, n, o
          return m(function a(i, s, l) {
            function u(y, f) {
              if (!s[y]) {
                if (!i[y]) {
                  var h = typeof Mo == 'function' && Mo
                  if (!f && h) return h(y, !0)
                  if (c) return c(y, !0)
                  var g = new Error("Cannot find module '" + y + "'")
                  throw ((g.code = 'MODULE_NOT_FOUND'), g)
                }
                var C = (s[y] = { exports: {} })
                i[y][0].call(
                  C.exports,
                  function (b) {
                    var E = i[y][1][b]
                    return u(E || b)
                  },
                  C,
                  C.exports,
                  a,
                  i,
                  s,
                  l,
                )
              }
              return s[y].exports
            }
            m(u, 's')
            for (
              var c = typeof Mo == 'function' && Mo, d = 0;
              d < l.length;
              d++
            )
              u(l[d])
            return u
          }, 'e')(
            {
              1: [
                function (a, i, s) {
                  i.exports = function (l) {
                    if (typeof Map != 'function' || l) {
                      var u = a('./similar')
                      return new u()
                    } else return new Map()
                  }
                },
                { './similar': 2 },
              ],
              2: [
                function (a, i, s) {
                  function l() {
                    return (
                      (this.list = []),
                      (this.lastItem = void 0),
                      (this.size = 0),
                      this
                    )
                  }
                  m(l, 'Similar'),
                    (l.prototype.get = function (u) {
                      var c
                      if (this.lastItem && this.isEqual(this.lastItem.key, u))
                        return this.lastItem.val
                      if (((c = this.indexOf(u)), c >= 0))
                        return (this.lastItem = this.list[c]), this.list[c].val
                    }),
                    (l.prototype.set = function (u, c) {
                      var d
                      return this.lastItem && this.isEqual(this.lastItem.key, u)
                        ? ((this.lastItem.val = c), this)
                        : ((d = this.indexOf(u)),
                          d >= 0
                            ? ((this.lastItem = this.list[d]),
                              (this.list[d].val = c),
                              this)
                            : ((this.lastItem = { key: u, val: c }),
                              this.list.push(this.lastItem),
                              this.size++,
                              this))
                    }),
                    (l.prototype.delete = function (u) {
                      var c
                      if (
                        (this.lastItem &&
                          this.isEqual(this.lastItem.key, u) &&
                          (this.lastItem = void 0),
                        (c = this.indexOf(u)),
                        c >= 0)
                      )
                        return this.size--, this.list.splice(c, 1)[0]
                    }),
                    (l.prototype.has = function (u) {
                      var c
                      return this.lastItem && this.isEqual(this.lastItem.key, u)
                        ? !0
                        : ((c = this.indexOf(u)),
                          c >= 0 ? ((this.lastItem = this.list[c]), !0) : !1)
                    }),
                    (l.prototype.forEach = function (u, c) {
                      var d
                      for (d = 0; d < this.size; d++)
                        u.call(
                          c || this,
                          this.list[d].val,
                          this.list[d].key,
                          this,
                        )
                    }),
                    (l.prototype.indexOf = function (u) {
                      var c
                      for (c = 0; c < this.size; c++)
                        if (this.isEqual(this.list[c].key, u)) return c
                      return -1
                    }),
                    (l.prototype.isEqual = function (u, c) {
                      return u === c || (u !== u && c !== c)
                    }),
                    (i.exports = l)
                },
                {},
              ],
              3: [
                function (a, i, s) {
                  var l = a('map-or-similar')
                  i.exports = function (y) {
                    var f = new l(!1),
                      h = []
                    return function (g) {
                      var C = m(function () {
                        var b = f,
                          E,
                          _,
                          T = arguments.length - 1,
                          O = Array(T + 1),
                          I = !0,
                          D
                        if (
                          (C.numArgs || C.numArgs === 0) &&
                          C.numArgs !== T + 1
                        )
                          throw new Error(
                            'Memoizerific functions should always be called with the same number of arguments',
                          )
                        for (D = 0; D < T; D++) {
                          if (
                            ((O[D] = { cacheItem: b, arg: arguments[D] }),
                            b.has(arguments[D]))
                          ) {
                            b = b.get(arguments[D])
                            continue
                          }
                          ;(I = !1),
                            (E = new l(!1)),
                            b.set(arguments[D], E),
                            (b = E)
                        }
                        return (
                          I &&
                            (b.has(arguments[T])
                              ? (_ = b.get(arguments[T]))
                              : (I = !1)),
                          I ||
                            ((_ = g.apply(null, arguments)),
                            b.set(arguments[T], _)),
                          y > 0 &&
                            ((O[T] = { cacheItem: b, arg: arguments[T] }),
                            I ? u(h, O) : h.push(O),
                            h.length > y && c(h.shift())),
                          (C.wasMemoized = I),
                          (C.numArgs = T + 1),
                          _
                        )
                      }, 'memoizerific')
                      return (
                        (C.limit = y),
                        (C.wasMemoized = !1),
                        (C.cache = f),
                        (C.lru = h),
                        C
                      )
                    }
                  }
                  function u(y, f) {
                    var h = y.length,
                      g = f.length,
                      C,
                      b,
                      E
                    for (b = 0; b < h; b++) {
                      for (C = !0, E = 0; E < g; E++)
                        if (!d(y[b][E].arg, f[E].arg)) {
                          C = !1
                          break
                        }
                      if (C) break
                    }
                    y.push(y.splice(b, 1)[0])
                  }
                  m(u, 'moveToMostRecentLru')
                  function c(y) {
                    var f = y.length,
                      h = y[f - 1],
                      g,
                      C
                    for (
                      h.cacheItem.delete(h.arg), C = f - 2;
                      C >= 0 &&
                      ((h = y[C]), (g = h.cacheItem.get(h.arg)), !g || !g.size);
                      C--
                    )
                      h.cacheItem.delete(h.arg)
                  }
                  m(c, 'removeCachedResult')
                  function d(y, f) {
                    return y === f || (y !== y && f !== f)
                  }
                  m(d, 'isEqual')
                },
                { 'map-or-similar': 1 },
              ],
            },
            {},
            [3],
          )(3)
        })
      }),
      ag = L((e, t) => {
        var r = zm(),
          n = r(Object.getPrototypeOf, Object)
        t.exports = n
      }),
      ws = L((e, t) => {
        var r = Lr(),
          n = ag(),
          o = qr(),
          a = '[object Object]',
          i = Function.prototype,
          s = Object.prototype,
          l = i.toString,
          u = s.hasOwnProperty,
          c = l.call(Object)
        function d(y) {
          if (!o(y) || r(y) != a) return !1
          var f = n(y)
          if (f === null) return !0
          var h = u.call(f, 'constructor') && f.constructor
          return typeof h == 'function' && h instanceof h && l.call(h) == c
        }
        m(d, 'isPlainObject'), (t.exports = d)
      }),
      wR = L((e, t) => {
        var r = bs(),
          n = ag(),
          o = Km(),
          a = Wm(),
          i = Object.getOwnPropertySymbols,
          s = i
            ? function (l) {
                for (var u = []; l; ) r(u, o(l)), (l = n(l))
                return u
              }
            : a
        t.exports = s
      }),
      SR = L((e, t) => {
        function r(n) {
          var o = []
          if (n != null) for (var a in Object(n)) o.push(a)
          return o
        }
        m(r, 'nativeKeysIn'), (t.exports = r)
      }),
      AR = L((e, t) => {
        var r = In(),
          n = $m(),
          o = SR(),
          a = Object.prototype,
          i = a.hasOwnProperty
        function s(l) {
          if (!r(l)) return o(l)
          var u = n(l),
            c = []
          for (var d in l)
            (d == 'constructor' && (u || !i.call(l, d))) || c.push(d)
          return c
        }
        m(s, 'baseKeysIn'), (t.exports = s)
      }),
      TR = L((e, t) => {
        var r = Um(),
          n = AR(),
          o = Vm()
        function a(i) {
          return o(i) ? r(i, !0) : n(i)
        }
        m(a, 'keysIn'), (t.exports = a)
      }),
      CR = L((e, t) => {
        var r = Gm(),
          n = wR(),
          o = TR()
        function a(i) {
          return r(i, o, n)
        }
        m(a, 'getAllKeysIn'), (t.exports = a)
      }),
      _R = L((e, t) => {
        var r = Zm(),
          n = rg(),
          o = ng(),
          a = CR()
        function i(s, l) {
          if (s == null) return {}
          var u = r(a(s), function (c) {
            return [c]
          })
          return (
            (l = n(l)),
            o(s, u, function (c, d) {
              return l(c, d[0])
            })
          )
        }
        m(i, 'pickBy'), (t.exports = i)
      }),
      OR = L((e, t) => {
        'use strict'
        t.exports = Error
      }),
      IR = L((e, t) => {
        'use strict'
        t.exports = EvalError
      }),
      kR = L((e, t) => {
        'use strict'
        t.exports = RangeError
      }),
      PR = L((e, t) => {
        'use strict'
        t.exports = ReferenceError
      }),
      ig = L((e, t) => {
        'use strict'
        t.exports = SyntaxError
      }),
      Pn = L((e, t) => {
        'use strict'
        t.exports = TypeError
      }),
      RR = L((e, t) => {
        'use strict'
        t.exports = URIError
      }),
      DR = L((e, t) => {
        'use strict'
        t.exports = m(function () {
          if (
            typeof Symbol != 'function' ||
            typeof Object.getOwnPropertySymbols != 'function'
          )
            return !1
          if (typeof Symbol.iterator == 'symbol') return !0
          var r = {},
            n = Symbol('test'),
            o = Object(n)
          if (
            typeof n == 'string' ||
            Object.prototype.toString.call(n) !== '[object Symbol]' ||
            Object.prototype.toString.call(o) !== '[object Symbol]'
          )
            return !1
          var a = 42
          r[n] = a
          for (n in r) return !1
          if (
            (typeof Object.keys == 'function' && Object.keys(r).length !== 0) ||
            (typeof Object.getOwnPropertyNames == 'function' &&
              Object.getOwnPropertyNames(r).length !== 0)
          )
            return !1
          var i = Object.getOwnPropertySymbols(r)
          if (
            i.length !== 1 ||
            i[0] !== n ||
            !Object.prototype.propertyIsEnumerable.call(r, n)
          )
            return !1
          if (typeof Object.getOwnPropertyDescriptor == 'function') {
            var s = Object.getOwnPropertyDescriptor(r, n)
            if (s.value !== a || s.enumerable !== !0) return !1
          }
          return !0
        }, 'hasSymbols')
      }),
      FR = L((e, t) => {
        'use strict'
        var r = typeof Symbol < 'u' && Symbol,
          n = DR()
        t.exports = m(function () {
          return typeof r != 'function' ||
            typeof Symbol != 'function' ||
            typeof r('foo') != 'symbol' ||
            typeof Symbol('bar') != 'symbol'
            ? !1
            : n()
        }, 'hasNativeSymbols')
      }),
      jR = L((e, t) => {
        'use strict'
        var r = { __proto__: null, foo: {} },
          n = Object
        t.exports = m(function () {
          return { __proto__: r }.foo === r.foo && !(r instanceof n)
        }, 'hasProto')
      }),
      NR = L((e, t) => {
        'use strict'
        var r = 'Function.prototype.bind called on incompatible ',
          n = Object.prototype.toString,
          o = Math.max,
          a = '[object Function]',
          i = m(function (u, c) {
            for (var d = [], y = 0; y < u.length; y += 1) d[y] = u[y]
            for (var f = 0; f < c.length; f += 1) d[f + u.length] = c[f]
            return d
          }, 'concatty'),
          s = m(function (u, c) {
            for (var d = [], y = c || 0, f = 0; y < u.length; y += 1, f += 1)
              d[f] = u[y]
            return d
          }, 'slicy'),
          l = m(function (u, c) {
            for (var d = '', y = 0; y < u.length; y += 1)
              (d += u[y]), y + 1 < u.length && (d += c)
            return d
          }, 'joiny')
        t.exports = m(function (u) {
          var c = this
          if (typeof c != 'function' || n.apply(c) !== a)
            throw new TypeError(r + c)
          for (
            var d = s(arguments, 1),
              y,
              f = m(function () {
                if (this instanceof y) {
                  var E = c.apply(this, i(d, arguments))
                  return Object(E) === E ? E : this
                }
                return c.apply(u, i(d, arguments))
              }, 'binder'),
              h = o(0, c.length - d.length),
              g = [],
              C = 0;
            C < h;
            C++
          )
            g[C] = '$' + C
          if (
            ((y = Function(
              'binder',
              'return function (' +
                l(g, ',') +
                '){ return binder.apply(this,arguments); }',
            )(f)),
            c.prototype)
          ) {
            var b = m(function () {}, 'Empty')
            ;(b.prototype = c.prototype),
              (y.prototype = new b()),
              (b.prototype = null)
          }
          return y
        }, 'bind')
      }),
      Ss = L((e, t) => {
        'use strict'
        var r = NR()
        t.exports = Function.prototype.bind || r
      }),
      BR = L((e, t) => {
        'use strict'
        var r = Function.prototype.call,
          n = Object.prototype.hasOwnProperty,
          o = Ss()
        t.exports = o.call(r, n)
      }),
      Mr = L((e, t) => {
        'use strict'
        var r,
          n = OR(),
          o = IR(),
          a = kR(),
          i = PR(),
          s = ig(),
          l = Pn(),
          u = RR(),
          c = Function,
          d = m(function (re) {
            try {
              return c('"use strict"; return (' + re + ').constructor;')()
            } catch {}
          }, 'getEvalledConstructor'),
          y = Object.getOwnPropertyDescriptor
        if (y)
          try {
            y({}, '')
          } catch {
            y = null
          }
        var f = m(function () {
            throw new l()
          }, 'throwTypeError'),
          h = y
            ? (function () {
                try {
                  return arguments.callee, f
                } catch {
                  try {
                    return y(arguments, 'callee').get
                  } catch {
                    return f
                  }
                }
              })()
            : f,
          g = FR()(),
          C = jR()(),
          b =
            Object.getPrototypeOf ||
            (C
              ? function (re) {
                  return re.__proto__
                }
              : null),
          E = {},
          _ = typeof Uint8Array > 'u' || !b ? r : b(Uint8Array),
          T = {
            __proto__: null,
            '%AggregateError%':
              typeof AggregateError > 'u' ? r : AggregateError,
            '%Array%': Array,
            '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? r : ArrayBuffer,
            '%ArrayIteratorPrototype%': g && b ? b([][Symbol.iterator]()) : r,
            '%AsyncFromSyncIteratorPrototype%': r,
            '%AsyncFunction%': E,
            '%AsyncGenerator%': E,
            '%AsyncGeneratorFunction%': E,
            '%AsyncIteratorPrototype%': E,
            '%Atomics%': typeof Atomics > 'u' ? r : Atomics,
            '%BigInt%': typeof BigInt > 'u' ? r : BigInt,
            '%BigInt64Array%': typeof BigInt64Array > 'u' ? r : BigInt64Array,
            '%BigUint64Array%':
              typeof BigUint64Array > 'u' ? r : BigUint64Array,
            '%Boolean%': Boolean,
            '%DataView%': typeof DataView > 'u' ? r : DataView,
            '%Date%': Date,
            '%decodeURI%': decodeURI,
            '%decodeURIComponent%': decodeURIComponent,
            '%encodeURI%': encodeURI,
            '%encodeURIComponent%': encodeURIComponent,
            '%Error%': n,
            '%eval%': eval,
            '%EvalError%': o,
            '%Float32Array%': typeof Float32Array > 'u' ? r : Float32Array,
            '%Float64Array%': typeof Float64Array > 'u' ? r : Float64Array,
            '%FinalizationRegistry%':
              typeof FinalizationRegistry > 'u' ? r : FinalizationRegistry,
            '%Function%': c,
            '%GeneratorFunction%': E,
            '%Int8Array%': typeof Int8Array > 'u' ? r : Int8Array,
            '%Int16Array%': typeof Int16Array > 'u' ? r : Int16Array,
            '%Int32Array%': typeof Int32Array > 'u' ? r : Int32Array,
            '%isFinite%': isFinite,
            '%isNaN%': isNaN,
            '%IteratorPrototype%': g && b ? b(b([][Symbol.iterator]())) : r,
            '%JSON%': typeof JSON == 'object' ? JSON : r,
            '%Map%': typeof Map > 'u' ? r : Map,
            '%MapIteratorPrototype%':
              typeof Map > 'u' || !g || !b
                ? r
                : b(new Map()[Symbol.iterator]()),
            '%Math%': Math,
            '%Number%': Number,
            '%Object%': Object,
            '%parseFloat%': parseFloat,
            '%parseInt%': parseInt,
            '%Promise%': typeof Promise > 'u' ? r : Promise,
            '%Proxy%': typeof Proxy > 'u' ? r : Proxy,
            '%RangeError%': a,
            '%ReferenceError%': i,
            '%Reflect%': typeof Reflect > 'u' ? r : Reflect,
            '%RegExp%': RegExp,
            '%Set%': typeof Set > 'u' ? r : Set,
            '%SetIteratorPrototype%':
              typeof Set > 'u' || !g || !b
                ? r
                : b(new Set()[Symbol.iterator]()),
            '%SharedArrayBuffer%':
              typeof SharedArrayBuffer > 'u' ? r : SharedArrayBuffer,
            '%String%': String,
            '%StringIteratorPrototype%': g && b ? b(''[Symbol.iterator]()) : r,
            '%Symbol%': g ? Symbol : r,
            '%SyntaxError%': s,
            '%ThrowTypeError%': h,
            '%TypedArray%': _,
            '%TypeError%': l,
            '%Uint8Array%': typeof Uint8Array > 'u' ? r : Uint8Array,
            '%Uint8ClampedArray%':
              typeof Uint8ClampedArray > 'u' ? r : Uint8ClampedArray,
            '%Uint16Array%': typeof Uint16Array > 'u' ? r : Uint16Array,
            '%Uint32Array%': typeof Uint32Array > 'u' ? r : Uint32Array,
            '%URIError%': u,
            '%WeakMap%': typeof WeakMap > 'u' ? r : WeakMap,
            '%WeakRef%': typeof WeakRef > 'u' ? r : WeakRef,
            '%WeakSet%': typeof WeakSet > 'u' ? r : WeakSet,
          }
        if (b)
          try {
            null.error
          } catch (re) {
            ;(O = b(b(re))), (T['%Error.prototype%'] = O)
          }
        var O,
          I = m(function re(ee) {
            var oe
            if (ee === '%AsyncFunction%') oe = d('async function () {}')
            else if (ee === '%GeneratorFunction%') oe = d('function* () {}')
            else if (ee === '%AsyncGeneratorFunction%')
              oe = d('async function* () {}')
            else if (ee === '%AsyncGenerator%') {
              var ie = re('%AsyncGeneratorFunction%')
              ie && (oe = ie.prototype)
            } else if (ee === '%AsyncIteratorPrototype%') {
              var ce = re('%AsyncGenerator%')
              ce && b && (oe = b(ce.prototype))
            }
            return (T[ee] = oe), oe
          }, 'doEval'),
          D = {
            __proto__: null,
            '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
            '%ArrayPrototype%': ['Array', 'prototype'],
            '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
            '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
            '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
            '%ArrayProto_values%': ['Array', 'prototype', 'values'],
            '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
            '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
            '%AsyncGeneratorPrototype%': [
              'AsyncGeneratorFunction',
              'prototype',
              'prototype',
            ],
            '%BooleanPrototype%': ['Boolean', 'prototype'],
            '%DataViewPrototype%': ['DataView', 'prototype'],
            '%DatePrototype%': ['Date', 'prototype'],
            '%ErrorPrototype%': ['Error', 'prototype'],
            '%EvalErrorPrototype%': ['EvalError', 'prototype'],
            '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
            '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
            '%FunctionPrototype%': ['Function', 'prototype'],
            '%Generator%': ['GeneratorFunction', 'prototype'],
            '%GeneratorPrototype%': [
              'GeneratorFunction',
              'prototype',
              'prototype',
            ],
            '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
            '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
            '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
            '%JSONParse%': ['JSON', 'parse'],
            '%JSONStringify%': ['JSON', 'stringify'],
            '%MapPrototype%': ['Map', 'prototype'],
            '%NumberPrototype%': ['Number', 'prototype'],
            '%ObjectPrototype%': ['Object', 'prototype'],
            '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
            '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
            '%PromisePrototype%': ['Promise', 'prototype'],
            '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
            '%Promise_all%': ['Promise', 'all'],
            '%Promise_reject%': ['Promise', 'reject'],
            '%Promise_resolve%': ['Promise', 'resolve'],
            '%RangeErrorPrototype%': ['RangeError', 'prototype'],
            '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
            '%RegExpPrototype%': ['RegExp', 'prototype'],
            '%SetPrototype%': ['Set', 'prototype'],
            '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
            '%StringPrototype%': ['String', 'prototype'],
            '%SymbolPrototype%': ['Symbol', 'prototype'],
            '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
            '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
            '%TypeErrorPrototype%': ['TypeError', 'prototype'],
            '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
            '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
            '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
            '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
            '%URIErrorPrototype%': ['URIError', 'prototype'],
            '%WeakMapPrototype%': ['WeakMap', 'prototype'],
            '%WeakSetPrototype%': ['WeakSet', 'prototype'],
          },
          R = Ss(),
          M = BR(),
          z = R.call(Function.call, Array.prototype.concat),
          Y = R.call(Function.apply, Array.prototype.splice),
          Z = R.call(Function.call, String.prototype.replace),
          V = R.call(Function.call, String.prototype.slice),
          P = R.call(Function.call, RegExp.prototype.exec),
          q =
            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
          J = /\\(\\)?/g,
          X = m(function (re) {
            var ee = V(re, 0, 1),
              oe = V(re, -1)
            if (ee === '%' && oe !== '%')
              throw new s('invalid intrinsic syntax, expected closing `%`')
            if (oe === '%' && ee !== '%')
              throw new s('invalid intrinsic syntax, expected opening `%`')
            var ie = []
            return (
              Z(re, q, function (ce, be, pe, ye) {
                ie[ie.length] = pe ? Z(ye, J, '$1') : be || ce
              }),
              ie
            )
          }, 'stringToPath'),
          te = m(function (re, ee) {
            var oe = re,
              ie
            if (
              (M(D, oe) && ((ie = D[oe]), (oe = '%' + ie[0] + '%')), M(T, oe))
            ) {
              var ce = T[oe]
              if ((ce === E && (ce = I(oe)), typeof ce > 'u' && !ee))
                throw new l(
                  'intrinsic ' +
                    re +
                    ' exists, but is not available. Please file an issue!',
                )
              return { alias: ie, name: oe, value: ce }
            }
            throw new s('intrinsic ' + re + ' does not exist!')
          }, 'getBaseIntrinsic')
        t.exports = m(function (re, ee) {
          if (typeof re != 'string' || re.length === 0)
            throw new l('intrinsic name must be a non-empty string')
          if (arguments.length > 1 && typeof ee != 'boolean')
            throw new l('"allowMissing" argument must be a boolean')
          if (P(/^%?[^%]*%?$/, re) === null)
            throw new s(
              '`%` may not be present anywhere but at the beginning and end of the intrinsic name',
            )
          var oe = X(re),
            ie = oe.length > 0 ? oe[0] : '',
            ce = te('%' + ie + '%', ee),
            be = ce.name,
            pe = ce.value,
            ye = !1,
            _e = ce.alias
          _e && ((ie = _e[0]), Y(oe, z([0, 1], _e)))
          for (var Me = 1, Oe = !0; Me < oe.length; Me += 1) {
            var he = oe[Me],
              Ue = V(he, 0, 1),
              Te = V(he, -1)
            if (
              (Ue === '"' ||
                Ue === "'" ||
                Ue === '`' ||
                Te === '"' ||
                Te === "'" ||
                Te === '`') &&
              Ue !== Te
            )
              throw new s(
                'property names with quotes must have matching quotes',
              )
            if (
              ((he === 'constructor' || !Oe) && (ye = !0),
              (ie += '.' + he),
              (be = '%' + ie + '%'),
              M(T, be))
            )
              pe = T[be]
            else if (pe != null) {
              if (!(he in pe)) {
                if (!ee)
                  throw new l(
                    'base intrinsic for ' +
                      re +
                      ' exists, but the property is not available.',
                  )
                return
              }
              if (y && Me + 1 >= oe.length) {
                var $e = y(pe, he)
                ;(Oe = !!$e),
                  Oe && 'get' in $e && !('originalValue' in $e.get)
                    ? (pe = $e.get)
                    : (pe = pe[he])
              } else (Oe = M(pe, he)), (pe = pe[he])
              Oe && !ye && (T[be] = pe)
            }
          }
          return pe
        }, 'GetIntrinsic')
      }),
      As = L((e, t) => {
        'use strict'
        var r = Mr(),
          n = r('%Object.defineProperty%', !0) || !1
        if (n)
          try {
            n({}, 'a', { value: 1 })
          } catch {
            n = !1
          }
        t.exports = n
      }),
      sg = L((e, t) => {
        'use strict'
        var r = Mr(),
          n = r('%Object.getOwnPropertyDescriptor%', !0)
        if (n)
          try {
            n([], 'length')
          } catch {
            n = null
          }
        t.exports = n
      }),
      LR = L((e, t) => {
        'use strict'
        var r = As(),
          n = ig(),
          o = Pn(),
          a = sg()
        t.exports = m(function (i, s, l) {
          if (!i || (typeof i != 'object' && typeof i != 'function'))
            throw new o('`obj` must be an object or a function`')
          if (typeof s != 'string' && typeof s != 'symbol')
            throw new o('`property` must be a string or a symbol`')
          if (
            arguments.length > 3 &&
            typeof arguments[3] != 'boolean' &&
            arguments[3] !== null
          )
            throw new o(
              '`nonEnumerable`, if provided, must be a boolean or null',
            )
          if (
            arguments.length > 4 &&
            typeof arguments[4] != 'boolean' &&
            arguments[4] !== null
          )
            throw new o('`nonWritable`, if provided, must be a boolean or null')
          if (
            arguments.length > 5 &&
            typeof arguments[5] != 'boolean' &&
            arguments[5] !== null
          )
            throw new o(
              '`nonConfigurable`, if provided, must be a boolean or null',
            )
          if (arguments.length > 6 && typeof arguments[6] != 'boolean')
            throw new o('`loose`, if provided, must be a boolean')
          var u = arguments.length > 3 ? arguments[3] : null,
            c = arguments.length > 4 ? arguments[4] : null,
            d = arguments.length > 5 ? arguments[5] : null,
            y = arguments.length > 6 ? arguments[6] : !1,
            f = !!a && a(i, s)
          if (r)
            r(i, s, {
              configurable: d === null && f ? f.configurable : !d,
              enumerable: u === null && f ? f.enumerable : !u,
              value: l,
              writable: c === null && f ? f.writable : !c,
            })
          else if (y || (!u && !c && !d)) i[s] = l
          else
            throw new n(
              'This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.',
            )
        }, 'defineDataProperty')
      }),
      qR = L((e, t) => {
        'use strict'
        var r = As(),
          n = m(function () {
            return !!r
          }, 'hasPropertyDescriptors')
        ;(n.hasArrayLengthDefineBug = m(function () {
          if (!r) return null
          try {
            return r([], 'length', { value: 1 }).length !== 1
          } catch {
            return !0
          }
        }, 'hasArrayLengthDefineBug')),
          (t.exports = n)
      }),
      MR = L((e, t) => {
        'use strict'
        var r = Mr(),
          n = LR(),
          o = qR()(),
          a = sg(),
          i = Pn(),
          s = r('%Math.floor%')
        t.exports = m(function (l, u) {
          if (typeof l != 'function') throw new i('`fn` is not a function')
          if (typeof u != 'number' || u < 0 || u > 4294967295 || s(u) !== u)
            throw new i('`length` must be a positive 32-bit integer')
          var c = arguments.length > 2 && !!arguments[2],
            d = !0,
            y = !0
          if ('length' in l && a) {
            var f = a(l, 'length')
            f && !f.configurable && (d = !1), f && !f.writable && (y = !1)
          }
          return (
            (d || y || !c) &&
              (o ? n(l, 'length', u, !0, !0) : n(l, 'length', u)),
            l
          )
        }, 'setFunctionLength')
      }),
      UR = L((e, t) => {
        'use strict'
        var r = Ss(),
          n = Mr(),
          o = MR(),
          a = Pn(),
          i = n('%Function.prototype.apply%'),
          s = n('%Function.prototype.call%'),
          l = n('%Reflect.apply%', !0) || r.call(s, i),
          u = As(),
          c = n('%Math.max%')
        t.exports = m(function (y) {
          if (typeof y != 'function') throw new a('a function is required')
          var f = l(r, s, arguments)
          return o(f, 1 + c(0, y.length - (arguments.length - 1)), !0)
        }, 'callBind')
        var d = m(function () {
          return l(r, i, arguments)
        }, 'applyBind')
        u ? u(t.exports, 'apply', { value: d }) : (t.exports.apply = d)
      }),
      $R = L((e, t) => {
        'use strict'
        var r = Mr(),
          n = UR(),
          o = n(r('String.prototype.indexOf'))
        t.exports = m(function (a, i) {
          var s = r(a, !!i)
          return typeof s == 'function' && o(a, '.prototype.') > -1 ? n(s) : s
        }, 'callBoundIntrinsic')
      }),
      zR = L(() => {}),
      VR = L((e, t) => {
        var r = typeof Map == 'function' && Map.prototype,
          n =
            Object.getOwnPropertyDescriptor && r
              ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
              : null,
          o = r && n && typeof n.get == 'function' ? n.get : null,
          a = r && Map.prototype.forEach,
          i = typeof Set == 'function' && Set.prototype,
          s =
            Object.getOwnPropertyDescriptor && i
              ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
              : null,
          l = i && s && typeof s.get == 'function' ? s.get : null,
          u = i && Set.prototype.forEach,
          c = typeof WeakMap == 'function' && WeakMap.prototype,
          d = c ? WeakMap.prototype.has : null,
          y = typeof WeakSet == 'function' && WeakSet.prototype,
          f = y ? WeakSet.prototype.has : null,
          h = typeof WeakRef == 'function' && WeakRef.prototype,
          g = h ? WeakRef.prototype.deref : null,
          C = Boolean.prototype.valueOf,
          b = Object.prototype.toString,
          E = Function.prototype.toString,
          _ = String.prototype.match,
          T = String.prototype.slice,
          O = String.prototype.replace,
          I = String.prototype.toUpperCase,
          D = String.prototype.toLowerCase,
          R = RegExp.prototype.test,
          M = Array.prototype.concat,
          z = Array.prototype.join,
          Y = Array.prototype.slice,
          Z = Math.floor,
          V = typeof BigInt == 'function' ? BigInt.prototype.valueOf : null,
          P = Object.getOwnPropertySymbols,
          q =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? Symbol.prototype.toString
              : null,
          J = typeof Symbol == 'function' && typeof Symbol.iterator == 'object',
          X =
            typeof Symbol == 'function' &&
            Symbol.toStringTag &&
            (typeof Symbol.toStringTag === J || !0)
              ? Symbol.toStringTag
              : null,
          te = Object.prototype.propertyIsEnumerable,
          re =
            (typeof Reflect == 'function'
              ? Reflect.getPrototypeOf
              : Object.getPrototypeOf) ||
            ([].__proto__ === Array.prototype
              ? function ($) {
                  return $.__proto__
                }
              : null)
        function ee($, G) {
          if (
            $ === 1 / 0 ||
            $ === -1 / 0 ||
            $ !== $ ||
            ($ && $ > -1e3 && $ < 1e3) ||
            R.call(/e/, G)
          )
            return G
          var ue = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g
          if (typeof $ == 'number') {
            var se = $ < 0 ? -Z(-$) : Z($)
            if (se !== $) {
              var we = String(se),
                le = T.call(G, we.length + 1)
              return (
                O.call(we, ue, '$&_') +
                '.' +
                O.call(O.call(le, /([0-9]{3})/g, '$&_'), /_$/, '')
              )
            }
          }
          return O.call(G, ue, '$&_')
        }
        m(ee, 'addNumericSeparator')
        var oe = zR(),
          ie = oe.custom,
          ce = $e(ie) ? ie : null
        t.exports = m(function $(G, ue, se, we) {
          var le = ue || {}
          if (
            fe(le, 'quoteStyle') &&
            le.quoteStyle !== 'single' &&
            le.quoteStyle !== 'double'
          )
            throw new TypeError(
              'option "quoteStyle" must be "single" or "double"',
            )
          if (
            fe(le, 'maxStringLength') &&
            (typeof le.maxStringLength == 'number'
              ? le.maxStringLength < 0 && le.maxStringLength !== 1 / 0
              : le.maxStringLength !== null)
          )
            throw new TypeError(
              'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`',
            )
          var ze = fe(le, 'customInspect') ? le.customInspect : !0
          if (typeof ze != 'boolean' && ze !== 'symbol')
            throw new TypeError(
              'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`',
            )
          if (
            fe(le, 'indent') &&
            le.indent !== null &&
            le.indent !== '	' &&
            !(parseInt(le.indent, 10) === le.indent && le.indent > 0)
          )
            throw new TypeError(
              'option "indent" must be "\\t", an integer > 0, or `null`',
            )
          if (
            fe(le, 'numericSeparator') &&
            typeof le.numericSeparator != 'boolean'
          )
            throw new TypeError(
              'option "numericSeparator", if provided, must be `true` or `false`',
            )
          var pt = le.numericSeparator
          if (typeof G > 'u') return 'undefined'
          if (G === null) return 'null'
          if (typeof G == 'boolean') return G ? 'true' : 'false'
          if (typeof G == 'string') return Qr(G, le)
          if (typeof G == 'number') {
            if (G === 0) return 1 / 0 / G > 0 ? '0' : '-0'
            var Ke = String(G)
            return pt ? ee(G, Ke) : Ke
          }
          if (typeof G == 'bigint') {
            var dt = String(G) + 'n'
            return pt ? ee(G, dt) : dt
          }
          var en = typeof le.depth > 'u' ? 5 : le.depth
          if (
            (typeof se > 'u' && (se = 0),
            se >= en && en > 0 && typeof G == 'object')
          )
            return ye(G) ? '[Array]' : '[Object]'
          var Ye = Qn(le, se)
          if (typeof we > 'u') we = []
          else if (Rt(we, G) >= 0) return '[Circular]'
          function Ze(ae, de, Ne) {
            if ((de && ((we = Y.call(we)), we.push(de)), Ne)) {
              var Ie = { depth: le.depth }
              return (
                fe(le, 'quoteStyle') && (Ie.quoteStyle = le.quoteStyle),
                $(ae, Ie, se + 1, we)
              )
            }
            return $(ae, le, se + 1, we)
          }
          if ((m(Ze, 'inspect'), typeof G == 'function' && !Me(G))) {
            var Zn = Et(G),
              ft = Kt(G, Ze)
            return (
              '[Function' +
              (Zn ? ': ' + Zn : ' (anonymous)') +
              ']' +
              (ft.length > 0 ? ' { ' + z.call(ft, ', ') + ' }' : '')
            )
          }
          if ($e(G)) {
            var eo = J
              ? O.call(String(G), /^(Symbol\(.*\))_[^)]*$/, '$1')
              : q.call(G)
            return typeof G == 'object' && !J ? Dt(eo) : eo
          }
          if (Kn(G)) {
            for (
              var xt = '<' + D.call(String(G.nodeName)),
                tn = G.attributes || [],
                mr = 0;
              mr < tn.length;
              mr++
            )
              xt += ' ' + tn[mr].name + '=' + be(pe(tn[mr].value), 'double', le)
            return (
              (xt += '>'),
              G.childNodes && G.childNodes.length && (xt += '...'),
              (xt += '</' + D.call(String(G.nodeName)) + '>'),
              xt
            )
          }
          if (ye(G)) {
            if (G.length === 0) return '[]'
            var rn = Kt(G, Ze)
            return Ye && !Xn(rn)
              ? '[' + hr(rn, Ye) + ']'
              : '[ ' + z.call(rn, ', ') + ' ]'
          }
          if (Oe(G)) {
            var gr = Kt(G, Ze)
            return !('cause' in Error.prototype) &&
              'cause' in G &&
              !te.call(G, 'cause')
              ? '{ [' +
                  String(G) +
                  '] ' +
                  z.call(M.call('[cause]: ' + Ze(G.cause), gr), ', ') +
                  ' }'
              : gr.length === 0
                ? '[' + String(G) + ']'
                : '{ [' + String(G) + '] ' + z.call(gr, ', ') + ' }'
          }
          if (typeof G == 'object' && ze) {
            if (ce && typeof G[ce] == 'function' && oe)
              return oe(G, { depth: en - se })
            if (ze !== 'symbol' && typeof G.inspect == 'function')
              return G.inspect()
          }
          if (fr(G)) {
            var br = []
            return (
              a &&
                a.call(G, function (ae, de) {
                  br.push(Ze(de, G, !0) + ' => ' + Ze(ae, G))
                }),
              Zr('Map', o.call(G), br, Ye)
            )
          }
          if (Gn(G)) {
            var to = []
            return (
              u &&
                u.call(G, function (ae) {
                  to.push(Ze(ae, G))
                }),
              Zr('Set', l.call(G), to, Ye)
            )
          }
          if (Xr(G)) return yr('WeakMap')
          if (Wn(G)) return yr('WeakSet')
          if (Jn(G)) return yr('WeakRef')
          if (Ue(G)) return Dt(Ze(Number(G)))
          if (lt(G)) return Dt(Ze(V.call(G)))
          if (Te(G)) return Dt(C.call(G))
          if (he(G)) return Dt(Ze(String(G)))
          if (typeof window < 'u' && G === window) return '{ [object Window] }'
          if (G === window) return '{ [object globalThis] }'
          if (!_e(G) && !Me(G)) {
            var p = Kt(G, Ze),
              x = re
                ? re(G) === Object.prototype
                : G instanceof Object || G.constructor === Object,
              k = G instanceof Object ? '' : 'null prototype',
              H =
                !x && X && Object(G) === G && X in G
                  ? T.call(Se(G), 8, -1)
                  : k
                    ? 'Object'
                    : '',
              Q =
                x || typeof G.constructor != 'function'
                  ? ''
                  : G.constructor.name
                    ? G.constructor.name + ' '
                    : '',
              ne =
                Q +
                (H || k
                  ? '[' + z.call(M.call([], H || [], k || []), ': ') + '] '
                  : '')
            return p.length === 0
              ? ne + '{}'
              : Ye
                ? ne + '{' + hr(p, Ye) + '}'
                : ne + '{ ' + z.call(p, ', ') + ' }'
          }
          return String(G)
        }, 'inspect_')
        function be($, G, ue) {
          var se = (ue.quoteStyle || G) === 'double' ? '"' : "'"
          return se + $ + se
        }
        m(be, 'wrapQuotes')
        function pe($) {
          return O.call(String($), /"/g, '&quot;')
        }
        m(pe, 'quote')
        function ye($) {
          return (
            Se($) === '[object Array]' &&
            (!X || !(typeof $ == 'object' && X in $))
          )
        }
        m(ye, 'isArray')
        function _e($) {
          return (
            Se($) === '[object Date]' &&
            (!X || !(typeof $ == 'object' && X in $))
          )
        }
        m(_e, 'isDate')
        function Me($) {
          return (
            Se($) === '[object RegExp]' &&
            (!X || !(typeof $ == 'object' && X in $))
          )
        }
        m(Me, 'isRegExp')
        function Oe($) {
          return (
            Se($) === '[object Error]' &&
            (!X || !(typeof $ == 'object' && X in $))
          )
        }
        m(Oe, 'isError')
        function he($) {
          return (
            Se($) === '[object String]' &&
            (!X || !(typeof $ == 'object' && X in $))
          )
        }
        m(he, 'isString')
        function Ue($) {
          return (
            Se($) === '[object Number]' &&
            (!X || !(typeof $ == 'object' && X in $))
          )
        }
        m(Ue, 'isNumber')
        function Te($) {
          return (
            Se($) === '[object Boolean]' &&
            (!X || !(typeof $ == 'object' && X in $))
          )
        }
        m(Te, 'isBoolean')
        function $e($) {
          if (J) return $ && typeof $ == 'object' && $ instanceof Symbol
          if (typeof $ == 'symbol') return !0
          if (!$ || typeof $ != 'object' || !q) return !1
          try {
            return q.call($), !0
          } catch {}
          return !1
        }
        m($e, 'isSymbol')
        function lt($) {
          if (!$ || typeof $ != 'object' || !V) return !1
          try {
            return V.call($), !0
          } catch {}
          return !1
        }
        m(lt, 'isBigInt')
        var je =
          Object.prototype.hasOwnProperty ||
          function ($) {
            return $ in this
          }
        function fe($, G) {
          return je.call($, G)
        }
        m(fe, 'has')
        function Se($) {
          return b.call($)
        }
        m(Se, 'toStr')
        function Et($) {
          if ($.name) return $.name
          var G = _.call(E.call($), /^function\s*([\w$]+)/)
          return G ? G[1] : null
        }
        m(Et, 'nameOf')
        function Rt($, G) {
          if ($.indexOf) return $.indexOf(G)
          for (var ue = 0, se = $.length; ue < se; ue++)
            if ($[ue] === G) return ue
          return -1
        }
        m(Rt, 'indexOf')
        function fr($) {
          if (!o || !$ || typeof $ != 'object') return !1
          try {
            o.call($)
            try {
              l.call($)
            } catch {
              return !0
            }
            return $ instanceof Map
          } catch {}
          return !1
        }
        m(fr, 'isMap')
        function Xr($) {
          if (!d || !$ || typeof $ != 'object') return !1
          try {
            d.call($, d)
            try {
              f.call($, f)
            } catch {
              return !0
            }
            return $ instanceof WeakMap
          } catch {}
          return !1
        }
        m(Xr, 'isWeakMap')
        function Jn($) {
          if (!g || !$ || typeof $ != 'object') return !1
          try {
            return g.call($), !0
          } catch {}
          return !1
        }
        m(Jn, 'isWeakRef')
        function Gn($) {
          if (!l || !$ || typeof $ != 'object') return !1
          try {
            l.call($)
            try {
              o.call($)
            } catch {
              return !0
            }
            return $ instanceof Set
          } catch {}
          return !1
        }
        m(Gn, 'isSet')
        function Wn($) {
          if (!f || !$ || typeof $ != 'object') return !1
          try {
            f.call($, f)
            try {
              d.call($, d)
            } catch {
              return !0
            }
            return $ instanceof WeakSet
          } catch {}
          return !1
        }
        m(Wn, 'isWeakSet')
        function Kn($) {
          return !$ || typeof $ != 'object'
            ? !1
            : typeof HTMLElement < 'u' && $ instanceof HTMLElement
              ? !0
              : typeof $.nodeName == 'string' &&
                typeof $.getAttribute == 'function'
        }
        m(Kn, 'isElement')
        function Qr($, G) {
          if ($.length > G.maxStringLength) {
            var ue = $.length - G.maxStringLength,
              se = '... ' + ue + ' more character' + (ue > 1 ? 's' : '')
            return Qr(T.call($, 0, G.maxStringLength), G) + se
          }
          var we = O.call(O.call($, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, Yn)
          return be(we, 'single', G)
        }
        m(Qr, 'inspectString')
        function Yn($) {
          var G = $.charCodeAt(0),
            ue = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[G]
          return ue
            ? '\\' + ue
            : '\\x' + (G < 16 ? '0' : '') + I.call(G.toString(16))
        }
        m(Yn, 'lowbyte')
        function Dt($) {
          return 'Object(' + $ + ')'
        }
        m(Dt, 'markBoxed')
        function yr($) {
          return $ + ' { ? }'
        }
        m(yr, 'weakCollectionOf')
        function Zr($, G, ue, se) {
          var we = se ? hr(ue, se) : z.call(ue, ', ')
          return $ + ' (' + G + ') {' + we + '}'
        }
        m(Zr, 'collectionOf')
        function Xn($) {
          for (var G = 0; G < $.length; G++)
            if (
              Rt(
                $[G],
                `
`,
              ) >= 0
            )
              return !1
          return !0
        }
        m(Xn, 'singleLineValues')
        function Qn($, G) {
          var ue
          if ($.indent === '	') ue = '	'
          else if (typeof $.indent == 'number' && $.indent > 0)
            ue = z.call(Array($.indent + 1), ' ')
          else return null
          return { base: ue, prev: z.call(Array(G + 1), ue) }
        }
        m(Qn, 'getIndent')
        function hr($, G) {
          if ($.length === 0) return ''
          var ue =
            `
` +
            G.prev +
            G.base
          return (
            ue +
            z.call($, ',' + ue) +
            `
` +
            G.prev
          )
        }
        m(hr, 'indentedJoin')
        function Kt($, G) {
          var ue = ye($),
            se = []
          if (ue) {
            se.length = $.length
            for (var we = 0; we < $.length; we++)
              se[we] = fe($, we) ? G($[we], $) : ''
          }
          var le = typeof P == 'function' ? P($) : [],
            ze
          if (J) {
            ze = {}
            for (var pt = 0; pt < le.length; pt++) ze['$' + le[pt]] = le[pt]
          }
          for (var Ke in $)
            fe($, Ke) &&
              ((ue && String(Number(Ke)) === Ke && Ke < $.length) ||
                (J && ze['$' + Ke] instanceof Symbol) ||
                (R.call(/[^\w$]/, Ke)
                  ? se.push(G(Ke, $) + ': ' + G($[Ke], $))
                  : se.push(Ke + ': ' + G($[Ke], $))))
          if (typeof P == 'function')
            for (var dt = 0; dt < le.length; dt++)
              te.call($, le[dt]) &&
                se.push('[' + G(le[dt]) + ']: ' + G($[le[dt]], $))
          return se
        }
        m(Kt, 'arrObjKeys')
      }),
      HR = L((e, t) => {
        'use strict'
        var r = Mr(),
          n = $R(),
          o = VR(),
          a = Pn(),
          i = r('%WeakMap%', !0),
          s = r('%Map%', !0),
          l = n('WeakMap.prototype.get', !0),
          u = n('WeakMap.prototype.set', !0),
          c = n('WeakMap.prototype.has', !0),
          d = n('Map.prototype.get', !0),
          y = n('Map.prototype.set', !0),
          f = n('Map.prototype.has', !0),
          h = m(function (E, _) {
            for (var T = E, O; (O = T.next) !== null; T = O)
              if (O.key === _)
                return (T.next = O.next), (O.next = E.next), (E.next = O), O
          }, 'listGetNode'),
          g = m(function (E, _) {
            var T = h(E, _)
            return T && T.value
          }, 'listGet'),
          C = m(function (E, _, T) {
            var O = h(E, _)
            O ? (O.value = T) : (E.next = { key: _, next: E.next, value: T })
          }, 'listSet'),
          b = m(function (E, _) {
            return !!h(E, _)
          }, 'listHas')
        t.exports = m(function () {
          var E,
            _,
            T,
            O = {
              assert: m(function (I) {
                if (!O.has(I))
                  throw new a('Side channel does not contain ' + o(I))
              }, 'assert'),
              get: m(function (I) {
                if (
                  i &&
                  I &&
                  (typeof I == 'object' || typeof I == 'function')
                ) {
                  if (E) return l(E, I)
                } else if (s) {
                  if (_) return d(_, I)
                } else if (T) return g(T, I)
              }, 'get'),
              has: m(function (I) {
                if (
                  i &&
                  I &&
                  (typeof I == 'object' || typeof I == 'function')
                ) {
                  if (E) return c(E, I)
                } else if (s) {
                  if (_) return f(_, I)
                } else if (T) return b(T, I)
                return !1
              }, 'has'),
              set: m(function (I, D) {
                i && I && (typeof I == 'object' || typeof I == 'function')
                  ? (E || (E = new i()), u(E, I, D))
                  : s
                    ? (_ || (_ = new s()), y(_, I, D))
                    : (T || (T = { key: {}, next: null }), C(T, I, D))
              }, 'set'),
            }
          return O
        }, 'getSideChannel')
      }),
      Ts = L((e, t) => {
        'use strict'
        var r = String.prototype.replace,
          n = /%20/g,
          o = { RFC1738: 'RFC1738', RFC3986: 'RFC3986' }
        t.exports = {
          default: o.RFC3986,
          formatters: {
            RFC1738: m(function (a) {
              return r.call(a, n, '+')
            }, 'RFC1738'),
            RFC3986: m(function (a) {
              return String(a)
            }, 'RFC3986'),
          },
          RFC1738: o.RFC1738,
          RFC3986: o.RFC3986,
        }
      }),
      lg = L((e, t) => {
        'use strict'
        var r = Ts(),
          n = Object.prototype.hasOwnProperty,
          o = Array.isArray,
          a = (function () {
            for (var E = [], _ = 0; _ < 256; ++_)
              E.push('%' + ((_ < 16 ? '0' : '') + _.toString(16)).toUpperCase())
            return E
          })(),
          i = m(function (E) {
            for (; E.length > 1; ) {
              var _ = E.pop(),
                T = _.obj[_.prop]
              if (o(T)) {
                for (var O = [], I = 0; I < T.length; ++I)
                  typeof T[I] < 'u' && O.push(T[I])
                _.obj[_.prop] = O
              }
            }
          }, 'compactQueue'),
          s = m(function (E, _) {
            for (
              var T = _ && _.plainObjects ? Object.create(null) : {}, O = 0;
              O < E.length;
              ++O
            )
              typeof E[O] < 'u' && (T[O] = E[O])
            return T
          }, 'arrayToObject'),
          l = m(function E(_, T, O) {
            if (!T) return _
            if (typeof T != 'object') {
              if (o(_)) _.push(T)
              else if (_ && typeof _ == 'object')
                ((O && (O.plainObjects || O.allowPrototypes)) ||
                  !n.call(Object.prototype, T)) &&
                  (_[T] = !0)
              else return [_, T]
              return _
            }
            if (!_ || typeof _ != 'object') return [_].concat(T)
            var I = _
            return (
              o(_) && !o(T) && (I = s(_, O)),
              o(_) && o(T)
                ? (T.forEach(function (D, R) {
                    if (n.call(_, R)) {
                      var M = _[R]
                      M && typeof M == 'object' && D && typeof D == 'object'
                        ? (_[R] = E(M, D, O))
                        : _.push(D)
                    } else _[R] = D
                  }),
                  _)
                : Object.keys(T).reduce(function (D, R) {
                    var M = T[R]
                    return n.call(D, R) ? (D[R] = E(D[R], M, O)) : (D[R] = M), D
                  }, I)
            )
          }, 'merge'),
          u = m(function (E, _) {
            return Object.keys(_).reduce(function (T, O) {
              return (T[O] = _[O]), T
            }, E)
          }, 'assignSingleSource'),
          c = m(function (E, _, T) {
            var O = E.replace(/\+/g, ' ')
            if (T === 'iso-8859-1') return O.replace(/%[0-9a-f]{2}/gi, unescape)
            try {
              return decodeURIComponent(O)
            } catch {
              return O
            }
          }, 'decode'),
          d = 1024,
          y = m(function (E, _, T, O, I) {
            if (E.length === 0) return E
            var D = E
            if (
              (typeof E == 'symbol'
                ? (D = Symbol.prototype.toString.call(E))
                : typeof E != 'string' && (D = String(E)),
              T === 'iso-8859-1')
            )
              return escape(D).replace(/%u[0-9a-f]{4}/gi, function (P) {
                return '%26%23' + parseInt(P.slice(2), 16) + '%3B'
              })
            for (var R = '', M = 0; M < D.length; M += d) {
              for (
                var z = D.length >= d ? D.slice(M, M + d) : D, Y = [], Z = 0;
                Z < z.length;
                ++Z
              ) {
                var V = z.charCodeAt(Z)
                if (
                  V === 45 ||
                  V === 46 ||
                  V === 95 ||
                  V === 126 ||
                  (V >= 48 && V <= 57) ||
                  (V >= 65 && V <= 90) ||
                  (V >= 97 && V <= 122) ||
                  (I === r.RFC1738 && (V === 40 || V === 41))
                ) {
                  Y[Y.length] = z.charAt(Z)
                  continue
                }
                if (V < 128) {
                  Y[Y.length] = a[V]
                  continue
                }
                if (V < 2048) {
                  Y[Y.length] = a[192 | (V >> 6)] + a[128 | (V & 63)]
                  continue
                }
                if (V < 55296 || V >= 57344) {
                  Y[Y.length] =
                    a[224 | (V >> 12)] +
                    a[128 | ((V >> 6) & 63)] +
                    a[128 | (V & 63)]
                  continue
                }
                ;(Z += 1),
                  (V = 65536 + (((V & 1023) << 10) | (z.charCodeAt(Z) & 1023))),
                  (Y[Y.length] =
                    a[240 | (V >> 18)] +
                    a[128 | ((V >> 12) & 63)] +
                    a[128 | ((V >> 6) & 63)] +
                    a[128 | (V & 63)])
              }
              R += Y.join('')
            }
            return R
          }, 'encode'),
          f = m(function (E) {
            for (
              var _ = [{ obj: { o: E }, prop: 'o' }], T = [], O = 0;
              O < _.length;
              ++O
            )
              for (
                var I = _[O], D = I.obj[I.prop], R = Object.keys(D), M = 0;
                M < R.length;
                ++M
              ) {
                var z = R[M],
                  Y = D[z]
                typeof Y == 'object' &&
                  Y !== null &&
                  T.indexOf(Y) === -1 &&
                  (_.push({ obj: D, prop: z }), T.push(Y))
              }
            return i(_), E
          }, 'compact'),
          h = m(function (E) {
            return Object.prototype.toString.call(E) === '[object RegExp]'
          }, 'isRegExp'),
          g = m(function (E) {
            return !E || typeof E != 'object'
              ? !1
              : !!(
                  E.constructor &&
                  E.constructor.isBuffer &&
                  E.constructor.isBuffer(E)
                )
          }, 'isBuffer'),
          C = m(function (E, _) {
            return [].concat(E, _)
          }, 'combine'),
          b = m(function (E, _) {
            if (o(E)) {
              for (var T = [], O = 0; O < E.length; O += 1) T.push(_(E[O]))
              return T
            }
            return _(E)
          }, 'maybeMap')
        t.exports = {
          arrayToObject: s,
          assign: u,
          combine: C,
          compact: f,
          decode: c,
          encode: y,
          isBuffer: g,
          isRegExp: h,
          maybeMap: b,
          merge: l,
        }
      }),
      JR = L((e, t) => {
        'use strict'
        var r = HR(),
          n = lg(),
          o = Ts(),
          a = Object.prototype.hasOwnProperty,
          i = {
            brackets: m(function (b) {
              return b + '[]'
            }, 'brackets'),
            comma: 'comma',
            indices: m(function (b, E) {
              return b + '[' + E + ']'
            }, 'indices'),
            repeat: m(function (b) {
              return b
            }, 'repeat'),
          },
          s = Array.isArray,
          l = Array.prototype.push,
          u = m(function (b, E) {
            l.apply(b, s(E) ? E : [E])
          }, 'pushToArray'),
          c = Date.prototype.toISOString,
          d = o.default,
          y = {
            addQueryPrefix: !1,
            allowDots: !1,
            allowEmptyArrays: !1,
            arrayFormat: 'indices',
            charset: 'utf-8',
            charsetSentinel: !1,
            delimiter: '&',
            encode: !0,
            encodeDotInKeys: !1,
            encoder: n.encode,
            encodeValuesOnly: !1,
            format: d,
            formatter: o.formatters[d],
            indices: !1,
            serializeDate: m(function (b) {
              return c.call(b)
            }, 'serializeDate'),
            skipNulls: !1,
            strictNullHandling: !1,
          },
          f = m(function (b) {
            return (
              typeof b == 'string' ||
              typeof b == 'number' ||
              typeof b == 'boolean' ||
              typeof b == 'symbol' ||
              typeof b == 'bigint'
            )
          }, 'isNonNullishPrimitive'),
          h = {},
          g = m(function b(
            E,
            _,
            T,
            O,
            I,
            D,
            R,
            M,
            z,
            Y,
            Z,
            V,
            P,
            q,
            J,
            X,
            te,
            re,
          ) {
            for (
              var ee = E, oe = re, ie = 0, ce = !1;
              (oe = oe.get(h)) !== void 0 && !ce;

            ) {
              var be = oe.get(E)
              if (((ie += 1), typeof be < 'u')) {
                if (be === ie) throw new RangeError('Cyclic object value')
                ce = !0
              }
              typeof oe.get(h) > 'u' && (ie = 0)
            }
            if (
              (typeof Y == 'function'
                ? (ee = Y(_, ee))
                : ee instanceof Date
                  ? (ee = P(ee))
                  : T === 'comma' &&
                    s(ee) &&
                    (ee = n.maybeMap(ee, function (Se) {
                      return Se instanceof Date ? P(Se) : Se
                    })),
              ee === null)
            ) {
              if (D) return z && !X ? z(_, y.encoder, te, 'key', q) : _
              ee = ''
            }
            if (f(ee) || n.isBuffer(ee)) {
              if (z) {
                var pe = X ? _ : z(_, y.encoder, te, 'key', q)
                return [J(pe) + '=' + J(z(ee, y.encoder, te, 'value', q))]
              }
              return [J(_) + '=' + J(String(ee))]
            }
            var ye = []
            if (typeof ee > 'u') return ye
            var _e
            if (T === 'comma' && s(ee))
              X && z && (ee = n.maybeMap(ee, z)),
                (_e = [
                  { value: ee.length > 0 ? ee.join(',') || null : void 0 },
                ])
            else if (s(Y)) _e = Y
            else {
              var Me = Object.keys(ee)
              _e = Z ? Me.sort(Z) : Me
            }
            var Oe = M ? _.replace(/\./g, '%2E') : _,
              he = O && s(ee) && ee.length === 1 ? Oe + '[]' : Oe
            if (I && s(ee) && ee.length === 0) return he + '[]'
            for (var Ue = 0; Ue < _e.length; ++Ue) {
              var Te = _e[Ue],
                $e =
                  typeof Te == 'object' && typeof Te.value < 'u'
                    ? Te.value
                    : ee[Te]
              if (!(R && $e === null)) {
                var lt = V && M ? Te.replace(/\./g, '%2E') : Te,
                  je = s(ee)
                    ? typeof T == 'function'
                      ? T(he, lt)
                      : he
                    : he + (V ? '.' + lt : '[' + lt + ']')
                re.set(E, ie)
                var fe = r()
                fe.set(h, re),
                  u(
                    ye,
                    b(
                      $e,
                      je,
                      T,
                      O,
                      I,
                      D,
                      R,
                      M,
                      T === 'comma' && X && s(ee) ? null : z,
                      Y,
                      Z,
                      V,
                      P,
                      q,
                      J,
                      X,
                      te,
                      fe,
                    ),
                  )
              }
            }
            return ye
          }, 'stringify'),
          C = m(function (b) {
            if (!b) return y
            if (
              typeof b.allowEmptyArrays < 'u' &&
              typeof b.allowEmptyArrays != 'boolean'
            )
              throw new TypeError(
                '`allowEmptyArrays` option can only be `true` or `false`, when provided',
              )
            if (
              typeof b.encodeDotInKeys < 'u' &&
              typeof b.encodeDotInKeys != 'boolean'
            )
              throw new TypeError(
                '`encodeDotInKeys` option can only be `true` or `false`, when provided',
              )
            if (
              b.encoder !== null &&
              typeof b.encoder < 'u' &&
              typeof b.encoder != 'function'
            )
              throw new TypeError('Encoder has to be a function.')
            var E = b.charset || y.charset
            if (
              typeof b.charset < 'u' &&
              b.charset !== 'utf-8' &&
              b.charset !== 'iso-8859-1'
            )
              throw new TypeError(
                'The charset option must be either utf-8, iso-8859-1, or undefined',
              )
            var _ = o.default
            if (typeof b.format < 'u') {
              if (!a.call(o.formatters, b.format))
                throw new TypeError('Unknown format option provided.')
              _ = b.format
            }
            var T = o.formatters[_],
              O = y.filter
            ;(typeof b.filter == 'function' || s(b.filter)) && (O = b.filter)
            var I
            if (
              (b.arrayFormat in i
                ? (I = b.arrayFormat)
                : 'indices' in b
                  ? (I = b.indices ? 'indices' : 'repeat')
                  : (I = y.arrayFormat),
              'commaRoundTrip' in b && typeof b.commaRoundTrip != 'boolean')
            )
              throw new TypeError(
                '`commaRoundTrip` must be a boolean, or absent',
              )
            var D =
              typeof b.allowDots > 'u'
                ? b.encodeDotInKeys === !0
                  ? !0
                  : y.allowDots
                : !!b.allowDots
            return {
              addQueryPrefix:
                typeof b.addQueryPrefix == 'boolean'
                  ? b.addQueryPrefix
                  : y.addQueryPrefix,
              allowDots: D,
              allowEmptyArrays:
                typeof b.allowEmptyArrays == 'boolean'
                  ? !!b.allowEmptyArrays
                  : y.allowEmptyArrays,
              arrayFormat: I,
              charset: E,
              charsetSentinel:
                typeof b.charsetSentinel == 'boolean'
                  ? b.charsetSentinel
                  : y.charsetSentinel,
              commaRoundTrip: b.commaRoundTrip,
              delimiter: typeof b.delimiter > 'u' ? y.delimiter : b.delimiter,
              encode: typeof b.encode == 'boolean' ? b.encode : y.encode,
              encodeDotInKeys:
                typeof b.encodeDotInKeys == 'boolean'
                  ? b.encodeDotInKeys
                  : y.encodeDotInKeys,
              encoder: typeof b.encoder == 'function' ? b.encoder : y.encoder,
              encodeValuesOnly:
                typeof b.encodeValuesOnly == 'boolean'
                  ? b.encodeValuesOnly
                  : y.encodeValuesOnly,
              filter: O,
              format: _,
              formatter: T,
              serializeDate:
                typeof b.serializeDate == 'function'
                  ? b.serializeDate
                  : y.serializeDate,
              skipNulls:
                typeof b.skipNulls == 'boolean' ? b.skipNulls : y.skipNulls,
              sort: typeof b.sort == 'function' ? b.sort : null,
              strictNullHandling:
                typeof b.strictNullHandling == 'boolean'
                  ? b.strictNullHandling
                  : y.strictNullHandling,
            }
          }, 'normalizeStringifyOptions')
        t.exports = function (b, E) {
          var _ = b,
            T = C(E),
            O,
            I
          typeof T.filter == 'function'
            ? ((I = T.filter), (_ = I('', _)))
            : s(T.filter) && ((I = T.filter), (O = I))
          var D = []
          if (typeof _ != 'object' || _ === null) return ''
          var R = i[T.arrayFormat],
            M = R === 'comma' && T.commaRoundTrip
          O || (O = Object.keys(_)), T.sort && O.sort(T.sort)
          for (var z = r(), Y = 0; Y < O.length; ++Y) {
            var Z = O[Y]
            ;(T.skipNulls && _[Z] === null) ||
              u(
                D,
                g(
                  _[Z],
                  Z,
                  R,
                  M,
                  T.allowEmptyArrays,
                  T.strictNullHandling,
                  T.skipNulls,
                  T.encodeDotInKeys,
                  T.encode ? T.encoder : null,
                  T.filter,
                  T.sort,
                  T.allowDots,
                  T.serializeDate,
                  T.format,
                  T.formatter,
                  T.encodeValuesOnly,
                  T.charset,
                  z,
                ),
              )
          }
          var V = D.join(T.delimiter),
            P = T.addQueryPrefix === !0 ? '?' : ''
          return (
            T.charsetSentinel &&
              (T.charset === 'iso-8859-1'
                ? (P += 'utf8=%26%2310003%3B&')
                : (P += 'utf8=%E2%9C%93&')),
            V.length > 0 ? P + V : ''
          )
        }
      }),
      GR = L((e, t) => {
        'use strict'
        var r = lg(),
          n = Object.prototype.hasOwnProperty,
          o = Array.isArray,
          a = {
            allowDots: !1,
            allowEmptyArrays: !1,
            allowPrototypes: !1,
            allowSparse: !1,
            arrayLimit: 20,
            charset: 'utf-8',
            charsetSentinel: !1,
            comma: !1,
            decodeDotInKeys: !1,
            decoder: r.decode,
            delimiter: '&',
            depth: 5,
            duplicates: 'combine',
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1,
          },
          i = m(function (h) {
            return h.replace(/&#(\d+);/g, function (g, C) {
              return String.fromCharCode(parseInt(C, 10))
            })
          }, 'interpretNumericEntities'),
          s = m(function (h, g) {
            return h && typeof h == 'string' && g.comma && h.indexOf(',') > -1
              ? h.split(',')
              : h
          }, 'parseArrayValue'),
          l = 'utf8=%26%2310003%3B',
          u = 'utf8=%E2%9C%93',
          c = m(function (h, g) {
            var C = { __proto__: null },
              b = g.ignoreQueryPrefix ? h.replace(/^\?/, '') : h
            b = b.replace(/%5B/gi, '[').replace(/%5D/gi, ']')
            var E = g.parameterLimit === 1 / 0 ? void 0 : g.parameterLimit,
              _ = b.split(g.delimiter, E),
              T = -1,
              O,
              I = g.charset
            if (g.charsetSentinel)
              for (O = 0; O < _.length; ++O)
                _[O].indexOf('utf8=') === 0 &&
                  (_[O] === u
                    ? (I = 'utf-8')
                    : _[O] === l && (I = 'iso-8859-1'),
                  (T = O),
                  (O = _.length))
            for (O = 0; O < _.length; ++O)
              if (O !== T) {
                var D = _[O],
                  R = D.indexOf(']='),
                  M = R === -1 ? D.indexOf('=') : R + 1,
                  z,
                  Y
                M === -1
                  ? ((z = g.decoder(D, a.decoder, I, 'key')),
                    (Y = g.strictNullHandling ? null : ''))
                  : ((z = g.decoder(D.slice(0, M), a.decoder, I, 'key')),
                    (Y = r.maybeMap(s(D.slice(M + 1), g), function (V) {
                      return g.decoder(V, a.decoder, I, 'value')
                    }))),
                  Y &&
                    g.interpretNumericEntities &&
                    I === 'iso-8859-1' &&
                    (Y = i(Y)),
                  D.indexOf('[]=') > -1 && (Y = o(Y) ? [Y] : Y)
                var Z = n.call(C, z)
                Z && g.duplicates === 'combine'
                  ? (C[z] = r.combine(C[z], Y))
                  : (!Z || g.duplicates === 'last') && (C[z] = Y)
              }
            return C
          }, 'parseQueryStringValues'),
          d = m(function (h, g, C, b) {
            for (var E = b ? g : s(g, C), _ = h.length - 1; _ >= 0; --_) {
              var T,
                O = h[_]
              if (O === '[]' && C.parseArrays)
                T =
                  C.allowEmptyArrays &&
                  (E === '' || (C.strictNullHandling && E === null))
                    ? []
                    : [].concat(E)
              else {
                T = C.plainObjects ? Object.create(null) : {}
                var I =
                    O.charAt(0) === '[' && O.charAt(O.length - 1) === ']'
                      ? O.slice(1, -1)
                      : O,
                  D = C.decodeDotInKeys ? I.replace(/%2E/g, '.') : I,
                  R = parseInt(D, 10)
                !C.parseArrays && D === ''
                  ? (T = { 0: E })
                  : !isNaN(R) &&
                      O !== D &&
                      String(R) === D &&
                      R >= 0 &&
                      C.parseArrays &&
                      R <= C.arrayLimit
                    ? ((T = []), (T[R] = E))
                    : D !== '__proto__' && (T[D] = E)
              }
              E = T
            }
            return E
          }, 'parseObject'),
          y = m(function (h, g, C, b) {
            if (h) {
              var E = C.allowDots ? h.replace(/\.([^.[]+)/g, '[$1]') : h,
                _ = /(\[[^[\]]*])/,
                T = /(\[[^[\]]*])/g,
                O = C.depth > 0 && _.exec(E),
                I = O ? E.slice(0, O.index) : E,
                D = []
              if (I) {
                if (
                  !C.plainObjects &&
                  n.call(Object.prototype, I) &&
                  !C.allowPrototypes
                )
                  return
                D.push(I)
              }
              for (
                var R = 0;
                C.depth > 0 && (O = T.exec(E)) !== null && R < C.depth;

              ) {
                if (
                  ((R += 1),
                  !C.plainObjects &&
                    n.call(Object.prototype, O[1].slice(1, -1)) &&
                    !C.allowPrototypes)
                )
                  return
                D.push(O[1])
              }
              return O && D.push('[' + E.slice(O.index) + ']'), d(D, g, C, b)
            }
          }, 'parseQueryStringKeys'),
          f = m(function (h) {
            if (!h) return a
            if (
              typeof h.allowEmptyArrays < 'u' &&
              typeof h.allowEmptyArrays != 'boolean'
            )
              throw new TypeError(
                '`allowEmptyArrays` option can only be `true` or `false`, when provided',
              )
            if (
              typeof h.decodeDotInKeys < 'u' &&
              typeof h.decodeDotInKeys != 'boolean'
            )
              throw new TypeError(
                '`decodeDotInKeys` option can only be `true` or `false`, when provided',
              )
            if (
              h.decoder !== null &&
              typeof h.decoder < 'u' &&
              typeof h.decoder != 'function'
            )
              throw new TypeError('Decoder has to be a function.')
            if (
              typeof h.charset < 'u' &&
              h.charset !== 'utf-8' &&
              h.charset !== 'iso-8859-1'
            )
              throw new TypeError(
                'The charset option must be either utf-8, iso-8859-1, or undefined',
              )
            var g = typeof h.charset > 'u' ? a.charset : h.charset,
              C = typeof h.duplicates > 'u' ? a.duplicates : h.duplicates
            if (C !== 'combine' && C !== 'first' && C !== 'last')
              throw new TypeError(
                'The duplicates option must be either combine, first, or last',
              )
            var b =
              typeof h.allowDots > 'u'
                ? h.decodeDotInKeys === !0
                  ? !0
                  : a.allowDots
                : !!h.allowDots
            return {
              allowDots: b,
              allowEmptyArrays:
                typeof h.allowEmptyArrays == 'boolean'
                  ? !!h.allowEmptyArrays
                  : a.allowEmptyArrays,
              allowPrototypes:
                typeof h.allowPrototypes == 'boolean'
                  ? h.allowPrototypes
                  : a.allowPrototypes,
              allowSparse:
                typeof h.allowSparse == 'boolean'
                  ? h.allowSparse
                  : a.allowSparse,
              arrayLimit:
                typeof h.arrayLimit == 'number' ? h.arrayLimit : a.arrayLimit,
              charset: g,
              charsetSentinel:
                typeof h.charsetSentinel == 'boolean'
                  ? h.charsetSentinel
                  : a.charsetSentinel,
              comma: typeof h.comma == 'boolean' ? h.comma : a.comma,
              decodeDotInKeys:
                typeof h.decodeDotInKeys == 'boolean'
                  ? h.decodeDotInKeys
                  : a.decodeDotInKeys,
              decoder: typeof h.decoder == 'function' ? h.decoder : a.decoder,
              delimiter:
                typeof h.delimiter == 'string' || r.isRegExp(h.delimiter)
                  ? h.delimiter
                  : a.delimiter,
              depth:
                typeof h.depth == 'number' || h.depth === !1
                  ? +h.depth
                  : a.depth,
              duplicates: C,
              ignoreQueryPrefix: h.ignoreQueryPrefix === !0,
              interpretNumericEntities:
                typeof h.interpretNumericEntities == 'boolean'
                  ? h.interpretNumericEntities
                  : a.interpretNumericEntities,
              parameterLimit:
                typeof h.parameterLimit == 'number'
                  ? h.parameterLimit
                  : a.parameterLimit,
              parseArrays: h.parseArrays !== !1,
              plainObjects:
                typeof h.plainObjects == 'boolean'
                  ? h.plainObjects
                  : a.plainObjects,
              strictNullHandling:
                typeof h.strictNullHandling == 'boolean'
                  ? h.strictNullHandling
                  : a.strictNullHandling,
            }
          }, 'normalizeParseOptions')
        t.exports = function (h, g) {
          var C = f(g)
          if (h === '' || h === null || typeof h > 'u')
            return C.plainObjects ? Object.create(null) : {}
          for (
            var b = typeof h == 'string' ? c(h, C) : h,
              E = C.plainObjects ? Object.create(null) : {},
              _ = Object.keys(b),
              T = 0;
            T < _.length;
            ++T
          ) {
            var O = _[T],
              I = y(O, b[O], C, typeof h == 'string')
            E = r.merge(E, I, C)
          }
          return C.allowSparse === !0 ? E : r.compact(E)
        }
      }),
      Cs = L((e, t) => {
        'use strict'
        var r = JR(),
          n = GR(),
          o = Ts()
        t.exports = { formats: o, parse: n, stringify: r }
      }),
      ug = L((e, t) => {
        t.exports = {
          Aacute: '\xC1',
          aacute: '\xE1',
          Abreve: '\u0102',
          abreve: '\u0103',
          ac: '\u223E',
          acd: '\u223F',
          acE: '\u223E\u0333',
          Acirc: '\xC2',
          acirc: '\xE2',
          acute: '\xB4',
          Acy: '\u0410',
          acy: '\u0430',
          AElig: '\xC6',
          aelig: '\xE6',
          af: '\u2061',
          Afr: '\u{1D504}',
          afr: '\u{1D51E}',
          Agrave: '\xC0',
          agrave: '\xE0',
          alefsym: '\u2135',
          aleph: '\u2135',
          Alpha: '\u0391',
          alpha: '\u03B1',
          Amacr: '\u0100',
          amacr: '\u0101',
          amalg: '\u2A3F',
          amp: '&',
          AMP: '&',
          andand: '\u2A55',
          And: '\u2A53',
          and: '\u2227',
          andd: '\u2A5C',
          andslope: '\u2A58',
          andv: '\u2A5A',
          ang: '\u2220',
          ange: '\u29A4',
          angle: '\u2220',
          angmsdaa: '\u29A8',
          angmsdab: '\u29A9',
          angmsdac: '\u29AA',
          angmsdad: '\u29AB',
          angmsdae: '\u29AC',
          angmsdaf: '\u29AD',
          angmsdag: '\u29AE',
          angmsdah: '\u29AF',
          angmsd: '\u2221',
          angrt: '\u221F',
          angrtvb: '\u22BE',
          angrtvbd: '\u299D',
          angsph: '\u2222',
          angst: '\xC5',
          angzarr: '\u237C',
          Aogon: '\u0104',
          aogon: '\u0105',
          Aopf: '\u{1D538}',
          aopf: '\u{1D552}',
          apacir: '\u2A6F',
          ap: '\u2248',
          apE: '\u2A70',
          ape: '\u224A',
          apid: '\u224B',
          apos: "'",
          ApplyFunction: '\u2061',
          approx: '\u2248',
          approxeq: '\u224A',
          Aring: '\xC5',
          aring: '\xE5',
          Ascr: '\u{1D49C}',
          ascr: '\u{1D4B6}',
          Assign: '\u2254',
          ast: '*',
          asymp: '\u2248',
          asympeq: '\u224D',
          Atilde: '\xC3',
          atilde: '\xE3',
          Auml: '\xC4',
          auml: '\xE4',
          awconint: '\u2233',
          awint: '\u2A11',
          backcong: '\u224C',
          backepsilon: '\u03F6',
          backprime: '\u2035',
          backsim: '\u223D',
          backsimeq: '\u22CD',
          Backslash: '\u2216',
          Barv: '\u2AE7',
          barvee: '\u22BD',
          barwed: '\u2305',
          Barwed: '\u2306',
          barwedge: '\u2305',
          bbrk: '\u23B5',
          bbrktbrk: '\u23B6',
          bcong: '\u224C',
          Bcy: '\u0411',
          bcy: '\u0431',
          bdquo: '\u201E',
          becaus: '\u2235',
          because: '\u2235',
          Because: '\u2235',
          bemptyv: '\u29B0',
          bepsi: '\u03F6',
          bernou: '\u212C',
          Bernoullis: '\u212C',
          Beta: '\u0392',
          beta: '\u03B2',
          beth: '\u2136',
          between: '\u226C',
          Bfr: '\u{1D505}',
          bfr: '\u{1D51F}',
          bigcap: '\u22C2',
          bigcirc: '\u25EF',
          bigcup: '\u22C3',
          bigodot: '\u2A00',
          bigoplus: '\u2A01',
          bigotimes: '\u2A02',
          bigsqcup: '\u2A06',
          bigstar: '\u2605',
          bigtriangledown: '\u25BD',
          bigtriangleup: '\u25B3',
          biguplus: '\u2A04',
          bigvee: '\u22C1',
          bigwedge: '\u22C0',
          bkarow: '\u290D',
          blacklozenge: '\u29EB',
          blacksquare: '\u25AA',
          blacktriangle: '\u25B4',
          blacktriangledown: '\u25BE',
          blacktriangleleft: '\u25C2',
          blacktriangleright: '\u25B8',
          blank: '\u2423',
          blk12: '\u2592',
          blk14: '\u2591',
          blk34: '\u2593',
          block: '\u2588',
          bne: '=\u20E5',
          bnequiv: '\u2261\u20E5',
          bNot: '\u2AED',
          bnot: '\u2310',
          Bopf: '\u{1D539}',
          bopf: '\u{1D553}',
          bot: '\u22A5',
          bottom: '\u22A5',
          bowtie: '\u22C8',
          boxbox: '\u29C9',
          boxdl: '\u2510',
          boxdL: '\u2555',
          boxDl: '\u2556',
          boxDL: '\u2557',
          boxdr: '\u250C',
          boxdR: '\u2552',
          boxDr: '\u2553',
          boxDR: '\u2554',
          boxh: '\u2500',
          boxH: '\u2550',
          boxhd: '\u252C',
          boxHd: '\u2564',
          boxhD: '\u2565',
          boxHD: '\u2566',
          boxhu: '\u2534',
          boxHu: '\u2567',
          boxhU: '\u2568',
          boxHU: '\u2569',
          boxminus: '\u229F',
          boxplus: '\u229E',
          boxtimes: '\u22A0',
          boxul: '\u2518',
          boxuL: '\u255B',
          boxUl: '\u255C',
          boxUL: '\u255D',
          boxur: '\u2514',
          boxuR: '\u2558',
          boxUr: '\u2559',
          boxUR: '\u255A',
          boxv: '\u2502',
          boxV: '\u2551',
          boxvh: '\u253C',
          boxvH: '\u256A',
          boxVh: '\u256B',
          boxVH: '\u256C',
          boxvl: '\u2524',
          boxvL: '\u2561',
          boxVl: '\u2562',
          boxVL: '\u2563',
          boxvr: '\u251C',
          boxvR: '\u255E',
          boxVr: '\u255F',
          boxVR: '\u2560',
          bprime: '\u2035',
          breve: '\u02D8',
          Breve: '\u02D8',
          brvbar: '\xA6',
          bscr: '\u{1D4B7}',
          Bscr: '\u212C',
          bsemi: '\u204F',
          bsim: '\u223D',
          bsime: '\u22CD',
          bsolb: '\u29C5',
          bsol: '\\',
          bsolhsub: '\u27C8',
          bull: '\u2022',
          bullet: '\u2022',
          bump: '\u224E',
          bumpE: '\u2AAE',
          bumpe: '\u224F',
          Bumpeq: '\u224E',
          bumpeq: '\u224F',
          Cacute: '\u0106',
          cacute: '\u0107',
          capand: '\u2A44',
          capbrcup: '\u2A49',
          capcap: '\u2A4B',
          cap: '\u2229',
          Cap: '\u22D2',
          capcup: '\u2A47',
          capdot: '\u2A40',
          CapitalDifferentialD: '\u2145',
          caps: '\u2229\uFE00',
          caret: '\u2041',
          caron: '\u02C7',
          Cayleys: '\u212D',
          ccaps: '\u2A4D',
          Ccaron: '\u010C',
          ccaron: '\u010D',
          Ccedil: '\xC7',
          ccedil: '\xE7',
          Ccirc: '\u0108',
          ccirc: '\u0109',
          Cconint: '\u2230',
          ccups: '\u2A4C',
          ccupssm: '\u2A50',
          Cdot: '\u010A',
          cdot: '\u010B',
          cedil: '\xB8',
          Cedilla: '\xB8',
          cemptyv: '\u29B2',
          cent: '\xA2',
          centerdot: '\xB7',
          CenterDot: '\xB7',
          cfr: '\u{1D520}',
          Cfr: '\u212D',
          CHcy: '\u0427',
          chcy: '\u0447',
          check: '\u2713',
          checkmark: '\u2713',
          Chi: '\u03A7',
          chi: '\u03C7',
          circ: '\u02C6',
          circeq: '\u2257',
          circlearrowleft: '\u21BA',
          circlearrowright: '\u21BB',
          circledast: '\u229B',
          circledcirc: '\u229A',
          circleddash: '\u229D',
          CircleDot: '\u2299',
          circledR: '\xAE',
          circledS: '\u24C8',
          CircleMinus: '\u2296',
          CirclePlus: '\u2295',
          CircleTimes: '\u2297',
          cir: '\u25CB',
          cirE: '\u29C3',
          cire: '\u2257',
          cirfnint: '\u2A10',
          cirmid: '\u2AEF',
          cirscir: '\u29C2',
          ClockwiseContourIntegral: '\u2232',
          CloseCurlyDoubleQuote: '\u201D',
          CloseCurlyQuote: '\u2019',
          clubs: '\u2663',
          clubsuit: '\u2663',
          colon: ':',
          Colon: '\u2237',
          Colone: '\u2A74',
          colone: '\u2254',
          coloneq: '\u2254',
          comma: ',',
          commat: '@',
          comp: '\u2201',
          compfn: '\u2218',
          complement: '\u2201',
          complexes: '\u2102',
          cong: '\u2245',
          congdot: '\u2A6D',
          Congruent: '\u2261',
          conint: '\u222E',
          Conint: '\u222F',
          ContourIntegral: '\u222E',
          copf: '\u{1D554}',
          Copf: '\u2102',
          coprod: '\u2210',
          Coproduct: '\u2210',
          copy: '\xA9',
          COPY: '\xA9',
          copysr: '\u2117',
          CounterClockwiseContourIntegral: '\u2233',
          crarr: '\u21B5',
          cross: '\u2717',
          Cross: '\u2A2F',
          Cscr: '\u{1D49E}',
          cscr: '\u{1D4B8}',
          csub: '\u2ACF',
          csube: '\u2AD1',
          csup: '\u2AD0',
          csupe: '\u2AD2',
          ctdot: '\u22EF',
          cudarrl: '\u2938',
          cudarrr: '\u2935',
          cuepr: '\u22DE',
          cuesc: '\u22DF',
          cularr: '\u21B6',
          cularrp: '\u293D',
          cupbrcap: '\u2A48',
          cupcap: '\u2A46',
          CupCap: '\u224D',
          cup: '\u222A',
          Cup: '\u22D3',
          cupcup: '\u2A4A',
          cupdot: '\u228D',
          cupor: '\u2A45',
          cups: '\u222A\uFE00',
          curarr: '\u21B7',
          curarrm: '\u293C',
          curlyeqprec: '\u22DE',
          curlyeqsucc: '\u22DF',
          curlyvee: '\u22CE',
          curlywedge: '\u22CF',
          curren: '\xA4',
          curvearrowleft: '\u21B6',
          curvearrowright: '\u21B7',
          cuvee: '\u22CE',
          cuwed: '\u22CF',
          cwconint: '\u2232',
          cwint: '\u2231',
          cylcty: '\u232D',
          dagger: '\u2020',
          Dagger: '\u2021',
          daleth: '\u2138',
          darr: '\u2193',
          Darr: '\u21A1',
          dArr: '\u21D3',
          dash: '\u2010',
          Dashv: '\u2AE4',
          dashv: '\u22A3',
          dbkarow: '\u290F',
          dblac: '\u02DD',
          Dcaron: '\u010E',
          dcaron: '\u010F',
          Dcy: '\u0414',
          dcy: '\u0434',
          ddagger: '\u2021',
          ddarr: '\u21CA',
          DD: '\u2145',
          dd: '\u2146',
          DDotrahd: '\u2911',
          ddotseq: '\u2A77',
          deg: '\xB0',
          Del: '\u2207',
          Delta: '\u0394',
          delta: '\u03B4',
          demptyv: '\u29B1',
          dfisht: '\u297F',
          Dfr: '\u{1D507}',
          dfr: '\u{1D521}',
          dHar: '\u2965',
          dharl: '\u21C3',
          dharr: '\u21C2',
          DiacriticalAcute: '\xB4',
          DiacriticalDot: '\u02D9',
          DiacriticalDoubleAcute: '\u02DD',
          DiacriticalGrave: '`',
          DiacriticalTilde: '\u02DC',
          diam: '\u22C4',
          diamond: '\u22C4',
          Diamond: '\u22C4',
          diamondsuit: '\u2666',
          diams: '\u2666',
          die: '\xA8',
          DifferentialD: '\u2146',
          digamma: '\u03DD',
          disin: '\u22F2',
          div: '\xF7',
          divide: '\xF7',
          divideontimes: '\u22C7',
          divonx: '\u22C7',
          DJcy: '\u0402',
          djcy: '\u0452',
          dlcorn: '\u231E',
          dlcrop: '\u230D',
          dollar: '$',
          Dopf: '\u{1D53B}',
          dopf: '\u{1D555}',
          Dot: '\xA8',
          dot: '\u02D9',
          DotDot: '\u20DC',
          doteq: '\u2250',
          doteqdot: '\u2251',
          DotEqual: '\u2250',
          dotminus: '\u2238',
          dotplus: '\u2214',
          dotsquare: '\u22A1',
          doublebarwedge: '\u2306',
          DoubleContourIntegral: '\u222F',
          DoubleDot: '\xA8',
          DoubleDownArrow: '\u21D3',
          DoubleLeftArrow: '\u21D0',
          DoubleLeftRightArrow: '\u21D4',
          DoubleLeftTee: '\u2AE4',
          DoubleLongLeftArrow: '\u27F8',
          DoubleLongLeftRightArrow: '\u27FA',
          DoubleLongRightArrow: '\u27F9',
          DoubleRightArrow: '\u21D2',
          DoubleRightTee: '\u22A8',
          DoubleUpArrow: '\u21D1',
          DoubleUpDownArrow: '\u21D5',
          DoubleVerticalBar: '\u2225',
          DownArrowBar: '\u2913',
          downarrow: '\u2193',
          DownArrow: '\u2193',
          Downarrow: '\u21D3',
          DownArrowUpArrow: '\u21F5',
          DownBreve: '\u0311',
          downdownarrows: '\u21CA',
          downharpoonleft: '\u21C3',
          downharpoonright: '\u21C2',
          DownLeftRightVector: '\u2950',
          DownLeftTeeVector: '\u295E',
          DownLeftVectorBar: '\u2956',
          DownLeftVector: '\u21BD',
          DownRightTeeVector: '\u295F',
          DownRightVectorBar: '\u2957',
          DownRightVector: '\u21C1',
          DownTeeArrow: '\u21A7',
          DownTee: '\u22A4',
          drbkarow: '\u2910',
          drcorn: '\u231F',
          drcrop: '\u230C',
          Dscr: '\u{1D49F}',
          dscr: '\u{1D4B9}',
          DScy: '\u0405',
          dscy: '\u0455',
          dsol: '\u29F6',
          Dstrok: '\u0110',
          dstrok: '\u0111',
          dtdot: '\u22F1',
          dtri: '\u25BF',
          dtrif: '\u25BE',
          duarr: '\u21F5',
          duhar: '\u296F',
          dwangle: '\u29A6',
          DZcy: '\u040F',
          dzcy: '\u045F',
          dzigrarr: '\u27FF',
          Eacute: '\xC9',
          eacute: '\xE9',
          easter: '\u2A6E',
          Ecaron: '\u011A',
          ecaron: '\u011B',
          Ecirc: '\xCA',
          ecirc: '\xEA',
          ecir: '\u2256',
          ecolon: '\u2255',
          Ecy: '\u042D',
          ecy: '\u044D',
          eDDot: '\u2A77',
          Edot: '\u0116',
          edot: '\u0117',
          eDot: '\u2251',
          ee: '\u2147',
          efDot: '\u2252',
          Efr: '\u{1D508}',
          efr: '\u{1D522}',
          eg: '\u2A9A',
          Egrave: '\xC8',
          egrave: '\xE8',
          egs: '\u2A96',
          egsdot: '\u2A98',
          el: '\u2A99',
          Element: '\u2208',
          elinters: '\u23E7',
          ell: '\u2113',
          els: '\u2A95',
          elsdot: '\u2A97',
          Emacr: '\u0112',
          emacr: '\u0113',
          empty: '\u2205',
          emptyset: '\u2205',
          EmptySmallSquare: '\u25FB',
          emptyv: '\u2205',
          EmptyVerySmallSquare: '\u25AB',
          emsp13: '\u2004',
          emsp14: '\u2005',
          emsp: '\u2003',
          ENG: '\u014A',
          eng: '\u014B',
          ensp: '\u2002',
          Eogon: '\u0118',
          eogon: '\u0119',
          Eopf: '\u{1D53C}',
          eopf: '\u{1D556}',
          epar: '\u22D5',
          eparsl: '\u29E3',
          eplus: '\u2A71',
          epsi: '\u03B5',
          Epsilon: '\u0395',
          epsilon: '\u03B5',
          epsiv: '\u03F5',
          eqcirc: '\u2256',
          eqcolon: '\u2255',
          eqsim: '\u2242',
          eqslantgtr: '\u2A96',
          eqslantless: '\u2A95',
          Equal: '\u2A75',
          equals: '=',
          EqualTilde: '\u2242',
          equest: '\u225F',
          Equilibrium: '\u21CC',
          equiv: '\u2261',
          equivDD: '\u2A78',
          eqvparsl: '\u29E5',
          erarr: '\u2971',
          erDot: '\u2253',
          escr: '\u212F',
          Escr: '\u2130',
          esdot: '\u2250',
          Esim: '\u2A73',
          esim: '\u2242',
          Eta: '\u0397',
          eta: '\u03B7',
          ETH: '\xD0',
          eth: '\xF0',
          Euml: '\xCB',
          euml: '\xEB',
          euro: '\u20AC',
          excl: '!',
          exist: '\u2203',
          Exists: '\u2203',
          expectation: '\u2130',
          exponentiale: '\u2147',
          ExponentialE: '\u2147',
          fallingdotseq: '\u2252',
          Fcy: '\u0424',
          fcy: '\u0444',
          female: '\u2640',
          ffilig: '\uFB03',
          fflig: '\uFB00',
          ffllig: '\uFB04',
          Ffr: '\u{1D509}',
          ffr: '\u{1D523}',
          filig: '\uFB01',
          FilledSmallSquare: '\u25FC',
          FilledVerySmallSquare: '\u25AA',
          fjlig: 'fj',
          flat: '\u266D',
          fllig: '\uFB02',
          fltns: '\u25B1',
          fnof: '\u0192',
          Fopf: '\u{1D53D}',
          fopf: '\u{1D557}',
          forall: '\u2200',
          ForAll: '\u2200',
          fork: '\u22D4',
          forkv: '\u2AD9',
          Fouriertrf: '\u2131',
          fpartint: '\u2A0D',
          frac12: '\xBD',
          frac13: '\u2153',
          frac14: '\xBC',
          frac15: '\u2155',
          frac16: '\u2159',
          frac18: '\u215B',
          frac23: '\u2154',
          frac25: '\u2156',
          frac34: '\xBE',
          frac35: '\u2157',
          frac38: '\u215C',
          frac45: '\u2158',
          frac56: '\u215A',
          frac58: '\u215D',
          frac78: '\u215E',
          frasl: '\u2044',
          frown: '\u2322',
          fscr: '\u{1D4BB}',
          Fscr: '\u2131',
          gacute: '\u01F5',
          Gamma: '\u0393',
          gamma: '\u03B3',
          Gammad: '\u03DC',
          gammad: '\u03DD',
          gap: '\u2A86',
          Gbreve: '\u011E',
          gbreve: '\u011F',
          Gcedil: '\u0122',
          Gcirc: '\u011C',
          gcirc: '\u011D',
          Gcy: '\u0413',
          gcy: '\u0433',
          Gdot: '\u0120',
          gdot: '\u0121',
          ge: '\u2265',
          gE: '\u2267',
          gEl: '\u2A8C',
          gel: '\u22DB',
          geq: '\u2265',
          geqq: '\u2267',
          geqslant: '\u2A7E',
          gescc: '\u2AA9',
          ges: '\u2A7E',
          gesdot: '\u2A80',
          gesdoto: '\u2A82',
          gesdotol: '\u2A84',
          gesl: '\u22DB\uFE00',
          gesles: '\u2A94',
          Gfr: '\u{1D50A}',
          gfr: '\u{1D524}',
          gg: '\u226B',
          Gg: '\u22D9',
          ggg: '\u22D9',
          gimel: '\u2137',
          GJcy: '\u0403',
          gjcy: '\u0453',
          gla: '\u2AA5',
          gl: '\u2277',
          glE: '\u2A92',
          glj: '\u2AA4',
          gnap: '\u2A8A',
          gnapprox: '\u2A8A',
          gne: '\u2A88',
          gnE: '\u2269',
          gneq: '\u2A88',
          gneqq: '\u2269',
          gnsim: '\u22E7',
          Gopf: '\u{1D53E}',
          gopf: '\u{1D558}',
          grave: '`',
          GreaterEqual: '\u2265',
          GreaterEqualLess: '\u22DB',
          GreaterFullEqual: '\u2267',
          GreaterGreater: '\u2AA2',
          GreaterLess: '\u2277',
          GreaterSlantEqual: '\u2A7E',
          GreaterTilde: '\u2273',
          Gscr: '\u{1D4A2}',
          gscr: '\u210A',
          gsim: '\u2273',
          gsime: '\u2A8E',
          gsiml: '\u2A90',
          gtcc: '\u2AA7',
          gtcir: '\u2A7A',
          gt: '>',
          GT: '>',
          Gt: '\u226B',
          gtdot: '\u22D7',
          gtlPar: '\u2995',
          gtquest: '\u2A7C',
          gtrapprox: '\u2A86',
          gtrarr: '\u2978',
          gtrdot: '\u22D7',
          gtreqless: '\u22DB',
          gtreqqless: '\u2A8C',
          gtrless: '\u2277',
          gtrsim: '\u2273',
          gvertneqq: '\u2269\uFE00',
          gvnE: '\u2269\uFE00',
          Hacek: '\u02C7',
          hairsp: '\u200A',
          half: '\xBD',
          hamilt: '\u210B',
          HARDcy: '\u042A',
          hardcy: '\u044A',
          harrcir: '\u2948',
          harr: '\u2194',
          hArr: '\u21D4',
          harrw: '\u21AD',
          Hat: '^',
          hbar: '\u210F',
          Hcirc: '\u0124',
          hcirc: '\u0125',
          hearts: '\u2665',
          heartsuit: '\u2665',
          hellip: '\u2026',
          hercon: '\u22B9',
          hfr: '\u{1D525}',
          Hfr: '\u210C',
          HilbertSpace: '\u210B',
          hksearow: '\u2925',
          hkswarow: '\u2926',
          hoarr: '\u21FF',
          homtht: '\u223B',
          hookleftarrow: '\u21A9',
          hookrightarrow: '\u21AA',
          hopf: '\u{1D559}',
          Hopf: '\u210D',
          horbar: '\u2015',
          HorizontalLine: '\u2500',
          hscr: '\u{1D4BD}',
          Hscr: '\u210B',
          hslash: '\u210F',
          Hstrok: '\u0126',
          hstrok: '\u0127',
          HumpDownHump: '\u224E',
          HumpEqual: '\u224F',
          hybull: '\u2043',
          hyphen: '\u2010',
          Iacute: '\xCD',
          iacute: '\xED',
          ic: '\u2063',
          Icirc: '\xCE',
          icirc: '\xEE',
          Icy: '\u0418',
          icy: '\u0438',
          Idot: '\u0130',
          IEcy: '\u0415',
          iecy: '\u0435',
          iexcl: '\xA1',
          iff: '\u21D4',
          ifr: '\u{1D526}',
          Ifr: '\u2111',
          Igrave: '\xCC',
          igrave: '\xEC',
          ii: '\u2148',
          iiiint: '\u2A0C',
          iiint: '\u222D',
          iinfin: '\u29DC',
          iiota: '\u2129',
          IJlig: '\u0132',
          ijlig: '\u0133',
          Imacr: '\u012A',
          imacr: '\u012B',
          image: '\u2111',
          ImaginaryI: '\u2148',
          imagline: '\u2110',
          imagpart: '\u2111',
          imath: '\u0131',
          Im: '\u2111',
          imof: '\u22B7',
          imped: '\u01B5',
          Implies: '\u21D2',
          incare: '\u2105',
          in: '\u2208',
          infin: '\u221E',
          infintie: '\u29DD',
          inodot: '\u0131',
          intcal: '\u22BA',
          int: '\u222B',
          Int: '\u222C',
          integers: '\u2124',
          Integral: '\u222B',
          intercal: '\u22BA',
          Intersection: '\u22C2',
          intlarhk: '\u2A17',
          intprod: '\u2A3C',
          InvisibleComma: '\u2063',
          InvisibleTimes: '\u2062',
          IOcy: '\u0401',
          iocy: '\u0451',
          Iogon: '\u012E',
          iogon: '\u012F',
          Iopf: '\u{1D540}',
          iopf: '\u{1D55A}',
          Iota: '\u0399',
          iota: '\u03B9',
          iprod: '\u2A3C',
          iquest: '\xBF',
          iscr: '\u{1D4BE}',
          Iscr: '\u2110',
          isin: '\u2208',
          isindot: '\u22F5',
          isinE: '\u22F9',
          isins: '\u22F4',
          isinsv: '\u22F3',
          isinv: '\u2208',
          it: '\u2062',
          Itilde: '\u0128',
          itilde: '\u0129',
          Iukcy: '\u0406',
          iukcy: '\u0456',
          Iuml: '\xCF',
          iuml: '\xEF',
          Jcirc: '\u0134',
          jcirc: '\u0135',
          Jcy: '\u0419',
          jcy: '\u0439',
          Jfr: '\u{1D50D}',
          jfr: '\u{1D527}',
          jmath: '\u0237',
          Jopf: '\u{1D541}',
          jopf: '\u{1D55B}',
          Jscr: '\u{1D4A5}',
          jscr: '\u{1D4BF}',
          Jsercy: '\u0408',
          jsercy: '\u0458',
          Jukcy: '\u0404',
          jukcy: '\u0454',
          Kappa: '\u039A',
          kappa: '\u03BA',
          kappav: '\u03F0',
          Kcedil: '\u0136',
          kcedil: '\u0137',
          Kcy: '\u041A',
          kcy: '\u043A',
          Kfr: '\u{1D50E}',
          kfr: '\u{1D528}',
          kgreen: '\u0138',
          KHcy: '\u0425',
          khcy: '\u0445',
          KJcy: '\u040C',
          kjcy: '\u045C',
          Kopf: '\u{1D542}',
          kopf: '\u{1D55C}',
          Kscr: '\u{1D4A6}',
          kscr: '\u{1D4C0}',
          lAarr: '\u21DA',
          Lacute: '\u0139',
          lacute: '\u013A',
          laemptyv: '\u29B4',
          lagran: '\u2112',
          Lambda: '\u039B',
          lambda: '\u03BB',
          lang: '\u27E8',
          Lang: '\u27EA',
          langd: '\u2991',
          langle: '\u27E8',
          lap: '\u2A85',
          Laplacetrf: '\u2112',
          laquo: '\xAB',
          larrb: '\u21E4',
          larrbfs: '\u291F',
          larr: '\u2190',
          Larr: '\u219E',
          lArr: '\u21D0',
          larrfs: '\u291D',
          larrhk: '\u21A9',
          larrlp: '\u21AB',
          larrpl: '\u2939',
          larrsim: '\u2973',
          larrtl: '\u21A2',
          latail: '\u2919',
          lAtail: '\u291B',
          lat: '\u2AAB',
          late: '\u2AAD',
          lates: '\u2AAD\uFE00',
          lbarr: '\u290C',
          lBarr: '\u290E',
          lbbrk: '\u2772',
          lbrace: '{',
          lbrack: '[',
          lbrke: '\u298B',
          lbrksld: '\u298F',
          lbrkslu: '\u298D',
          Lcaron: '\u013D',
          lcaron: '\u013E',
          Lcedil: '\u013B',
          lcedil: '\u013C',
          lceil: '\u2308',
          lcub: '{',
          Lcy: '\u041B',
          lcy: '\u043B',
          ldca: '\u2936',
          ldquo: '\u201C',
          ldquor: '\u201E',
          ldrdhar: '\u2967',
          ldrushar: '\u294B',
          ldsh: '\u21B2',
          le: '\u2264',
          lE: '\u2266',
          LeftAngleBracket: '\u27E8',
          LeftArrowBar: '\u21E4',
          leftarrow: '\u2190',
          LeftArrow: '\u2190',
          Leftarrow: '\u21D0',
          LeftArrowRightArrow: '\u21C6',
          leftarrowtail: '\u21A2',
          LeftCeiling: '\u2308',
          LeftDoubleBracket: '\u27E6',
          LeftDownTeeVector: '\u2961',
          LeftDownVectorBar: '\u2959',
          LeftDownVector: '\u21C3',
          LeftFloor: '\u230A',
          leftharpoondown: '\u21BD',
          leftharpoonup: '\u21BC',
          leftleftarrows: '\u21C7',
          leftrightarrow: '\u2194',
          LeftRightArrow: '\u2194',
          Leftrightarrow: '\u21D4',
          leftrightarrows: '\u21C6',
          leftrightharpoons: '\u21CB',
          leftrightsquigarrow: '\u21AD',
          LeftRightVector: '\u294E',
          LeftTeeArrow: '\u21A4',
          LeftTee: '\u22A3',
          LeftTeeVector: '\u295A',
          leftthreetimes: '\u22CB',
          LeftTriangleBar: '\u29CF',
          LeftTriangle: '\u22B2',
          LeftTriangleEqual: '\u22B4',
          LeftUpDownVector: '\u2951',
          LeftUpTeeVector: '\u2960',
          LeftUpVectorBar: '\u2958',
          LeftUpVector: '\u21BF',
          LeftVectorBar: '\u2952',
          LeftVector: '\u21BC',
          lEg: '\u2A8B',
          leg: '\u22DA',
          leq: '\u2264',
          leqq: '\u2266',
          leqslant: '\u2A7D',
          lescc: '\u2AA8',
          les: '\u2A7D',
          lesdot: '\u2A7F',
          lesdoto: '\u2A81',
          lesdotor: '\u2A83',
          lesg: '\u22DA\uFE00',
          lesges: '\u2A93',
          lessapprox: '\u2A85',
          lessdot: '\u22D6',
          lesseqgtr: '\u22DA',
          lesseqqgtr: '\u2A8B',
          LessEqualGreater: '\u22DA',
          LessFullEqual: '\u2266',
          LessGreater: '\u2276',
          lessgtr: '\u2276',
          LessLess: '\u2AA1',
          lesssim: '\u2272',
          LessSlantEqual: '\u2A7D',
          LessTilde: '\u2272',
          lfisht: '\u297C',
          lfloor: '\u230A',
          Lfr: '\u{1D50F}',
          lfr: '\u{1D529}',
          lg: '\u2276',
          lgE: '\u2A91',
          lHar: '\u2962',
          lhard: '\u21BD',
          lharu: '\u21BC',
          lharul: '\u296A',
          lhblk: '\u2584',
          LJcy: '\u0409',
          ljcy: '\u0459',
          llarr: '\u21C7',
          ll: '\u226A',
          Ll: '\u22D8',
          llcorner: '\u231E',
          Lleftarrow: '\u21DA',
          llhard: '\u296B',
          lltri: '\u25FA',
          Lmidot: '\u013F',
          lmidot: '\u0140',
          lmoustache: '\u23B0',
          lmoust: '\u23B0',
          lnap: '\u2A89',
          lnapprox: '\u2A89',
          lne: '\u2A87',
          lnE: '\u2268',
          lneq: '\u2A87',
          lneqq: '\u2268',
          lnsim: '\u22E6',
          loang: '\u27EC',
          loarr: '\u21FD',
          lobrk: '\u27E6',
          longleftarrow: '\u27F5',
          LongLeftArrow: '\u27F5',
          Longleftarrow: '\u27F8',
          longleftrightarrow: '\u27F7',
          LongLeftRightArrow: '\u27F7',
          Longleftrightarrow: '\u27FA',
          longmapsto: '\u27FC',
          longrightarrow: '\u27F6',
          LongRightArrow: '\u27F6',
          Longrightarrow: '\u27F9',
          looparrowleft: '\u21AB',
          looparrowright: '\u21AC',
          lopar: '\u2985',
          Lopf: '\u{1D543}',
          lopf: '\u{1D55D}',
          loplus: '\u2A2D',
          lotimes: '\u2A34',
          lowast: '\u2217',
          lowbar: '_',
          LowerLeftArrow: '\u2199',
          LowerRightArrow: '\u2198',
          loz: '\u25CA',
          lozenge: '\u25CA',
          lozf: '\u29EB',
          lpar: '(',
          lparlt: '\u2993',
          lrarr: '\u21C6',
          lrcorner: '\u231F',
          lrhar: '\u21CB',
          lrhard: '\u296D',
          lrm: '\u200E',
          lrtri: '\u22BF',
          lsaquo: '\u2039',
          lscr: '\u{1D4C1}',
          Lscr: '\u2112',
          lsh: '\u21B0',
          Lsh: '\u21B0',
          lsim: '\u2272',
          lsime: '\u2A8D',
          lsimg: '\u2A8F',
          lsqb: '[',
          lsquo: '\u2018',
          lsquor: '\u201A',
          Lstrok: '\u0141',
          lstrok: '\u0142',
          ltcc: '\u2AA6',
          ltcir: '\u2A79',
          lt: '<',
          LT: '<',
          Lt: '\u226A',
          ltdot: '\u22D6',
          lthree: '\u22CB',
          ltimes: '\u22C9',
          ltlarr: '\u2976',
          ltquest: '\u2A7B',
          ltri: '\u25C3',
          ltrie: '\u22B4',
          ltrif: '\u25C2',
          ltrPar: '\u2996',
          lurdshar: '\u294A',
          luruhar: '\u2966',
          lvertneqq: '\u2268\uFE00',
          lvnE: '\u2268\uFE00',
          macr: '\xAF',
          male: '\u2642',
          malt: '\u2720',
          maltese: '\u2720',
          Map: '\u2905',
          map: '\u21A6',
          mapsto: '\u21A6',
          mapstodown: '\u21A7',
          mapstoleft: '\u21A4',
          mapstoup: '\u21A5',
          marker: '\u25AE',
          mcomma: '\u2A29',
          Mcy: '\u041C',
          mcy: '\u043C',
          mdash: '\u2014',
          mDDot: '\u223A',
          measuredangle: '\u2221',
          MediumSpace: '\u205F',
          Mellintrf: '\u2133',
          Mfr: '\u{1D510}',
          mfr: '\u{1D52A}',
          mho: '\u2127',
          micro: '\xB5',
          midast: '*',
          midcir: '\u2AF0',
          mid: '\u2223',
          middot: '\xB7',
          minusb: '\u229F',
          minus: '\u2212',
          minusd: '\u2238',
          minusdu: '\u2A2A',
          MinusPlus: '\u2213',
          mlcp: '\u2ADB',
          mldr: '\u2026',
          mnplus: '\u2213',
          models: '\u22A7',
          Mopf: '\u{1D544}',
          mopf: '\u{1D55E}',
          mp: '\u2213',
          mscr: '\u{1D4C2}',
          Mscr: '\u2133',
          mstpos: '\u223E',
          Mu: '\u039C',
          mu: '\u03BC',
          multimap: '\u22B8',
          mumap: '\u22B8',
          nabla: '\u2207',
          Nacute: '\u0143',
          nacute: '\u0144',
          nang: '\u2220\u20D2',
          nap: '\u2249',
          napE: '\u2A70\u0338',
          napid: '\u224B\u0338',
          napos: '\u0149',
          napprox: '\u2249',
          natural: '\u266E',
          naturals: '\u2115',
          natur: '\u266E',
          nbsp: '\xA0',
          nbump: '\u224E\u0338',
          nbumpe: '\u224F\u0338',
          ncap: '\u2A43',
          Ncaron: '\u0147',
          ncaron: '\u0148',
          Ncedil: '\u0145',
          ncedil: '\u0146',
          ncong: '\u2247',
          ncongdot: '\u2A6D\u0338',
          ncup: '\u2A42',
          Ncy: '\u041D',
          ncy: '\u043D',
          ndash: '\u2013',
          nearhk: '\u2924',
          nearr: '\u2197',
          neArr: '\u21D7',
          nearrow: '\u2197',
          ne: '\u2260',
          nedot: '\u2250\u0338',
          NegativeMediumSpace: '\u200B',
          NegativeThickSpace: '\u200B',
          NegativeThinSpace: '\u200B',
          NegativeVeryThinSpace: '\u200B',
          nequiv: '\u2262',
          nesear: '\u2928',
          nesim: '\u2242\u0338',
          NestedGreaterGreater: '\u226B',
          NestedLessLess: '\u226A',
          NewLine: `
`,
          nexist: '\u2204',
          nexists: '\u2204',
          Nfr: '\u{1D511}',
          nfr: '\u{1D52B}',
          ngE: '\u2267\u0338',
          nge: '\u2271',
          ngeq: '\u2271',
          ngeqq: '\u2267\u0338',
          ngeqslant: '\u2A7E\u0338',
          nges: '\u2A7E\u0338',
          nGg: '\u22D9\u0338',
          ngsim: '\u2275',
          nGt: '\u226B\u20D2',
          ngt: '\u226F',
          ngtr: '\u226F',
          nGtv: '\u226B\u0338',
          nharr: '\u21AE',
          nhArr: '\u21CE',
          nhpar: '\u2AF2',
          ni: '\u220B',
          nis: '\u22FC',
          nisd: '\u22FA',
          niv: '\u220B',
          NJcy: '\u040A',
          njcy: '\u045A',
          nlarr: '\u219A',
          nlArr: '\u21CD',
          nldr: '\u2025',
          nlE: '\u2266\u0338',
          nle: '\u2270',
          nleftarrow: '\u219A',
          nLeftarrow: '\u21CD',
          nleftrightarrow: '\u21AE',
          nLeftrightarrow: '\u21CE',
          nleq: '\u2270',
          nleqq: '\u2266\u0338',
          nleqslant: '\u2A7D\u0338',
          nles: '\u2A7D\u0338',
          nless: '\u226E',
          nLl: '\u22D8\u0338',
          nlsim: '\u2274',
          nLt: '\u226A\u20D2',
          nlt: '\u226E',
          nltri: '\u22EA',
          nltrie: '\u22EC',
          nLtv: '\u226A\u0338',
          nmid: '\u2224',
          NoBreak: '\u2060',
          NonBreakingSpace: '\xA0',
          nopf: '\u{1D55F}',
          Nopf: '\u2115',
          Not: '\u2AEC',
          not: '\xAC',
          NotCongruent: '\u2262',
          NotCupCap: '\u226D',
          NotDoubleVerticalBar: '\u2226',
          NotElement: '\u2209',
          NotEqual: '\u2260',
          NotEqualTilde: '\u2242\u0338',
          NotExists: '\u2204',
          NotGreater: '\u226F',
          NotGreaterEqual: '\u2271',
          NotGreaterFullEqual: '\u2267\u0338',
          NotGreaterGreater: '\u226B\u0338',
          NotGreaterLess: '\u2279',
          NotGreaterSlantEqual: '\u2A7E\u0338',
          NotGreaterTilde: '\u2275',
          NotHumpDownHump: '\u224E\u0338',
          NotHumpEqual: '\u224F\u0338',
          notin: '\u2209',
          notindot: '\u22F5\u0338',
          notinE: '\u22F9\u0338',
          notinva: '\u2209',
          notinvb: '\u22F7',
          notinvc: '\u22F6',
          NotLeftTriangleBar: '\u29CF\u0338',
          NotLeftTriangle: '\u22EA',
          NotLeftTriangleEqual: '\u22EC',
          NotLess: '\u226E',
          NotLessEqual: '\u2270',
          NotLessGreater: '\u2278',
          NotLessLess: '\u226A\u0338',
          NotLessSlantEqual: '\u2A7D\u0338',
          NotLessTilde: '\u2274',
          NotNestedGreaterGreater: '\u2AA2\u0338',
          NotNestedLessLess: '\u2AA1\u0338',
          notni: '\u220C',
          notniva: '\u220C',
          notnivb: '\u22FE',
          notnivc: '\u22FD',
          NotPrecedes: '\u2280',
          NotPrecedesEqual: '\u2AAF\u0338',
          NotPrecedesSlantEqual: '\u22E0',
          NotReverseElement: '\u220C',
          NotRightTriangleBar: '\u29D0\u0338',
          NotRightTriangle: '\u22EB',
          NotRightTriangleEqual: '\u22ED',
          NotSquareSubset: '\u228F\u0338',
          NotSquareSubsetEqual: '\u22E2',
          NotSquareSuperset: '\u2290\u0338',
          NotSquareSupersetEqual: '\u22E3',
          NotSubset: '\u2282\u20D2',
          NotSubsetEqual: '\u2288',
          NotSucceeds: '\u2281',
          NotSucceedsEqual: '\u2AB0\u0338',
          NotSucceedsSlantEqual: '\u22E1',
          NotSucceedsTilde: '\u227F\u0338',
          NotSuperset: '\u2283\u20D2',
          NotSupersetEqual: '\u2289',
          NotTilde: '\u2241',
          NotTildeEqual: '\u2244',
          NotTildeFullEqual: '\u2247',
          NotTildeTilde: '\u2249',
          NotVerticalBar: '\u2224',
          nparallel: '\u2226',
          npar: '\u2226',
          nparsl: '\u2AFD\u20E5',
          npart: '\u2202\u0338',
          npolint: '\u2A14',
          npr: '\u2280',
          nprcue: '\u22E0',
          nprec: '\u2280',
          npreceq: '\u2AAF\u0338',
          npre: '\u2AAF\u0338',
          nrarrc: '\u2933\u0338',
          nrarr: '\u219B',
          nrArr: '\u21CF',
          nrarrw: '\u219D\u0338',
          nrightarrow: '\u219B',
          nRightarrow: '\u21CF',
          nrtri: '\u22EB',
          nrtrie: '\u22ED',
          nsc: '\u2281',
          nsccue: '\u22E1',
          nsce: '\u2AB0\u0338',
          Nscr: '\u{1D4A9}',
          nscr: '\u{1D4C3}',
          nshortmid: '\u2224',
          nshortparallel: '\u2226',
          nsim: '\u2241',
          nsime: '\u2244',
          nsimeq: '\u2244',
          nsmid: '\u2224',
          nspar: '\u2226',
          nsqsube: '\u22E2',
          nsqsupe: '\u22E3',
          nsub: '\u2284',
          nsubE: '\u2AC5\u0338',
          nsube: '\u2288',
          nsubset: '\u2282\u20D2',
          nsubseteq: '\u2288',
          nsubseteqq: '\u2AC5\u0338',
          nsucc: '\u2281',
          nsucceq: '\u2AB0\u0338',
          nsup: '\u2285',
          nsupE: '\u2AC6\u0338',
          nsupe: '\u2289',
          nsupset: '\u2283\u20D2',
          nsupseteq: '\u2289',
          nsupseteqq: '\u2AC6\u0338',
          ntgl: '\u2279',
          Ntilde: '\xD1',
          ntilde: '\xF1',
          ntlg: '\u2278',
          ntriangleleft: '\u22EA',
          ntrianglelefteq: '\u22EC',
          ntriangleright: '\u22EB',
          ntrianglerighteq: '\u22ED',
          Nu: '\u039D',
          nu: '\u03BD',
          num: '#',
          numero: '\u2116',
          numsp: '\u2007',
          nvap: '\u224D\u20D2',
          nvdash: '\u22AC',
          nvDash: '\u22AD',
          nVdash: '\u22AE',
          nVDash: '\u22AF',
          nvge: '\u2265\u20D2',
          nvgt: '>\u20D2',
          nvHarr: '\u2904',
          nvinfin: '\u29DE',
          nvlArr: '\u2902',
          nvle: '\u2264\u20D2',
          nvlt: '<\u20D2',
          nvltrie: '\u22B4\u20D2',
          nvrArr: '\u2903',
          nvrtrie: '\u22B5\u20D2',
          nvsim: '\u223C\u20D2',
          nwarhk: '\u2923',
          nwarr: '\u2196',
          nwArr: '\u21D6',
          nwarrow: '\u2196',
          nwnear: '\u2927',
          Oacute: '\xD3',
          oacute: '\xF3',
          oast: '\u229B',
          Ocirc: '\xD4',
          ocirc: '\xF4',
          ocir: '\u229A',
          Ocy: '\u041E',
          ocy: '\u043E',
          odash: '\u229D',
          Odblac: '\u0150',
          odblac: '\u0151',
          odiv: '\u2A38',
          odot: '\u2299',
          odsold: '\u29BC',
          OElig: '\u0152',
          oelig: '\u0153',
          ofcir: '\u29BF',
          Ofr: '\u{1D512}',
          ofr: '\u{1D52C}',
          ogon: '\u02DB',
          Ograve: '\xD2',
          ograve: '\xF2',
          ogt: '\u29C1',
          ohbar: '\u29B5',
          ohm: '\u03A9',
          oint: '\u222E',
          olarr: '\u21BA',
          olcir: '\u29BE',
          olcross: '\u29BB',
          oline: '\u203E',
          olt: '\u29C0',
          Omacr: '\u014C',
          omacr: '\u014D',
          Omega: '\u03A9',
          omega: '\u03C9',
          Omicron: '\u039F',
          omicron: '\u03BF',
          omid: '\u29B6',
          ominus: '\u2296',
          Oopf: '\u{1D546}',
          oopf: '\u{1D560}',
          opar: '\u29B7',
          OpenCurlyDoubleQuote: '\u201C',
          OpenCurlyQuote: '\u2018',
          operp: '\u29B9',
          oplus: '\u2295',
          orarr: '\u21BB',
          Or: '\u2A54',
          or: '\u2228',
          ord: '\u2A5D',
          order: '\u2134',
          orderof: '\u2134',
          ordf: '\xAA',
          ordm: '\xBA',
          origof: '\u22B6',
          oror: '\u2A56',
          orslope: '\u2A57',
          orv: '\u2A5B',
          oS: '\u24C8',
          Oscr: '\u{1D4AA}',
          oscr: '\u2134',
          Oslash: '\xD8',
          oslash: '\xF8',
          osol: '\u2298',
          Otilde: '\xD5',
          otilde: '\xF5',
          otimesas: '\u2A36',
          Otimes: '\u2A37',
          otimes: '\u2297',
          Ouml: '\xD6',
          ouml: '\xF6',
          ovbar: '\u233D',
          OverBar: '\u203E',
          OverBrace: '\u23DE',
          OverBracket: '\u23B4',
          OverParenthesis: '\u23DC',
          para: '\xB6',
          parallel: '\u2225',
          par: '\u2225',
          parsim: '\u2AF3',
          parsl: '\u2AFD',
          part: '\u2202',
          PartialD: '\u2202',
          Pcy: '\u041F',
          pcy: '\u043F',
          percnt: '%',
          period: '.',
          permil: '\u2030',
          perp: '\u22A5',
          pertenk: '\u2031',
          Pfr: '\u{1D513}',
          pfr: '\u{1D52D}',
          Phi: '\u03A6',
          phi: '\u03C6',
          phiv: '\u03D5',
          phmmat: '\u2133',
          phone: '\u260E',
          Pi: '\u03A0',
          pi: '\u03C0',
          pitchfork: '\u22D4',
          piv: '\u03D6',
          planck: '\u210F',
          planckh: '\u210E',
          plankv: '\u210F',
          plusacir: '\u2A23',
          plusb: '\u229E',
          pluscir: '\u2A22',
          plus: '+',
          plusdo: '\u2214',
          plusdu: '\u2A25',
          pluse: '\u2A72',
          PlusMinus: '\xB1',
          plusmn: '\xB1',
          plussim: '\u2A26',
          plustwo: '\u2A27',
          pm: '\xB1',
          Poincareplane: '\u210C',
          pointint: '\u2A15',
          popf: '\u{1D561}',
          Popf: '\u2119',
          pound: '\xA3',
          prap: '\u2AB7',
          Pr: '\u2ABB',
          pr: '\u227A',
          prcue: '\u227C',
          precapprox: '\u2AB7',
          prec: '\u227A',
          preccurlyeq: '\u227C',
          Precedes: '\u227A',
          PrecedesEqual: '\u2AAF',
          PrecedesSlantEqual: '\u227C',
          PrecedesTilde: '\u227E',
          preceq: '\u2AAF',
          precnapprox: '\u2AB9',
          precneqq: '\u2AB5',
          precnsim: '\u22E8',
          pre: '\u2AAF',
          prE: '\u2AB3',
          precsim: '\u227E',
          prime: '\u2032',
          Prime: '\u2033',
          primes: '\u2119',
          prnap: '\u2AB9',
          prnE: '\u2AB5',
          prnsim: '\u22E8',
          prod: '\u220F',
          Product: '\u220F',
          profalar: '\u232E',
          profline: '\u2312',
          profsurf: '\u2313',
          prop: '\u221D',
          Proportional: '\u221D',
          Proportion: '\u2237',
          propto: '\u221D',
          prsim: '\u227E',
          prurel: '\u22B0',
          Pscr: '\u{1D4AB}',
          pscr: '\u{1D4C5}',
          Psi: '\u03A8',
          psi: '\u03C8',
          puncsp: '\u2008',
          Qfr: '\u{1D514}',
          qfr: '\u{1D52E}',
          qint: '\u2A0C',
          qopf: '\u{1D562}',
          Qopf: '\u211A',
          qprime: '\u2057',
          Qscr: '\u{1D4AC}',
          qscr: '\u{1D4C6}',
          quaternions: '\u210D',
          quatint: '\u2A16',
          quest: '?',
          questeq: '\u225F',
          quot: '"',
          QUOT: '"',
          rAarr: '\u21DB',
          race: '\u223D\u0331',
          Racute: '\u0154',
          racute: '\u0155',
          radic: '\u221A',
          raemptyv: '\u29B3',
          rang: '\u27E9',
          Rang: '\u27EB',
          rangd: '\u2992',
          range: '\u29A5',
          rangle: '\u27E9',
          raquo: '\xBB',
          rarrap: '\u2975',
          rarrb: '\u21E5',
          rarrbfs: '\u2920',
          rarrc: '\u2933',
          rarr: '\u2192',
          Rarr: '\u21A0',
          rArr: '\u21D2',
          rarrfs: '\u291E',
          rarrhk: '\u21AA',
          rarrlp: '\u21AC',
          rarrpl: '\u2945',
          rarrsim: '\u2974',
          Rarrtl: '\u2916',
          rarrtl: '\u21A3',
          rarrw: '\u219D',
          ratail: '\u291A',
          rAtail: '\u291C',
          ratio: '\u2236',
          rationals: '\u211A',
          rbarr: '\u290D',
          rBarr: '\u290F',
          RBarr: '\u2910',
          rbbrk: '\u2773',
          rbrace: '}',
          rbrack: ']',
          rbrke: '\u298C',
          rbrksld: '\u298E',
          rbrkslu: '\u2990',
          Rcaron: '\u0158',
          rcaron: '\u0159',
          Rcedil: '\u0156',
          rcedil: '\u0157',
          rceil: '\u2309',
          rcub: '}',
          Rcy: '\u0420',
          rcy: '\u0440',
          rdca: '\u2937',
          rdldhar: '\u2969',
          rdquo: '\u201D',
          rdquor: '\u201D',
          rdsh: '\u21B3',
          real: '\u211C',
          realine: '\u211B',
          realpart: '\u211C',
          reals: '\u211D',
          Re: '\u211C',
          rect: '\u25AD',
          reg: '\xAE',
          REG: '\xAE',
          ReverseElement: '\u220B',
          ReverseEquilibrium: '\u21CB',
          ReverseUpEquilibrium: '\u296F',
          rfisht: '\u297D',
          rfloor: '\u230B',
          rfr: '\u{1D52F}',
          Rfr: '\u211C',
          rHar: '\u2964',
          rhard: '\u21C1',
          rharu: '\u21C0',
          rharul: '\u296C',
          Rho: '\u03A1',
          rho: '\u03C1',
          rhov: '\u03F1',
          RightAngleBracket: '\u27E9',
          RightArrowBar: '\u21E5',
          rightarrow: '\u2192',
          RightArrow: '\u2192',
          Rightarrow: '\u21D2',
          RightArrowLeftArrow: '\u21C4',
          rightarrowtail: '\u21A3',
          RightCeiling: '\u2309',
          RightDoubleBracket: '\u27E7',
          RightDownTeeVector: '\u295D',
          RightDownVectorBar: '\u2955',
          RightDownVector: '\u21C2',
          RightFloor: '\u230B',
          rightharpoondown: '\u21C1',
          rightharpoonup: '\u21C0',
          rightleftarrows: '\u21C4',
          rightleftharpoons: '\u21CC',
          rightrightarrows: '\u21C9',
          rightsquigarrow: '\u219D',
          RightTeeArrow: '\u21A6',
          RightTee: '\u22A2',
          RightTeeVector: '\u295B',
          rightthreetimes: '\u22CC',
          RightTriangleBar: '\u29D0',
          RightTriangle: '\u22B3',
          RightTriangleEqual: '\u22B5',
          RightUpDownVector: '\u294F',
          RightUpTeeVector: '\u295C',
          RightUpVectorBar: '\u2954',
          RightUpVector: '\u21BE',
          RightVectorBar: '\u2953',
          RightVector: '\u21C0',
          ring: '\u02DA',
          risingdotseq: '\u2253',
          rlarr: '\u21C4',
          rlhar: '\u21CC',
          rlm: '\u200F',
          rmoustache: '\u23B1',
          rmoust: '\u23B1',
          rnmid: '\u2AEE',
          roang: '\u27ED',
          roarr: '\u21FE',
          robrk: '\u27E7',
          ropar: '\u2986',
          ropf: '\u{1D563}',
          Ropf: '\u211D',
          roplus: '\u2A2E',
          rotimes: '\u2A35',
          RoundImplies: '\u2970',
          rpar: ')',
          rpargt: '\u2994',
          rppolint: '\u2A12',
          rrarr: '\u21C9',
          Rrightarrow: '\u21DB',
          rsaquo: '\u203A',
          rscr: '\u{1D4C7}',
          Rscr: '\u211B',
          rsh: '\u21B1',
          Rsh: '\u21B1',
          rsqb: ']',
          rsquo: '\u2019',
          rsquor: '\u2019',
          rthree: '\u22CC',
          rtimes: '\u22CA',
          rtri: '\u25B9',
          rtrie: '\u22B5',
          rtrif: '\u25B8',
          rtriltri: '\u29CE',
          RuleDelayed: '\u29F4',
          ruluhar: '\u2968',
          rx: '\u211E',
          Sacute: '\u015A',
          sacute: '\u015B',
          sbquo: '\u201A',
          scap: '\u2AB8',
          Scaron: '\u0160',
          scaron: '\u0161',
          Sc: '\u2ABC',
          sc: '\u227B',
          sccue: '\u227D',
          sce: '\u2AB0',
          scE: '\u2AB4',
          Scedil: '\u015E',
          scedil: '\u015F',
          Scirc: '\u015C',
          scirc: '\u015D',
          scnap: '\u2ABA',
          scnE: '\u2AB6',
          scnsim: '\u22E9',
          scpolint: '\u2A13',
          scsim: '\u227F',
          Scy: '\u0421',
          scy: '\u0441',
          sdotb: '\u22A1',
          sdot: '\u22C5',
          sdote: '\u2A66',
          searhk: '\u2925',
          searr: '\u2198',
          seArr: '\u21D8',
          searrow: '\u2198',
          sect: '\xA7',
          semi: ';',
          seswar: '\u2929',
          setminus: '\u2216',
          setmn: '\u2216',
          sext: '\u2736',
          Sfr: '\u{1D516}',
          sfr: '\u{1D530}',
          sfrown: '\u2322',
          sharp: '\u266F',
          SHCHcy: '\u0429',
          shchcy: '\u0449',
          SHcy: '\u0428',
          shcy: '\u0448',
          ShortDownArrow: '\u2193',
          ShortLeftArrow: '\u2190',
          shortmid: '\u2223',
          shortparallel: '\u2225',
          ShortRightArrow: '\u2192',
          ShortUpArrow: '\u2191',
          shy: '\xAD',
          Sigma: '\u03A3',
          sigma: '\u03C3',
          sigmaf: '\u03C2',
          sigmav: '\u03C2',
          sim: '\u223C',
          simdot: '\u2A6A',
          sime: '\u2243',
          simeq: '\u2243',
          simg: '\u2A9E',
          simgE: '\u2AA0',
          siml: '\u2A9D',
          simlE: '\u2A9F',
          simne: '\u2246',
          simplus: '\u2A24',
          simrarr: '\u2972',
          slarr: '\u2190',
          SmallCircle: '\u2218',
          smallsetminus: '\u2216',
          smashp: '\u2A33',
          smeparsl: '\u29E4',
          smid: '\u2223',
          smile: '\u2323',
          smt: '\u2AAA',
          smte: '\u2AAC',
          smtes: '\u2AAC\uFE00',
          SOFTcy: '\u042C',
          softcy: '\u044C',
          solbar: '\u233F',
          solb: '\u29C4',
          sol: '/',
          Sopf: '\u{1D54A}',
          sopf: '\u{1D564}',
          spades: '\u2660',
          spadesuit: '\u2660',
          spar: '\u2225',
          sqcap: '\u2293',
          sqcaps: '\u2293\uFE00',
          sqcup: '\u2294',
          sqcups: '\u2294\uFE00',
          Sqrt: '\u221A',
          sqsub: '\u228F',
          sqsube: '\u2291',
          sqsubset: '\u228F',
          sqsubseteq: '\u2291',
          sqsup: '\u2290',
          sqsupe: '\u2292',
          sqsupset: '\u2290',
          sqsupseteq: '\u2292',
          square: '\u25A1',
          Square: '\u25A1',
          SquareIntersection: '\u2293',
          SquareSubset: '\u228F',
          SquareSubsetEqual: '\u2291',
          SquareSuperset: '\u2290',
          SquareSupersetEqual: '\u2292',
          SquareUnion: '\u2294',
          squarf: '\u25AA',
          squ: '\u25A1',
          squf: '\u25AA',
          srarr: '\u2192',
          Sscr: '\u{1D4AE}',
          sscr: '\u{1D4C8}',
          ssetmn: '\u2216',
          ssmile: '\u2323',
          sstarf: '\u22C6',
          Star: '\u22C6',
          star: '\u2606',
          starf: '\u2605',
          straightepsilon: '\u03F5',
          straightphi: '\u03D5',
          strns: '\xAF',
          sub: '\u2282',
          Sub: '\u22D0',
          subdot: '\u2ABD',
          subE: '\u2AC5',
          sube: '\u2286',
          subedot: '\u2AC3',
          submult: '\u2AC1',
          subnE: '\u2ACB',
          subne: '\u228A',
          subplus: '\u2ABF',
          subrarr: '\u2979',
          subset: '\u2282',
          Subset: '\u22D0',
          subseteq: '\u2286',
          subseteqq: '\u2AC5',
          SubsetEqual: '\u2286',
          subsetneq: '\u228A',
          subsetneqq: '\u2ACB',
          subsim: '\u2AC7',
          subsub: '\u2AD5',
          subsup: '\u2AD3',
          succapprox: '\u2AB8',
          succ: '\u227B',
          succcurlyeq: '\u227D',
          Succeeds: '\u227B',
          SucceedsEqual: '\u2AB0',
          SucceedsSlantEqual: '\u227D',
          SucceedsTilde: '\u227F',
          succeq: '\u2AB0',
          succnapprox: '\u2ABA',
          succneqq: '\u2AB6',
          succnsim: '\u22E9',
          succsim: '\u227F',
          SuchThat: '\u220B',
          sum: '\u2211',
          Sum: '\u2211',
          sung: '\u266A',
          sup1: '\xB9',
          sup2: '\xB2',
          sup3: '\xB3',
          sup: '\u2283',
          Sup: '\u22D1',
          supdot: '\u2ABE',
          supdsub: '\u2AD8',
          supE: '\u2AC6',
          supe: '\u2287',
          supedot: '\u2AC4',
          Superset: '\u2283',
          SupersetEqual: '\u2287',
          suphsol: '\u27C9',
          suphsub: '\u2AD7',
          suplarr: '\u297B',
          supmult: '\u2AC2',
          supnE: '\u2ACC',
          supne: '\u228B',
          supplus: '\u2AC0',
          supset: '\u2283',
          Supset: '\u22D1',
          supseteq: '\u2287',
          supseteqq: '\u2AC6',
          supsetneq: '\u228B',
          supsetneqq: '\u2ACC',
          supsim: '\u2AC8',
          supsub: '\u2AD4',
          supsup: '\u2AD6',
          swarhk: '\u2926',
          swarr: '\u2199',
          swArr: '\u21D9',
          swarrow: '\u2199',
          swnwar: '\u292A',
          szlig: '\xDF',
          Tab: '	',
          target: '\u2316',
          Tau: '\u03A4',
          tau: '\u03C4',
          tbrk: '\u23B4',
          Tcaron: '\u0164',
          tcaron: '\u0165',
          Tcedil: '\u0162',
          tcedil: '\u0163',
          Tcy: '\u0422',
          tcy: '\u0442',
          tdot: '\u20DB',
          telrec: '\u2315',
          Tfr: '\u{1D517}',
          tfr: '\u{1D531}',
          there4: '\u2234',
          therefore: '\u2234',
          Therefore: '\u2234',
          Theta: '\u0398',
          theta: '\u03B8',
          thetasym: '\u03D1',
          thetav: '\u03D1',
          thickapprox: '\u2248',
          thicksim: '\u223C',
          ThickSpace: '\u205F\u200A',
          ThinSpace: '\u2009',
          thinsp: '\u2009',
          thkap: '\u2248',
          thksim: '\u223C',
          THORN: '\xDE',
          thorn: '\xFE',
          tilde: '\u02DC',
          Tilde: '\u223C',
          TildeEqual: '\u2243',
          TildeFullEqual: '\u2245',
          TildeTilde: '\u2248',
          timesbar: '\u2A31',
          timesb: '\u22A0',
          times: '\xD7',
          timesd: '\u2A30',
          tint: '\u222D',
          toea: '\u2928',
          topbot: '\u2336',
          topcir: '\u2AF1',
          top: '\u22A4',
          Topf: '\u{1D54B}',
          topf: '\u{1D565}',
          topfork: '\u2ADA',
          tosa: '\u2929',
          tprime: '\u2034',
          trade: '\u2122',
          TRADE: '\u2122',
          triangle: '\u25B5',
          triangledown: '\u25BF',
          triangleleft: '\u25C3',
          trianglelefteq: '\u22B4',
          triangleq: '\u225C',
          triangleright: '\u25B9',
          trianglerighteq: '\u22B5',
          tridot: '\u25EC',
          trie: '\u225C',
          triminus: '\u2A3A',
          TripleDot: '\u20DB',
          triplus: '\u2A39',
          trisb: '\u29CD',
          tritime: '\u2A3B',
          trpezium: '\u23E2',
          Tscr: '\u{1D4AF}',
          tscr: '\u{1D4C9}',
          TScy: '\u0426',
          tscy: '\u0446',
          TSHcy: '\u040B',
          tshcy: '\u045B',
          Tstrok: '\u0166',
          tstrok: '\u0167',
          twixt: '\u226C',
          twoheadleftarrow: '\u219E',
          twoheadrightarrow: '\u21A0',
          Uacute: '\xDA',
          uacute: '\xFA',
          uarr: '\u2191',
          Uarr: '\u219F',
          uArr: '\u21D1',
          Uarrocir: '\u2949',
          Ubrcy: '\u040E',
          ubrcy: '\u045E',
          Ubreve: '\u016C',
          ubreve: '\u016D',
          Ucirc: '\xDB',
          ucirc: '\xFB',
          Ucy: '\u0423',
          ucy: '\u0443',
          udarr: '\u21C5',
          Udblac: '\u0170',
          udblac: '\u0171',
          udhar: '\u296E',
          ufisht: '\u297E',
          Ufr: '\u{1D518}',
          ufr: '\u{1D532}',
          Ugrave: '\xD9',
          ugrave: '\xF9',
          uHar: '\u2963',
          uharl: '\u21BF',
          uharr: '\u21BE',
          uhblk: '\u2580',
          ulcorn: '\u231C',
          ulcorner: '\u231C',
          ulcrop: '\u230F',
          ultri: '\u25F8',
          Umacr: '\u016A',
          umacr: '\u016B',
          uml: '\xA8',
          UnderBar: '_',
          UnderBrace: '\u23DF',
          UnderBracket: '\u23B5',
          UnderParenthesis: '\u23DD',
          Union: '\u22C3',
          UnionPlus: '\u228E',
          Uogon: '\u0172',
          uogon: '\u0173',
          Uopf: '\u{1D54C}',
          uopf: '\u{1D566}',
          UpArrowBar: '\u2912',
          uparrow: '\u2191',
          UpArrow: '\u2191',
          Uparrow: '\u21D1',
          UpArrowDownArrow: '\u21C5',
          updownarrow: '\u2195',
          UpDownArrow: '\u2195',
          Updownarrow: '\u21D5',
          UpEquilibrium: '\u296E',
          upharpoonleft: '\u21BF',
          upharpoonright: '\u21BE',
          uplus: '\u228E',
          UpperLeftArrow: '\u2196',
          UpperRightArrow: '\u2197',
          upsi: '\u03C5',
          Upsi: '\u03D2',
          upsih: '\u03D2',
          Upsilon: '\u03A5',
          upsilon: '\u03C5',
          UpTeeArrow: '\u21A5',
          UpTee: '\u22A5',
          upuparrows: '\u21C8',
          urcorn: '\u231D',
          urcorner: '\u231D',
          urcrop: '\u230E',
          Uring: '\u016E',
          uring: '\u016F',
          urtri: '\u25F9',
          Uscr: '\u{1D4B0}',
          uscr: '\u{1D4CA}',
          utdot: '\u22F0',
          Utilde: '\u0168',
          utilde: '\u0169',
          utri: '\u25B5',
          utrif: '\u25B4',
          uuarr: '\u21C8',
          Uuml: '\xDC',
          uuml: '\xFC',
          uwangle: '\u29A7',
          vangrt: '\u299C',
          varepsilon: '\u03F5',
          varkappa: '\u03F0',
          varnothing: '\u2205',
          varphi: '\u03D5',
          varpi: '\u03D6',
          varpropto: '\u221D',
          varr: '\u2195',
          vArr: '\u21D5',
          varrho: '\u03F1',
          varsigma: '\u03C2',
          varsubsetneq: '\u228A\uFE00',
          varsubsetneqq: '\u2ACB\uFE00',
          varsupsetneq: '\u228B\uFE00',
          varsupsetneqq: '\u2ACC\uFE00',
          vartheta: '\u03D1',
          vartriangleleft: '\u22B2',
          vartriangleright: '\u22B3',
          vBar: '\u2AE8',
          Vbar: '\u2AEB',
          vBarv: '\u2AE9',
          Vcy: '\u0412',
          vcy: '\u0432',
          vdash: '\u22A2',
          vDash: '\u22A8',
          Vdash: '\u22A9',
          VDash: '\u22AB',
          Vdashl: '\u2AE6',
          veebar: '\u22BB',
          vee: '\u2228',
          Vee: '\u22C1',
          veeeq: '\u225A',
          vellip: '\u22EE',
          verbar: '|',
          Verbar: '\u2016',
          vert: '|',
          Vert: '\u2016',
          VerticalBar: '\u2223',
          VerticalLine: '|',
          VerticalSeparator: '\u2758',
          VerticalTilde: '\u2240',
          VeryThinSpace: '\u200A',
          Vfr: '\u{1D519}',
          vfr: '\u{1D533}',
          vltri: '\u22B2',
          vnsub: '\u2282\u20D2',
          vnsup: '\u2283\u20D2',
          Vopf: '\u{1D54D}',
          vopf: '\u{1D567}',
          vprop: '\u221D',
          vrtri: '\u22B3',
          Vscr: '\u{1D4B1}',
          vscr: '\u{1D4CB}',
          vsubnE: '\u2ACB\uFE00',
          vsubne: '\u228A\uFE00',
          vsupnE: '\u2ACC\uFE00',
          vsupne: '\u228B\uFE00',
          Vvdash: '\u22AA',
          vzigzag: '\u299A',
          Wcirc: '\u0174',
          wcirc: '\u0175',
          wedbar: '\u2A5F',
          wedge: '\u2227',
          Wedge: '\u22C0',
          wedgeq: '\u2259',
          weierp: '\u2118',
          Wfr: '\u{1D51A}',
          wfr: '\u{1D534}',
          Wopf: '\u{1D54E}',
          wopf: '\u{1D568}',
          wp: '\u2118',
          wr: '\u2240',
          wreath: '\u2240',
          Wscr: '\u{1D4B2}',
          wscr: '\u{1D4CC}',
          xcap: '\u22C2',
          xcirc: '\u25EF',
          xcup: '\u22C3',
          xdtri: '\u25BD',
          Xfr: '\u{1D51B}',
          xfr: '\u{1D535}',
          xharr: '\u27F7',
          xhArr: '\u27FA',
          Xi: '\u039E',
          xi: '\u03BE',
          xlarr: '\u27F5',
          xlArr: '\u27F8',
          xmap: '\u27FC',
          xnis: '\u22FB',
          xodot: '\u2A00',
          Xopf: '\u{1D54F}',
          xopf: '\u{1D569}',
          xoplus: '\u2A01',
          xotime: '\u2A02',
          xrarr: '\u27F6',
          xrArr: '\u27F9',
          Xscr: '\u{1D4B3}',
          xscr: '\u{1D4CD}',
          xsqcup: '\u2A06',
          xuplus: '\u2A04',
          xutri: '\u25B3',
          xvee: '\u22C1',
          xwedge: '\u22C0',
          Yacute: '\xDD',
          yacute: '\xFD',
          YAcy: '\u042F',
          yacy: '\u044F',
          Ycirc: '\u0176',
          ycirc: '\u0177',
          Ycy: '\u042B',
          ycy: '\u044B',
          yen: '\xA5',
          Yfr: '\u{1D51C}',
          yfr: '\u{1D536}',
          YIcy: '\u0407',
          yicy: '\u0457',
          Yopf: '\u{1D550}',
          yopf: '\u{1D56A}',
          Yscr: '\u{1D4B4}',
          yscr: '\u{1D4CE}',
          YUcy: '\u042E',
          yucy: '\u044E',
          yuml: '\xFF',
          Yuml: '\u0178',
          Zacute: '\u0179',
          zacute: '\u017A',
          Zcaron: '\u017D',
          zcaron: '\u017E',
          Zcy: '\u0417',
          zcy: '\u0437',
          Zdot: '\u017B',
          zdot: '\u017C',
          zeetrf: '\u2128',
          ZeroWidthSpace: '\u200B',
          Zeta: '\u0396',
          zeta: '\u03B6',
          zfr: '\u{1D537}',
          Zfr: '\u2128',
          ZHcy: '\u0416',
          zhcy: '\u0436',
          zigrarr: '\u21DD',
          zopf: '\u{1D56B}',
          Zopf: '\u2124',
          Zscr: '\u{1D4B5}',
          zscr: '\u{1D4CF}',
          zwj: '\u200D',
          zwnj: '\u200C',
        }
      }),
      WR = L((e, t) => {
        t.exports = {
          Aacute: '\xC1',
          aacute: '\xE1',
          Acirc: '\xC2',
          acirc: '\xE2',
          acute: '\xB4',
          AElig: '\xC6',
          aelig: '\xE6',
          Agrave: '\xC0',
          agrave: '\xE0',
          amp: '&',
          AMP: '&',
          Aring: '\xC5',
          aring: '\xE5',
          Atilde: '\xC3',
          atilde: '\xE3',
          Auml: '\xC4',
          auml: '\xE4',
          brvbar: '\xA6',
          Ccedil: '\xC7',
          ccedil: '\xE7',
          cedil: '\xB8',
          cent: '\xA2',
          copy: '\xA9',
          COPY: '\xA9',
          curren: '\xA4',
          deg: '\xB0',
          divide: '\xF7',
          Eacute: '\xC9',
          eacute: '\xE9',
          Ecirc: '\xCA',
          ecirc: '\xEA',
          Egrave: '\xC8',
          egrave: '\xE8',
          ETH: '\xD0',
          eth: '\xF0',
          Euml: '\xCB',
          euml: '\xEB',
          frac12: '\xBD',
          frac14: '\xBC',
          frac34: '\xBE',
          gt: '>',
          GT: '>',
          Iacute: '\xCD',
          iacute: '\xED',
          Icirc: '\xCE',
          icirc: '\xEE',
          iexcl: '\xA1',
          Igrave: '\xCC',
          igrave: '\xEC',
          iquest: '\xBF',
          Iuml: '\xCF',
          iuml: '\xEF',
          laquo: '\xAB',
          lt: '<',
          LT: '<',
          macr: '\xAF',
          micro: '\xB5',
          middot: '\xB7',
          nbsp: '\xA0',
          not: '\xAC',
          Ntilde: '\xD1',
          ntilde: '\xF1',
          Oacute: '\xD3',
          oacute: '\xF3',
          Ocirc: '\xD4',
          ocirc: '\xF4',
          Ograve: '\xD2',
          ograve: '\xF2',
          ordf: '\xAA',
          ordm: '\xBA',
          Oslash: '\xD8',
          oslash: '\xF8',
          Otilde: '\xD5',
          otilde: '\xF5',
          Ouml: '\xD6',
          ouml: '\xF6',
          para: '\xB6',
          plusmn: '\xB1',
          pound: '\xA3',
          quot: '"',
          QUOT: '"',
          raquo: '\xBB',
          reg: '\xAE',
          REG: '\xAE',
          sect: '\xA7',
          shy: '\xAD',
          sup1: '\xB9',
          sup2: '\xB2',
          sup3: '\xB3',
          szlig: '\xDF',
          THORN: '\xDE',
          thorn: '\xFE',
          times: '\xD7',
          Uacute: '\xDA',
          uacute: '\xFA',
          Ucirc: '\xDB',
          ucirc: '\xFB',
          Ugrave: '\xD9',
          ugrave: '\xF9',
          uml: '\xA8',
          Uuml: '\xDC',
          uuml: '\xFC',
          Yacute: '\xDD',
          yacute: '\xFD',
          yen: '\xA5',
          yuml: '\xFF',
        }
      }),
      cg = L((e, t) => {
        t.exports = { amp: '&', apos: "'", gt: '>', lt: '<', quot: '"' }
      }),
      KR = L((e, t) => {
        t.exports = {
          0: 65533,
          128: 8364,
          130: 8218,
          131: 402,
          132: 8222,
          133: 8230,
          134: 8224,
          135: 8225,
          136: 710,
          137: 8240,
          138: 352,
          139: 8249,
          140: 338,
          142: 381,
          145: 8216,
          146: 8217,
          147: 8220,
          148: 8221,
          149: 8226,
          150: 8211,
          151: 8212,
          152: 732,
          153: 8482,
          154: 353,
          155: 8250,
          156: 339,
          158: 382,
          159: 376,
        }
      }),
      YR = L((e) => {
        'use strict'
        var t =
          (e && e.__importDefault) ||
          function (a) {
            return a && a.__esModule ? a : { default: a }
          }
        Object.defineProperty(e, '__esModule', { value: !0 })
        var r = t(KR()),
          n =
            String.fromCodePoint ||
            function (a) {
              var i = ''
              return (
                a > 65535 &&
                  ((a -= 65536),
                  (i += String.fromCharCode(((a >>> 10) & 1023) | 55296)),
                  (a = 56320 | (a & 1023))),
                (i += String.fromCharCode(a)),
                i
              )
            }
        function o(a) {
          return (a >= 55296 && a <= 57343) || a > 1114111
            ? '\uFFFD'
            : (a in r.default && (a = r.default[a]), n(a))
        }
        m(o, 'decodeCodePoint'), (e.default = o)
      }),
      bm = L((e) => {
        'use strict'
        var t =
          (e && e.__importDefault) ||
          function (c) {
            return c && c.__esModule ? c : { default: c }
          }
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.decodeHTML = e.decodeHTMLStrict = e.decodeXML = void 0)
        var r = t(ug()),
          n = t(WR()),
          o = t(cg()),
          a = t(YR()),
          i = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g
        ;(e.decodeXML = s(o.default)), (e.decodeHTMLStrict = s(r.default))
        function s(c) {
          var d = u(c)
          return function (y) {
            return String(y).replace(i, d)
          }
        }
        m(s, 'getStrictDecoder')
        var l = m(function (c, d) {
          return c < d ? 1 : -1
        }, 'sorter')
        e.decodeHTML = (function () {
          for (
            var c = Object.keys(n.default).sort(l),
              d = Object.keys(r.default).sort(l),
              y = 0,
              f = 0;
            y < d.length;
            y++
          )
            c[f] === d[y] ? ((d[y] += ';?'), f++) : (d[y] += ';')
          var h = new RegExp(
              '&(?:' + d.join('|') + '|#[xX][\\da-fA-F]+;?|#\\d+;?)',
              'g',
            ),
            g = u(r.default)
          function C(b) {
            return b.substr(-1) !== ';' && (b += ';'), g(b)
          }
          return (
            m(C, 'replacer'),
            function (b) {
              return String(b).replace(h, C)
            }
          )
        })()
        function u(c) {
          return m(function (d) {
            if (d.charAt(1) === '#') {
              var y = d.charAt(2)
              return y === 'X' || y === 'x'
                ? a.default(parseInt(d.substr(3), 16))
                : a.default(parseInt(d.substr(2), 10))
            }
            return c[d.slice(1, -1)] || d
          }, 'replace')
        }
        m(u, 'getReplacer')
      }),
      vm = L((e) => {
        'use strict'
        var t =
          (e && e.__importDefault) ||
          function (E) {
            return E && E.__esModule ? E : { default: E }
          }
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.escapeUTF8 =
            e.escape =
            e.encodeNonAsciiHTML =
            e.encodeHTML =
            e.encodeXML =
              void 0)
        var r = t(cg()),
          n = l(r.default),
          o = u(n)
        e.encodeXML = b(n)
        var a = t(ug()),
          i = l(a.default),
          s = u(i)
        ;(e.encodeHTML = f(i, s)), (e.encodeNonAsciiHTML = b(i))
        function l(E) {
          return Object.keys(E)
            .sort()
            .reduce(function (_, T) {
              return (_[E[T]] = '&' + T + ';'), _
            }, {})
        }
        m(l, 'getInverseObj')
        function u(E) {
          for (
            var _ = [], T = [], O = 0, I = Object.keys(E);
            O < I.length;
            O++
          ) {
            var D = I[O]
            D.length === 1 ? _.push('\\' + D) : T.push(D)
          }
          _.sort()
          for (var R = 0; R < _.length - 1; R++) {
            for (
              var M = R;
              M < _.length - 1 &&
              _[M].charCodeAt(1) + 1 === _[M + 1].charCodeAt(1);

            )
              M += 1
            var z = 1 + M - R
            z < 3 || _.splice(R, z, _[R] + '-' + _[M])
          }
          return T.unshift('[' + _.join('') + ']'), new RegExp(T.join('|'), 'g')
        }
        m(u, 'getInverseReplacer')
        var c =
            /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
          d =
            String.prototype.codePointAt != null
              ? function (E) {
                  return E.codePointAt(0)
                }
              : function (E) {
                  return (
                    (E.charCodeAt(0) - 55296) * 1024 +
                    E.charCodeAt(1) -
                    56320 +
                    65536
                  )
                }
        function y(E) {
          return (
            '&#x' +
            (E.length > 1 ? d(E) : E.charCodeAt(0)).toString(16).toUpperCase() +
            ';'
          )
        }
        m(y, 'singleCharReplacer')
        function f(E, _) {
          return function (T) {
            return T.replace(_, function (O) {
              return E[O]
            }).replace(c, y)
          }
        }
        m(f, 'getInverse')
        var h = new RegExp(o.source + '|' + c.source, 'g')
        function g(E) {
          return E.replace(h, y)
        }
        m(g, 'escape'), (e.escape = g)
        function C(E) {
          return E.replace(o, y)
        }
        m(C, 'escapeUTF8'), (e.escapeUTF8 = C)
        function b(E) {
          return function (_) {
            return _.replace(h, function (T) {
              return E[T] || y(T)
            })
          }
        }
        m(b, 'getASCIIEncoder')
      }),
      XR = L((e) => {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.decodeXMLStrict =
            e.decodeHTML5Strict =
            e.decodeHTML4Strict =
            e.decodeHTML5 =
            e.decodeHTML4 =
            e.decodeHTMLStrict =
            e.decodeHTML =
            e.decodeXML =
            e.encodeHTML5 =
            e.encodeHTML4 =
            e.escapeUTF8 =
            e.escape =
            e.encodeNonAsciiHTML =
            e.encodeHTML =
            e.encodeXML =
            e.encode =
            e.decodeStrict =
            e.decode =
              void 0)
        var t = bm(),
          r = vm()
        function n(l, u) {
          return (!u || u <= 0 ? t.decodeXML : t.decodeHTML)(l)
        }
        m(n, 'decode'), (e.decode = n)
        function o(l, u) {
          return (!u || u <= 0 ? t.decodeXML : t.decodeHTMLStrict)(l)
        }
        m(o, 'decodeStrict'), (e.decodeStrict = o)
        function a(l, u) {
          return (!u || u <= 0 ? r.encodeXML : r.encodeHTML)(l)
        }
        m(a, 'encode'), (e.encode = a)
        var i = vm()
        Object.defineProperty(e, 'encodeXML', {
          enumerable: !0,
          get: m(function () {
            return i.encodeXML
          }, 'get'),
        }),
          Object.defineProperty(e, 'encodeHTML', {
            enumerable: !0,
            get: m(function () {
              return i.encodeHTML
            }, 'get'),
          }),
          Object.defineProperty(e, 'encodeNonAsciiHTML', {
            enumerable: !0,
            get: m(function () {
              return i.encodeNonAsciiHTML
            }, 'get'),
          }),
          Object.defineProperty(e, 'escape', {
            enumerable: !0,
            get: m(function () {
              return i.escape
            }, 'get'),
          }),
          Object.defineProperty(e, 'escapeUTF8', {
            enumerable: !0,
            get: m(function () {
              return i.escapeUTF8
            }, 'get'),
          }),
          Object.defineProperty(e, 'encodeHTML4', {
            enumerable: !0,
            get: m(function () {
              return i.encodeHTML
            }, 'get'),
          }),
          Object.defineProperty(e, 'encodeHTML5', {
            enumerable: !0,
            get: m(function () {
              return i.encodeHTML
            }, 'get'),
          })
        var s = bm()
        Object.defineProperty(e, 'decodeXML', {
          enumerable: !0,
          get: m(function () {
            return s.decodeXML
          }, 'get'),
        }),
          Object.defineProperty(e, 'decodeHTML', {
            enumerable: !0,
            get: m(function () {
              return s.decodeHTML
            }, 'get'),
          }),
          Object.defineProperty(e, 'decodeHTMLStrict', {
            enumerable: !0,
            get: m(function () {
              return s.decodeHTMLStrict
            }, 'get'),
          }),
          Object.defineProperty(e, 'decodeHTML4', {
            enumerable: !0,
            get: m(function () {
              return s.decodeHTML
            }, 'get'),
          }),
          Object.defineProperty(e, 'decodeHTML5', {
            enumerable: !0,
            get: m(function () {
              return s.decodeHTML
            }, 'get'),
          }),
          Object.defineProperty(e, 'decodeHTML4Strict', {
            enumerable: !0,
            get: m(function () {
              return s.decodeHTMLStrict
            }, 'get'),
          }),
          Object.defineProperty(e, 'decodeHTML5Strict', {
            enumerable: !0,
            get: m(function () {
              return s.decodeHTMLStrict
            }, 'get'),
          }),
          Object.defineProperty(e, 'decodeXMLStrict', {
            enumerable: !0,
            get: m(function () {
              return s.decodeXML
            }, 'get'),
          })
      }),
      QR = L((e, t) => {
        'use strict'
        function r(P, q) {
          if (!(P instanceof q))
            throw new TypeError('Cannot call a class as a function')
        }
        m(r, '_classCallCheck')
        function n(P, q) {
          for (var J = 0; J < q.length; J++) {
            var X = q[J]
            ;(X.enumerable = X.enumerable || !1),
              (X.configurable = !0),
              'value' in X && (X.writable = !0),
              Object.defineProperty(P, X.key, X)
          }
        }
        m(n, '_defineProperties')
        function o(P, q, J) {
          return q && n(P.prototype, q), J && n(P, J), P
        }
        m(o, '_createClass')
        function a(P, q) {
          var J = (typeof Symbol < 'u' && P[Symbol.iterator]) || P['@@iterator']
          if (!J) {
            if (
              Array.isArray(P) ||
              (J = i(P)) ||
              (q && P && typeof P.length == 'number')
            ) {
              J && (P = J)
              var X = 0,
                te = m(function () {}, 'F')
              return {
                s: te,
                n: m(function () {
                  return X >= P.length
                    ? { done: !0 }
                    : { done: !1, value: P[X++] }
                }, 'n'),
                e: m(function (ie) {
                  throw ie
                }, 'e'),
                f: te,
              }
            }
            throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          var re = !0,
            ee = !1,
            oe
          return {
            s: m(function () {
              J = J.call(P)
            }, 's'),
            n: m(function () {
              var ie = J.next()
              return (re = ie.done), ie
            }, 'n'),
            e: m(function (ie) {
              ;(ee = !0), (oe = ie)
            }, 'e'),
            f: m(function () {
              try {
                !re && J.return != null && J.return()
              } finally {
                if (ee) throw oe
              }
            }, 'f'),
          }
        }
        m(a, '_createForOfIteratorHelper')
        function i(P, q) {
          if (P) {
            if (typeof P == 'string') return s(P, q)
            var J = Object.prototype.toString.call(P).slice(8, -1)
            if (
              (J === 'Object' && P.constructor && (J = P.constructor.name),
              J === 'Map' || J === 'Set')
            )
              return Array.from(P)
            if (
              J === 'Arguments' ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(J)
            )
              return s(P, q)
          }
        }
        m(i, '_unsupportedIterableToArray')
        function s(P, q) {
          ;(q == null || q > P.length) && (q = P.length)
          for (var J = 0, X = new Array(q); J < q; J++) X[J] = P[J]
          return X
        }
        m(s, '_arrayLikeToArray')
        var l = XR(),
          u = {
            fg: '#FFF',
            bg: '#000',
            newline: !1,
            escapeXML: !1,
            stream: !1,
            colors: c(),
          }
        function c() {
          var P = {
            0: '#000',
            1: '#A00',
            2: '#0A0',
            3: '#A50',
            4: '#00A',
            5: '#A0A',
            6: '#0AA',
            7: '#AAA',
            8: '#555',
            9: '#F55',
            10: '#5F5',
            11: '#FF5',
            12: '#55F',
            13: '#F5F',
            14: '#5FF',
            15: '#FFF',
          }
          return (
            E(0, 5).forEach(function (q) {
              E(0, 5).forEach(function (J) {
                E(0, 5).forEach(function (X) {
                  return d(q, J, X, P)
                })
              })
            }),
            E(0, 23).forEach(function (q) {
              var J = q + 232,
                X = y(q * 10 + 8)
              P[J] = '#' + X + X + X
            }),
            P
          )
        }
        m(c, 'getDefaultColors')
        function d(P, q, J, X) {
          var te = 16 + P * 36 + q * 6 + J,
            re = P > 0 ? P * 40 + 55 : 0,
            ee = q > 0 ? q * 40 + 55 : 0,
            oe = J > 0 ? J * 40 + 55 : 0
          X[te] = f([re, ee, oe])
        }
        m(d, 'setStyleColor')
        function y(P) {
          for (var q = P.toString(16); q.length < 2; ) q = '0' + q
          return q
        }
        m(y, 'toHexString')
        function f(P) {
          var q = [],
            J = a(P),
            X
          try {
            for (J.s(); !(X = J.n()).done; ) {
              var te = X.value
              q.push(y(te))
            }
          } catch (re) {
            J.e(re)
          } finally {
            J.f()
          }
          return '#' + q.join('')
        }
        m(f, 'toColorHexString')
        function h(P, q, J, X) {
          var te
          return (
            q === 'text'
              ? (te = O(J, X))
              : q === 'display'
                ? (te = C(P, J, X))
                : q === 'xterm256Foreground'
                  ? (te = R(P, X.colors[J]))
                  : q === 'xterm256Background'
                    ? (te = M(P, X.colors[J]))
                    : q === 'rgb' && (te = g(P, J)),
            te
          )
        }
        m(h, 'generateOutput')
        function g(P, q) {
          q = q.substring(2).slice(0, -1)
          var J = +q.substr(0, 2),
            X = q.substring(5).split(';'),
            te = X.map(function (re) {
              return ('0' + Number(re).toString(16)).substr(-2)
            }).join('')
          return D(P, (J === 38 ? 'color:#' : 'background-color:#') + te)
        }
        m(g, 'handleRgb')
        function C(P, q, J) {
          q = parseInt(q, 10)
          var X = {
              '-1': m(function () {
                return '<br/>'
              }, '_'),
              0: m(function () {
                return P.length && b(P)
              }, '_'),
              1: m(function () {
                return I(P, 'b')
              }, '_'),
              3: m(function () {
                return I(P, 'i')
              }, '_'),
              4: m(function () {
                return I(P, 'u')
              }, '_'),
              8: m(function () {
                return D(P, 'display:none')
              }, '_'),
              9: m(function () {
                return I(P, 'strike')
              }, '_'),
              22: m(function () {
                return D(
                  P,
                  'font-weight:normal;text-decoration:none;font-style:normal',
                )
              }, '_'),
              23: m(function () {
                return z(P, 'i')
              }, '_'),
              24: m(function () {
                return z(P, 'u')
              }, '_'),
              39: m(function () {
                return R(P, J.fg)
              }, '_'),
              49: m(function () {
                return M(P, J.bg)
              }, '_'),
              53: m(function () {
                return D(P, 'text-decoration:overline')
              }, '_'),
            },
            te
          return (
            X[q]
              ? (te = X[q]())
              : 4 < q && q < 7
                ? (te = I(P, 'blink'))
                : 29 < q && q < 38
                  ? (te = R(P, J.colors[q - 30]))
                  : 39 < q && q < 48
                    ? (te = M(P, J.colors[q - 40]))
                    : 89 < q && q < 98
                      ? (te = R(P, J.colors[8 + (q - 90)]))
                      : 99 < q &&
                        q < 108 &&
                        (te = M(P, J.colors[8 + (q - 100)])),
            te
          )
        }
        m(C, 'handleDisplay')
        function b(P) {
          var q = P.slice(0)
          return (
            (P.length = 0),
            q
              .reverse()
              .map(function (J) {
                return '</' + J + '>'
              })
              .join('')
          )
        }
        m(b, 'resetStyles')
        function E(P, q) {
          for (var J = [], X = P; X <= q; X++) J.push(X)
          return J
        }
        m(E, 'range')
        function _(P) {
          return function (q) {
            return (P === null || q.category !== P) && P !== 'all'
          }
        }
        m(_, 'notCategory')
        function T(P) {
          P = parseInt(P, 10)
          var q = null
          return (
            P === 0
              ? (q = 'all')
              : P === 1
                ? (q = 'bold')
                : 2 < P && P < 5
                  ? (q = 'underline')
                  : 4 < P && P < 7
                    ? (q = 'blink')
                    : P === 8
                      ? (q = 'hide')
                      : P === 9
                        ? (q = 'strike')
                        : (29 < P && P < 38) || P === 39 || (89 < P && P < 98)
                          ? (q = 'foreground-color')
                          : ((39 < P && P < 48) ||
                              P === 49 ||
                              (99 < P && P < 108)) &&
                            (q = 'background-color'),
            q
          )
        }
        m(T, 'categoryForCode')
        function O(P, q) {
          return q.escapeXML ? l.encodeXML(P) : P
        }
        m(O, 'pushText')
        function I(P, q, J) {
          return (
            J || (J = ''),
            P.push(q),
            '<'.concat(q).concat(J ? ' style="'.concat(J, '"') : '', '>')
          )
        }
        m(I, 'pushTag')
        function D(P, q) {
          return I(P, 'span', q)
        }
        m(D, 'pushStyle')
        function R(P, q) {
          return I(P, 'span', 'color:' + q)
        }
        m(R, 'pushForegroundColor')
        function M(P, q) {
          return I(P, 'span', 'background-color:' + q)
        }
        m(M, 'pushBackgroundColor')
        function z(P, q) {
          var J
          if ((P.slice(-1)[0] === q && (J = P.pop()), J)) return '</' + q + '>'
        }
        m(z, 'closeTag')
        function Y(P, q, J) {
          var X = !1,
            te = 3
          function re() {
            return ''
          }
          m(re, 'remove')
          function ee(je, fe) {
            return J('xterm256Foreground', fe), ''
          }
          m(ee, 'removeXterm256Foreground')
          function oe(je, fe) {
            return J('xterm256Background', fe), ''
          }
          m(oe, 'removeXterm256Background')
          function ie(je) {
            return q.newline ? J('display', -1) : J('text', je), ''
          }
          m(ie, 'newline')
          function ce(je, fe) {
            ;(X = !0),
              fe.trim().length === 0 && (fe = '0'),
              (fe = fe.trimRight(';').split(';'))
            var Se = a(fe),
              Et
            try {
              for (Se.s(); !(Et = Se.n()).done; ) {
                var Rt = Et.value
                J('display', Rt)
              }
            } catch (fr) {
              Se.e(fr)
            } finally {
              Se.f()
            }
            return ''
          }
          m(ce, 'ansiMess')
          function be(je) {
            return J('text', je), ''
          }
          m(be, 'realText')
          function pe(je) {
            return J('rgb', je), ''
          }
          m(pe, 'rgb')
          var ye = [
            { pattern: /^\x08+/, sub: re },
            { pattern: /^\x1b\[[012]?K/, sub: re },
            { pattern: /^\x1b\[\(B/, sub: re },
            { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: pe },
            { pattern: /^\x1b\[38;5;(\d+)m/, sub: ee },
            { pattern: /^\x1b\[48;5;(\d+)m/, sub: oe },
            { pattern: /^\n/, sub: ie },
            { pattern: /^\r+\n/, sub: ie },
            { pattern: /^\r/, sub: ie },
            { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: ce },
            { pattern: /^\x1b\[\d?J/, sub: re },
            { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: re },
            { pattern: /^\x1b\[?[\d;]{0,3}/, sub: re },
            { pattern: /^(([^\x1b\x08\r\n])+)/, sub: be },
          ]
          function _e(je, fe) {
            ;(fe > te && X) || ((X = !1), (P = P.replace(je.pattern, je.sub)))
          }
          m(_e, 'process')
          var Me = [],
            Oe = P,
            he = Oe.length
          e: for (; he > 0; ) {
            for (var Ue = 0, Te = 0, $e = ye.length; Te < $e; Ue = ++Te) {
              var lt = ye[Ue]
              if ((_e(lt, Ue), P.length !== he)) {
                he = P.length
                continue e
              }
            }
            if (P.length === he) break
            Me.push(0), (he = P.length)
          }
          return Me
        }
        m(Y, 'tokenize')
        function Z(P, q, J) {
          return (
            q !== 'text' &&
              ((P = P.filter(_(T(J)))),
              P.push({ token: q, data: J, category: T(J) })),
            P
          )
        }
        m(Z, 'updateStickyStack')
        var V = (function () {
          function P(q) {
            r(this, P),
              (q = q || {}),
              q.colors && (q.colors = Object.assign({}, u.colors, q.colors)),
              (this.options = Object.assign({}, u, q)),
              (this.stack = []),
              (this.stickyStack = [])
          }
          return (
            m(P, 'Filter'),
            o(P, [
              {
                key: 'toHtml',
                value: m(function (q) {
                  var J = this
                  q = typeof q == 'string' ? [q] : q
                  var X = this.stack,
                    te = this.options,
                    re = []
                  return (
                    this.stickyStack.forEach(function (ee) {
                      var oe = h(X, ee.token, ee.data, te)
                      oe && re.push(oe)
                    }),
                    Y(q.join(''), te, function (ee, oe) {
                      var ie = h(X, ee, oe, te)
                      ie && re.push(ie),
                        te.stream && (J.stickyStack = Z(J.stickyStack, ee, oe))
                    }),
                    X.length && re.push(b(X)),
                    re.join('')
                  )
                }, 'toHtml'),
              },
            ]),
            P
          )
        })()
        t.exports = V
      }),
      Le = (() => {
        let e
        return (
          typeof window < 'u'
            ? (e = window)
            : typeof globalThis < 'u'
              ? (e = globalThis)
              : typeof window < 'u'
                ? (e = window)
                : typeof self < 'u'
                  ? (e = self)
                  : (e = {}),
          e
        )
      })()
    function pg() {
      let e = {
        setHandler: m(() => {}, 'setHandler'),
        send: m(() => {}, 'send'),
      }
      return new jh({ transport: e })
    }
    m(pg, 'mockChannel')
    var dg = class {
      constructor() {
        ;(this.getChannel = m(() => {
          if (!this.channel) {
            let t = pg()
            return this.setChannel(t), t
          }
          return this.channel
        }, 'getChannel')),
          (this.ready = m(() => this.promise, 'ready')),
          (this.hasChannel = m(() => !!this.channel, 'hasChannel')),
          (this.setChannel = m((t) => {
            ;(this.channel = t), this.resolve()
          }, 'setChannel')),
          (this.promise = new Promise((t) => {
            this.resolve = () => t(this.getChannel())
          }))
      }
    }
    m(dg, 'AddonStore')
    var ZR = dg,
      Vi = '__STORYBOOK_ADDONS_PREVIEW'
    function fg() {
      return Le[Vi] || (Le[Vi] = new ZR()), Le[Vi]
    }
    m(fg, 'getAddonsStore')
    var or = fg(),
      yg = class {
        constructor() {
          ;(this.hookListsMap = void 0),
            (this.mountedDecorators = void 0),
            (this.prevMountedDecorators = void 0),
            (this.currentHooks = void 0),
            (this.nextHookIndex = void 0),
            (this.currentPhase = void 0),
            (this.currentEffects = void 0),
            (this.prevEffects = void 0),
            (this.currentDecoratorName = void 0),
            (this.hasUpdates = void 0),
            (this.currentContext = void 0),
            (this.renderListener = m((t) => {
              t === this.currentContext?.id &&
                (this.triggerEffects(),
                (this.currentContext = null),
                this.removeRenderListeners())
            }, 'renderListener')),
            this.init()
        }
        init() {
          ;(this.hookListsMap = new WeakMap()),
            (this.mountedDecorators = new Set()),
            (this.prevMountedDecorators = new Set()),
            (this.currentHooks = []),
            (this.nextHookIndex = 0),
            (this.currentPhase = 'NONE'),
            (this.currentEffects = []),
            (this.prevEffects = []),
            (this.currentDecoratorName = null),
            (this.hasUpdates = !1),
            (this.currentContext = null)
        }
        clean() {
          this.prevEffects.forEach((t) => {
            t.destroy && t.destroy()
          }),
            this.init(),
            this.removeRenderListeners()
        }
        getNextHook() {
          let t = this.currentHooks[this.nextHookIndex]
          return (this.nextHookIndex += 1), t
        }
        triggerEffects() {
          this.prevEffects.forEach((t) => {
            !this.currentEffects.includes(t) && t.destroy && t.destroy()
          }),
            this.currentEffects.forEach((t) => {
              this.prevEffects.includes(t) || (t.destroy = t.create())
            }),
            (this.prevEffects = this.currentEffects),
            (this.currentEffects = [])
        }
        addRenderListeners() {
          this.removeRenderListeners(),
            or.getChannel().on(cn, this.renderListener)
        }
        removeRenderListeners() {
          or.getChannel().removeListener(cn, this.renderListener)
        }
      }
    m(yg, 'HooksContext')
    var hg = yg
    function Xi(e) {
      let t = m((...r) => {
        let { hooks: n } = typeof r[0] == 'function' ? r[1] : r[0],
          o = n.currentPhase,
          a = n.currentHooks,
          i = n.nextHookIndex,
          s = n.currentDecoratorName
        ;(n.currentDecoratorName = e.name),
          n.prevMountedDecorators.has(e)
            ? ((n.currentPhase = 'UPDATE'),
              (n.currentHooks = n.hookListsMap.get(e) || []))
            : ((n.currentPhase = 'MOUNT'),
              (n.currentHooks = []),
              n.hookListsMap.set(e, n.currentHooks),
              n.prevMountedDecorators.add(e)),
          (n.nextHookIndex = 0)
        let l = Le.STORYBOOK_HOOKS_CONTEXT
        Le.STORYBOOK_HOOKS_CONTEXT = n
        let u = e(...r)
        if (
          ((Le.STORYBOOK_HOOKS_CONTEXT = l),
          n.currentPhase === 'UPDATE' && n.getNextHook() != null)
        )
          throw new Error(
            'Rendered fewer hooks than expected. This may be caused by an accidental early return statement.',
          )
        return (
          (n.currentPhase = o),
          (n.currentHooks = a),
          (n.nextHookIndex = i),
          (n.currentDecoratorName = s),
          u
        )
      }, 'hookified')
      return (t.originalFn = e), t
    }
    m(Xi, 'hookify')
    var Hi = 0,
      e5 = 25,
      t5 = m(
        (e) => (t, r) => {
          let n = e(
            Xi(t),
            r.map((o) => Xi(o)),
          )
          return (o) => {
            let { hooks: a } = o
            ;(a.prevMountedDecorators ??= new Set()),
              (a.mountedDecorators = new Set([t, ...r])),
              (a.currentContext = o),
              (a.hasUpdates = !1)
            let i = n(o)
            for (Hi = 1; a.hasUpdates; )
              if (
                ((a.hasUpdates = !1),
                (a.currentEffects = []),
                (i = n(o)),
                (Hi += 1),
                Hi > e5)
              )
                throw new Error(
                  'Too many re-renders. Storybook limits the number of renders to prevent an infinite loop.',
                )
            return a.addRenderListeners(), i
          }
        },
        'applyHooks',
      ),
      r5 = m(
        (e, t) => e.length === t.length && e.every((r, n) => r === t[n]),
        'areDepsEqual',
      ),
      _s = m(
        () =>
          new Error(
            'Storybook preview hooks can only be called inside decorators and story functions.',
          ),
        'invalidHooksError',
      )
    function Os() {
      return Le.STORYBOOK_HOOKS_CONTEXT || null
    }
    m(Os, 'getHooksContextOrNull')
    function ea() {
      let e = Os()
      if (e == null) throw _s()
      return e
    }
    m(ea, 'getHooksContextOrThrow')
    function mg(e, t, r) {
      let n = ea()
      if (n.currentPhase === 'MOUNT') {
        r != null &&
          !Array.isArray(r) &&
          ge.warn(
            `${e} received a final argument that is not an array (instead, received ${r}). When specified, the final argument must be an array.`,
          )
        let o = { name: e, deps: r }
        return n.currentHooks.push(o), t(o), o
      }
      if (n.currentPhase === 'UPDATE') {
        let o = n.getNextHook()
        if (o == null)
          throw new Error(
            'Rendered more hooks than during the previous render.',
          )
        return (
          o.name !== e &&
            ge.warn(
              `Storybook has detected a change in the order of Hooks${n.currentDecoratorName ? ` called by ${n.currentDecoratorName}` : ''}. This will lead to bugs and errors if not fixed.`,
            ),
          r != null &&
            o.deps == null &&
            ge.warn(
              `${e} received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.`,
            ),
          r != null &&
            o.deps != null &&
            r.length !== o.deps.length &&
            ge.warn(`The final argument passed to ${e} changed size between renders. The order and size of this array must remain constant.
Previous: ${o.deps}
Incoming: ${r}`),
          (r == null || o.deps == null || !r5(r, o.deps)) &&
            (t(o), (o.deps = r)),
          o
        )
      }
      throw _s()
    }
    m(mg, 'useHook')
    function Rn(e, t, r) {
      let { memoizedState: n } = mg(
        e,
        (o) => {
          o.memoizedState = t()
        },
        r,
      )
      return n
    }
    m(Rn, 'useMemoLike')
    function n5(e, t) {
      return Rn('useMemo', e, t)
    }
    m(n5, 'useMemo')
    function _n(e, t) {
      return Rn('useCallback', () => e, t)
    }
    m(_n, 'useCallback')
    function Is(e, t) {
      return Rn(e, () => ({ current: t }), [])
    }
    m(Is, 'useRefLike')
    function o5(e) {
      return Is('useRef', e)
    }
    m(o5, 'useRef')
    function gg() {
      let e = Os()
      if (e != null && e.currentPhase !== 'NONE') e.hasUpdates = !0
      else
        try {
          or.getChannel().emit(so)
        } catch {
          ge.warn(
            'State updates of Storybook preview hooks work only in browser',
          )
        }
    }
    m(gg, 'triggerUpdate')
    function ks(e, t) {
      let r = Is(e, typeof t == 'function' ? t() : t),
        n = m((o) => {
          ;(r.current = typeof o == 'function' ? o(r.current) : o), gg()
        }, 'setState')
      return [r.current, n]
    }
    m(ks, 'useStateLike')
    function a5(e) {
      return ks('useState', e)
    }
    m(a5, 'useState')
    function i5(e, t, r) {
      let n = r != null ? () => r(t) : t,
        [o, a] = ks('useReducer', n)
      return [o, m((i) => a((s) => e(s, i)), 'dispatch')]
    }
    m(i5, 'useReducer')
    function bg(e, t) {
      let r = ea(),
        n = Rn('useEffect', () => ({ create: e }), t)
      r.currentEffects.includes(n) || r.currentEffects.push(n)
    }
    m(bg, 'useEffect')
    function s5(e, t = []) {
      let r = or.getChannel()
      return (
        bg(
          () => (
            Object.entries(e).forEach(([n, o]) => r.on(n, o)),
            () => {
              Object.entries(e).forEach(([n, o]) => r.removeListener(n, o))
            }
          ),
          [...Object.keys(e), ...t],
        ),
        _n(r.emit.bind(r), [r])
      )
    }
    m(s5, 'useChannel')
    function ta() {
      let { currentContext: e } = ea()
      if (e == null) throw _s()
      return e
    }
    m(ta, 'useStoryContext')
    function l5(e, t) {
      let { parameters: r } = ta()
      if (e) return r[e] ?? t
    }
    m(l5, 'useParameter')
    function u5() {
      let e = or.getChannel(),
        { id: t, args: r } = ta(),
        n = _n((a) => e.emit(po, { storyId: t, updatedArgs: a }), [e, t]),
        o = _n((a) => e.emit(lo, { storyId: t, argNames: a }), [e, t])
      return [r, n, o]
    }
    m(u5, 'useArgs')
    function c5() {
      let e = or.getChannel(),
        { globals: t } = ta(),
        r = _n((n) => e.emit(co, { globals: n }), [e])
      return [t, r]
    }
    m(c5, 'useGlobals')
    var Ire = m(
        ({
          name: e,
          parameterName: t,
          wrapper: r,
          skipIfNoParametersOrOptions: n = !1,
        }) => {
          let o = m(
            (a) => (i, s) => {
              let l = s.parameters && s.parameters[t]
              return (l && l.disable) || (n && !a && !l)
                ? i(s)
                : r(i, s, { options: a, parameters: l })
            },
            'decorator',
          )
          return (...a) =>
            typeof a[0] == 'function'
              ? o()(...a)
              : (...i) => {
                  if (i.length > 1)
                    return a.length > 1 ? o(a)(...i) : o(...a)(...i)
                  throw new Error(`Passing stories directly into ${e}() is not allowed,
        instead use addDecorator(${e}) and pass options with the '${t}' parameter`)
                }
        },
        'makeDecorator',
      ),
      p5 = Qe(Zo(), 1),
      Em = Qe(xR(), 1),
      Ji = Qe(og(), 1),
      xm = Object.prototype.hasOwnProperty
    function Qi(e, t, r) {
      for (r of e.keys()) if (Nr(r, t)) return r
    }
    m(Qi, 'find')
    function Nr(e, t) {
      var r, n, o
      if (e === t) return !0
      if (e && t && (r = e.constructor) === t.constructor) {
        if (r === Date) return e.getTime() === t.getTime()
        if (r === RegExp) return e.toString() === t.toString()
        if (r === Array) {
          if ((n = e.length) === t.length) for (; n-- && Nr(e[n], t[n]); );
          return n === -1
        }
        if (r === Set) {
          if (e.size !== t.size) return !1
          for (n of e)
            if (
              ((o = n),
              (o && typeof o == 'object' && ((o = Qi(t, o)), !o)) || !t.has(o))
            )
              return !1
          return !0
        }
        if (r === Map) {
          if (e.size !== t.size) return !1
          for (n of e)
            if (
              ((o = n[0]),
              (o && typeof o == 'object' && ((o = Qi(t, o)), !o)) ||
                !Nr(n[1], t.get(o)))
            )
              return !1
          return !0
        }
        if (r === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t))
        else if (r === DataView) {
          if ((n = e.byteLength) === t.byteLength)
            for (; n-- && e.getInt8(n) === t.getInt8(n); );
          return n === -1
        }
        if (ArrayBuffer.isView(e)) {
          if ((n = e.byteLength) === t.byteLength)
            for (; n-- && e[n] === t[n]; );
          return n === -1
        }
        if (!r || typeof e == 'object') {
          n = 0
          for (r in e)
            if (
              (xm.call(e, r) && ++n && !xm.call(t, r)) ||
              !(r in t) ||
              !Nr(e[r], t[r])
            )
              return !1
          return Object.keys(t).length === n
        }
      }
      return e !== e && t !== t
    }
    m(Nr, 'dequal')
    var zo = Qe(ws(), 1)
    function at(e) {
      for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
      var n = Array.from(typeof e == 'string' ? [e] : e)
      n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, '')
      var o = n.reduce(function (s, l) {
        var u = l.match(/\n([\t ]+|(?!\s).)/g)
        return u
          ? s.concat(
              u.map(function (c) {
                var d, y
                return (y =
                  (d = c.match(/[\t ]/g)) === null || d === void 0
                    ? void 0
                    : d.length) !== null && y !== void 0
                  ? y
                  : 0
              }),
            )
          : s
      }, [])
      if (o.length) {
        var a = new RegExp(
          `
[	 ]{` +
            Math.min.apply(Math, o) +
            '}',
          'g',
        )
        n = n.map(function (s) {
          return s.replace(
            a,
            `
`,
          )
        })
      }
      n[0] = n[0].replace(/^\r?\n/, '')
      var i = n[0]
      return (
        t.forEach(function (s, l) {
          var u = i.match(/(?:^|\n)( *)$/),
            c = u ? u[1] : '',
            d = s
          typeof s == 'string' &&
            s.includes(`
`) &&
            (d = String(s)
              .split(
                `
`,
              )
              .map(function (y, f) {
                return f === 0 ? y : '' + c + y
              }).join(`
`)),
            (i += d + n[l + 1])
        }),
        i
      )
    }
    m(at, 'dedent')
    var Fr = Symbol('incompatible'),
      Zi = m((e, t) => {
        let r = t.type
        if (e == null || !r || t.mapping) return e
        switch (r.name) {
          case 'string':
            return String(e)
          case 'enum':
            return e
          case 'number':
            return Number(e)
          case 'boolean':
            return String(e) === 'true'
          case 'array':
            return !r.value || !Array.isArray(e)
              ? Fr
              : e.reduce((n, o, a) => {
                  let i = Zi(o, { type: r.value })
                  return i !== Fr && (n[a] = i), n
                }, new Array(e.length))
          case 'object':
            return typeof e == 'string' || typeof e == 'number'
              ? e
              : !r.value || typeof e != 'object'
                ? Fr
                : Object.entries(e).reduce((n, [o, a]) => {
                    let i = Zi(a, { type: r.value[o] })
                    return i === Fr ? n : Object.assign(n, { [o]: i })
                  }, {})
          default:
            return Fr
        }
      }, 'map'),
      d5 = m(
        (e, t) =>
          Object.entries(e).reduce((r, [n, o]) => {
            if (!t[n]) return r
            let a = Zi(o, t[n])
            return a === Fr ? r : Object.assign(r, { [n]: a })
          }, {}),
        'mapArgsToTypes',
      ),
      es = m(
        (e, t) =>
          Array.isArray(e) && Array.isArray(t)
            ? t
                .reduce((r, n, o) => ((r[o] = es(e[o], t[o])), r), [...e])
                .filter((r) => r !== void 0)
            : !(0, zo.default)(e) || !(0, zo.default)(t)
              ? t
              : Object.keys({ ...e, ...t }).reduce((r, n) => {
                  if (n in t) {
                    let o = es(e[n], t[n])
                    o !== void 0 && (r[n] = o)
                  } else r[n] = e[n]
                  return r
                }, {}),
        'combineArgs',
      ),
      f5 = m(
        (e, t) =>
          Object.entries(t).reduce((r, [n, { options: o }]) => {
            function a() {
              return n in e && (r[n] = e[n]), r
            }
            if ((m(a, 'allowArg'), !o)) return a()
            if (!Array.isArray(o))
              return (
                Mt.error(at`
        Invalid argType: '${n}.options' should be an array.

        More info: https://storybook.js.org/docs/react/api/argtypes
      `),
                a()
              )
            if (o.some((d) => d && ['object', 'function'].includes(typeof d)))
              return (
                Mt.error(at`
        Invalid argType: '${n}.options' should only contain primitives. Use a 'mapping' for complex values.

        More info: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
      `),
                a()
              )
            let i = Array.isArray(e[n]),
              s = i && e[n].findIndex((d) => !o.includes(d)),
              l = i && s === -1
            if (e[n] === void 0 || o.includes(e[n]) || l) return a()
            let u = i ? `${n}[${s}]` : n,
              c = o
                .map((d) => (typeof d == 'string' ? `'${d}'` : String(d)))
                .join(', ')
            return (
              Mt.warn(
                `Received illegal value for '${u}'. Supported options: ${c}`,
              ),
              r
            )
          }, {}),
        'validateOptions',
      ),
      Tn = Symbol('Deeply equal'),
      Vo = m((e, t) => {
        if (typeof e != typeof t) return t
        if (Nr(e, t)) return Tn
        if (Array.isArray(e) && Array.isArray(t)) {
          let r = t.reduce((n, o, a) => {
            let i = Vo(e[a], o)
            return i !== Tn && (n[a] = i), n
          }, new Array(t.length))
          return t.length >= e.length
            ? r
            : r.concat(new Array(e.length - t.length).fill(void 0))
        }
        return (0, zo.default)(e) && (0, zo.default)(t)
          ? Object.keys({ ...e, ...t }).reduce((r, n) => {
              let o = Vo(e?.[n], t?.[n])
              return o === Tn ? r : Object.assign(r, { [n]: o })
            }, {})
          : t
      }, 'deepDiff'),
      vg = 'UNTARGETED'
    function Eg({ args: e, argTypes: t }) {
      let r = {}
      return (
        Object.entries(e).forEach(([n, o]) => {
          let { target: a = vg } = t[n] || {}
          ;(r[a] = r[a] || {}), (r[a][n] = o)
        }),
        r
      )
    }
    m(Eg, 'groupArgsByTarget')
    function xg(e) {
      return Object.keys(e).forEach((t) => e[t] === void 0 && delete e[t]), e
    }
    m(xg, 'deleteUndefined')
    var wg = class {
      constructor() {
        ;(this.initialArgsByStoryId = {}), (this.argsByStoryId = {})
      }
      get(t) {
        if (!(t in this.argsByStoryId))
          throw new Error(`No args known for ${t} -- has it been rendered yet?`)
        return this.argsByStoryId[t]
      }
      setInitial(t) {
        if (!this.initialArgsByStoryId[t.id])
          (this.initialArgsByStoryId[t.id] = t.initialArgs),
            (this.argsByStoryId[t.id] = t.initialArgs)
        else if (this.initialArgsByStoryId[t.id] !== t.initialArgs) {
          let r = Vo(this.initialArgsByStoryId[t.id], this.argsByStoryId[t.id])
          ;(this.initialArgsByStoryId[t.id] = t.initialArgs),
            (this.argsByStoryId[t.id] = t.initialArgs),
            r !== Tn && this.updateFromDelta(t, r)
        }
      }
      updateFromDelta(t, r) {
        let n = f5(r, t.argTypes)
        this.argsByStoryId[t.id] = es(this.argsByStoryId[t.id], n)
      }
      updateFromPersisted(t, r) {
        let n = d5(r, t.argTypes)
        return this.updateFromDelta(t, n)
      }
      update(t, r) {
        if (!(t in this.argsByStoryId))
          throw new Error(`No args known for ${t} -- has it been rendered yet?`)
        this.argsByStoryId[t] = xg({ ...this.argsByStoryId[t], ...r })
      }
    }
    m(wg, 'ArgsStore')
    var y5 = wg,
      Sg = m(
        (e = {}) =>
          Object.entries(e).reduce(
            (t, [r, { defaultValue: n }]) => (typeof n < 'u' && (t[r] = n), t),
            {},
          ),
        'getValuesFromArgTypes',
      ),
      Ag = class {
        constructor({ globals: t = {}, globalTypes: r = {} }) {
          this.set({ globals: t, globalTypes: r })
        }
        set({ globals: t = {}, globalTypes: r = {} }) {
          let n = this.initialGlobals && Vo(this.initialGlobals, this.globals)
          this.allowedGlobalNames = new Set([
            ...Object.keys(t),
            ...Object.keys(r),
          ])
          let o = Sg(r)
          ;(this.initialGlobals = { ...o, ...t }),
            (this.globals = this.initialGlobals),
            n && n !== Tn && this.updateFromPersisted(n)
        }
        filterAllowedGlobals(t) {
          return Object.entries(t).reduce(
            (r, [n, o]) => (
              this.allowedGlobalNames.has(n)
                ? (r[n] = o)
                : ge.warn(
                    `Attempted to set a global (${n}) that is not defined in initial globals or globalTypes`,
                  ),
              r
            ),
            {},
          )
        }
        updateFromPersisted(t) {
          let r = this.filterAllowedGlobals(t)
          this.globals = { ...this.globals, ...r }
        }
        get() {
          return this.globals
        }
        update(t) {
          this.globals = { ...this.globals, ...this.filterAllowedGlobals(t) }
        }
      }
    m(Ag, 'GlobalsStore')
    var h5 = Ag,
      m5 = Qe(og(), 1),
      g5 = (0, m5.default)(1)((e) =>
        Object.values(e).reduce(
          (t, r) => ((t[r.importPath] = t[r.importPath] || r), t),
          {},
        ),
      ),
      Tg = class {
        constructor({ entries: t } = { v: 5, entries: {} }) {
          this.entries = t
        }
        entryFromSpecifier(t) {
          let r = Object.values(this.entries)
          if (t === '*') return r[0]
          if (typeof t == 'string')
            return this.entries[t]
              ? this.entries[t]
              : r.find((a) => a.id.startsWith(t))
          let { name: n, title: o } = t
          return r.find((a) => a.name === n && a.title === o)
        }
        storyIdToEntry(t) {
          let r = this.entries[t]
          if (!r) throw new qh({ storyId: t })
          return r
        }
        importPathToEntry(t) {
          return g5(this.entries)[t]
        }
      }
    m(Tg, 'StoryIndexStore')
    var b5 = Tg,
      v5 = Qe(Zo(), 1),
      E5 = m((e) => (typeof e == 'string' ? { name: e } : e), 'normalizeType'),
      x5 = m(
        (e) => (typeof e == 'string' ? { type: e } : e),
        'normalizeControl',
      ),
      w5 = m((e, t) => {
        let { type: r, control: n, ...o } = e,
          a = { name: t, ...o }
        return (
          r && (a.type = E5(r)),
          n ? (a.control = x5(n)) : n === !1 && (a.control = { disable: !0 }),
          a
        )
      }, 'normalizeInputType'),
      Ho = m((e) => (0, v5.default)(e, w5), 'normalizeInputTypes'),
      Pe = m((e) => (Array.isArray(e) ? e : e ? [e] : []), 'normalizeArrays'),
      S5 = at`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`
    function Ps(e, t, r) {
      let n = t,
        o = typeof t == 'function' ? t : null,
        { story: a } = n
      a && (ge.debug('deprecated story', a), At(S5))
      let i = mm(e),
        s = (typeof n != 'function' && n.name) || n.storyName || a?.name || i,
        l = [...Pe(n.decorators), ...Pe(a?.decorators)],
        u = { ...a?.parameters, ...n.parameters },
        c = { ...a?.args, ...n.args },
        d = { ...a?.argTypes, ...n.argTypes },
        y = [...Pe(n.loaders), ...Pe(a?.loaders)],
        f = [...Pe(n.beforeEach), ...Pe(a?.beforeEach)],
        { render: h, play: g, tags: C = [], globals: b = {} } = n,
        E = u.__id || hm(r.id, i)
      return {
        moduleExport: t,
        id: E,
        name: s,
        tags: C,
        decorators: l,
        parameters: u,
        args: c,
        argTypes: Ho(d),
        loaders: y,
        beforeEach: f,
        globals: b,
        ...(h && { render: h }),
        ...(o && { userStoryFn: o }),
        ...(g && { play: g }),
      }
    }
    m(Ps, 'normalizeStory')
    function Rs(e, t = e.title, r) {
      let { id: n, argTypes: o } = e
      return {
        id: zi(n || t),
        ...e,
        title: t,
        ...(o && { argTypes: Ho(o) }),
        parameters: { fileName: r, ...e.parameters },
      }
    }
    m(Rs, 'normalizeComponentAnnotations')
    var A5 = m((e) => {
        let { globals: t, globalTypes: r } = e
        ;(t || r) &&
          ge.error(
            'Global args/argTypes can only be set globally',
            JSON.stringify({ globals: t, globalTypes: r }),
          )
      }, 'checkGlobals'),
      T5 = m((e) => {
        let { options: t } = e
        t?.storySort &&
          ge.error('The storySort option parameter can only be set globally')
      }, 'checkStorySort'),
      wm = m((e) => {
        e && (A5(e), T5(e))
      }, 'checkDisallowedParameters')
    function Cg(e, t, r) {
      let { default: n, __namedExportsOrder: o, ...a } = e,
        i = Rs(n, r, t)
      wm(i.parameters)
      let s = { meta: i, stories: {}, moduleExports: e }
      return (
        Object.keys(a).forEach((l) => {
          if (qo(l, i)) {
            let u = Ps(l, a[l], i)
            wm(u.parameters), (s.stories[u.id] = u)
          }
        }),
        s
      )
    }
    m(Cg, 'processCSFFile')
    function _g(e) {
      return e != null && Og(e).includes('mount')
    }
    m(_g, 'mountDestructured')
    function Og(e) {
      let t = e.toString().match(/[^(]*\(([^)]*)/)
      if (!t) return []
      let r = ts(t[1])
      if (!r.length) return []
      let n = r[0]
      return n.startsWith('{') && n.endsWith('}')
        ? ts(n.slice(1, -1).replace(/\s/g, '')).map((o) =>
            o.replace(/:.*|=.*/g, ''),
          )
        : []
    }
    m(Og, 'getUsedProps')
    function ts(e) {
      let t = [],
        r = [],
        n = 0
      for (let a = 0; a < e.length; a++)
        if (e[a] === '{' || e[a] === '[') r.push(e[a] === '{' ? '}' : ']')
        else if (e[a] === r[r.length - 1]) r.pop()
        else if (!r.length && e[a] === ',') {
          let i = e.substring(n, a).trim()
          i && t.push(i), (n = a + 1)
        }
      let o = e.substring(n).trim()
      return o && t.push(o), t
    }
    m(ts, 'splitByComma')
    function Ig(e, t, r) {
      let n = r(e)
      return (o) => t(n, o)
    }
    m(Ig, 'decorateStory')
    function kg({
      componentId: e,
      title: t,
      kind: r,
      id: n,
      name: o,
      story: a,
      parameters: i,
      initialArgs: s,
      argTypes: l,
      ...u
    } = {}) {
      return u
    }
    m(kg, 'sanitizeStoryContextUpdate')
    function Pg(e, t) {
      let r = {},
        n = m(
          (a) => (i) => {
            if (!r.value)
              throw new Error('Decorated function called without init')
            return (r.value = { ...r.value, ...kg(i) }), a(r.value)
          },
          'bindWithContext',
        ),
        o = t.reduce((a, i) => Ig(a, i, n), e)
      return (a) => ((r.value = a), o(a))
    }
    m(Pg, 'defaultDecorateStory')
    var Gi = Qe(ws(), 1),
      Ct = m((...e) => {
        let t = {},
          r = e.filter(Boolean),
          n = r.reduce(
            (o, a) => (
              Object.entries(a).forEach(([i, s]) => {
                let l = o[i]
                Array.isArray(s) || typeof l > 'u'
                  ? (o[i] = s)
                  : (0, Gi.default)(s) && (0, Gi.default)(l)
                    ? (t[i] = !0)
                    : typeof s < 'u' && (o[i] = s)
              }),
              o
            ),
            {},
          )
        return (
          Object.keys(t).forEach((o) => {
            let a = r
              .filter(Boolean)
              .map((i) => i[o])
              .filter((i) => typeof i < 'u')
            a.every((i) => (0, Gi.default)(i))
              ? (n[o] = Ct(...a))
              : (n[o] = a[a.length - 1])
          }),
          n
        )
      }, 'combineParameters')
    function Ds(e, t, r) {
      let { moduleExport: n, id: o, name: a } = e || {},
        i = Fs(e, t, r),
        s = m(async (O) => {
          let I = {}
          for (let D of [
            ...('__STORYBOOK_TEST_LOADERS__' in Le &&
            Array.isArray(Le.__STORYBOOK_TEST_LOADERS__)
              ? [Le.__STORYBOOK_TEST_LOADERS__]
              : []),
            Pe(r.loaders),
            Pe(t.loaders),
            Pe(e.loaders),
          ]) {
            if (O.abortSignal.aborted) return I
            let R = await Promise.all(D.map((M) => M(O)))
            Object.assign(I, ...R)
          }
          return I
        }, 'applyLoaders'),
        l = m(async (O) => {
          let I = new Array()
          for (let D of [
            ...Pe(r.beforeEach),
            ...Pe(t.beforeEach),
            ...Pe(e.beforeEach),
          ]) {
            if (O.abortSignal.aborted) return I
            let R = await D(O)
            R && I.push(R)
          }
          return I
        }, 'applyBeforeEach'),
        u = m((O) => O.originalStoryFn(O.args, O), 'undecoratedStoryFn'),
        { applyDecorators: c = Pg, runStep: d } = r,
        y = [...Pe(e?.decorators), ...Pe(t?.decorators), ...Pe(r?.decorators)],
        f = e?.userStoryFn || e?.render || t.render || r.render,
        h = t5(c)(u, y),
        g = m((O) => h(O), 'unboundStoryFn'),
        C = e?.play ?? t?.play,
        b = _g(C)
      if (!f && !b) throw new am({ id: o })
      let E = m(
          (O) => async () => (await O.renderToCanvas(), O.canvas),
          'defaultMount',
        ),
        _ = e.mount ?? t.mount ?? r.mount ?? E,
        T = r.testingLibraryRender
      return {
        storyGlobals: {},
        ...i,
        moduleExport: n,
        id: o,
        name: a,
        story: a,
        originalStoryFn: f,
        undecoratedStoryFn: u,
        unboundStoryFn: g,
        applyLoaders: s,
        applyBeforeEach: l,
        playFunction: C,
        runStep: d,
        mount: _,
        testingLibraryRender: T,
        renderToCanvas: r.renderToCanvas,
        usesMount: b,
      }
    }
    m(Ds, 'prepareStory')
    function Rg(e, t, r) {
      return { ...Fs(void 0, e, t), moduleExport: r }
    }
    m(Rg, 'prepareMeta')
    function Fs(e, t, r) {
      let n = ['dev', 'test'],
        o = Le.DOCS_OPTIONS?.autodocs === !0 ? ['autodocs'] : [],
        a = gm(
          ...n,
          ...o,
          ...(r.tags ?? []),
          ...(t.tags ?? []),
          ...(e?.tags ?? []),
        ),
        i = Ct(r.parameters, t.parameters, e?.parameters),
        { argTypesEnhancers: s = [], argsEnhancers: l = [] } = r,
        u = Ct(r.argTypes, t.argTypes, e?.argTypes)
      if (e) {
        let b = e?.userStoryFn || e?.render || t.render || r.render
        i.__isArgsStory = b && b.length > 0
      }
      let c = { ...r.args, ...t.args, ...e?.args },
        d = { ...t.globals, ...e?.globals },
        y = {
          componentId: t.id,
          title: t.title,
          kind: t.title,
          id: e?.id || t.id,
          name: e?.name || '__meta',
          story: e?.name || '__meta',
          component: t.component,
          subcomponents: t.subcomponents,
          tags: a,
          parameters: i,
          initialArgs: c,
          argTypes: u,
          storyGlobals: d,
        }
      y.argTypes = s.reduce((b, E) => E({ ...y, argTypes: b }), y.argTypes)
      let f = { ...c }
      y.initialArgs = l.reduce(
        (b, E) => ({ ...b, ...E({ ...y, initialArgs: b }) }),
        f,
      )
      let { name: h, story: g, ...C } = y
      return C
    }
    m(Fs, 'preparePartialAnnotations')
    function js(e) {
      let { args: t } = e,
        r = { ...e, allArgs: void 0, argsByTarget: void 0 }
      if (Le.FEATURES?.argTypeTargetsV7) {
        let a = Eg(e)
        r = { ...e, allArgs: e.args, argsByTarget: a, args: a[vg] || {} }
      }
      let n = Object.entries(r.args).reduce((a, [i, s]) => {
          if (!r.argTypes[i]?.mapping) return (a[i] = s), a
          let l = m((u) => {
            let c = r.argTypes[i].mapping
            return c && u in c ? c[u] : u
          }, 'mappingFn')
          return (a[i] = Array.isArray(s) ? s.map(l) : l(s)), a
        }, {}),
        o = Object.entries(n).reduce((a, [i, s]) => {
          let l = r.argTypes[i] || {}
          return ym(l, n, r.globals) && (a[i] = s), a
        }, {})
      return { ...r, unmappedArgs: t, args: o }
    }
    m(js, 'prepareContext')
    var rs = Qe(Zo(), 1),
      ns = m((e, t, r) => {
        let n = typeof e
        switch (n) {
          case 'boolean':
          case 'string':
          case 'number':
          case 'function':
          case 'symbol':
            return { name: n }
          default:
            break
        }
        return e
          ? r.has(e)
            ? (ge.warn(at`
        We've detected a cycle in arg '${t}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/react/essentials/controls#fully-custom-args
      `),
              { name: 'other', value: 'cyclic object' })
            : (r.add(e),
              Array.isArray(e)
                ? {
                    name: 'array',
                    value:
                      e.length > 0
                        ? ns(e[0], t, new Set(r))
                        : { name: 'other', value: 'unknown' },
                  }
                : {
                    name: 'object',
                    value: (0, rs.default)(e, (o) => ns(o, t, new Set(r))),
                  })
          : { name: 'object', value: {} }
      }, 'inferType'),
      Dg = m((e) => {
        let { id: t, argTypes: r = {}, initialArgs: n = {} } = e,
          o = (0, rs.default)(n, (i, s) => ({
            name: s,
            type: ns(i, `${t}.${s}`, new Set()),
          })),
          a = (0, rs.default)(r, (i, s) => ({ name: s }))
        return Ct(o, a, r)
      }, 'inferArgTypes')
    Dg.secondPass = !0
    var C5 = Qe(Zo(), 1),
      _5 = Qe(_R(), 1),
      Sm = m(
        (e, t) => (Array.isArray(t) ? t.includes(e) : e.match(t)),
        'matches',
      ),
      O5 = m(
        (e, t, r) =>
          !t && !r
            ? e
            : e &&
              (0, _5.default)(e, (n, o) => {
                let a = n.name || o
                return (!t || Sm(a, t)) && (!r || !Sm(a, r))
              }),
        'filterArgTypes',
      ),
      I5 = m((e, t, r) => {
        let { type: n, options: o } = e
        if (n) {
          if (r.color && r.color.test(t)) {
            let a = n.name
            if (a === 'string') return { control: { type: 'color' } }
            a !== 'enum' &&
              ge.warn(
                `Addon controls: Control of type color only supports string, received "${a}" instead`,
              )
          }
          if (r.date && r.date.test(t)) return { control: { type: 'date' } }
          switch (n.name) {
            case 'array':
              return { control: { type: 'object' } }
            case 'boolean':
              return { control: { type: 'boolean' } }
            case 'string':
              return { control: { type: 'text' } }
            case 'number':
              return { control: { type: 'number' } }
            case 'enum': {
              let { value: a } = n
              return {
                control: { type: a?.length <= 5 ? 'radio' : 'select' },
                options: a,
              }
            }
            case 'function':
            case 'symbol':
              return null
            default:
              return { control: { type: o ? 'select' : 'object' } }
          }
        }
      }, 'inferControl'),
      Fg = m((e) => {
        let {
          argTypes: t,
          parameters: {
            __isArgsStory: r,
            controls: {
              include: n = null,
              exclude: o = null,
              matchers: a = {},
            } = {},
          },
        } = e
        if (!r) return t
        let i = O5(t, n, o),
          s = (0, C5.default)(i, (l, u) => l?.type && I5(l, u, a))
        return Ct(s, i)
      }, 'inferControls')
    Fg.secondPass = !0
    function Jo({
      argTypes: e,
      globalTypes: t,
      argTypesEnhancers: r,
      decorators: n,
      loaders: o,
      beforeEach: a,
      globals: i,
      initialGlobals: s,
      ...l
    }) {
      return (
        i &&
          Object.keys(i).length > 0 &&
          At(at`
      The preview.js 'globals' field is deprecated and will be removed in Storybook 9.0.
      Please use 'initialGlobals' instead. Learn more:

      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#previewjs-globals-renamed-to-initialglobals
    `),
        {
          ...(e && { argTypes: Ho(e) }),
          ...(t && { globalTypes: Ho(t) }),
          decorators: Pe(n),
          loaders: Pe(o),
          beforeEach: Pe(a),
          argTypesEnhancers: [...(r || []), Dg, Fg],
          initialGlobals: Ct(s, i),
          ...l,
        }
      )
    }
    m(Jo, 'normalizeProjectAnnotations')
    var k5 = m(
      (e) => async () => {
        let t = []
        for (let r of e) {
          let n = await r()
          n && t.unshift(n)
        }
        return async () => {
          for (let r of t) await r()
        }
      },
      'composeBeforeAllHooks',
    )
    function jg(e) {
      return async (t, r, n) => {
        await e.reduceRight(
          (o, a) => async () => a(t, o, n),
          async () => r(n),
        )()
      }
    }
    m(jg, 'composeStepRunners')
    function Br(e, t) {
      return e.map((r) => r.default?.[t] ?? r[t]).filter(Boolean)
    }
    m(Br, 'getField')
    function Ut(e, t, r = {}) {
      return Br(e, t).reduce((n, o) => {
        let a = Pe(o)
        return r.reverseFileOrder ? [...a, ...n] : [...n, ...a]
      }, [])
    }
    m(Ut, 'getArrayField')
    function jr(e, t) {
      return Object.assign({}, ...Br(e, t))
    }
    m(jr, 'getObjectField')
    function rr(e, t) {
      return Br(e, t).pop()
    }
    m(rr, 'getSingletonField')
    function Go(e) {
      let t = Ut(e, 'argTypesEnhancers'),
        r = Br(e, 'runStep'),
        n = Ut(e, 'beforeAll')
      return {
        parameters: Ct(...Br(e, 'parameters')),
        decorators: Ut(e, 'decorators', {
          reverseFileOrder: !(Le.FEATURES?.legacyDecoratorFileOrder ?? !1),
        }),
        args: jr(e, 'args'),
        argsEnhancers: Ut(e, 'argsEnhancers'),
        argTypes: jr(e, 'argTypes'),
        argTypesEnhancers: [
          ...t.filter((o) => !o.secondPass),
          ...t.filter((o) => o.secondPass),
        ],
        globals: jr(e, 'globals'),
        initialGlobals: jr(e, 'initialGlobals'),
        globalTypes: jr(e, 'globalTypes'),
        loaders: Ut(e, 'loaders'),
        beforeAll: k5(n),
        beforeEach: Ut(e, 'beforeEach'),
        render: rr(e, 'render'),
        renderToCanvas: rr(e, 'renderToCanvas'),
        renderToDOM: rr(e, 'renderToDOM'),
        applyDecorators: rr(e, 'applyDecorators'),
        runStep: jg(r),
        tags: Ut(e, 'tags'),
        mount: rr(e, 'mount'),
        testingLibraryRender: rr(e, 'testingLibraryRender'),
      }
    }
    m(Go, 'composeConfigs')
    function P5(e) {
      globalThis.defaultProjectAnnotations = e
    }
    m(P5, 'setDefaultProjectAnnotations')
    var R5 = 'ComposedStory',
      D5 = 'Unnamed Story'
    function Ng(e) {
      return e ? ('default' in e ? e.default : e) : {}
    }
    m(Ng, 'extractAnnotation')
    function F5(e) {
      let t = Array.isArray(e) ? e : [e]
      return (
        (globalThis.globalProjectAnnotations = Go(t.map(Ng))),
        Go([
          globalThis.defaultProjectAnnotations ?? {},
          globalThis.globalProjectAnnotations ?? {},
        ])
      )
    }
    m(F5, 'setProjectAnnotations')
    var $t = []
    function Bg(e, t, r, n, o) {
      if (e === void 0)
        throw new Error('Expected a story but received undefined.')
      t.title = t.title ?? R5
      let a = Rs(t),
        i = o || e.storyName || e.story?.name || e.name || D5,
        s = Ps(i, e, a),
        l = Jo(
          Go([
            n && Object.keys(n).length > 0
              ? n
              : (globalThis.defaultProjectAnnotations ?? {}),
            globalThis.globalProjectAnnotations ?? {},
            r ?? {},
          ]),
        ),
        u = Ds(s, a, l),
        c = Sg(l.globalTypes),
        d = m(() => {
          let C = js({
            hooks: new hg(),
            globals: { ...c, ...l.initialGlobals, ...u.storyGlobals },
            args: { ...u.initialArgs },
            viewMode: 'story',
            loaded: {},
            abortSignal: new AbortController().signal,
            step: m((b, E) => u.runStep(b, E, C), 'step'),
            canvasElement: null,
            canvas: {},
            globalTypes: l.globalTypes,
            ...u,
            context: null,
            mount: null,
          })
          return (
            (C.context = C),
            u.renderToCanvas &&
              (C.renderToCanvas = async () => {
                let b = await u.renderToCanvas?.(
                  {
                    componentId: u.componentId,
                    title: u.title,
                    id: u.id,
                    name: u.name,
                    tags: u.tags,
                    showMain: m(() => {}, 'showMain'),
                    showError: m((E) => {
                      throw new Error(`${E.title}
${E.description}`)
                    }, 'showError'),
                    showException: m((E) => {
                      throw E
                    }, 'showException'),
                    forceRemount: !0,
                    storyContext: C,
                    storyFn: m(() => u.unboundStoryFn(C), 'storyFn'),
                    unboundStoryFn: u.unboundStoryFn,
                  },
                  C.canvasElement,
                )
                b && $t.push(b)
              }),
            (C.mount = u.mount(C)),
            C
          )
        }, 'initializeContext'),
        y,
        f = m(async (C) => {
          let b = d()
          return (
            (b.canvasElement ??= globalThis?.document?.body),
            y && (b.loaded = y.loaded),
            Object.assign(b, C),
            u.playFunction(b)
          )
        }, 'play'),
        h = m((C) => {
          let b = d()
          return Object.assign(b, C), Lg(u, b)
        }, 'run'),
        g = u.playFunction ? f : void 0
      return Object.assign(
        m(function (C) {
          let b = d()
          return (
            y && (b.loaded = y.loaded),
            (b.args = { ...b.initialArgs, ...C }),
            u.unboundStoryFn(b)
          )
        }, 'storyFn'),
        {
          id: u.id,
          storyName: i,
          load: m(async () => {
            for (let b of [...$t].reverse()) await b()
            $t.length = 0
            let C = d()
            ;(C.loaded = await u.applyLoaders(C)),
              $t.push(...(await u.applyBeforeEach(C)).filter(Boolean)),
              (y = C)
          }, 'load'),
          args: u.initialArgs,
          parameters: u.parameters,
          argTypes: u.argTypes,
          play: g,
          run: h,
          tags: u.tags,
        },
      )
    }
    m(Bg, 'composeStory')
    var j5 = m((e, t, r, n) => Bg(e, t, r, {}, n), 'defaultComposeStory')
    function N5(e, t, r = j5) {
      let { default: n, __esModule: o, __namedExportsOrder: a, ...i } = e
      return Object.entries(i).reduce(
        (s, [l, u]) =>
          qo(l, n) ? Object.assign(s, { [l]: r(u, n, t, l) }) : s,
        {},
      )
    }
    m(N5, 'composeStories')
    function B5(e) {
      return e.extend({
        mount: m(async ({ mount: t, page: r }, n) => {
          await n(async (o, ...a) => {
            if (
              !('__pw_type' in o) ||
              ('__pw_type' in o && o.__pw_type !== 'jsx')
            )
              throw new Error(at`
              Portable stories in Playwright CT only work when referencing JSX elements.
              Please use JSX format for your components such as:

              instead of:
              await mount(MyComponent, { props: { foo: 'bar' } })

              do:
              await mount(<MyComponent foo="bar"/>)

              More info: https://storybook.js.org/docs/api/portable-stories-playwright
            `)
            await r.evaluate(async (s) => {
              let l = await globalThis.__pwUnwrapObject?.(s)
              return ('__pw_type' in l ? l.type : l)?.load?.()
            }, o)
            let i = await t(o, ...a)
            return (
              await r.evaluate(async (s) => {
                let l = await globalThis.__pwUnwrapObject?.(s),
                  u = '__pw_type' in l ? l.type : l,
                  c = document.querySelector('#root')
                return u?.play?.({ canvasElement: c })
              }, o),
              i
            )
          })
        }, 'mount'),
      })
    }
    m(B5, 'createPlaywrightTest')
    async function Lg(e, t) {
      for (let o of [...$t].reverse()) await o()
      if ((($t.length = 0), !t.canvasElement)) {
        let o = document.createElement('div')
        globalThis?.document?.body?.appendChild(o),
          (t.canvasElement = o),
          $t.push(() => {
            globalThis?.document?.body?.contains(o) &&
              globalThis?.document?.body?.removeChild(o)
          })
      }
      if (((t.loaded = await e.applyLoaders(t)), t.abortSignal.aborted)) return
      $t.push(...(await e.applyBeforeEach(t)).filter(Boolean))
      let r = e.playFunction,
        n = e.usesMount
      n || (await t.mount()),
        !t.abortSignal.aborted &&
          r &&
          (n ||
            (t.mount = async () => {
              throw new Bo({ playFunction: r.toString() })
            }),
          await r(t))
    }
    m(Lg, 'runStory')
    var Am = 1e3,
      L5 = 1e4,
      qg = class {
        constructor(t, r, n) {
          ;(this.importFn = r),
            (this.getStoriesJsonData = m(() => {
              let i = this.getSetStoriesPayload(),
                s = [
                  'fileName',
                  'docsOnly',
                  'framework',
                  '__id',
                  '__isArgsStory',
                ]
              return {
                v: 3,
                stories: (0, p5.default)(i.stories, (l) => {
                  let { importPath: u } = this.storyIndex.entries[l.id]
                  return {
                    ...(0, Em.default)(l, ['id', 'name', 'title']),
                    importPath: u,
                    kind: l.title,
                    story: l.name,
                    parameters: {
                      ...(0, Em.default)(l.parameters, s),
                      fileName: u,
                    },
                  }
                }),
              }
            }, 'getStoriesJsonData')),
            (this.storyIndex = new b5(t)),
            (this.projectAnnotations = Jo(n))
          let { initialGlobals: o, globalTypes: a } = this.projectAnnotations
          ;(this.args = new y5()),
            (this.userGlobals = new h5({ globals: o, globalTypes: a })),
            (this.hooks = {}),
            (this.cleanupCallbacks = {}),
            (this.processCSFFileWithCache = (0, Ji.default)(Am)(Cg)),
            (this.prepareMetaWithCache = (0, Ji.default)(Am)(Rg)),
            (this.prepareStoryWithCache = (0, Ji.default)(L5)(Ds))
        }
        setProjectAnnotations(t) {
          this.projectAnnotations = Jo(t)
          let { initialGlobals: r, globalTypes: n } = t
          this.userGlobals.set({ globals: r, globalTypes: n })
        }
        async onStoriesChanged({ importFn: t, storyIndex: r }) {
          t && (this.importFn = t),
            r && (this.storyIndex.entries = r.entries),
            this.cachedCSFFiles && (await this.cacheAllCSFFiles())
        }
        async storyIdToEntry(t) {
          return this.storyIndex.storyIdToEntry(t)
        }
        async loadCSFFileByStoryId(t) {
          let { importPath: r, title: n } = this.storyIndex.storyIdToEntry(t),
            o = await this.importFn(r)
          return this.processCSFFileWithCache(o, r, n)
        }
        async loadAllCSFFiles() {
          let t = {}
          return (
            Object.entries(this.storyIndex.entries).forEach(
              ([r, { importPath: n }]) => {
                t[n] = r
              },
            ),
            (
              await Promise.all(
                Object.entries(t).map(async ([r, n]) => ({
                  importPath: r,
                  csfFile: await this.loadCSFFileByStoryId(n),
                })),
              )
            ).reduce((r, { importPath: n, csfFile: o }) => ((r[n] = o), r), {})
          )
        }
        async cacheAllCSFFiles() {
          this.cachedCSFFiles = await this.loadAllCSFFiles()
        }
        preparedMetaFromCSFFile({ csfFile: t }) {
          let r = t.meta
          return this.prepareMetaWithCache(
            r,
            this.projectAnnotations,
            t.moduleExports.default,
          )
        }
        async loadStory({ storyId: t }) {
          let r = await this.loadCSFFileByStoryId(t)
          return this.storyFromCSFFile({ storyId: t, csfFile: r })
        }
        storyFromCSFFile({ storyId: t, csfFile: r }) {
          let n = r.stories[t]
          if (!n) throw new em({ storyId: t })
          let o = r.meta,
            a = this.prepareStoryWithCache(n, o, this.projectAnnotations)
          return (
            this.args.setInitial(a),
            (this.hooks[a.id] = this.hooks[a.id] || new hg()),
            a
          )
        }
        componentStoriesFromCSFFile({ csfFile: t }) {
          return Object.keys(this.storyIndex.entries)
            .filter((r) => !!t.stories[r])
            .map((r) => this.storyFromCSFFile({ storyId: r, csfFile: t }))
        }
        async loadEntry(t) {
          let r = await this.storyIdToEntry(t),
            n = r.type === 'docs' ? r.storiesImports : [],
            [o, ...a] = await Promise.all([
              this.importFn(r.importPath),
              ...n.map((i) => {
                let s = this.storyIndex.importPathToEntry(i)
                return this.loadCSFFileByStoryId(s.id)
              }),
            ])
          return { entryExports: o, csfFiles: a }
        }
        getStoryContext(t, { forceInitialArgs: r = !1 } = {}) {
          let n = this.userGlobals.get(),
            { initialGlobals: o } = this.userGlobals
          return js({
            ...t,
            args: r ? t.initialArgs : this.args.get(t.id),
            initialGlobals: o,
            globalTypes: this.projectAnnotations.globalTypes,
            userGlobals: n,
            globals: { ...n, ...t.storyGlobals },
            hooks: this.hooks[t.id],
          })
        }
        addCleanupCallbacks(t, r) {
          this.cleanupCallbacks[t.id] = r
        }
        async cleanupStory(t) {
          this.hooks[t.id].clean()
          let r = this.cleanupCallbacks[t.id]
          if (r) for (let n of [...r].reverse()) await n()
          delete this.cleanupCallbacks[t.id]
        }
        extract(t = { includeDocsOnly: !1 }) {
          let { cachedCSFFiles: r } = this
          if (!r) throw new Uh()
          return Object.entries(this.storyIndex.entries).reduce(
            (n, [o, { type: a, importPath: i }]) => {
              if (a === 'docs') return n
              let s = r[i],
                l = this.storyFromCSFFile({ storyId: o, csfFile: s })
              return (
                (!t.includeDocsOnly && l.parameters.docsOnly) ||
                  (n[o] = Object.entries(l).reduce(
                    (u, [c, d]) =>
                      c === 'moduleExport' || typeof d == 'function'
                        ? u
                        : Array.isArray(d)
                          ? Object.assign(u, { [c]: d.slice().sort() })
                          : Object.assign(u, { [c]: d }),
                    { args: l.initialArgs },
                  )),
                n
              )
            },
            {},
          )
        }
        getSetStoriesPayload() {
          let t = this.extract({ includeDocsOnly: !0 }),
            r = Object.values(t).reduce(
              (n, { title: o }) => ((n[o] = {}), n),
              {},
            )
          return {
            v: 2,
            globals: this.userGlobals.get(),
            globalParameters: {},
            kindParameters: r,
            stories: t,
          }
        }
        raw() {
          return (
            At(
              'StoryStore.raw() is deprecated and will be removed in 9.0, please use extract() instead',
            ),
            Object.values(this.extract())
              .map(({ id: t }) => this.fromId(t))
              .filter(Boolean)
          )
        }
        fromId(t) {
          if (
            (At(
              'StoryStore.fromId() is deprecated and will be removed in 9.0, please use loadStory() instead',
            ),
            !this.cachedCSFFiles)
          )
            throw new Error(
              'Cannot call fromId/raw() unless you call cacheAllCSFFiles() first.',
            )
          let r
          try {
            ;({ importPath: r } = this.storyIndex.storyIdToEntry(t))
          } catch {
            return null
          }
          let n = this.cachedCSFFiles[r],
            o = this.storyFromCSFFile({ storyId: t, csfFile: n })
          return {
            ...o,
            storyFn: m((a) => {
              let i = {
                ...this.getStoryContext(o),
                abortSignal: new AbortController().signal,
                canvasElement: null,
                loaded: {},
                step: m((s, l) => o.runStep(s, l, i), 'step'),
                context: null,
                mount: null,
                canvas: {},
                viewMode: 'story',
              }
              return o.unboundStoryFn({ ...i, ...a })
            }, 'storyFn'),
          }
        }
      }
    m(qg, 'StoryStore')
    var q5 = qg
    function Mg(e) {
      return e.startsWith('\\\\?\\') ? e : e.replace(/\\/g, '/')
    }
    m(Mg, 'slash')
    var M5 = m((e) => {
      if (e.length === 0) return e
      let t = e[e.length - 1],
        r = t?.replace(/(?:[.](?:story|stories))?([.][^.]+)$/i, '')
      if (e.length === 1) return [r]
      let n = e[e.length - 2]
      return r && n && r.toLowerCase() === n.toLowerCase()
        ? [...e.slice(0, -2), r]
        : r && (/^(story|stories)([.][^.]+)$/i.test(t) || /^index$/i.test(r))
          ? e.slice(0, -1)
          : [...e.slice(0, -1), r]
    }, 'sanitize')
    function os(e) {
      return e
        .flatMap((t) => t.split('/'))
        .filter(Boolean)
        .join('/')
    }
    m(os, 'pathJoin')
    var U5 = m((e, t, r) => {
        let {
          directory: n,
          importPathMatcher: o,
          titlePrefix: a = '',
        } = t || {}
        typeof e == 'number' &&
          Mt.warn(at`
      CSF Auto-title received a numeric fileName. This typically happens when
      webpack is mis-configured in production mode. To force webpack to produce
      filenames, set optimization.moduleIds = "named" in your webpack config.
    `)
        let i = Mg(String(e))
        if (o.exec(i)) {
          if (!r) {
            let s = i.replace(n, ''),
              l = os([a, s]).split('/')
            return (l = M5(l)), l.join('/')
          }
          return a ? os([a, r]) : r
        }
      }, 'userOrAutoTitleFromSpecifier'),
      Qre = m((e, t, r) => {
        for (let n = 0; n < t.length; n += 1) {
          let o = U5(e, t[n], r)
          if (o) return o
        }
        return r || void 0
      }, 'userOrAutoTitle'),
      Tm = /\s*\/\s*/,
      $5 = m(
        (e = {}) =>
          (t, r) => {
            if (t.title === r.title && !e.includeNames) return 0
            let n = e.method || 'configure',
              o = e.order || [],
              a = t.title.trim().split(Tm),
              i = r.title.trim().split(Tm)
            e.includeNames && (a.push(t.name), i.push(r.name))
            let s = 0
            for (; a[s] || i[s]; ) {
              if (!a[s]) return -1
              if (!i[s]) return 1
              let l = a[s],
                u = i[s]
              if (l !== u) {
                let d = o.indexOf(l),
                  y = o.indexOf(u),
                  f = o.indexOf('*')
                return d !== -1 || y !== -1
                  ? (d === -1 && (f !== -1 ? (d = f) : (d = o.length)),
                    y === -1 && (f !== -1 ? (y = f) : (y = o.length)),
                    d - y)
                  : n === 'configure'
                    ? 0
                    : l.localeCompare(u, e.locales ? e.locales : void 0, {
                        numeric: !0,
                        sensitivity: 'accent',
                      })
              }
              let c = o.indexOf(l)
              c === -1 && (c = o.indexOf('*')),
                (o = c !== -1 && Array.isArray(o[c + 1]) ? o[c + 1] : []),
                (s += 1)
            }
            return 0
          },
        'storySort',
      ),
      z5 = m((e, t, r) => {
        if (t) {
          let n
          typeof t == 'function' ? (n = t) : (n = $5(t)), e.sort(n)
        } else
          e.sort((n, o) => r.indexOf(n.importPath) - r.indexOf(o.importPath))
        return e
      }, 'sortStoriesCommon'),
      Zre = m((e, t, r) => {
        try {
          return z5(e, t, r)
        } catch (n) {
          throw new Error(at`
    Error sorting stories with sort parameter ${t}:

    > ${n.message}
    
    Are you using a V6-style sort function in V7 mode?

    More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#v7-style-story-sort
  `)
        }
      }, 'sortStoriesV7'),
      ra = new Error('prepareAborted'),
      { AbortController: Cm } = globalThis
    function as(e) {
      try {
        let { name: t = 'Error', message: r = String(e), stack: n } = e
        return { name: t, message: r, stack: n }
      } catch {
        return { name: 'Error', message: String(e) }
      }
    }
    m(as, 'serializeError')
    var Ug = class {
      constructor(
        t,
        r,
        n,
        o,
        a,
        i,
        s = { autoplay: !0, forceInitialArgs: !1 },
        l,
      ) {
        ;(this.channel = t),
          (this.store = r),
          (this.renderToScreen = n),
          (this.callbacks = o),
          (this.id = a),
          (this.viewMode = i),
          (this.renderOptions = s),
          (this.type = 'story'),
          (this.notYetRendered = !0),
          (this.rerenderEnqueued = !1),
          (this.disableKeyListeners = !1),
          (this.teardownRender = m(() => {}, 'teardownRender')),
          (this.torndown = !1),
          (this.abortController = new Cm()),
          l && ((this.story = l), (this.phase = 'preparing'))
      }
      async runPhase(t, r, n) {
        ;(this.phase = r),
          this.channel.emit(wr, { newPhase: this.phase, storyId: this.id }),
          n && (await n(), this.checkIfAborted(t))
      }
      checkIfAborted(t) {
        return t.aborted
          ? ((this.phase = 'aborted'),
            this.channel.emit(wr, { newPhase: this.phase, storyId: this.id }),
            !0)
          : !1
      }
      async prepare() {
        if (
          (await this.runPhase(
            this.abortController.signal,
            'preparing',
            async () => {
              this.story = await this.store.loadStory({ storyId: this.id })
            },
          ),
          this.abortController.signal.aborted)
        )
          throw (await this.store.cleanupStory(this.story), ra)
      }
      isEqual(t) {
        return !!(this.id === t.id && this.story && this.story === t.story)
      }
      isPreparing() {
        return ['preparing'].includes(this.phase)
      }
      isPending() {
        return ['loading', 'beforeEach', 'rendering', 'playing'].includes(
          this.phase,
        )
      }
      async renderToElement(t) {
        return (
          (this.canvasElement = t),
          this.render({ initial: !0, forceRemount: !0 })
        )
      }
      storyContext() {
        if (!this.story)
          throw new Error('Cannot call storyContext before preparing')
        let { forceInitialArgs: t } = this.renderOptions
        return this.store.getStoryContext(this.story, { forceInitialArgs: t })
      }
      async render({ initial: t = !1, forceRemount: r = !1 } = {}) {
        let { canvasElement: n } = this
        if (!this.story) throw new Error('cannot render when not prepared')
        let o = this.story
        if (!n) throw new Error('cannot render when canvasElement is unset')
        let {
          id: a,
          componentId: i,
          title: s,
          name: l,
          tags: u,
          applyLoaders: c,
          applyBeforeEach: d,
          unboundStoryFn: y,
          playFunction: f,
          runStep: h,
        } = o
        r && !t && (this.cancelRender(), (this.abortController = new Cm()))
        let g = this.abortController.signal,
          C = !1,
          b = o.usesMount
        try {
          let E = {
            ...this.storyContext(),
            viewMode: this.viewMode,
            abortSignal: g,
            canvasElement: n,
            loaded: {},
            step: m((R, M) => h(R, M, E), 'step'),
            context: null,
            canvas: {},
            renderToCanvas: m(async () => {
              let R = await this.renderToScreen(_, n)
              ;(this.teardownRender = R || (() => {})), (C = !0)
            }, 'renderToCanvas'),
            mount: m(async (...R) => {
              this.callbacks.showStoryDuringRender?.()
              let M = null
              return (
                await this.runPhase(g, 'rendering', async () => {
                  M = await o.mount(E)(...R)
                }),
                b && (await this.runPhase(g, 'playing')),
                M
              )
            }, 'mount'),
          }
          E.context = E
          let _ = {
            componentId: i,
            title: s,
            kind: s,
            id: a,
            name: l,
            story: l,
            tags: u,
            ...this.callbacks,
            showError: m(
              (R) => ((this.phase = 'errored'), this.callbacks.showError(R)),
              'showError',
            ),
            showException: m(
              (R) => (
                (this.phase = 'errored'), this.callbacks.showException(R)
              ),
              'showException',
            ),
            forceRemount: r || this.notYetRendered,
            storyContext: E,
            storyFn: m(() => y(E), 'storyFn'),
            unboundStoryFn: y,
          }
          if (
            (await this.runPhase(g, 'loading', async () => {
              E.loaded = await c(E)
            }),
            g.aborted)
          )
            return
          let T = await d(E)
          if (
            (this.store.addCleanupCallbacks(o, T),
            this.checkIfAborted(g) ||
              (!C && !b && (await E.mount()),
              (this.notYetRendered = !1),
              g.aborted))
          )
            return
          let O =
              this.story.parameters?.test?.dangerouslyIgnoreUnhandledErrors ===
              !0,
            I = new Set(),
            D = m((R) => I.add('error' in R ? R.error : R.reason), 'onError')
          if (
            this.renderOptions.autoplay &&
            r &&
            f &&
            this.phase !== 'errored'
          ) {
            window.addEventListener('error', D),
              window.addEventListener('unhandledrejection', D),
              (this.disableKeyListeners = !0)
            try {
              if (
                (b
                  ? await f(E)
                  : ((E.mount = async () => {
                      throw new Bo({ playFunction: f.toString() })
                    }),
                    await this.runPhase(g, 'playing', async () => f(E))),
                !C)
              )
                throw new sm()
              this.checkIfAborted(g),
                !O && I.size > 0
                  ? await this.runPhase(g, 'errored')
                  : await this.runPhase(g, 'played')
            } catch (R) {
              if (
                (this.callbacks.showStoryDuringRender?.(),
                await this.runPhase(g, 'errored', async () => {
                  this.channel.emit(iu, as(R))
                }),
                this.story.parameters.throwPlayFunctionExceptions !== !1)
              )
                throw R
              console.error(R)
            }
            if (
              (!O && I.size > 0 && this.channel.emit(vu, Array.from(I).map(as)),
              (this.disableKeyListeners = !1),
              window.removeEventListener('unhandledrejection', D),
              window.removeEventListener('error', D),
              g.aborted)
            )
              return
          }
          await this.runPhase(g, 'completed', async () =>
            this.channel.emit(cn, a),
          )
        } catch (E) {
          ;(this.phase = 'errored'), this.callbacks.showException(E)
        }
        this.rerenderEnqueued && ((this.rerenderEnqueued = !1), this.render())
      }
      async rerender() {
        if (this.isPending() && this.phase !== 'playing')
          this.rerenderEnqueued = !0
        else return this.render()
      }
      async remount() {
        return await this.teardown(), this.render({ forceRemount: !0 })
      }
      cancelRender() {
        this.abortController?.abort()
      }
      async teardown() {
        ;(this.torndown = !0),
          this.cancelRender(),
          this.story && (await this.store.cleanupStory(this.story))
        for (let t = 0; t < 3; t += 1) {
          if (!this.isPending()) {
            await this.teardownRender()
            return
          }
          await new Promise((r) => setTimeout(r, 0))
        }
        window.location.reload(), await new Promise(() => {})
      }
    }
    m(Ug, 'StoryRender')
    var is = Ug,
      { fetch: V5 } = Le,
      H5 = './index.json',
      $g = class {
        constructor(t, r, n = or.getChannel(), o = !0) {
          ;(this.importFn = t),
            (this.getProjectAnnotations = r),
            (this.channel = n),
            (this.storyRenders = []),
            (this.storeInitializationPromise = new Promise((a, i) => {
              ;(this.resolveStoreInitializationPromise = a),
                (this.rejectStoreInitializationPromise = i)
            })),
            o && this.initialize()
        }
        get storyStore() {
          return new Proxy(
            {},
            {
              get: m((t, r) => {
                if (this.storyStoreValue)
                  return (
                    At(
                      'Accessing the Story Store is deprecated and will be removed in 9.0',
                    ),
                    this.storyStoreValue[r]
                  )
                throw new rm()
              }, 'get'),
            },
          )
        }
        async initialize() {
          this.setupListeners()
          try {
            let t = await this.getProjectAnnotationsOrRenderError()
            await this.runBeforeAllHook(t),
              await this.initializeWithProjectAnnotations(t)
          } catch (t) {
            this.rejectStoreInitializationPromise(t)
          }
        }
        ready() {
          return this.storeInitializationPromise
        }
        setupListeners() {
          this.channel.on(yu, this.onStoryIndexChanged.bind(this)),
            this.channel.on(co, this.onUpdateGlobals.bind(this)),
            this.channel.on(po, this.onUpdateArgs.bind(this)),
            this.channel.on(tu, this.onRequestArgTypesInfo.bind(this)),
            this.channel.on(lo, this.onResetArgs.bind(this)),
            this.channel.on(so, this.onForceReRender.bind(this)),
            this.channel.on(ou, this.onForceRemount.bind(this))
        }
        async getProjectAnnotationsOrRenderError() {
          try {
            let t = await this.getProjectAnnotations()
            if (
              ((this.renderToCanvas = t.renderToCanvas), !this.renderToCanvas)
            )
              throw new zh()
            return t
          } catch (t) {
            throw (
              (this.renderPreviewEntryError('Error reading preview.js:', t), t)
            )
          }
        }
        async initializeWithProjectAnnotations(t) {
          this.projectAnnotationsBeforeInitialization = t
          try {
            let r = await this.getStoryIndexFromServer()
            return this.initializeWithStoryIndex(r)
          } catch (r) {
            throw (
              (this.renderPreviewEntryError('Error loading story index:', r), r)
            )
          }
        }
        async runBeforeAllHook(t) {
          try {
            await this.beforeAllCleanup?.(),
              (this.beforeAllCleanup = await t.beforeAll?.())
          } catch (r) {
            throw (
              (this.renderPreviewEntryError('Error in beforeAll hook:', r), r)
            )
          }
        }
        async getStoryIndexFromServer() {
          let t = await V5(H5)
          if (t.status === 200) return t.json()
          throw new Jh({ text: await t.text() })
        }
        initializeWithStoryIndex(t) {
          if (!this.projectAnnotationsBeforeInitialization)
            throw new Error(
              'Cannot call initializeWithStoryIndex until project annotations resolve',
            )
          ;(this.storyStoreValue = new q5(
            t,
            this.importFn,
            this.projectAnnotationsBeforeInitialization,
          )),
            delete this.projectAnnotationsBeforeInitialization,
            this.setInitialGlobals(),
            this.resolveStoreInitializationPromise()
        }
        async setInitialGlobals() {
          this.emitGlobals()
        }
        emitGlobals() {
          if (!this.storyStoreValue) throw new rt({ methodName: 'emitGlobals' })
          let t = {
            globals: this.storyStoreValue.userGlobals.get() || {},
            globalTypes:
              this.storyStoreValue.projectAnnotations.globalTypes || {},
          }
          this.channel.emit(cu, t)
        }
        async onGetProjectAnnotationsChanged({ getProjectAnnotations: t }) {
          delete this.previewEntryError, (this.getProjectAnnotations = t)
          let r = await this.getProjectAnnotationsOrRenderError()
          if ((await this.runBeforeAllHook(r), !this.storyStoreValue)) {
            await this.initializeWithProjectAnnotations(r)
            return
          }
          this.storyStoreValue.setProjectAnnotations(r), this.emitGlobals()
        }
        async onStoryIndexChanged() {
          if (
            (delete this.previewEntryError,
            !(
              !this.storyStoreValue &&
              !this.projectAnnotationsBeforeInitialization
            ))
          )
            try {
              let t = await this.getStoryIndexFromServer()
              if (this.projectAnnotationsBeforeInitialization) {
                this.initializeWithStoryIndex(t)
                return
              }
              await this.onStoriesChanged({ storyIndex: t })
            } catch (t) {
              throw (
                (this.renderPreviewEntryError('Error loading story index:', t),
                t)
              )
            }
        }
        async onStoriesChanged({ importFn: t, storyIndex: r }) {
          if (!this.storyStoreValue)
            throw new rt({ methodName: 'onStoriesChanged' })
          await this.storyStoreValue.onStoriesChanged({
            importFn: t,
            storyIndex: r,
          })
        }
        async onUpdateGlobals({ globals: t, currentStory: r }) {
          if (
            (this.storyStoreValue || (await this.storeInitializationPromise),
            !this.storyStoreValue)
          )
            throw new rt({ methodName: 'onUpdateGlobals' })
          if ((this.storyStoreValue.userGlobals.update(t), r)) {
            let {
              initialGlobals: n,
              storyGlobals: o,
              userGlobals: a,
              globals: i,
            } = this.storyStoreValue.getStoryContext(r)
            this.channel.emit(xr, {
              initialGlobals: n,
              userGlobals: a,
              storyGlobals: o,
              globals: i,
            })
          } else {
            let { initialGlobals: n, globals: o } =
              this.storyStoreValue.userGlobals
            this.channel.emit(xr, {
              initialGlobals: n,
              userGlobals: o,
              storyGlobals: {},
              globals: o,
            })
          }
          await Promise.all(this.storyRenders.map((n) => n.rerender()))
        }
        async onUpdateArgs({ storyId: t, updatedArgs: r }) {
          if (!this.storyStoreValue)
            throw new rt({ methodName: 'onUpdateArgs' })
          this.storyStoreValue.args.update(t, r),
            await Promise.all(
              this.storyRenders
                .filter((n) => n.id === t && !n.renderOptions.forceInitialArgs)
                .map((n) =>
                  n.story && n.story.usesMount ? n.remount() : n.rerender(),
                ),
            ),
            this.channel.emit(pu, {
              storyId: t,
              args: this.storyStoreValue.args.get(t),
            })
        }
        async onRequestArgTypesInfo({ id: t, payload: r }) {
          try {
            await this.storeInitializationPromise
            let n = await this.storyStoreValue?.loadStory(r)
            this.channel.emit(Ja, {
              id: t,
              success: !0,
              payload: { argTypes: n?.argTypes || {} },
              error: null,
            })
          } catch (n) {
            this.channel.emit(Ja, { id: t, success: !1, error: n?.message })
          }
        }
        async onResetArgs({ storyId: t, argNames: r }) {
          if (!this.storyStoreValue) throw new rt({ methodName: 'onResetArgs' })
          let n =
              this.storyRenders.find((a) => a.id === t)?.story ||
              (await this.storyStoreValue.loadStory({ storyId: t })),
            o = (
              r || [
                ...new Set([
                  ...Object.keys(n.initialArgs),
                  ...Object.keys(this.storyStoreValue.args.get(t)),
                ]),
              ]
            ).reduce((a, i) => ((a[i] = n.initialArgs[i]), a), {})
          await this.onUpdateArgs({ storyId: t, updatedArgs: o })
        }
        async onForceReRender() {
          await Promise.all(this.storyRenders.map((t) => t.rerender()))
        }
        async onForceRemount({ storyId: t }) {
          await Promise.all(
            this.storyRenders.filter((r) => r.id === t).map((r) => r.remount()),
          )
        }
        renderStoryToElement(t, r, n, o) {
          if (!this.renderToCanvas || !this.storyStoreValue)
            throw new rt({ methodName: 'renderStoryToElement' })
          let a = new is(
            this.channel,
            this.storyStoreValue,
            this.renderToCanvas,
            n,
            t.id,
            'docs',
            o,
            t,
          )
          return (
            a.renderToElement(r),
            this.storyRenders.push(a),
            async () => {
              await this.teardownRender(a)
            }
          )
        }
        async teardownRender(t, { viewModeChanged: r } = {}) {
          ;(this.storyRenders = this.storyRenders.filter((n) => n !== t)),
            await t?.teardown?.({ viewModeChanged: r })
        }
        async loadStory({ storyId: t }) {
          if (!this.storyStoreValue) throw new rt({ methodName: 'loadStory' })
          return this.storyStoreValue.loadStory({ storyId: t })
        }
        getStoryContext(t, { forceInitialArgs: r = !1 } = {}) {
          if (!this.storyStoreValue)
            throw new rt({ methodName: 'getStoryContext' })
          return this.storyStoreValue.getStoryContext(t, {
            forceInitialArgs: r,
          })
        }
        async extract(t) {
          if (!this.storyStoreValue) throw new rt({ methodName: 'extract' })
          if (this.previewEntryError) throw this.previewEntryError
          return (
            await this.storyStoreValue.cacheAllCSFFiles(),
            this.storyStoreValue.extract(t)
          )
        }
        renderPreviewEntryError(t, r) {
          ;(this.previewEntryError = r),
            ge.error(t),
            ge.error(r),
            this.channel.emit(ru, r)
        }
      }
    m($g, 'Preview')
    var J5 = $g,
      G5 = !1,
      Wi = 'Invariant failed'
    function Uo(e, t) {
      if (!e) {
        if (G5) throw new Error(Wi)
        var r = typeof t == 'function' ? t() : t,
          n = r ? ''.concat(Wi, ': ').concat(r) : Wi
        throw new Error(n)
      }
    }
    m(Uo, 'invariant')
    var zg = class {
      constructor(t, r, n, o) {
        ;(this.channel = t),
          (this.store = r),
          (this.renderStoryToElement = n),
          (this.storyIdByName = m((a) => {
            let i = this.nameToStoryId.get(a)
            if (i) return i
            throw new Error(`No story found with that name: ${a}`)
          }, 'storyIdByName')),
          (this.componentStories = m(
            () => this.componentStoriesValue,
            'componentStories',
          )),
          (this.componentStoriesFromCSFFile = m(
            (a) => this.store.componentStoriesFromCSFFile({ csfFile: a }),
            'componentStoriesFromCSFFile',
          )),
          (this.storyById = m((a) => {
            if (!a) {
              if (!this.primaryStory)
                throw new Error(
                  'No primary story defined for docs entry. Did you forget to use `<Meta>`?',
                )
              return this.primaryStory
            }
            let i = this.storyIdToCSFFile.get(a)
            if (!i)
              throw new Error(
                `Called \`storyById\` for story that was never loaded: ${a}`,
              )
            return this.store.storyFromCSFFile({ storyId: a, csfFile: i })
          }, 'storyById')),
          (this.getStoryContext = m(
            (a) => ({
              ...this.store.getStoryContext(a),
              loaded: {},
              viewMode: 'docs',
            }),
            'getStoryContext',
          )),
          (this.loadStory = m(
            (a) => this.store.loadStory({ storyId: a }),
            'loadStory',
          )),
          (this.componentStoriesValue = []),
          (this.storyIdToCSFFile = new Map()),
          (this.exportToStory = new Map()),
          (this.exportsToCSFFile = new Map()),
          (this.nameToStoryId = new Map()),
          (this.attachedCSFFiles = new Set()),
          o.forEach((a, i) => {
            this.referenceCSFFile(a)
          })
      }
      referenceCSFFile(t) {
        this.exportsToCSFFile.set(t.moduleExports, t),
          this.exportsToCSFFile.set(t.moduleExports.default, t),
          this.store
            .componentStoriesFromCSFFile({ csfFile: t })
            .forEach((r) => {
              let n = t.stories[r.id]
              this.storyIdToCSFFile.set(n.id, t),
                this.exportToStory.set(n.moduleExport, r)
            })
      }
      attachCSFFile(t) {
        if (!this.exportsToCSFFile.has(t.moduleExports))
          throw new Error(
            'Cannot attach a CSF file that has not been referenced',
          )
        this.attachedCSFFiles.has(t) ||
          (this.attachedCSFFiles.add(t),
          this.store
            .componentStoriesFromCSFFile({ csfFile: t })
            .forEach((r) => {
              this.nameToStoryId.set(r.name, r.id),
                this.componentStoriesValue.push(r),
                this.primaryStory || (this.primaryStory = r)
            }))
      }
      referenceMeta(t, r) {
        let n = this.resolveModuleExport(t)
        if (n.type !== 'meta')
          throw new Error(
            '<Meta of={} /> must reference a CSF file module export or meta export. Did you mistakenly reference your component instead of your CSF file?',
          )
        r && this.attachCSFFile(n.csfFile)
      }
      get projectAnnotations() {
        let { projectAnnotations: t } = this.store
        if (!t)
          throw new Error(
            "Can't get projectAnnotations from DocsContext before they are initialized",
          )
        return t
      }
      resolveAttachedModuleExportType(t) {
        if (t === 'story') {
          if (!this.primaryStory)
            throw new Error(
              'No primary story attached to this docs file, did you forget to use <Meta of={} />?',
            )
          return { type: 'story', story: this.primaryStory }
        }
        if (this.attachedCSFFiles.size === 0)
          throw new Error(
            'No CSF file attached to this docs file, did you forget to use <Meta of={} />?',
          )
        let r = Array.from(this.attachedCSFFiles)[0]
        if (t === 'meta') return { type: 'meta', csfFile: r }
        let { component: n } = r.meta
        if (!n)
          throw new Error(
            'Attached CSF file does not defined a component, did you forget to export one?',
          )
        return { type: 'component', component: n }
      }
      resolveModuleExport(t) {
        let r = this.exportsToCSFFile.get(t)
        if (r) return { type: 'meta', csfFile: r }
        let n = this.exportToStory.get(t)
        return n
          ? { type: 'story', story: n }
          : { type: 'component', component: t }
      }
      resolveOf(t, r = []) {
        let n
        if (['component', 'meta', 'story'].includes(t)) {
          let o = t
          n = this.resolveAttachedModuleExportType(o)
        } else n = this.resolveModuleExport(t)
        if (r.length && !r.includes(n.type)) {
          let o = n.type === 'component' ? 'component or unknown' : n.type
          throw new Error(at`Invalid value passed to the 'of' prop. The value was resolved to a '${o}' type but the only types for this block are: ${r.join(', ')}.
        - Did you pass a component to the 'of' prop when the block only supports a story or a meta?
        - ... or vice versa?
        - Did you pass a story, CSF file or meta to the 'of' prop that is not indexed, ie. is not targeted by the 'stories' globs in the main configuration?`)
        }
        switch (n.type) {
          case 'component':
            return { ...n, projectAnnotations: this.projectAnnotations }
          case 'meta':
            return {
              ...n,
              preparedMeta: this.store.preparedMetaFromCSFFile({
                csfFile: n.csfFile,
              }),
            }
          case 'story':
          default:
            return n
        }
      }
    }
    m(zg, 'DocsContext')
    var Vg = zg,
      Hg = class {
        constructor(t, r, n, o) {
          ;(this.channel = t),
            (this.store = r),
            (this.entry = n),
            (this.callbacks = o),
            (this.type = 'docs'),
            (this.subtype = 'csf'),
            (this.torndown = !1),
            (this.disableKeyListeners = !1),
            (this.preparing = !1),
            (this.id = n.id)
        }
        isPreparing() {
          return this.preparing
        }
        async prepare() {
          this.preparing = !0
          let { entryExports: t, csfFiles: r = [] } =
            await this.store.loadEntry(this.id)
          if (this.torndown) throw ra
          let { importPath: n, title: o } = this.entry,
            a = this.store.processCSFFileWithCache(t, n, o),
            i = Object.keys(a.stories)[0]
          ;(this.story = this.store.storyFromCSFFile({
            storyId: i,
            csfFile: a,
          })),
            (this.csfFiles = [a, ...r]),
            (this.preparing = !1)
        }
        isEqual(t) {
          return !!(this.id === t.id && this.story && this.story === t.story)
        }
        docsContext(t) {
          if (!this.csfFiles)
            throw new Error('Cannot render docs before preparing')
          let r = new Vg(this.channel, this.store, t, this.csfFiles)
          return this.csfFiles.forEach((n) => r.attachCSFFile(n)), r
        }
        async renderToElement(t, r) {
          if (!this.story || !this.csfFiles)
            throw new Error('Cannot render docs before preparing')
          let n = this.docsContext(r),
            { docs: o } = this.story.parameters || {}
          if (!o)
            throw new Error(
              'Cannot render a story in viewMode=docs if `@storybook/addon-docs` is not installed',
            )
          let a = await o.renderer(),
            { render: i } = a,
            s = m(async () => {
              try {
                await i(n, o, t), this.channel.emit(io, this.id)
              } catch (l) {
                this.callbacks.showException(l)
              }
            }, 'renderDocs')
          return (
            (this.rerender = async () => s()),
            (this.teardownRender = async ({ viewModeChanged: l }) => {
              !l || !t || a.unmount(t)
            }),
            s()
          )
        }
        async teardown({ viewModeChanged: t } = {}) {
          this.teardownRender?.({ viewModeChanged: t }), (this.torndown = !0)
        }
      }
    m(Hg, 'CsfDocsRender')
    var _m = Hg,
      Jg = class {
        constructor(t, r, n, o) {
          ;(this.channel = t),
            (this.store = r),
            (this.entry = n),
            (this.callbacks = o),
            (this.type = 'docs'),
            (this.subtype = 'mdx'),
            (this.torndown = !1),
            (this.disableKeyListeners = !1),
            (this.preparing = !1),
            (this.id = n.id)
        }
        isPreparing() {
          return this.preparing
        }
        async prepare() {
          this.preparing = !0
          let { entryExports: t, csfFiles: r = [] } =
            await this.store.loadEntry(this.id)
          if (this.torndown) throw ra
          ;(this.csfFiles = r), (this.exports = t), (this.preparing = !1)
        }
        isEqual(t) {
          return !!(
            this.id === t.id &&
            this.exports &&
            this.exports === t.exports
          )
        }
        docsContext(t) {
          if (!this.csfFiles)
            throw new Error('Cannot render docs before preparing')
          return new Vg(this.channel, this.store, t, this.csfFiles)
        }
        async renderToElement(t, r) {
          if (!this.exports || !this.csfFiles || !this.store.projectAnnotations)
            throw new Error('Cannot render docs before preparing')
          let n = this.docsContext(r),
            { docs: o } = this.store.projectAnnotations.parameters || {}
          if (!o)
            throw new Error(
              'Cannot render a story in viewMode=docs if `@storybook/addon-docs` is not installed',
            )
          let a = { ...o, page: this.exports.default },
            i = await o.renderer(),
            { render: s } = i,
            l = m(async () => {
              try {
                await s(n, a, t), this.channel.emit(io, this.id)
              } catch (u) {
                this.callbacks.showException(u)
              }
            }, 'renderDocs')
          return (
            (this.rerender = async () => l()),
            (this.teardownRender = async ({ viewModeChanged: u } = {}) => {
              !u || !t || (i.unmount(t), (this.torndown = !0))
            }),
            l()
          )
        }
        async teardown({ viewModeChanged: t } = {}) {
          this.teardownRender?.({ viewModeChanged: t }), (this.torndown = !0)
        }
      }
    m(Jg, 'MdxDocsRender')
    var Om = Jg,
      W5 = globalThis
    function Gg(e) {
      let t = (e.composedPath && e.composedPath()[0]) || e.target
      return (
        /input|textarea/i.test(t.tagName) ||
        t.getAttribute('contenteditable') !== null
      )
    }
    m(Gg, 'focusInInput')
    var Wg = 'attached-mdx',
      K5 = 'unattached-mdx'
    function Kg({ tags: e }) {
      return e?.includes(K5) || e?.includes(Wg)
    }
    m(Kg, 'isMdxEntry')
    function $o(e) {
      return e.type === 'story'
    }
    m($o, 'isStoryRender')
    function Yg(e) {
      return e.type === 'docs'
    }
    m(Yg, 'isDocsRender')
    function Xg(e) {
      return Yg(e) && e.subtype === 'csf'
    }
    m(Xg, 'isCsfDocsRender')
    var Qg = class extends J5 {
      constructor(t, r, n, o) {
        super(t, r, void 0, !1),
          (this.importFn = t),
          (this.getProjectAnnotations = r),
          (this.selectionStore = n),
          (this.view = o),
          this.initialize()
      }
      setupListeners() {
        super.setupListeners(),
          (W5.onkeydown = this.onKeydown.bind(this)),
          this.channel.on(uu, this.onSetCurrentStory.bind(this)),
          this.channel.on(Eu, this.onUpdateQueryParams.bind(this)),
          this.channel.on(su, this.onPreloadStories.bind(this))
      }
      async setInitialGlobals() {
        if (!this.storyStoreValue)
          throw new rt({ methodName: 'setInitialGlobals' })
        let { globals: t } = this.selectionStore.selectionSpecifier || {}
        t && this.storyStoreValue.userGlobals.updateFromPersisted(t),
          this.emitGlobals()
      }
      async initializeWithStoryIndex(t) {
        return (
          await super.initializeWithStoryIndex(t), this.selectSpecifiedStory()
        )
      }
      async selectSpecifiedStory() {
        if (!this.storyStoreValue)
          throw new rt({ methodName: 'selectSpecifiedStory' })
        if (this.selectionStore.selection) {
          await this.renderSelection()
          return
        }
        if (!this.selectionStore.selectionSpecifier) {
          this.renderMissingStory()
          return
        }
        let { storySpecifier: t, args: r } =
            this.selectionStore.selectionSpecifier,
          n = this.storyStoreValue.storyIndex.entryFromSpecifier(t)
        if (!n) {
          t === '*'
            ? this.renderStoryLoadingException(t, new Yh())
            : this.renderStoryLoadingException(
                t,
                new Qh({ storySpecifier: t.toString() }),
              )
          return
        }
        let { id: o, type: a } = n
        this.selectionStore.setSelection({ storyId: o, viewMode: a }),
          this.channel.emit(mu, this.selectionStore.selection),
          this.channel.emit(Ga, this.selectionStore.selection),
          await this.renderSelection({ persistedArgs: r })
      }
      async onGetProjectAnnotationsChanged({ getProjectAnnotations: t }) {
        await super.onGetProjectAnnotationsChanged({
          getProjectAnnotations: t,
        }),
          this.selectionStore.selection && this.renderSelection()
      }
      async onStoriesChanged({ importFn: t, storyIndex: r }) {
        await super.onStoriesChanged({ importFn: t, storyIndex: r }),
          this.selectionStore.selection
            ? await this.renderSelection()
            : await this.selectSpecifiedStory()
      }
      onKeydown(t) {
        if (!this.storyRenders.find((r) => r.disableKeyListeners) && !Gg(t)) {
          let {
            altKey: r,
            ctrlKey: n,
            metaKey: o,
            shiftKey: a,
            key: i,
            code: s,
            keyCode: l,
          } = t
          this.channel.emit(lu, {
            event: {
              altKey: r,
              ctrlKey: n,
              metaKey: o,
              shiftKey: a,
              key: i,
              code: s,
              keyCode: l,
            },
          })
        }
      }
      async onSetCurrentStory(t) {
        this.selectionStore.setSelection({ viewMode: 'story', ...t }),
          await this.storeInitializationPromise,
          this.channel.emit(Ga, this.selectionStore.selection),
          this.renderSelection()
      }
      onUpdateQueryParams(t) {
        this.selectionStore.setQueryParams(t)
      }
      async onUpdateGlobals({ globals: t }) {
        let r =
          (this.currentRender instanceof is && this.currentRender.story) ||
          void 0
        super.onUpdateGlobals({ globals: t, currentStory: r }),
          (this.currentRender instanceof Om ||
            this.currentRender instanceof _m) &&
            (await this.currentRender.rerender?.())
      }
      async onUpdateArgs({ storyId: t, updatedArgs: r }) {
        super.onUpdateArgs({ storyId: t, updatedArgs: r })
      }
      async onPreloadStories({ ids: t }) {
        await this.storeInitializationPromise,
          this.storyStoreValue &&
            (await Promise.allSettled(
              t.map((r) => this.storyStoreValue?.loadEntry(r)),
            ))
      }
      async renderSelection({ persistedArgs: t } = {}) {
        let { renderToCanvas: r } = this
        if (!this.storyStoreValue || !r)
          throw new rt({ methodName: 'renderSelection' })
        let { selection: n } = this.selectionStore
        if (!n)
          throw new Error(
            'Cannot call renderSelection as no selection was made',
          )
        let { storyId: o } = n,
          a
        try {
          a = await this.storyStoreValue.storyIdToEntry(o)
        } catch (y) {
          this.currentRender && (await this.teardownRender(this.currentRender)),
            this.renderStoryLoadingException(o, y)
          return
        }
        let i = this.currentSelection?.storyId !== o,
          s = this.currentRender?.type !== a.type
        a.type === 'story'
          ? this.view.showPreparingStory({ immediate: s })
          : this.view.showPreparingDocs({ immediate: s }),
          this.currentRender?.isPreparing() &&
            (await this.teardownRender(this.currentRender))
        let l
        a.type === 'story'
          ? (l = new is(
              this.channel,
              this.storyStoreValue,
              r,
              this.mainStoryCallbacks(o),
              o,
              'story',
            ))
          : Kg(a)
            ? (l = new Om(
                this.channel,
                this.storyStoreValue,
                a,
                this.mainStoryCallbacks(o),
              ))
            : (l = new _m(
                this.channel,
                this.storyStoreValue,
                a,
                this.mainStoryCallbacks(o),
              ))
        let u = this.currentSelection
        this.currentSelection = n
        let c = this.currentRender
        this.currentRender = l
        try {
          await l.prepare()
        } catch (y) {
          c && (await this.teardownRender(c)),
            y !== ra && this.renderStoryLoadingException(o, y)
          return
        }
        let d = !i && c && !l.isEqual(c)
        if (
          (t &&
            $o(l) &&
            (Uo(!!l.story),
            this.storyStoreValue.args.updateFromPersisted(l.story, t)),
          c && !c.torndown && !i && !d && !s)
        ) {
          ;(this.currentRender = c),
            this.channel.emit(bu, o),
            this.view.showMain()
          return
        }
        if (
          (c && (await this.teardownRender(c, { viewModeChanged: s })),
          u && (i || s) && this.channel.emit(du, o),
          $o(l))
        ) {
          Uo(!!l.story)
          let {
            parameters: y,
            initialArgs: f,
            argTypes: h,
            unmappedArgs: g,
            initialGlobals: C,
            userGlobals: b,
            storyGlobals: E,
            globals: _,
          } = this.storyStoreValue.getStoryContext(l.story)
          this.channel.emit(hu, {
            id: o,
            parameters: y,
            initialArgs: f,
            argTypes: h,
            args: g,
          }),
            this.channel.emit(xr, {
              userGlobals: b,
              storyGlobals: E,
              globals: _,
              initialGlobals: C,
            })
        } else {
          let { parameters: y } = this.storyStoreValue.projectAnnotations,
            { initialGlobals: f, globals: h } = this.storyStoreValue.userGlobals
          if (
            (this.channel.emit(xr, {
              globals: h,
              initialGlobals: f,
              storyGlobals: {},
              userGlobals: h,
            }),
            Xg(l) || l.entry.tags?.includes(Wg))
          ) {
            if (!l.csfFiles) throw new Wh({ storyId: o })
            ;({ parameters: y } = this.storyStoreValue.preparedMetaFromCSFFile({
              csfFile: l.csfFiles[0],
            }))
          }
          this.channel.emit(nu, { id: o, parameters: y })
        }
        $o(l)
          ? (Uo(!!l.story),
            this.storyRenders.push(l),
            this.currentRender.renderToElement(
              this.view.prepareForStory(l.story),
            ))
          : this.currentRender.renderToElement(
              this.view.prepareForDocs(),
              this.renderStoryToElement.bind(this),
            )
      }
      async teardownRender(t, { viewModeChanged: r = !1 } = {}) {
        ;(this.storyRenders = this.storyRenders.filter((n) => n !== t)),
          await t?.teardown?.({ viewModeChanged: r })
      }
      mainStoryCallbacks(t) {
        return {
          showStoryDuringRender: m(
            () => this.view.showStoryDuringRender(),
            'showStoryDuringRender',
          ),
          showMain: m(() => this.view.showMain(), 'showMain'),
          showError: m((r) => this.renderError(t, r), 'showError'),
          showException: m((r) => this.renderException(t, r), 'showException'),
        }
      }
      renderPreviewEntryError(t, r) {
        super.renderPreviewEntryError(t, r), this.view.showErrorDisplay(r)
      }
      renderMissingStory() {
        this.view.showNoPreview(), this.channel.emit(Ka)
      }
      renderStoryLoadingException(t, r) {
        ge.error(r), this.view.showErrorDisplay(r), this.channel.emit(Ka, t)
      }
      renderException(t, r) {
        let { name: n = 'Error', message: o = String(r), stack: a } = r
        this.channel.emit(gu, { name: n, message: o, stack: a }),
          this.channel.emit(wr, { newPhase: 'errored', storyId: t }),
          this.view.showErrorDisplay(r),
          ge.error(`Error rendering story '${t}':`),
          ge.error(r)
      }
      renderError(t, { title: r, description: n }) {
        ge.error(`Error rendering story ${r}: ${n}`),
          this.channel.emit(fu, { title: r, description: n }),
          this.channel.emit(wr, { newPhase: 'errored', storyId: t }),
          this.view.showErrorDisplay({ message: r, stack: n })
      }
    }
    m(Qg, 'PreviewWithSelection')
    var Y5 = Qg,
      ss = Qe(Cs(), 1),
      X5 = Qe(ws(), 1),
      Q5 = Qe(Cs(), 1),
      Im = /^[a-zA-Z0-9 _-]*$/,
      Zg = /^-?[0-9]+(\.[0-9]+)?$/,
      Z5 = /^#([a-f0-9]{3,4}|[a-f0-9]{6}|[a-f0-9]{8})$/i,
      eb =
        /^(rgba?|hsla?)\(([0-9]{1,3}),\s?([0-9]{1,3})%?,\s?([0-9]{1,3})%?,?\s?([0-9](\.[0-9]{1,2})?)?\)$/i,
      ls = m(
        (e = '', t) =>
          e === null || e === '' || !Im.test(e)
            ? !1
            : t == null ||
                t instanceof Date ||
                typeof t == 'number' ||
                typeof t == 'boolean'
              ? !0
              : typeof t == 'string'
                ? Im.test(t) || Zg.test(t) || Z5.test(t) || eb.test(t)
                : Array.isArray(t)
                  ? t.every((r) => ls(e, r))
                  : (0, X5.default)(t)
                    ? Object.entries(t).every(([r, n]) => ls(r, n))
                    : !1,
        'validateArgs',
      ),
      eD = {
        delimiter: ';',
        allowDots: !0,
        allowSparse: !0,
        decoder(e, t, r, n) {
          if (n === 'value' && e.startsWith('!')) {
            if (e === '!undefined') return
            if (e === '!null') return null
            if (e === '!true') return !0
            if (e === '!false') return !1
            if (e.startsWith('!date(') && e.endsWith(')'))
              return new Date(e.slice(6, -1))
            if (e.startsWith('!hex(') && e.endsWith(')'))
              return `#${e.slice(5, -1)}`
            let o = e.slice(1).match(eb)
            if (o)
              return e.startsWith('!rgba')
                ? `${o[1]}(${o[2]}, ${o[3]}, ${o[4]}, ${o[5]})`
                : e.startsWith('!hsla')
                  ? `${o[1]}(${o[2]}, ${o[3]}%, ${o[4]}%, ${o[5]})`
                  : e.startsWith('!rgb')
                    ? `${o[1]}(${o[2]}, ${o[3]}, ${o[4]})`
                    : `${o[1]}(${o[2]}, ${o[3]}%, ${o[4]}%)`
          }
          return n === 'value' && Zg.test(e) ? Number(e) : t(e, t, r)
        },
      },
      km = m((e) => {
        let t = e.split(';').map((r) => r.replace('=', '~').replace(':', '='))
        return Object.entries(Q5.default.parse(t.join(';'), eD)).reduce(
          (r, [n, o]) =>
            ls(n, o)
              ? Object.assign(r, { [n]: o })
              : (Mt.warn(at`
      Omitted potentially unsafe URL args.

      More info: https://storybook.js.org/docs/react/writing-stories/args#setting-args-through-the-url
    `),
                r),
          {},
        )
      }, 'parseArgsParam'),
      { history: tb, document: Tt } = Le
    function rb(e) {
      let t = (e || '').match(/^\/story\/(.+)/)
      if (!t) throw new Error(`Invalid path '${e}',  must start with '/story/'`)
      return t[1]
    }
    m(rb, 'pathToId')
    var nb = m(({ selection: e, extraParams: t }) => {
        let r = typeof Tt < 'u' ? Tt.location.search : '',
          {
            path: n,
            selectedKind: o,
            selectedStory: a,
            ...i
          } = ss.default.parse(r, { ignoreQueryPrefix: !0 })
        return ss.default.stringify(
          { ...i, ...t, ...(e && { id: e.storyId, viewMode: e.viewMode }) },
          { encode: !1, addQueryPrefix: !0 },
        )
      }, 'getQueryString'),
      tD = m((e) => {
        if (!e) return
        let t = nb({ selection: e }),
          { hash: r = '' } = Tt.location
        ;(Tt.title = e.storyId),
          tb.replaceState({}, '', `${Tt.location.pathname}${t}${r}`)
      }, 'setPath'),
      rD = m(
        (e) => e != null && typeof e == 'object' && Array.isArray(e) === !1,
        'isObject',
      ),
      Cn = m((e) => {
        if (e !== void 0) {
          if (typeof e == 'string') return e
          if (Array.isArray(e)) return Cn(e[0])
          if (rD(e)) return Cn(Object.values(e).filter(Boolean))
        }
      }, 'getFirstString'),
      nD = m(() => {
        if (typeof Tt < 'u') {
          let e = ss.default.parse(Tt.location.search, {
              ignoreQueryPrefix: !0,
            }),
            t = typeof e.args == 'string' ? km(e.args) : void 0,
            r = typeof e.globals == 'string' ? km(e.globals) : void 0,
            n = Cn(e.viewMode)
          ;(typeof n != 'string' || !n.match(/docs|story/)) && (n = 'story')
          let o = Cn(e.path),
            a = o ? rb(o) : Cn(e.id)
          if (a) return { storySpecifier: a, args: t, globals: r, viewMode: n }
        }
        return null
      }, 'getSelectionSpecifierFromPath'),
      ob = class {
        constructor() {
          this.selectionSpecifier = nD()
        }
        setSelection(t) {
          ;(this.selection = t), tD(this.selection)
        }
        setQueryParams(t) {
          let r = nb({ extraParams: t }),
            { hash: n = '' } = Tt.location
          tb.replaceState({}, '', `${Tt.location.pathname}${r}${n}`)
        }
      }
    m(ob, 'UrlStore')
    var oD = ob,
      aD = Qe(QR(), 1),
      iD = Qe(Cs(), 1),
      { document: Je } = Le,
      Pm = 100,
      ab = ((e) => (
        (e.MAIN = 'MAIN'),
        (e.NOPREVIEW = 'NOPREVIEW'),
        (e.PREPARING_STORY = 'PREPARING_STORY'),
        (e.PREPARING_DOCS = 'PREPARING_DOCS'),
        (e.ERROR = 'ERROR'),
        e
      ))(ab || {}),
      Ki = {
        PREPARING_STORY: 'sb-show-preparing-story',
        PREPARING_DOCS: 'sb-show-preparing-docs',
        MAIN: 'sb-show-main',
        NOPREVIEW: 'sb-show-nopreview',
        ERROR: 'sb-show-errordisplay',
      },
      Yi = {
        centered: 'sb-main-centered',
        fullscreen: 'sb-main-fullscreen',
        padded: 'sb-main-padded',
      },
      Rm = new aD.default({ escapeXML: !0 }),
      ib = class {
        constructor() {
          if (((this.testing = !1), typeof Je < 'u')) {
            let { __SPECIAL_TEST_PARAMETER__: t } = iD.default.parse(
              Je.location.search,
              { ignoreQueryPrefix: !0 },
            )
            switch (t) {
              case 'preparing-story': {
                this.showPreparingStory(), (this.testing = !0)
                break
              }
              case 'preparing-docs': {
                this.showPreparingDocs(), (this.testing = !0)
                break
              }
              default:
            }
          }
        }
        prepareForStory(t) {
          return (
            this.showStory(),
            this.applyLayout(t.parameters.layout),
            (Je.documentElement.scrollTop = 0),
            (Je.documentElement.scrollLeft = 0),
            this.storyRoot()
          )
        }
        storyRoot() {
          return Je.getElementById('storybook-root')
        }
        prepareForDocs() {
          return (
            this.showMain(),
            this.showDocs(),
            this.applyLayout('fullscreen'),
            (Je.documentElement.scrollTop = 0),
            (Je.documentElement.scrollLeft = 0),
            this.docsRoot()
          )
        }
        docsRoot() {
          return Je.getElementById('storybook-docs')
        }
        applyLayout(t = 'padded') {
          if (t === 'none') {
            Je.body.classList.remove(this.currentLayoutClass),
              (this.currentLayoutClass = null)
            return
          }
          this.checkIfLayoutExists(t)
          let r = Yi[t]
          Je.body.classList.remove(this.currentLayoutClass),
            Je.body.classList.add(r),
            (this.currentLayoutClass = r)
        }
        checkIfLayoutExists(t) {
          Yi[t] ||
            ge.warn(at`
          The desired layout: ${t} is not a valid option.
          The possible options are: ${Object.keys(Yi).join(', ')}, none.
        `)
        }
        showMode(t) {
          clearTimeout(this.preparingTimeout),
            Object.keys(ab).forEach((r) => {
              r === t
                ? Je.body.classList.add(Ki[r])
                : Je.body.classList.remove(Ki[r])
            })
        }
        showErrorDisplay({ message: t = '', stack: r = '' }) {
          let n = t,
            o = r,
            a = t.split(`
`)
          a.length > 1 &&
            (([n] = a),
            (o = a
              .slice(1)
              .join(
                `
`,
              )
              .replace(/^\n/, ''))),
            (Je.getElementById('error-message').innerHTML = Rm.toHtml(n)),
            (Je.getElementById('error-stack').innerHTML = Rm.toHtml(o)),
            this.showMode('ERROR')
        }
        showNoPreview() {
          this.testing ||
            (this.showMode('NOPREVIEW'),
            this.storyRoot()?.setAttribute('hidden', 'true'),
            this.docsRoot()?.setAttribute('hidden', 'true'))
        }
        showPreparingStory({ immediate: t = !1 } = {}) {
          clearTimeout(this.preparingTimeout),
            t
              ? this.showMode('PREPARING_STORY')
              : (this.preparingTimeout = setTimeout(
                  () => this.showMode('PREPARING_STORY'),
                  Pm,
                ))
        }
        showPreparingDocs({ immediate: t = !1 } = {}) {
          clearTimeout(this.preparingTimeout),
            t
              ? this.showMode('PREPARING_DOCS')
              : (this.preparingTimeout = setTimeout(
                  () => this.showMode('PREPARING_DOCS'),
                  Pm,
                ))
        }
        showMain() {
          this.showMode('MAIN')
        }
        showDocs() {
          this.storyRoot().setAttribute('hidden', 'true'),
            this.docsRoot().removeAttribute('hidden')
        }
        showStory() {
          this.docsRoot().setAttribute('hidden', 'true'),
            this.storyRoot().removeAttribute('hidden')
        }
        showStoryDuringRender() {
          Je.body.classList.add(Ki.MAIN)
        }
      }
    m(ib, 'WebView')
    var sD = ib,
      lD = class extends Y5 {
        constructor(t, r) {
          super(t, r, new oD(), new sD()),
            (this.importFn = t),
            (this.getProjectAnnotations = r),
            (Le.__STORYBOOK_PREVIEW__ = this)
        }
      }
    m(lD, 'PreviewWeb')
    var { document: nr } = Le,
      uD = [
        'application/javascript',
        'application/ecmascript',
        'application/x-ecmascript',
        'application/x-javascript',
        'text/ecmascript',
        'text/javascript',
        'text/javascript1.0',
        'text/javascript1.1',
        'text/javascript1.2',
        'text/javascript1.3',
        'text/javascript1.4',
        'text/javascript1.5',
        'text/jscript',
        'text/livescript',
        'text/x-ecmascript',
        'text/x-javascript',
        'module',
      ],
      cD = 'script',
      Dm = 'scripts-root'
    function us() {
      let e = nr.createEvent('Event')
      e.initEvent('DOMContentLoaded', !0, !0), nr.dispatchEvent(e)
    }
    m(us, 'simulateDOMContentLoaded')
    function sb(e, t, r) {
      let n = nr.createElement('script')
      ;(n.type = e.type === 'module' ? 'module' : 'text/javascript'),
        e.src
          ? ((n.onload = t), (n.onerror = t), (n.src = e.src))
          : (n.textContent = e.innerText),
        r ? r.appendChild(n) : nr.head.appendChild(n),
        e.parentNode.removeChild(e),
        e.src || t()
    }
    m(sb, 'insertScript')
    function Ns(e, t, r = 0) {
      e[r](() => {
        r++, r === e.length ? t() : Ns(e, t, r)
      })
    }
    m(Ns, 'insertScriptsSequentially')
    function pD(e) {
      let t = nr.getElementById(Dm)
      t
        ? (t.innerHTML = '')
        : ((t = nr.createElement('div')), (t.id = Dm), nr.body.appendChild(t))
      let r = Array.from(e.querySelectorAll(cD))
      if (r.length) {
        let n = []
        r.forEach((o) => {
          let a = o.getAttribute('type')
          ;(!a || uD.includes(a)) && n.push((i) => sb(o, i, t))
        }),
          n.length && Ns(n, us, void 0)
      } else us()
    }
    m(pD, 'simulatePageLoad')
    w()
    S()
    A()
    w()
    S()
    A()
    var Ur = on(ub(), 1)
    var dD = Object.create,
      Bs = Object.defineProperty,
      fD = Object.getOwnPropertyDescriptor,
      yD = Object.getOwnPropertyNames,
      hD = Object.getPrototypeOf,
      mD = Object.prototype.hasOwnProperty,
      F = (e, t) => Bs(e, 'name', { value: t, configurable: !0 }),
      K = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
      gD = (e, t, r, n) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let o of yD(t))
            !mD.call(e, o) &&
              o !== r &&
              Bs(e, o, {
                get: () => t[o],
                enumerable: !(n = fD(t, o)) || n.enumerable,
              })
        return e
      },
      bD = (e, t, r) => (
        (r = e != null ? dD(hD(e)) : {}),
        gD(
          t || !e || !e.__esModule
            ? Bs(r, 'default', { value: e, enumerable: !0 })
            : r,
          e,
        )
      ),
      cb = K((e, t) => {
        var r =
          typeof window == 'object' &&
          window &&
          window.Object === Object &&
          window
        t.exports = r
      }),
      It = K((e, t) => {
        var r = cb(),
          n = typeof self == 'object' && self && self.Object === Object && self,
          o = r || n || Function('return this')()
        t.exports = o
      }),
      oa = K((e, t) => {
        var r = It(),
          n = r.Symbol
        t.exports = n
      }),
      vD = K((e, t) => {
        var r = oa(),
          n = Object.prototype,
          o = n.hasOwnProperty,
          a = n.toString,
          i = r ? r.toStringTag : void 0
        function s(l) {
          var u = o.call(l, i),
            c = l[i]
          try {
            l[i] = void 0
            var d = !0
          } catch {}
          var y = a.call(l)
          return d && (u ? (l[i] = c) : delete l[i]), y
        }
        F(s, 'getRawTag'), (t.exports = s)
      }),
      ED = K((e, t) => {
        var r = Object.prototype,
          n = r.toString
        function o(a) {
          return n.call(a)
        }
        F(o, 'objectToString'), (t.exports = o)
      }),
      Nn = K((e, t) => {
        var r = oa(),
          n = vD(),
          o = ED(),
          a = '[object Null]',
          i = '[object Undefined]',
          s = r ? r.toStringTag : void 0
        function l(u) {
          return u == null
            ? u === void 0
              ? i
              : a
            : s && s in Object(u)
              ? n(u)
              : o(u)
        }
        F(l, 'baseGetTag'), (t.exports = l)
      }),
      Ls = K((e, t) => {
        function r(n) {
          var o = typeof n
          return n != null && (o == 'object' || o == 'function')
        }
        F(r, 'isObject'), (t.exports = r)
      }),
      pb = K((e, t) => {
        var r = Nn(),
          n = Ls(),
          o = '[object AsyncFunction]',
          a = '[object Function]',
          i = '[object GeneratorFunction]',
          s = '[object Proxy]'
        function l(u) {
          if (!n(u)) return !1
          var c = r(u)
          return c == a || c == i || c == o || c == s
        }
        F(l, 'isFunction'), (t.exports = l)
      }),
      xD = K((e, t) => {
        var r = It(),
          n = r['__core-js_shared__']
        t.exports = n
      }),
      wD = K((e, t) => {
        var r = xD(),
          n = (function () {
            var a = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || '')
            return a ? 'Symbol(src)_1.' + a : ''
          })()
        function o(a) {
          return !!n && n in a
        }
        F(o, 'isMasked'), (t.exports = o)
      }),
      db = K((e, t) => {
        var r = Function.prototype,
          n = r.toString
        function o(a) {
          if (a != null) {
            try {
              return n.call(a)
            } catch {}
            try {
              return a + ''
            } catch {}
          }
          return ''
        }
        F(o, 'toSource'), (t.exports = o)
      }),
      SD = K((e, t) => {
        var r = pb(),
          n = wD(),
          o = Ls(),
          a = db(),
          i = /[\\^$.*+?()[\]{}|]/g,
          s = /^\[object .+?Constructor\]$/,
          l = Function.prototype,
          u = Object.prototype,
          c = l.toString,
          d = u.hasOwnProperty,
          y = RegExp(
            '^' +
              c
                .call(d)
                .replace(i, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?',
                ) +
              '$',
          )
        function f(h) {
          if (!o(h) || n(h)) return !1
          var g = r(h) ? y : s
          return g.test(a(h))
        }
        F(f, 'baseIsNative'), (t.exports = f)
      }),
      AD = K((e, t) => {
        function r(n, o) {
          return n?.[o]
        }
        F(r, 'getValue'), (t.exports = r)
      }),
      sr = K((e, t) => {
        var r = SD(),
          n = AD()
        function o(a, i) {
          var s = n(a, i)
          return r(s) ? s : void 0
        }
        F(o, 'getNative'), (t.exports = o)
      }),
      TD = K((e, t) => {
        var r = sr(),
          n = (function () {
            try {
              var o = r(Object, 'defineProperty')
              return o({}, '', {}), o
            } catch {}
          })()
        t.exports = n
      }),
      CD = K((e, t) => {
        var r = TD()
        function n(o, a, i) {
          a == '__proto__' && r
            ? r(o, a, {
                configurable: !0,
                enumerable: !0,
                value: i,
                writable: !0,
              })
            : (o[a] = i)
        }
        F(n, 'baseAssignValue'), (t.exports = n)
      }),
      _D = K((e, t) => {
        function r(n) {
          return function (o, a, i) {
            for (var s = -1, l = Object(o), u = i(o), c = u.length; c--; ) {
              var d = u[n ? c : ++s]
              if (a(l[d], d, l) === !1) break
            }
            return o
          }
        }
        F(r, 'createBaseFor'), (t.exports = r)
      }),
      OD = K((e, t) => {
        var r = _D(),
          n = r()
        t.exports = n
      }),
      ID = K((e, t) => {
        function r(n, o) {
          for (var a = -1, i = Array(n); ++a < n; ) i[a] = o(a)
          return i
        }
        F(r, 'baseTimes'), (t.exports = r)
      }),
      Bn = K((e, t) => {
        function r(n) {
          return n != null && typeof n == 'object'
        }
        F(r, 'isObjectLike'), (t.exports = r)
      }),
      kD = K((e, t) => {
        var r = Nn(),
          n = Bn(),
          o = '[object Arguments]'
        function a(i) {
          return n(i) && r(i) == o
        }
        F(a, 'baseIsArguments'), (t.exports = a)
      }),
      fb = K((e, t) => {
        var r = kD(),
          n = Bn(),
          o = Object.prototype,
          a = o.hasOwnProperty,
          i = o.propertyIsEnumerable,
          s = r(
            (function () {
              return arguments
            })(),
          )
            ? r
            : function (l) {
                return n(l) && a.call(l, 'callee') && !i.call(l, 'callee')
              }
        t.exports = s
      }),
      Vt = K((e, t) => {
        var r = Array.isArray
        t.exports = r
      }),
      PD = K((e, t) => {
        function r() {
          return !1
        }
        F(r, 'stubFalse'), (t.exports = r)
      }),
      yb = K((e, t) => {
        var r = It(),
          n = PD(),
          o = typeof e == 'object' && e && !e.nodeType && e,
          a = o && typeof t == 'object' && t && !t.nodeType && t,
          i = a && a.exports === o,
          s = i ? r.Buffer : void 0,
          l = s ? s.isBuffer : void 0,
          u = l || n
        t.exports = u
      }),
      hb = K((e, t) => {
        var r = 9007199254740991,
          n = /^(?:0|[1-9]\d*)$/
        function o(a, i) {
          var s = typeof a
          return (
            (i = i ?? r),
            !!i &&
              (s == 'number' || (s != 'symbol' && n.test(a))) &&
              a > -1 &&
              a % 1 == 0 &&
              a < i
          )
        }
        F(o, 'isIndex'), (t.exports = o)
      }),
      qs = K((e, t) => {
        var r = 9007199254740991
        function n(o) {
          return typeof o == 'number' && o > -1 && o % 1 == 0 && o <= r
        }
        F(n, 'isLength'), (t.exports = n)
      }),
      RD = K((e, t) => {
        var r = Nn(),
          n = qs(),
          o = Bn(),
          a = '[object Arguments]',
          i = '[object Array]',
          s = '[object Boolean]',
          l = '[object Date]',
          u = '[object Error]',
          c = '[object Function]',
          d = '[object Map]',
          y = '[object Number]',
          f = '[object Object]',
          h = '[object RegExp]',
          g = '[object Set]',
          C = '[object String]',
          b = '[object WeakMap]',
          E = '[object ArrayBuffer]',
          _ = '[object DataView]',
          T = '[object Float32Array]',
          O = '[object Float64Array]',
          I = '[object Int8Array]',
          D = '[object Int16Array]',
          R = '[object Int32Array]',
          M = '[object Uint8Array]',
          z = '[object Uint8ClampedArray]',
          Y = '[object Uint16Array]',
          Z = '[object Uint32Array]',
          V = {}
        ;(V[T] = V[O] = V[I] = V[D] = V[R] = V[M] = V[z] = V[Y] = V[Z] = !0),
          (V[a] =
            V[i] =
            V[E] =
            V[s] =
            V[_] =
            V[l] =
            V[u] =
            V[c] =
            V[d] =
            V[y] =
            V[f] =
            V[h] =
            V[g] =
            V[C] =
            V[b] =
              !1)
        function P(q) {
          return o(q) && n(q.length) && !!V[r(q)]
        }
        F(P, 'baseIsTypedArray'), (t.exports = P)
      }),
      DD = K((e, t) => {
        function r(n) {
          return function (o) {
            return n(o)
          }
        }
        F(r, 'baseUnary'), (t.exports = r)
      }),
      FD = K((e, t) => {
        var r = cb(),
          n = typeof e == 'object' && e && !e.nodeType && e,
          o = n && typeof t == 'object' && t && !t.nodeType && t,
          a = o && o.exports === n,
          i = a && r.process,
          s = (function () {
            try {
              var l = o && o.require && o.require('util').types
              return l || (i && i.binding && i.binding('util'))
            } catch {}
          })()
        t.exports = s
      }),
      mb = K((e, t) => {
        var r = RD(),
          n = DD(),
          o = FD(),
          a = o && o.isTypedArray,
          i = a ? n(a) : r
        t.exports = i
      }),
      jD = K((e, t) => {
        var r = ID(),
          n = fb(),
          o = Vt(),
          a = yb(),
          i = hb(),
          s = mb(),
          l = Object.prototype,
          u = l.hasOwnProperty
        function c(d, y) {
          var f = o(d),
            h = !f && n(d),
            g = !f && !h && a(d),
            C = !f && !h && !g && s(d),
            b = f || h || g || C,
            E = b ? r(d.length, String) : [],
            _ = E.length
          for (var T in d)
            (y || u.call(d, T)) &&
              !(
                b &&
                (T == 'length' ||
                  (g && (T == 'offset' || T == 'parent')) ||
                  (C &&
                    (T == 'buffer' ||
                      T == 'byteLength' ||
                      T == 'byteOffset')) ||
                  i(T, _))
              ) &&
              E.push(T)
          return E
        }
        F(c, 'arrayLikeKeys'), (t.exports = c)
      }),
      ND = K((e, t) => {
        var r = Object.prototype
        function n(o) {
          var a = o && o.constructor,
            i = (typeof a == 'function' && a.prototype) || r
          return o === i
        }
        F(n, 'isPrototype'), (t.exports = n)
      }),
      BD = K((e, t) => {
        function r(n, o) {
          return function (a) {
            return n(o(a))
          }
        }
        F(r, 'overArg'), (t.exports = r)
      }),
      LD = K((e, t) => {
        var r = BD(),
          n = r(Object.keys, Object)
        t.exports = n
      }),
      qD = K((e, t) => {
        var r = ND(),
          n = LD(),
          o = Object.prototype,
          a = o.hasOwnProperty
        function i(s) {
          if (!r(s)) return n(s)
          var l = []
          for (var u in Object(s))
            a.call(s, u) && u != 'constructor' && l.push(u)
          return l
        }
        F(i, 'baseKeys'), (t.exports = i)
      }),
      MD = K((e, t) => {
        var r = pb(),
          n = qs()
        function o(a) {
          return a != null && n(a.length) && !r(a)
        }
        F(o, 'isArrayLike'), (t.exports = o)
      }),
      Ms = K((e, t) => {
        var r = jD(),
          n = qD(),
          o = MD()
        function a(i) {
          return o(i) ? r(i) : n(i)
        }
        F(a, 'keys'), (t.exports = a)
      }),
      UD = K((e, t) => {
        var r = OD(),
          n = Ms()
        function o(a, i) {
          return a && r(a, i, n)
        }
        F(o, 'baseForOwn'), (t.exports = o)
      }),
      $D = K((e, t) => {
        function r() {
          ;(this.__data__ = []), (this.size = 0)
        }
        F(r, 'listCacheClear'), (t.exports = r)
      }),
      gb = K((e, t) => {
        function r(n, o) {
          return n === o || (n !== n && o !== o)
        }
        F(r, 'eq'), (t.exports = r)
      }),
      aa = K((e, t) => {
        var r = gb()
        function n(o, a) {
          for (var i = o.length; i--; ) if (r(o[i][0], a)) return i
          return -1
        }
        F(n, 'assocIndexOf'), (t.exports = n)
      }),
      zD = K((e, t) => {
        var r = aa(),
          n = Array.prototype,
          o = n.splice
        function a(i) {
          var s = this.__data__,
            l = r(s, i)
          if (l < 0) return !1
          var u = s.length - 1
          return l == u ? s.pop() : o.call(s, l, 1), --this.size, !0
        }
        F(a, 'listCacheDelete'), (t.exports = a)
      }),
      VD = K((e, t) => {
        var r = aa()
        function n(o) {
          var a = this.__data__,
            i = r(a, o)
          return i < 0 ? void 0 : a[i][1]
        }
        F(n, 'listCacheGet'), (t.exports = n)
      }),
      HD = K((e, t) => {
        var r = aa()
        function n(o) {
          return r(this.__data__, o) > -1
        }
        F(n, 'listCacheHas'), (t.exports = n)
      }),
      JD = K((e, t) => {
        var r = aa()
        function n(o, a) {
          var i = this.__data__,
            s = r(i, o)
          return s < 0 ? (++this.size, i.push([o, a])) : (i[s][1] = a), this
        }
        F(n, 'listCacheSet'), (t.exports = n)
      }),
      ia = K((e, t) => {
        var r = $D(),
          n = zD(),
          o = VD(),
          a = HD(),
          i = JD()
        function s(l) {
          var u = -1,
            c = l == null ? 0 : l.length
          for (this.clear(); ++u < c; ) {
            var d = l[u]
            this.set(d[0], d[1])
          }
        }
        F(s, 'ListCache'),
          (s.prototype.clear = r),
          (s.prototype.delete = n),
          (s.prototype.get = o),
          (s.prototype.has = a),
          (s.prototype.set = i),
          (t.exports = s)
      }),
      GD = K((e, t) => {
        var r = ia()
        function n() {
          ;(this.__data__ = new r()), (this.size = 0)
        }
        F(n, 'stackClear'), (t.exports = n)
      }),
      WD = K((e, t) => {
        function r(n) {
          var o = this.__data__,
            a = o.delete(n)
          return (this.size = o.size), a
        }
        F(r, 'stackDelete'), (t.exports = r)
      }),
      KD = K((e, t) => {
        function r(n) {
          return this.__data__.get(n)
        }
        F(r, 'stackGet'), (t.exports = r)
      }),
      YD = K((e, t) => {
        function r(n) {
          return this.__data__.has(n)
        }
        F(r, 'stackHas'), (t.exports = r)
      }),
      Us = K((e, t) => {
        var r = sr(),
          n = It(),
          o = r(n, 'Map')
        t.exports = o
      }),
      sa = K((e, t) => {
        var r = sr(),
          n = r(Object, 'create')
        t.exports = n
      }),
      XD = K((e, t) => {
        var r = sa()
        function n() {
          ;(this.__data__ = r ? r(null) : {}), (this.size = 0)
        }
        F(n, 'hashClear'), (t.exports = n)
      }),
      QD = K((e, t) => {
        function r(n) {
          var o = this.has(n) && delete this.__data__[n]
          return (this.size -= o ? 1 : 0), o
        }
        F(r, 'hashDelete'), (t.exports = r)
      }),
      ZD = K((e, t) => {
        var r = sa(),
          n = '__lodash_hash_undefined__',
          o = Object.prototype,
          a = o.hasOwnProperty
        function i(s) {
          var l = this.__data__
          if (r) {
            var u = l[s]
            return u === n ? void 0 : u
          }
          return a.call(l, s) ? l[s] : void 0
        }
        F(i, 'hashGet'), (t.exports = i)
      }),
      eF = K((e, t) => {
        var r = sa(),
          n = Object.prototype,
          o = n.hasOwnProperty
        function a(i) {
          var s = this.__data__
          return r ? s[i] !== void 0 : o.call(s, i)
        }
        F(a, 'hashHas'), (t.exports = a)
      }),
      tF = K((e, t) => {
        var r = sa(),
          n = '__lodash_hash_undefined__'
        function o(a, i) {
          var s = this.__data__
          return (
            (this.size += this.has(a) ? 0 : 1),
            (s[a] = r && i === void 0 ? n : i),
            this
          )
        }
        F(o, 'hashSet'), (t.exports = o)
      }),
      rF = K((e, t) => {
        var r = XD(),
          n = QD(),
          o = ZD(),
          a = eF(),
          i = tF()
        function s(l) {
          var u = -1,
            c = l == null ? 0 : l.length
          for (this.clear(); ++u < c; ) {
            var d = l[u]
            this.set(d[0], d[1])
          }
        }
        F(s, 'Hash'),
          (s.prototype.clear = r),
          (s.prototype.delete = n),
          (s.prototype.get = o),
          (s.prototype.has = a),
          (s.prototype.set = i),
          (t.exports = s)
      }),
      nF = K((e, t) => {
        var r = rF(),
          n = ia(),
          o = Us()
        function a() {
          ;(this.size = 0),
            (this.__data__ = {
              hash: new r(),
              map: new (o || n)(),
              string: new r(),
            })
        }
        F(a, 'mapCacheClear'), (t.exports = a)
      }),
      oF = K((e, t) => {
        function r(n) {
          var o = typeof n
          return o == 'string' ||
            o == 'number' ||
            o == 'symbol' ||
            o == 'boolean'
            ? n !== '__proto__'
            : n === null
        }
        F(r, 'isKeyable'), (t.exports = r)
      }),
      la = K((e, t) => {
        var r = oF()
        function n(o, a) {
          var i = o.__data__
          return r(a) ? i[typeof a == 'string' ? 'string' : 'hash'] : i.map
        }
        F(n, 'getMapData'), (t.exports = n)
      }),
      aF = K((e, t) => {
        var r = la()
        function n(o) {
          var a = r(this, o).delete(o)
          return (this.size -= a ? 1 : 0), a
        }
        F(n, 'mapCacheDelete'), (t.exports = n)
      }),
      iF = K((e, t) => {
        var r = la()
        function n(o) {
          return r(this, o).get(o)
        }
        F(n, 'mapCacheGet'), (t.exports = n)
      }),
      sF = K((e, t) => {
        var r = la()
        function n(o) {
          return r(this, o).has(o)
        }
        F(n, 'mapCacheHas'), (t.exports = n)
      }),
      lF = K((e, t) => {
        var r = la()
        function n(o, a) {
          var i = r(this, o),
            s = i.size
          return i.set(o, a), (this.size += i.size == s ? 0 : 1), this
        }
        F(n, 'mapCacheSet'), (t.exports = n)
      }),
      $s = K((e, t) => {
        var r = nF(),
          n = aF(),
          o = iF(),
          a = sF(),
          i = lF()
        function s(l) {
          var u = -1,
            c = l == null ? 0 : l.length
          for (this.clear(); ++u < c; ) {
            var d = l[u]
            this.set(d[0], d[1])
          }
        }
        F(s, 'MapCache'),
          (s.prototype.clear = r),
          (s.prototype.delete = n),
          (s.prototype.get = o),
          (s.prototype.has = a),
          (s.prototype.set = i),
          (t.exports = s)
      }),
      uF = K((e, t) => {
        var r = ia(),
          n = Us(),
          o = $s(),
          a = 200
        function i(s, l) {
          var u = this.__data__
          if (u instanceof r) {
            var c = u.__data__
            if (!n || c.length < a - 1)
              return c.push([s, l]), (this.size = ++u.size), this
            u = this.__data__ = new o(c)
          }
          return u.set(s, l), (this.size = u.size), this
        }
        F(i, 'stackSet'), (t.exports = i)
      }),
      bb = K((e, t) => {
        var r = ia(),
          n = GD(),
          o = WD(),
          a = KD(),
          i = YD(),
          s = uF()
        function l(u) {
          var c = (this.__data__ = new r(u))
          this.size = c.size
        }
        F(l, 'Stack'),
          (l.prototype.clear = n),
          (l.prototype.delete = o),
          (l.prototype.get = a),
          (l.prototype.has = i),
          (l.prototype.set = s),
          (t.exports = l)
      }),
      cF = K((e, t) => {
        var r = '__lodash_hash_undefined__'
        function n(o) {
          return this.__data__.set(o, r), this
        }
        F(n, 'setCacheAdd'), (t.exports = n)
      }),
      pF = K((e, t) => {
        function r(n) {
          return this.__data__.has(n)
        }
        F(r, 'setCacheHas'), (t.exports = r)
      }),
      dF = K((e, t) => {
        var r = $s(),
          n = cF(),
          o = pF()
        function a(i) {
          var s = -1,
            l = i == null ? 0 : i.length
          for (this.__data__ = new r(); ++s < l; ) this.add(i[s])
        }
        F(a, 'SetCache'),
          (a.prototype.add = a.prototype.push = n),
          (a.prototype.has = o),
          (t.exports = a)
      }),
      fF = K((e, t) => {
        function r(n, o) {
          for (var a = -1, i = n == null ? 0 : n.length; ++a < i; )
            if (o(n[a], a, n)) return !0
          return !1
        }
        F(r, 'arraySome'), (t.exports = r)
      }),
      yF = K((e, t) => {
        function r(n, o) {
          return n.has(o)
        }
        F(r, 'cacheHas'), (t.exports = r)
      }),
      vb = K((e, t) => {
        var r = dF(),
          n = fF(),
          o = yF(),
          a = 1,
          i = 2
        function s(l, u, c, d, y, f) {
          var h = c & a,
            g = l.length,
            C = u.length
          if (g != C && !(h && C > g)) return !1
          var b = f.get(l),
            E = f.get(u)
          if (b && E) return b == u && E == l
          var _ = -1,
            T = !0,
            O = c & i ? new r() : void 0
          for (f.set(l, u), f.set(u, l); ++_ < g; ) {
            var I = l[_],
              D = u[_]
            if (d) var R = h ? d(D, I, _, u, l, f) : d(I, D, _, l, u, f)
            if (R !== void 0) {
              if (R) continue
              T = !1
              break
            }
            if (O) {
              if (
                !n(u, function (M, z) {
                  if (!o(O, z) && (I === M || y(I, M, c, d, f)))
                    return O.push(z)
                })
              ) {
                T = !1
                break
              }
            } else if (!(I === D || y(I, D, c, d, f))) {
              T = !1
              break
            }
          }
          return f.delete(l), f.delete(u), T
        }
        F(s, 'equalArrays'), (t.exports = s)
      }),
      hF = K((e, t) => {
        var r = It(),
          n = r.Uint8Array
        t.exports = n
      }),
      mF = K((e, t) => {
        function r(n) {
          var o = -1,
            a = Array(n.size)
          return (
            n.forEach(function (i, s) {
              a[++o] = [s, i]
            }),
            a
          )
        }
        F(r, 'mapToArray'), (t.exports = r)
      }),
      gF = K((e, t) => {
        function r(n) {
          var o = -1,
            a = Array(n.size)
          return (
            n.forEach(function (i) {
              a[++o] = i
            }),
            a
          )
        }
        F(r, 'setToArray'), (t.exports = r)
      }),
      bF = K((e, t) => {
        var r = oa(),
          n = hF(),
          o = gb(),
          a = vb(),
          i = mF(),
          s = gF(),
          l = 1,
          u = 2,
          c = '[object Boolean]',
          d = '[object Date]',
          y = '[object Error]',
          f = '[object Map]',
          h = '[object Number]',
          g = '[object RegExp]',
          C = '[object Set]',
          b = '[object String]',
          E = '[object Symbol]',
          _ = '[object ArrayBuffer]',
          T = '[object DataView]',
          O = r ? r.prototype : void 0,
          I = O ? O.valueOf : void 0
        function D(R, M, z, Y, Z, V, P) {
          switch (z) {
            case T:
              if (R.byteLength != M.byteLength || R.byteOffset != M.byteOffset)
                return !1
              ;(R = R.buffer), (M = M.buffer)
            case _:
              return !(R.byteLength != M.byteLength || !V(new n(R), new n(M)))
            case c:
            case d:
            case h:
              return o(+R, +M)
            case y:
              return R.name == M.name && R.message == M.message
            case g:
            case b:
              return R == M + ''
            case f:
              var q = i
            case C:
              var J = Y & l
              if ((q || (q = s), R.size != M.size && !J)) return !1
              var X = P.get(R)
              if (X) return X == M
              ;(Y |= u), P.set(R, M)
              var te = a(q(R), q(M), Y, Z, V, P)
              return P.delete(R), te
            case E:
              if (I) return I.call(R) == I.call(M)
          }
          return !1
        }
        F(D, 'equalByTag'), (t.exports = D)
      }),
      vF = K((e, t) => {
        function r(n, o) {
          for (var a = -1, i = o.length, s = n.length; ++a < i; )
            n[s + a] = o[a]
          return n
        }
        F(r, 'arrayPush'), (t.exports = r)
      }),
      EF = K((e, t) => {
        var r = vF(),
          n = Vt()
        function o(a, i, s) {
          var l = i(a)
          return n(a) ? l : r(l, s(a))
        }
        F(o, 'baseGetAllKeys'), (t.exports = o)
      }),
      xF = K((e, t) => {
        function r(n, o) {
          for (
            var a = -1, i = n == null ? 0 : n.length, s = 0, l = [];
            ++a < i;

          ) {
            var u = n[a]
            o(u, a, n) && (l[s++] = u)
          }
          return l
        }
        F(r, 'arrayFilter'), (t.exports = r)
      }),
      wF = K((e, t) => {
        function r() {
          return []
        }
        F(r, 'stubArray'), (t.exports = r)
      }),
      SF = K((e, t) => {
        var r = xF(),
          n = wF(),
          o = Object.prototype,
          a = o.propertyIsEnumerable,
          i = Object.getOwnPropertySymbols,
          s = i
            ? function (l) {
                return l == null
                  ? []
                  : ((l = Object(l)),
                    r(i(l), function (u) {
                      return a.call(l, u)
                    }))
              }
            : n
        t.exports = s
      }),
      AF = K((e, t) => {
        var r = EF(),
          n = SF(),
          o = Ms()
        function a(i) {
          return r(i, o, n)
        }
        F(a, 'getAllKeys'), (t.exports = a)
      }),
      TF = K((e, t) => {
        var r = AF(),
          n = 1,
          o = Object.prototype,
          a = o.hasOwnProperty
        function i(s, l, u, c, d, y) {
          var f = u & n,
            h = r(s),
            g = h.length,
            C = r(l),
            b = C.length
          if (g != b && !f) return !1
          for (var E = g; E--; ) {
            var _ = h[E]
            if (!(f ? _ in l : a.call(l, _))) return !1
          }
          var T = y.get(s),
            O = y.get(l)
          if (T && O) return T == l && O == s
          var I = !0
          y.set(s, l), y.set(l, s)
          for (var D = f; ++E < g; ) {
            _ = h[E]
            var R = s[_],
              M = l[_]
            if (c) var z = f ? c(M, R, _, l, s, y) : c(R, M, _, s, l, y)
            if (!(z === void 0 ? R === M || d(R, M, u, c, y) : z)) {
              I = !1
              break
            }
            D || (D = _ == 'constructor')
          }
          if (I && !D) {
            var Y = s.constructor,
              Z = l.constructor
            Y != Z &&
              'constructor' in s &&
              'constructor' in l &&
              !(
                typeof Y == 'function' &&
                Y instanceof Y &&
                typeof Z == 'function' &&
                Z instanceof Z
              ) &&
              (I = !1)
          }
          return y.delete(s), y.delete(l), I
        }
        F(i, 'equalObjects'), (t.exports = i)
      }),
      CF = K((e, t) => {
        var r = sr(),
          n = It(),
          o = r(n, 'DataView')
        t.exports = o
      }),
      _F = K((e, t) => {
        var r = sr(),
          n = It(),
          o = r(n, 'Promise')
        t.exports = o
      }),
      OF = K((e, t) => {
        var r = sr(),
          n = It(),
          o = r(n, 'Set')
        t.exports = o
      }),
      IF = K((e, t) => {
        var r = sr(),
          n = It(),
          o = r(n, 'WeakMap')
        t.exports = o
      }),
      kF = K((e, t) => {
        var r = CF(),
          n = Us(),
          o = _F(),
          a = OF(),
          i = IF(),
          s = Nn(),
          l = db(),
          u = '[object Map]',
          c = '[object Object]',
          d = '[object Promise]',
          y = '[object Set]',
          f = '[object WeakMap]',
          h = '[object DataView]',
          g = l(r),
          C = l(n),
          b = l(o),
          E = l(a),
          _ = l(i),
          T = s
        ;((r && T(new r(new ArrayBuffer(1))) != h) ||
          (n && T(new n()) != u) ||
          (o && T(o.resolve()) != d) ||
          (a && T(new a()) != y) ||
          (i && T(new i()) != f)) &&
          (T = F(function (O) {
            var I = s(O),
              D = I == c ? O.constructor : void 0,
              R = D ? l(D) : ''
            if (R)
              switch (R) {
                case g:
                  return h
                case C:
                  return u
                case b:
                  return d
                case E:
                  return y
                case _:
                  return f
              }
            return I
          }, 'getTag')),
          (t.exports = T)
      }),
      PF = K((e, t) => {
        var r = bb(),
          n = vb(),
          o = bF(),
          a = TF(),
          i = kF(),
          s = Vt(),
          l = yb(),
          u = mb(),
          c = 1,
          d = '[object Arguments]',
          y = '[object Array]',
          f = '[object Object]',
          h = Object.prototype,
          g = h.hasOwnProperty
        function C(b, E, _, T, O, I) {
          var D = s(b),
            R = s(E),
            M = D ? y : i(b),
            z = R ? y : i(E)
          ;(M = M == d ? f : M), (z = z == d ? f : z)
          var Y = M == f,
            Z = z == f,
            V = M == z
          if (V && l(b)) {
            if (!l(E)) return !1
            ;(D = !0), (Y = !1)
          }
          if (V && !Y)
            return (
              I || (I = new r()),
              D || u(b) ? n(b, E, _, T, O, I) : o(b, E, M, _, T, O, I)
            )
          if (!(_ & c)) {
            var P = Y && g.call(b, '__wrapped__'),
              q = Z && g.call(E, '__wrapped__')
            if (P || q) {
              var J = P ? b.value() : b,
                X = q ? E.value() : E
              return I || (I = new r()), O(J, X, _, T, I)
            }
          }
          return V ? (I || (I = new r()), a(b, E, _, T, O, I)) : !1
        }
        F(C, 'baseIsEqualDeep'), (t.exports = C)
      }),
      Eb = K((e, t) => {
        var r = PF(),
          n = Bn()
        function o(a, i, s, l, u) {
          return a === i
            ? !0
            : a == null || i == null || (!n(a) && !n(i))
              ? a !== a && i !== i
              : r(a, i, s, l, o, u)
        }
        F(o, 'baseIsEqual'), (t.exports = o)
      }),
      RF = K((e, t) => {
        var r = bb(),
          n = Eb(),
          o = 1,
          a = 2
        function i(s, l, u, c) {
          var d = u.length,
            y = d,
            f = !c
          if (s == null) return !y
          for (s = Object(s); d--; ) {
            var h = u[d]
            if (f && h[2] ? h[1] !== s[h[0]] : !(h[0] in s)) return !1
          }
          for (; ++d < y; ) {
            h = u[d]
            var g = h[0],
              C = s[g],
              b = h[1]
            if (f && h[2]) {
              if (C === void 0 && !(g in s)) return !1
            } else {
              var E = new r()
              if (c) var _ = c(C, b, g, s, l, E)
              if (!(_ === void 0 ? n(b, C, o | a, c, E) : _)) return !1
            }
          }
          return !0
        }
        F(i, 'baseIsMatch'), (t.exports = i)
      }),
      xb = K((e, t) => {
        var r = Ls()
        function n(o) {
          return o === o && !r(o)
        }
        F(n, 'isStrictComparable'), (t.exports = n)
      }),
      DF = K((e, t) => {
        var r = xb(),
          n = Ms()
        function o(a) {
          for (var i = n(a), s = i.length; s--; ) {
            var l = i[s],
              u = a[l]
            i[s] = [l, u, r(u)]
          }
          return i
        }
        F(o, 'getMatchData'), (t.exports = o)
      }),
      wb = K((e, t) => {
        function r(n, o) {
          return function (a) {
            return a == null
              ? !1
              : a[n] === o && (o !== void 0 || n in Object(a))
          }
        }
        F(r, 'matchesStrictComparable'), (t.exports = r)
      }),
      FF = K((e, t) => {
        var r = RF(),
          n = DF(),
          o = wb()
        function a(i) {
          var s = n(i)
          return s.length == 1 && s[0][2]
            ? o(s[0][0], s[0][1])
            : function (l) {
                return l === i || r(l, i, s)
              }
        }
        F(a, 'baseMatches'), (t.exports = a)
      }),
      zs = K((e, t) => {
        var r = Nn(),
          n = Bn(),
          o = '[object Symbol]'
        function a(i) {
          return typeof i == 'symbol' || (n(i) && r(i) == o)
        }
        F(a, 'isSymbol'), (t.exports = a)
      }),
      Vs = K((e, t) => {
        var r = Vt(),
          n = zs(),
          o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          a = /^\w*$/
        function i(s, l) {
          if (r(s)) return !1
          var u = typeof s
          return u == 'number' ||
            u == 'symbol' ||
            u == 'boolean' ||
            s == null ||
            n(s)
            ? !0
            : a.test(s) || !o.test(s) || (l != null && s in Object(l))
        }
        F(i, 'isKey'), (t.exports = i)
      }),
      jF = K((e, t) => {
        var r = $s(),
          n = 'Expected a function'
        function o(a, i) {
          if (typeof a != 'function' || (i != null && typeof i != 'function'))
            throw new TypeError(n)
          var s = F(function () {
            var l = arguments,
              u = i ? i.apply(this, l) : l[0],
              c = s.cache
            if (c.has(u)) return c.get(u)
            var d = a.apply(this, l)
            return (s.cache = c.set(u, d) || c), d
          }, 'memoized')
          return (s.cache = new (o.Cache || r)()), s
        }
        F(o, 'memoize'), (o.Cache = r), (t.exports = o)
      }),
      NF = K((e, t) => {
        var r = jF(),
          n = 500
        function o(a) {
          var i = r(a, function (l) {
              return s.size === n && s.clear(), l
            }),
            s = i.cache
          return i
        }
        F(o, 'memoizeCapped'), (t.exports = o)
      }),
      BF = K((e, t) => {
        var r = NF(),
          n =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          o = /\\(\\)?/g,
          a = r(function (i) {
            var s = []
            return (
              i.charCodeAt(0) === 46 && s.push(''),
              i.replace(n, function (l, u, c, d) {
                s.push(c ? d.replace(o, '$1') : u || l)
              }),
              s
            )
          })
        t.exports = a
      }),
      LF = K((e, t) => {
        function r(n, o) {
          for (
            var a = -1, i = n == null ? 0 : n.length, s = Array(i);
            ++a < i;

          )
            s[a] = o(n[a], a, n)
          return s
        }
        F(r, 'arrayMap'), (t.exports = r)
      }),
      qF = K((e, t) => {
        var r = oa(),
          n = LF(),
          o = Vt(),
          a = zs(),
          i = 1 / 0,
          s = r ? r.prototype : void 0,
          l = s ? s.toString : void 0
        function u(c) {
          if (typeof c == 'string') return c
          if (o(c)) return n(c, u) + ''
          if (a(c)) return l ? l.call(c) : ''
          var d = c + ''
          return d == '0' && 1 / c == -i ? '-0' : d
        }
        F(u, 'baseToString'), (t.exports = u)
      }),
      MF = K((e, t) => {
        var r = qF()
        function n(o) {
          return o == null ? '' : r(o)
        }
        F(n, 'toString'), (t.exports = n)
      }),
      Sb = K((e, t) => {
        var r = Vt(),
          n = Vs(),
          o = BF(),
          a = MF()
        function i(s, l) {
          return r(s) ? s : n(s, l) ? [s] : o(a(s))
        }
        F(i, 'castPath'), (t.exports = i)
      }),
      ua = K((e, t) => {
        var r = zs(),
          n = 1 / 0
        function o(a) {
          if (typeof a == 'string' || r(a)) return a
          var i = a + ''
          return i == '0' && 1 / a == -n ? '-0' : i
        }
        F(o, 'toKey'), (t.exports = o)
      }),
      Ab = K((e, t) => {
        var r = Sb(),
          n = ua()
        function o(a, i) {
          i = r(i, a)
          for (var s = 0, l = i.length; a != null && s < l; ) a = a[n(i[s++])]
          return s && s == l ? a : void 0
        }
        F(o, 'baseGet'), (t.exports = o)
      }),
      UF = K((e, t) => {
        var r = Ab()
        function n(o, a, i) {
          var s = o == null ? void 0 : r(o, a)
          return s === void 0 ? i : s
        }
        F(n, 'get'), (t.exports = n)
      }),
      $F = K((e, t) => {
        function r(n, o) {
          return n != null && o in Object(n)
        }
        F(r, 'baseHasIn'), (t.exports = r)
      }),
      zF = K((e, t) => {
        var r = Sb(),
          n = fb(),
          o = Vt(),
          a = hb(),
          i = qs(),
          s = ua()
        function l(u, c, d) {
          c = r(c, u)
          for (var y = -1, f = c.length, h = !1; ++y < f; ) {
            var g = s(c[y])
            if (!(h = u != null && d(u, g))) break
            u = u[g]
          }
          return h || ++y != f
            ? h
            : ((f = u == null ? 0 : u.length),
              !!f && i(f) && a(g, f) && (o(u) || n(u)))
        }
        F(l, 'hasPath'), (t.exports = l)
      }),
      VF = K((e, t) => {
        var r = $F(),
          n = zF()
        function o(a, i) {
          return a != null && n(a, i, r)
        }
        F(o, 'hasIn'), (t.exports = o)
      }),
      HF = K((e, t) => {
        var r = Eb(),
          n = UF(),
          o = VF(),
          a = Vs(),
          i = xb(),
          s = wb(),
          l = ua(),
          u = 1,
          c = 2
        function d(y, f) {
          return a(y) && i(f)
            ? s(l(y), f)
            : function (h) {
                var g = n(h, y)
                return g === void 0 && g === f ? o(h, y) : r(f, g, u | c)
              }
        }
        F(d, 'baseMatchesProperty'), (t.exports = d)
      }),
      JF = K((e, t) => {
        function r(n) {
          return n
        }
        F(r, 'identity'), (t.exports = r)
      }),
      GF = K((e, t) => {
        function r(n) {
          return function (o) {
            return o?.[n]
          }
        }
        F(r, 'baseProperty'), (t.exports = r)
      }),
      WF = K((e, t) => {
        var r = Ab()
        function n(o) {
          return function (a) {
            return r(a, o)
          }
        }
        F(n, 'basePropertyDeep'), (t.exports = n)
      }),
      KF = K((e, t) => {
        var r = GF(),
          n = WF(),
          o = Vs(),
          a = ua()
        function i(s) {
          return o(s) ? r(a(s)) : n(s)
        }
        F(i, 'property'), (t.exports = i)
      }),
      YF = K((e, t) => {
        var r = FF(),
          n = HF(),
          o = JF(),
          a = Vt(),
          i = KF()
        function s(l) {
          return typeof l == 'function'
            ? l
            : l == null
              ? o
              : typeof l == 'object'
                ? a(l)
                  ? n(l[0], l[1])
                  : r(l)
                : i(l)
        }
        F(s, 'baseIteratee'), (t.exports = s)
      }),
      XF = K((e, t) => {
        var r = CD(),
          n = UD(),
          o = YF()
        function a(i, s) {
          var l = {}
          return (
            (s = o(s, 3)),
            n(i, function (u, c, d) {
              r(l, c, s(u, c, d))
            }),
            l
          )
        }
        F(a, 'mapValues'), (t.exports = a)
      }),
      QF = F((e) => e.name === 'literal', 'isLiteral'),
      ZF = F((e) => e.value.replace(/['|"]/g, ''), 'toEnumOption'),
      ej = F((e) => {
        switch (e.type) {
          case 'function':
            return { name: 'function' }
          case 'object':
            let t = {}
            return (
              e.signature.properties.forEach((r) => {
                t[r.key] = Fn(r.value)
              }),
              { name: 'object', value: t }
            )
          default:
            throw new Lo({ type: e, language: 'Flow' })
        }
      }, 'convertSig'),
      Fn = F((e) => {
        let { name: t, raw: r } = e,
          n = {}
        switch ((typeof r < 'u' && (n.raw = r), e.name)) {
          case 'literal':
            return { ...n, name: 'other', value: e.value }
          case 'string':
          case 'number':
          case 'symbol':
          case 'boolean':
            return { ...n, name: t }
          case 'Array':
            return { ...n, name: 'array', value: e.elements.map(Fn) }
          case 'signature':
            return { ...n, ...ej(e) }
          case 'union':
            return e.elements?.every(QF)
              ? { ...n, name: 'enum', value: e.elements?.map(ZF) }
              : { ...n, name: t, value: e.elements?.map(Fn) }
          case 'intersection':
            return { ...n, name: t, value: e.elements?.map(Fn) }
          default:
            return { ...n, name: 'other', value: t }
        }
      }, 'convert'),
      tj = bD(XF(), 1),
      Tb = /^['"]|['"]$/g,
      rj = F((e) => e.replace(Tb, ''), 'trimQuotes'),
      nj = F((e) => Tb.test(e), 'includesQuotes'),
      Cb = F((e) => {
        let t = rj(e)
        return nj(e) || Number.isNaN(Number(t)) ? t : Number(t)
      }, 'parseLiteral'),
      oj = /^\(.*\) => /,
      Dn = F((e) => {
        let { name: t, raw: r, computed: n, value: o } = e,
          a = {}
        switch ((typeof r < 'u' && (a.raw = r), t)) {
          case 'enum': {
            let s = n ? o : o.map((l) => Cb(l.value))
            return { ...a, name: t, value: s }
          }
          case 'string':
          case 'number':
          case 'symbol':
            return { ...a, name: t }
          case 'func':
            return { ...a, name: 'function' }
          case 'bool':
          case 'boolean':
            return { ...a, name: 'boolean' }
          case 'arrayOf':
          case 'array':
            return { ...a, name: 'array', value: o && Dn(o) }
          case 'object':
            return { ...a, name: t }
          case 'objectOf':
            return { ...a, name: t, value: Dn(o) }
          case 'shape':
          case 'exact':
            let i = (0, tj.default)(o, (s) => Dn(s))
            return { ...a, name: 'object', value: i }
          case 'union':
            return { ...a, name: 'union', value: o.map((s) => Dn(s)) }
          case 'instanceOf':
          case 'element':
          case 'elementType':
          default: {
            if (t?.indexOf('|') > 0)
              try {
                let u = t.split('|').map((c) => JSON.parse(c))
                return { ...a, name: 'enum', value: u }
              } catch {}
            let s = o ? `${t}(${o})` : t,
              l = oj.test(t) ? 'function' : 'other'
            return { ...a, name: l, value: s }
          }
        }
      }, 'convert'),
      aj = F((e) => {
        switch (e.type) {
          case 'function':
            return { name: 'function' }
          case 'object':
            let t = {}
            return (
              e.signature.properties.forEach((r) => {
                t[r.key] = jn(r.value)
              }),
              { name: 'object', value: t }
            )
          default:
            throw new Lo({ type: e, language: 'Typescript' })
        }
      }, 'convertSig'),
      jn = F((e) => {
        let { name: t, raw: r } = e,
          n = {}
        switch ((typeof r < 'u' && (n.raw = r), e.name)) {
          case 'string':
          case 'number':
          case 'symbol':
          case 'boolean':
            return { ...n, name: t }
          case 'Array':
            return { ...n, name: 'array', value: e.elements.map(jn) }
          case 'signature':
            return { ...n, ...aj(e) }
          case 'union':
            let o
            return (
              e.elements?.every((a) => a.name === 'literal')
                ? (o = {
                    ...n,
                    name: 'enum',
                    value: e.elements?.map((a) => Cb(a.value)),
                  })
                : (o = { ...n, name: t, value: e.elements?.map(jn) }),
              o
            )
          case 'intersection':
            return { ...n, name: t, value: e.elements?.map(jn) }
          default:
            return { ...n, name: 'other', value: t }
        }
      }, 'convert'),
      Hs = F((e) => {
        let { type: t, tsType: r, flowType: n } = e
        try {
          if (t != null) return Dn(t)
          if (r != null) return jn(r)
          if (n != null) return Fn(n)
        } catch (o) {
          console.error(o)
        }
        return null
      }, 'convert'),
      ij = ((e) => (
        (e.JAVASCRIPT = 'JavaScript'),
        (e.FLOW = 'Flow'),
        (e.TYPESCRIPT = 'TypeScript'),
        (e.UNKNOWN = 'Unknown'),
        e
      ))(ij || {}),
      sj = ['null', 'undefined']
    function ca(e) {
      return sj.some((t) => t === e)
    }
    F(ca, 'isDefaultValueBlacklisted')
    var lj = F((e) => {
      if (!e) return ''
      if (typeof e == 'string') return e
      throw new Error(`Description: expected string, got: ${JSON.stringify(e)}`)
    }, 'str')
    function Js(e) {
      return !!e.__docgenInfo
    }
    F(Js, 'hasDocgen')
    function _b(e) {
      return e != null && Object.keys(e).length > 0
    }
    F(_b, 'isValidDocgenSection')
    function Ob(e, t) {
      return Js(e) ? e.__docgenInfo[t] : null
    }
    F(Ob, 'getDocgenSection')
    function Ib(e) {
      return Js(e) ? lj(e.__docgenInfo.description) : ''
    }
    F(Ib, 'getDocgenDescription')
    var zt
    ;(function (e) {
      ;(e.start = '/**'), (e.nostart = '/***'), (e.delim = '*'), (e.end = '*/')
    })((zt = zt || (zt = {})))
    function kb(e) {
      return /^\s+$/.test(e)
    }
    F(kb, 'isSpace')
    function Pb(e) {
      let t = e.match(/\r+$/)
      return t == null
        ? ['', e]
        : [e.slice(-t[0].length), e.slice(0, -t[0].length)]
    }
    F(Pb, 'splitCR')
    function ir(e) {
      let t = e.match(/^\s+/)
      return t == null
        ? ['', e]
        : [e.slice(0, t[0].length), e.slice(t[0].length)]
    }
    F(ir, 'splitSpace')
    function Rb(e) {
      return e.split(/\n/)
    }
    F(Rb, 'splitLines')
    function Db(e = {}) {
      return Object.assign(
        {
          tag: '',
          name: '',
          type: '',
          optional: !1,
          description: '',
          problems: [],
          source: [],
        },
        e,
      )
    }
    F(Db, 'seedSpec')
    function Fb(e = {}) {
      return Object.assign(
        {
          start: '',
          delimiter: '',
          postDelimiter: '',
          tag: '',
          postTag: '',
          name: '',
          postName: '',
          type: '',
          postType: '',
          description: '',
          end: '',
          lineEnd: '',
        },
        e,
      )
    }
    F(Fb, 'seedTokens')
    var uj = /^@\S+/
    function jb({ fence: e = '```' } = {}) {
      let t = Nb(e),
        r = F((n, o) => (t(n) ? !o : o), 'toggleFence')
      return F(function (n) {
        let o = [[]],
          a = !1
        for (let i of n)
          uj.test(i.tokens.description) && !a
            ? o.push([i])
            : o[o.length - 1].push(i),
            (a = r(i.tokens.description, a))
        return o
      }, 'parseBlock')
    }
    F(jb, 'getParser')
    function Nb(e) {
      return typeof e == 'string' ? (t) => t.split(e).length % 2 === 0 : e
    }
    F(Nb, 'getFencer')
    function Bb({ startLine: e = 0, markers: t = zt } = {}) {
      let r = null,
        n = e
      return F(function (o) {
        let a = o,
          i = Fb()
        if (
          (([i.lineEnd, a] = Pb(a)),
          ([i.start, a] = ir(a)),
          r === null &&
            a.startsWith(t.start) &&
            !a.startsWith(t.nostart) &&
            ((r = []),
            (i.delimiter = a.slice(0, t.start.length)),
            (a = a.slice(t.start.length)),
            ([i.postDelimiter, a] = ir(a))),
          r === null)
        )
          return n++, null
        let s = a.trimRight().endsWith(t.end)
        if (
          (i.delimiter === '' &&
            a.startsWith(t.delim) &&
            !a.startsWith(t.end) &&
            ((i.delimiter = t.delim),
            (a = a.slice(t.delim.length)),
            ([i.postDelimiter, a] = ir(a))),
          s)
        ) {
          let l = a.trimRight()
          ;(i.end = a.slice(l.length - t.end.length)),
            (a = l.slice(0, -t.end.length))
        }
        if (
          ((i.description = a),
          r.push({ number: n, source: o, tokens: i }),
          n++,
          s)
        ) {
          let l = r.slice()
          return (r = null), l
        }
        return null
      }, 'parseSource')
    }
    F(Bb, 'getParser')
    function Lb({ tokenizers: e }) {
      return F(function (t) {
        var r
        let n = Db({ source: t })
        for (let o of e)
          if (
            ((n = o(n)),
            !(
              (r = n.problems[n.problems.length - 1]) === null || r === void 0
            ) && r.critical)
          )
            break
        return n
      }, 'parseSpec')
    }
    F(Lb, 'getParser')
    function qb() {
      return (e) => {
        let { tokens: t } = e.source[0],
          r = t.description.match(/\s*(@(\S+))(\s*)/)
        return r === null
          ? (e.problems.push({
              code: 'spec:tag:prefix',
              message: 'tag should start with "@" symbol',
              line: e.source[0].number,
              critical: !0,
            }),
            e)
          : ((t.tag = r[1]),
            (t.postTag = r[3]),
            (t.description = t.description.slice(r[0].length)),
            (e.tag = r[2]),
            e)
      }
    }
    F(qb, 'tagTokenizer')
    function Mb(e = 'compact') {
      let t = Ub(e)
      return (r) => {
        let n = 0,
          o = []
        for (let [s, { tokens: l }] of r.source.entries()) {
          let u = ''
          if (s === 0 && l.description[0] !== '{') return r
          for (let c of l.description)
            if ((c === '{' && n++, c === '}' && n--, (u += c), n === 0)) break
          if ((o.push([l, u]), n === 0)) break
        }
        if (n !== 0)
          return (
            r.problems.push({
              code: 'spec:type:unpaired-curlies',
              message: 'unpaired curlies',
              line: r.source[0].number,
              critical: !0,
            }),
            r
          )
        let a = [],
          i = o[0][0].postDelimiter.length
        for (let [s, [l, u]] of o.entries())
          (l.type = u),
            s > 0 &&
              ((l.type = l.postDelimiter.slice(i) + u),
              (l.postDelimiter = l.postDelimiter.slice(0, i))),
            ([l.postType, l.description] = ir(l.description.slice(u.length))),
            a.push(l.type)
        return (
          (a[0] = a[0].slice(1)),
          (a[a.length - 1] = a[a.length - 1].slice(0, -1)),
          (r.type = t(a)),
          r
        )
      }
    }
    F(Mb, 'typeTokenizer')
    var cj = F((e) => e.trim(), 'trim')
    function Ub(e) {
      return e === 'compact'
        ? (t) => t.map(cj).join('')
        : e === 'preserve'
          ? (t) =>
              t.join(`
`)
          : e
    }
    F(Ub, 'getJoiner')
    var pj = F((e) => e && e.startsWith('"') && e.endsWith('"'), 'isQuoted')
    function $b() {
      let e = F((t, { tokens: r }, n) => (r.type === '' ? t : n), 'typeEnd')
      return (t) => {
        let { tokens: r } = t.source[t.source.reduce(e, 0)],
          n = r.description.trimLeft(),
          o = n.split('"')
        if (o.length > 1 && o[0] === '' && o.length % 2 === 1)
          return (
            (t.name = o[1]),
            (r.name = `"${o[1]}"`),
            ([r.postName, r.description] = ir(n.slice(r.name.length))),
            t
          )
        let a = 0,
          i = '',
          s = !1,
          l
        for (let c of n) {
          if (a === 0 && kb(c)) break
          c === '[' && a++, c === ']' && a--, (i += c)
        }
        if (a !== 0)
          return (
            t.problems.push({
              code: 'spec:name:unpaired-brackets',
              message: 'unpaired brackets',
              line: t.source[0].number,
              critical: !0,
            }),
            t
          )
        let u = i
        if (i[0] === '[' && i[i.length - 1] === ']') {
          ;(s = !0), (i = i.slice(1, -1))
          let c = i.split('=')
          if (
            ((i = c[0].trim()),
            c[1] !== void 0 && (l = c.slice(1).join('=').trim()),
            i === '')
          )
            return (
              t.problems.push({
                code: 'spec:name:empty-name',
                message: 'empty name',
                line: t.source[0].number,
                critical: !0,
              }),
              t
            )
          if (l === '')
            return (
              t.problems.push({
                code: 'spec:name:empty-default',
                message: 'empty default value',
                line: t.source[0].number,
                critical: !0,
              }),
              t
            )
          if (!pj(l) && /=(?!>)/.test(l))
            return (
              t.problems.push({
                code: 'spec:name:invalid-default',
                message: 'invalid default value syntax',
                line: t.source[0].number,
                critical: !0,
              }),
              t
            )
        }
        return (
          (t.optional = s),
          (t.name = i),
          (r.name = u),
          l !== void 0 && (t.default = l),
          ([r.postName, r.description] = ir(n.slice(r.name.length))),
          t
        )
      }
    }
    F($b, 'nameTokenizer')
    function zb(e = 'compact', t = zt) {
      let r = Gs(e)
      return (n) => ((n.description = r(n.source, t)), n)
    }
    F(zb, 'descriptionTokenizer')
    function Gs(e) {
      return e === 'compact' ? Vb : e === 'preserve' ? Hb : e
    }
    F(Gs, 'getJoiner')
    function Vb(e, t = zt) {
      return e
        .map(({ tokens: { description: r } }) => r.trim())
        .filter((r) => r !== '')
        .join(' ')
    }
    F(Vb, 'compactJoiner')
    var dj = F((e, { tokens: t }, r) => (t.type === '' ? e : r), 'lineNo'),
      fj = F(
        ({ tokens: e }) =>
          (e.delimiter === '' ? e.start : e.postDelimiter.slice(1)) +
          e.description,
        'getDescription',
      )
    function Hb(e, t = zt) {
      if (e.length === 0) return ''
      e[0].tokens.description === '' &&
        e[0].tokens.delimiter === t.start &&
        (e = e.slice(1))
      let r = e[e.length - 1]
      return (
        r !== void 0 &&
          r.tokens.description === '' &&
          r.tokens.end.endsWith(t.end) &&
          (e = e.slice(0, -1)),
        (e = e.slice(e.reduce(dj, 0))),
        e.map(fj).join(`
`)
      )
    }
    F(Hb, 'preserveJoiner')
    function Jb({
      startLine: e = 0,
      fence: t = '```',
      spacing: r = 'compact',
      markers: n = zt,
      tokenizers: o = [qb(), Mb(r), $b(), zb(r)],
    } = {}) {
      if (e < 0 || e % 1 > 0) throw new Error('Invalid startLine')
      let a = Bb({ startLine: e, markers: n }),
        i = jb({ fence: t }),
        s = Lb({ tokenizers: o }),
        l = Gs(r)
      return function (u) {
        let c = []
        for (let d of Rb(u)) {
          let y = a(d)
          if (y === null) continue
          let f = i(y),
            h = f.slice(1).map(s)
          c.push({
            description: l(f[0], n),
            tags: h,
            source: y,
            problems: h.reduce((g, C) => g.concat(C.problems), []),
          })
        }
        return c
      }
    }
    F(Jb, 'getParser')
    function Gb(e) {
      return (
        e.start +
        e.delimiter +
        e.postDelimiter +
        e.tag +
        e.postTag +
        e.type +
        e.postType +
        e.name +
        e.postName +
        e.description +
        e.end +
        e.lineEnd
      )
    }
    F(Gb, 'join')
    function Wb() {
      return (e) =>
        e.source.map(({ tokens: t }) => Gb(t)).join(`
`)
    }
    F(Wb, 'getStringifier')
    var yj = {
        line: 0,
        start: 0,
        delimiter: 0,
        postDelimiter: 0,
        tag: 0,
        postTag: 0,
        name: 0,
        postName: 0,
        type: 0,
        postType: 0,
        description: 0,
        end: 0,
        lineEnd: 0,
      },
      Nne = Object.keys(yj)
    function Kb(e, t = {}) {
      return Jb(t)(e)
    }
    F(Kb, 'parse')
    var Bne = Wb()
    function Yb(e) {
      return e != null && e.includes('@')
    }
    F(Yb, 'containsJsDoc')
    function Xb(e) {
      let t =
          `/**
` +
          (e ?? '')
            .split(
              `
`,
            )
            .map((n) => ` * ${n}`).join(`
`) +
          `
*/`,
        r = Kb(t, { spacing: 'preserve' })
      if (!r || r.length === 0) throw new Error('Cannot parse JSDoc tags.')
      return r[0]
    }
    F(Xb, 'parse')
    var hj = {
        tags: ['param', 'arg', 'argument', 'returns', 'ignore', 'deprecated'],
      },
      mj = F((e, t = hj) => {
        if (!Yb(e)) return { includesJsDoc: !1, ignore: !1 }
        let r = Xb(e),
          n = Qb(r, t.tags)
        return n.ignore
          ? { includesJsDoc: !0, ignore: !0 }
          : {
              includesJsDoc: !0,
              ignore: !1,
              description: r.description.trim(),
              extractedTags: n,
            }
      }, 'parseJsDoc')
    function Qb(e, t) {
      let r = { params: null, deprecated: null, returns: null, ignore: !1 }
      for (let n of e.tags)
        if (!(t !== void 0 && !t.includes(n.tag)))
          if (n.tag === 'ignore') {
            r.ignore = !0
            break
          } else
            switch (n.tag) {
              case 'param':
              case 'arg':
              case 'argument': {
                let o = e0(n)
                o != null &&
                  (r.params == null && (r.params = []), r.params.push(o))
                break
              }
              case 'deprecated': {
                let o = t0(n)
                o != null && (r.deprecated = o)
                break
              }
              case 'returns': {
                let o = r0(n)
                o != null && (r.returns = o)
                break
              }
              default:
                break
            }
      return r
    }
    F(Qb, 'extractJsDocTags')
    function Zb(e) {
      return e.replace(/[\.-]$/, '')
    }
    F(Zb, 'normaliseParamName')
    function e0(e) {
      if (!e.name || e.name === '-') return null
      let t = Ys(e.type)
      return {
        name: e.name,
        type: t,
        description: Ks(e.description),
        getPrettyName: F(() => Zb(e.name), 'getPrettyName'),
        getTypeName: F(() => (t ? Xs(t) : null), 'getTypeName'),
      }
    }
    F(e0, 'extractParam')
    function t0(e) {
      return e.name ? Ws(e.name, e.description) : null
    }
    F(t0, 'extractDeprecated')
    function Ws(e, t) {
      let r = e === '' ? t : `${e} ${t}`
      return Ks(r)
    }
    F(Ws, 'joinNameAndDescription')
    function Ks(e) {
      let t = e.replace(/^- /g, '').trim()
      return t === '' ? null : t
    }
    F(Ks, 'normaliseDescription')
    function r0(e) {
      let t = Ys(e.type)
      return t
        ? {
            type: t,
            description: Ws(e.name, e.description),
            getTypeName: F(() => Xs(t), 'getTypeName'),
          }
        : null
    }
    F(r0, 'extractReturns')
    var Ht = (0, Ur.stringifyRules)(),
      gj = Ht.JsdocTypeObject
    Ht.JsdocTypeAny = () => 'any'
    Ht.JsdocTypeObject = (e, t) => `(${gj(e, t)})`
    Ht.JsdocTypeOptional = (e, t) => t(e.element)
    Ht.JsdocTypeNullable = (e, t) => t(e.element)
    Ht.JsdocTypeNotNullable = (e, t) => t(e.element)
    Ht.JsdocTypeUnion = (e, t) => e.elements.map(t).join('|')
    function Ys(e) {
      try {
        return (0, Ur.parse)(e, 'typescript')
      } catch {
        return null
      }
    }
    F(Ys, 'extractType')
    function Xs(e) {
      return (0, Ur.transform)(Ht, e)
    }
    F(Xs, 'extractTypeName')
    function Qs(e) {
      return e.length > 90
    }
    F(Qs, 'isTooLongForTypeSummary')
    function n0(e) {
      return e.length > 50
    }
    F(n0, 'isTooLongForDefaultValueSummary')
    function Re(e, t) {
      return e === t ? { summary: e } : { summary: e, detail: t }
    }
    F(Re, 'createSummaryValue')
    var Lne = F((e) => e.replace(/\\r\\n/g, '\\n'), 'normalizeNewlines')
    function o0(e, t) {
      if (e != null) {
        let { value: r } = e
        if (!ca(r)) return n0(r) ? Re(t?.name, r) : Re(r)
      }
      return null
    }
    F(o0, 'createDefaultValue')
    function Zs({ name: e, value: t, elements: r, raw: n }) {
      return t ?? (r != null ? r.map(Zs).join(' | ') : (n ?? e))
    }
    F(Zs, 'generateUnionElement')
    function a0({ name: e, raw: t, elements: r }) {
      return r != null
        ? Re(r.map(Zs).join(' | '))
        : t != null
          ? Re(t.replace(/^\|\s*/, ''))
          : Re(e)
    }
    F(a0, 'generateUnion')
    function i0({ type: e, raw: t }) {
      return t != null ? Re(t) : Re(e)
    }
    F(i0, 'generateFuncSignature')
    function s0({ type: e, raw: t }) {
      return t != null ? (Qs(t) ? Re(e, t) : Re(t)) : Re(e)
    }
    F(s0, 'generateObjectSignature')
    function l0(e) {
      let { type: t } = e
      return t === 'object' ? s0(e) : i0(e)
    }
    F(l0, 'generateSignature')
    function u0({ name: e, raw: t }) {
      return t != null ? (Qs(t) ? Re(e, t) : Re(t)) : Re(e)
    }
    F(u0, 'generateDefault')
    function c0(e) {
      if (e == null) return null
      switch (e.name) {
        case 'union':
          return a0(e)
        case 'signature':
          return l0(e)
        default:
          return u0(e)
      }
    }
    F(c0, 'createType')
    var bj = F((e, t) => {
      let { flowType: r, description: n, required: o, defaultValue: a } = t
      return {
        name: e,
        type: c0(r),
        required: o,
        description: n,
        defaultValue: o0(a ?? null, r ?? null),
      }
    }, 'createFlowPropDef')
    function p0({ defaultValue: e }) {
      if (e != null) {
        let { value: t } = e
        if (!ca(t)) return Re(t)
      }
      return null
    }
    F(p0, 'createDefaultValue')
    function d0({ tsType: e, required: t }) {
      if (e == null) return null
      let r = e.name
      return (
        t || (r = r.replace(' | undefined', '')),
        Re(['Array', 'Record', 'signature'].includes(e.name) ? e.raw : r)
      )
    }
    F(d0, 'createType')
    var vj = F((e, t) => {
      let { description: r, required: n } = t
      return {
        name: e,
        type: d0(t),
        required: n,
        description: r,
        defaultValue: p0(t),
      }
    }, 'createTsPropDef')
    function f0(e) {
      return e != null ? Re(e.name) : null
    }
    F(f0, 'createType')
    function y0(e) {
      let { computed: t, func: r } = e
      return typeof t > 'u' && typeof r > 'u'
    }
    F(y0, 'isReactDocgenTypescript')
    function h0(e) {
      return e
        ? e.name === 'string'
          ? !0
          : e.name === 'enum'
            ? Array.isArray(e.value) &&
              e.value.every(
                ({ value: t }) =>
                  typeof t == 'string' &&
                  t[0] === '"' &&
                  t[t.length - 1] === '"',
              )
            : !1
        : !1
    }
    F(h0, 'isStringValued')
    function m0(e, t) {
      if (e != null) {
        let { value: r } = e
        if (!ca(r)) return y0(e) && h0(t) ? Re(JSON.stringify(r)) : Re(r)
      }
      return null
    }
    F(m0, 'createDefaultValue')
    function el(e, t, r) {
      let { description: n, required: o, defaultValue: a } = r
      return {
        name: e,
        type: f0(t),
        required: o,
        description: n,
        defaultValue: m0(a, t),
      }
    }
    F(el, 'createBasicPropDef')
    function Ln(e, t) {
      if (t?.includesJsDoc) {
        let { description: r, extractedTags: n } = t
        r != null && (e.description = t.description)
        let o = {
          ...n,
          params: n?.params?.map((a) => ({
            name: a.getPrettyName(),
            description: a.description,
          })),
        }
        Object.values(o).filter(Boolean).length > 0 && (e.jsDocTags = o)
      }
      return e
    }
    F(Ln, 'applyJsDocResult')
    var Ej = F((e, t, r) => {
        let n = el(e, t.type, t)
        return (n.sbType = Hs(t)), Ln(n, r)
      }, 'javaScriptFactory'),
      xj = F((e, t, r) => {
        let n = vj(e, t)
        return (n.sbType = Hs(t)), Ln(n, r)
      }, 'tsFactory'),
      wj = F((e, t, r) => {
        let n = bj(e, t)
        return (n.sbType = Hs(t)), Ln(n, r)
      }, 'flowFactory'),
      Sj = F((e, t, r) => {
        let n = el(e, { name: 'unknown' }, t)
        return Ln(n, r)
      }, 'unknownFactory'),
      g0 = F((e) => {
        switch (e) {
          case 'JavaScript':
            return Ej
          case 'TypeScript':
            return xj
          case 'Flow':
            return wj
          default:
            return Sj
        }
      }, 'getPropDefFactory'),
      b0 = F(
        (e) =>
          e.type != null
            ? 'JavaScript'
            : e.flowType != null
              ? 'Flow'
              : e.tsType != null
                ? 'TypeScript'
                : 'Unknown',
        'getTypeSystem',
      ),
      Aj = F((e) => {
        let t = b0(e[0]),
          r = g0(t)
        return e.map((n) => {
          let o = n
          return (
            n.type?.elements &&
              (o = { ...n, type: { ...n.type, value: n.type.elements } }),
            tl(o.name, o, t, r)
          )
        })
      }, 'extractComponentSectionArray'),
      Tj = F((e) => {
        let t = Object.keys(e),
          r = b0(e[t[0]]),
          n = g0(r)
        return t
          .map((o) => {
            let a = e[o]
            return a != null ? tl(o, a, r, n) : null
          })
          .filter(Boolean)
      }, 'extractComponentSectionObject'),
      qne = F((e, t) => {
        let r = Ob(e, t)
        return _b(r) ? (Array.isArray(r) ? Aj(r) : Tj(r)) : []
      }, 'extractComponentProps')
    function tl(e, t, r, n) {
      let o = mj(t.description)
      return o.includesJsDoc && o.ignore
        ? null
        : {
            propDef: n(e, t, o),
            jsDocTags: o.extractedTags,
            docgenInfo: t,
            typeSystem: r,
          }
    }
    F(tl, 'extractProp')
    function Cj(e) {
      return e != null ? Ib(e) : ''
    }
    F(Cj, 'extractComponentDescription')
    var Une = F((e) => {
        let {
            component: t,
            argTypes: r,
            parameters: { docs: n = {} },
          } = e,
          { extractArgTypes: o } = n,
          a = o && t ? o(t) : {}
        return a ? Ct(a, r) : r
      }, 'enhanceArgTypes'),
      v0 = 'storybook/docs',
      $ne = `${v0}/panel`
    var zne = `${v0}/snippet-rendered`,
      _j = ((e) => (
        (e.AUTO = 'auto'), (e.CODE = 'code'), (e.DYNAMIC = 'dynamic'), e
      ))(_j || {}),
      Oj = /(addons\/|addon-|addon-essentials\/)(docs|controls)/,
      Vne = F(
        (e) => e.presetsList?.some((t) => Oj.test(t.name)),
        'hasDocsOrControls',
      )
    w()
    S()
    A()
    w()
    S()
    A()
    var ooe = __STORYBOOK_CHANNELS__,
      {
        Channel: aoe,
        PostMessageTransport: ioe,
        WebsocketTransport: soe,
        createBrowserChannel: loe,
      } = __STORYBOOK_CHANNELS__
    var Dv = Yt({
      '../../node_modules/memoizerific/memoizerific.js'(e, t) {
        ;(function (r) {
          if (typeof e == 'object' && typeof t < 'u') t.exports = r()
          else if (typeof define == 'function' && define.amd) define([], r)
          else {
            var n
            typeof window < 'u' || typeof window < 'u'
              ? (n = window)
              : typeof self < 'u'
                ? (n = self)
                : (n = this),
              (n.memoizerific = r())
          }
        })(function () {
          return (function r(n, o, a) {
            function i(u, c) {
              if (!o[u]) {
                if (!n[u]) {
                  var d = typeof an == 'function' && an
                  if (!c && d) return d(u, !0)
                  if (s) return s(u, !0)
                  var y = new Error("Cannot find module '" + u + "'")
                  throw ((y.code = 'MODULE_NOT_FOUND'), y)
                }
                var f = (o[u] = { exports: {} })
                n[u][0].call(
                  f.exports,
                  function (h) {
                    var g = n[u][1][h]
                    return i(g || h)
                  },
                  f,
                  f.exports,
                  r,
                  n,
                  o,
                  a,
                )
              }
              return o[u].exports
            }
            for (
              var s = typeof an == 'function' && an, l = 0;
              l < a.length;
              l++
            )
              i(a[l])
            return i
          })(
            {
              1: [
                function (r, n, o) {
                  n.exports = function (a) {
                    if (typeof Map != 'function' || a) {
                      var i = r('./similar')
                      return new i()
                    } else return new Map()
                  }
                },
                { './similar': 2 },
              ],
              2: [
                function (r, n, o) {
                  function a() {
                    return (
                      (this.list = []),
                      (this.lastItem = void 0),
                      (this.size = 0),
                      this
                    )
                  }
                  ;(a.prototype.get = function (i) {
                    var s
                    if (this.lastItem && this.isEqual(this.lastItem.key, i))
                      return this.lastItem.val
                    if (((s = this.indexOf(i)), s >= 0))
                      return (this.lastItem = this.list[s]), this.list[s].val
                  }),
                    (a.prototype.set = function (i, s) {
                      var l
                      return this.lastItem && this.isEqual(this.lastItem.key, i)
                        ? ((this.lastItem.val = s), this)
                        : ((l = this.indexOf(i)),
                          l >= 0
                            ? ((this.lastItem = this.list[l]),
                              (this.list[l].val = s),
                              this)
                            : ((this.lastItem = { key: i, val: s }),
                              this.list.push(this.lastItem),
                              this.size++,
                              this))
                    }),
                    (a.prototype.delete = function (i) {
                      var s
                      if (
                        (this.lastItem &&
                          this.isEqual(this.lastItem.key, i) &&
                          (this.lastItem = void 0),
                        (s = this.indexOf(i)),
                        s >= 0)
                      )
                        return this.size--, this.list.splice(s, 1)[0]
                    }),
                    (a.prototype.has = function (i) {
                      var s
                      return this.lastItem && this.isEqual(this.lastItem.key, i)
                        ? !0
                        : ((s = this.indexOf(i)),
                          s >= 0 ? ((this.lastItem = this.list[s]), !0) : !1)
                    }),
                    (a.prototype.forEach = function (i, s) {
                      var l
                      for (l = 0; l < this.size; l++)
                        i.call(
                          s || this,
                          this.list[l].val,
                          this.list[l].key,
                          this,
                        )
                    }),
                    (a.prototype.indexOf = function (i) {
                      var s
                      for (s = 0; s < this.size; s++)
                        if (this.isEqual(this.list[s].key, i)) return s
                      return -1
                    }),
                    (a.prototype.isEqual = function (i, s) {
                      return i === s || (i !== i && s !== s)
                    }),
                    (n.exports = a)
                },
                {},
              ],
              3: [
                function (r, n, o) {
                  var a = r('map-or-similar')
                  n.exports = function (u) {
                    var c = new a(!1),
                      d = []
                    return function (y) {
                      var f = function () {
                        var h = c,
                          g,
                          C,
                          b = arguments.length - 1,
                          E = Array(b + 1),
                          _ = !0,
                          T
                        if (
                          (f.numArgs || f.numArgs === 0) &&
                          f.numArgs !== b + 1
                        )
                          throw new Error(
                            'Memoizerific functions should always be called with the same number of arguments',
                          )
                        for (T = 0; T < b; T++) {
                          if (
                            ((E[T] = { cacheItem: h, arg: arguments[T] }),
                            h.has(arguments[T]))
                          ) {
                            h = h.get(arguments[T])
                            continue
                          }
                          ;(_ = !1),
                            (g = new a(!1)),
                            h.set(arguments[T], g),
                            (h = g)
                        }
                        return (
                          _ &&
                            (h.has(arguments[b])
                              ? (C = h.get(arguments[b]))
                              : (_ = !1)),
                          _ ||
                            ((C = y.apply(null, arguments)),
                            h.set(arguments[b], C)),
                          u > 0 &&
                            ((E[b] = { cacheItem: h, arg: arguments[b] }),
                            _ ? i(d, E) : d.push(E),
                            d.length > u && s(d.shift())),
                          (f.wasMemoized = _),
                          (f.numArgs = b + 1),
                          C
                        )
                      }
                      return (
                        (f.limit = u),
                        (f.wasMemoized = !1),
                        (f.cache = c),
                        (f.lru = d),
                        f
                      )
                    }
                  }
                  function i(u, c) {
                    var d = u.length,
                      y = c.length,
                      f,
                      h,
                      g
                    for (h = 0; h < d; h++) {
                      for (f = !0, g = 0; g < y; g++)
                        if (!l(u[h][g].arg, c[g].arg)) {
                          f = !1
                          break
                        }
                      if (f) break
                    }
                    u.push(u.splice(h, 1)[0])
                  }
                  function s(u) {
                    var c = u.length,
                      d = u[c - 1],
                      y,
                      f
                    for (
                      d.cacheItem.delete(d.arg), f = c - 2;
                      f >= 0 &&
                      ((d = u[f]), (y = d.cacheItem.get(d.arg)), !y || !y.size);
                      f--
                    )
                      d.cacheItem.delete(d.arg)
                  }
                  function l(u, c) {
                    return u === c || (u !== u && c !== c)
                  }
                },
                { 'map-or-similar': 1 },
              ],
            },
            {},
            [3],
          )(3)
        })
      },
    })
    function Jr() {
      return (
        (Jr = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t]
                for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
              }
              return e
            }),
        Jr.apply(null, arguments)
      )
    }
    function FN(e) {
      if (e === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        )
      return e
    }
    function zn(e, t) {
      return (
        (zn = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (r, n) {
              return (r.__proto__ = n), r
            }),
        zn(e, t)
      )
    }
    function jN(e, t) {
      ;(e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        zn(e, t)
    }
    function Sl(e) {
      return (
        (Sl = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t)
            }),
        Sl(e)
      )
    }
    function NN(e) {
      try {
        return Function.toString.call(e).indexOf('[native code]') !== -1
      } catch {
        return typeof e == 'function'
      }
    }
    function Fv() {
      try {
        var e = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        )
      } catch {}
      return (Fv = function () {
        return !!e
      })()
    }
    function BN(e, t, r) {
      if (Fv()) return Reflect.construct.apply(null, arguments)
      var n = [null]
      n.push.apply(n, t)
      var o = new (e.bind.apply(e, n))()
      return r && zn(o, r.prototype), o
    }
    function Al(e) {
      var t = typeof Map == 'function' ? new Map() : void 0
      return (
        (Al = function (r) {
          if (r === null || !NN(r)) return r
          if (typeof r != 'function')
            throw new TypeError(
              'Super expression must either be null or a function',
            )
          if (t !== void 0) {
            if (t.has(r)) return t.get(r)
            t.set(r, n)
          }
          function n() {
            return BN(r, arguments, Sl(this).constructor)
          }
          return (
            (n.prototype = Object.create(r.prototype, {
              constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            zn(n, r)
          )
        }),
        Al(e)
      )
    }
    var LN = {
      1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
      2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
      3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
      4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
      5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
      6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
      7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
      8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
      9: `Please provide a number of steps to the modularScale helper.

`,
      10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
      11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
      12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
      13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
      14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
      15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
      16: `You must provide a template to this method.

`,
      17: `You passed an unsupported selector state to this method.

`,
      18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
      19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
      20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
      21: 'expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n',
      22: 'expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n',
      23: `fontFace expects a name of a font-family.

`,
      24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
      25: `fontFace expects localFonts to be an array.

`,
      26: `fontFace expects fileFormats to be an array.

`,
      27: `radialGradient requries at least 2 color-stops to properly render.

`,
      28: `Please supply a filename to retinaImage() as the first argument.

`,
      29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
      30: 'Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n',
      31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
      32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
      33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
      34: `borderRadius expects a radius value as a string or number as the second argument.

`,
      35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
      36: `Property must be a string value.

`,
      37: `Syntax Error at %s.

`,
      38: `Formula contains a function that needs parentheses at %s.

`,
      39: `Formula is missing closing parenthesis at %s.

`,
      40: `Formula has too many closing parentheses at %s.

`,
      41: `All values in a formula must have the same unit or be unitless.

`,
      42: `Please provide a number of steps to the modularScale helper.

`,
      43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
      44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
      45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
      46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
      47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
      48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
      49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
      50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
      51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
      52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
      53: `fontFace expects localFonts to be an array.

`,
      54: `fontFace expects fileFormats to be an array.

`,
      55: `fontFace expects a name of a font-family.

`,
      56: `linearGradient requries at least 2 color-stops to properly render.

`,
      57: `radialGradient requries at least 2 color-stops to properly render.

`,
      58: `Please supply a filename to retinaImage() as the first argument.

`,
      59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
      60: 'Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n',
      61: `Property must be a string value.

`,
      62: `borderRadius expects a radius value as a string or number as the second argument.

`,
      63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
      64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
      65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
      66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
      67: `You must provide a template to this method.

`,
      68: `You passed an unsupported selector state to this method.

`,
      69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
      70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
      71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
      72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
      73: `Please provide a valid CSS variable.

`,
      74: `CSS variable not found and no default was provided.

`,
      75: `important requires a valid style object, got a %s instead.

`,
      76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
      77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
      78: `base must be set in "px" or "%" but you set it in "%s".
`,
    }
    function qN() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r]
      var n = t[0],
        o = [],
        a
      for (a = 1; a < t.length; a += 1) o.push(t[a])
      return (
        o.forEach(function (i) {
          n = n.replace(/%[a-z]/, i)
        }),
        n
      )
    }
    var vt = (function (e) {
      jN(t, e)
      function t(r) {
        for (
          var n, o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1;
          i < o;
          i++
        )
          a[i - 1] = arguments[i]
        return (
          (n = e.call(this, qN.apply(void 0, [LN[r]].concat(a))) || this), FN(n)
        )
      }
      return t
    })(Al(Error))
    function pl(e) {
      return Math.round(e * 255)
    }
    function MN(e, t, r) {
      return pl(e) + ',' + pl(t) + ',' + pl(r)
    }
    function Vn(e, t, r, n) {
      if ((n === void 0 && (n = MN), t === 0)) return n(r, r, r)
      var o = (((e % 360) + 360) % 360) / 60,
        a = (1 - Math.abs(2 * r - 1)) * t,
        i = a * (1 - Math.abs((o % 2) - 1)),
        s = 0,
        l = 0,
        u = 0
      o >= 0 && o < 1
        ? ((s = a), (l = i))
        : o >= 1 && o < 2
          ? ((s = i), (l = a))
          : o >= 2 && o < 3
            ? ((l = a), (u = i))
            : o >= 3 && o < 4
              ? ((l = i), (u = a))
              : o >= 4 && o < 5
                ? ((s = i), (u = a))
                : o >= 5 && o < 6 && ((s = a), (u = i))
      var c = r - a / 2,
        d = s + c,
        y = l + c,
        f = u + c
      return n(d, y, f)
    }
    var ev = {
      aliceblue: 'f0f8ff',
      antiquewhite: 'faebd7',
      aqua: '00ffff',
      aquamarine: '7fffd4',
      azure: 'f0ffff',
      beige: 'f5f5dc',
      bisque: 'ffe4c4',
      black: '000',
      blanchedalmond: 'ffebcd',
      blue: '0000ff',
      blueviolet: '8a2be2',
      brown: 'a52a2a',
      burlywood: 'deb887',
      cadetblue: '5f9ea0',
      chartreuse: '7fff00',
      chocolate: 'd2691e',
      coral: 'ff7f50',
      cornflowerblue: '6495ed',
      cornsilk: 'fff8dc',
      crimson: 'dc143c',
      cyan: '00ffff',
      darkblue: '00008b',
      darkcyan: '008b8b',
      darkgoldenrod: 'b8860b',
      darkgray: 'a9a9a9',
      darkgreen: '006400',
      darkgrey: 'a9a9a9',
      darkkhaki: 'bdb76b',
      darkmagenta: '8b008b',
      darkolivegreen: '556b2f',
      darkorange: 'ff8c00',
      darkorchid: '9932cc',
      darkred: '8b0000',
      darksalmon: 'e9967a',
      darkseagreen: '8fbc8f',
      darkslateblue: '483d8b',
      darkslategray: '2f4f4f',
      darkslategrey: '2f4f4f',
      darkturquoise: '00ced1',
      darkviolet: '9400d3',
      deeppink: 'ff1493',
      deepskyblue: '00bfff',
      dimgray: '696969',
      dimgrey: '696969',
      dodgerblue: '1e90ff',
      firebrick: 'b22222',
      floralwhite: 'fffaf0',
      forestgreen: '228b22',
      fuchsia: 'ff00ff',
      gainsboro: 'dcdcdc',
      ghostwhite: 'f8f8ff',
      gold: 'ffd700',
      goldenrod: 'daa520',
      gray: '808080',
      green: '008000',
      greenyellow: 'adff2f',
      grey: '808080',
      honeydew: 'f0fff0',
      hotpink: 'ff69b4',
      indianred: 'cd5c5c',
      indigo: '4b0082',
      ivory: 'fffff0',
      khaki: 'f0e68c',
      lavender: 'e6e6fa',
      lavenderblush: 'fff0f5',
      lawngreen: '7cfc00',
      lemonchiffon: 'fffacd',
      lightblue: 'add8e6',
      lightcoral: 'f08080',
      lightcyan: 'e0ffff',
      lightgoldenrodyellow: 'fafad2',
      lightgray: 'd3d3d3',
      lightgreen: '90ee90',
      lightgrey: 'd3d3d3',
      lightpink: 'ffb6c1',
      lightsalmon: 'ffa07a',
      lightseagreen: '20b2aa',
      lightskyblue: '87cefa',
      lightslategray: '789',
      lightslategrey: '789',
      lightsteelblue: 'b0c4de',
      lightyellow: 'ffffe0',
      lime: '0f0',
      limegreen: '32cd32',
      linen: 'faf0e6',
      magenta: 'f0f',
      maroon: '800000',
      mediumaquamarine: '66cdaa',
      mediumblue: '0000cd',
      mediumorchid: 'ba55d3',
      mediumpurple: '9370db',
      mediumseagreen: '3cb371',
      mediumslateblue: '7b68ee',
      mediumspringgreen: '00fa9a',
      mediumturquoise: '48d1cc',
      mediumvioletred: 'c71585',
      midnightblue: '191970',
      mintcream: 'f5fffa',
      mistyrose: 'ffe4e1',
      moccasin: 'ffe4b5',
      navajowhite: 'ffdead',
      navy: '000080',
      oldlace: 'fdf5e6',
      olive: '808000',
      olivedrab: '6b8e23',
      orange: 'ffa500',
      orangered: 'ff4500',
      orchid: 'da70d6',
      palegoldenrod: 'eee8aa',
      palegreen: '98fb98',
      paleturquoise: 'afeeee',
      palevioletred: 'db7093',
      papayawhip: 'ffefd5',
      peachpuff: 'ffdab9',
      peru: 'cd853f',
      pink: 'ffc0cb',
      plum: 'dda0dd',
      powderblue: 'b0e0e6',
      purple: '800080',
      rebeccapurple: '639',
      red: 'f00',
      rosybrown: 'bc8f8f',
      royalblue: '4169e1',
      saddlebrown: '8b4513',
      salmon: 'fa8072',
      sandybrown: 'f4a460',
      seagreen: '2e8b57',
      seashell: 'fff5ee',
      sienna: 'a0522d',
      silver: 'c0c0c0',
      skyblue: '87ceeb',
      slateblue: '6a5acd',
      slategray: '708090',
      slategrey: '708090',
      snow: 'fffafa',
      springgreen: '00ff7f',
      steelblue: '4682b4',
      tan: 'd2b48c',
      teal: '008080',
      thistle: 'd8bfd8',
      tomato: 'ff6347',
      turquoise: '40e0d0',
      violet: 'ee82ee',
      wheat: 'f5deb3',
      white: 'fff',
      whitesmoke: 'f5f5f5',
      yellow: 'ff0',
      yellowgreen: '9acd32',
    }
    function UN(e) {
      if (typeof e != 'string') return e
      var t = e.toLowerCase()
      return ev[t] ? '#' + ev[t] : e
    }
    var $N = /^#[a-fA-F0-9]{6}$/,
      zN = /^#[a-fA-F0-9]{8}$/,
      VN = /^#[a-fA-F0-9]{3}$/,
      HN = /^#[a-fA-F0-9]{4}$/,
      dl =
        /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
      JN =
        /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
      GN =
        /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
      WN =
        /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i
    function wa(e) {
      if (typeof e != 'string') throw new vt(3)
      var t = UN(e)
      if (t.match($N))
        return {
          red: parseInt('' + t[1] + t[2], 16),
          green: parseInt('' + t[3] + t[4], 16),
          blue: parseInt('' + t[5] + t[6], 16),
        }
      if (t.match(zN)) {
        var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2))
        return {
          red: parseInt('' + t[1] + t[2], 16),
          green: parseInt('' + t[3] + t[4], 16),
          blue: parseInt('' + t[5] + t[6], 16),
          alpha: r,
        }
      }
      if (t.match(VN))
        return {
          red: parseInt('' + t[1] + t[1], 16),
          green: parseInt('' + t[2] + t[2], 16),
          blue: parseInt('' + t[3] + t[3], 16),
        }
      if (t.match(HN)) {
        var n = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2))
        return {
          red: parseInt('' + t[1] + t[1], 16),
          green: parseInt('' + t[2] + t[2], 16),
          blue: parseInt('' + t[3] + t[3], 16),
          alpha: n,
        }
      }
      var o = dl.exec(t)
      if (o)
        return {
          red: parseInt('' + o[1], 10),
          green: parseInt('' + o[2], 10),
          blue: parseInt('' + o[3], 10),
        }
      var a = JN.exec(t.substring(0, 50))
      if (a)
        return {
          red: parseInt('' + a[1], 10),
          green: parseInt('' + a[2], 10),
          blue: parseInt('' + a[3], 10),
          alpha:
            parseFloat('' + a[4]) > 1
              ? parseFloat('' + a[4]) / 100
              : parseFloat('' + a[4]),
        }
      var i = GN.exec(t)
      if (i) {
        var s = parseInt('' + i[1], 10),
          l = parseInt('' + i[2], 10) / 100,
          u = parseInt('' + i[3], 10) / 100,
          c = 'rgb(' + Vn(s, l, u) + ')',
          d = dl.exec(c)
        if (!d) throw new vt(4, t, c)
        return {
          red: parseInt('' + d[1], 10),
          green: parseInt('' + d[2], 10),
          blue: parseInt('' + d[3], 10),
        }
      }
      var y = WN.exec(t.substring(0, 50))
      if (y) {
        var f = parseInt('' + y[1], 10),
          h = parseInt('' + y[2], 10) / 100,
          g = parseInt('' + y[3], 10) / 100,
          C = 'rgb(' + Vn(f, h, g) + ')',
          b = dl.exec(C)
        if (!b) throw new vt(4, t, C)
        return {
          red: parseInt('' + b[1], 10),
          green: parseInt('' + b[2], 10),
          blue: parseInt('' + b[3], 10),
          alpha:
            parseFloat('' + y[4]) > 1
              ? parseFloat('' + y[4]) / 100
              : parseFloat('' + y[4]),
        }
      }
      throw new vt(5)
    }
    function KN(e) {
      var t = e.red / 255,
        r = e.green / 255,
        n = e.blue / 255,
        o = Math.max(t, r, n),
        a = Math.min(t, r, n),
        i = (o + a) / 2
      if (o === a)
        return e.alpha !== void 0
          ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
          : { hue: 0, saturation: 0, lightness: i }
      var s,
        l = o - a,
        u = i > 0.5 ? l / (2 - o - a) : l / (o + a)
      switch (o) {
        case t:
          s = (r - n) / l + (r < n ? 6 : 0)
          break
        case r:
          s = (n - t) / l + 2
          break
        default:
          s = (t - r) / l + 4
          break
      }
      return (
        (s *= 60),
        e.alpha !== void 0
          ? { hue: s, saturation: u, lightness: i, alpha: e.alpha }
          : { hue: s, saturation: u, lightness: i }
      )
    }
    function jv(e) {
      return KN(wa(e))
    }
    var YN = function (e) {
        return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6]
          ? '#' + e[1] + e[3] + e[5]
          : e
      },
      Tl = YN
    function ur(e) {
      var t = e.toString(16)
      return t.length === 1 ? '0' + t : t
    }
    function fl(e) {
      return ur(Math.round(e * 255))
    }
    function XN(e, t, r) {
      return Tl('#' + fl(e) + fl(t) + fl(r))
    }
    function xa(e, t, r) {
      return Vn(e, t, r, XN)
    }
    function QN(e, t, r) {
      if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
        return xa(e, t, r)
      if (typeof e == 'object' && t === void 0 && r === void 0)
        return xa(e.hue, e.saturation, e.lightness)
      throw new vt(1)
    }
    function ZN(e, t, r, n) {
      if (
        typeof e == 'number' &&
        typeof t == 'number' &&
        typeof r == 'number' &&
        typeof n == 'number'
      )
        return n >= 1 ? xa(e, t, r) : 'rgba(' + Vn(e, t, r) + ',' + n + ')'
      if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
        return e.alpha >= 1
          ? xa(e.hue, e.saturation, e.lightness)
          : 'rgba(' + Vn(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')'
      throw new vt(2)
    }
    function Cl(e, t, r) {
      if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
        return Tl('#' + ur(e) + ur(t) + ur(r))
      if (typeof e == 'object' && t === void 0 && r === void 0)
        return Tl('#' + ur(e.red) + ur(e.green) + ur(e.blue))
      throw new vt(6)
    }
    function Pt(e, t, r, n) {
      if (typeof e == 'string' && typeof t == 'number') {
        var o = wa(e)
        return 'rgba(' + o.red + ',' + o.green + ',' + o.blue + ',' + t + ')'
      } else {
        if (
          typeof e == 'number' &&
          typeof t == 'number' &&
          typeof r == 'number' &&
          typeof n == 'number'
        )
          return n >= 1
            ? Cl(e, t, r)
            : 'rgba(' + e + ',' + t + ',' + r + ',' + n + ')'
        if (
          typeof e == 'object' &&
          t === void 0 &&
          r === void 0 &&
          n === void 0
        )
          return e.alpha >= 1
            ? Cl(e.red, e.green, e.blue)
            : 'rgba(' +
                e.red +
                ',' +
                e.green +
                ',' +
                e.blue +
                ',' +
                e.alpha +
                ')'
      }
      throw new vt(7)
    }
    var e3 = function (e) {
        return (
          typeof e.red == 'number' &&
          typeof e.green == 'number' &&
          typeof e.blue == 'number' &&
          (typeof e.alpha != 'number' || typeof e.alpha > 'u')
        )
      },
      t3 = function (e) {
        return (
          typeof e.red == 'number' &&
          typeof e.green == 'number' &&
          typeof e.blue == 'number' &&
          typeof e.alpha == 'number'
        )
      },
      r3 = function (e) {
        return (
          typeof e.hue == 'number' &&
          typeof e.saturation == 'number' &&
          typeof e.lightness == 'number' &&
          (typeof e.alpha != 'number' || typeof e.alpha > 'u')
        )
      },
      n3 = function (e) {
        return (
          typeof e.hue == 'number' &&
          typeof e.saturation == 'number' &&
          typeof e.lightness == 'number' &&
          typeof e.alpha == 'number'
        )
      }
    function Nv(e) {
      if (typeof e != 'object') throw new vt(8)
      if (t3(e)) return Pt(e)
      if (e3(e)) return Cl(e)
      if (n3(e)) return ZN(e)
      if (r3(e)) return QN(e)
      throw new vt(8)
    }
    function Bv(e, t, r) {
      return function () {
        var n = r.concat(Array.prototype.slice.call(arguments))
        return n.length >= t ? e.apply(this, n) : Bv(e, t, n)
      }
    }
    function Sa(e) {
      return Bv(e, e.length, [])
    }
    function Aa(e, t, r) {
      return Math.max(e, Math.min(t, r))
    }
    function o3(e, t) {
      if (t === 'transparent') return t
      var r = jv(t)
      return Nv(Jr({}, r, { lightness: Aa(0, 1, r.lightness - parseFloat(e)) }))
    }
    var a3 = Sa(o3),
      bt = a3
    function i3(e, t) {
      if (t === 'transparent') return t
      var r = jv(t)
      return Nv(Jr({}, r, { lightness: Aa(0, 1, r.lightness + parseFloat(e)) }))
    }
    var s3 = Sa(i3),
      cr = s3
    function l3(e, t) {
      if (t === 'transparent') return t
      var r = wa(t),
        n = typeof r.alpha == 'number' ? r.alpha : 1,
        o = Jr({}, r, {
          alpha: Aa(0, 1, (n * 100 + parseFloat(e) * 100) / 100),
        })
      return Pt(o)
    }
    var u3 = Sa(l3),
      ma = u3
    function c3(e, t) {
      if (t === 'transparent') return t
      var r = wa(t),
        n = typeof r.alpha == 'number' ? r.alpha : 1,
        o = Jr({}, r, {
          alpha: Aa(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
        })
      return Pt(o)
    }
    var p3 = Sa(c3),
      xe = p3,
      d3 = Object.create,
      Lv = Object.defineProperty,
      f3 = Object.getOwnPropertyDescriptor,
      y3 = Object.getOwnPropertyNames,
      h3 = Object.getPrototypeOf,
      m3 = Object.prototype.hasOwnProperty,
      g3 = (e, t) => () => (
        t || e((t = { exports: {} }).exports, t), t.exports
      ),
      b3 = (e, t, r, n) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let o of y3(t))
            !m3.call(e, o) &&
              o !== r &&
              Lv(e, o, {
                get: () => t[o],
                enumerable: !(n = f3(t, o)) || n.enumerable,
              })
        return e
      },
      v3 = (e, t, r) => (
        (r = e != null ? d3(h3(e)) : {}),
        b3(
          t || !e || !e.__esModule
            ? Lv(r, 'default', { value: e, enumerable: !0 })
            : r,
          e,
        )
      ),
      E3 = g3((e) => {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.isEqual = (function () {
            var t = Object.prototype.toString,
              r = Object.getPrototypeOf,
              n = Object.getOwnPropertySymbols
                ? function (o) {
                    return Object.keys(o).concat(
                      Object.getOwnPropertySymbols(o),
                    )
                  }
                : Object.keys
            return function (o, a) {
              return (function i(s, l, u) {
                var c,
                  d,
                  y,
                  f = t.call(s),
                  h = t.call(l)
                if (s === l) return !0
                if (s == null || l == null) return !1
                if (u.indexOf(s) > -1 && u.indexOf(l) > -1) return !0
                if (
                  (u.push(s, l),
                  f != h ||
                    ((c = n(s)),
                    (d = n(l)),
                    c.length != d.length ||
                      c.some(function (g) {
                        return !i(s[g], l[g], u)
                      })))
                )
                  return !1
                switch (f.slice(8, -1)) {
                  case 'Symbol':
                    return s.valueOf() == l.valueOf()
                  case 'Date':
                  case 'Number':
                    return +s == +l || (+s != +s && +l != +l)
                  case 'RegExp':
                  case 'Function':
                  case 'String':
                  case 'Boolean':
                    return '' + s == '' + l
                  case 'Set':
                  case 'Map':
                    ;(c = s.entries()), (d = l.entries())
                    do
                      if (!i((y = c.next()).value, d.next().value, u)) return !1
                    while (!y.done)
                    return !0
                  case 'ArrayBuffer':
                    ;(s = new Uint8Array(s)), (l = new Uint8Array(l))
                  case 'DataView':
                    ;(s = new Uint8Array(s.buffer)),
                      (l = new Uint8Array(l.buffer))
                  case 'Float32Array':
                  case 'Float64Array':
                  case 'Int8Array':
                  case 'Int16Array':
                  case 'Int32Array':
                  case 'Uint8Array':
                  case 'Uint16Array':
                  case 'Uint32Array':
                  case 'Uint8ClampedArray':
                  case 'Arguments':
                  case 'Array':
                    if (s.length != l.length) return !1
                    for (y = 0; y < s.length; y++)
                      if (
                        (y in s || y in l) &&
                        (y in s != y in l || !i(s[y], l[y], u))
                      )
                        return !1
                    return !0
                  case 'Object':
                    return i(r(s), r(l), u)
                  default:
                    return !1
                }
              })(o, a, [])
            }
          })())
      }),
      tv = v3(E3()),
      qv = (e) => e.map((t) => typeof t < 'u').filter(Boolean).length,
      x3 = (e, t) => {
        let { exists: r, eq: n, neq: o, truthy: a } = e
        if (qv([r, n, o, a]) > 1)
          throw new Error(
            `Invalid conditional test ${JSON.stringify({ exists: r, eq: n, neq: o })}`,
          )
        if (typeof n < 'u') return (0, tv.isEqual)(t, n)
        if (typeof o < 'u') return !(0, tv.isEqual)(t, o)
        if (typeof r < 'u') {
          let i = typeof t < 'u'
          return r ? i : !i
        }
        return typeof a > 'u' || a ? !!t : !t
      },
      w3 = (e, t, r) => {
        if (!e.if) return !0
        let { arg: n, global: o } = e.if
        if (qv([n, o]) !== 1)
          throw new Error(
            `Invalid conditional value ${JSON.stringify({ arg: n, global: o })}`,
          )
        let a = n ? t[n] : r[o]
        return x3(e.if, a)
      }
    function pr() {
      return (
        (pr = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t]
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
              }
              return e
            }),
        pr.apply(this, arguments)
      )
    }
    var S3 = ['children', 'options'],
      rv,
      nv
    ;(function (e) {
      ;(e.blockQuote = '0'),
        (e.breakLine = '1'),
        (e.breakThematic = '2'),
        (e.codeBlock = '3'),
        (e.codeFenced = '4'),
        (e.codeInline = '5'),
        (e.footnote = '6'),
        (e.footnoteReference = '7'),
        (e.gfmTask = '8'),
        (e.heading = '9'),
        (e.headingSetext = '10'),
        (e.htmlBlock = '11'),
        (e.htmlComment = '12'),
        (e.htmlSelfClosing = '13'),
        (e.image = '14'),
        (e.link = '15'),
        (e.linkAngleBraceStyleDetector = '16'),
        (e.linkBareUrlDetector = '17'),
        (e.linkMailtoDetector = '18'),
        (e.newlineCoalescer = '19'),
        (e.orderedList = '20'),
        (e.paragraph = '21'),
        (e.ref = '22'),
        (e.refImage = '23'),
        (e.refLink = '24'),
        (e.table = '25'),
        (e.tableSeparator = '26'),
        (e.text = '27'),
        (e.textBolded = '28'),
        (e.textEmphasized = '29'),
        (e.textEscaped = '30'),
        (e.textMarked = '31'),
        (e.textStrikethroughed = '32'),
        (e.unorderedList = '33')
    })(rv || (rv = {})),
      (function (e) {
        ;(e[(e.MAX = 0)] = 'MAX'),
          (e[(e.HIGH = 1)] = 'HIGH'),
          (e[(e.MED = 2)] = 'MED'),
          (e[(e.LOW = 3)] = 'LOW'),
          (e[(e.MIN = 4)] = 'MIN')
      })(nv || (nv = {}))
    var ov = [
        'allowFullScreen',
        'allowTransparency',
        'autoComplete',
        'autoFocus',
        'autoPlay',
        'cellPadding',
        'cellSpacing',
        'charSet',
        'className',
        'classId',
        'colSpan',
        'contentEditable',
        'contextMenu',
        'crossOrigin',
        'encType',
        'formAction',
        'formEncType',
        'formMethod',
        'formNoValidate',
        'formTarget',
        'frameBorder',
        'hrefLang',
        'inputMode',
        'keyParams',
        'keyType',
        'marginHeight',
        'marginWidth',
        'maxLength',
        'mediaGroup',
        'minLength',
        'noValidate',
        'radioGroup',
        'readOnly',
        'rowSpan',
        'spellCheck',
        'srcDoc',
        'srcLang',
        'srcSet',
        'tabIndex',
        'useMap',
      ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), { for: 'htmlFor' }),
      av = {
        amp: '&',
        apos: "'",
        gt: '>',
        lt: '<',
        nbsp: '\xA0',
        quot: '\u201C',
      },
      A3 = ['style', 'script'],
      T3 =
        /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
      C3 = /mailto:/i,
      _3 = /\n{2,}$/,
      Mv = /^(\s*>[\s\S]*?)(?=\n{2,})/,
      O3 = /^ *> ?/gm,
      I3 = /^ {2,}\n/,
      k3 = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
      Uv = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
      $v = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
      P3 = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
      R3 = /^(?:\n *)*\n/,
      D3 = /\r\n?/g,
      F3 = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,
      j3 = /^\[\^([^\]]+)]/,
      N3 = /\f/g,
      B3 = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,
      L3 = /^\s*?\[(x|\s)\]/,
      zv = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
      Vv = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
      Hv = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
      _l =
        /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,
      q3 = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
      Jv = /^<!--[\s\S]*?(?:-->)/,
      M3 = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
      Ol =
        /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
      U3 = /^\{.*\}$/,
      $3 = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
      z3 = /^<([^ >]+@[^ >]+)>/,
      V3 = /^<([^ >]+:\/[^ >]+)>/,
      H3 = /-([a-z])?/gi,
      Gv = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
      J3 = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
      G3 = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
      W3 = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
      K3 = /(\[|\])/g,
      Y3 = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
      X3 = /\t/g,
      Q3 = /^ *\| */,
      Z3 = /(^ *\||\| *$)/g,
      eB = / *$/,
      tB = /^ *:-+: *$/,
      rB = /^ *:-+ *$/,
      nB = /^ *-+: *$/,
      Ta =
        '((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)',
      oB = new RegExp(`^([*_])\\1${Ta}\\1\\1(?!\\1)`),
      aB = new RegExp(`^([*_])${Ta}\\1(?!\\1|\\w)`),
      iB = new RegExp(`^==${Ta}==`),
      sB = new RegExp(`^~~${Ta}~~`),
      lB = /^\\([^0-9A-Za-z\s])/,
      uB =
        /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
      cB = /^\n+/,
      pB = /^([ \t]*)/,
      dB = /\\([^\\])/g,
      iv = / *\n+$/,
      fB = /(?:^|\n)( *)$/,
      Rl = '(?:\\d+\\.)',
      Dl = '(?:[*+-])'
    function Wv(e) {
      return '( *)(' + (e === 1 ? Rl : Dl) + ') +'
    }
    var Kv = Wv(1),
      Yv = Wv(2)
    function Xv(e) {
      return new RegExp('^' + (e === 1 ? Kv : Yv))
    }
    var yB = Xv(1),
      hB = Xv(2)
    function Qv(e) {
      return new RegExp(
        '^' +
          (e === 1 ? Kv : Yv) +
          '[^\\n]*(?:\\n(?!\\1' +
          (e === 1 ? Rl : Dl) +
          ' )[^\\n]*)*(\\n|$)',
        'gm',
      )
    }
    var Zv = Qv(1),
      e2 = Qv(2)
    function t2(e) {
      let t = e === 1 ? Rl : Dl
      return new RegExp(
        '^( *)(' +
          t +
          ') [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1' +
          t +
          ' (?!' +
          t +
          ' ))\\n*|\\s*\\n*$)',
      )
    }
    var r2 = t2(1),
      n2 = t2(2)
    function sv(e, t) {
      let r = t === 1,
        n = r ? r2 : n2,
        o = r ? Zv : e2,
        a = r ? yB : hB
      return {
        match(i, s, l) {
          let u = fB.exec(l)
          return u && (s.list || (!s.inline && !s.simple))
            ? n.exec((i = u[1] + i))
            : null
        },
        order: 1,
        parse(i, s, l) {
          let u = r ? +i[2] : void 0,
            c = i[0]
              .replace(
                _3,
                `
`,
              )
              .match(o),
            d = !1
          return {
            items: c.map(function (y, f) {
              let h = a.exec(y)[0].length,
                g = new RegExp('^ {1,' + h + '}', 'gm'),
                C = y.replace(g, '').replace(a, ''),
                b = f === c.length - 1,
                E =
                  C.indexOf(`

`) !== -1 ||
                  (b && d)
              d = E
              let _ = l.inline,
                T = l.list,
                O
              ;(l.list = !0),
                E
                  ? ((l.inline = !1),
                    (O = C.replace(
                      iv,
                      `

`,
                    )))
                  : ((l.inline = !0), (O = C.replace(iv, '')))
              let I = s(O, l)
              return (l.inline = _), (l.list = T), I
            }),
            ordered: r,
            start: u,
          }
        },
        render: (i, s, l) =>
          e(
            i.ordered ? 'ol' : 'ul',
            { key: l.key, start: i.type === '20' ? i.start : void 0 },
            i.items.map(function (u, c) {
              return e('li', { key: c }, s(u, l))
            }),
          ),
      }
    }
    var mB = new RegExp(
        `^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`,
      ),
      gB = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
      o2 = [Mv, Uv, $v, zv, Hv, Vv, Jv, Gv, Zv, r2, e2, n2],
      bB = [...o2, /^[^\n]+(?:  \n|\n{2,})/, _l, Ol]
    function vB(e) {
      return e
        .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, 'a')
        .replace(/[çÇ]/g, 'c')
        .replace(/[ðÐ]/g, 'd')
        .replace(/[ÈÉÊËéèêë]/g, 'e')
        .replace(/[ÏïÎîÍíÌì]/g, 'i')
        .replace(/[Ññ]/g, 'n')
        .replace(/[øØœŒÕõÔôÓóÒò]/g, 'o')
        .replace(/[ÜüÛûÚúÙù]/g, 'u')
        .replace(/[ŸÿÝý]/g, 'y')
        .replace(/[^a-z0-9- ]/gi, '')
        .replace(/ /gi, '-')
        .toLowerCase()
    }
    function EB(e) {
      return nB.test(e)
        ? 'right'
        : tB.test(e)
          ? 'center'
          : rB.test(e)
            ? 'left'
            : null
    }
    function lv(e, t, r) {
      let n = r.inTable
      r.inTable = !0
      let o = t(e.trim(), r)
      r.inTable = n
      let a = [[]]
      return (
        o.forEach(function (i, s) {
          i.type === '26'
            ? s !== 0 && s !== o.length - 1 && a.push([])
            : (i.type !== '27' ||
                (o[s + 1] != null && o[s + 1].type !== '26') ||
                (i.text = i.text.replace(eB, '')),
              a[a.length - 1].push(i))
        }),
        a
      )
    }
    function xB(e, t, r) {
      r.inline = !0
      let n = lv(e[1], t, r),
        o = e[2].replace(Z3, '').split('|').map(EB),
        a = (function (i, s, l) {
          return i
            .trim()
            .split(
              `
`,
            )
            .map(function (u) {
              return lv(u, s, l)
            })
        })(e[3], t, r)
      return (r.inline = !1), { align: o, cells: a, header: n, type: '25' }
    }
    function uv(e, t) {
      return e.align[t] == null ? {} : { textAlign: e.align[t] }
    }
    function Jt(e) {
      return function (t, r) {
        return r.inline ? e.exec(t) : null
      }
    }
    function Gt(e) {
      return function (t, r) {
        return r.inline || r.simple ? e.exec(t) : null
      }
    }
    function kt(e) {
      return function (t, r) {
        return r.inline || r.simple ? null : e.exec(t)
      }
    }
    function Un(e) {
      return function (t) {
        return e.exec(t)
      }
    }
    function wB(e, t, r) {
      if (
        t.inline ||
        t.simple ||
        (r &&
          !r.endsWith(`
`))
      )
        return null
      let n = ''
      e.split(
        `
`,
      ).every(
        (a) =>
          !o2.some((i) => i.test(a)) &&
          ((n +=
            a +
            `
`),
          a.trim()),
      )
      let o = n.trimEnd()
      return o == '' ? null : [n, o]
    }
    function Vr(e) {
      try {
        if (
          decodeURIComponent(e)
            .replace(/[^A-Za-z0-9/:]/g, '')
            .match(/^\s*(javascript|vbscript|data(?!:image)):/i)
        )
          return
      } catch {
        return null
      }
      return e
    }
    function cv(e) {
      return e.replace(dB, '$1')
    }
    function Ea(e, t, r) {
      let n = r.inline || !1,
        o = r.simple || !1
      ;(r.inline = !0), (r.simple = !0)
      let a = e(t, r)
      return (r.inline = n), (r.simple = o), a
    }
    function SB(e, t, r) {
      let n = r.inline || !1,
        o = r.simple || !1
      ;(r.inline = !1), (r.simple = !0)
      let a = e(t, r)
      return (r.inline = n), (r.simple = o), a
    }
    function AB(e, t, r) {
      return (r.inline = !1), e(t, r)
    }
    var yl = (e, t, r) => ({ children: Ea(t, e[1], r) })
    function hl() {
      return {}
    }
    function ml() {
      return null
    }
    function TB(...e) {
      return e.filter(Boolean).join(' ')
    }
    function gl(e, t, r) {
      let n = e,
        o = t.split('.')
      for (; o.length && ((n = n[o[0]]), n !== void 0); ) o.shift()
      return n || r
    }
    function CB(e = '', t = {}) {
      ;(t.overrides = t.overrides || {}),
        (t.slugify = t.slugify || vB),
        (t.namedCodesToUnicode = t.namedCodesToUnicode
          ? pr({}, av, t.namedCodesToUnicode)
          : av)
      let r = t.createElement || Ra
      function n(f, h, ...g) {
        let C = gl(t.overrides, `${f}.props`, {})
        return r(
          (function (b, E) {
            let _ = gl(E, b)
            return _
              ? typeof _ == 'function' ||
                (typeof _ == 'object' && 'render' in _)
                ? _
                : gl(E, `${b}.component`, b)
              : b
          })(f, t.overrides),
          pr({}, h, C, { className: TB(h?.className, C.className) || void 0 }),
          ...g,
        )
      }
      function o(f) {
        f = f.replace(B3, '')
        let h = !1
        t.forceInline ? (h = !0) : t.forceBlock || (h = Y3.test(f) === !1)
        let g = c(
          u(
            h
              ? f
              : `${f.trimEnd().replace(cB, '')}

`,
            { inline: h },
          ),
        )
        for (; typeof g[g.length - 1] == 'string' && !g[g.length - 1].trim(); )
          g.pop()
        if (t.wrapper === null) return g
        let C = t.wrapper || (h ? 'span' : 'div'),
          b
        if (g.length > 1 || t.forceWrapper) b = g
        else {
          if (g.length === 1)
            return (
              (b = g[0]),
              typeof b == 'string' ? n('span', { key: 'outer' }, b) : b
            )
          b = null
        }
        return Ra(C, { key: 'outer' }, b)
      }
      function a(f) {
        let h = f.match(T3)
        return h
          ? h.reduce(function (g, C, b) {
              let E = C.indexOf('=')
              if (E !== -1) {
                let _ = (function (D) {
                    return (
                      D.indexOf('-') !== -1 &&
                        D.match(M3) === null &&
                        (D = D.replace(H3, function (R, M) {
                          return M.toUpperCase()
                        })),
                      D
                    )
                  })(C.slice(0, E)).trim(),
                  T = (function (D) {
                    let R = D[0]
                    return (R === '"' || R === "'") &&
                      D.length >= 2 &&
                      D[D.length - 1] === R
                      ? D.slice(1, -1)
                      : D
                  })(C.slice(E + 1).trim()),
                  O = ov[_] || _,
                  I = (g[O] = (function (D, R) {
                    return D === 'style'
                      ? R.split(/;\s?/).reduce(function (M, z) {
                          let Y = z.slice(0, z.indexOf(':'))
                          return (
                            (M[
                              Y.trim().replace(/(-[a-z])/g, (Z) =>
                                Z[1].toUpperCase(),
                              )
                            ] = z.slice(Y.length + 1).trim()),
                            M
                          )
                        }, {})
                      : D === 'href' || D === 'src'
                        ? Vr(R)
                        : (R.match(U3) && (R = R.slice(1, R.length - 1)),
                          R === 'true' || (R !== 'false' && R))
                  })(_, T))
                typeof I == 'string' &&
                  (_l.test(I) || Ol.test(I)) &&
                  (g[O] = Ae(o(I.trim()), { key: b }))
              } else C !== 'style' && (g[ov[C] || C] = !0)
              return g
            }, {})
          : null
      }
      let i = [],
        s = {},
        l = {
          0: {
            match: kt(Mv),
            order: 1,
            parse: (f, h, g) => ({ children: h(f[0].replace(O3, ''), g) }),
            render: (f, h, g) =>
              n('blockquote', { key: g.key }, h(f.children, g)),
          },
          1: {
            match: Un(I3),
            order: 1,
            parse: hl,
            render: (f, h, g) => n('br', { key: g.key }),
          },
          2: {
            match: kt(k3),
            order: 1,
            parse: hl,
            render: (f, h, g) => n('hr', { key: g.key }),
          },
          3: {
            match: kt($v),
            order: 0,
            parse: (f) => ({
              lang: void 0,
              text: f[0].replace(/^ {4}/gm, '').replace(/\n+$/, ''),
            }),
            render: (f, h, g) =>
              n(
                'pre',
                { key: g.key },
                n(
                  'code',
                  pr({}, f.attrs, {
                    className: f.lang ? `lang-${f.lang}` : '',
                  }),
                  f.text,
                ),
              ),
          },
          4: {
            match: kt(Uv),
            order: 0,
            parse: (f) => ({
              attrs: a(f[3] || ''),
              lang: f[2] || void 0,
              text: f[4],
              type: '3',
            }),
          },
          5: {
            match: Gt(P3),
            order: 3,
            parse: (f) => ({ text: f[2] }),
            render: (f, h, g) => n('code', { key: g.key }, f.text),
          },
          6: {
            match: kt(F3),
            order: 0,
            parse: (f) => (i.push({ footnote: f[2], identifier: f[1] }), {}),
            render: ml,
          },
          7: {
            match: Jt(j3),
            order: 1,
            parse: (f) => ({ target: `#${t.slugify(f[1])}`, text: f[1] }),
            render: (f, h, g) =>
              n(
                'a',
                { key: g.key, href: Vr(f.target) },
                n('sup', { key: g.key }, f.text),
              ),
          },
          8: {
            match: Jt(L3),
            order: 1,
            parse: (f) => ({ completed: f[1].toLowerCase() === 'x' }),
            render: (f, h, g) =>
              n('input', {
                checked: f.completed,
                key: g.key,
                readOnly: !0,
                type: 'checkbox',
              }),
          },
          9: {
            match: kt(t.enforceAtxHeadings ? Vv : zv),
            order: 1,
            parse: (f, h, g) => ({
              children: Ea(h, f[2], g),
              id: t.slugify(f[2]),
              level: f[1].length,
            }),
            render: (f, h, g) =>
              n(`h${f.level}`, { id: f.id, key: g.key }, h(f.children, g)),
          },
          10: {
            match: kt(Hv),
            order: 0,
            parse: (f, h, g) => ({
              children: Ea(h, f[1], g),
              level: f[2] === '=' ? 1 : 2,
              type: '9',
            }),
          },
          11: {
            match: Un(_l),
            order: 1,
            parse(f, h, g) {
              let [, C] = f[3].match(pB),
                b = new RegExp(`^${C}`, 'gm'),
                E = f[3].replace(b, ''),
                _ = ((T = E), bB.some((R) => R.test(T)) ? AB : Ea)
              var T
              let O = f[1].toLowerCase(),
                I = A3.indexOf(O) !== -1,
                D = {
                  attrs: a(f[2]),
                  noInnerParse: I,
                  tag: (I ? O : f[1]).trim(),
                }
              return (
                (g.inAnchor = g.inAnchor || O === 'a'),
                I ? (D.text = f[3]) : (D.children = _(h, E, g)),
                (g.inAnchor = !1),
                D
              )
            },
            render: (f, h, g) =>
              n(f.tag, pr({ key: g.key }, f.attrs), f.text || h(f.children, g)),
          },
          13: {
            match: Un(Ol),
            order: 1,
            parse: (f) => ({ attrs: a(f[2] || ''), tag: f[1].trim() }),
            render: (f, h, g) => n(f.tag, pr({}, f.attrs, { key: g.key })),
          },
          12: { match: Un(Jv), order: 1, parse: () => ({}), render: ml },
          14: {
            match: Gt(gB),
            order: 1,
            parse: (f) => ({ alt: f[1], target: cv(f[2]), title: f[3] }),
            render: (f, h, g) =>
              n('img', {
                key: g.key,
                alt: f.alt || void 0,
                title: f.title || void 0,
                src: Vr(f.target),
              }),
          },
          15: {
            match: Jt(mB),
            order: 3,
            parse: (f, h, g) => ({
              children: SB(h, f[1], g),
              target: cv(f[2]),
              title: f[3],
            }),
            render: (f, h, g) =>
              n(
                'a',
                { key: g.key, href: Vr(f.target), title: f.title },
                h(f.children, g),
              ),
          },
          16: {
            match: Jt(V3),
            order: 0,
            parse: (f) => ({
              children: [{ text: f[1], type: '27' }],
              target: f[1],
              type: '15',
            }),
          },
          17: {
            match: (f, h) => (h.inAnchor ? null : Jt($3)(f, h)),
            order: 0,
            parse: (f) => ({
              children: [{ text: f[1], type: '27' }],
              target: f[1],
              title: void 0,
              type: '15',
            }),
          },
          18: {
            match: Jt(z3),
            order: 0,
            parse(f) {
              let h = f[1],
                g = f[1]
              return (
                C3.test(g) || (g = 'mailto:' + g),
                {
                  children: [{ text: h.replace('mailto:', ''), type: '27' }],
                  target: g,
                  type: '15',
                }
              )
            },
          },
          20: sv(n, 1),
          33: sv(n, 2),
          19: {
            match: kt(R3),
            order: 3,
            parse: hl,
            render: () => `
`,
          },
          21: {
            match: wB,
            order: 3,
            parse: yl,
            render: (f, h, g) => n('p', { key: g.key }, h(f.children, g)),
          },
          22: {
            match: Jt(J3),
            order: 0,
            parse: (f) => ((s[f[1]] = { target: f[2], title: f[4] }), {}),
            render: ml,
          },
          23: {
            match: Gt(G3),
            order: 0,
            parse: (f) => ({ alt: f[1] || void 0, ref: f[2] }),
            render: (f, h, g) =>
              s[f.ref]
                ? n('img', {
                    key: g.key,
                    alt: f.alt,
                    src: Vr(s[f.ref].target),
                    title: s[f.ref].title,
                  })
                : null,
          },
          24: {
            match: Jt(W3),
            order: 0,
            parse: (f, h, g) => ({
              children: h(f[1], g),
              fallbackChildren: h(f[0].replace(K3, '\\$1'), g),
              ref: f[2],
            }),
            render: (f, h, g) =>
              s[f.ref]
                ? n(
                    'a',
                    {
                      key: g.key,
                      href: Vr(s[f.ref].target),
                      title: s[f.ref].title,
                    },
                    h(f.children, g),
                  )
                : n('span', { key: g.key }, h(f.fallbackChildren, g)),
          },
          25: {
            match: kt(Gv),
            order: 1,
            parse: xB,
            render: (f, h, g) =>
              n(
                'table',
                { key: g.key },
                n(
                  'thead',
                  null,
                  n(
                    'tr',
                    null,
                    f.header.map(function (C, b) {
                      return n('th', { key: b, style: uv(f, b) }, h(C, g))
                    }),
                  ),
                ),
                n(
                  'tbody',
                  null,
                  f.cells.map(function (C, b) {
                    return n(
                      'tr',
                      { key: b },
                      C.map(function (E, _) {
                        return n('td', { key: _, style: uv(f, _) }, h(E, g))
                      }),
                    )
                  }),
                ),
              ),
          },
          26: {
            match: function (f, h) {
              return h.inTable ? ((h.inline = !0), Q3.exec(f)) : null
            },
            order: 1,
            parse: function () {
              return { type: '26' }
            },
            render: () => ' | ',
          },
          27: {
            match: Un(uB),
            order: 4,
            parse: (f) => ({
              text: f[0].replace(q3, (h, g) =>
                t.namedCodesToUnicode[g] ? t.namedCodesToUnicode[g] : h,
              ),
            }),
            render: (f) => f.text,
          },
          28: {
            match: Gt(oB),
            order: 2,
            parse: (f, h, g) => ({ children: h(f[2], g) }),
            render: (f, h, g) => n('strong', { key: g.key }, h(f.children, g)),
          },
          29: {
            match: Gt(aB),
            order: 3,
            parse: (f, h, g) => ({ children: h(f[2], g) }),
            render: (f, h, g) => n('em', { key: g.key }, h(f.children, g)),
          },
          30: {
            match: Gt(lB),
            order: 1,
            parse: (f) => ({ text: f[1], type: '27' }),
          },
          31: {
            match: Gt(iB),
            order: 3,
            parse: yl,
            render: (f, h, g) => n('mark', { key: g.key }, h(f.children, g)),
          },
          32: {
            match: Gt(sB),
            order: 3,
            parse: yl,
            render: (f, h, g) => n('del', { key: g.key }, h(f.children, g)),
          },
        }
      t.disableParsingRawHTML === !0 && (delete l[11], delete l[13])
      let u = (function (f) {
          let h = Object.keys(f)
          function g(C, b) {
            let E = [],
              _ = ''
            for (; C; ) {
              let T = 0
              for (; T < h.length; ) {
                let O = h[T],
                  I = f[O],
                  D = I.match(C, b, _)
                if (D) {
                  let R = D[0]
                  C = C.substring(R.length)
                  let M = I.parse(D, g, b)
                  M.type == null && (M.type = O), E.push(M), (_ = R)
                  break
                }
                T++
              }
            }
            return E
          }
          return (
            h.sort(function (C, b) {
              let E = f[C].order,
                _ = f[b].order
              return E !== _ ? E - _ : C < b ? -1 : 1
            }),
            function (C, b) {
              return g(
                (function (E) {
                  return E.replace(
                    D3,
                    `
`,
                  )
                    .replace(N3, '')
                    .replace(X3, '    ')
                })(C),
                b,
              )
            }
          )
        })(l),
        c =
          ((d = (function (f, h) {
            return function (g, C, b) {
              let E = f[g.type].render
              return h ? h(() => E(g, C, b), g, C, b) : E(g, C, b)
            }
          })(l, t.renderRule)),
          function f(h, g = {}) {
            if (Array.isArray(h)) {
              let C = g.key,
                b = [],
                E = !1
              for (let _ = 0; _ < h.length; _++) {
                g.key = _
                let T = f(h[_], g),
                  O = typeof T == 'string'
                O && E ? (b[b.length - 1] += T) : T !== null && b.push(T),
                  (E = O)
              }
              return (g.key = C), b
            }
            return d(h, f, g)
          })
      var d
      let y = o(e)
      return i.length
        ? n(
            'div',
            null,
            y,
            n(
              'footer',
              { key: 'footer' },
              i.map(function (f) {
                return n(
                  'div',
                  { id: t.slugify(f.identifier), key: f.identifier },
                  f.identifier,
                  c(u(f.footnote, { inline: !0 })),
                )
              }),
            ),
          )
        : y
    }
    var _B = (e) => {
        let { children: t = '', options: r } = e,
          n = (function (o, a) {
            if (o == null) return {}
            var i,
              s,
              l = {},
              u = Object.keys(o)
            for (s = 0; s < u.length; s++)
              a.indexOf((i = u[s])) >= 0 || (l[i] = o[i])
            return l
          })(e, S3)
        return Ae(CB(t, r), n)
      },
      OB = sn(Dv(), 1),
      IB = Object.create,
      a2 = Object.defineProperty,
      kB = Object.getOwnPropertyDescriptor,
      i2 = Object.getOwnPropertyNames,
      PB = Object.getPrototypeOf,
      RB = Object.prototype.hasOwnProperty,
      st = (e, t) =>
        function () {
          return (
            t || (0, e[i2(e)[0]])((t = { exports: {} }).exports, t), t.exports
          )
        },
      DB = (e, t, r, n) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let o of i2(t))
            !RB.call(e, o) &&
              o !== r &&
              a2(e, o, {
                get: () => t[o],
                enumerable: !(n = kB(t, o)) || n.enumerable,
              })
        return e
      },
      Fl = (e, t, r) => (
        (r = e != null ? IB(PB(e)) : {}),
        DB(
          t || !e || !e.__esModule
            ? a2(r, 'default', { value: e, enumerable: !0 })
            : r,
          e,
        )
      ),
      FB = sn(Dv(), 1),
      s2 = st({
        'node_modules/has-symbols/shams.js'(e, t) {
          t.exports = function () {
            if (
              typeof Symbol != 'function' ||
              typeof Object.getOwnPropertySymbols != 'function'
            )
              return !1
            if (typeof Symbol.iterator == 'symbol') return !0
            var r = {},
              n = Symbol('test'),
              o = Object(n)
            if (
              typeof n == 'string' ||
              Object.prototype.toString.call(n) !== '[object Symbol]' ||
              Object.prototype.toString.call(o) !== '[object Symbol]'
            )
              return !1
            var a = 42
            r[n] = a
            for (n in r) return !1
            if (
              (typeof Object.keys == 'function' &&
                Object.keys(r).length !== 0) ||
              (typeof Object.getOwnPropertyNames == 'function' &&
                Object.getOwnPropertyNames(r).length !== 0)
            )
              return !1
            var i = Object.getOwnPropertySymbols(r)
            if (
              i.length !== 1 ||
              i[0] !== n ||
              !Object.prototype.propertyIsEnumerable.call(r, n)
            )
              return !1
            if (typeof Object.getOwnPropertyDescriptor == 'function') {
              var s = Object.getOwnPropertyDescriptor(r, n)
              if (s.value !== a || s.enumerable !== !0) return !1
            }
            return !0
          }
        },
      }),
      l2 = st({
        'node_modules/has-symbols/index.js'(e, t) {
          var r = typeof Symbol < 'u' && Symbol,
            n = s2()
          t.exports = function () {
            return typeof r != 'function' ||
              typeof Symbol != 'function' ||
              typeof r('foo') != 'symbol' ||
              typeof Symbol('bar') != 'symbol'
              ? !1
              : n()
          }
        },
      }),
      jB = st({
        'node_modules/function-bind/implementation.js'(e, t) {
          var r = 'Function.prototype.bind called on incompatible ',
            n = Array.prototype.slice,
            o = Object.prototype.toString,
            a = '[object Function]'
          t.exports = function (i) {
            var s = this
            if (typeof s != 'function' || o.call(s) !== a)
              throw new TypeError(r + s)
            for (
              var l = n.call(arguments, 1),
                u,
                c = function () {
                  if (this instanceof u) {
                    var g = s.apply(this, l.concat(n.call(arguments)))
                    return Object(g) === g ? g : this
                  } else return s.apply(i, l.concat(n.call(arguments)))
                },
                d = Math.max(0, s.length - l.length),
                y = [],
                f = 0;
              f < d;
              f++
            )
              y.push('$' + f)
            if (
              ((u = Function(
                'binder',
                'return function (' +
                  y.join(',') +
                  '){ return binder.apply(this,arguments); }',
              )(c)),
              s.prototype)
            ) {
              var h = function () {}
              ;(h.prototype = s.prototype),
                (u.prototype = new h()),
                (h.prototype = null)
            }
            return u
          }
        },
      }),
      jl = st({
        'node_modules/function-bind/index.js'(e, t) {
          var r = jB()
          t.exports = Function.prototype.bind || r
        },
      }),
      NB = st({
        'node_modules/has/src/index.js'(e, t) {
          var r = jl()
          t.exports = r.call(Function.call, Object.prototype.hasOwnProperty)
        },
      }),
      u2 = st({
        'node_modules/get-intrinsic/index.js'(e, t) {
          var r,
            n = SyntaxError,
            o = Function,
            a = TypeError,
            i = function (Z) {
              try {
                return o('"use strict"; return (' + Z + ').constructor;')()
              } catch {}
            },
            s = Object.getOwnPropertyDescriptor
          if (s)
            try {
              s({}, '')
            } catch {
              s = null
            }
          var l = function () {
              throw new a()
            },
            u = s
              ? (function () {
                  try {
                    return arguments.callee, l
                  } catch {
                    try {
                      return s(arguments, 'callee').get
                    } catch {
                      return l
                    }
                  }
                })()
              : l,
            c = l2()(),
            d =
              Object.getPrototypeOf ||
              function (Z) {
                return Z.__proto__
              },
            y = {},
            f = typeof Uint8Array > 'u' ? r : d(Uint8Array),
            h = {
              '%AggregateError%':
                typeof AggregateError > 'u' ? r : AggregateError,
              '%Array%': Array,
              '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? r : ArrayBuffer,
              '%ArrayIteratorPrototype%': c ? d([][Symbol.iterator]()) : r,
              '%AsyncFromSyncIteratorPrototype%': r,
              '%AsyncFunction%': y,
              '%AsyncGenerator%': y,
              '%AsyncGeneratorFunction%': y,
              '%AsyncIteratorPrototype%': y,
              '%Atomics%': typeof Atomics > 'u' ? r : Atomics,
              '%BigInt%': typeof BigInt > 'u' ? r : BigInt,
              '%Boolean%': Boolean,
              '%DataView%': typeof DataView > 'u' ? r : DataView,
              '%Date%': Date,
              '%decodeURI%': decodeURI,
              '%decodeURIComponent%': decodeURIComponent,
              '%encodeURI%': encodeURI,
              '%encodeURIComponent%': encodeURIComponent,
              '%Error%': Error,
              '%eval%': eval,
              '%EvalError%': EvalError,
              '%Float32Array%': typeof Float32Array > 'u' ? r : Float32Array,
              '%Float64Array%': typeof Float64Array > 'u' ? r : Float64Array,
              '%FinalizationRegistry%':
                typeof FinalizationRegistry > 'u' ? r : FinalizationRegistry,
              '%Function%': o,
              '%GeneratorFunction%': y,
              '%Int8Array%': typeof Int8Array > 'u' ? r : Int8Array,
              '%Int16Array%': typeof Int16Array > 'u' ? r : Int16Array,
              '%Int32Array%': typeof Int32Array > 'u' ? r : Int32Array,
              '%isFinite%': isFinite,
              '%isNaN%': isNaN,
              '%IteratorPrototype%': c ? d(d([][Symbol.iterator]())) : r,
              '%JSON%': typeof JSON == 'object' ? JSON : r,
              '%Map%': typeof Map > 'u' ? r : Map,
              '%MapIteratorPrototype%':
                typeof Map > 'u' || !c ? r : d(new Map()[Symbol.iterator]()),
              '%Math%': Math,
              '%Number%': Number,
              '%Object%': Object,
              '%parseFloat%': parseFloat,
              '%parseInt%': parseInt,
              '%Promise%': typeof Promise > 'u' ? r : Promise,
              '%Proxy%': typeof Proxy > 'u' ? r : Proxy,
              '%RangeError%': RangeError,
              '%ReferenceError%': ReferenceError,
              '%Reflect%': typeof Reflect > 'u' ? r : Reflect,
              '%RegExp%': RegExp,
              '%Set%': typeof Set > 'u' ? r : Set,
              '%SetIteratorPrototype%':
                typeof Set > 'u' || !c ? r : d(new Set()[Symbol.iterator]()),
              '%SharedArrayBuffer%':
                typeof SharedArrayBuffer > 'u' ? r : SharedArrayBuffer,
              '%String%': String,
              '%StringIteratorPrototype%': c ? d(''[Symbol.iterator]()) : r,
              '%Symbol%': c ? Symbol : r,
              '%SyntaxError%': n,
              '%ThrowTypeError%': u,
              '%TypedArray%': f,
              '%TypeError%': a,
              '%Uint8Array%': typeof Uint8Array > 'u' ? r : Uint8Array,
              '%Uint8ClampedArray%':
                typeof Uint8ClampedArray > 'u' ? r : Uint8ClampedArray,
              '%Uint16Array%': typeof Uint16Array > 'u' ? r : Uint16Array,
              '%Uint32Array%': typeof Uint32Array > 'u' ? r : Uint32Array,
              '%URIError%': URIError,
              '%WeakMap%': typeof WeakMap > 'u' ? r : WeakMap,
              '%WeakRef%': typeof WeakRef > 'u' ? r : WeakRef,
              '%WeakSet%': typeof WeakSet > 'u' ? r : WeakSet,
            },
            g = function Z(V) {
              var P
              if (V === '%AsyncFunction%') P = i('async function () {}')
              else if (V === '%GeneratorFunction%') P = i('function* () {}')
              else if (V === '%AsyncGeneratorFunction%')
                P = i('async function* () {}')
              else if (V === '%AsyncGenerator%') {
                var q = Z('%AsyncGeneratorFunction%')
                q && (P = q.prototype)
              } else if (V === '%AsyncIteratorPrototype%') {
                var J = Z('%AsyncGenerator%')
                J && (P = d(J.prototype))
              }
              return (h[V] = P), P
            },
            C = {
              '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
              '%ArrayPrototype%': ['Array', 'prototype'],
              '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
              '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
              '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
              '%ArrayProto_values%': ['Array', 'prototype', 'values'],
              '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
              '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
              '%AsyncGeneratorPrototype%': [
                'AsyncGeneratorFunction',
                'prototype',
                'prototype',
              ],
              '%BooleanPrototype%': ['Boolean', 'prototype'],
              '%DataViewPrototype%': ['DataView', 'prototype'],
              '%DatePrototype%': ['Date', 'prototype'],
              '%ErrorPrototype%': ['Error', 'prototype'],
              '%EvalErrorPrototype%': ['EvalError', 'prototype'],
              '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
              '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
              '%FunctionPrototype%': ['Function', 'prototype'],
              '%Generator%': ['GeneratorFunction', 'prototype'],
              '%GeneratorPrototype%': [
                'GeneratorFunction',
                'prototype',
                'prototype',
              ],
              '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
              '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
              '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
              '%JSONParse%': ['JSON', 'parse'],
              '%JSONStringify%': ['JSON', 'stringify'],
              '%MapPrototype%': ['Map', 'prototype'],
              '%NumberPrototype%': ['Number', 'prototype'],
              '%ObjectPrototype%': ['Object', 'prototype'],
              '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
              '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
              '%PromisePrototype%': ['Promise', 'prototype'],
              '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
              '%Promise_all%': ['Promise', 'all'],
              '%Promise_reject%': ['Promise', 'reject'],
              '%Promise_resolve%': ['Promise', 'resolve'],
              '%RangeErrorPrototype%': ['RangeError', 'prototype'],
              '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
              '%RegExpPrototype%': ['RegExp', 'prototype'],
              '%SetPrototype%': ['Set', 'prototype'],
              '%SharedArrayBufferPrototype%': [
                'SharedArrayBuffer',
                'prototype',
              ],
              '%StringPrototype%': ['String', 'prototype'],
              '%SymbolPrototype%': ['Symbol', 'prototype'],
              '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
              '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
              '%TypeErrorPrototype%': ['TypeError', 'prototype'],
              '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
              '%Uint8ClampedArrayPrototype%': [
                'Uint8ClampedArray',
                'prototype',
              ],
              '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
              '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
              '%URIErrorPrototype%': ['URIError', 'prototype'],
              '%WeakMapPrototype%': ['WeakMap', 'prototype'],
              '%WeakSetPrototype%': ['WeakSet', 'prototype'],
            },
            b = jl(),
            E = NB(),
            _ = b.call(Function.call, Array.prototype.concat),
            T = b.call(Function.apply, Array.prototype.splice),
            O = b.call(Function.call, String.prototype.replace),
            I = b.call(Function.call, String.prototype.slice),
            D = b.call(Function.call, RegExp.prototype.exec),
            R =
              /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
            M = /\\(\\)?/g,
            z = function (Z) {
              var V = I(Z, 0, 1),
                P = I(Z, -1)
              if (V === '%' && P !== '%')
                throw new n('invalid intrinsic syntax, expected closing `%`')
              if (P === '%' && V !== '%')
                throw new n('invalid intrinsic syntax, expected opening `%`')
              var q = []
              return (
                O(Z, R, function (J, X, te, re) {
                  q[q.length] = te ? O(re, M, '$1') : X || J
                }),
                q
              )
            },
            Y = function (Z, V) {
              var P = Z,
                q
              if ((E(C, P) && ((q = C[P]), (P = '%' + q[0] + '%')), E(h, P))) {
                var J = h[P]
                if ((J === y && (J = g(P)), typeof J > 'u' && !V))
                  throw new a(
                    'intrinsic ' +
                      Z +
                      ' exists, but is not available. Please file an issue!',
                  )
                return { alias: q, name: P, value: J }
              }
              throw new n('intrinsic ' + Z + ' does not exist!')
            }
          t.exports = function (Z, V) {
            if (typeof Z != 'string' || Z.length === 0)
              throw new a('intrinsic name must be a non-empty string')
            if (arguments.length > 1 && typeof V != 'boolean')
              throw new a('"allowMissing" argument must be a boolean')
            if (D(/^%?[^%]*%?$/, Z) === null)
              throw new n(
                '`%` may not be present anywhere but at the beginning and end of the intrinsic name',
              )
            var P = z(Z),
              q = P.length > 0 ? P[0] : '',
              J = Y('%' + q + '%', V),
              X = J.name,
              te = J.value,
              re = !1,
              ee = J.alias
            ee && ((q = ee[0]), T(P, _([0, 1], ee)))
            for (var oe = 1, ie = !0; oe < P.length; oe += 1) {
              var ce = P[oe],
                be = I(ce, 0, 1),
                pe = I(ce, -1)
              if (
                (be === '"' ||
                  be === "'" ||
                  be === '`' ||
                  pe === '"' ||
                  pe === "'" ||
                  pe === '`') &&
                be !== pe
              )
                throw new n(
                  'property names with quotes must have matching quotes',
                )
              if (
                ((ce === 'constructor' || !ie) && (re = !0),
                (q += '.' + ce),
                (X = '%' + q + '%'),
                E(h, X))
              )
                te = h[X]
              else if (te != null) {
                if (!(ce in te)) {
                  if (!V)
                    throw new a(
                      'base intrinsic for ' +
                        Z +
                        ' exists, but the property is not available.',
                    )
                  return
                }
                if (s && oe + 1 >= P.length) {
                  var ye = s(te, ce)
                  ;(ie = !!ye),
                    ie && 'get' in ye && !('originalValue' in ye.get)
                      ? (te = ye.get)
                      : (te = te[ce])
                } else (ie = E(te, ce)), (te = te[ce])
                ie && !re && (h[X] = te)
              }
            }
            return te
          }
        },
      }),
      BB = st({
        'node_modules/call-bind/index.js'(e, t) {
          var r = jl(),
            n = u2(),
            o = n('%Function.prototype.apply%'),
            a = n('%Function.prototype.call%'),
            i = n('%Reflect.apply%', !0) || r.call(a, o),
            s = n('%Object.getOwnPropertyDescriptor%', !0),
            l = n('%Object.defineProperty%', !0),
            u = n('%Math.max%')
          if (l)
            try {
              l({}, 'a', { value: 1 })
            } catch {
              l = null
            }
          t.exports = function (d) {
            var y = i(r, a, arguments)
            if (s && l) {
              var f = s(y, 'length')
              f.configurable &&
                l(y, 'length', {
                  value: 1 + u(0, d.length - (arguments.length - 1)),
                })
            }
            return y
          }
          var c = function () {
            return i(r, o, arguments)
          }
          l ? l(t.exports, 'apply', { value: c }) : (t.exports.apply = c)
        },
      }),
      LB = st({
        'node_modules/call-bind/callBound.js'(e, t) {
          var r = u2(),
            n = BB(),
            o = n(r('String.prototype.indexOf'))
          t.exports = function (a, i) {
            var s = r(a, !!i)
            return typeof s == 'function' && o(a, '.prototype.') > -1 ? n(s) : s
          }
        },
      }),
      qB = st({
        'node_modules/has-tostringtag/shams.js'(e, t) {
          var r = s2()
          t.exports = function () {
            return r() && !!Symbol.toStringTag
          }
        },
      }),
      MB = st({
        'node_modules/is-regex/index.js'(e, t) {
          var r = LB(),
            n = qB()(),
            o,
            a,
            i,
            s
          n &&
            ((o = r('Object.prototype.hasOwnProperty')),
            (a = r('RegExp.prototype.exec')),
            (i = {}),
            (l = function () {
              throw i
            }),
            (s = { toString: l, valueOf: l }),
            typeof Symbol.toPrimitive == 'symbol' &&
              (s[Symbol.toPrimitive] = l))
          var l,
            u = r('Object.prototype.toString'),
            c = Object.getOwnPropertyDescriptor,
            d = '[object RegExp]'
          t.exports = n
            ? function (y) {
                if (!y || typeof y != 'object') return !1
                var f = c(y, 'lastIndex'),
                  h = f && o(f, 'value')
                if (!h) return !1
                try {
                  a(y, s)
                } catch (g) {
                  return g === i
                }
              }
            : function (y) {
                return !y || (typeof y != 'object' && typeof y != 'function')
                  ? !1
                  : u(y) === d
              }
        },
      }),
      UB = st({
        'node_modules/is-function/index.js'(e, t) {
          t.exports = n
          var r = Object.prototype.toString
          function n(o) {
            if (!o) return !1
            var a = r.call(o)
            return (
              a === '[object Function]' ||
              (typeof o == 'function' && a !== '[object RegExp]') ||
              (typeof window < 'u' &&
                (o === window.setTimeout ||
                  o === window.alert ||
                  o === window.confirm ||
                  o === window.prompt))
            )
          }
        },
      }),
      $B = st({
        'node_modules/is-symbol/index.js'(e, t) {
          var r = Object.prototype.toString,
            n = l2()()
          n
            ? ((o = Symbol.prototype.toString),
              (a = /^Symbol\(.*\)$/),
              (i = function (s) {
                return typeof s.valueOf() != 'symbol' ? !1 : a.test(o.call(s))
              }),
              (t.exports = function (s) {
                if (typeof s == 'symbol') return !0
                if (r.call(s) !== '[object Symbol]') return !1
                try {
                  return i(s)
                } catch {
                  return !1
                }
              }))
            : (t.exports = function (s) {
                return !1
              })
          var o, a, i
        },
      })
    Fl(MB())
    Fl(UB())
    Fl($B())
    var zB =
        typeof window == 'object' &&
        window &&
        window.Object === Object &&
        window,
      VB = zB,
      HB = typeof self == 'object' && self && self.Object === Object && self,
      JB = VB || HB || Function('return this')(),
      Nl = JB,
      GB = Nl.Symbol,
      Gr = GB,
      c2 = Object.prototype,
      WB = c2.hasOwnProperty,
      KB = c2.toString,
      $n = Gr ? Gr.toStringTag : void 0
    function YB(e) {
      var t = WB.call(e, $n),
        r = e[$n]
      try {
        e[$n] = void 0
        var n = !0
      } catch {}
      var o = KB.call(e)
      return n && (t ? (e[$n] = r) : delete e[$n]), o
    }
    var XB = YB,
      QB = Object.prototype,
      ZB = QB.toString
    function eL(e) {
      return ZB.call(e)
    }
    var tL = eL,
      rL = '[object Null]',
      nL = '[object Undefined]',
      pv = Gr ? Gr.toStringTag : void 0
    function oL(e) {
      return e == null
        ? e === void 0
          ? nL
          : rL
        : pv && pv in Object(e)
          ? XB(e)
          : tL(e)
    }
    var aL = oL,
      dv = Gr ? Gr.prototype : void 0
    dv && dv.toString
    function iL(e) {
      var t = typeof e
      return e != null && (t == 'object' || t == 'function')
    }
    var p2 = iL,
      sL = '[object AsyncFunction]',
      lL = '[object Function]',
      uL = '[object GeneratorFunction]',
      cL = '[object Proxy]'
    function pL(e) {
      if (!p2(e)) return !1
      var t = aL(e)
      return t == lL || t == uL || t == sL || t == cL
    }
    var dL = pL,
      fL = Nl['__core-js_shared__'],
      bl = fL,
      fv = (function () {
        var e = /[^.]+$/.exec((bl && bl.keys && bl.keys.IE_PROTO) || '')
        return e ? 'Symbol(src)_1.' + e : ''
      })()
    function yL(e) {
      return !!fv && fv in e
    }
    var hL = yL,
      mL = Function.prototype,
      gL = mL.toString
    function bL(e) {
      if (e != null) {
        try {
          return gL.call(e)
        } catch {}
        try {
          return e + ''
        } catch {}
      }
      return ''
    }
    var vL = bL,
      EL = /[\\^$.*+?()[\]{}|]/g,
      xL = /^\[object .+?Constructor\]$/,
      wL = Function.prototype,
      SL = Object.prototype,
      AL = wL.toString,
      TL = SL.hasOwnProperty,
      CL = RegExp(
        '^' +
          AL.call(TL)
            .replace(EL, '\\$&')
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              '$1.*?',
            ) +
          '$',
      )
    function _L(e) {
      if (!p2(e) || hL(e)) return !1
      var t = dL(e) ? CL : xL
      return t.test(vL(e))
    }
    var OL = _L
    function IL(e, t) {
      return e?.[t]
    }
    var kL = IL
    function PL(e, t) {
      var r = kL(e, t)
      return OL(r) ? r : void 0
    }
    var d2 = PL
    function RL(e, t) {
      return e === t || (e !== e && t !== t)
    }
    var DL = RL,
      FL = d2(Object, 'create'),
      Hn = FL
    function jL() {
      ;(this.__data__ = Hn ? Hn(null) : {}), (this.size = 0)
    }
    var NL = jL
    function BL(e) {
      var t = this.has(e) && delete this.__data__[e]
      return (this.size -= t ? 1 : 0), t
    }
    var LL = BL,
      qL = '__lodash_hash_undefined__',
      ML = Object.prototype,
      UL = ML.hasOwnProperty
    function $L(e) {
      var t = this.__data__
      if (Hn) {
        var r = t[e]
        return r === qL ? void 0 : r
      }
      return UL.call(t, e) ? t[e] : void 0
    }
    var zL = $L,
      VL = Object.prototype,
      HL = VL.hasOwnProperty
    function JL(e) {
      var t = this.__data__
      return Hn ? t[e] !== void 0 : HL.call(t, e)
    }
    var GL = JL,
      WL = '__lodash_hash_undefined__'
    function KL(e, t) {
      var r = this.__data__
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = Hn && t === void 0 ? WL : t),
        this
      )
    }
    var YL = KL
    function Wr(e) {
      var t = -1,
        r = e == null ? 0 : e.length
      for (this.clear(); ++t < r; ) {
        var n = e[t]
        this.set(n[0], n[1])
      }
    }
    Wr.prototype.clear = NL
    Wr.prototype.delete = LL
    Wr.prototype.get = zL
    Wr.prototype.has = GL
    Wr.prototype.set = YL
    var yv = Wr
    function XL() {
      ;(this.__data__ = []), (this.size = 0)
    }
    var QL = XL
    function ZL(e, t) {
      for (var r = e.length; r--; ) if (DL(e[r][0], t)) return r
      return -1
    }
    var Ca = ZL,
      eq = Array.prototype,
      tq = eq.splice
    function rq(e) {
      var t = this.__data__,
        r = Ca(t, e)
      if (r < 0) return !1
      var n = t.length - 1
      return r == n ? t.pop() : tq.call(t, r, 1), --this.size, !0
    }
    var nq = rq
    function oq(e) {
      var t = this.__data__,
        r = Ca(t, e)
      return r < 0 ? void 0 : t[r][1]
    }
    var aq = oq
    function iq(e) {
      return Ca(this.__data__, e) > -1
    }
    var sq = iq
    function lq(e, t) {
      var r = this.__data__,
        n = Ca(r, e)
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this
    }
    var uq = lq
    function Kr(e) {
      var t = -1,
        r = e == null ? 0 : e.length
      for (this.clear(); ++t < r; ) {
        var n = e[t]
        this.set(n[0], n[1])
      }
    }
    Kr.prototype.clear = QL
    Kr.prototype.delete = nq
    Kr.prototype.get = aq
    Kr.prototype.has = sq
    Kr.prototype.set = uq
    var cq = Kr,
      pq = d2(Nl, 'Map'),
      dq = pq
    function fq() {
      ;(this.size = 0),
        (this.__data__ = {
          hash: new yv(),
          map: new (dq || cq)(),
          string: new yv(),
        })
    }
    var yq = fq
    function hq(e) {
      var t = typeof e
      return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
        ? e !== '__proto__'
        : e === null
    }
    var mq = hq
    function gq(e, t) {
      var r = e.__data__
      return mq(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
    }
    var _a = gq
    function bq(e) {
      var t = _a(this, e).delete(e)
      return (this.size -= t ? 1 : 0), t
    }
    var vq = bq
    function Eq(e) {
      return _a(this, e).get(e)
    }
    var xq = Eq
    function wq(e) {
      return _a(this, e).has(e)
    }
    var Sq = wq
    function Aq(e, t) {
      var r = _a(this, e),
        n = r.size
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this
    }
    var Tq = Aq
    function Yr(e) {
      var t = -1,
        r = e == null ? 0 : e.length
      for (this.clear(); ++t < r; ) {
        var n = e[t]
        this.set(n[0], n[1])
      }
    }
    Yr.prototype.clear = yq
    Yr.prototype.delete = vq
    Yr.prototype.get = xq
    Yr.prototype.has = Sq
    Yr.prototype.set = Tq
    var f2 = Yr,
      Cq = 'Expected a function'
    function Bl(e, t) {
      if (typeof e != 'function' || (t != null && typeof t != 'function'))
        throw new TypeError(Cq)
      var r = function () {
        var n = arguments,
          o = t ? t.apply(this, n) : n[0],
          a = r.cache
        if (a.has(o)) return a.get(o)
        var i = e.apply(this, n)
        return (r.cache = a.set(o, i) || a), i
      }
      return (r.cache = new (Bl.Cache || f2)()), r
    }
    Bl.Cache = f2
    var _q = Bl,
      Oq = 500
    function Iq(e) {
      var t = _q(e, function (n) {
          return r.size === Oq && r.clear(), n
        }),
        r = t.cache
      return t
    }
    var kq = Iq,
      Pq =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Rq = /\\(\\)?/g
    kq(function (e) {
      var t = []
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(Pq, function (r, n, o, a) {
          t.push(o ? a.replace(Rq, '$1') : n || r)
        }),
        t
      )
    })
    var Dq = (e) => {
      let t = null,
        r = !1,
        n = !1,
        o = !1,
        a = ''
      if (e.indexOf('//') >= 0 || e.indexOf('/*') >= 0)
        for (let i = 0; i < e.length; i += 1)
          !t && !r && !n && !o
            ? e[i] === '"' || e[i] === "'" || e[i] === '`'
              ? (t = e[i])
              : e[i] === '/' && e[i + 1] === '*'
                ? (r = !0)
                : e[i] === '/' && e[i + 1] === '/'
                  ? (n = !0)
                  : e[i] === '/' && e[i + 1] !== '/' && (o = !0)
            : (t &&
                ((e[i] === t && e[i - 1] !== '\\') ||
                  (e[i] ===
                    `
` &&
                    t !== '`')) &&
                (t = null),
              o &&
                ((e[i] === '/' && e[i - 1] !== '\\') ||
                  e[i] ===
                    `
`) &&
                (o = !1),
              r && e[i - 1] === '/' && e[i - 2] === '*' && (r = !1),
              n &&
                e[i] ===
                  `
` &&
                (n = !1)),
            !r && !n && (a += e[i])
      else a = e
      return a
    }
    ;(0, FB.default)(1e4)((e) => Dq(e).replace(/\n\s*/g, '').trim())
    var Fq = Xt({
        '../../node_modules/tocbot/src/js/default-options.js'(e, t) {
          t.exports = {
            tocSelector: '.js-toc',
            contentSelector: '.js-toc-content',
            headingSelector: 'h1, h2, h3',
            ignoreSelector: '.js-toc-ignore',
            hasInnerContainers: !1,
            linkClass: 'toc-link',
            extraLinkClasses: '',
            activeLinkClass: 'is-active-link',
            listClass: 'toc-list',
            extraListClasses: '',
            isCollapsedClass: 'is-collapsed',
            collapsibleClass: 'is-collapsible',
            listItemClass: 'toc-list-item',
            activeListItemClass: 'is-active-li',
            collapseDepth: 0,
            scrollSmooth: !0,
            scrollSmoothDuration: 420,
            scrollSmoothOffset: 0,
            scrollEndCallback: function (r) {},
            headingsOffset: 1,
            throttleTimeout: 50,
            positionFixedSelector: null,
            positionFixedClass: 'is-position-fixed',
            fixedSidebarOffset: 'auto',
            includeHtml: !1,
            includeTitleTags: !1,
            onClick: function (r) {},
            orderedList: !0,
            scrollContainer: null,
            skipRendering: !1,
            headingLabelCallback: !1,
            ignoreHiddenElements: !1,
            headingObjectCallback: null,
            basePath: '',
            disableTocScrollSync: !1,
            tocScrollOffset: 0,
          }
        },
      }),
      jq = Xt({
        '../../node_modules/tocbot/src/js/build-html.js'(e, t) {
          t.exports = function (r) {
            var n = [].forEach,
              o = [].some,
              a = document.body,
              i,
              s = !0,
              l = ' '
            function u(T, O) {
              var I = O.appendChild(d(T))
              if (T.children.length) {
                var D = y(T.isCollapsed)
                T.children.forEach(function (R) {
                  u(R, D)
                }),
                  I.appendChild(D)
              }
            }
            function c(T, O) {
              var I = !1,
                D = y(I)
              if (
                (O.forEach(function (R) {
                  u(R, D)
                }),
                (i = T || i),
                i !== null)
              )
                return (
                  i.firstChild && i.removeChild(i.firstChild),
                  O.length === 0 ? i : i.appendChild(D)
                )
            }
            function d(T) {
              var O = document.createElement('li'),
                I = document.createElement('a')
              return (
                r.listItemClass && O.setAttribute('class', r.listItemClass),
                r.onClick && (I.onclick = r.onClick),
                r.includeTitleTags && I.setAttribute('title', T.textContent),
                r.includeHtml && T.childNodes.length
                  ? n.call(T.childNodes, function (D) {
                      I.appendChild(D.cloneNode(!0))
                    })
                  : (I.textContent = T.textContent),
                I.setAttribute('href', r.basePath + '#' + T.id),
                I.setAttribute(
                  'class',
                  r.linkClass +
                    l +
                    'node-name--' +
                    T.nodeName +
                    l +
                    r.extraLinkClasses,
                ),
                O.appendChild(I),
                O
              )
            }
            function y(T) {
              var O = r.orderedList ? 'ol' : 'ul',
                I = document.createElement(O),
                D = r.listClass + l + r.extraListClasses
              return (
                T &&
                  ((D = D + l + r.collapsibleClass),
                  (D = D + l + r.isCollapsedClass)),
                I.setAttribute('class', D),
                I
              )
            }
            function f() {
              if (
                r.scrollContainer &&
                document.querySelector(r.scrollContainer)
              ) {
                var T
                T = document.querySelector(r.scrollContainer).scrollTop
              } else T = document.documentElement.scrollTop || a.scrollTop
              var O = document.querySelector(r.positionFixedSelector)
              r.fixedSidebarOffset === 'auto' &&
                (r.fixedSidebarOffset = i.offsetTop),
                T > r.fixedSidebarOffset
                  ? O.className.indexOf(r.positionFixedClass) === -1 &&
                    (O.className += l + r.positionFixedClass)
                  : (O.className = O.className.replace(
                      l + r.positionFixedClass,
                      '',
                    ))
            }
            function h(T) {
              var O = 0
              return (
                T !== null &&
                  ((O = T.offsetTop),
                  r.hasInnerContainers && (O += h(T.offsetParent))),
                O
              )
            }
            function g(T, O) {
              return T && T.className !== O && (T.className = O), T
            }
            function C(T) {
              if (
                r.scrollContainer &&
                document.querySelector(r.scrollContainer)
              ) {
                var O
                O = document.querySelector(r.scrollContainer).scrollTop
              } else O = document.documentElement.scrollTop || a.scrollTop
              r.positionFixedSelector && f()
              var I = T,
                D
              if (s && i !== null && I.length > 0) {
                o.call(I, function (P, q) {
                  if (h(P) > O + r.headingsOffset + 10) {
                    var J = q === 0 ? q : q - 1
                    return (D = I[J]), !0
                  } else if (q === I.length - 1)
                    return (D = I[I.length - 1]), !0
                })
                var R = i.querySelector('.' + r.activeLinkClass),
                  M = i.querySelector(
                    '.' +
                      r.linkClass +
                      '.node-name--' +
                      D.nodeName +
                      '[href="' +
                      r.basePath +
                      '#' +
                      D.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, '\\$1') +
                      '"]',
                  )
                if (R === M) return
                var z = i.querySelectorAll('.' + r.linkClass)
                n.call(z, function (P) {
                  g(P, P.className.replace(l + r.activeLinkClass, ''))
                })
                var Y = i.querySelectorAll('.' + r.listItemClass)
                n.call(Y, function (P) {
                  g(P, P.className.replace(l + r.activeListItemClass, ''))
                }),
                  M &&
                    M.className.indexOf(r.activeLinkClass) === -1 &&
                    (M.className += l + r.activeLinkClass)
                var Z = M && M.parentNode
                Z &&
                  Z.className.indexOf(r.activeListItemClass) === -1 &&
                  (Z.className += l + r.activeListItemClass)
                var V = i.querySelectorAll(
                  '.' + r.listClass + '.' + r.collapsibleClass,
                )
                n.call(V, function (P) {
                  P.className.indexOf(r.isCollapsedClass) === -1 &&
                    (P.className += l + r.isCollapsedClass)
                }),
                  M &&
                    M.nextSibling &&
                    M.nextSibling.className.indexOf(r.isCollapsedClass) !==
                      -1 &&
                    g(
                      M.nextSibling,
                      M.nextSibling.className.replace(
                        l + r.isCollapsedClass,
                        '',
                      ),
                    ),
                  b(M && M.parentNode.parentNode)
              }
            }
            function b(T) {
              return T &&
                T.className.indexOf(r.collapsibleClass) !== -1 &&
                T.className.indexOf(r.isCollapsedClass) !== -1
                ? (g(T, T.className.replace(l + r.isCollapsedClass, '')),
                  b(T.parentNode.parentNode))
                : T
            }
            function E(T) {
              var O = T.target || T.srcElement
              typeof O.className != 'string' ||
                O.className.indexOf(r.linkClass) === -1 ||
                (s = !1)
            }
            function _() {
              s = !0
            }
            return {
              enableTocAnimation: _,
              disableTocAnimation: E,
              render: c,
              updateToc: C,
            }
          }
        },
      }),
      Nq = Xt({
        '../../node_modules/tocbot/src/js/parse-content.js'(e, t) {
          t.exports = function (r) {
            var n = [].reduce
            function o(d) {
              return d[d.length - 1]
            }
            function a(d) {
              return +d.nodeName.toUpperCase().replace('H', '')
            }
            function i(d) {
              try {
                return (
                  d instanceof window.HTMLElement ||
                  d instanceof window.parent.HTMLElement
                )
              } catch {
                return d instanceof window.HTMLElement
              }
            }
            function s(d) {
              if (!i(d)) return d
              if (
                r.ignoreHiddenElements &&
                (!d.offsetHeight || !d.offsetParent)
              )
                return null
              let y =
                d.getAttribute('data-heading-label') ||
                (r.headingLabelCallback
                  ? String(r.headingLabelCallback(d.innerText))
                  : (d.innerText || d.textContent).trim())
              var f = {
                id: d.id,
                children: [],
                nodeName: d.nodeName,
                headingLevel: a(d),
                textContent: y,
              }
              return (
                r.includeHtml && (f.childNodes = d.childNodes),
                r.headingObjectCallback ? r.headingObjectCallback(f, d) : f
              )
            }
            function l(d, y) {
              for (
                var f = s(d),
                  h = f.headingLevel,
                  g = y,
                  C = o(g),
                  b = C ? C.headingLevel : 0,
                  E = h - b;
                E > 0 && ((C = o(g)), !(C && h === C.headingLevel));

              )
                C && C.children !== void 0 && (g = C.children), E--
              return h >= r.collapseDepth && (f.isCollapsed = !0), g.push(f), g
            }
            function u(d, y) {
              var f = y
              r.ignoreSelector &&
                (f = y.split(',').map(function (h) {
                  return h.trim() + ':not(' + r.ignoreSelector + ')'
                }))
              try {
                return d.querySelectorAll(f)
              } catch {
                return (
                  console.warn('Headers not found with selector: ' + f), null
                )
              }
            }
            function c(d) {
              return n.call(
                d,
                function (y, f) {
                  var h = s(f)
                  return h && l(h, y.nest), y
                },
                { nest: [] },
              )
            }
            return { nestHeadingsArray: c, selectHeadings: u }
          }
        },
      }),
      Bq = Xt({
        '../../node_modules/tocbot/src/js/update-toc-scroll.js'(e, t) {
          t.exports = function (r) {
            var n = r.tocElement || document.querySelector(r.tocSelector)
            if (n && n.scrollHeight > n.clientHeight) {
              var o = n.querySelector('.' + r.activeListItemClass)
              o && (n.scrollTop = o.offsetTop - r.tocScrollOffset)
            }
          }
        },
      }),
      Lq = Xt({
        '../../node_modules/tocbot/src/js/scroll-smooth/index.js'(e) {
          e.initSmoothScrolling = t
          function t(n) {
            var o = n.duration,
              a = n.offset,
              i = location.hash ? u(location.href) : location.href
            s()
            function s() {
              document.body.addEventListener('click', d, !1)
              function d(y) {
                !l(y.target) ||
                  y.target.className.indexOf('no-smooth-scroll') > -1 ||
                  (y.target.href.charAt(y.target.href.length - 2) === '#' &&
                    y.target.href.charAt(y.target.href.length - 1) === '!') ||
                  y.target.className.indexOf(n.linkClass) === -1 ||
                  r(y.target.hash, {
                    duration: o,
                    offset: a,
                    callback: function () {
                      c(y.target.hash)
                    },
                  })
              }
            }
            function l(d) {
              return (
                d.tagName.toLowerCase() === 'a' &&
                (d.hash.length > 0 ||
                  d.href.charAt(d.href.length - 1) === '#') &&
                (u(d.href) === i || u(d.href) + '#' === i)
              )
            }
            function u(d) {
              return d.slice(0, d.lastIndexOf('#'))
            }
            function c(d) {
              var y = document.getElementById(d.substring(1))
              y &&
                (/^(?:a|select|input|button|textarea)$/i.test(y.tagName) ||
                  (y.tabIndex = -1),
                y.focus())
            }
          }
          function r(n, o) {
            var a = window.pageYOffset,
              i = {
                duration: o.duration,
                offset: o.offset || 0,
                callback: o.callback,
                easing: o.easing || h,
              },
              s =
                document.querySelector(
                  '[id="' + decodeURI(n).split('#').join('') + '"]',
                ) ||
                document.querySelector('[id="' + n.split('#').join('') + '"]'),
              l =
                typeof n == 'string'
                  ? i.offset +
                    (n
                      ? (s && s.getBoundingClientRect().top) || 0
                      : -(
                          document.documentElement.scrollTop ||
                          document.body.scrollTop
                        ))
                  : n,
              u = typeof i.duration == 'function' ? i.duration(l) : i.duration,
              c,
              d
            requestAnimationFrame(function (g) {
              ;(c = g), y(g)
            })
            function y(g) {
              ;(d = g - c),
                window.scrollTo(0, i.easing(d, a, l, u)),
                d < u ? requestAnimationFrame(y) : f()
            }
            function f() {
              window.scrollTo(0, a + l),
                typeof i.callback == 'function' && i.callback()
            }
            function h(g, C, b, E) {
              return (
                (g /= E / 2),
                g < 1
                  ? (b / 2) * g * g + C
                  : (g--, (-b / 2) * (g * (g - 2) - 1) + C)
              )
            }
          }
        },
      }),
      qq = Xt({
        '../../node_modules/tocbot/src/js/index.js'(e, t) {
          ;(function (r, n) {
            typeof define == 'function' && define.amd
              ? define([], n(r))
              : typeof e == 'object'
                ? (t.exports = n(r))
                : (r.tocbot = n(r))
          })(typeof window < 'u' ? window : window || window, function (r) {
            var n = Fq(),
              o = {},
              a = {},
              i = jq(),
              s = Nq(),
              l = Bq(),
              u,
              c,
              d =
                !!r &&
                !!r.document &&
                !!r.document.querySelector &&
                !!r.addEventListener
            if (typeof window > 'u' && !d) return
            var y,
              f = Object.prototype.hasOwnProperty
            function h() {
              for (var E = {}, _ = 0; _ < arguments.length; _++) {
                var T = arguments[_]
                for (var O in T) f.call(T, O) && (E[O] = T[O])
              }
              return E
            }
            function g(E, _, T) {
              _ || (_ = 250)
              var O, I
              return function () {
                var D = T || this,
                  R = +new Date(),
                  M = arguments
                O && R < O + _
                  ? (clearTimeout(I),
                    (I = setTimeout(function () {
                      ;(O = R), E.apply(D, M)
                    }, _)))
                  : ((O = R), E.apply(D, M))
              }
            }
            function C(E) {
              try {
                return (
                  E.contentElement || document.querySelector(E.contentSelector)
                )
              } catch {
                return (
                  console.warn(
                    'Contents element not found: ' + E.contentSelector,
                  ),
                  null
                )
              }
            }
            function b(E) {
              try {
                return E.tocElement || document.querySelector(E.tocSelector)
              } catch {
                return (
                  console.warn('TOC element not found: ' + E.tocSelector), null
                )
              }
            }
            return (
              (a.destroy = function () {
                var E = b(o)
                E !== null &&
                  (o.skipRendering || (E && (E.innerHTML = '')),
                  o.scrollContainer && document.querySelector(o.scrollContainer)
                    ? (document
                        .querySelector(o.scrollContainer)
                        .removeEventListener(
                          'scroll',
                          this._scrollListener,
                          !1,
                        ),
                      document
                        .querySelector(o.scrollContainer)
                        .removeEventListener(
                          'resize',
                          this._scrollListener,
                          !1,
                        ),
                      u &&
                        document
                          .querySelector(o.scrollContainer)
                          .removeEventListener(
                            'click',
                            this._clickListener,
                            !1,
                          ))
                    : (document.removeEventListener(
                        'scroll',
                        this._scrollListener,
                        !1,
                      ),
                      document.removeEventListener(
                        'resize',
                        this._scrollListener,
                        !1,
                      ),
                      u &&
                        document.removeEventListener(
                          'click',
                          this._clickListener,
                          !1,
                        )))
              }),
              (a.init = function (E) {
                if (d) {
                  ;(o = h(n, E || {})),
                    (this.options = o),
                    (this.state = {}),
                    o.scrollSmooth &&
                      ((o.duration = o.scrollSmoothDuration),
                      (o.offset = o.scrollSmoothOffset),
                      (a.scrollSmooth = Lq().initSmoothScrolling(o))),
                    (u = i(o)),
                    (c = s(o)),
                    (this._buildHtml = u),
                    (this._parseContent = c),
                    (this._headingsArray = y),
                    a.destroy()
                  var _ = C(o)
                  if (_ !== null) {
                    var T = b(o)
                    if (
                      T !== null &&
                      ((y = c.selectHeadings(_, o.headingSelector)), y !== null)
                    ) {
                      var O = c.nestHeadingsArray(y),
                        I = O.nest
                      if (!o.skipRendering) u.render(T, I)
                      else return this
                      ;(this._scrollListener = g(function (R) {
                        u.updateToc(y), !o.disableTocScrollSync && l(o)
                        var M =
                          R &&
                          R.target &&
                          R.target.scrollingElement &&
                          R.target.scrollingElement.scrollTop === 0
                        ;((R &&
                          (R.eventPhase === 0 || R.currentTarget === null)) ||
                          M) &&
                          (u.updateToc(y),
                          o.scrollEndCallback && o.scrollEndCallback(R))
                      }, o.throttleTimeout)),
                        this._scrollListener(),
                        o.scrollContainer &&
                        document.querySelector(o.scrollContainer)
                          ? (document
                              .querySelector(o.scrollContainer)
                              .addEventListener(
                                'scroll',
                                this._scrollListener,
                                !1,
                              ),
                            document
                              .querySelector(o.scrollContainer)
                              .addEventListener(
                                'resize',
                                this._scrollListener,
                                !1,
                              ))
                          : (document.addEventListener(
                              'scroll',
                              this._scrollListener,
                              !1,
                            ),
                            document.addEventListener(
                              'resize',
                              this._scrollListener,
                              !1,
                            ))
                      var D = null
                      return (
                        (this._clickListener = g(function (R) {
                          o.scrollSmooth && u.disableTocAnimation(R),
                            u.updateToc(y),
                            D && clearTimeout(D),
                            (D = setTimeout(function () {
                              u.enableTocAnimation()
                            }, o.scrollSmoothDuration))
                        }, o.throttleTimeout)),
                        o.scrollContainer &&
                        document.querySelector(o.scrollContainer)
                          ? document
                              .querySelector(o.scrollContainer)
                              .addEventListener(
                                'click',
                                this._clickListener,
                                !1,
                              )
                          : document.addEventListener(
                              'click',
                              this._clickListener,
                              !1,
                            ),
                        this
                      )
                    }
                  }
                }
              }),
              (a.refresh = function (E) {
                a.destroy(), a.init(E || this.options)
              }),
              (r.tocbot = a),
              a
            )
          })
        },
      }),
      Mq = W.div(Er, ({ theme: e }) => ({
        backgroundColor:
          e.base === 'light' ? 'rgba(0,0,0,.01)' : 'rgba(255,255,255,.01)',
        borderRadius: e.appBorderRadius,
        border: `1px dashed ${e.appBorderColor}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        margin: '25px 0 40px',
        color: xe(0.3, e.color.defaultText),
        fontSize: e.typography.size.s2,
      })),
      y2 = (e) =>
        v.createElement(Mq, {
          ...e,
          className: 'docblock-emptyblock sb-unstyled',
        }),
      Uq = W(oo)(({ theme: e }) => ({
        fontSize: `${e.typography.size.s2 - 1}px`,
        lineHeight: '19px',
        margin: '25px 0 40px',
        borderRadius: e.appBorderRadius,
        boxShadow:
          e.base === 'light'
            ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
            : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
        'pre.prismjs': { padding: 20, background: 'inherit' },
      })),
      $q = W.div(({ theme: e }) => ({
        background: e.background.content,
        borderRadius: e.appBorderRadius,
        border: `1px solid ${e.appBorderColor}`,
        boxShadow:
          e.base === 'light'
            ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
            : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
        margin: '25px 0 40px',
        padding: '20px 20px 20px 22px',
      })),
      ga = W.div(({ theme: e }) => ({
        animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
        background: e.appBorderColor,
        height: 17,
        marginTop: 1,
        width: '60%',
        [`&:first-child${Ou}`]: { margin: 0 },
      })),
      zq = () =>
        v.createElement(
          $q,
          null,
          v.createElement(ga, null),
          v.createElement(ga, { style: { width: '80%' } }),
          v.createElement(ga, { style: { width: '30%' } }),
          v.createElement(ga, { style: { width: '80%' } }),
        ),
      Vq = ({
        isLoading: e,
        error: t,
        language: r,
        code: n,
        dark: o,
        format: a = !1,
        ...i
      }) => {
        let { typography: s } = ei()
        if (e) return v.createElement(zq, null)
        if (t) return v.createElement(y2, null, t)
        let l = v.createElement(
          Uq,
          {
            bordered: !0,
            copyable: !0,
            format: a,
            language: r,
            className: 'docblock-source sb-unstyled',
            ...i,
          },
          n,
        )
        if (typeof o > 'u') return l
        let u = o ? Za.dark : Za.light
        return v.createElement(
          Cu,
          {
            theme: _u({ ...u, fontCode: s.fonts.mono, fontBase: s.fonts.base }),
          },
          l,
        )
      },
      De = (e) =>
        `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`,
      Ll = 600
    W.h1(Er, ({ theme: e }) => ({
      color: e.color.defaultText,
      fontSize: e.typography.size.m3,
      fontWeight: e.typography.weight.bold,
      lineHeight: '32px',
      [`@media (min-width: ${Ll}px)`]: {
        fontSize: e.typography.size.l1,
        lineHeight: '36px',
        marginBottom: '16px',
      },
    }))
    W.h2(Er, ({ theme: e }) => ({
      fontWeight: e.typography.weight.regular,
      fontSize: e.typography.size.s3,
      lineHeight: '20px',
      borderBottom: 'none',
      marginBottom: 15,
      [`@media (min-width: ${Ll}px)`]: {
        fontSize: e.typography.size.m1,
        lineHeight: '28px',
        marginBottom: 24,
      },
      color: xe(0.25, e.color.defaultText),
    }))
    W.div(({ theme: e }) => {
      let t = {
          fontFamily: e.typography.fonts.base,
          fontSize: e.typography.size.s3,
          margin: 0,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
          WebkitOverflowScrolling: 'touch',
        },
        r = {
          margin: '20px 0 8px',
          padding: 0,
          cursor: 'text',
          position: 'relative',
          color: e.color.defaultText,
          '&:first-of-type': { marginTop: 0, paddingTop: 0 },
          '&:hover a.anchor': { textDecoration: 'none' },
          '& code': { fontSize: 'inherit' },
        },
        n = {
          lineHeight: 1,
          margin: '0 2px',
          padding: '3px 5px',
          whiteSpace: 'nowrap',
          borderRadius: 3,
          fontSize: e.typography.size.s2 - 1,
          border:
            e.base === 'light'
              ? `1px solid ${e.color.mediumlight}`
              : `1px solid ${e.color.darker}`,
          color:
            e.base === 'light'
              ? xe(0.1, e.color.defaultText)
              : xe(0.3, e.color.defaultText),
          backgroundColor:
            e.base === 'light' ? e.color.lighter : e.color.border,
        }
      return {
        maxWidth: 1e3,
        width: '100%',
        [De('a')]: {
          ...t,
          fontSize: 'inherit',
          lineHeight: '24px',
          color: e.color.secondary,
          textDecoration: 'none',
          '&.absent': { color: '#cc0000' },
          '&.anchor': {
            display: 'block',
            paddingLeft: 30,
            marginLeft: -30,
            cursor: 'pointer',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
          },
        },
        [De('blockquote')]: {
          ...t,
          margin: '16px 0',
          borderLeft: `4px solid ${e.color.medium}`,
          padding: '0 15px',
          color: e.color.dark,
          '& > :first-of-type': { marginTop: 0 },
          '& > :last-child': { marginBottom: 0 },
        },
        [De('div')]: t,
        [De('dl')]: {
          ...t,
          margin: '16px 0',
          padding: 0,
          '& dt': {
            fontSize: '14px',
            fontWeight: 'bold',
            fontStyle: 'italic',
            padding: 0,
            margin: '16px 0 4px',
          },
          '& dt:first-of-type': { padding: 0 },
          '& dt > :first-of-type': { marginTop: 0 },
          '& dt > :last-child': { marginBottom: 0 },
          '& dd': { margin: '0 0 16px', padding: '0 15px' },
          '& dd > :first-of-type': { marginTop: 0 },
          '& dd > :last-child': { marginBottom: 0 },
        },
        [De('h1')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.l1}px`,
          fontWeight: e.typography.weight.bold,
        },
        [De('h2')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.m2}px`,
          paddingBottom: 4,
          borderBottom: `1px solid ${e.appBorderColor}`,
        },
        [De('h3')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.m1}px`,
          fontWeight: e.typography.weight.bold,
        },
        [De('h4')]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` },
        [De('h5')]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` },
        [De('h6')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.s2}px`,
          color: e.color.dark,
        },
        [De('hr')]: {
          border: '0 none',
          borderTop: `1px solid ${e.appBorderColor}`,
          height: 4,
          padding: 0,
        },
        [De('img')]: { maxWidth: '100%' },
        [De('li')]: {
          ...t,
          fontSize: e.typography.size.s2,
          color: e.color.defaultText,
          lineHeight: '24px',
          '& + li': { marginTop: '.25em' },
          '& ul, & ol': { marginTop: '.25em', marginBottom: 0 },
          '& code': n,
        },
        [De('ol')]: {
          ...t,
          margin: '16px 0',
          paddingLeft: 30,
          '& :first-of-type': { marginTop: 0 },
          '& :last-child': { marginBottom: 0 },
        },
        [De('p')]: {
          ...t,
          margin: '16px 0',
          fontSize: e.typography.size.s2,
          lineHeight: '24px',
          color: e.color.defaultText,
          '& code': n,
        },
        [De('pre')]: {
          ...t,
          fontFamily: e.typography.fonts.mono,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          lineHeight: '18px',
          padding: '11px 1rem',
          whiteSpace: 'pre-wrap',
          color: 'inherit',
          borderRadius: 3,
          margin: '1rem 0',
          '&:not(.prismjs)': {
            background: 'transparent',
            border: 'none',
            borderRadius: 0,
            padding: 0,
            margin: 0,
          },
          '& pre, &.prismjs': {
            padding: 15,
            margin: 0,
            whiteSpace: 'pre-wrap',
            color: 'inherit',
            fontSize: '13px',
            lineHeight: '19px',
            code: { color: 'inherit', fontSize: 'inherit' },
          },
          '& code': { whiteSpace: 'pre' },
          '& code, & tt': { border: 'none' },
        },
        [De('span')]: {
          ...t,
          '&.frame': {
            display: 'block',
            overflow: 'hidden',
            '& > span': {
              border: `1px solid ${e.color.medium}`,
              display: 'block',
              float: 'left',
              overflow: 'hidden',
              margin: '13px 0 0',
              padding: 7,
              width: 'auto',
            },
            '& span img': { display: 'block', float: 'left' },
            '& span span': {
              clear: 'both',
              color: e.color.darkest,
              display: 'block',
              padding: '5px 0 0',
            },
          },
          '&.align-center': {
            display: 'block',
            overflow: 'hidden',
            clear: 'both',
            '& > span': {
              display: 'block',
              overflow: 'hidden',
              margin: '13px auto 0',
              textAlign: 'center',
            },
            '& span img': { margin: '0 auto', textAlign: 'center' },
          },
          '&.align-right': {
            display: 'block',
            overflow: 'hidden',
            clear: 'both',
            '& > span': {
              display: 'block',
              overflow: 'hidden',
              margin: '13px 0 0',
              textAlign: 'right',
            },
            '& span img': { margin: 0, textAlign: 'right' },
          },
          '&.float-left': {
            display: 'block',
            marginRight: 13,
            overflow: 'hidden',
            float: 'left',
            '& span': { margin: '13px 0 0' },
          },
          '&.float-right': {
            display: 'block',
            marginLeft: 13,
            overflow: 'hidden',
            float: 'right',
            '& > span': {
              display: 'block',
              overflow: 'hidden',
              margin: '13px auto 0',
              textAlign: 'right',
            },
          },
        },
        [De('table')]: {
          ...t,
          margin: '16px 0',
          fontSize: e.typography.size.s2,
          lineHeight: '24px',
          padding: 0,
          borderCollapse: 'collapse',
          '& tr': {
            borderTop: `1px solid ${e.appBorderColor}`,
            backgroundColor: e.appContentBg,
            margin: 0,
            padding: 0,
          },
          '& tr:nth-of-type(2n)': {
            backgroundColor:
              e.base === 'dark' ? e.color.darker : e.color.lighter,
          },
          '& tr th': {
            fontWeight: 'bold',
            color: e.color.defaultText,
            border: `1px solid ${e.appBorderColor}`,
            margin: 0,
            padding: '6px 13px',
          },
          '& tr td': {
            border: `1px solid ${e.appBorderColor}`,
            color: e.color.defaultText,
            margin: 0,
            padding: '6px 13px',
          },
          '& tr th :first-of-type, & tr td :first-of-type': { marginTop: 0 },
          '& tr th :last-child, & tr td :last-child': { marginBottom: 0 },
        },
        [De('ul')]: {
          ...t,
          margin: '16px 0',
          paddingLeft: 30,
          '& :first-of-type': { marginTop: 0 },
          '& :last-child': { marginBottom: 0 },
          listStyle: 'disc',
        },
      }
    })
    W.div(({ theme: e }) => ({
      background: e.background.content,
      display: 'flex',
      justifyContent: 'center',
      padding: '4rem 20px',
      minHeight: '100vh',
      boxSizing: 'border-box',
      gap: '3rem',
      [`@media (min-width: ${Ll}px)`]: {},
    }))
    var Oa = (e) => ({
        borderRadius: e.appBorderRadius,
        background: e.background.content,
        boxShadow:
          e.base === 'light'
            ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
            : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
        border: `1px solid ${e.appBorderColor}`,
      }),
      Hq = un({ scale: 1 })
    W.strong(({ theme: e }) => ({ color: e.color.orange }))
    var Jq = W(La)({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        transition: 'transform .2s linear',
      }),
      Gq = W.div({ display: 'flex', alignItems: 'center', gap: 4 }),
      Wq = W.div(({ theme: e }) => ({
        width: 14,
        height: 14,
        borderRadius: 2,
        margin: '0 7px',
        backgroundColor: e.appBorderColor,
        animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
      })),
      Kq = ({
        isLoading: e,
        storyId: t,
        baseUrl: r,
        zoom: n,
        resetZoom: o,
        ...a
      }) =>
        v.createElement(
          Jq,
          { ...a },
          v.createElement(
            Gq,
            { key: 'left' },
            e
              ? [1, 2, 3].map((i) => v.createElement(Wq, { key: i }))
              : v.createElement(
                  v.Fragment,
                  null,
                  v.createElement(
                    yt,
                    {
                      key: 'zoomin',
                      onClick: (i) => {
                        i.preventDefault(), n(0.8)
                      },
                      title: 'Zoom in',
                    },
                    v.createElement(Uu, null),
                  ),
                  v.createElement(
                    yt,
                    {
                      key: 'zoomout',
                      onClick: (i) => {
                        i.preventDefault(), n(1.25)
                      },
                      title: 'Zoom out',
                    },
                    v.createElement($u, null),
                  ),
                  v.createElement(
                    yt,
                    {
                      key: 'zoomreset',
                      onClick: (i) => {
                        i.preventDefault(), o()
                      },
                      title: 'Reset zoom',
                    },
                    v.createElement(zu, null),
                  ),
                ),
          ),
        ),
      Yq = W.div(
        ({ isColumn: e, columns: t, layout: r }) => ({
          display: e || !t ? 'block' : 'flex',
          position: 'relative',
          flexWrap: 'wrap',
          overflow: 'auto',
          flexDirection: e ? 'column' : 'row',
          '& .innerZoomElementWrapper > *': e
            ? {
                width: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
                display: 'block',
              }
            : {
                maxWidth: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
                display: 'inline-block',
              },
        }),
        ({ layout: e = 'padded' }) =>
          e === 'centered' || e === 'padded'
            ? {
                padding: '30px 20px',
                '& .innerZoomElementWrapper > *': {
                  width: 'auto',
                  border: '10px solid transparent!important',
                },
              }
            : {},
        ({ layout: e = 'padded' }) =>
          e === 'centered'
            ? {
                display: 'flex',
                justifyContent: 'center',
                justifyItems: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }
            : {},
        ({ columns: e }) =>
          e && e > 1
            ? {
                '.innerZoomElementWrapper > *': {
                  minWidth: `calc(100% / ${e} - 20px)`,
                },
              }
            : {},
      ),
      hv = W(Vq)(({ theme: e }) => ({
        margin: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: e.appBorderRadius,
        borderBottomRightRadius: e.appBorderRadius,
        border: 'none',
        background:
          e.base === 'light'
            ? 'rgba(0, 0, 0, 0.85)'
            : bt(0.05, e.background.content),
        color: e.color.lightest,
        button: {
          background:
            e.base === 'light'
              ? 'rgba(0, 0, 0, 0.85)'
              : bt(0.05, e.background.content),
        },
      })),
      Xq = W.div(
        ({ theme: e, withSource: t, isExpanded: r }) => ({
          position: 'relative',
          overflow: 'hidden',
          margin: '25px 0 40px',
          ...Oa(e),
          borderBottomLeftRadius: t && r && 0,
          borderBottomRightRadius: t && r && 0,
          borderBottomWidth: r && 0,
          'h3 + &': { marginTop: '16px' },
        }),
        ({ withToolbar: e }) => e && { paddingTop: 40 },
      ),
      Qq = (e, t, r) => {
        switch (!0) {
          case !!(e && e.error):
            return {
              source: null,
              actionItem: {
                title: 'No code available',
                className:
                  'docblock-code-toggle docblock-code-toggle--disabled',
                disabled: !0,
                onClick: () => r(!1),
              },
            }
          case t:
            return {
              source: v.createElement(hv, { ...e, dark: !0 }),
              actionItem: {
                title: 'Hide code',
                className:
                  'docblock-code-toggle docblock-code-toggle--expanded',
                onClick: () => r(!1),
              },
            }
          default:
            return {
              source: v.createElement(hv, { ...e, dark: !0 }),
              actionItem: {
                title: 'Show code',
                className: 'docblock-code-toggle',
                onClick: () => r(!0),
              },
            }
        }
      }
    function Zq(e) {
      if (Kl.count(e) === 1) {
        let t = e
        if (t.props) return t.props.id
      }
      return null
    }
    var eM = W(Kq)({
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 40,
      }),
      tM = W.div({ overflow: 'hidden', position: 'relative' }),
      rM = ({
        isLoading: e,
        isColumn: t,
        columns: r,
        children: n,
        withSource: o,
        withToolbar: a = !1,
        isExpanded: i = !1,
        additionalActions: s,
        className: l,
        layout: u = 'padded',
        ...c
      }) => {
        let [d, y] = me(i),
          { source: f, actionItem: h } = Qq(o, d, y),
          [g, C] = me(1),
          b = [l].concat(['sbdocs', 'sbdocs-preview', 'sb-unstyled']),
          E = o ? [h] : [],
          [_, T] = me(s ? [...s] : []),
          O = [...E, ..._],
          { window: I } = ct,
          D = Ve(async (M) => {
            let { createCopyToClipboardFunction: z } =
              await Promise.resolve().then(() => (ao(), eu))
            z()
          }, []),
          R = (M) => {
            let z = I.getSelection()
            ;(z && z.type === 'Range') ||
              (M.preventDefault(),
              _.filter((Y) => Y.title === 'Copied').length === 0 &&
                D(f.props.code).then(() => {
                  T([..._, { title: 'Copied', onClick: () => {} }]),
                    I.setTimeout(
                      () => T(_.filter((Y) => Y.title !== 'Copied')),
                      1500,
                    )
                }))
          }
        return v.createElement(
          Xq,
          { withSource: o, withToolbar: a, ...c, className: b.join(' ') },
          a &&
            v.createElement(eM, {
              isLoading: e,
              border: !0,
              zoom: (M) => C(g * M),
              resetZoom: () => C(1),
              storyId: Zq(n),
              baseUrl: './iframe.html',
            }),
          v.createElement(
            Hq.Provider,
            { value: { scale: g } },
            v.createElement(
              tM,
              { className: 'docs-story', onCopyCapture: o && R },
              v.createElement(
                Yq,
                { isColumn: t || !Array.isArray(n), columns: r, layout: u },
                v.createElement(
                  za.Element,
                  { scale: g },
                  Array.isArray(n)
                    ? n.map((M, z) => v.createElement('div', { key: z }, M))
                    : v.createElement('div', null, n),
                ),
              ),
              v.createElement(Da, { actionItems: O }),
            ),
          ),
          o && d && f,
        )
      }
    W(rM)(() => ({ '.docs-story': { paddingTop: 32, paddingBottom: 40 } }))
    var nM = W.label(({ theme: e }) => ({
        lineHeight: '18px',
        alignItems: 'center',
        marginBottom: 8,
        display: 'inline-block',
        position: 'relative',
        whiteSpace: 'nowrap',
        background: e.boolean.background,
        borderRadius: '3em',
        padding: 1,
        '&[aria-disabled="true"]': {
          opacity: 0.5,
          input: { cursor: 'not-allowed' },
        },
        input: {
          appearance: 'none',
          width: '100%',
          height: '100%',
          position: 'absolute',
          left: 0,
          top: 0,
          margin: 0,
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          borderRadius: '3em',
          '&:focus': {
            outline: 'none',
            boxShadow: `${e.color.secondary} 0 0 0 1px inset !important`,
          },
        },
        span: {
          textAlign: 'center',
          fontSize: e.typography.size.s1,
          fontWeight: e.typography.weight.bold,
          lineHeight: '1',
          cursor: 'pointer',
          display: 'inline-block',
          padding: '7px 15px',
          transition: 'all 100ms ease-out',
          userSelect: 'none',
          borderRadius: '3em',
          color: xe(0.5, e.color.defaultText),
          background: 'transparent',
          '&:hover': {
            boxShadow: `${ma(0.3, e.appBorderColor)} 0 0 0 1px inset`,
          },
          '&:active': {
            boxShadow: `${ma(0.05, e.appBorderColor)} 0 0 0 2px inset`,
            color: ma(1, e.appBorderColor),
          },
          '&:first-of-type': { paddingRight: 8 },
          '&:last-of-type': { paddingLeft: 8 },
        },
        'input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type':
          {
            background: e.boolean.selectedBackground,
            boxShadow:
              e.base === 'light'
                ? `${ma(0.1, e.appBorderColor)} 0 0 2px`
                : `${e.appBorderColor} 0 0 0 1px`,
            color: e.color.defaultText,
            padding: '7px 15px',
          },
      })),
      oM = (e) => e === 'true',
      aM = ({
        name: e,
        value: t,
        onChange: r,
        onBlur: n,
        onFocus: o,
        argType: a,
      }) => {
        let i = Ve(() => r(!1), [r]),
          s = !!a?.table?.readonly
        if (t === void 0)
          return v.createElement(
            Nt,
            {
              variant: 'outline',
              size: 'medium',
              id: ln(e),
              onClick: i,
              disabled: s,
            },
            'Set boolean',
          )
        let l = tt(e),
          u = typeof t == 'string' ? oM(t) : t
        return v.createElement(
          nM,
          { 'aria-disabled': s, htmlFor: l, 'aria-label': e },
          v.createElement('input', {
            id: l,
            type: 'checkbox',
            onChange: (c) => r(c.target.checked),
            checked: u,
            role: 'switch',
            disabled: s,
            name: e,
            onBlur: n,
            onFocus: o,
          }),
          v.createElement('span', { 'aria-hidden': 'true' }, 'False'),
          v.createElement('span', { 'aria-hidden': 'true' }, 'True'),
        )
      },
      iM = (e) => {
        let [t, r, n] = e.split('-'),
          o = new Date()
        return (
          o.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)),
          o
        )
      },
      sM = (e) => {
        let [t, r] = e.split(':'),
          n = new Date()
        return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n
      },
      lM = (e) => {
        let t = new Date(e),
          r = `000${t.getFullYear()}`.slice(-4),
          n = `0${t.getMonth() + 1}`.slice(-2),
          o = `0${t.getDate()}`.slice(-2)
        return `${r}-${n}-${o}`
      },
      uM = (e) => {
        let t = new Date(e),
          r = `0${t.getHours()}`.slice(-2),
          n = `0${t.getMinutes()}`.slice(-2)
        return `${r}:${n}`
      },
      mv = W(ut.Input)(({ readOnly: e }) => ({ opacity: e ? 0.5 : 1 })),
      cM = W.div(({ theme: e }) => ({
        flex: 1,
        display: 'flex',
        input: {
          marginLeft: 10,
          flex: 1,
          height: 32,
          '&::-webkit-calendar-picker-indicator': {
            opacity: 0.5,
            height: 12,
            filter: e.base === 'light' ? void 0 : 'invert(1)',
          },
        },
        'input:first-of-type': { marginLeft: 0, flexGrow: 4 },
        'input:last-of-type': { flexGrow: 3 },
      })),
      pM = ({
        name: e,
        value: t,
        onChange: r,
        onFocus: n,
        onBlur: o,
        argType: a,
      }) => {
        let [i, s] = me(!0),
          l = Xe(),
          u = Xe(),
          c = !!a?.table?.readonly
        He(() => {
          i !== !1 &&
            (l && l.current && (l.current.value = t ? lM(t) : ''),
            u && u.current && (u.current.value = t ? uM(t) : ''))
        }, [t])
        let d = (h) => {
            if (!h.target.value) return r()
            let g = iM(h.target.value),
              C = new Date(t)
            C.setFullYear(g.getFullYear(), g.getMonth(), g.getDate())
            let b = C.getTime()
            b && r(b), s(!!b)
          },
          y = (h) => {
            if (!h.target.value) return r()
            let g = sM(h.target.value),
              C = new Date(t)
            C.setHours(g.getHours()), C.setMinutes(g.getMinutes())
            let b = C.getTime()
            b && r(b), s(!!b)
          },
          f = tt(e)
        return v.createElement(
          cM,
          null,
          v.createElement(mv, {
            type: 'date',
            max: '9999-12-31',
            ref: l,
            id: `${f}-date`,
            name: `${f}-date`,
            readOnly: c,
            onChange: d,
            onFocus: n,
            onBlur: o,
          }),
          v.createElement(mv, {
            type: 'time',
            id: `${f}-time`,
            name: `${f}-time`,
            ref: u,
            onChange: y,
            readOnly: c,
            onFocus: n,
            onBlur: o,
          }),
          i ? null : v.createElement('div', null, 'invalid'),
        )
      },
      dM = W.label({ display: 'flex' }),
      fM = (e) => {
        let t = parseFloat(e)
        return Number.isNaN(t) ? void 0 : t
      },
      yM = W(ut.Input)(({ readOnly: e }) => ({ opacity: e ? 0.5 : 1 })),
      hM = ({
        name: e,
        value: t,
        onChange: r,
        min: n,
        max: o,
        step: a,
        onBlur: i,
        onFocus: s,
        argType: l,
      }) => {
        let [u, c] = me(typeof t == 'number' ? t : ''),
          [d, y] = me(!1),
          [f, h] = me(null),
          g = !!l?.table?.readonly,
          C = Ve(
            (_) => {
              c(_.target.value)
              let T = parseFloat(_.target.value)
              Number.isNaN(T)
                ? h(new Error(`'${_.target.value}' is not a number`))
                : (r(T), h(null))
            },
            [r, h],
          ),
          b = Ve(() => {
            c('0'), r(0), y(!0)
          }, [y]),
          E = Xe(null)
        return (
          He(() => {
            d && E.current && E.current.select()
          }, [d]),
          He(() => {
            u !== (typeof t == 'number' ? t : '') && c(t)
          }, [t]),
          t === void 0
            ? v.createElement(
                Nt,
                {
                  variant: 'outline',
                  size: 'medium',
                  id: ln(e),
                  onClick: b,
                  disabled: g,
                },
                'Set number',
              )
            : v.createElement(
                dM,
                null,
                v.createElement(yM, {
                  ref: E,
                  id: tt(e),
                  type: 'number',
                  onChange: C,
                  size: 'flex',
                  placeholder: 'Edit number...',
                  value: u,
                  valid: f ? 'error' : null,
                  autoFocus: d,
                  readOnly: g,
                  name: e,
                  min: n,
                  max: o,
                  step: a,
                  onFocus: s,
                  onBlur: i,
                }),
              )
        )
      },
      h2 = (e, t) => {
        let r = t && Object.entries(t).find(([n, o]) => o === e)
        return r ? r[0] : void 0
      },
      Il = (e, t) =>
        e && t
          ? Object.entries(t)
              .filter((r) => e.includes(r[1]))
              .map((r) => r[0])
          : [],
      m2 = (e, t) => e && t && e.map((r) => t[r]),
      mM = W.div(
        ({ isInline: e }) =>
          e
            ? {
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                label: { display: 'inline-flex', marginRight: 15 },
              }
            : { label: { display: 'flex' } },
        (e) => {
          if (e['aria-readonly'] === 'true')
            return { input: { cursor: 'not-allowed' } }
        },
      ),
      gM = W.span({ '[aria-readonly=true] &': { opacity: 0.5 } }),
      bM = W.label({
        lineHeight: '20px',
        alignItems: 'center',
        marginBottom: 8,
        '&:last-child': { marginBottom: 0 },
        input: { margin: 0, marginRight: 6 },
      }),
      gv = ({
        name: e,
        options: t,
        value: r,
        onChange: n,
        isInline: o,
        argType: a,
      }) => {
        if (!t)
          return (
            mo.warn(`Checkbox with no options: ${e}`),
            v.createElement(v.Fragment, null, '-')
          )
        let i = Il(r, t),
          [s, l] = me(i),
          u = !!a?.table?.readonly,
          c = (y) => {
            let f = y.target.value,
              h = [...s]
            h.includes(f) ? h.splice(h.indexOf(f), 1) : h.push(f),
              n(m2(h, t)),
              l(h)
          }
        He(() => {
          l(Il(r, t))
        }, [r])
        let d = tt(e)
        return v.createElement(
          mM,
          { 'aria-readonly': u, isInline: o },
          Object.keys(t).map((y, f) => {
            let h = `${d}-${f}`
            return v.createElement(
              bM,
              { key: h, htmlFor: h },
              v.createElement('input', {
                type: 'checkbox',
                disabled: u,
                id: h,
                name: h,
                value: y,
                onChange: c,
                checked: s?.includes(y),
              }),
              v.createElement(gM, null, y),
            )
          }),
        )
      },
      vM = W.div(
        ({ isInline: e }) =>
          e
            ? {
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                label: { display: 'inline-flex', marginRight: 15 },
              }
            : { label: { display: 'flex' } },
        (e) => {
          if (e['aria-readonly'] === 'true')
            return { input: { cursor: 'not-allowed' } }
        },
      ),
      EM = W.span({ '[aria-readonly=true] &': { opacity: 0.5 } }),
      xM = W.label({
        lineHeight: '20px',
        alignItems: 'center',
        marginBottom: 8,
        '&:last-child': { marginBottom: 0 },
        input: { margin: 0, marginRight: 6 },
      }),
      bv = ({
        name: e,
        options: t,
        value: r,
        onChange: n,
        isInline: o,
        argType: a,
      }) => {
        if (!t)
          return (
            mo.warn(`Radio with no options: ${e}`),
            v.createElement(v.Fragment, null, '-')
          )
        let i = h2(r, t),
          s = tt(e),
          l = !!a?.table?.readonly
        return v.createElement(
          vM,
          { 'aria-readonly': l, isInline: o },
          Object.keys(t).map((u, c) => {
            let d = `${s}-${c}`
            return v.createElement(
              xM,
              { key: d, htmlFor: d },
              v.createElement('input', {
                type: 'radio',
                id: d,
                name: s,
                disabled: l,
                value: u,
                onChange: (y) => n(t[y.currentTarget.value]),
                checked: u === i,
              }),
              v.createElement(EM, null, u),
            )
          }),
        )
      },
      wM = {
        appearance: 'none',
        border: '0 none',
        boxSizing: 'inherit',
        display: ' block',
        margin: ' 0',
        background: 'transparent',
        padding: 0,
        fontSize: 'inherit',
        position: 'relative',
      },
      g2 = W.select(wM, ({ theme: e }) => ({
        boxSizing: 'border-box',
        position: 'relative',
        padding: '6px 10px',
        width: '100%',
        color: e.input.color || 'inherit',
        background: e.input.background,
        borderRadius: e.input.borderRadius,
        boxShadow: `${e.input.border} 0 0 0 1px inset`,
        fontSize: e.typography.size.s2 - 1,
        lineHeight: '20px',
        '&:focus': {
          boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
          outline: 'none',
        },
        '&[disabled]': { cursor: 'not-allowed', opacity: 0.5 },
        '::placeholder': { color: e.textMutedColor },
        '&[multiple]': {
          overflow: 'auto',
          padding: 0,
          option: {
            display: 'block',
            padding: '6px 10px',
            marginLeft: 1,
            marginRight: 1,
          },
        },
      })),
      b2 = W.span(({ theme: e }) => ({
        display: 'inline-block',
        lineHeight: 'normal',
        overflow: 'hidden',
        position: 'relative',
        verticalAlign: 'top',
        width: '100%',
        svg: {
          position: 'absolute',
          zIndex: 1,
          pointerEvents: 'none',
          height: '12px',
          marginTop: '-6px',
          right: '12px',
          top: '50%',
          fill: e.textMutedColor,
          path: { fill: e.textMutedColor },
        },
      })),
      vv = 'Choose option...',
      SM = ({ name: e, value: t, options: r, onChange: n, argType: o }) => {
        let a = (u) => {
            n(r[u.currentTarget.value])
          },
          i = h2(t, r) || vv,
          s = tt(e),
          l = !!o?.table?.readonly
        return v.createElement(
          b2,
          null,
          v.createElement(ni, null),
          v.createElement(
            g2,
            { disabled: l, id: s, value: i, onChange: a },
            v.createElement(
              'option',
              { key: 'no-selection', disabled: !0 },
              vv,
            ),
            Object.keys(r).map((u) =>
              v.createElement('option', { key: u, value: u }, u),
            ),
          ),
        )
      },
      AM = ({ name: e, value: t, options: r, onChange: n, argType: o }) => {
        let a = (u) => {
            let c = Array.from(u.currentTarget.options)
              .filter((d) => d.selected)
              .map((d) => d.value)
            n(m2(c, r))
          },
          i = Il(t, r),
          s = tt(e),
          l = !!o?.table?.readonly
        return v.createElement(
          b2,
          null,
          v.createElement(
            g2,
            { disabled: l, id: s, multiple: !0, value: i, onChange: a },
            Object.keys(r).map((u) =>
              v.createElement('option', { key: u, value: u }, u),
            ),
          ),
        )
      },
      Ev = (e) => {
        let { name: t, options: r } = e
        return r
          ? e.isMulti
            ? v.createElement(AM, { ...e })
            : v.createElement(SM, { ...e })
          : (mo.warn(`Select with no options: ${t}`),
            v.createElement(v.Fragment, null, '-'))
      },
      TM = (e, t) =>
        Array.isArray(e)
          ? e.reduce((r, n) => ((r[t?.[n] || String(n)] = n), r), {})
          : e,
      CM = {
        check: gv,
        'inline-check': gv,
        radio: bv,
        'inline-radio': bv,
        select: Ev,
        'multi-select': Ev,
      },
      Hr = (e) => {
        let { type: t = 'select', labels: r, argType: n } = e,
          o = {
            ...e,
            argType: n,
            options: n ? TM(n.options, r) : {},
            isInline: t.includes('inline'),
            isMulti: t.includes('multi'),
          },
          a = CM[t]
        if (a) return v.createElement(a, { ...o })
        throw new Error(`Unknown options type: ${t}`)
      },
      _M = 'Error',
      OM = 'Object',
      IM = 'Array',
      kM = 'String',
      PM = 'Number',
      RM = 'Boolean',
      DM = 'Date',
      FM = 'Null',
      jM = 'Undefined',
      NM = 'Function',
      BM = 'Symbol',
      v2 = 'ADD_DELTA_TYPE',
      E2 = 'REMOVE_DELTA_TYPE',
      x2 = 'UPDATE_DELTA_TYPE',
      ql = 'value',
      LM = 'key'
    function dr(e) {
      return e !== null &&
        typeof e == 'object' &&
        !Array.isArray(e) &&
        typeof e[Symbol.iterator] == 'function'
        ? 'Iterable'
        : Object.prototype.toString.call(e).slice(8, -1)
    }
    function w2(e, t) {
      let r = dr(e),
        n = dr(t)
      return (r === 'Function' || n === 'Function') && n !== r
    }
    var Ml = class extends Ft {
      constructor(e) {
        super(e),
          (this.state = { inputRefKey: null, inputRefValue: null }),
          (this.refInputValue = this.refInputValue.bind(this)),
          (this.refInputKey = this.refInputKey.bind(this)),
          (this.onKeydown = this.onKeydown.bind(this)),
          (this.onSubmit = this.onSubmit.bind(this))
      }
      componentDidMount() {
        let { inputRefKey: e, inputRefValue: t } = this.state,
          { onlyValue: r } = this.props
        e && typeof e.focus == 'function' && e.focus(),
          r && t && typeof t.focus == 'function' && t.focus(),
          document.addEventListener('keydown', this.onKeydown)
      }
      componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeydown)
      }
      onKeydown(e) {
        e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.repeat ||
          ((e.code === 'Enter' || e.key === 'Enter') &&
            (e.preventDefault(), this.onSubmit()),
          (e.code === 'Escape' || e.key === 'Escape') &&
            (e.preventDefault(), this.props.handleCancel()))
      }
      onSubmit() {
        let {
            handleAdd: e,
            onlyValue: t,
            onSubmitValueParser: r,
            keyPath: n,
            deep: o,
          } = this.props,
          { inputRefKey: a, inputRefValue: i } = this.state,
          s = {}
        if (!t) {
          if (!a.value) return
          s.key = a.value
        }
        ;(s.newValue = r(!1, n, o, s.key, i.value)), e(s)
      }
      refInputKey(e) {
        this.state.inputRefKey = e
      }
      refInputValue(e) {
        this.state.inputRefValue = e
      }
      render() {
        let {
            handleCancel: e,
            onlyValue: t,
            addButtonElement: r,
            cancelButtonElement: n,
            inputElementGenerator: o,
            keyPath: a,
            deep: i,
          } = this.props,
          s = Ae(r, { onClick: this.onSubmit }),
          l = Ae(n, { onClick: e }),
          u = o(ql, a, i),
          c = Ae(u, { placeholder: 'Value', ref: this.refInputValue }),
          d = null
        if (!t) {
          let y = o(LM, a, i)
          d = Ae(y, { placeholder: 'Key', ref: this.refInputKey })
        }
        return v.createElement(
          'span',
          { className: 'rejt-add-value-node' },
          d,
          c,
          l,
          s,
        )
      }
    }
    Ml.defaultProps = {
      onlyValue: !1,
      addButtonElement: v.createElement('button', null, '+'),
      cancelButtonElement: v.createElement('button', null, 'c'),
    }
    var S2 = class extends Ft {
      constructor(e) {
        super(e)
        let t = [...e.keyPath, e.name]
        ;(this.state = {
          data: e.data,
          name: e.name,
          keyPath: t,
          deep: e.deep,
          nextDeep: e.deep + 1,
          collapsed: e.isCollapsed(t, e.deep, e.data),
          addFormVisible: !1,
        }),
          (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
          (this.handleRemoveItem = this.handleRemoveItem.bind(this)),
          (this.handleAddMode = this.handleAddMode.bind(this)),
          (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
          (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
          (this.handleEditValue = this.handleEditValue.bind(this)),
          (this.onChildUpdate = this.onChildUpdate.bind(this)),
          (this.renderCollapsed = this.renderCollapsed.bind(this)),
          (this.renderNotCollapsed = this.renderNotCollapsed.bind(this))
      }
      static getDerivedStateFromProps(e, t) {
        return e.data !== t.data ? { data: e.data } : null
      }
      onChildUpdate(e, t) {
        let { data: r, keyPath: n } = this.state
        ;(r[e] = t), this.setState({ data: r })
        let { onUpdate: o } = this.props,
          a = n.length
        o(n[a - 1], r)
      }
      handleAddMode() {
        this.setState({ addFormVisible: !0 })
      }
      handleCollapseMode() {
        this.setState((e) => ({ collapsed: !e.collapsed }))
      }
      handleRemoveItem(e) {
        return () => {
          let { beforeRemoveAction: t, logger: r } = this.props,
            { data: n, keyPath: o, nextDeep: a } = this.state,
            i = n[e]
          t(e, o, a, i)
            .then(() => {
              let s = { keyPath: o, deep: a, key: e, oldValue: i, type: E2 }
              n.splice(e, 1), this.setState({ data: n })
              let { onUpdate: l, onDeltaUpdate: u } = this.props
              l(o[o.length - 1], n), u(s)
            })
            .catch(r.error)
        }
      }
      handleAddValueAdd({ newValue: e }) {
        let { data: t, keyPath: r, nextDeep: n } = this.state,
          { beforeAddAction: o, logger: a } = this.props
        o(t.length, r, n, e)
          .then(() => {
            let i = [...t, e]
            this.setState({ data: i }), this.handleAddValueCancel()
            let { onUpdate: s, onDeltaUpdate: l } = this.props
            s(r[r.length - 1], i),
              l({
                type: v2,
                keyPath: r,
                deep: n,
                key: i.length - 1,
                newValue: e,
              })
          })
          .catch(a.error)
      }
      handleAddValueCancel() {
        this.setState({ addFormVisible: !1 })
      }
      handleEditValue({ key: e, value: t }) {
        return new Promise((r, n) => {
          let { beforeUpdateAction: o } = this.props,
            { data: a, keyPath: i, nextDeep: s } = this.state,
            l = a[e]
          o(e, i, s, l, t)
            .then(() => {
              ;(a[e] = t), this.setState({ data: a })
              let { onUpdate: u, onDeltaUpdate: c } = this.props
              u(i[i.length - 1], a),
                c({
                  type: x2,
                  keyPath: i,
                  deep: s,
                  key: e,
                  newValue: t,
                  oldValue: l,
                }),
                r(void 0)
            })
            .catch(n)
        })
      }
      renderCollapsed() {
        let { name: e, data: t, keyPath: r, deep: n } = this.state,
          {
            handleRemove: o,
            readOnly: a,
            getStyle: i,
            dataType: s,
            minusMenuElement: l,
          } = this.props,
          { minus: u, collapsed: c } = i(e, t, r, n, s),
          d = a(e, t, r, n, s),
          y = Ae(l, { onClick: o, className: 'rejt-minus-menu', style: u })
        return v.createElement(
          'span',
          { className: 'rejt-collapsed' },
          v.createElement(
            'span',
            {
              className: 'rejt-collapsed-text',
              style: c,
              onClick: this.handleCollapseMode,
            },
            '[...] ',
            t.length,
            ' ',
            t.length === 1 ? 'item' : 'items',
          ),
          !d && y,
        )
      }
      renderNotCollapsed() {
        let {
            name: e,
            data: t,
            keyPath: r,
            deep: n,
            addFormVisible: o,
            nextDeep: a,
          } = this.state,
          {
            isCollapsed: i,
            handleRemove: s,
            onDeltaUpdate: l,
            readOnly: u,
            getStyle: c,
            dataType: d,
            addButtonElement: y,
            cancelButtonElement: f,
            editButtonElement: h,
            inputElementGenerator: g,
            textareaElementGenerator: C,
            minusMenuElement: b,
            plusMenuElement: E,
            beforeRemoveAction: _,
            beforeAddAction: T,
            beforeUpdateAction: O,
            logger: I,
            onSubmitValueParser: D,
          } = this.props,
          {
            minus: R,
            plus: M,
            delimiter: z,
            ul: Y,
            addForm: Z,
          } = c(e, t, r, n, d),
          V = u(e, t, r, n, d),
          P = Ae(E, {
            onClick: this.handleAddMode,
            className: 'rejt-plus-menu',
            style: M,
          }),
          q = Ae(b, { onClick: s, className: 'rejt-minus-menu', style: R })
        return v.createElement(
          'span',
          { className: 'rejt-not-collapsed' },
          v.createElement(
            'span',
            { className: 'rejt-not-collapsed-delimiter', style: z },
            '[',
          ),
          !o && P,
          v.createElement(
            'ul',
            { className: 'rejt-not-collapsed-list', style: Y },
            t.map((J, X) =>
              v.createElement(Ia, {
                key: X,
                name: X.toString(),
                data: J,
                keyPath: r,
                deep: a,
                isCollapsed: i,
                handleRemove: this.handleRemoveItem(X),
                handleUpdateValue: this.handleEditValue,
                onUpdate: this.onChildUpdate,
                onDeltaUpdate: l,
                readOnly: u,
                getStyle: c,
                addButtonElement: y,
                cancelButtonElement: f,
                editButtonElement: h,
                inputElementGenerator: g,
                textareaElementGenerator: C,
                minusMenuElement: b,
                plusMenuElement: E,
                beforeRemoveAction: _,
                beforeAddAction: T,
                beforeUpdateAction: O,
                logger: I,
                onSubmitValueParser: D,
              }),
            ),
          ),
          !V &&
            o &&
            v.createElement(
              'div',
              { className: 'rejt-add-form', style: Z },
              v.createElement(Ml, {
                handleAdd: this.handleAddValueAdd,
                handleCancel: this.handleAddValueCancel,
                onlyValue: !0,
                addButtonElement: y,
                cancelButtonElement: f,
                inputElementGenerator: g,
                keyPath: r,
                deep: n,
                onSubmitValueParser: D,
              }),
            ),
          v.createElement(
            'span',
            { className: 'rejt-not-collapsed-delimiter', style: z },
            ']',
          ),
          !V && q,
        )
      }
      render() {
        let {
            name: e,
            collapsed: t,
            data: r,
            keyPath: n,
            deep: o,
          } = this.state,
          { dataType: a, getStyle: i } = this.props,
          s = t ? this.renderCollapsed() : this.renderNotCollapsed(),
          l = i(e, r, n, o, a)
        return v.createElement(
          'div',
          { className: 'rejt-array-node' },
          v.createElement(
            'span',
            { onClick: this.handleCollapseMode },
            v.createElement(
              'span',
              { className: 'rejt-name', style: l.name },
              e,
              ' :',
              ' ',
            ),
          ),
          s,
        )
      }
    }
    S2.defaultProps = {
      keyPath: [],
      deep: 0,
      minusMenuElement: v.createElement('span', null, ' - '),
      plusMenuElement: v.createElement('span', null, ' + '),
    }
    var A2 = class extends Ft {
      constructor(e) {
        super(e)
        let t = [...e.keyPath, e.name]
        ;(this.state = {
          value: e.value,
          name: e.name,
          keyPath: t,
          deep: e.deep,
          editEnabled: !1,
          inputRef: null,
        }),
          (this.handleEditMode = this.handleEditMode.bind(this)),
          (this.refInput = this.refInput.bind(this)),
          (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
          (this.handleEdit = this.handleEdit.bind(this)),
          (this.onKeydown = this.onKeydown.bind(this))
      }
      static getDerivedStateFromProps(e, t) {
        return e.value !== t.value ? { value: e.value } : null
      }
      componentDidUpdate() {
        let {
            editEnabled: e,
            inputRef: t,
            name: r,
            value: n,
            keyPath: o,
            deep: a,
          } = this.state,
          { readOnly: i, dataType: s } = this.props,
          l = i(r, n, o, a, s)
        e && !l && typeof t.focus == 'function' && t.focus()
      }
      componentDidMount() {
        document.addEventListener('keydown', this.onKeydown)
      }
      componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeydown)
      }
      onKeydown(e) {
        e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.repeat ||
          ((e.code === 'Enter' || e.key === 'Enter') &&
            (e.preventDefault(), this.handleEdit()),
          (e.code === 'Escape' || e.key === 'Escape') &&
            (e.preventDefault(), this.handleCancelEdit()))
      }
      handleEdit() {
        let {
            handleUpdateValue: e,
            originalValue: t,
            logger: r,
            onSubmitValueParser: n,
            keyPath: o,
          } = this.props,
          { inputRef: a, name: i, deep: s } = this.state
        if (!a) return
        let l = n(!0, o, s, i, a.value)
        e({ value: l, key: i })
          .then(() => {
            w2(t, l) || this.handleCancelEdit()
          })
          .catch(r.error)
      }
      handleEditMode() {
        this.setState({ editEnabled: !0 })
      }
      refInput(e) {
        this.state.inputRef = e
      }
      handleCancelEdit() {
        this.setState({ editEnabled: !1 })
      }
      render() {
        let {
            name: e,
            value: t,
            editEnabled: r,
            keyPath: n,
            deep: o,
          } = this.state,
          {
            handleRemove: a,
            originalValue: i,
            readOnly: s,
            dataType: l,
            getStyle: u,
            editButtonElement: c,
            cancelButtonElement: d,
            textareaElementGenerator: y,
            minusMenuElement: f,
            keyPath: h,
          } = this.props,
          g = u(e, i, n, o, l),
          C = null,
          b = null,
          E = s(e, i, n, o, l)
        if (r && !E) {
          let _ = y(ql, h, o, e, i, l),
            T = Ae(c, { onClick: this.handleEdit }),
            O = Ae(d, { onClick: this.handleCancelEdit }),
            I = Ae(_, { ref: this.refInput, defaultValue: i })
          ;(C = v.createElement(
            'span',
            { className: 'rejt-edit-form', style: g.editForm },
            I,
            ' ',
            O,
            T,
          )),
            (b = null)
        } else {
          C = v.createElement(
            'span',
            {
              className: 'rejt-value',
              style: g.value,
              onClick: E ? null : this.handleEditMode,
            },
            t,
          )
          let _ = Ae(f, {
            onClick: a,
            className: 'rejt-minus-menu',
            style: g.minus,
          })
          b = E ? null : _
        }
        return v.createElement(
          'li',
          { className: 'rejt-function-value-node', style: g.li },
          v.createElement(
            'span',
            { className: 'rejt-name', style: g.name },
            e,
            ' :',
            ' ',
          ),
          C,
          b,
        )
      }
    }
    A2.defaultProps = {
      keyPath: [],
      deep: 0,
      handleUpdateValue: () => {},
      editButtonElement: v.createElement('button', null, 'e'),
      cancelButtonElement: v.createElement('button', null, 'c'),
      minusMenuElement: v.createElement('span', null, ' - '),
    }
    var Ia = class extends Ft {
      constructor(e) {
        super(e),
          (this.state = {
            data: e.data,
            name: e.name,
            keyPath: e.keyPath,
            deep: e.deep,
          })
      }
      static getDerivedStateFromProps(e, t) {
        return e.data !== t.data ? { data: e.data } : null
      }
      render() {
        let { data: e, name: t, keyPath: r, deep: n } = this.state,
          {
            isCollapsed: o,
            handleRemove: a,
            handleUpdateValue: i,
            onUpdate: s,
            onDeltaUpdate: l,
            readOnly: u,
            getStyle: c,
            addButtonElement: d,
            cancelButtonElement: y,
            editButtonElement: f,
            inputElementGenerator: h,
            textareaElementGenerator: g,
            minusMenuElement: C,
            plusMenuElement: b,
            beforeRemoveAction: E,
            beforeAddAction: _,
            beforeUpdateAction: T,
            logger: O,
            onSubmitValueParser: I,
          } = this.props,
          D = () => !0,
          R = dr(e)
        switch (R) {
          case _M:
            return v.createElement(kl, {
              data: e,
              name: t,
              isCollapsed: o,
              keyPath: r,
              deep: n,
              handleRemove: a,
              onUpdate: s,
              onDeltaUpdate: l,
              readOnly: D,
              dataType: R,
              getStyle: c,
              addButtonElement: d,
              cancelButtonElement: y,
              editButtonElement: f,
              inputElementGenerator: h,
              textareaElementGenerator: g,
              minusMenuElement: C,
              plusMenuElement: b,
              beforeRemoveAction: E,
              beforeAddAction: _,
              beforeUpdateAction: T,
              logger: O,
              onSubmitValueParser: I,
            })
          case OM:
            return v.createElement(kl, {
              data: e,
              name: t,
              isCollapsed: o,
              keyPath: r,
              deep: n,
              handleRemove: a,
              onUpdate: s,
              onDeltaUpdate: l,
              readOnly: u,
              dataType: R,
              getStyle: c,
              addButtonElement: d,
              cancelButtonElement: y,
              editButtonElement: f,
              inputElementGenerator: h,
              textareaElementGenerator: g,
              minusMenuElement: C,
              plusMenuElement: b,
              beforeRemoveAction: E,
              beforeAddAction: _,
              beforeUpdateAction: T,
              logger: O,
              onSubmitValueParser: I,
            })
          case IM:
            return v.createElement(S2, {
              data: e,
              name: t,
              isCollapsed: o,
              keyPath: r,
              deep: n,
              handleRemove: a,
              onUpdate: s,
              onDeltaUpdate: l,
              readOnly: u,
              dataType: R,
              getStyle: c,
              addButtonElement: d,
              cancelButtonElement: y,
              editButtonElement: f,
              inputElementGenerator: h,
              textareaElementGenerator: g,
              minusMenuElement: C,
              plusMenuElement: b,
              beforeRemoveAction: E,
              beforeAddAction: _,
              beforeUpdateAction: T,
              logger: O,
              onSubmitValueParser: I,
            })
          case kM:
            return v.createElement(Wt, {
              name: t,
              value: `"${e}"`,
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: a,
              handleUpdateValue: i,
              readOnly: u,
              dataType: R,
              getStyle: c,
              cancelButtonElement: y,
              editButtonElement: f,
              inputElementGenerator: h,
              minusMenuElement: C,
              logger: O,
              onSubmitValueParser: I,
            })
          case PM:
            return v.createElement(Wt, {
              name: t,
              value: e,
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: a,
              handleUpdateValue: i,
              readOnly: u,
              dataType: R,
              getStyle: c,
              cancelButtonElement: y,
              editButtonElement: f,
              inputElementGenerator: h,
              minusMenuElement: C,
              logger: O,
              onSubmitValueParser: I,
            })
          case RM:
            return v.createElement(Wt, {
              name: t,
              value: e ? 'true' : 'false',
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: a,
              handleUpdateValue: i,
              readOnly: u,
              dataType: R,
              getStyle: c,
              cancelButtonElement: y,
              editButtonElement: f,
              inputElementGenerator: h,
              minusMenuElement: C,
              logger: O,
              onSubmitValueParser: I,
            })
          case DM:
            return v.createElement(Wt, {
              name: t,
              value: e.toISOString(),
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: a,
              handleUpdateValue: i,
              readOnly: D,
              dataType: R,
              getStyle: c,
              cancelButtonElement: y,
              editButtonElement: f,
              inputElementGenerator: h,
              minusMenuElement: C,
              logger: O,
              onSubmitValueParser: I,
            })
          case FM:
            return v.createElement(Wt, {
              name: t,
              value: 'null',
              originalValue: 'null',
              keyPath: r,
              deep: n,
              handleRemove: a,
              handleUpdateValue: i,
              readOnly: u,
              dataType: R,
              getStyle: c,
              cancelButtonElement: y,
              editButtonElement: f,
              inputElementGenerator: h,
              minusMenuElement: C,
              logger: O,
              onSubmitValueParser: I,
            })
          case jM:
            return v.createElement(Wt, {
              name: t,
              value: 'undefined',
              originalValue: 'undefined',
              keyPath: r,
              deep: n,
              handleRemove: a,
              handleUpdateValue: i,
              readOnly: u,
              dataType: R,
              getStyle: c,
              cancelButtonElement: y,
              editButtonElement: f,
              inputElementGenerator: h,
              minusMenuElement: C,
              logger: O,
              onSubmitValueParser: I,
            })
          case NM:
            return v.createElement(A2, {
              name: t,
              value: e.toString(),
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: a,
              handleUpdateValue: i,
              readOnly: u,
              dataType: R,
              getStyle: c,
              cancelButtonElement: y,
              editButtonElement: f,
              textareaElementGenerator: g,
              minusMenuElement: C,
              logger: O,
              onSubmitValueParser: I,
            })
          case BM:
            return v.createElement(Wt, {
              name: t,
              value: e.toString(),
              originalValue: e,
              keyPath: r,
              deep: n,
              handleRemove: a,
              handleUpdateValue: i,
              readOnly: D,
              dataType: R,
              getStyle: c,
              cancelButtonElement: y,
              editButtonElement: f,
              inputElementGenerator: h,
              minusMenuElement: C,
              logger: O,
              onSubmitValueParser: I,
            })
          default:
            return null
        }
      }
    }
    Ia.defaultProps = { keyPath: [], deep: 0 }
    var kl = class extends Ft {
      constructor(e) {
        super(e)
        let t = e.deep === -1 ? [] : [...e.keyPath, e.name]
        ;(this.state = {
          name: e.name,
          data: e.data,
          keyPath: t,
          deep: e.deep,
          nextDeep: e.deep + 1,
          collapsed: e.isCollapsed(t, e.deep, e.data),
          addFormVisible: !1,
        }),
          (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
          (this.handleRemoveValue = this.handleRemoveValue.bind(this)),
          (this.handleAddMode = this.handleAddMode.bind(this)),
          (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
          (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
          (this.handleEditValue = this.handleEditValue.bind(this)),
          (this.onChildUpdate = this.onChildUpdate.bind(this)),
          (this.renderCollapsed = this.renderCollapsed.bind(this)),
          (this.renderNotCollapsed = this.renderNotCollapsed.bind(this))
      }
      static getDerivedStateFromProps(e, t) {
        return e.data !== t.data ? { data: e.data } : null
      }
      onChildUpdate(e, t) {
        let { data: r, keyPath: n } = this.state
        ;(r[e] = t), this.setState({ data: r })
        let { onUpdate: o } = this.props,
          a = n.length
        o(n[a - 1], r)
      }
      handleAddMode() {
        this.setState({ addFormVisible: !0 })
      }
      handleAddValueCancel() {
        this.setState({ addFormVisible: !1 })
      }
      handleAddValueAdd({ key: e, newValue: t }) {
        let { data: r, keyPath: n, nextDeep: o } = this.state,
          { beforeAddAction: a, logger: i } = this.props
        a(e, n, o, t)
          .then(() => {
            ;(r[e] = t), this.setState({ data: r }), this.handleAddValueCancel()
            let { onUpdate: s, onDeltaUpdate: l } = this.props
            s(n[n.length - 1], r),
              l({ type: v2, keyPath: n, deep: o, key: e, newValue: t })
          })
          .catch(i.error)
      }
      handleRemoveValue(e) {
        return () => {
          let { beforeRemoveAction: t, logger: r } = this.props,
            { data: n, keyPath: o, nextDeep: a } = this.state,
            i = n[e]
          t(e, o, a, i)
            .then(() => {
              let s = { keyPath: o, deep: a, key: e, oldValue: i, type: E2 }
              delete n[e], this.setState({ data: n })
              let { onUpdate: l, onDeltaUpdate: u } = this.props
              l(o[o.length - 1], n), u(s)
            })
            .catch(r.error)
        }
      }
      handleCollapseMode() {
        this.setState((e) => ({ collapsed: !e.collapsed }))
      }
      handleEditValue({ key: e, value: t }) {
        return new Promise((r, n) => {
          let { beforeUpdateAction: o } = this.props,
            { data: a, keyPath: i, nextDeep: s } = this.state,
            l = a[e]
          o(e, i, s, l, t)
            .then(() => {
              ;(a[e] = t), this.setState({ data: a })
              let { onUpdate: u, onDeltaUpdate: c } = this.props
              u(i[i.length - 1], a),
                c({
                  type: x2,
                  keyPath: i,
                  deep: s,
                  key: e,
                  newValue: t,
                  oldValue: l,
                }),
                r()
            })
            .catch(n)
        })
      }
      renderCollapsed() {
        let { name: e, keyPath: t, deep: r, data: n } = this.state,
          {
            handleRemove: o,
            readOnly: a,
            dataType: i,
            getStyle: s,
            minusMenuElement: l,
          } = this.props,
          { minus: u, collapsed: c } = s(e, n, t, r, i),
          d = Object.getOwnPropertyNames(n),
          y = a(e, n, t, r, i),
          f = Ae(l, { onClick: o, className: 'rejt-minus-menu', style: u })
        return v.createElement(
          'span',
          { className: 'rejt-collapsed' },
          v.createElement(
            'span',
            {
              className: 'rejt-collapsed-text',
              style: c,
              onClick: this.handleCollapseMode,
            },
            '{...}',
            ' ',
            d.length,
            ' ',
            d.length === 1 ? 'key' : 'keys',
          ),
          !y && f,
        )
      }
      renderNotCollapsed() {
        let {
            name: e,
            data: t,
            keyPath: r,
            deep: n,
            nextDeep: o,
            addFormVisible: a,
          } = this.state,
          {
            isCollapsed: i,
            handleRemove: s,
            onDeltaUpdate: l,
            readOnly: u,
            getStyle: c,
            dataType: d,
            addButtonElement: y,
            cancelButtonElement: f,
            editButtonElement: h,
            inputElementGenerator: g,
            textareaElementGenerator: C,
            minusMenuElement: b,
            plusMenuElement: E,
            beforeRemoveAction: _,
            beforeAddAction: T,
            beforeUpdateAction: O,
            logger: I,
            onSubmitValueParser: D,
          } = this.props,
          {
            minus: R,
            plus: M,
            addForm: z,
            ul: Y,
            delimiter: Z,
          } = c(e, t, r, n, d),
          V = Object.getOwnPropertyNames(t),
          P = u(e, t, r, n, d),
          q = Ae(E, {
            onClick: this.handleAddMode,
            className: 'rejt-plus-menu',
            style: M,
          }),
          J = Ae(b, { onClick: s, className: 'rejt-minus-menu', style: R }),
          X = V.map((te) =>
            v.createElement(Ia, {
              key: te,
              name: te,
              data: t[te],
              keyPath: r,
              deep: o,
              isCollapsed: i,
              handleRemove: this.handleRemoveValue(te),
              handleUpdateValue: this.handleEditValue,
              onUpdate: this.onChildUpdate,
              onDeltaUpdate: l,
              readOnly: u,
              getStyle: c,
              addButtonElement: y,
              cancelButtonElement: f,
              editButtonElement: h,
              inputElementGenerator: g,
              textareaElementGenerator: C,
              minusMenuElement: b,
              plusMenuElement: E,
              beforeRemoveAction: _,
              beforeAddAction: T,
              beforeUpdateAction: O,
              logger: I,
              onSubmitValueParser: D,
            }),
          )
        return v.createElement(
          'span',
          { className: 'rejt-not-collapsed' },
          v.createElement(
            'span',
            { className: 'rejt-not-collapsed-delimiter', style: Z },
            '{',
          ),
          !P && q,
          v.createElement(
            'ul',
            { className: 'rejt-not-collapsed-list', style: Y },
            X,
          ),
          !P &&
            a &&
            v.createElement(
              'div',
              { className: 'rejt-add-form', style: z },
              v.createElement(Ml, {
                handleAdd: this.handleAddValueAdd,
                handleCancel: this.handleAddValueCancel,
                addButtonElement: y,
                cancelButtonElement: f,
                inputElementGenerator: g,
                keyPath: r,
                deep: n,
                onSubmitValueParser: D,
              }),
            ),
          v.createElement(
            'span',
            { className: 'rejt-not-collapsed-delimiter', style: Z },
            '}',
          ),
          !P && J,
        )
      }
      render() {
        let {
            name: e,
            collapsed: t,
            data: r,
            keyPath: n,
            deep: o,
          } = this.state,
          { getStyle: a, dataType: i } = this.props,
          s = t ? this.renderCollapsed() : this.renderNotCollapsed(),
          l = a(e, r, n, o, i)
        return v.createElement(
          'div',
          { className: 'rejt-object-node' },
          v.createElement(
            'span',
            { onClick: this.handleCollapseMode },
            v.createElement(
              'span',
              { className: 'rejt-name', style: l.name },
              e,
              ' :',
              ' ',
            ),
          ),
          s,
        )
      }
    }
    kl.defaultProps = {
      keyPath: [],
      deep: 0,
      minusMenuElement: v.createElement('span', null, ' - '),
      plusMenuElement: v.createElement('span', null, ' + '),
    }
    var Wt = class extends Ft {
      constructor(e) {
        super(e)
        let t = [...e.keyPath, e.name]
        ;(this.state = {
          value: e.value,
          name: e.name,
          keyPath: t,
          deep: e.deep,
          editEnabled: !1,
          inputRef: null,
        }),
          (this.handleEditMode = this.handleEditMode.bind(this)),
          (this.refInput = this.refInput.bind(this)),
          (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
          (this.handleEdit = this.handleEdit.bind(this)),
          (this.onKeydown = this.onKeydown.bind(this))
      }
      static getDerivedStateFromProps(e, t) {
        return e.value !== t.value ? { value: e.value } : null
      }
      componentDidUpdate() {
        let {
            editEnabled: e,
            inputRef: t,
            name: r,
            value: n,
            keyPath: o,
            deep: a,
          } = this.state,
          { readOnly: i, dataType: s } = this.props,
          l = i(r, n, o, a, s)
        e && !l && typeof t.focus == 'function' && t.focus()
      }
      componentDidMount() {
        document.addEventListener('keydown', this.onKeydown)
      }
      componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeydown)
      }
      onKeydown(e) {
        e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.repeat ||
          ((e.code === 'Enter' || e.key === 'Enter') &&
            (e.preventDefault(), this.handleEdit()),
          (e.code === 'Escape' || e.key === 'Escape') &&
            (e.preventDefault(), this.handleCancelEdit()))
      }
      handleEdit() {
        let {
            handleUpdateValue: e,
            originalValue: t,
            logger: r,
            onSubmitValueParser: n,
            keyPath: o,
          } = this.props,
          { inputRef: a, name: i, deep: s } = this.state
        if (!a) return
        let l = n(!0, o, s, i, a.value)
        e({ value: l, key: i })
          .then(() => {
            w2(t, l) || this.handleCancelEdit()
          })
          .catch(r.error)
      }
      handleEditMode() {
        this.setState({ editEnabled: !0 })
      }
      refInput(e) {
        this.state.inputRef = e
      }
      handleCancelEdit() {
        this.setState({ editEnabled: !1 })
      }
      render() {
        let {
            name: e,
            value: t,
            editEnabled: r,
            keyPath: n,
            deep: o,
          } = this.state,
          {
            handleRemove: a,
            originalValue: i,
            readOnly: s,
            dataType: l,
            getStyle: u,
            editButtonElement: c,
            cancelButtonElement: d,
            inputElementGenerator: y,
            minusMenuElement: f,
            keyPath: h,
          } = this.props,
          g = u(e, i, n, o, l),
          C = s(e, i, n, o, l),
          b = r && !C,
          E = y(ql, h, o, e, i, l),
          _ = Ae(c, { onClick: this.handleEdit }),
          T = Ae(d, { onClick: this.handleCancelEdit }),
          O = Ae(E, { ref: this.refInput, defaultValue: JSON.stringify(i) }),
          I = Ae(f, {
            onClick: a,
            className: 'rejt-minus-menu',
            style: g.minus,
          })
        return v.createElement(
          'li',
          { className: 'rejt-value-node', style: g.li },
          v.createElement(
            'span',
            { className: 'rejt-name', style: g.name },
            e,
            ' : ',
          ),
          b
            ? v.createElement(
                'span',
                { className: 'rejt-edit-form', style: g.editForm },
                O,
                ' ',
                T,
                _,
              )
            : v.createElement(
                'span',
                {
                  className: 'rejt-value',
                  style: g.value,
                  onClick: C ? null : this.handleEditMode,
                },
                String(t),
              ),
          !C && !b && I,
        )
      }
    }
    Wt.defaultProps = {
      keyPath: [],
      deep: 0,
      handleUpdateValue: () => Promise.resolve(),
      editButtonElement: v.createElement('button', null, 'e'),
      cancelButtonElement: v.createElement('button', null, 'c'),
      minusMenuElement: v.createElement('span', null, ' - '),
    }
    function qM(e) {
      let t = e
      if (t.indexOf('function') === 0) return (0, eval)(`(${t})`)
      try {
        t = JSON.parse(e)
      } catch {}
      return t
    }
    var MM = {
        minus: { color: 'red' },
        plus: { color: 'green' },
        collapsed: { color: 'grey' },
        delimiter: {},
        ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
        name: { color: '#2287CD' },
        addForm: {},
      },
      UM = {
        minus: { color: 'red' },
        plus: { color: 'green' },
        collapsed: { color: 'grey' },
        delimiter: {},
        ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
        name: { color: '#2287CD' },
        addForm: {},
      },
      $M = {
        minus: { color: 'red' },
        editForm: {},
        value: { color: '#7bba3d' },
        li: { minHeight: '22px', lineHeight: '22px', outline: '0px' },
        name: { color: '#2287CD' },
      },
      T2 = class extends Ft {
        constructor(e) {
          super(e),
            (this.state = { data: e.data, rootName: e.rootName }),
            (this.onUpdate = this.onUpdate.bind(this)),
            (this.removeRoot = this.removeRoot.bind(this))
        }
        static getDerivedStateFromProps(e, t) {
          return e.data !== t.data || e.rootName !== t.rootName
            ? { data: e.data, rootName: e.rootName }
            : null
        }
        onUpdate(e, t) {
          this.setState({ data: t }), this.props.onFullyUpdate(t)
        }
        removeRoot() {
          this.onUpdate(null, null)
        }
        render() {
          let { data: e, rootName: t } = this.state,
            {
              isCollapsed: r,
              onDeltaUpdate: n,
              readOnly: o,
              getStyle: a,
              addButtonElement: i,
              cancelButtonElement: s,
              editButtonElement: l,
              inputElement: u,
              textareaElement: c,
              minusMenuElement: d,
              plusMenuElement: y,
              beforeRemoveAction: f,
              beforeAddAction: h,
              beforeUpdateAction: g,
              logger: C,
              onSubmitValueParser: b,
              fallback: E = null,
            } = this.props,
            _ = dr(e),
            T = o
          dr(o) === 'Boolean' && (T = () => o)
          let O = u
          u && dr(u) !== 'Function' && (O = () => u)
          let I = c
          return (
            c && dr(c) !== 'Function' && (I = () => c),
            _ === 'Object' || _ === 'Array'
              ? v.createElement(
                  'div',
                  { className: 'rejt-tree' },
                  v.createElement(Ia, {
                    data: e,
                    name: t,
                    deep: -1,
                    isCollapsed: r,
                    onUpdate: this.onUpdate,
                    onDeltaUpdate: n,
                    readOnly: T,
                    getStyle: a,
                    addButtonElement: i,
                    cancelButtonElement: s,
                    editButtonElement: l,
                    inputElementGenerator: O,
                    textareaElementGenerator: I,
                    minusMenuElement: d,
                    plusMenuElement: y,
                    handleRemove: this.removeRoot,
                    beforeRemoveAction: f,
                    beforeAddAction: h,
                    beforeUpdateAction: g,
                    logger: C,
                    onSubmitValueParser: b,
                  }),
                )
              : E
          )
        }
      }
    T2.defaultProps = {
      rootName: 'root',
      isCollapsed: (e, t) => t !== -1,
      getStyle: (e, t, r, n, o) => {
        switch (o) {
          case 'Object':
          case 'Error':
            return MM
          case 'Array':
            return UM
          default:
            return $M
        }
      },
      readOnly: () => !1,
      onFullyUpdate: () => {},
      onDeltaUpdate: () => {},
      beforeRemoveAction: () => Promise.resolve(),
      beforeAddAction: () => Promise.resolve(),
      beforeUpdateAction: () => Promise.resolve(),
      logger: { error: () => {} },
      onSubmitValueParser: (e, t, r, n, o) => qM(o),
      inputElement: () => v.createElement('input', null),
      textareaElement: () => v.createElement('textarea', null),
      fallback: null,
    }
    var { window: zM } = ct,
      VM = W.div(({ theme: e }) => ({
        position: 'relative',
        display: 'flex',
        '&[aria-readonly="true"]': { opacity: 0.5 },
        '.rejt-tree': { marginLeft: '1rem', fontSize: '13px' },
        '.rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed':
          { '& > svg': { opacity: 0, transition: 'opacity 0.2s' } },
        '.rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed':
          { '& > svg': { opacity: 1 } },
        '.rejt-edit-form button': { display: 'none' },
        '.rejt-add-form': { marginLeft: 10 },
        '.rejt-add-value-node': {
          display: 'inline-flex',
          alignItems: 'center',
        },
        '.rejt-name': { lineHeight: '22px' },
        '.rejt-not-collapsed-delimiter': { lineHeight: '22px' },
        '.rejt-plus-menu': { marginLeft: 5 },
        '.rejt-object-node > span > *, .rejt-array-node > span > *': {
          position: 'relative',
          zIndex: 2,
        },
        '.rejt-object-node, .rejt-array-node': { position: 'relative' },
        '.rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before':
          {
            content: '""',
            position: 'absolute',
            top: 0,
            display: 'block',
            width: '100%',
            marginLeft: '-1rem',
            padding: '0 4px 0 1rem',
            height: 22,
          },
        '.rejt-collapsed::before, .rejt-not-collapsed::before': {
          zIndex: 1,
          background: 'transparent',
          borderRadius: 4,
          transition: 'background 0.2s',
          pointerEvents: 'none',
          opacity: 0.1,
        },
        '.rejt-object-node:hover, .rejt-array-node:hover': {
          '& > .rejt-collapsed::before, & > .rejt-not-collapsed::before': {
            background: e.color.secondary,
          },
        },
        '.rejt-collapsed::after, .rejt-not-collapsed::after': {
          content: '""',
          position: 'absolute',
          display: 'inline-block',
          pointerEvents: 'none',
          width: 0,
          height: 0,
        },
        '.rejt-collapsed::after': {
          left: -8,
          top: 8,
          borderTop: '3px solid transparent',
          borderBottom: '3px solid transparent',
          borderLeft: '3px solid rgba(153,153,153,0.6)',
        },
        '.rejt-not-collapsed::after': {
          left: -10,
          top: 10,
          borderTop: '3px solid rgba(153,153,153,0.6)',
          borderLeft: '3px solid transparent',
          borderRight: '3px solid transparent',
        },
        '.rejt-value': {
          display: 'inline-block',
          border: '1px solid transparent',
          borderRadius: 4,
          margin: '1px 0',
          padding: '0 4px',
          cursor: 'text',
          color: e.color.defaultText,
        },
        '.rejt-value-node:hover > .rejt-value': {
          background: e.color.lighter,
          borderColor: e.appBorderColor,
        },
      })),
      vl = W.button(({ theme: e, primary: t }) => ({
        border: 0,
        height: 20,
        margin: 1,
        borderRadius: 4,
        background: t ? e.color.secondary : 'transparent',
        color: t ? e.color.lightest : e.color.dark,
        fontWeight: t ? 'bold' : 'normal',
        cursor: 'pointer',
        order: t ? 'initial' : 9,
      })),
      HM = W(ri)(({ theme: e, disabled: t }) => ({
        display: 'inline-block',
        verticalAlign: 'middle',
        width: 15,
        height: 15,
        padding: 3,
        marginLeft: 5,
        cursor: t ? 'not-allowed' : 'pointer',
        color: e.textMutedColor,
        '&:hover': t ? {} : { color: e.color.ancillary },
        'svg + &': { marginLeft: 0 },
      })),
      JM = W(qu)(({ theme: e, disabled: t }) => ({
        display: 'inline-block',
        verticalAlign: 'middle',
        width: 15,
        height: 15,
        padding: 3,
        marginLeft: 5,
        cursor: t ? 'not-allowed' : 'pointer',
        color: e.textMutedColor,
        '&:hover': t ? {} : { color: e.color.negative },
        'svg + &': { marginLeft: 0 },
      })),
      xv = W.input(({ theme: e, placeholder: t }) => ({
        outline: 0,
        margin: t ? 1 : '1px 0',
        padding: '3px 4px',
        color: e.color.defaultText,
        background: e.background.app,
        border: `1px solid ${e.appBorderColor}`,
        borderRadius: 4,
        lineHeight: '14px',
        width: t === 'Key' ? 80 : 120,
        '&:focus': { border: `1px solid ${e.color.secondary}` },
      })),
      GM = W(yt)(({ theme: e }) => ({
        position: 'absolute',
        zIndex: 2,
        top: 2,
        right: 2,
        height: 21,
        padding: '0 3px',
        background: e.background.bar,
        border: `1px solid ${e.appBorderColor}`,
        borderRadius: 3,
        color: e.textMutedColor,
        fontSize: '9px',
        fontWeight: 'bold',
        textDecoration: 'none',
        span: { marginLeft: 3, marginTop: 1 },
      })),
      WM = W(ut.Textarea)(({ theme: e }) => ({
        flex: 1,
        padding: '7px 6px',
        fontFamily: e.typography.fonts.mono,
        fontSize: '12px',
        lineHeight: '18px',
        '&::placeholder': {
          fontFamily: e.typography.fonts.base,
          fontSize: '13px',
        },
        '&:placeholder-shown': { padding: '7px 10px' },
      })),
      KM = {
        bubbles: !0,
        cancelable: !0,
        key: 'Enter',
        code: 'Enter',
        keyCode: 13,
      },
      YM = (e) => {
        e.currentTarget.dispatchEvent(new zM.KeyboardEvent('keydown', KM))
      },
      XM = (e) => {
        e.currentTarget.select()
      },
      QM = (e) => () => ({
        name: { color: e.color.secondary },
        collapsed: { color: e.color.dark },
        ul: { listStyle: 'none', margin: '0 0 0 1rem', padding: 0 },
        li: { outline: 0 },
      }),
      wv = ({ name: e, value: t, onChange: r, argType: n }) => {
        let o = ei(),
          a = jt(() => t && (0, Pv.default)(t), [t]),
          i = a != null,
          [s, l] = me(!i),
          [u, c] = me(null),
          d = !!n?.table?.readonly,
          y = Ve(
            (_) => {
              try {
                _ && r(JSON.parse(_)), c(void 0)
              } catch (T) {
                c(T)
              }
            },
            [r],
          ),
          [f, h] = me(!1),
          g = Ve(() => {
            r({}), h(!0)
          }, [h]),
          C = Xe(null)
        if (
          (He(() => {
            f && C.current && C.current.select()
          }, [f]),
          !i)
        )
          return v.createElement(
            Nt,
            { disabled: d, id: ln(e), onClick: g },
            'Set object',
          )
        let b = v.createElement(WM, {
            ref: C,
            id: tt(e),
            name: e,
            defaultValue: t === null ? '' : JSON.stringify(t, null, 2),
            onBlur: (_) => y(_.target.value),
            placeholder: 'Edit JSON string...',
            autoFocus: f,
            valid: u ? 'error' : null,
            readOnly: d,
          }),
          E =
            Array.isArray(t) ||
            (typeof t == 'object' && t?.constructor === Object)
        return v.createElement(
          VM,
          { 'aria-readonly': d },
          E &&
            v.createElement(
              GM,
              {
                onClick: (_) => {
                  _.preventDefault(), l((T) => !T)
                },
              },
              s ? v.createElement(ju, null) : v.createElement(Nu, null),
              v.createElement('span', null, 'RAW'),
            ),
          s
            ? b
            : v.createElement(T2, {
                readOnly: d || !E,
                isCollapsed: E ? void 0 : () => !0,
                data: a,
                rootName: e,
                onFullyUpdate: r,
                getStyle: QM(o),
                cancelButtonElement: v.createElement(
                  vl,
                  { type: 'button' },
                  'Cancel',
                ),
                editButtonElement: v.createElement(
                  vl,
                  { type: 'submit' },
                  'Save',
                ),
                addButtonElement: v.createElement(
                  vl,
                  { type: 'submit', primary: !0 },
                  'Save',
                ),
                plusMenuElement: v.createElement(HM, null),
                minusMenuElement: v.createElement(JM, null),
                inputElement: (_, T, O, I) =>
                  I
                    ? v.createElement(xv, { onFocus: XM, onBlur: YM })
                    : v.createElement(xv, null),
                fallback: b,
              }),
        )
      },
      ZM = W.input(({ theme: e, min: t, max: r, value: n, disabled: o }) => ({
        '&': {
          width: '100%',
          backgroundColor: 'transparent',
          appearance: 'none',
        },
        '&::-webkit-slider-runnable-track': {
          background:
            e.base === 'light'
              ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${bt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${bt(0.02, e.input.background)} 100%)`
              : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${cr(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${cr(0.02, e.input.background)} 100%)`,
          boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
          borderRadius: 6,
          width: '100%',
          height: 6,
          cursor: o ? 'not-allowed' : 'pointer',
        },
        '&::-webkit-slider-thumb': {
          marginTop: '-6px',
          width: 16,
          height: 16,
          border: `1px solid ${Pt(e.appBorderColor, 0.2)}`,
          borderRadius: '50px',
          boxShadow: `0 1px 3px 0px ${Pt(e.appBorderColor, 0.2)}`,
          cursor: o ? 'not-allowed' : 'grab',
          appearance: 'none',
          background: `${e.input.background}`,
          transition: 'all 150ms ease-out',
          '&:hover': {
            background: `${bt(0.05, e.input.background)}`,
            transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
            transition: 'all 50ms ease-out',
          },
          '&:active': {
            background: `${e.input.background}`,
            transform: 'scale3d(1, 1, 1) translateY(0px)',
            cursor: o ? 'not-allowed' : 'grab',
          },
        },
        '&:focus': {
          outline: 'none',
          '&::-webkit-slider-runnable-track': {
            borderColor: Pt(e.color.secondary, 0.4),
          },
          '&::-webkit-slider-thumb': {
            borderColor: e.color.secondary,
            boxShadow: `0 0px 5px 0px ${e.color.secondary}`,
          },
        },
        '&::-moz-range-track': {
          background:
            e.base === 'light'
              ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${bt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${bt(0.02, e.input.background)} 100%)`
              : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${cr(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${cr(0.02, e.input.background)} 100%)`,
          boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
          borderRadius: 6,
          width: '100%',
          height: 6,
          cursor: o ? 'not-allowed' : 'pointer',
          outline: 'none',
        },
        '&::-moz-range-thumb': {
          width: 16,
          height: 16,
          border: `1px solid ${Pt(e.appBorderColor, 0.2)}`,
          borderRadius: '50px',
          boxShadow: `0 1px 3px 0px ${Pt(e.appBorderColor, 0.2)}`,
          cursor: o ? 'not-allowed' : 'grap',
          background: `${e.input.background}`,
          transition: 'all 150ms ease-out',
          '&:hover': {
            background: `${bt(0.05, e.input.background)}`,
            transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
            transition: 'all 50ms ease-out',
          },
          '&:active': {
            background: `${e.input.background}`,
            transform: 'scale3d(1, 1, 1) translateY(0px)',
            cursor: 'grabbing',
          },
        },
        '&::-ms-track': {
          background:
            e.base === 'light'
              ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${bt(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${bt(0.02, e.input.background)} 100%)`
              : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${cr(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${cr(0.02, e.input.background)} 100%)`,
          boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
          color: 'transparent',
          width: '100%',
          height: '6px',
          cursor: 'pointer',
        },
        '&::-ms-fill-lower': { borderRadius: 6 },
        '&::-ms-fill-upper': { borderRadius: 6 },
        '&::-ms-thumb': {
          width: 16,
          height: 16,
          background: `${e.input.background}`,
          border: `1px solid ${Pt(e.appBorderColor, 0.2)}`,
          borderRadius: 50,
          cursor: 'grab',
          marginTop: 0,
        },
        '@supports (-ms-ime-align:auto)': {
          'input[type=range]': { margin: '0' },
        },
      })),
      C2 = W.span({
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 12,
        whiteSpace: 'nowrap',
        fontFeatureSettings: 'tnum',
        fontVariantNumeric: 'tabular-nums',
        '[aria-readonly=true] &': { opacity: 0.5 },
      }),
      e4 = W(C2)(({ numberOFDecimalsPlaces: e, max: t }) => ({
        width: `${e + t.toString().length * 2 + 3}ch`,
        textAlign: 'right',
        flexShrink: 0,
      })),
      t4 = W.div({ display: 'flex', alignItems: 'center', width: '100%' })
    function r4(e) {
      let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)
      return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
    }
    var n4 = ({
        name: e,
        value: t,
        onChange: r,
        min: n = 0,
        max: o = 100,
        step: a = 1,
        onBlur: i,
        onFocus: s,
        argType: l,
      }) => {
        let u = (f) => {
            r(fM(f.target.value))
          },
          c = t !== void 0,
          d = jt(() => r4(a), [a]),
          y = !!l?.table?.readonly
        return v.createElement(
          t4,
          { 'aria-readonly': y },
          v.createElement(C2, null, n),
          v.createElement(ZM, {
            id: tt(e),
            type: 'range',
            disabled: y,
            onChange: u,
            name: e,
            value: t,
            min: n,
            max: o,
            step: a,
            onFocus: s,
            onBlur: i,
          }),
          v.createElement(
            e4,
            { numberOFDecimalsPlaces: d, max: o },
            c ? t.toFixed(d) : '--',
            ' / ',
            o,
          ),
        )
      },
      o4 = W.label({ display: 'flex' }),
      a4 = W.div(({ isMaxed: e }) => ({
        marginLeft: '0.75rem',
        paddingTop: '0.35rem',
        color: e ? 'red' : void 0,
      })),
      i4 = ({
        name: e,
        value: t,
        onChange: r,
        onFocus: n,
        onBlur: o,
        maxLength: a,
        argType: i,
      }) => {
        let s = (f) => {
            r(f.target.value)
          },
          l = !!i?.table?.readonly,
          [u, c] = me(!1),
          d = Ve(() => {
            r(''), c(!0)
          }, [c])
        if (t === void 0)
          return v.createElement(
            Nt,
            {
              variant: 'outline',
              size: 'medium',
              disabled: l,
              id: ln(e),
              onClick: d,
            },
            'Set string',
          )
        let y = typeof t == 'string'
        return v.createElement(
          o4,
          null,
          v.createElement(ut.Textarea, {
            id: tt(e),
            maxLength: a,
            onChange: s,
            disabled: l,
            size: 'flex',
            placeholder: 'Edit string...',
            autoFocus: u,
            valid: y ? null : 'error',
            name: e,
            value: y ? t : '',
            onFocus: n,
            onBlur: o,
          }),
          a &&
            v.createElement(
              a4,
              { isMaxed: t?.length === a },
              t?.length ?? 0,
              ' / ',
              a,
            ),
        )
      },
      s4 = W(ut.Input)({ padding: 10 })
    function l4(e) {
      e.forEach((t) => {
        t.startsWith('blob:') && URL.revokeObjectURL(t)
      })
    }
    var u4 = ({
        onChange: e,
        name: t,
        accept: r = 'image/*',
        value: n,
        argType: o,
      }) => {
        let a = Xe(null),
          i = o?.control?.readOnly
        function s(l) {
          if (!l.target.files) return
          let u = Array.from(l.target.files).map((c) => URL.createObjectURL(c))
          e(u), l4(n)
        }
        return (
          He(() => {
            n == null && a.current && (a.current.value = null)
          }, [n, t]),
          v.createElement(s4, {
            ref: a,
            id: tt(t),
            type: 'file',
            name: t,
            multiple: !0,
            disabled: i,
            onChange: s,
            accept: r,
            size: 'flex',
          })
        )
      },
      c4 = Xl(() => Promise.resolve().then(() => (Z0(), Q0))),
      p4 = (e) =>
        v.createElement(
          Yl,
          { fallback: v.createElement('div', null) },
          v.createElement(c4, { ...e }),
        ),
      d4 = {
        array: wv,
        object: wv,
        boolean: aM,
        color: p4,
        date: pM,
        number: hM,
        check: Hr,
        'inline-check': Hr,
        radio: Hr,
        'inline-radio': Hr,
        select: Hr,
        'multi-select': Hr,
        range: n4,
        text: i4,
        file: u4,
      },
      Sv = () => v.createElement(v.Fragment, null, '-'),
      f4 = ({ row: e, arg: t, updateArgs: r, isHovered: n }) => {
        let { key: o, control: a } = e,
          [i, s] = me(!1),
          [l, u] = me({ value: t })
        He(() => {
          i || u({ value: t })
        }, [i, t])
        let c = Ve((g) => (u({ value: g }), r({ [o]: g }), g), [r, o]),
          d = Ve(() => s(!1), []),
          y = Ve(() => s(!0), [])
        if (!a || a.disable) {
          let g = a?.disable !== !0 && e?.type?.name !== 'function'
          return n && g
            ? v.createElement(
                Qt,
                {
                  href: 'https://storybook.js.org/docs/react/essentials/controls',
                  target: '_blank',
                  withArrow: !0,
                },
                'Setup controls',
              )
            : v.createElement(Sv, null)
        }
        let f = {
            name: o,
            argType: e,
            value: l.value,
            onChange: c,
            onBlur: d,
            onFocus: y,
          },
          h = d4[a.type] || Sv
        return v.createElement(h, { ...f, ...a, controlType: a.type })
      },
      y4 = W.table(({ theme: e }) => ({
        '&&': {
          borderCollapse: 'collapse',
          borderSpacing: 0,
          border: 'none',
          tr: { border: 'none !important', background: 'none' },
          'td, th': { padding: 0, border: 'none', width: 'auto!important' },
          marginTop: 0,
          marginBottom: 0,
          'th:first-of-type, td:first-of-type': { paddingLeft: 0 },
          'th:last-of-type, td:last-of-type': { paddingRight: 0 },
          td: {
            paddingTop: 0,
            paddingBottom: 4,
            '&:not(:first-of-type)': { paddingLeft: 10, paddingRight: 0 },
          },
          tbody: { boxShadow: 'none', border: 'none' },
          code: vr({ theme: e }),
          div: { span: { fontWeight: 'bold' } },
          '& code': {
            margin: 0,
            display: 'inline-block',
            fontSize: e.typography.size.s1,
          },
        },
      })),
      h4 = ({ tags: e }) => {
        let t = (e.params || []).filter((a) => a.description),
          r = t.length !== 0,
          n = e.deprecated != null,
          o = e.returns != null && e.returns.description != null
        return !r && !o && !n
          ? null
          : v.createElement(
              v.Fragment,
              null,
              v.createElement(
                y4,
                null,
                v.createElement(
                  'tbody',
                  null,
                  n &&
                    v.createElement(
                      'tr',
                      { key: 'deprecated' },
                      v.createElement(
                        'td',
                        { colSpan: 2 },
                        v.createElement('strong', null, 'Deprecated'),
                        ': ',
                        e.deprecated.toString(),
                      ),
                    ),
                  r &&
                    t.map((a) =>
                      v.createElement(
                        'tr',
                        { key: a.name },
                        v.createElement(
                          'td',
                          null,
                          v.createElement('code', null, a.name),
                        ),
                        v.createElement('td', null, a.description),
                      ),
                    ),
                  o &&
                    v.createElement(
                      'tr',
                      { key: 'returns' },
                      v.createElement(
                        'td',
                        null,
                        v.createElement('code', null, 'Returns'),
                      ),
                      v.createElement('td', null, e.returns.description),
                    ),
                ),
              ),
            )
      },
      Pl = 8,
      Av = W.div(({ isExpanded: e }) => ({
        display: 'flex',
        flexDirection: e ? 'column' : 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginBottom: '-4px',
        minWidth: 100,
      })),
      m4 = W.span(vr, ({ theme: e, simple: t = !1 }) => ({
        flex: '0 0 auto',
        fontFamily: e.typography.fonts.mono,
        fontSize: e.typography.size.s1,
        wordBreak: 'break-word',
        whiteSpace: 'normal',
        maxWidth: '100%',
        margin: 0,
        marginRight: '4px',
        marginBottom: '4px',
        paddingTop: '2px',
        paddingBottom: '2px',
        lineHeight: '13px',
        ...(t && {
          background: 'transparent',
          border: '0 none',
          paddingLeft: 0,
        }),
      })),
      g4 = W.button(({ theme: e }) => ({
        fontFamily: e.typography.fonts.mono,
        color: e.color.secondary,
        marginBottom: '4px',
        background: 'none',
        border: 'none',
      })),
      b4 = W.div(vr, ({ theme: e }) => ({
        fontFamily: e.typography.fonts.mono,
        color: e.color.secondary,
        fontSize: e.typography.size.s1,
        margin: 0,
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
      })),
      v4 = W.div(({ theme: e, width: t }) => ({
        width: t,
        minWidth: 200,
        maxWidth: 800,
        padding: 15,
        fontFamily: e.typography.fonts.mono,
        fontSize: e.typography.size.s1,
        boxSizing: 'content-box',
        '& code': { padding: '0 !important' },
      })),
      E4 = W(Fu)({ marginLeft: 4 }),
      x4 = W(ni)({ marginLeft: 4 }),
      w4 = () => v.createElement('span', null, '-'),
      _2 = ({ text: e, simple: t }) => v.createElement(m4, { simple: t }, e),
      S4 = (0, OB.default)(1e3)((e) => {
        let t = e.split(/\r?\n/)
        return `${Math.max(...t.map((r) => r.length))}ch`
      }),
      A4 = (e) => {
        if (!e) return [e]
        let t = e.split('|').map((r) => r.trim())
        return (0, Rv.default)(t)
      },
      Tv = (e, t = !0) => {
        let r = e
        return (
          t || (r = e.slice(0, Pl)),
          r.map((n) =>
            v.createElement(_2, { key: n, text: n === '' ? '""' : n }),
          )
        )
      },
      T4 = ({ value: e, initialExpandedArgs: t }) => {
        let { summary: r, detail: n } = e,
          [o, a] = me(!1),
          [i, s] = me(t || !1)
        if (r == null) return null
        let l = typeof r.toString == 'function' ? r.toString() : r
        if (n == null) {
          if (/[(){}[\]<>]/.test(l)) return v.createElement(_2, { text: l })
          let u = A4(l),
            c = u.length
          return c > Pl
            ? v.createElement(
                Av,
                { isExpanded: i },
                Tv(u, i),
                v.createElement(
                  g4,
                  { onClick: () => s(!i) },
                  i ? 'Show less...' : `Show ${c - Pl} more...`,
                ),
              )
            : v.createElement(Av, null, Tv(u))
        }
        return v.createElement(
          $a,
          {
            closeOnOutsideClick: !0,
            placement: 'bottom',
            visible: o,
            onVisibleChange: (u) => {
              a(u)
            },
            tooltip: v.createElement(
              v4,
              { width: S4(n) },
              v.createElement(oo, { language: 'jsx', format: !1 }, n),
            ),
          },
          v.createElement(
            b4,
            { className: 'sbdocs-expandable' },
            v.createElement('span', null, l),
            o ? v.createElement(E4, null) : v.createElement(x4, null),
          ),
        )
      },
      El = ({ value: e, initialExpandedArgs: t }) =>
        e == null
          ? v.createElement(w4, null)
          : v.createElement(T4, { value: e, initialExpandedArgs: t }),
      C4 = W.span({ fontWeight: 'bold' }),
      _4 = W.span(({ theme: e }) => ({
        color: e.color.negative,
        fontFamily: e.typography.fonts.mono,
        cursor: 'help',
      })),
      O4 = W.div(({ theme: e }) => ({
        '&&': { p: { margin: '0 0 10px 0' }, a: { color: e.color.secondary } },
        code: {
          ...vr({ theme: e }),
          fontSize: 12,
          fontFamily: e.typography.fonts.mono,
        },
        '& code': { margin: 0, display: 'inline-block' },
        '& pre > code': { whiteSpace: 'pre-wrap' },
      })),
      I4 = W.div(({ theme: e, hasDescription: t }) => ({
        color:
          e.base === 'light'
            ? xe(0.1, e.color.defaultText)
            : xe(0.2, e.color.defaultText),
        marginTop: t ? 4 : 0,
      })),
      k4 = W.div(({ theme: e, hasDescription: t }) => ({
        color:
          e.base === 'light'
            ? xe(0.1, e.color.defaultText)
            : xe(0.2, e.color.defaultText),
        marginTop: t ? 12 : 0,
        marginBottom: 12,
      })),
      P4 = W.td(({ theme: e, expandable: t }) => ({
        paddingLeft: t ? '40px !important' : '20px !important',
      })),
      R4 = (e) => e && { summary: typeof e == 'string' ? e : e.name },
      ba = (e) => {
        let [t, r] = me(!1),
          {
            row: n,
            updateArgs: o,
            compact: a,
            expandable: i,
            initialExpandedArgs: s,
          } = e,
          { name: l, description: u } = n,
          c = n.table || {},
          d = c.type || R4(n.type),
          y = c.defaultValue || n.defaultValue,
          f = n.type?.required,
          h = u != null && u !== ''
        return v.createElement(
          'tr',
          { onMouseEnter: () => r(!0), onMouseLeave: () => r(!1) },
          v.createElement(
            P4,
            { expandable: i },
            v.createElement(C4, null, l),
            f ? v.createElement(_4, { title: 'Required' }, '*') : null,
          ),
          a
            ? null
            : v.createElement(
                'td',
                null,
                h && v.createElement(O4, null, v.createElement(_B, null, u)),
                c.jsDocTags != null
                  ? v.createElement(
                      v.Fragment,
                      null,
                      v.createElement(
                        k4,
                        { hasDescription: h },
                        v.createElement(El, {
                          value: d,
                          initialExpandedArgs: s,
                        }),
                      ),
                      v.createElement(h4, { tags: c.jsDocTags }),
                    )
                  : v.createElement(
                      I4,
                      { hasDescription: h },
                      v.createElement(El, { value: d, initialExpandedArgs: s }),
                    ),
              ),
          a
            ? null
            : v.createElement(
                'td',
                null,
                v.createElement(El, { value: y, initialExpandedArgs: s }),
              ),
          o
            ? v.createElement(
                'td',
                null,
                v.createElement(f4, { ...e, isHovered: t }),
              )
            : null,
        )
      },
      D4 = W.div(({ inAddonPanel: e, theme: t }) => ({
        height: e ? '100%' : 'auto',
        display: 'flex',
        border: e ? 'none' : `1px solid ${t.appBorderColor}`,
        borderRadius: e ? 0 : t.appBorderRadius,
        padding: e ? 0 : 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 15,
        background: t.background.content,
        boxShadow: 'rgba(0, 0, 0, 0.10) 0 1px 3px 0',
      })),
      F4 = W.div(({ theme: e }) => ({
        display: 'flex',
        fontSize: e.typography.size.s2 - 1,
        gap: 25,
      })),
      j4 = W.div(({ theme: e }) => ({
        width: 1,
        height: 16,
        backgroundColor: e.appBorderColor,
      })),
      N4 = ({ inAddonPanel: e }) => {
        let [t, r] = me(!0)
        return (
          He(() => {
            let n = setTimeout(() => {
              r(!1)
            }, 100)
            return () => clearTimeout(n)
          }, []),
          t
            ? null
            : v.createElement(
                D4,
                { inAddonPanel: e },
                v.createElement(Ba, {
                  title: e
                    ? 'Interactive story playground'
                    : "Args table with interactive controls couldn't be auto-generated",
                  description: v.createElement(
                    v.Fragment,
                    null,
                    "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically.",
                  ),
                  footer: v.createElement(
                    F4,
                    null,
                    e &&
                      v.createElement(
                        v.Fragment,
                        null,
                        v.createElement(
                          Qt,
                          {
                            href: 'https://youtu.be/0gOfS6K0x0E',
                            target: '_blank',
                            withArrow: !0,
                          },
                          v.createElement(Mu, null),
                          ' Watch 5m video',
                        ),
                        v.createElement(j4, null),
                        v.createElement(
                          Qt,
                          {
                            href: 'https://storybook.js.org/docs/essentials/controls',
                            target: '_blank',
                            withArrow: !0,
                          },
                          v.createElement(ho, null),
                          ' Read docs',
                        ),
                      ),
                    !e &&
                      v.createElement(
                        Qt,
                        {
                          href: 'https://storybook.js.org/docs/essentials/controls',
                          target: '_blank',
                          withArrow: !0,
                        },
                        v.createElement(ho, null),
                        ' Learn how to set that up',
                      ),
                  ),
                }),
              )
        )
      },
      B4 = W(Ru)(({ theme: e }) => ({
        marginRight: 8,
        marginLeft: -10,
        marginTop: -2,
        height: 12,
        width: 12,
        color:
          e.base === 'light'
            ? xe(0.25, e.color.defaultText)
            : xe(0.3, e.color.defaultText),
        border: 'none',
        display: 'inline-block',
      })),
      L4 = W(Du)(({ theme: e }) => ({
        marginRight: 8,
        marginLeft: -10,
        marginTop: -2,
        height: 12,
        width: 12,
        color:
          e.base === 'light'
            ? xe(0.25, e.color.defaultText)
            : xe(0.3, e.color.defaultText),
        border: 'none',
        display: 'inline-block',
      })),
      q4 = W.span(({ theme: e }) => ({
        display: 'flex',
        lineHeight: '20px',
        alignItems: 'center',
      })),
      M4 = W.td(({ theme: e }) => ({
        position: 'relative',
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
        fontWeight: e.typography.weight.bold,
        fontSize: e.typography.size.s1 - 1,
        color:
          e.base === 'light'
            ? xe(0.4, e.color.defaultText)
            : xe(0.6, e.color.defaultText),
        background: `${e.background.app} !important`,
        '& ~ td': { background: `${e.background.app} !important` },
      })),
      U4 = W.td(({ theme: e }) => ({
        position: 'relative',
        fontWeight: e.typography.weight.bold,
        fontSize: e.typography.size.s2 - 1,
        background: e.background.app,
      })),
      $4 = W.td(() => ({ position: 'relative' })),
      z4 = W.tr(({ theme: e }) => ({
        '&:hover > td': {
          backgroundColor: `${cr(0.005, e.background.app)} !important`,
          boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`,
          cursor: 'row-resize',
        },
      })),
      Cv = W.button(() => ({
        background: 'none',
        border: 'none',
        padding: '0',
        font: 'inherit',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: '100%',
        width: '100%',
        color: 'transparent',
        cursor: 'row-resize !important',
      })),
      xl = ({
        level: e = 'section',
        label: t,
        children: r,
        initialExpanded: n = !0,
        colSpan: o = 3,
      }) => {
        let [a, i] = me(n),
          s = e === 'subsection' ? U4 : M4,
          l = r?.length || 0,
          u = e === 'subsection' ? `${l} item${l !== 1 ? 's' : ''}` : '',
          c = `${a ? 'Hide' : 'Show'} ${e === 'subsection' ? l : t} item${l !== 1 ? 's' : ''}`
        return v.createElement(
          v.Fragment,
          null,
          v.createElement(
            z4,
            { title: c },
            v.createElement(
              s,
              { colSpan: 1 },
              v.createElement(Cv, { onClick: (d) => i(!a), tabIndex: 0 }, c),
              v.createElement(
                q4,
                null,
                a ? v.createElement(B4, null) : v.createElement(L4, null),
                t,
              ),
            ),
            v.createElement(
              $4,
              { colSpan: o - 1 },
              v.createElement(
                Cv,
                {
                  onClick: (d) => i(!a),
                  tabIndex: -1,
                  style: { outline: 'none' },
                },
                c,
              ),
              a ? null : u,
            ),
          ),
          a ? r : null,
        )
      },
      va = W.div(({ theme: e }) => ({
        display: 'flex',
        gap: 16,
        borderBottom: `1px solid ${e.appBorderColor}`,
        '&:last-child': { borderBottom: 0 },
      })),
      Ge = W.div(({ numColumn: e }) => ({
        display: 'flex',
        flexDirection: 'column',
        flex: e || 1,
        gap: 5,
        padding: '12px 20px',
      })),
      Fe = W.div(({ theme: e, width: t, height: r }) => ({
        animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
        background: e.appBorderColor,
        width: t || '100%',
        height: r || 16,
        borderRadius: 3,
      })),
      We = [2, 4, 2, 2],
      V4 = () =>
        v.createElement(
          v.Fragment,
          null,
          v.createElement(
            va,
            null,
            v.createElement(
              Ge,
              { numColumn: We[0] },
              v.createElement(Fe, { width: '60%' }),
            ),
            v.createElement(
              Ge,
              { numColumn: We[1] },
              v.createElement(Fe, { width: '30%' }),
            ),
            v.createElement(
              Ge,
              { numColumn: We[2] },
              v.createElement(Fe, { width: '60%' }),
            ),
            v.createElement(
              Ge,
              { numColumn: We[3] },
              v.createElement(Fe, { width: '60%' }),
            ),
          ),
          v.createElement(
            va,
            null,
            v.createElement(
              Ge,
              { numColumn: We[0] },
              v.createElement(Fe, { width: '60%' }),
            ),
            v.createElement(
              Ge,
              { numColumn: We[1] },
              v.createElement(Fe, { width: '80%' }),
              v.createElement(Fe, { width: '30%' }),
            ),
            v.createElement(
              Ge,
              { numColumn: We[2] },
              v.createElement(Fe, { width: '60%' }),
            ),
            v.createElement(
              Ge,
              { numColumn: We[3] },
              v.createElement(Fe, { width: '60%' }),
            ),
          ),
          v.createElement(
            va,
            null,
            v.createElement(
              Ge,
              { numColumn: We[0] },
              v.createElement(Fe, { width: '60%' }),
            ),
            v.createElement(
              Ge,
              { numColumn: We[1] },
              v.createElement(Fe, { width: '80%' }),
              v.createElement(Fe, { width: '30%' }),
            ),
            v.createElement(
              Ge,
              { numColumn: We[2] },
              v.createElement(Fe, { width: '60%' }),
            ),
            v.createElement(
              Ge,
              { numColumn: We[3] },
              v.createElement(Fe, { width: '60%' }),
            ),
          ),
          v.createElement(
            va,
            null,
            v.createElement(
              Ge,
              { numColumn: We[0] },
              v.createElement(Fe, { width: '60%' }),
            ),
            v.createElement(
              Ge,
              { numColumn: We[1] },
              v.createElement(Fe, { width: '80%' }),
              v.createElement(Fe, { width: '30%' }),
            ),
            v.createElement(
              Ge,
              { numColumn: We[2] },
              v.createElement(Fe, { width: '60%' }),
            ),
            v.createElement(
              Ge,
              { numColumn: We[3] },
              v.createElement(Fe, { width: '60%' }),
            ),
          ),
        ),
      H4 = W.table(({ theme: e, compact: t, inAddonPanel: r }) => ({
        '&&': {
          borderSpacing: 0,
          color: e.color.defaultText,
          'td, th': {
            padding: 0,
            border: 'none',
            verticalAlign: 'top',
            textOverflow: 'ellipsis',
          },
          fontSize: e.typography.size.s2 - 1,
          lineHeight: '20px',
          textAlign: 'left',
          width: '100%',
          marginTop: r ? 0 : 25,
          marginBottom: r ? 0 : 40,
          'thead th:first-of-type, td:first-of-type': { width: '25%' },
          'th:first-of-type, td:first-of-type': { paddingLeft: 20 },
          'th:nth-of-type(2), td:nth-of-type(2)': {
            ...(t ? null : { width: '35%' }),
          },
          'td:nth-of-type(3)': { ...(t ? null : { width: '15%' }) },
          'th:last-of-type, td:last-of-type': {
            paddingRight: 20,
            ...(t ? null : { width: '25%' }),
          },
          th: {
            color:
              e.base === 'light'
                ? xe(0.25, e.color.defaultText)
                : xe(0.45, e.color.defaultText),
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 15,
            paddingRight: 15,
          },
          td: {
            paddingTop: '10px',
            paddingBottom: '10px',
            '&:not(:first-of-type)': { paddingLeft: 15, paddingRight: 15 },
            '&:last-of-type': { paddingRight: 20 },
          },
          marginLeft: r ? 0 : 1,
          marginRight: r ? 0 : 1,
          tbody: {
            ...(r
              ? null
              : {
                  filter:
                    e.base === 'light'
                      ? 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))'
                      : 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))',
                }),
            '> tr > *': {
              background: e.background.content,
              borderTop: `1px solid ${e.appBorderColor}`,
            },
            ...(r
              ? null
              : {
                  '> tr:first-of-type > *': {
                    borderBlockStart: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr:last-of-type > *': {
                    borderBlockEnd: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr > *:first-of-type': {
                    borderInlineStart: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr > *:last-of-type': {
                    borderInlineEnd: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr:first-of-type > td:first-of-type': {
                    borderTopLeftRadius: e.appBorderRadius,
                  },
                  '> tr:first-of-type > td:last-of-type': {
                    borderTopRightRadius: e.appBorderRadius,
                  },
                  '> tr:last-of-type > td:first-of-type': {
                    borderBottomLeftRadius: e.appBorderRadius,
                  },
                  '> tr:last-of-type > td:last-of-type': {
                    borderBottomRightRadius: e.appBorderRadius,
                  },
                }),
          },
        },
      })),
      J4 = W(yt)(({ theme: e }) => ({ margin: '-4px -12px -4px 0' })),
      G4 = W.span({ display: 'flex', justifyContent: 'space-between' }),
      W4 = {
        alpha: (e, t) => e.name.localeCompare(t.name),
        requiredFirst: (e, t) =>
          +!!t.type?.required - +!!e.type?.required ||
          e.name.localeCompare(t.name),
        none: void 0,
      },
      K4 = (e, t) => {
        let r = { ungrouped: [], ungroupedSubsections: {}, sections: {} }
        if (!e) return r
        Object.entries(e).forEach(([a, i]) => {
          let { category: s, subcategory: l } = i?.table || {}
          if (s) {
            let u = r.sections[s] || { ungrouped: [], subsections: {} }
            if (!l) u.ungrouped.push({ key: a, ...i })
            else {
              let c = u.subsections[l] || []
              c.push({ key: a, ...i }), (u.subsections[l] = c)
            }
            r.sections[s] = u
          } else if (l) {
            let u = r.ungroupedSubsections[l] || []
            u.push({ key: a, ...i }), (r.ungroupedSubsections[l] = u)
          } else r.ungrouped.push({ key: a, ...i })
        })
        let n = W4[t],
          o = (a) =>
            n
              ? Object.keys(a).reduce(
                  (i, s) => ({ ...i, [s]: a[s].sort(n) }),
                  {},
                )
              : a
        return {
          ungrouped: r.ungrouped.sort(n),
          ungroupedSubsections: o(r.ungroupedSubsections),
          sections: Object.keys(r.sections).reduce(
            (a, i) => ({
              ...a,
              [i]: {
                ungrouped: r.sections[i].ungrouped.sort(n),
                subsections: o(r.sections[i].subsections),
              },
            }),
            {},
          ),
        }
      },
      Y4 = (e, t, r) => {
        try {
          return w3(e, t, r)
        } catch (n) {
          return Vu.warn(n.message), !1
        }
      },
      X4 = (e) => {
        let {
          updateArgs: t,
          resetArgs: r,
          compact: n,
          inAddonPanel: o,
          initialExpandedArgs: a,
          sort: i = 'none',
          isLoading: s,
        } = e
        if ('error' in e) {
          let { error: E } = e
          return v.createElement(
            y2,
            null,
            E,
            '\xA0',
            v.createElement(
              Qt,
              {
                href: 'http://storybook.js.org/docs/',
                target: '_blank',
                withArrow: !0,
              },
              v.createElement(ho, null),
              ' Read the docs',
            ),
          )
        }
        if (s) return v.createElement(V4, null)
        let { rows: l, args: u, globals: c } = 'rows' in e && e,
          d = K4(
            (0, kv.default)(
              l,
              (E) => !E?.table?.disable && Y4(E, u || {}, c || {}),
            ),
            i,
          ),
          y = d.ungrouped.length === 0,
          f = Object.entries(d.sections).length === 0,
          h = Object.entries(d.ungroupedSubsections).length === 0
        if (y && f && h) return v.createElement(N4, { inAddonPanel: o })
        let g = 1
        t && (g += 1), n || (g += 2)
        let C = Object.keys(d.sections).length > 0,
          b = {
            updateArgs: t,
            compact: n,
            inAddonPanel: o,
            initialExpandedArgs: a,
          }
        return v.createElement(
          Ma,
          null,
          v.createElement(
            H4,
            {
              compact: n,
              inAddonPanel: o,
              className: 'docblock-argstable sb-unstyled',
            },
            v.createElement(
              'thead',
              { className: 'docblock-argstable-head' },
              v.createElement(
                'tr',
                null,
                v.createElement(
                  'th',
                  null,
                  v.createElement('span', null, 'Name'),
                ),
                n
                  ? null
                  : v.createElement(
                      'th',
                      null,
                      v.createElement('span', null, 'Description'),
                    ),
                n
                  ? null
                  : v.createElement(
                      'th',
                      null,
                      v.createElement('span', null, 'Default'),
                    ),
                t
                  ? v.createElement(
                      'th',
                      null,
                      v.createElement(
                        G4,
                        null,
                        'Control',
                        ' ',
                        !s &&
                          r &&
                          v.createElement(
                            J4,
                            { onClick: () => r(), title: 'Reset controls' },
                            v.createElement(oi, { 'aria-hidden': !0 }),
                          ),
                      ),
                    )
                  : null,
              ),
            ),
            v.createElement(
              'tbody',
              { className: 'docblock-argstable-body' },
              d.ungrouped.map((E) =>
                v.createElement(ba, {
                  key: E.key,
                  row: E,
                  arg: u && u[E.key],
                  ...b,
                }),
              ),
              Object.entries(d.ungroupedSubsections).map(([E, _]) =>
                v.createElement(
                  xl,
                  { key: E, label: E, level: 'subsection', colSpan: g },
                  _.map((T) =>
                    v.createElement(ba, {
                      key: T.key,
                      row: T,
                      arg: u && u[T.key],
                      expandable: C,
                      ...b,
                    }),
                  ),
                ),
              ),
              Object.entries(d.sections).map(([E, _]) =>
                v.createElement(
                  xl,
                  { key: E, label: E, level: 'section', colSpan: g },
                  _.ungrouped.map((T) =>
                    v.createElement(ba, {
                      key: T.key,
                      row: T,
                      arg: u && u[T.key],
                      ...b,
                    }),
                  ),
                  Object.entries(_.subsections).map(([T, O]) =>
                    v.createElement(
                      xl,
                      { key: T, label: T, level: 'subsection', colSpan: g },
                      O.map((I) =>
                        v.createElement(ba, {
                          key: I.key,
                          row: I,
                          arg: u && u[I.key],
                          expandable: C,
                          ...b,
                        }),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        )
      }
    W.div(({ theme: e }) => ({
      marginRight: 30,
      fontSize: `${e.typography.size.s1}px`,
      color:
        e.base === 'light'
          ? xe(0.4, e.color.defaultText)
          : xe(0.6, e.color.defaultText),
    }))
    W.div({
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    })
    W.div({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'baseline',
      '&:not(:last-child)': { marginBottom: '1rem' },
    })
    W.div(Er, ({ theme: e }) => ({
      ...Oa(e),
      margin: '25px 0 40px',
      padding: '30px 20px',
    }))
    W.div(({ theme: e }) => ({
      fontWeight: e.typography.weight.bold,
      color: e.color.defaultText,
    }))
    W.div(({ theme: e }) => ({
      color:
        e.base === 'light'
          ? xe(0.2, e.color.defaultText)
          : xe(0.6, e.color.defaultText),
    }))
    W.div({ flex: '0 0 30%', lineHeight: '20px', marginTop: 5 })
    W.div(({ theme: e }) => ({
      flex: 1,
      textAlign: 'center',
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      lineHeight: 1,
      overflow: 'hidden',
      color:
        e.base === 'light'
          ? xe(0.4, e.color.defaultText)
          : xe(0.6, e.color.defaultText),
      '> div': {
        display: 'inline-block',
        overflow: 'hidden',
        maxWidth: '100%',
        textOverflow: 'ellipsis',
      },
      span: { display: 'block', marginTop: 2 },
    }))
    W.div({ display: 'flex', flexDirection: 'row' })
    W.div(({ background: e }) => ({
      position: 'relative',
      flex: 1,
      '&::before': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: e,
        content: '""',
      },
    }))
    W.div(({ theme: e }) => ({
      ...Oa(e),
      display: 'flex',
      flexDirection: 'row',
      height: 50,
      marginBottom: 5,
      overflow: 'hidden',
      backgroundColor: 'white',
      backgroundImage:
        'repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)',
      backgroundClip: 'padding-box',
    }))
    W.div({
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      position: 'relative',
      marginBottom: 30,
    })
    W.div({ flex: 1, display: 'flex', flexDirection: 'row' })
    W.div({ display: 'flex', alignItems: 'flex-start' })
    W.div({ flex: '0 0 30%' })
    W.div({ flex: 1 })
    W.div(({ theme: e }) => ({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 20,
      fontWeight: e.typography.weight.bold,
      color:
        e.base === 'light'
          ? xe(0.4, e.color.defaultText)
          : xe(0.6, e.color.defaultText),
    }))
    W.div(({ theme: e }) => ({
      fontSize: e.typography.size.s2,
      lineHeight: '20px',
      display: 'flex',
      flexDirection: 'column',
    }))
    W.div(({ theme: e }) => ({
      fontFamily: e.typography.fonts.base,
      fontSize: e.typography.size.s2,
      color: e.color.defaultText,
      marginLeft: 10,
      lineHeight: 1.2,
    }))
    W.div(({ theme: e }) => ({
      ...Oa(e),
      overflow: 'hidden',
      height: 40,
      width: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none',
      '> img, > svg': { width: 20, height: 20 },
    }))
    W.div({
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      flex: '0 1 calc(20% - 10px)',
      minWidth: 120,
      margin: '0px 10px 30px 0',
    })
    W.div({ display: 'flex', flexFlow: 'row wrap' })
    ct &&
      ct.__DOCS_CONTEXT__ === void 0 &&
      ((ct.__DOCS_CONTEXT__ = un(null)),
      (ct.__DOCS_CONTEXT__.displayName = 'DocsContext'))
    var Q4 = ct ? ct.__DOCS_CONTEXT__ : un(null)
    un({ sources: {} })
    var { document: Z4 } = ct
    function e6(e, t) {
      e.channel.emit(au, t)
    }
    Va.a
    var O2 = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      t6 = O2.reduce(
        (e, t) => ({
          ...e,
          [t]: W(t)({
            '& svg': {
              position: 'relative',
              top: '-0.1em',
              visibility: 'hidden',
            },
            '&:hover svg': { visibility: 'visible' },
          }),
        }),
        {},
      ),
      r6 = W.a(() => ({
        float: 'left',
        lineHeight: 'inherit',
        paddingRight: '10px',
        marginLeft: '-24px',
        color: 'inherit',
      })),
      n6 = ({ as: e, id: t, children: r, ...n }) => {
        let o = Ql(Q4),
          a = t6[e],
          i = `#${t}`
        return v.createElement(
          a,
          { id: t, ...n },
          v.createElement(
            r6,
            {
              'aria-hidden': 'true',
              href: i,
              tabIndex: -1,
              target: '_self',
              onClick: (s) => {
                Z4.getElementById(t) && e6(o, i)
              },
            },
            v.createElement(Bu, null),
          ),
          r,
        )
      },
      I2 = (e) => {
        let { as: t, id: r, children: n, ...o } = e
        if (r) return v.createElement(n6, { as: t, id: r, ...o }, n)
        let a = t,
          { as: i, ...s } = e
        return v.createElement(a, { ...Ha(s, t) })
      }
    O2.reduce(
      (e, t) => ({ ...e, [t]: (r) => v.createElement(I2, { as: t, ...r }) }),
      {},
    )
    var o6 = ((e) => (
      (e.INFO = 'info'),
      (e.NOTES = 'notes'),
      (e.DOCGEN = 'docgen'),
      (e.AUTO = 'auto'),
      e
    ))(o6 || {})
    Wl(qq())
    W.div(({ theme: e }) => ({
      width: '10rem',
      '@media (max-width: 768px)': { display: 'none' },
    }))
    W.div(({ theme: e }) => ({
      position: 'fixed',
      bottom: 0,
      top: 0,
      width: '10rem',
      paddingTop: '4rem',
      paddingBottom: '2rem',
      overflowY: 'auto',
      fontFamily: e.typography.fonts.base,
      fontSize: e.typography.size.s2,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      WebkitOverflowScrolling: 'touch',
      '& *': { boxSizing: 'border-box' },
      '& > .toc-wrapper > .toc-list': {
        paddingLeft: 0,
        borderLeft: `solid 2px ${e.color.mediumlight}`,
        '.toc-list': {
          paddingLeft: 0,
          borderLeft: `solid 2px ${e.color.mediumlight}`,
          '.toc-list': {
            paddingLeft: 0,
            borderLeft: `solid 2px ${e.color.mediumlight}`,
          },
        },
      },
      '& .toc-list-item': {
        position: 'relative',
        listStyleType: 'none',
        marginLeft: 20,
        paddingTop: 3,
        paddingBottom: 3,
      },
      '& .toc-list-item::before': {
        content: '""',
        position: 'absolute',
        height: '100%',
        top: 0,
        left: 0,
        transform: 'translateX(calc(-2px - 20px))',
        borderLeft: `solid 2px ${e.color.mediumdark}`,
        opacity: 0,
        transition: 'opacity 0.2s',
      },
      '& .toc-list-item.is-active-li::before': { opacity: 1 },
      '& .toc-list-item > a': {
        color: e.color.defaultText,
        textDecoration: 'none',
      },
      '& .toc-list-item.is-active-li > a': {
        fontWeight: 600,
        color: e.color.secondary,
        textDecoration: 'none',
      },
    }))
    W.p(({ theme: e }) => ({
      fontWeight: 600,
      fontSize: '0.875em',
      color: e.textColor,
      textTransform: 'uppercase',
      marginBottom: 10,
    }))
    var a6 = ({ children: e, disableAnchor: t, ...r }) => {
      if (t || typeof e != 'string') return v.createElement(qa, null, e)
      let n = e.toLowerCase().replace(/[^a-z0-9]/gi, '-')
      return v.createElement(I2, { as: 'h2', id: n, ...r }, e)
    }
    W(a6)(({ theme: e }) => ({
      fontSize: `${e.typography.size.s2 - 1}px`,
      fontWeight: e.typography.weight.bold,
      lineHeight: '16px',
      letterSpacing: '0.35em',
      textTransform: 'uppercase',
      color: e.textMutedColor,
      border: 0,
      marginBottom: '12px',
      '&:first-of-type': { marginTop: '56px' },
    }))
    var i6 = Qa({
        from: { transform: 'translateY(40px)' },
        to: { transform: 'translateY(0)' },
      }),
      s6 = Qa({ from: { background: 'var(--highlight-bg-color)' }, to: {} }),
      l6 = W.div({
        containerType: 'size',
        position: 'sticky',
        bottom: 0,
        height: 39,
        overflow: 'hidden',
        zIndex: 1,
      }),
      u6 = W(Na)(({ theme: e }) => ({
        '--highlight-bg-color': e.base === 'dark' ? '#153B5B' : '#E0F0FF',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 6,
        padding: '6px 10px',
        animation: `${i6} 300ms, ${s6} 2s`,
        background: e.background.bar,
        borderTop: `1px solid ${e.appBorderColor}`,
        fontSize: e.typography.size.s2,
        '@container (max-width: 799px)': {
          flexDirection: 'row',
          justifyContent: 'flex-end',
        },
      })),
      c6 = W.div({
        display: 'flex',
        flex: '99 0 auto',
        alignItems: 'center',
        marginLeft: 10,
        gap: 6,
      }),
      p6 = W.div(({ theme: e }) => ({
        display: 'flex',
        flex: '1 0 0',
        alignItems: 'center',
        gap: 2,
        color: e.color.mediumdark,
        fontSize: e.typography.size.s2,
      })),
      wl = W.div({
        '@container (max-width: 799px)': {
          lineHeight: 0,
          textIndent: '-9999px',
          '&::after': {
            content: 'attr(data-short-label)',
            display: 'block',
            lineHeight: 'initial',
            textIndent: '0',
          },
        },
      }),
      d6 = W(ut.Input)(({ theme: e }) => ({
        '::placeholder': { color: e.color.mediumdark },
        '&:invalid:not(:placeholder-shown)': {
          boxShadow: `${e.color.negative} 0 0 0 1px inset`,
        },
      })),
      f6 = ({ saveStory: e, createStory: t, resetArgs: r }) => {
        let n = v.useRef(null),
          [o, a] = v.useState(!1),
          [i, s] = v.useState(!1),
          [l, u] = v.useState(''),
          [c, d] = v.useState(null),
          y = async () => {
            o || (a(!0), await e().catch(() => {}), a(!1))
          },
          f = () => {
            s(!0), u(''), setTimeout(() => n.current?.focus(), 0)
          },
          h = (g) => {
            let C = g.target.value
              .replace(/^[^a-z]/i, '')
              .replace(/[^a-z0-9-_ ]/gi, '')
              .replaceAll(/([-_ ]+[a-z0-9])/gi, (b) =>
                b.toUpperCase().replace(/[-_ ]/g, ''),
              )
            u(C.charAt(0).toUpperCase() + C.slice(1))
          }
        return v.createElement(
          l6,
          { id: 'save-from-controls' },
          v.createElement(
            u6,
            null,
            v.createElement(
              p6,
              null,
              v.createElement(
                Bt,
                {
                  as: 'div',
                  hasChrome: !1,
                  trigger: 'hover',
                  tooltip: v.createElement(Zt, {
                    note: 'Save changes to story',
                  }),
                },
                v.createElement(
                  yt,
                  {
                    'aria-label': 'Save changes to story',
                    disabled: o,
                    onClick: y,
                  },
                  v.createElement(Pu, null),
                  v.createElement(
                    wl,
                    { 'data-short-label': 'Save' },
                    'Update story',
                  ),
                ),
              ),
              v.createElement(
                Bt,
                {
                  as: 'div',
                  hasChrome: !1,
                  trigger: 'hover',
                  tooltip: v.createElement(Zt, {
                    note: 'Create new story with these settings',
                  }),
                },
                v.createElement(
                  yt,
                  {
                    'aria-label': 'Create new story with these settings',
                    onClick: f,
                  },
                  v.createElement(ri, null),
                  v.createElement(
                    wl,
                    { 'data-short-label': 'New' },
                    'Create new story',
                  ),
                ),
              ),
              v.createElement(
                Bt,
                {
                  as: 'div',
                  hasChrome: !1,
                  trigger: 'hover',
                  tooltip: v.createElement(Zt, { note: 'Reset changes' }),
                },
                v.createElement(
                  yt,
                  { 'aria-label': 'Reset changes', onClick: () => r() },
                  v.createElement(oi, null),
                  v.createElement('span', null, 'Reset'),
                ),
              ),
            ),
            v.createElement(
              c6,
              null,
              v.createElement(
                wl,
                { 'data-short-label': 'Unsaved changes' },
                'You modified this story. Do you want to save your changes?',
              ),
            ),
            v.createElement(
              ht,
              { width: 350, open: i, onOpenChange: s },
              v.createElement(
                ut,
                {
                  onSubmit: async (g) => {
                    if ((g.preventDefault(), !o))
                      try {
                        d(null),
                          a(!0),
                          await t(
                            l
                              .replace(/^[^a-z]/i, '')
                              .replaceAll(/[^a-z0-9]/gi, ''),
                          ),
                          s(!1),
                          a(!1)
                      } catch (C) {
                        d(C.message), a(!1)
                      }
                  },
                  id: 'create-new-story-form',
                },
                v.createElement(
                  ht.Content,
                  null,
                  v.createElement(
                    ht.Header,
                    null,
                    v.createElement(ht.Title, null, 'Create new story'),
                    v.createElement(
                      ht.Description,
                      null,
                      'This will add a new story to your existing stories file.',
                    ),
                  ),
                  v.createElement(d6, {
                    onChange: h,
                    placeholder: 'Story export name',
                    readOnly: o,
                    ref: n,
                    value: l,
                  }),
                  v.createElement(
                    ht.Actions,
                    null,
                    v.createElement(
                      Nt,
                      {
                        disabled: o || !l,
                        size: 'medium',
                        type: 'submit',
                        variant: 'solid',
                      },
                      'Create',
                    ),
                    v.createElement(
                      ht.Dialog.Close,
                      { asChild: !0 },
                      v.createElement(
                        Nt,
                        { disabled: o, size: 'medium', type: 'reset' },
                        'Cancel',
                      ),
                    ),
                  ),
                ),
              ),
              c && v.createElement(ht.Error, null, c),
            ),
          ),
        )
      },
      _v = 'addon-controls',
      k2 = 'controls',
      Ov = (e) =>
        Object.entries(e).reduce(
          (t, [r, n]) => (n !== void 0 ? Object.assign(t, { [r]: n }) : t),
          {},
        ),
      y6 = W.div({
        display: 'grid',
        gridTemplateRows: '1fr 39px',
        height: '100%',
        maxHeight: '100vh',
        overflowY: 'auto',
      }),
      h6 = ({ saveStory: e, createStory: t }) => {
        let [r, n] = me(!0),
          [o, a, i, s] = wu(),
          [l] = Su(),
          u = Xa(),
          {
            expanded: c,
            sort: d,
            presetColors: y,
            disableSaveFromUI: f = !1,
          } = Au(k2, {}),
          { path: h, previewInitialized: g } = Tu()
        He(() => {
          g && n(!1)
        }, [g])
        let C = Object.values(u).some((_) => _?.control),
          b = Object.entries(u).reduce((_, [T, O]) => {
            let I = O?.control
            return (
              typeof I != 'object' || I?.type !== 'color' || I?.presetColors
                ? (_[T] = O)
                : (_[T] = { ...O, control: { ...I, presetColors: y } }),
              _
            )
          }, {}),
          E = jt(() => !!o && !!s && !er(Ov(o), Ov(s)), [o, s])
        return v.createElement(
          y6,
          null,
          v.createElement(X4, {
            key: h,
            compact: !c && C,
            rows: b,
            args: o,
            globals: l,
            updateArgs: a,
            resetArgs: i,
            inAddonPanel: !0,
            sort: d,
            isLoading: r,
          }),
          C &&
            E &&
            ct.CONFIG_TYPE === 'DEVELOPMENT' &&
            f !== !0 &&
            v.createElement(f6, { resetArgs: i, saveStory: e, createStory: t }),
        )
      }
    function m6() {
      let e = Xa(),
        t = Object.values(e).filter(
          (r) => r?.control && !r?.table?.disable,
        ).length
      return v.createElement(
        'div',
        null,
        v.createElement(
          Ua,
          { col: 1 },
          v.createElement(
            'span',
            { style: { display: 'inline-block', verticalAlign: 'middle' } },
            'Controls',
          ),
          t === 0 ? '' : v.createElement(ja, { status: 'neutral' }, t),
        ),
      )
    }
    var Iv = (e) =>
      JSON.stringify(e, (t, r) =>
        typeof r == 'function' ? '__sb_empty_function_arg__' : r,
      )
    fo.register(_v, (e) => {
      let t = fo.getChannel(),
        r = async () => {
          let o = e.getCurrentStoryData()
          if (o.type !== 'story') throw new Error('Not a story')
          try {
            let a = await Ya(t, Wa, uo, {
              args: Iv(
                Object.entries(o.args || {}).reduce(
                  (i, [s, l]) => (er(l, o.initialArgs?.[s]) || (i[s] = l), i),
                  {},
                ),
              ),
              csfId: o.id,
              importPath: o.importPath,
            })
            e.addNotification({
              id: 'save-story-success',
              icon: { name: 'passed', color: yo.positive },
              content: {
                headline: 'Story saved',
                subHeadline: v.createElement(
                  v.Fragment,
                  null,
                  'Updated story ',
                  v.createElement('b', null, a.sourceStoryName),
                  '.',
                ),
              },
              duration: 8e3,
            })
          } catch (a) {
            throw (
              (e.addNotification({
                id: 'save-story-error',
                icon: { name: 'failed', color: yo.negative },
                content: {
                  headline: 'Failed to save story',
                  subHeadline:
                    a?.message ||
                    'Check the Storybook process on the command line for more details.',
                },
                duration: 8e3,
              }),
              a)
            )
          }
        },
        n = async (o) => {
          let a = e.getCurrentStoryData()
          if (a.type !== 'story') throw new Error('Not a story')
          let i = await Ya(t, Wa, uo, {
            args: a.args && Iv(a.args),
            csfId: a.id,
            importPath: a.importPath,
            name: o,
          })
          e.addNotification({
            id: 'save-story-success',
            icon: { name: 'passed', color: yo.positive },
            content: {
              headline: 'Story created',
              subHeadline: v.createElement(
                v.Fragment,
                null,
                'Added story ',
                v.createElement('b', null, i.newStoryName),
                ' based on ',
                v.createElement('b', null, i.sourceStoryName),
                '.',
              ),
            },
            duration: 8e3,
            onClick: ({ onDismiss: s }) => {
              s(), e.selectStory(i.newStoryId)
            },
          })
        }
      fo.add(_v, {
        title: m6,
        type: xu.PANEL,
        paramKey: k2,
        render: ({ active: o }) =>
          !o || !e.getCurrentStoryData()
            ? null
            : v.createElement(
                Fa,
                { active: o },
                v.createElement(h6, { saveStory: r, createStory: n }),
              ),
      }),
        t.on(uo, (o) => {
          if (!o.success) return
          let a = e.getCurrentStoryData()
          a.type === 'story' &&
            (e.resetStoryArgs(a),
            o.payload.newStoryId && e.selectStory(o.payload.newStoryId))
        })
    })
  })()
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e,
  )
}